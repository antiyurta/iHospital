import React, { Fragment, useEffect, useState } from 'react';
import { Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import { bloodType, pregnancyActivity, relationship } from '@Utils/config/xypField';
import { useSelector } from 'react-redux';
import { ListPatientInfo } from '@Comman/ListInjection';
import { selectPatient } from '@Features/patientReducer';
import InsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};
export const SendFormData = ({ form }) => {
   const patient = useSelector(selectPatient);
   useEffect(() => {
      InsuranceApi.getFormData(1).then((res) => {
         form.setFieldValue('formdata', res.data.result);
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
                  name={['pregnantInfo', 'serviceNo']}
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
                  name={['pregnantInfo', 'pregnancyControlledDate']}
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
                  name={['pregnantInfo', 'pregnancyWeek']}
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
                  name={['pregnantInfo', 'pregnancyActivityId']}
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
               <Form.Item name={['pregnantInfo', 'pregnancyActivityName']} hidden>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Жирэмслэхээс сэргийлэх арга хэмжээ авч байсан эсэх"
                  name={['pregnantInfo', 'protectMethod']}
               >
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Үр хөндүүлж байсан эсэх" name={['pregnantInfo', 'abortion']}>
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Цусны бүлэг" name={['pregnantInfo', 'bloodType']}>
                  <Select options={bloodType.map((item) => ({ value: item.valueId, label: item.valueName }))} />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Гэрлэлтийн байдал" name={['pregnantInfo', 'martialStatus']}>
                  <Select options={relationship.map((item) => ({ value: item.valueId, label: item.valueName }))} />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хөгжлийн бэрхшээлтэй эсэх" name={['pregnantInfo', 'isImpairment']}>
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Архи хэрэглэдэг эсэх" name={['pregnantInfo', 'isAlcohol']}>
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Тамхи хэрэглэдэг эсэх" name={['pregnantInfo', 'isSmoking']}>
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Урт хугацааны эм биологийн идэвхит бүтээгдэхүүн тогтмол хэрэглэдэг эсэх"
                  name={['pregnantInfo', 'isDrug']}
               >
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 2, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
         </Row>
         <Form.List name="formdata">
            {(formdata) => (
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  {formdata.map((item, index) => (
                     <Fragment key={index}>
                        <Form.Item name={[item.name, 'docud']} hidden>
                           <Input />
                        </Form.Item>
                        <Form.Item name={[item.name, 'categoryId']} hidden>
                           <Input />
                        </Form.Item>
                        <Form.Item label="Бүлгийн нэр" name={[item.name, 'categoryName']}>
                           <Input disabled />
                        </Form.Item>
                        <Form.Item name={[item.name, 'fieldId']} hidden>
                           <Input />
                        </Form.Item>
                        <Form.Item label="Талбарын нэр" name={[item.name, 'fieldName']}>
                           <Input disabled />
                        </Form.Item>
                        <Form.Item name={[item.name, 'type']} hidden>
                           <Input />
                        </Form.Item>
                        <Form.Item label="Хариулт" name={[item.name, 'value']}>
                           {form.getFieldValue(['formdata', item.name, 'type']) == 'selectAnswer' ? (
                              <Select
                                 options={form
                                    .getFieldValue(['formdata', item.name, 'refs'])
                                    ?.map((item) => ({ value: item.resultId, label: item.resultName }))}
                              />
                           ) : (
                              <Input placeholder="Хариултаа бичнэ үү." />
                           )}
                        </Form.Item>
                        <Form.List name={[item.name, 'refs']}>
                           {(refs) => (
                              <div className="rounded-md bg-[#e8eaee] w-full inline-block m-1">
                                 {refs.map((item, index) => (
                                    <Fragment key={index}>
                                       <Form.Item name={[item.name, 'docud']} hidden>
                                          <Input />
                                       </Form.Item>
                                       <Form.Item name={[item.name, 'resultId']} hidden>
                                          <Input />
                                       </Form.Item>
                                       <Form.Item name={[item.name, 'resultName']} hidden>
                                          <Input />
                                       </Form.Item>
                                    </Fragment>
                                 ))}
                              </div>
                           )}
                        </Form.List>
                     </Fragment>
                  ))}
               </div>
            )}
            {/* {
 "docud": 297,
 "categoryId": 1,
 "categoryName": "Өмнөх жирэмслэлт, төрөлтийн байдлын талаарх мэдээлэл",
 "fieldId": 1,
 "fieldName": "Хэд дэх жирэмслэлт",
 "type": "inputText",
 "value": "2",
 "refs": null
 }, */}
         </Form.List>
      </>
   );
};
