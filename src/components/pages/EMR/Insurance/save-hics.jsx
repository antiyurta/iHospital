import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn } from '../../../comman';
import insurance from '../../../../services/healt-insurance/insurance';
const SaveHics = (props) => {
   const { form } = props;
   const [hicsServices, setHicsServices] = useState([]);
   const getHicsServices = async () => {
      await insurance.getHicsService().then((response) => {
         if (response.status == 200) {
            setHicsServices(response.data.data);
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
                  label="Регистр"
                  name="patientRegno"
                  rules={[
                     {
                        required: true,
                        message: 'Регистр оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Хурууны хээ"
                  name="patientFingerprint"
                  rules={[
                     {
                        required: true,
                        message: 'Регистр оруулна уу'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Донорын регистрийн дугаар /эрхтэн шилжүүлэх ТҮ дээр/"
                  name="secondRegno"
                  rules={[
                     {
                        required: true,
                        message: 'Донорын регистрийн дугаар'
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
                        message: 'Өвчтөний нэр'
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
         </Row>
         <p>Үндсэн мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Эхлэх огноо"
                  name="startDate"
                  rules={[
                     {
                        required: true,
                        message: 'Эхлэх огноо'
                     }
                  ]}
               >
                  <DatePicker locale={localMn} />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Дуусах огноо"
                  name="endDate"
                  rules={[
                     {
                        required: true,
                        message: 'Дуусах огноо'
                     }
                  ]}
               >
                  <DatePicker locale={localMn} />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Үйлчилгээний дугаар"
                  name="hicsServiceId"
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
                     options={hicsServices.map((hicsService) => ({ value: hicsService.id, label: hicsService.name }))}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Эцэг үйлчилгээний дугаар"
                  name="parentServiceNumber"
                  rules={[
                     {
                        required: true,
                        message: 'Эцэг үйлчилгээний дугаар'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={hicsServices.map((hicsService) => ({ value: hicsService.id, label: hicsService.name }))}
                  />
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};
export default SaveHics;
