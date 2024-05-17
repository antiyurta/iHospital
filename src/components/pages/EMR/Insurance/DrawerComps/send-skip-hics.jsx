import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../../features/patientReducer';
import healthInsurance from '../../../../../services/healt-insurance/healtInsurance';
import { InpatientGroupIds } from '@Utils/config/insurance';
import { openNofi } from '../../../../common';

const { TextArea } = Input;

export const SendSkipHics = ({ form }) => {
   const patient = useSelector(selectPatient);
   const [hicsSupports, setHicsSupports] = useState([]);

   const getHicsService = async () => {
      await healthInsurance.getHicsService().then(({ data }) => {
         if (data.code === 200) {
            openNofi('success', 'Амжиллтай', `${data.description}`);
            setHicsSupports(data.result.filter((service) => InpatientGroupIds.includes(service.groupId)));
         } else {
            openNofi('error', 'Амжилтгүй', data.description);
         }
      });
   };

   useEffect(() => {
      form.setFieldsValue({ patientRegno: patient.registerNumber });
      getHicsService();
   }, []);

   return (
      <Row>
         <Col span={6} offset={1}>
            <Form.Item
               name={'patientRegno'}
               label="Иргэний регистр"
               rules={[{ required: true, message: 'Регистр оруулна уу' }]}
               className="left"
            >
               <Input />
            </Form.Item>
         </Col>
         <Col span={16} offset={1}>
            <Form.Item
               name="patientFingerprint"
               label="Өмнөх тусламж үйлчилгээний бүртгэлийн
               дугаар"
               rules={[{ required: true, message: 'Мэдээлэл оруулна уу' }]}
            >
               <Input placeholder="Бүртгэлийн дугаар оруулах" />
            </Form.Item>
         </Col>
         <Col span={22} offset={1}>
            <Form.Item
               name="hicsServiceId"
               label="Т.Ү-ний дугаар"
               rules={[{ required: true, message: 'Т.Ү-ний дугаар оруулна уу' }]}
            >
               <Select
                  placeholder="Үйлчилгээний төрөл сонгох"
                  options={hicsSupports.map(({ name, id }) => ({ label: name, value: id }))}
               />
            </Form.Item>
         </Col>
         <Col span={22} offset={1}>
            <Form.Item label="Тайлбар" name="descr">
               <TextArea placeholder="Тайлбар оруулна уу" />
            </Form.Item>
         </Col>
      </Row>
   );
};

