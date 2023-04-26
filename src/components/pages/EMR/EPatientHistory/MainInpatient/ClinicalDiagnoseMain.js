import React, { useEffect, useState } from 'react';
import { Get, Patch, Post } from '../../../../comman';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { useSelector } from 'react-redux';
import { Button, Card, Form, Input, List, Modal } from 'antd';
import Diagnose from '../../../service/Diagnose';
const { TextArea } = Input;
function ClinicalDiagnoseMain({ PatientId, InpatientRequestId }) {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const [clinicalDiagnoses, setClinicalDiagnoses] = useState([]);
   const [clinicalIsLoading, setClinicalIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const getDiagnoses = async () => {
      setClinicalIsLoading(true);
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: InpatientRequestId
         }
      };
      const response = await Get('emr/inspectionNote', token, conf);
      setClinicalDiagnoses(response.data);
      setClinicalIsLoading(false);
   };
   const openModal = () => {
      form.resetFields();
      setIsOpenModal(true);
   };
   const onFinish = async (values) => {
      console.log(values);
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         patientId: PatientId,
         inpatientRequestId: InpatientRequestId
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
      const response = await Post('emr/inspectionNote', token, conf, data);
      if (response === 201) {
         form.resetFields();
         setIsOpenModal(false);
      }
   };
   const DiagnoseHandleClick = (diagnoses) => {
      form.setFieldValue('diagnose', diagnoses);
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
                  <List.Item.Meta
                     title="Асуумжаас:"
                     description={item.question}
                  />
                  <List.Item.Meta
                     title="Бодит үзлэгээс:"
                     description={item.inspection}
                  />
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
               <Diagnose handleClick={DiagnoseHandleClick} type={0} />
            </Form>
         </Modal>
      </>
   );
}
export default ClinicalDiagnoseMain;
