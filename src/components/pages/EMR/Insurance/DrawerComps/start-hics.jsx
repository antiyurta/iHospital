import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../../features/patientReducer';
import healthInsurance from '../../../../../services/healt-insurance/healtInsurance';
import { InpatientGroupIds } from '@Utils/config/insurance';
import { openNofi } from '../../../../common';

export const StartHics = ({ form }) => {
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
         <Col span={11} offset={1}>
            <Form.Item
               name={'patientRegno'}
               label={<div style={{ width: '100%' }}>Иргэний регистр</div>}
               rules={[{ required: true, message: 'Регистр оруулна уу' }]}
               className="left"
            >
               <Input />
            </Form.Item>
         </Col>
         <Col span={11} offset={1}>
            <Form.Item
               name="patientFingerprint"
               label="Иргэний хурууны хээний мэдээлэл"
               rules={[{ required: true, message: 'Мэдээлэл оруулна уу' }]}
            >
               --
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
      </Row>
   );
};

