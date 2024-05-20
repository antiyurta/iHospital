import React, { useEffect, useState } from 'react';
import { Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import { bloodType, pregnancyActivity, relationship } from '@Utils/config/xypField';
import { useSelector } from 'react-redux';
import { ListPatientInfo } from '@Comman/ListInjection';
import { selectPatient } from '@Features/patientReducer';
import InsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

const { TextArea } = Input;
const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};
export const SendFormData = ({ form }) => {
   const patient = useSelector(selectPatient);
   const [formData, setFormData] = useState([]);
   useEffect(() => {
      InsuranceApi.getFormData(1).then((res) => {
         setFormData(res.data.result);
      });
   }, []);

   return (
      <>
         <p style={labelstyle}>Өвчтөний мэдээлэл:</p>
         <ListPatientInfo patientData={patient} />
         <p style={labelstyle}>ЖИРЭМСЭН ҮЕИЙН МЭДЭЭЛЭЛ:</p>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Тусламж, үйлчилгээний дугаар"
                  name="serviceNo"
                  rules={[
                     {
                        required: true,
                        message: 'Тусламж, үйлчилгээний дугаар'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Жирэмсний хяналтад орсон огноо"
                  name="pregnancyControlledDate"
                  rules={[
                     {
                        required: true,
                        message: 'Жирэмсний хяналтад орсон огноо'
                     }
                  ]}
               >
                  <DatePicker />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Жирэмсний хугацаа /7 хоногоор/"
                  name="pregnancyWeek"
                  rules={[
                     {
                        required: true,
                        message: 'Жирэмсний хугацаа /7 хоногоор/'
                     }
                  ]}
               >
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Төлөв"
                  name="pregnancyActivityId"
                  rules={[
                     {
                        required: true,
                        message: 'Нийт дүн'
                     }
                  ]}
               >
                  <Select
                     options={pregnancyActivity.map((item) => ({ value: item.valueId, label: item.valueName }))}
                     onSelect={(_, option) => form.setFieldValue('pregnancyActivityName', option.label)}
                  />
               </Form.Item>
               <Form.Item name="pregnancyActivityName" hidden>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Жирэмслэхээс сэргийлэх арга хэмжээ авч байсан эсэх" name="protectMethod">
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Үр хөндүүлж байсан эсэх" name="abortion">
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Цусны бүлэг" name="bloodType">
                  <Select options={bloodType.map((item) => ({ value: item.valueId, label: item.valueName }))} />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Гэрлэлтийн байдал" name="martialStatus">
                  <Select options={relationship.map((item) => ({ value: item.valueId, label: item.valueName }))} />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хөгжлийн бэрхшээлтэй эсэх" name="isImpairment">
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Архи хэрэглэдэг эсэх" name="isAlcohol">
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Тамхи хэрэглэдэг эсэх" name="isSmoking">
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Урт хугацааны эм биологийн идэвхит бүтээгдэхүүн тогтмол хэрэглэдэг эсэх" name="isDrug">
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};
