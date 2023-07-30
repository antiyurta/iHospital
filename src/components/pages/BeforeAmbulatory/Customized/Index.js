import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal, Result } from 'antd';
import { ReturnById } from '../../611/Document/Index';
import { isObjectEmpty, openNofi } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentAppId } from '../../../../features/authReducer';
import FormRender from './FormRender';
import { PrinterOutlined } from '@ant-design/icons';
import jwtInterceopter from '../../../jwtInterceopter';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import { NewColumn, NewColumnGroup, NewTable } from '../../../Table/Table';
import PmsPatientServices from '../../../../services/pms/patient';
//
import DocumentFormServices from '../../../../services/organization/documentForm';
import DocumentOptionServices from '../../../../services/organization/documentOption';
//
function Index(props) {
   const { usageType, documentValue, structureId, appointmentId, patientId } = props;
   const printRef = useRef();
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
   const pageStyle = `
  @page {
    margin: 0px;
  }
`;
   const handlePrint = useReactToPrint({
      // onBeforeGetContent: () => setPrintLoading(true),
      // onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });
   //
   const getPatientInfo = async () => {
      await PmsPatientServices.getById(patientId).then((response) => {
         setPrintData({
            patientData: response.data.response,
            formData: data
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
            const data = response.data.response.data;
            setData(data);
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
      await DocumentFormServices.getByPageFilter(conf)
         .then((response) => {
            if (response.data.response?.data?.length > 0) {
               setDocumentForm(response.data.response?.data[0]);
            }
         })
         .catch((error) => {
            console.log(error);
         });
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
      await DocumentOptionServices.getByPageFilter(conf)
         .then((response) => {
            setDocumentOptions(response.data.response?.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const onFinish = async (values) => {
      setIsLoading(true);
      const data = {
         isDoctorWrite: true,
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
      return documentForm?.documentForm?.map((item, index) => {
         return (
            <NewColumnGroup key={index} title={item.label}>
               {item?.options?.map((option, idx) => {
                  return (
                     <NewColumn
                        key={idx}
                        title={option.value}
                        dataIndex={['data', `${option.keyWord}`]}
                        render={(text) => {
                           if (option.isInteger) {
                              return option.options?.map((itm) => {
                                 if (parseInt(itm.keyWord) === text) {
                                    return itm.label;
                                 }
                              });
                           }
                           return text;
                        }}
                     />
                  );
               })}
            </NewColumnGroup>
         );
      });
      // columns.push(...findSupportColumns(1));
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
                  <Button type="primary" onClick={() => setIsOpenSelectPositionModal(true)}>
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
               <Button onClick={() => getData()}>Сэргээх</Button>
            </div>
         </div>
         <div>
            <NewTable
               prop={{
                  rowKey: '_id',
                  bordered: true,
                  dataSource: data
               }}
               meta={{
                  page: 1,
                  limit: data.length
               }}
               isLoading={isLoading}
               isPagination={false}
            >
               <NewColumn
                  width={120}
                  dataIndex={'createdAt'}
                  title={'Огноо'}
                  render={(text) => {
                     return moment(text).format('YYYY-MM-DD HH:mm');
                  }}
               />
               {columnConfigure()}
            </NewTable>
         </div>
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
               <ReturnById type={usageType} id={documentValue} appointmentId={appointmentId} data={printData} />
            </div>
         </Modal>
      </div>
   );
}
export default Index;
