import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Col, DatePicker, Form, Input, InputNumber, Radio, Row, Select } from 'antd';
//api
import StructureApi from '@ApiServices/organization/structure';

const { TextArea } = Input;

export const SentAddHicsService = ({ form }) => {
   const [cabinets, setCabinets] = useState([]);

   const getCabinet = useCallback(async () => {
      const response = await StructureApi.get();
      setCabinets(response.data.response.data);
   }, []);

   useEffect(() => {
      getCabinet();
   }, [getCabinet]);

   return (
      <>
         <p>Өвчтөний мэдээлэл</p>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Регистрийн дугаар"
                  name="regNo"
                  rules={[
                     {
                        required: true,
                        message: 'Иргэний регистрийн дугаар'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Нэр"
                  name="firstName"
                  rules={[
                     {
                        required: true,
                        message: 'Нэр оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Овог"
                  name="lastName"
                  rules={[
                     {
                        required: true,
                        message: 'Овог'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Тусламж, үйлчилгээний мэдээлэл</p>
         <Form.List name="serviceList">
            {(fields, { add, remove }) => (
               <Fragment>
                  {fields.map(({ key, name }) => (
                     <Fragment key={key}>
                        <Button
                           type="dashed"
                           danger
                           onClick={() => {
                              remove(name);
                           }}
                           style={{ width: '100%' }}
                        >
                           Устгах
                        </Button>
                        <Row>
                           <Col span={7} offset={1}>
                              <Form.Item label="Хэд дэх үзлэг/1,2,3,../" name={[name, 'checkupId']}>
                                 <InputNumber />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Эхлэсэн хугацаа" name={[name, 'startDate']}>
                                 <DatePicker />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Дууссан хугацаа" name={[name, 'endDate']}>
                                 <DatePicker />
                              </Form.Item>
                           </Col>
                           <Col span={11} offset={1}>
                              <Form.Item label="Битүүмжийн дугаар" name={[name, 'parentServiceNumber']}>
                                 <Input />
                              </Form.Item>
                           </Col>
                           <Col span={11} offset={1}>
                              <Form.Item label="Тусламж, үйлчилгээг эхлүүлсэн дугаар" name={[name, 'startCode']}>
                                 <Input />
                              </Form.Item>
                           </Col>
                           <Col span={11} offset={1}>
                              <Form.Item label="Кабинетийн дугаар" name={[name, 'departNo']}>
                                 <Select
                                    allowClear
                                    showSearch
                                    filterOption={(input, option) =>
                                       option.label.toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={cabinets.map((item) => ({
                                       value: item.id.toString(),
                                       label: item.name
                                    }))}
                                 />
                              </Form.Item>
                           </Col>
                           <Col span={11} offset={1}>
                              <Form.Item label="Оношилгоо, шинжилгээтэй эсэх" name={[name, 'hasExams']}>
                                 <Radio.Group>
                                    <Radio value={1}>Тийм</Radio>
                                    <Radio value={0}>Үгүй</Radio>
                                 </Radio.Group>
                              </Form.Item>
                           </Col>
                        </Row>
                        <p>Оношийн мэдээлэл</p>
                        <Row>
                           <Col span={7} offset={1}>
                              <Form.Item label="Оношийн код" name={[name, 'diagnosis', 'icdCode']}>
                                 <Input />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Хавсарсан онош код" name={[name, 'diagnosis', 'icdAddCode']}>
                                 <Input />
                              </Form.Item>
                           </Col>
                           <Col span={7} offset={1}>
                              <Form.Item label="Icd9 код" name={[name, 'diagnosis', 'icd9Code']}>
                                 <Input />
                              </Form.Item>
                           </Col>
                           <Col span={11} offset={1}>
                              <Form.Item label="Эмчийн үзлэгийн тэмдэглэл" name={[name, 'diagnosis', 'description']}>
                                 <TextArea />
                              </Form.Item>
                           </Col>
                        </Row>
                     </Fragment>
                  ))}
                  <Form.Item>
                     <Button
                        type="dashed"
                        onClick={() => {
                           add();
                        }}
                        style={{ width: '100%' }}
                     >
                        Нэмэх
                     </Button>
                  </Form.Item>
               </Fragment>
            )}
         </Form.List>
      </>
   );
};
