import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Result } from 'antd';
import { ReturnById } from '../../611/Document/Index';
import { isObjectEmpty, openNofi } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentHospitalName } from '../../../../features/authReducer';
import FormRender from './FormRender';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
//
import jwtInterceopter from '../../../jwtInterceopter';
import DocumentFormServices from '../../../../services/organization/documentForm';
import DocumentOptionServices from '../../../../services/organization/documentOption';
import { NewRangePicker } from '../../../Input/Input';
//
function Index(props) {
   const { usageType, documentValue, documentType, structureId, appointmentId, patientId, onOk } = props;
   const hospitalName = useSelector(selectCurrentHospitalName);
   const printRef = useRef();
   const AppIds = useSelector(selectCurrentAppId);
   const [filterForm] = Form.useForm();
   const [form] = Form.useForm();
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [documentForm, setDocumentForm] = useState([]);
   const [documentOptions, setDocumentOptions] = useState([]);
   const [selectedOptionId, setSelectedOptionId] = useState(Number);
   const [isOpenFormModal, setIsOpenFormModal] = useState(false);
   const handlePrint = useReactToPrint({
      // onBeforeGetContent: () => setPrintLoading(true),
      // onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });
   //
   // const getPatientInfo = async () => {
   //    await PmsPatientServices.getById(patientId).then((response) => {
   //       setPrintData({
   //          patientData: response.data.response,
   //          formData: data
   //       });
   //       setIsOpenPrintModal(true);
   //    });
   // };
   //
   const getData = async () => {
      setIsLoading(true);
      var params = {};
      if (documentType === 1) {
         const start = moment(new Date()).set({ hour: 0, minute: 0, second: 0 });
         const end = moment(new Date()).set({ hour: 23, minute: 59, second: 59 });
         params = {
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         };
      } else {
         params = {
            usageType: usageType,
            appointmentId: appointmentId,
            documentId: documentValue,
            patientId: patientId
         };
      }
      await jwtInterceopter
         .get(documentForm.url, {
            params: params
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
   const onFinishFilter = async (filters) => {
      setIsLoading(true);
      const start = moment(filters.date[0]).set({ hour: 0, minute: 0, second: 0 });
      const end = moment(filters.date[1]).set({ hour: 23, minute: 59, second: 59 });
      const params = {
         startDate: moment(start).format('YYYY-MM-DD HH:mm'),
         endDate: moment(end).format('YYYY-MM-DD HH:mm')
      };
      await jwtInterceopter
         .get(documentForm.url, {
            params: params
         })
         .then((response) => {
            const data = response.data.response;
            setData(data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   useEffect(() => {
      if (documentValue != 0) {
         console.log(documentType);
         if (documentType != 1) {
            getDocumentOption();
         }
         getDocumentForm();
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
         {documentType === 1 ? (
            <div className="flex flex-col gap-3">
               <Form onFinish={onFinishFilter} form={filterForm} layout="vertical">
                  <div className="flex flex-row gap-3">
                     <Form.Item
                        rules={[
                           {
                              required: true,
                              message: 'Өдөр заавал'
                           }
                        ]}
                        label="Өдрөөр шүүх"
                        name="date"
                     >
                        <NewRangePicker />
                     </Form.Item>
                     <Form.Item className="self-end">
                        <Button type="primary" htmlType="submit">
                           Шүүх
                        </Button>
                     </Form.Item>
                  </div>
               </Form>
               <Button onClick={() => handlePrint()} type="primary">
                  Хэвлэх
               </Button>
               <div ref={printRef}>
                  <ReturnById
                     type={usageType}
                     id={documentValue}
                     appointmentId={null}
                     data={data}
                     hospitalName={hospitalName}
                  />
               </div>
            </div>
         ) : (
            <>
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
            </>
         )}
      </div>
   );
}
export default Index;
