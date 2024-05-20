import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
//api
import InsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

const { TextArea } = Input;

export const SendDirectService = ({ form }) => {
   const [exams, setExams] = useState([]);

   const getExam = useCallback(async () => {
      const response = await InsuranceApi.getHicsExam();
      setExams(response.data.result);
   }, []);

   useEffect(() => {
      getExam();
   }, [getExam]);

   return (
      <>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Битүүмжийн дугаар"
                  name="parentServiceNumber"
                  rules={[
                     {
                        required: true,
                        message: 'Битүүмжийн дугаар'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="ЭМД хөнгөлөх дүн"
                  name="discountAmount"
                  rules={[
                     {
                        required: true,
                        message: 'ЭМД хөнгөлөх дүн'
                     }
                  ]}
               >
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Иргэний төлөх дүн"
                  name="payedAmount"
                  rules={[
                     {
                        required: true,
                        message: 'Иргэний төлөх дүн'
                     }
                  ]}
               >
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Нийт дүн"
                  name="totalAmount"
                  rules={[
                     {
                        required: true,
                        message: 'Нийт дүн'
                     }
                  ]}
               >
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Энэхүү сервисийг ашиглаж байгаа шалтгаан" name="reason">
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Төлбөрийн мэдээлэл</p>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item label="ДДТДугаар" name={['payments', 'posRno']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Нийт дүн" name={['payments', 'totalAmount']}>
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хөнгөлсөн дүн" name={['payments', 'discountAmount']}>
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="НӨАТ-ын дүн" name={['payments', 'vatAmount']}>
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Иргэн төлсөн дүн" name={['payments', 'payedAmount']}>
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Үйлчилгээний нэр" name={['payments', 'salesName']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Огноо" name={['payments', 'salesDate']}>
                  <DatePicker />
               </Form.Item>
            </Col>
         </Row>

         <p>Оношийн мэдээлэл</p>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item label="Оношийн код" name={['diagnosis', 'icdCode']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хавсарсан онош код" name={['diagnosis', 'icdAddCode']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Icd9 код" name={['diagnosis', 'icd9Code']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Эмчийн үзлэгийн тэмдэглэл" name={['diagnosis', 'description']}>
                  <TextArea />
               </Form.Item>
            </Col>
         </Row>
         <p>Тусламж, үйлчилгээний мэдээлэл</p>
         <Form.List name="packages">
            {(fields, { add: packAdd, remove: packRemove }) => (
               <Fragment>
                  {fields.map(({ key, name }) => (
                     <Fragment key={key}>
                        <Button
                           type="dashed"
                           danger
                           onClick={() => {
                              packRemove(name);
                           }}
                           style={{ width: '100%' }}
                        >
                           Тусламж, үйлчилгээний мэдээлэл устгах
                        </Button>
                        <Row>
                           <Col span={7} offset={1}>
                              <Form.Item label="Хэд дэх үзлэг/1,2,3,../" name={[name, , 'checkupId']}>
                                 <InputNumber />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Төрөл" name={[name, key, 'packId']}>
                                 <Select
                                    options={[
                                       { value: 1, label: 'Шинжилгээ' },
                                       { value: 2, label: 'Оношилгоо' }
                                    ]}
                                 />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Оношийн код" name={[name, key, 'icd10']}>
                                 <Input />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Icd9 онош" name={[name, 'icd9']}>
                                 <Input />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Огноо" name={[name, 'inDate']}>
                                 <DatePicker />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Шинжилгээний дугаар" name={[name, 'examCode']}>
                                 <Select
                                    allowClear
                                    showSearch
                                    filterOption={(input, option) =>
                                       option.label.toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={exams.map((item) => ({
                                       value: item.examCode,
                                       label: item.examName
                                    }))}
                                 />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Үнийн дүн" name={[name, 'amount']}>
                                 <InputNumber />
                              </Form.Item>
                           </Col>
                           <Col span={11} offset={1}>
                              <Form.Item label="Тэмдэглэл" name={[name, 'descr']}>
                                 <TextArea />
                              </Form.Item>
                           </Col>
                           <Col span={11} offset={1}>
                              <Form.Item label="Шинжилгээний хариуны мэдээлэл" name={[name, 'examResult']}>
                                 <TextArea />
                              </Form.Item>
                           </Col>
                        </Row>
                     </Fragment>
                  ))}
                  <Form.Item>
                     <Button type="dashed" onClick={() => packAdd()} style={{ width: '100%' }}>
                        Тусламж үйлчилгээний мэдээлэл нэмэх
                     </Button>
                  </Form.Item>
               </Fragment>
            )}
         </Form.List>
      </>
   );
};
