import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../features/patientReducer';
import healtInsurance from '../../../../services/healt-insurance/healtInsurance';

const { TextArea } = Input;

const SetApproval = (props) => {
   const { form } = props;
   const patient = useSelector(selectPatient);
   const [hicsServices, setHicsServices] = useState([]);
   useEffect(() => {
      form.setFieldsValue({
         patientRegno: patient.registerNumber,
         patientFirstname: patient.firstName,
         patientLastname: patient.lastName,
         toHospitalId: 1892298
      });
   }, []);
   const getHicsServices = async () => {
      await healtInsurance.getHicsService().then(({ data}) => {
         if (data.code == 200) {
            setHicsServices(data.result);
         }
      });
   };
   useEffect(() => {
      getHicsServices();
   }, []);
   return (
      <>
         <p>Өвчтөний мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label=" Өвчтөний регистр"
                  name={'patientRegno'}
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөний регистрийн дугаар оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Өвчтөний нэр"
                  name="patientFirstname"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөний нэр оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Өвчтөний овог"
                  name="patientLastname"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөний овог'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Үйлчилгээний дугаар"
                  name="fromServiceId"
                  rules={[
                     {
                        required: true,
                        message: 'Үйлчилгээний дугаар'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) => {
                        return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
                     }}
                     options={hicsServices?.map((service) => ({
                        label: service.name,
                        value: service.id
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Заалт хийж байгаа үйлчилгээний дугаар"
                  name="toServiceId"
                  rules={[
                     {
                        required: true,
                        message: 'Заалт хийж байгаа үйлчилгээний дугаар'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) => {
                        return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
                     }}
                     options={hicsServices?.map((service) => ({
                        label: service.name,
                        value: service.id
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
               <Form.Item
                  label="Заалтын тайлбар"
                  name="approvalDesc"
                  rules={[
                     {
                        required: true,
                        message: 'Заалтын тайлбар'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Илгээх эмнэлгийн дугаар"
                  name="toHospitalId"
                  rules={[
                     {
                        required: true,
                        message: 'Илгээх эмнэлгийн дугаар'
                     }
                  ]}
               >
                  <InputNumber />
                  {/* <Select
                     virtual={false}
                     allowClear
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                     options={hospitals?.map((hospital) => ({
                        label: hospital.hospitalName + '->' + hospital.hospitalRegno,
                        value: hospital.hospitalRegno
                     }))}
                  /> */}
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};
export default SetApproval;
