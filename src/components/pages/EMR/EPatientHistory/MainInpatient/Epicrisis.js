import React, { useEffect, useState } from 'react';
import { DefualtGet, Get, Patch, Post } from '../../../../comman';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { useSelector } from 'react-redux';
import {
   Button,
   Card,
   Divider,
   Form,
   Input,
   List,
   Modal,
   Radio,
   Select
} from 'antd';
const { TextArea } = Input;
const { Option } = Select;
function Epicrisis({ PatientId, InpatientRequestId, InsuranceServiceId }) {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const [epicrisis, setEpicrisis] = useState([]);
   const [diagnoses, setDiagnoses] = useState([]);
   const [epicrisisIsLoading, setEpicrisisIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedDiagnoseId, setSelectedDiagnoseId] = useState(Number);
   const [hicsCostByFields, setHicsCostByFields] = useState([]);
   const getEpicrisis = async () => {
      setEpicrisisIsLoading(true);
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: InpatientRequestId
         }
      };
      const response = await Get('inpatient/epicrisis', token, conf);
      console.log(response);
      //   setClinicalDiagnoses(response.data);
      setEpicrisisIsLoading(false);
   };
   const getDiagnoses = async () => {
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: InpatientRequestId
         }
      };
      const response = await Get('emr/patient-diagnose', token, conf);
      setDiagnoses(response.data);
   };
   const getHicsCostByField = async (icdCode) => {
      const conf = {
         headers: {},
         params: {
            serviceId: InsuranceServiceId,
            icdCode: icdCode
         }
      };
      const response = await DefualtGet(
         'health-insurance/hics-cost-by-field',
         token,
         conf
      );
      if (response?.result?.length > 0) {
         setHicsCostByFields(response?.result);
      } else {
         setHicsCostByFields([]);
      }
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
      values['patientId'] = PatientId;
      values['inpatientRequestId'] = InpatientRequestId;
      console.log(values);
      //   const response = await Post('inpatient/epicrisis', token, conf, values);
      //   if (response === 201) {
      //      form.resetFields();
      //      setIsOpenModal(false);
      //   }
   };
   useEffect(() => {
      const icdCode = diagnoses.find((e) => e.diagnoseId === selectedDiagnoseId)
         ?.diagnose?.code;
      console.log(icdCode);
      if (icdCode != undefined) {
         form.setFieldValue('hicsCost', null);
         getHicsCostByField(icdCode);
      }
   }, [selectedDiagnoseId]);
   useEffect(() => {
      getEpicrisis();
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
         <Modal
            title="Нэмэх"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
               setSelectedDiagnoseId(null);
            }}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
               })
            }
         >
            <Form form={form} layout="vertical">
               <Form.Item
                  label="Гарах үеийн биеийн байдал:"
                  name="outBodyCondition"
                  initialValue={1}
               >
                  <Radio.Group>
                     <Radio value={1}>Хөнгөн</Radio>
                     <Radio value={2}>Дунд</Radio>
                     <Radio value={3}>Хүндэвтэр</Radio>
                     <Radio value={4}>Хүнд</Radio>
                     <Radio value={5}>Маш хүнд</Radio>
                  </Radio.Group>
               </Form.Item>
               <Form.Item label="Үндсэн онош:" name="diagnoseId">
                  <Select onChange={(e) => setSelectedDiagnoseId(e)}>
                     {diagnoses?.map((diagnose, index) => {
                        if (diagnose.diagnoseType === 0) {
                           return (
                              <Option key={index} value={diagnose.diagnoseId}>
                                 {`${diagnose.diagnose?.code} -> ${diagnose.diagnose?.nameMn}`}
                              </Option>
                           );
                        }
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="ОХБ" name="hicsCost">
                  <Select>
                     {hicsCostByFields?.map((field, index) => {
                        return (
                           <Option
                              value={`[${field.drgCode}, ${field.groupId}]`}
                              key={index}
                           >
                              {field.drgName}
                              {/* {`${diagnose.diagnose?.code} -> ${diagnose.diagnose?.nameMn}`} */}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Дагалдах онош:" name="addDiagnoseId">
                  <Select>
                     {diagnoses?.map((diagnose, index) => {
                        if (diagnose.diagnoseType === 3) {
                           return (
                              <Option key={index} value={diagnose.id}>
                                 {`${diagnose.diagnose?.code} -> ${diagnose.diagnose?.nameMn}`}
                              </Option>
                           );
                        }
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Хүндрэл" name="severity">
                  <Input />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
}
export default Epicrisis;
