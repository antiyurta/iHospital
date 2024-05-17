import { Col, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../../features/patientReducer';
import insurance from '../../../../../services/healt-insurance/insurance';
import healthInsurance from '../../../../../services/healt-insurance/healtInsurance';
import patientDiagnose from '../../../../../services/emr/patientDiagnose';

const { TextArea } = Input;

export const RepairHics = (props) => {
   const { form } = props;
   const patient = useSelector(selectPatient);
   const [hicsServices, setHicsServices] = useState([]);
   const [drgies, setDrgies] = useState([]);
   const [diagnosis, setDiagnosis] = useState([]);
   const getPatientData = async () => {
      await healthInsurance.getPatientData(patient.registerNumber).then(({ data }) => {
         if (data.code == 200) {
            const details = data.result.details;
            setHicsServices(details.filter((detail) => detail.statusCode == 5));
         }
      });
   };
   const getDrgies = async () => {
      await healthInsurance.drgCode().then(({ data }) => {
         if (data.code == 200) {
            setDrgies(data.result);
         }
      });
   };
   const getPatientDiagnosis = async () => {
      await patientDiagnose.getByPageFilter({ patientId: patient.id }).then(({ data }) => {
         if (data.success) {
            const diagnosis = data.response.data.map((patientDiagnose) => patientDiagnose.diagnose);
            const uniqueDiagnosis = diagnosis.filter((item, index, self) => {
               const currentIndex = self.findIndex((el) => el.code === item.code);
               return currentIndex === index;
            });
            setDiagnosis(uniqueDiagnosis);
         }
      });
   };
   const setFields = (value) => {
      const hicsService = hicsServices.find((hicsService) => hicsService.serviceNumber == value);
      form.setFieldsValue({
         drgCode: hicsService.drgCode,
         icdCode: hicsService.icdCode,
         icdCodeName: hicsService.icdCodeName,
         icd9Code: hicsService.icd9Code
      });
   };
   const setIcdCodeName = (value) => {
      const diagnose = diagnosis.find((diagnose) => diagnose.code == value);
      form.setFieldsValue({
         icdCodeName: diagnose.nameMn
      });
   };
   useEffect(() => {
      form.setFieldsValue({
         patientRegno: patient.registerNumber
      });
      getPatientData();
      getDrgies();
      getPatientDiagnosis();
   }, []);
   return (
      <>
         <p>Иргэний мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Иргэний регистр"
                  name={'patientRegno'}
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
                  label="Үйлчилгээний бүртгэлийн дугаар"
                  name="serviceNumber"
                  rules={[
                     {
                        required: true,
                        message: 'Үйлчилгээний бүртгэлийн дугаар'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={hicsServices.map((service) => ({
                        value: service.serviceNumber,
                        label: `${service.inDateStr} - ${service.serviceName} - ${service.icdCode}`
                     }))}
                     onSelect={setFields}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="ОХБ-ийн дугаар"
                  name="drgCode"
                  rules={[
                     {
                        required: true,
                        message: 'ОХБ-ийн дугаар'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={drgies.map((drg) => ({
                        value: drg.drgCode,
                        label: drg.drgName
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="ICD-10 код"
                  name="icdCode"
                  rules={[
                     {
                        required: true,
                        message: 'ICD-10 код'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={diagnosis.map((diagnose) => ({
                        value: diagnose.code,
                        label: `${diagnose.code}-${diagnose.nameMn}`
                     }))}
                     onSelect={setIcdCodeName}
                  />
               </Form.Item>
               <Form.Item label="ICD-10 код" name="icdCodeName" hidden>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="ICD-9 код"
                  name="icd9Code"
                  rules={[
                     {
                        required: true,
                        message: 'ICD-9 код'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
               <Form.Item
                  label="Засварлаж буй шалтгаан"
                  name="repairDesc"
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

