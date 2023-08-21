import React, { useEffect, useState } from 'react';
import { Get, Patch, Post } from '../../../../comman';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { useSelector } from 'react-redux';
import { Button, Card, Form, Input, List, Modal, Select, Table } from 'antd';
import Diagnose from '../../../service/Diagnose';
import jwtInterceopter from '../../../../jwtInterceopter';
import EditableFormItem from '../../../611/Support/EditableFormItem';
import EditableFormItemSelect from '../../../611/Support/EditableFormItemSelect';
const { TextArea } = Input;
const { Column } = Table;
const { Option } = Select;
function ClinicalDiagnoseMain({ PatientId, InpatientRequestId, ServiceId }) {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const [clinicalDiagnoses, setClinicalDiagnoses] = useState([]);
   const [clinicalIsLoading, setClinicalIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const getDiagnoses = async () => {
      setClinicalIsLoading(true);
      await jwtInterceopter
         .get('emr/inspectionNote', {
            params: {
               inpatientRequestId: InpatientRequestId
            }
         })
         .then((response) => {
            setClinicalDiagnoses(response.data.response.data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setClinicalIsLoading(false);
         });
   };
   const openModal = () => {
      form.resetFields();
      setIsOpenModal(true);
   };
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         patientId: PatientId,
         inpatientRequestId: InpatientRequestId,
         pain: values.pain,
         question: values.question,
         inspection: values.inspection
      };
      var diagnoseData = [];
      values.diagnose?.map((diagnose) => {
         diagnoseData.push({
            patientId: PatientId,
            type: diagnose.type,
            usageType: 'IN',
            diagnoseId: diagnose.id,
            diagnoseType: diagnose.diagnoseType,
            inpatientRequestId: InpatientRequestId,
            appointmentId: null
         });
      });
      data['diagnoses'] = diagnoseData;
      console.log('===>', data);
      const response = await Post('emr/inspectionNote', token, conf, data);
      if (response === 201) {
         form.resetFields();
         setIsOpenModal(false);
      }
   };
   const DiagnoseHandleClick = (diagnoses) => {
      console.log(diagnoses);
      form.setFieldsValue({ diagnose: diagnoses });
   };
   useEffect(() => {
      getDiagnoses();
   }, []);
   return (
      <>
         <div className="flow-root">
            <div className="float-right">
               <Button type="primary" onClick={() => openModal()}>
                  Нэмэх
               </Button>
            </div>
         </div>
         <List
            loading={clinicalIsLoading}
            grid={{
               column: 1
            }}
            dataSource={clinicalDiagnoses}
            renderItem={(item, index) => (
               <List.Item key={index}>
                  <List.Item.Meta title="Зовиураас:" description={item.pain} />
                  <List.Item.Meta title="Асуумжаас:" description={item.question} />
                  <List.Item.Meta title="Бодит үзлэгээс:" description={item.inspection} />
               </List.Item>
            )}
         />
         {/* {clinicalDiagnoses?.map((clinic, index) => {
            return (
               <div className="py-2" key={index}>
                  <Card>
                     <List
                        dataSource={clinic}
                        renderItem={(item) => (
                           <List.Item>
                              <List.Item.Meta title={item.id} />
                           </List.Item>
                        )}
                     ></List>
                  </Card>
               </div>
            );
         })} */}
         <Modal
            title="Нэмэх"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
               })
            }
            width={'60%'}
         >
            <Form form={form} layout="vertical">
               <Form.Item label="Зовиураас:" name="pain">
                  <TextArea />
               </Form.Item>
               <Form.Item label="Асуумжаас:" name="question">
                  <TextArea />
               </Form.Item>
               <Form.Item label="Бодит үзлэгээс:" name="inspection">
                  <TextArea />
               </Form.Item>
               <Diagnose
                  handleClick={DiagnoseHandleClick}
                  type={[0, 1, 2]}
                  appointmentHasInsurance={false}
                  serviceId={ServiceId}
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
            </Form>
         </Modal>
      </>
   );
}
export default ClinicalDiagnoseMain;
