import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal, Result } from 'antd';
import { ReturnById } from '../../611/Document/Index';
import { isObjectEmpty, openNofi } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentHospitalName } from '../../../../features/authReducer';
import FormRender from './FormRender';
import { PrinterOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import { NewColumn, NewColumnGroup, NewTable } from '../../../Table/Table';
//
import jwtInterceopter from '../../../jwtInterceopter';
import PmsPatientServices from '../../../../services/pms/patient';
import DocumentFormServices from '../../../../services/organization/documentForm';
import DocumentOptionServices from '../../../../services/organization/documentOption';
//
function Index(props) {
   const { usageType, documentValue, structureId, appointmentId, patientId, onOk } = props;
   const hospitalName = useSelector(selectCurrentHospitalName);
   const printRef = useRef();
   const AppIds = useSelector(selectCurrentAppId);
   const [form] = Form.useForm();
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [documentForm, setDocumentForm] = useState([]);
   const [documentOptions, setDocumentOptions] = useState([]);
   const [selectedOptionId, setSelectedOptionId] = useState(Number);
   const [isOpenSelectPositionModal, setIsOpenSelectPositionModal] = useState(false);
   const [isOpenFormModal, setIsOpenFormModal] = useState(false);
   //
   const [isOpenPrintModal, setIsOpenPrintModal] = useState(false);
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
         .get(documentForm.url, {
            params: {
               usageType: usageType,
               appointmentId: appointmentId,
               documentId: documentValue,
               patientId: patientId
            }
         })
         .then((response) => {
            const data = response.data.response;
            setData(data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const getDocumentForm = async () => {
      await DocumentFormServices.getByPageFilter({
         params: {
            documentValue: documentValue
         }
      })
         .then((response) => {
            if (response.data.response?.length > 0) {
               setDocumentForm(response.data.response[0]);
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
      if (documentForm.isMulti) {
         await jwtInterceopter
            .get(documentForm.url, {
               params: {
                  appointmentId: appointmentId,
                  usageType: usageType,
                  documentId: documentValue,
                  patientId: patientId
               }
            })
            .then(async (response) => {
               const incomeData = response.data.response;
               if (incomeData?.length > 0) {
                  console.log(incomeData[0].data);
                  console.log(values);
                  await jwtInterceopter
                     .patch(documentForm.url + '/' + incomeData[0]._id, {
                        data: {
                           ...incomeData[0].data,
                           ...values
                        }
                     })
                     .then((res) => {
                        if (res.status === 200) {
                           setIsOpenFormModal(false);
                        }
                     });
               } else {
                  await jwtInterceopter
                     .post(documentForm.url, data)
                     .then((response) => {
                        if (response.status === 201) {
                           setIsOpenFormModal(false);
                        }
                     })
                     .catch((error) => {
                        if (error.response.status === 409) {
                           openNofi('error', 'Алдаа', 'Мэдээлэл бөглөгдсөн байна');
                        }
                     })
                     .finally(() => {
                        setIsLoading(false);
                     });
               }
            });
      } else {
         await jwtInterceopter
            .post(documentForm.url, data)
            .then((response) => {
               if (response.status === 201) {
                  onOk(false);
                  openNofi('success', 'Амжилттай', 'Маягт амжилттай хадгалагдлаа');
               }
            })
            .catch((error) => {
               if (error.response.status === 409) {
                  openNofi('error', 'Алдаа', 'Мэдээлэл бөглөгдсөн байна');
               }
            })
            .finally(() => {
               setIsLoading(false);
            });
      }
      getData();
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
   const equalerNumber = (text, option) => {
      return option.options?.find((itm) => parseInt(itm.keyWord) === text)?.label;
   };
   const columnConfigure = () => {
      return documentForm?.documentForm?.map((item, index) => {
         return (
            <NewColumnGroup key={index} title={item.label}>
               {item?.options?.map((option, idx) => {
                  return (
                     <NewColumn
                        key={idx}
                        align="left"
                        title={option.value}
                        dataIndex={['data', `${option.keyWord}`]}
                        render={(text) => {
                           if (option.isInteger) {
                              console.log(text);
                              if (option.type === 'checkbox') {
                                 return text?.map((txt) => {
                                    return equalerNumber(txt, option);
                                 });
                              } else if (option.type === 'table') {
                                 return text?.map((column, index) => {
                                    return (
                                       `${index + 1}.` +
                                       Object.entries(column)?.map(([key, value]) => {
                                          console.log(key, value);
                                          return equalerNumber(parseInt(key), option) + ':' + value;
                                       }) +
                                       '\n'
                                    );
                                 });
                              } else {
                                 return equalerNumber(text, option);
                              }
                           } else {
                              if (option.type === 'rangepicker') {
                                 if (text) {
                                    return (
                                       moment(text[0]).format('YYYY/MM/DD') +
                                       '->' +
                                       moment(text[1]).format('YYYY/MM/DD')
                                    );
                                 }
                                 return;
                              } else if (option.type === 'datepicker') {
                                 if (text) {
                                    return moment(text).format('YYYY/MM/DD');
                                 }
                                 return;
                              }
                              return text;
                           }
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
         form.resetFields();
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
         <div className="w-full">
            <p
               style={{
                  fontSize: 16,
                  fontWeight: 700,
                  textAlign: 'center'
               }}
            >
               {documentForm.name}
            </p>
         </div>
         <div className="w-full h-[600px] overflow-auto">
            <Form form={form} layout="vertical">
               <FormRender form={documentForm} formOptionIds={documentOptions[selectedOptionId]?.formOptionIds} />
            </Form>
         </div>
         <div className="w-full">
            <Button onClick={() => form.validateFields().then((values) => onFinish(values))} type="primary">
               Хадлагах
            </Button>
         </div>
         {/* <Modal
            title="Маягт хэвлэх хэсэг"
            open={isOpenPrintModal}
            onCancel={() => setIsOpenPrintModal(false)}
            onOk={() => handlePrint()}
            style={{
               width: 'max-content'
            }}
         >
            <div ref={printRef}>
               <ReturnById
                  type={usageType}
                  id={documentValue}
                  appointmentId={appointmentId}
                  data={printData}
                  hospitalName={hospitalName}
               />
            </div>
         </Modal> */}
      </div>
   );
}
export default Index;
