import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Collapse, Form, Input, Select, Spin, Table } from 'antd';
import Diagnose from '../../service/Diagnose';
import EditableFormItem from '../../611/Support/EditableFormItem';
import EditableFormItemSelect from '../../611/Support/EditableFormItemSelect';
import jwtInterceopter from '../../../jwtInterceopter';
import { inspectionTOJSON, openNofi } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentNote } from '../../../../features/noteReducer';
import NewFormRender from '../../BeforeAmbulatory/Customized/NewFormRender';

import EmrPatientDiagnoseServices from '../../../../services/emr/patientDiagnose';
import EmrInspectionNoteServices from '../../../../services/emr/inspectionNote';

const { TextArea } = Input;
const { Column } = Table;
const { Option } = Select;
const { Panel } = Collapse;
function DynamicContent({
   props,
   incomeData,
   handleClick,
   editForm,
   isEditFromList = false,
   hicsServiceId,
   appointmentType,
   triggerForModal
}) {
   const [form] = Form.useForm();
   const notes = useSelector(selectCurrentNote);
   const [selectedInspectionNoteId, setSelectedInspectionNoteId] = useState(Number);
   const [editModeInspectionNote, setEditModeInspectionNote] = useState(false);
   const [selectedDiagnoseIds, setSelectedDiagnoseIds] = useState([]);
   const [editModeDiagnosis, setEditModeDiagnosis] = useState(false);
   const [loading, setLoading] = useState(false);
   const DiagnoseHandleClick = (diagnosis, cost) => {
      if (incomeData.usageType === 'OUT') {
         if (cost?.length > 0) {
            var data = {
               hicsServiceId: hicsServiceId,
               serviceId: incomeData.appointmentId,
               serviceType: 5,
               icdCode: cost[0]?.icd10Code,
               icdCodeName: cost[0]?.icd10Name,
               icd9Code: cost[0]?.icd9Code,
               icd9Name: cost[0]?.icd9Name,
               drgCode: cost[0]?.drgCode,
               discountAmount: cost[0]?.amountHi,
               payedAmount: cost[0]?.amountCit,
               totalAmount: cost[0]?.amountTotal
            };
            const AddCode = diagnosis?.find((diagnose) => diagnose.diagnoseType === 3)?.code;
            data['icdAddCode'] = AddCode;
            jwtInterceopter.patch('insurance-seal', data);
         }
      }
      form.setFieldValue('diagnosis', diagnosis);
   };
   const saveDynamicTab = async (values, key) => {
      setLoading(true);
      if ((selectedInspectionNoteId && editModeInspectionNote) || isEditFromList) {
         const diagnosis = values.diagnosis?.map((diagnose) => ({
            patientId: incomeData.patientId,
            type: diagnose.type,
            usageType: incomeData.usageType,
            diagnoseId: diagnose.id,
            diagnoseType: diagnose.diagnoseType,
            inpatientRequestId: incomeData.usageType === 'IN' ? incomeData.inpatientRequestId : null,
            appointmentId: incomeData.usageType === 'OUT' ? incomeData.appointmentId : null
         }));
         if (!isEditFromList) {
            if (editModeDiagnosis && incomeData.inspection != 11 && incomeData.inspection != 12) {
               selectedDiagnoseIds?.map((id) => {
                  EmrPatientDiagnoseServices.delete(id);
               });
            }
         }
         const id = isEditFromList ? props.formKey : selectedInspectionNoteId;
         await EmrInspectionNoteServices.patch(id, {
            description: isEditFromList ? values['description'] : null,
            pain: JSON.stringify(values['pain']),
            question: JSON.stringify(values['question']),
            inspection: JSON.stringify(values['inspection']),
            plan: JSON.stringify(values['plan']),
            diagnosis: !isEditFromList ? diagnosis : null
         })
            .then((response) => {
               openNofi('success', 'Амжилттай', 'Үзлэгийн тэмдэглэл амжиллтай хадгалагдлаа');
               //gadnaas zassan ued modal iin haah uuregtei
               if (isEditFromList) {
                  triggerForModal(false);
               } else {
                  handleClick({ target: { value: 'OCS' } });
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
            description: values.description
         };
         data['formId'] = key;
         data['diagnosis'] = values.diagnosis?.map((diagnose) => ({
            patientId: incomeData.patientId,
            type: diagnose.type,
            usageType: incomeData.usageType,
            diagnoseId: diagnose.id,
            diagnoseType: diagnose.diagnoseType,
            inpatientRequestId: incomeData.usageType === 'IN' ? incomeData.inpatientRequestId : null,
            appointmentId: incomeData.usageType === 'OUT' ? incomeData.appointmentId : null
         }));
         data['appointmentId'] = incomeData.appointmentId;
         data['pain'] = JSON.stringify(values['pain']);
         data['question'] = JSON.stringify(values['question']);
         data['inspection'] = JSON.stringify(values['inspection']);
         data['plan'] = JSON.stringify(values['plan']);
         if (!editModeDiagnosis && !editModeInspectionNote) {
            await EmrInspectionNoteServices.post(data)
               .then((response) => {
                  if (response.status === 201) {
                     openNofi('success', 'Амжилттай', 'Үзлэгийн тэмдэглэл амжиллтай хадгалагдлаа');
                     if (incomeData.inspection === 11 || incomeData.inspection === 12) {
                        jwtInterceopter.patch('service/xrayRequest/' + incomeData.xrayRequestId, {
                           xrayProcess: 2
                        });
                     } else {
                        if (!isEditFromList) {
                           handleClick({ target: { value: 'OCS' } });
                        }
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
      }
   };

   const onFinishFailed = (errorInfo) => {
      setValidStep(false);
   };
   useEffect(() => {
      if (editForm != undefined && editForm != null) {
         if (Object.keys(editForm)?.length > 0 && editForm?.constructor === Object) {
            form.setFieldsValue(editForm);
         } else {
            form.resetFields();
         }
      } else {
         let data = {};
         if (notes.inspectionNote) {
            data = inspectionTOJSON(notes.inspectionNote);
            setEditModeInspectionNote(true);
            setSelectedInspectionNoteId(notes.inspectionNote.id);
         }
         if (notes.diagnosis?.length > 0) {
            var diagnoseIds = [];
            const diagnosis = notes.diagnosis?.map((diagnose) => {
               diagnoseIds.push(diagnose.id);
               return {
                  code: diagnose.diagnose.code,
                  nameMn: diagnose.diagnose.nameMn,
                  diagnoseType: diagnose.diagnoseType,
                  type: diagnose.diagnose.type,
                  id: diagnose.diagnose.id
               };
            });
            setEditModeDiagnosis(true);
            setSelectedDiagnoseIds(diagnoseIds);
            data['diagnosis'] = diagnosis;
            data['services'] = notes.services;
         }
         form.setFieldsValue(data);
      }
   }, [editForm]);
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
               <div
                  style={{
                     paddingRight: 10
                  }}
               >
                  <div className="hidden">
                     <Form.Item name="description">
                        <TextArea disabled={true} />
                     </Form.Item>
                  </div>
                  <Collapse accordion>
                     <Panel key={1} forceRender header="Зовиур">
                        <div
                           style={{
                              height: 278,
                              overflow: 'auto'
                           }}
                        >
                           <NewFormRender
                              useForm={form}
                              form={{
                                 documentForm: props.data.pain
                              }}
                              formOptionIds={[]}
                              isCheck={false}
                              formName="pain"
                           />
                        </div>
                     </Panel>
                     <Panel key={2} forceRender header="Асуумж">
                        <div
                           style={{
                              height: 278,
                              overflow: 'auto'
                           }}
                        >
                           <NewFormRender
                              useForm={form}
                              form={{
                                 documentForm: props.data.question
                              }}
                              formOptionIds={[]}
                              isCheck={false}
                              formName="question"
                           />
                        </div>
                     </Panel>
                     <Panel key={3} forceRender header="Бодит үзлэг">
                        <div
                           style={{
                              height: 278,
                              overflow: 'auto'
                           }}
                        >
                           <NewFormRender
                              useForm={form}
                              form={{
                                 documentForm: props.data.inspection
                              }}
                              formOptionIds={[]}
                              isCheck={false}
                              formName="inspection"
                           />
                        </div>
                     </Panel>
                     {!isEditFromList ? (
                        <Panel key={4} header="Онош">
                           <div
                              style={{
                                 height: 278,
                                 overflow: 'auto'
                              }}
                           >
                              <div className="flex flex-col gap-2">
                                 <Diagnose
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
                              </div>
                           </div>
                        </Panel>
                     ) : null}
                     <Panel key={5} forceRender header="Төлөвлөгөө">
                        <div
                           className="flex flex-col gap-1"
                           style={{
                              height: 278,
                              overflow: 'auto'
                           }}
                        >
                           <NewFormRender
                              useForm={form}
                              form={{
                                 documentForm: props.data.plan
                              }}
                              formOptionIds={[]}
                              isCheck={false}
                              formName="plan"
                           />
                           <Form.List name="services">
                              {(services) => (
                                 <Table
                                    className="emr-plan-table"
                                    size="small"
                                    pagination={false}
                                    columns={[
                                       {
                                          title: '№',
                                          render: (_, _row, index) => {
                                             return index + 1;
                                          }
                                       },
                                       {
                                          title: 'Үйлчилгээ',
                                          dataIndex: 'name',
                                          align: 'left',
                                          render: (_, _row, index) => (
                                             <EditableFormItem name={[index, 'name']}>
                                                <Input />
                                             </EditableFormItem>
                                          )
                                       },
                                       {
                                          title: 'Тоо',
                                          dataIndex: 'total',
                                          render: (_, _row, index) => (
                                             <EditableFormItem name={[index, 'total']}>
                                                <Input />
                                             </EditableFormItem>
                                          )
                                       }
                                    ]}
                                    dataSource={services}
                                 />
                              )}
                           </Form.List>
                        </div>
                     </Panel>
                  </Collapse>
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
