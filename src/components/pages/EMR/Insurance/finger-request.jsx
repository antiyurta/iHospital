import { Col, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../features/patientReducer';
import insurance from '../../../../services/healt-insurance/insurance';
import healthInsurance from '../../../../services/healt-insurance/healtInsurance';

const { TextArea } = Input;

const FingerRequest = (props) => {
   const { form } = props;
   const patient = useSelector(selectPatient);
   const [hicsServices, setHicsServices] = useState([]);
   const [statePayments, setStatePayments] = useState([]);
   useEffect(() => {
      form.setFieldsValue({
         regNo: patient.registerNumber,
         lastName: patient.lastName,
         firstName: patient.firstName,
      });
   }, []);
   const getHicsServices = async () => {
      await insurance.getHicsService().then((response) => {
         if (response.status == 200) {
            setHicsServices(response.data.data);
         }
      });
   };
   const getStatePayments = async () => {
      await healthInsurance.getFreeType().then(({ data}) => {
         if (data.code == 200) {
            setStatePayments(data.result);
         }
      });
   };
   useEffect(() => {
      getHicsServices();
      getStatePayments();
   }, []);
   return (
      <>
         <p>Иргэний мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Иргэний регистр"
                  name={'regNo'}
                  rules={[
                     {
                        required: true,
                        message: 'регистр оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Иргэний овог"
                  name="lastName"
                  rules={[
                     {
                        required: true,
                        message: 'овог оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Иргэний нэр"
                  name="firstName"
                  rules={[
                     {
                        required: true,
                        message: 'нэр оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Үйлчилгээний дугаар"
                  name="serviceId"
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
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={hicsServices.map((service) => ({
                        label: service.name,
                        value: service.id
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Шалтгаан"
                  name="reasonId"
                  rules={[
                     {
                        required: true,
                        message: 'Шалтгаан'
                     }
                  ]}
               >
                  <Select
                     options={[
                        { value: 1, label: 'Хурууны хээ таарахгүй' },
                        { value: 2, label: '10 хуруу байхгүй' },
                        { value: 3, label: 'Хурууны хээний бүтэц өөрчлөгдсөн' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Төр хариуцах иргэн эсэх"
                  name="isStatePayment"
                  rules={[
                     {
                        required: true,
                        message: 'Төр хариуцах иргэн эсэх'
                     }
                  ]}
               >
                  <Select
                     virtual={false}
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={statePayments.map((statePayment) => ({
                        label: statePayment.name,
                        value: statePayment.id
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
               <Form.Item
                  label="Тайлбар"
                  name="descr"
                  rules={[
                     {
                        required: true,
                        message: 'Тайлбар'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};
export default FingerRequest;
