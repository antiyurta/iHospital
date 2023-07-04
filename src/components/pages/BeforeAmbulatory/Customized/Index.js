import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal, Result, Table } from 'antd';
import { ReturnById } from '../../611/Document/Index';
import { Get, isObjectEmpty, openNofi } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentToken } from '../../../../features/authReducer';
import FormRender from './FormRender';
import { PrinterOutlined } from '@ant-design/icons';
import jwtInterceopter from '../../../jwtInterceopter';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
function Index(props) {
   const { usageType, documentValue, structureId, appointmentId, patientId } = props;
   const printRef = useRef();
   const token = useSelector(selectCurrentToken);
   const AppIds = useSelector(selectCurrentAppId);
   const [form] = Form.useForm();
   const [isCreate, setIsCreate] = useState(true);
   const [data, setData] = useState([]);
   //
   const [printData, setPrintData] = useState({});
   //
   const [isLoading, setIsLoading] = useState(false);
   const [documentForm, setDocumentForm] = useState([]);
   const [documentOptions, setDocumentOptions] = useState([]);
   const [selectedOptionId, setSelectedOptionId] = useState(Number);
   const [isOpenSelectPositionModal, setIsOpenSelectPositionModal] = useState(false);
   const [isOpenFormModal, setIsOpenFormModal] = useState(false);
   //
   const [isOpenPrintModal, setIsOpenPrintModal] = useState(false);
   //
   const handlePrint = useReactToPrint({
      // onBeforeGetContent: () => setPrintLoading(true),
      // onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });
   //
   const getPatientInfo = async () => {
      await jwtInterceopter.get('pms/patient/' + patientId).then((response) => {
         setPrintData({
            patientData: response.data.response,
            formData: data[0]?.data
         });
         setIsOpenPrintModal(true);
      });
   };
   //
   const getData = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               usageType: usageType,
               appointmentId: appointmentId,
               documentId: documentValue,
               patientId: patientId
            }
         })
         .then((response) => {
            console.log(response);
            const data = response.data.response.data;
            if (data?.length > 0) {
               setIsCreate(false);
               setData(response.data.response.data);
            }
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const getDocumentForm = async () => {
      const conf = {
         headers: {},
         params: {
            documentValue: documentValue
         }
      };
      const response = await Get('organization/document-form', token, conf);
      if (response.data?.length > 0) {
         setDocumentForm(response.data[0]);
      }
   };
   const getDocumentOption = async () => {
      const conf = {
         headers: {},
         params: {
            structureId: structureId,
            employeePositionIds: AppIds,
            documentValue: documentValue
         }
      };
      const response = await Get('organization/document-option', token, conf);
      setDocumentOptions(response.data);
   };
   const onFinish = async (values) => {
      setIsLoading(true);
      const data = {
         appointmentId: appointmentId,
         usageType: usageType,
         documentId: documentValue,
         patientId: patientId,
         data: values
      };
      await jwtInterceopter
         .post(documentForm.url, data)
         .then((response) => {
            if (response.status === 201) {
               setIsOpenFormModal(false);
               getData();
            }
            console.log(response);
         })
         .catch((error) => {
            if (error.response.status === 409) {
               openNofi('error', 'Алдаа', 'Мэдээлэл бөглөгдсөн байна');
            }
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const findSupportColumns = (id) => {
      console.log(id);
      return [
         {
            title: 'Үзлэгийн давтамж',
            dataIndex: 'supportTime'
         },
         {
            title: 'Өнгө',
            dataIndex: 'color',
            render: (text) => {
               return (
                  <p
                     style={{
                        backgroundColor: text,
                        color: text
                     }}
                  >
                     color
                  </p>
               );
            }
         }
      ];
   };
   const columnConfigure = () => {
      var columns = [
         {
            title: 'Огноо',
            dataIndex: 'createdAt',
            render: (text) => {
               return moment(text).format('YYYY-MM-DD HH:mm');
            }
         }
      ];
      documentForm?.documentForm?.map((item, _index) => {
         columns.push({
            title: item.label,
            children: item?.options?.map((option) => {
               return {
                  title: option.value,
                  dataIndex: ['data', `${option.keyWord}`],
                  render: (text) => {
                     if (option.isInteger) {
                        return option.options?.map((itm) => {
                           if (parseInt(itm.keyWord) === text) {
                              return itm.label;
                           }
                        });
                     }
                     return text;
                  }
               };
            })
         });
      });
      // columns.push(...findSupportColumns(1));
      return columns;
   };
   useEffect(() => {
      if (documentValue != 0) {
         getDocumentForm();
         getDocumentOption();
      }
   }, [documentValue]);
   useEffect(() => {
      if (!isObjectEmpty(documentForm)) {
         getData();
      }
   }, [documentForm]);
   if (documentValue === 0) {
      return <Result title="Маягт сонгоно уу" />;
   }
   return (
      <div className="flex flex-col gap-3">
         <div className="flow-root">
            <div className="float-left">
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     gap: '6px'
                  }}
               >
                  <Button type="primary" disabled={!isCreate} onClick={() => setIsOpenSelectPositionModal(true)}>
                     Бөглөх
                  </Button>
                  <Button
                     icon={<PrinterOutlined />}
                     onClick={() => {
                        getPatientInfo();
                     }}
                  >
                     Хэвлэх
                  </Button>
               </div>
            </div>
            <div className="float-right">
               <Button>Сэргээх</Button>
            </div>
         </div>
         <div>
            <Table
               rowKey={'_id'}
               bordered
               loading={{
                  spinning: isLoading,
                  tip: 'Уншиж байна...'
               }}
               columns={columnConfigure()}
               dataSource={data}
            />
         </div>
         {/* <div
            style={
               usageType === 'OUT'
                  ? {
                       zoom: '50%'
                    }
                  : { width: '100%' }
            }
         >
            <ReturnById type={usageType === 'OUT' ? true : false} id={documentValue} />
         </div> */}
         <Modal
            title="Маягт бөглөх"
            open={isOpenFormModal}
            onCancel={() => setIsOpenFormModal(false)}
            onOk={() => form.validateFields().then((values) => onFinish(values))}
         >
            <Form form={form} layout="vertical">
               <FormRender form={documentForm} formOptionIds={documentOptions[selectedOptionId]?.formOptionIds} />
            </Form>
         </Modal>
         <Modal
            title="Хэнээр бөглөх"
            open={isOpenSelectPositionModal}
            onCancel={() => setIsOpenSelectPositionModal(false)}
            footer={null}
         >
            <div className="grid grid-cols-2 gap-6">
               {documentOptions?.map((option, index) => {
                  return (
                     <Button
                        key={index}
                        type="primary"
                        onClick={() => {
                           setSelectedOptionId(index);
                           setIsOpenSelectPositionModal(false);
                           setIsOpenFormModal(true);
                        }}
                     >
                        {option.structure?.name}
                     </Button>
                  );
               })}
            </div>
         </Modal>
         <Modal
            title="Маягт хэвлэх хэсэг"
            open={isOpenPrintModal}
            onCancel={() => setIsOpenPrintModal(false)}
            onOk={() => handlePrint()}
            style={{
               width: 'max-content'
            }}
         >
            <div ref={printRef}>
               <ReturnById type={usageType} id={documentValue} data={printData} />
            </div>
         </Modal>
      </div>
   );
}
export default Index;
