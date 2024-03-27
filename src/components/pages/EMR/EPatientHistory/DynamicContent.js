import React, { useEffect, useState } from 'react';
import { Button, Form, Spin, Table } from 'antd';

//comp
import Soap from './Soap';
// import Diagnose from '../../service/Diagnose';
import NewDiagnose from '../../service/NewDiagnose';
import { inspectionTOJSON, openNofi } from '@Comman/common';
import NewFormRender from '../../BeforeAmbulatory/Customized/NewFormRender';
//api
import EmrInspectionNoteApi from '@ApiServices/emr/inspectionNote';
import AppointmentApi from '@ApiServices/appointment/api-appointment-service';
import ServiceRequestApi from '@ApiServices/serviceRequest';
// enum
import { InspectionEnum, ListIndexEnum } from '@Utils/enum';
import { useSelector } from 'react-redux';
import { selectCurrentUserId } from '@Features/authReducer';

function DynamicContent({ props, incomeData, handleClick, isViewDiagnose, hicsServiceId }) {
   const employeeId = useSelector(selectCurrentUserId);
   const [form] = Form.useForm();
   const [editMode, setEditMode] = useState(false);
   const [expandedIndex, setExpandedIndex] = useState(null);
   const [selectedInspectionNoteId, setSelectedInspectionNoteId] = useState(Number);
   const [loading, setLoading] = useState(false);
   const [serviceRequest, setServiceRequest] = useState([]);
   // const DiagnoseHandleClick = (diagnosis, cost) => {
   //    if (incomeData.usageType === 'OUT') {
   //       if (cost?.length > 0) {
   //          var data = {
   //             hicsServiceId: hicsServiceId,
   //             serviceId: incomeData.appointmentId,
   //             serviceType: 5,
   //             icdCode: cost[0]?.icd10Code,
   //             icdCodeName: cost[0]?.icd10Name,
   //             icd9Code: cost[0]?.icd9Code,
   //             icd9Name: cost[0]?.icd9Name,
   //             drgCode: cost[0]?.drgCode,
   //             discountAmount: cost[0]?.amountHi,
   //             payedAmount: cost[0]?.amountCit,
   //             totalAmount: cost[0]?.amountTotal
   //          };
   //          const AddCode = diagnosis?.find((diagnose) => diagnose.diagnoseType === 3)?.code;
   //          data['icdAddCode'] = AddCode;
   //          jwtInterceopter.patch('insurance-seal', data);
   //       }
   //    }
   //    form.setFieldValue('diagnosis', diagnosis);
   // };

   const getInspectionNote = async () => {
      await EmrInspectionNoteApi.getById(incomeData.inspectionNoteId).then(({ data: { response } }) => {
         if (response.hasOwnProperty('id')) {
            setEditMode(true);
            const data = inspectionTOJSON(response);
            form.setFieldsValue(data);
         }
      });
   };

   const getServiceRequest = async () => {
      await ServiceRequestApi.get({
         params: {
            appointmentId: incomeData.appointmentId
         }
      }).then(({ data: { response } }) => {
         const data = response.data?.flatMap((res) => res.services);
         setServiceRequest(data);
      });
   };

   const saveDynamicTab = async (values, key) => {
      setLoading(true);
      if (editMode) {
         const id = incomeData.inspectionNoteId || selectedInspectionNoteId;
         await EmrInspectionNoteApi.patch(id, {
            pain: JSON.stringify(values['pain']),
            question: JSON.stringify(values['question']),
            inspection: JSON.stringify(values['inspection']),
            plan: JSON.stringify(values['plan'])
         })
            .then(async ({ data: { response, success } }) => {
               if (success) {
                  const data = inspectionTOJSON(response);
                  form.setFieldsValue(data);
                  openNofi('success', 'Амжилттай', 'Үзлэгийн тэмдэглэл амжиллтай хадгалагдлаа');
                  handleClick({ target: { value: 'OTS' } });
               }
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         const data = {
            cabinetId: incomeData.cabinetId,
            patientId: incomeData.patientId,
            doctorId: incomeData.doctorId,
            formId: key,
            appointmentId: incomeData.appointmentId,
            xrayRequestId: incomeData.xrayRequestId,
            operationRequestId: incomeData.operationRequestId,
            pain: JSON.stringify(values['pain']),
            question: JSON.stringify(values['question']),
            inspection: JSON.stringify(values['inspection']),
            plan: JSON.stringify(values['plan']),
            conclusion: JSON.stringify(values['conclusion']),
            advice: JSON.stringify(values['advice'])
         };
         await EmrInspectionNoteApi.post(data)
            .then(async ({ data: { response, success } }) => {
               if (success) {
                  setSelectedInspectionNoteId(response.id);
                  var newResponse;
                  if (incomeData.appointmentType === ListIndexEnum.Ambulatory) {
                     newResponse = await AppointmentApi.patchAppointment(incomeData.appointmentId, {
                        inspectionNoteId: response.id
                     }).then(({ data: { success } }) => success);
                  } else if (incomeData.appointmentType === ListIndexEnum.PreOrder) {
                     newResponse = await AppointmentApi.patchPreOrder(incomeData.appointmentId, {
                        inspectionNoteId: response.id
                     }).then(({ data: { success } }) => success);
                  } else if (incomeData.inspection === InspectionEnum.Xray) {
                     newResponse = await ServiceRequestApi.patchXrayRequest(incomeData.xrayRequestId, {
                        inspectionNoteId: response.id.toString(),
                        xrayProcess: 2
                     });
                  } else if (incomeData.inspection === InspectionEnum.Operation) {
                     newResponse = await ServiceRequestApi.patchOperation(incomeData.operationRequestId, {
                        inspectionNoteId: response.id,
                        doctorId: employeeId
                     });
                  }
                  if (newResponse) {
                     setEditMode(true);
                     handleClick({ target: { value: 'OTS' } });
                  }
               }
            })
            .catch((error) => {
               if (error.response.status === 409) {
                  openNofi('error', 'Алдаа', 'Үзлэгийн тэмдэглэл хадгалагдсан байна');
               }
            })
            .finally(() => {
               setLoading(false);
            });
      }
   };

   const onFinishFailed = (errorInfo) => {
      console.log(errorInfo);
   };

   useEffect(() => {
      incomeData.inspectionNoteId && getInspectionNote();
      incomeData.appointmentId && getServiceRequest();
   }, []);
   const handleSoapClick = (key) => {
      if (key === expandedIndex) {
         setExpandedIndex(null);
      } else {
         setExpandedIndex(key);
      }
   };
   return (
      <Spin spinning={loading}>
         <Form
            form={form}
            layout={'vertical'}
            labelAlign="left"
            scrollToFirstError
            onFinish={(e) => saveDynamicTab(e, props.formKey)}
            onFinishFailed={onFinishFailed}
         >
            <div className="flex flex-col gap-2">
               <div className="flex flex-col pr-3 gap-2">
                  {props.data?.hasOwnProperty('conclusion') ? (
                     <Soap
                        title="Дүгнэлт"
                        subTitle="(Дүгнэлт)"
                        soapKey={6}
                        expandedKey={expandedIndex}
                        handleClick={handleSoapClick}
                     >
                        <NewFormRender
                           useForm={form}
                           form={{
                              documentForm: props.data.conclusion
                           }}
                           formOptionIds={[]}
                           isCheck={false}
                           formName="conclusion"
                           incomeKeyWords={[]}
                           checkProgress={(_keyWords) => null}
                        />
                     </Soap>
                  ) : null}
                  {props.data?.hasOwnProperty('advice') ? (
                     <Soap
                        title="Зөвлөгөө"
                        subTitle="(Зөвлөгөө)"
                        soapKey={7}
                        expandedKey={expandedIndex}
                        handleClick={handleSoapClick}
                     >
                        <NewFormRender
                           useForm={form}
                           form={{
                              documentForm: props.data.advice
                           }}
                           formOptionIds={[]}
                           isCheck={false}
                           formName="advice"
                           incomeKeyWords={[]}
                           checkProgress={(_keyWords) => null}
                        />
                     </Soap>
                  ) : null}
                  {props.data?.hasOwnProperty('pain') ? (
                     <Soap
                        title="Зовиур"
                        subTitle="(Subject)"
                        soapKey={1}
                        expandedKey={expandedIndex}
                        handleClick={handleSoapClick}
                     >
                        <NewFormRender
                           useForm={form}
                           form={{
                              documentForm: props.data.pain
                           }}
                           formOptionIds={[]}
                           isCheck={false}
                           formName="pain"
                           incomeKeyWords={[]}
                           checkProgress={(_keyWords) => null}
                        />
                     </Soap>
                  ) : null}
                  {props.data?.hasOwnProperty('question') ? (
                     <Soap
                        title="Асуумж"
                        subTitle="(Q)"
                        soapKey={2}
                        expandedKey={expandedIndex}
                        handleClick={handleSoapClick}
                     >
                        <NewFormRender
                           useForm={form}
                           form={{
                              documentForm: props.data.question
                           }}
                           formOptionIds={[]}
                           isCheck={false}
                           formName="question"
                           incomeKeyWords={[]}
                           checkProgress={(_keyWords) => null}
                        />
                     </Soap>
                  ) : null}
                  {props.data?.hasOwnProperty('inspection') ? (
                     <Soap
                        title="Бодит үзлэг"
                        subTitle="(O)"
                        soapKey={3}
                        expandedKey={expandedIndex}
                        handleClick={handleSoapClick}
                     >
                        <NewFormRender
                           useForm={form}
                           form={{
                              documentForm: props.data.inspection
                           }}
                           formOptionIds={[]}
                           isCheck={false}
                           formName="inspection"
                           incomeKeyWords={[]}
                           checkProgress={(_keyWords) => null}
                        />
                     </Soap>
                  ) : null}
                  {isViewDiagnose ? (
                     <Soap
                        title="Онош"
                        subTitle="(A)"
                        soapKey={4}
                        expandedKey={expandedIndex}
                        handleClick={handleSoapClick}
                     >
                        <div className="flex flex-col gap-2">
                           <NewDiagnose
                              patientId={incomeData.patientId}
                              appointmentId={incomeData.appointmentId}
                              hicsServiceId={hicsServiceId}
                              usageType={incomeData.usageType}
                           />
                           {/* <Diagnose
                              form={form}
                              handleClick={DiagnoseHandleClick}
                              types={[0, 1, 2]}
                              hicsServiceId={hicsServiceId}
                              // type ene heregte bji OUT deer
                              appointmentType={appointmentType}
                           />
                           <Form.List name="diagnosis">
                              {(diagnose) => (
                                 <Table
                                    bordered
                                    locale={{
                                       emptyText: 'Дата байхгүй'
                                    }}
                                    dataSource={diagnose}
                                    pagination={false}
                                 >
                                    <Column
                                       dataIndex={'code'}
                                       title="Код"
                                       render={(_value, _row, index) => {
                                          return (
                                             <EditableFormItem name={[index, 'code']}>
                                                <Input />
                                             </EditableFormItem>
                                          );
                                       }}
                                    />
                                    <Column
                                       dataIndex={'nameMn'}
                                       title="Монгол нэр"
                                       render={(_value, _row, index) => {
                                          return (
                                             <EditableFormItem name={[index, 'nameMn']}>
                                                <Input />
                                             </EditableFormItem>
                                          );
                                       }}
                                    />
                                    <Column
                                       dataIndex={'diagnoseType'}
                                       title="Оношийн төрөл"
                                       render={(_value, _row, index) => {
                                          return (
                                             <EditableFormItemSelect name={[index, 'diagnoseType']}>
                                                <Select
                                                   style={{ width: '100%' }}
                                                   options={[
                                                      {
                                                         label: 'Үндсэн',
                                                         value: 0
                                                      },
                                                      {
                                                         label: 'Урьдчилсан',
                                                         value: 1
                                                      },
                                                      {
                                                         label: 'Хавсрах онош',
                                                         value: 2
                                                      },
                                                      {
                                                         label: 'Дагалдах',
                                                         value: 3
                                                      }
                                                   ]}
                                                />
                                             </EditableFormItemSelect>
                                          );
                                       }}
                                    />
                                 </Table>
                              )}
                           </Form.List> */}
                        </div>
                     </Soap>
                  ) : null}
                  {props.data?.hasOwnProperty('plan') ? (
                     <Soap
                        title="Төлөвлөгөө"
                        subTitle="(P)"
                        soapKey={5}
                        expandedKey={expandedIndex}
                        handleClick={handleSoapClick}
                     >
                        <NewFormRender
                           useForm={form}
                           form={{
                              documentForm: props.data.plan
                           }}
                           formOptionIds={[]}
                           isCheck={false}
                           formName="plan"
                           incomeKeyWords={[]}
                           checkProgress={(_keyWords) => null}
                        />
                        <Table
                           rowKey="id"
                           columns={[
                              {
                                 title: '№',
                                 width: 50,
                                 render: (_, _row, index) => index + 1
                              },
                              {
                                 title: 'Үйлчилгээ',
                                 dataIndex: 'name'
                              },
                              {
                                 title: 'Тоо',
                                 dataIndex: 'total'
                              }
                           ]}
                           pagination={false}
                           dataSource={serviceRequest}
                        />
                     </Soap>
                  ) : null}
               </div>
               <Button type="primary" htmlType="submit" loading={loading}>
                  EMR хадгалах
               </Button>
            </div>
         </Form>
      </Spin>
   );
}
export default DynamicContent;
