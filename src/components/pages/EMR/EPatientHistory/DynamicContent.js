import React, { useEffect, useState } from 'react';
import { Button, Divider, Form, Input, Row, Select, Spin, Table } from 'antd';
import DynamicFormInspection from '../../DynamicFormInspection';
import Diagnose from '../../service/Diagnose';
import { selectCurrentToken } from '../../../../features/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import EditableFormItem from '../../611/Support/EditableFormItem';
import EditableFormItemSelect from '../../611/Support/EditableFormItemSelect';
import jwtInterceopter from '../../../jwtInterceopter';
import { openNofi } from '../../../comman';
const { TextArea } = Input;
const { Column } = Table;
const { Option } = Select;
function DynamicContent({ props, incomeData, handleClick, editForm, editForOUT = true, hicsServiceId }) {
   const [form] = Form.useForm();
   const [loading, setLoading] = useState(false);
   const DiagnoseHandleClick = (diagnoses) => {
      form.setFieldValue('diagnose', diagnoses);
   };
   const saveDynamicTab = async (values, key) => {
      setLoading(true);
      const data = {
         cabinetId: incomeData.cabinetId,
         patientId: incomeData.patientId,
         doctorId: incomeData.doctorId,
         usageType: incomeData.usageType,
         description: values.description
      };
      if (editForOUT) {
         var diagnoseData = [];
         values.diagnose?.map((diagnose) => {
            diagnoseData.push({
               patientId: incomeData.patientId,
               type: diagnose.type,
               usageType: incomeData.usageType,
               diagnoseId: diagnose.id,
               diagnoseType: diagnose.diagnoseType,
               inpatientRequestId: incomeData.usageType === 'IN' ? incomeData.inpatientRequestId : null,
               appointmentId: incomeData.usageType === 'OUT' ? incomeData.appointmentId : null
            });
         });
      }
      if (incomeData.inspection === 11 || incomeData.inspection === 12) {
         data['xrayRequestId'] = incomeData.xrayRequestId;
         data['conclusion'] = JSON.stringify(values['conclusion']);
         data['advice'] = JSON.stringify(values['advice']);
      } else {
         data['pain'] = JSON.stringify(values['pain']);
         data['question'] = JSON.stringify(values['question']);
         data['inspection'] = JSON.stringify(values['inspection']);
         data['plan'] = JSON.stringify(values['plan']);
      }
      if (incomeData.usageType === 'IN') {
         data['inpatientRequestId'] = incomeData.appointmentId;
      } else if (incomeData.usageType === 'OUT') {
         data['appointmentId'] = incomeData.appointmentId;
      }
      data['formId'] = key;
      data['diagnoses'] = diagnoseData;
      await jwtInterceopter
         .post('emr/inspectionNote', data)
         .then((response) => {
            if (response.status === 201) {
               openNofi('success', 'Амжилттай', 'Үзлэгийн тэмдэглэл амжиллтай хадгалагдлаа');
               if (incomeData.inspection === 11 || incomeData.inspection === 12) {
                  jwtInterceopter.patch('service/xrayRequest/' + incomeData.xrayRequestId, {
                     xrayProcess: 2
                  });
               } else {
                  handleClick({ target: { value: 'OCS' } });
               }
            }
            console.log(response);
         })
         .catch((error) => {
            if (error.response.status === 409) {
               openNofi('error', 'Алдаа', 'Үзлэгийн тэмдэглэл хадгалагдсан байна');
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      setValidStep(false);
   };
   useEffect(() => {
      if (editForm != undefined && editForm != null) {
         if (Object.keys(editForm)?.length > 0 && editForm?.constructor === Object) {
            form.setFieldsValue(editForm);
         } else {
            form.resetFields();
         }
      }
   }, [editForm]);
   return (
      <Spin spinning={loading}>
         <Form
            name="basic"
            // initialValues={{ remember: true }}
            onFinish={(e) => saveDynamicTab(e, props.formKey)}
            onFinishFailed={onFinishFailed}
            // autoComplete="off"
            labelAlign="left"
            scrollToFirstError
            className="overflow-auto"
            layout={incomeData.usageType === 'OUT' ? '' : 'vertical'}
            form={form}
         >
            <>
               {incomeData.usageType === 'OUT' ? (
                  <>
                     <div className="hidden">
                        <Form.Item name="description">
                           <TextArea disabled={true} />
                        </Form.Item>
                     </div>
                     {props.data.pain?.length > 0 ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Зовиур
                           </Divider>
                           {props.data['pain'].map((pain, index) => {
                              return (
                                 <div key={index}>
                                    {incomeData.inspection === 1 && (
                                       <div>
                                          <p className="mt-2 font-semibold">{pain.label}</p>
                                          <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                                       </div>
                                    )}
                                    <div>
                                       <DynamicFormInspection
                                          data={pain.options}
                                          forkey={pain.label}
                                          unikey={pain.inspectionType}
                                       />
                                    </div>
                                 </div>
                              );
                           })}
                        </>
                     ) : null}
                     {props.data.inspection?.length > 0 ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Бодит үзлэг
                           </Divider>
                           {props.data['inspection'].map((inspection, index) => {
                              return (
                                 <div key={index}>
                                    {incomeData.inspection === 1 && (
                                       <div>
                                          <p className="mt-2 font-semibold">{inspection.label}</p>
                                          <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                                       </div>
                                    )}
                                    <div>
                                       <DynamicFormInspection
                                          data={inspection.options}
                                          forkey={inspection.label}
                                          unikey={inspection.inspectionType}
                                       />
                                    </div>
                                 </div>
                              );
                           })}
                        </>
                     ) : null}
                     {'question' in props.data && props.data.question?.length > 0 ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Асуумж
                           </Divider>
                           {props.data['question'].map((question, index) => {
                              return (
                                 <div key={index}>
                                    {incomeData.inspection === 1 && (
                                       <div>
                                          <p className="mt-2 font-semibold">{question.label}</p>
                                          <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                                       </div>
                                    )}
                                    <div>
                                       <DynamicFormInspection
                                          data={question.options}
                                          forkey={question.label}
                                          unikey={question.inspectionType}
                                       />
                                    </div>
                                 </div>
                              );
                           })}
                        </>
                     ) : null}
                     {'plan' in props.data && props.data.plan?.length > 0 ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Төлөвлөгөө
                           </Divider>
                           {props.data['plan'].map((plan, index) => {
                              return (
                                 <div key={index}>
                                    {incomeData.inspection === 1 && (
                                       <div>
                                          <p className="mt-2 font-semibold">{plan.label}</p>
                                          <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                                       </div>
                                    )}
                                    <div>
                                       <DynamicFormInspection
                                          data={plan.options}
                                          forkey={plan.label}
                                          unikey={plan.inspectionType}
                                       />
                                    </div>
                                 </div>
                              );
                           })}
                        </>
                     ) : null}
                     {'conclusion' in props.data && props.data.conclusion?.length > 0 ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Дүгнэлт
                           </Divider>
                           {props.data['conclusion'].map((conclusion, index) => {
                              return (
                                 <div key={index}>
                                    {incomeData.inspection === 1 && (
                                       <div>
                                          <p className="mt-2 font-semibold">{conclusion.label}</p>
                                          <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                                       </div>
                                    )}
                                    <div>
                                       <DynamicFormInspection
                                          data={conclusion.options}
                                          forkey={conclusion.label}
                                          unikey={conclusion.inspectionType}
                                       />
                                    </div>
                                 </div>
                              );
                           })}
                        </>
                     ) : null}
                     {'advice' in props.data && props.data.advice?.length > 0 ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Зөвлөгөө
                           </Divider>
                           {props.data['advice'].map((advice, index) => {
                              return (
                                 <div key={index}>
                                    {incomeData.inspection === 1 && (
                                       <div>
                                          <p className="mt-2 font-semibold">{advice.label}</p>
                                          <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                                       </div>
                                    )}
                                    <div>
                                       <DynamicFormInspection
                                          data={advice.options}
                                          forkey={advice.label}
                                          unikey={advice.inspectionType}
                                       />
                                    </div>
                                 </div>
                              );
                           })}
                        </>
                     ) : null}
                     {props.data && editForOUT && incomeData.inspection != 11 && incomeData.usageType === 'OUT' ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Онош
                           </Divider>
                           <Diagnose
                              handleClick={DiagnoseHandleClick}
                              types={[0, 1, 2]}
                              hicsServiceId={hicsServiceId}
                           />
                           <Form.List name="diagnose">
                              {(diagnose) => (
                                 <Table bordered dataSource={diagnose} pagination={false}>
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
                                       title="Код"
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
                                                <Select style={{ width: '100%' }}>
                                                   <Option value={0}>Үндсэн</Option>
                                                   <Option value={1}>Урьдчилсан</Option>
                                                   <Option value={2}>Хавсрах онош</Option>
                                                   <Option value={3}>Дагалдах</Option>
                                                </Select>
                                             </EditableFormItemSelect>
                                          );
                                       }}
                                    />
                                 </Table>
                              )}
                           </Form.List>
                        </>
                     ) : null}
                  </>
               ) : (
                  <>
                     {'pain' in props.data && props.data.pain.length > 0 ? (
                        <>
                           <Divider orientation="left" className="text-sm my-2">
                              Зовиур
                           </Divider>
                           {props.data['pain'].map((pain, index) => {
                              return (
                                 <div key={index}>
                                    {incomeData.inspection === 1 && (
                                       <div>
                                          <p className="mt-2 font-semibold">{pain.label}</p>
                                          <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                                       </div>
                                    )}
                                    <div>
                                       <DynamicFormInspection
                                          data={pain.options}
                                          forkey={pain.label}
                                          unikey={pain.inspectionType}
                                       />
                                    </div>
                                 </div>
                              );
                           })}
                        </>
                     ) : null}
                     {/* {<Index id={props.formKey} data={props.data} />} */}
                  </>
               )}
            </>
            <Form.Item
               wrapperCol={{
                  span: 16
               }}
            >
               <Row className="mt-2">
                  <Button
                     type="primary"
                     htmlType="submit"
                     // onClick={() => validStep && saveDynamicTab()}
                     loading={loading}
                  >
                     EMR хадгалах
                  </Button>
               </Row>
            </Form.Item>
         </Form>
      </Spin>
   );
}
export default DynamicContent;
