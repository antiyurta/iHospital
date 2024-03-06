import React, { useEffect, useRef, useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Progress, Result, Select } from 'antd';
import { ReturnById } from '../../611/Document/Index';
import { formatNameForDoc, isObjectEmpty, openNofi } from '../../../comman';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
//
import jwtInterceopter from '../../../jwtInterceopter';
import DocumentFormServices from '../../../../services/organization/documentForm';
import DocumentOptionServices from '../../../../services/organization/documentOption';
import OrganizationStructureService from '../../../../services/organization/structure';
import OrganizationEmployeeService from '../../../../services/organization/employee';
import { colorTotal, totalCalculator } from '../../../injection';
import NewFormRender from './NewFormRender';
//
import { FormType } from './enum-utils';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
import apiAppointmentService from '../../../../services/appointment/api-appointment-service';
import { useLocation } from 'react-router-dom';
//
const { RangePicker } = DatePicker;

function Index(props) {
   const {
      state: { slotId }
   } = useLocation();
   // slotId ni appointment ruu patchlah ued heregtei
   const {
      propsUsageType,
      isEdit,
      editId,
      document,
      documentValue,
      documentType,
      onOk,
      isBackButton,
      handleBackButton,
      extraData
   } = props;
   const { appointmentType, usageType, patientId, appointmentId, inpatientRequestId } =
      useSelector(selectCurrentEmrData);
   const printRef = useRef();
   const [filterForm] = Form.useForm();
   const [form] = Form.useForm();
   const [data, setData] = useState([]);
   const [answeredKeyWords, setAnsweredKeyWords] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [documentForm, setDocumentForm] = useState([]);
   const [documentOptions, setDocumentOptions] = useState([]);
   const [cabinets, setCabinets] = useState([]);
   const [employees, setEmployees] = useState([]);
   const [selectedCabinet, setSelectedCabinet] = useState('');
   const [selectedEmp, setSelectedEmp] = useState('');
   const getCabinets = async () => {
      await OrganizationStructureService.get({
         params: {
            type: 2
         }
      }).then((response) => {
         setCabinets(response.data.response.data);
      });
   };
   const getEmployees = async (e) => {
      await OrganizationEmployeeService.getEmployee({
         params: {
            depId: e
         }
      }).then((response) => {
         setEmployees(response.data.response.data);
      });
   };
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
            appointmentId: appointmentId || inpatientRequestId,
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
      await DocumentFormServices.getById(document.formId)
         .then(({ data: { response } }) => {
            setDocumentForm(response);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const getDocumentOption = async () => {
      await DocumentOptionServices.getById(document.optionId)
         .then(({ data: { response } }) => {
            setDocumentOptions(response.formOptionIds);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const onFinish = async (values, saveType) => {
      setIsLoading(true);
      if (isEdit) {
         await jwtInterceopter
            .patch(`${documentForm.url}/${editId}`, {
               data: { ...values }
            })
            .then((response) => {
               if (response.data.response.success) {
                  openNofi('success', 'Амжилттай', 'Маягт амжилттай хадгалагдлаа');
               }
            })
            .finally(() => {
               setIsLoading(false);
               onOk(false);
            });
      } else {
         if (documentValue === 87) {
            const { total, message } = totalCalculator(values);
            const color = colorTotal(values);
            if (message) {
               openNofi('error', 'Анхааруулга', message);
            }
            if (appointmentType === 0) {
               apiAppointmentService.patchAppointment(appointmentId || inpatientRequestId, {
                  slotId: slotId,
                  assesment: {
                     color: color,
                     total: total
                  }
               });
            } else if (appointmentType === 1) {
               apiAppointmentService.patchPreOrder(appointmentId || inpatientRequestId, {
                  slotId: slotId,
                  assesment: {
                     color: color,
                     total: total
                  }
               });
            }
         }
         await jwtInterceopter
            .post(documentForm.url, {
               position: documentForm.position,
               formId: document.formId,
               formType: document.formType,
               optionId: document.optionId,
               appointmentId: appointmentId || inpatientRequestId,
               usageType: propsUsageType,
               saveType: saveType || 'Save',
               documentId: documentValue,
               patientId: patientId,
               data: { ...extraData, ...values },
               type: 'FORM'
            })
            .then((res) => {
               if (res.data.response.success) {
                  openNofi('success', 'Амжилттай', 'Маягт амжилттай хадгалагдлаа');
               }
            })
            .finally(() => {
               setIsLoading(false);
               onOk(false);
            });
      }
   };

   const onFinishFilter = async (filters) => {
      setIsLoading(true);
      const start = moment(filters.date[0]).set({ hour: 0, minute: 0, second: 0 });
      const end = moment(filters.date[1]).set({ hour: 23, minute: 59, second: 59 });
      const params = {
         structureId: filters.cabinetId,
         doctorId: filters.doctorId,
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
   const handlePrint = useReactToPrint({
      // onBeforeGetContent: () => setPrintLoading(true),
      // onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });
   useEffect(() => {
      if (documentValue != 0) {
         if (documentType != 1) {
            // getDocumentOption();
         }
         getDocumentForm();
      }
   }, [documentValue]);
   useEffect(() => {
      if (isEdit) {
         form.setFieldsValue(document.data);
         const keyWords = Object.keys(document.data).filter(
            (key) => document.data[key] !== '' && document.data[key]?.length > 0
         );
         setAnsweredKeyWords(keyWords);
      }
   }, [isEdit]);
   useEffect(() => {
      if (!isObjectEmpty(documentForm)) {
         getData();
         getCabinets();
      }
   }, [documentForm]);

   const checkProgress = (displayedKeyWords) => {
      const fKeyWordsLength = displayedKeyWords?.filter((keyWord) => keyWord != '' && keyWord != undefined)?.length;
      const currentAnsweredData = form.getFieldsValue();
      Object.keys(currentAnsweredData).forEach((key) =>
         currentAnsweredData[key] === undefined ||
         currentAnsweredData[key] === '' ||
         currentAnsweredData[key]?.length === 0 ||
         currentAnsweredData[key] === null
            ? delete currentAnsweredData[key]
            : {}
      );
      const currentAnswerLength = Object.keys(currentAnsweredData)?.length - 1 || 0;
      return (currentAnswerLength / fKeyWordsLength) * 100;
   };

   const ProgressBar = (props) => {
      const { ...rest } = props;
      const Dummy = (props) => {
         return <Progress percent={props.value?.toFixed(1)} />;
      };
      return (
         <Form.Item {...rest}>
            <Dummy />
         </Form.Item>
      );
   };

   if (documentValue === 0) {
      return <Result title="Маягт сонгоно уу" />;
   }
   return (
      <div className="flex flex-col gap-3">
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
                        <RangePicker />
                     </Form.Item>
                     {documentValue === 1 ? (
                        <Form.Item
                           label="Тасаг"
                           name="cabinetId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Тасаг сонгоно уу'
                              }
                           ]}
                        >
                           <Select
                              style={{ width: 200 }}
                              onChange={(e) => {
                                 getEmployees(e);
                              }}
                              onSelect={(_id, info) => setSelectedCabinet(info.children)}
                              options={cabinets?.map((document) => ({
                                 label: document.name,
                                 value: document.id
                              }))}
                           />
                        </Form.Item>
                     ) : null}
                     {documentValue === 1 ? (
                        <Form.Item
                           label="Эмч"
                           name="doctorId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Эмч сонгоно уу'
                              }
                           ]}
                        >
                           <Select
                              style={{ width: 200 }}
                              onSelect={(_id, info) => setSelectedEmp(info.children.join(''))}
                              options={employees?.map((employee) => ({
                                 label: formatNameForDoc(employee?.lastName, employee?.firstName),
                                 value: employee.id
                              }))}
                           />
                        </Form.Item>
                     ) : null}
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
                     appointmentId={appointmentId || inpatientRequestId}
                     data={data}
                  />
               </div>
            </div>
         ) : (
            <>
               <div className="flex flex-col gap-1 justify-between">
                  <Form
                     form={form}
                     layout="vertical"
                     initialValues={{
                        documentPercent: 0
                     }}
                  >
                     <ProgressBar className="mb-0 px-3" name="documentPercent">
                        <Input />
                     </ProgressBar>
                     <div className="h-[500px] overflow-auto p-3">
                        <NewFormRender
                           useForm={form}
                           form={documentForm}
                           formOptionIds={[]}
                           isCheck={true}
                           formName={null}
                           incomeKeyWords={answeredKeyWords}
                           checkProgress={(keyWords) => {
                              form.setFieldValue('documentPercent', checkProgress(keyWords));
                           }}
                        />
                     </div>
                  </Form>
                  <div className="flex flex-row gap-2 justify-between">
                     <div>
                        {isBackButton ? (
                           <Button
                              danger
                              onClick={() => {
                                 handleBackButton(true);
                              }}
                           >
                              Буцах
                           </Button>
                        ) : null}
                     </div>
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           gap: 8
                        }}
                     >
                        {isBackButton ? (
                           <Button
                              onClick={() => {
                                 Modal.confirm({
                                    content: 'Та маягтаа ноороглох гэж байна',
                                    onOk: () => form.validateFields().then((values) => onFinish(values, 'Draft'))
                                 });
                              }}
                           >
                              Ноороглох
                           </Button>
                        ) : null}
                        <Button
                           loading={isLoading}
                           onClick={() => form.validateFields().then((values) => onFinish(values, 'Save'))}
                           type="primary"
                        >
                           {isEdit ? 'Засах' : 'Хадгалах'}
                        </Button>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
}
export default Index;
