import { Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { selectPatient } from '../../../../../features/patientReducer';
import { useSelector } from 'react-redux';
import patientDiagnose from '../../../../../services/emr/patientDiagnose';
import healtInsurance from '../../../../../services/healt-insurance/healtInsurance';
import { getAge } from '../../../../common';
const { Option } = Select;
const { TextArea } = Input;

export const SetPatientReturn = (props) => {
   const { form } = props;
   const [diagnosis, setDiagnosis] = useState([]);
   const [hospitals, setHospitals] = useState([]);
   const patient = useSelector(selectPatient);
   useEffect(() => {
      form.setFieldsValue({
         patientRegno: patient.registerNumber,
         patientFirstname: patient.firstName,
         patientLastname: patient.lastName,
         age: getAge(patient.registerNumber),
         gender: patient.genderType,
         phone: patient.phoneNo,
         email: patient.email
      });
   }, []);
   const gender = (value) => {
      if (value == 'WOMAN') return 'эм';
      else if (value == 'MAN') return 'эр';
   };
   const getPatientDiagnosis = async () => {
      await patientDiagnose.getByPageFilter({ patientId: patient.id }).then(({ data }) => {
         if (data.success) {
            setDiagnosis(data.response.data.map((patientDiagnose) => patientDiagnose.diagnose));
         }
      });
   };
   const getHospitalList = async () => {
      await healtInsurance.getHospitalList().then((response) => {
         if (response.status == 200) {
            setHospitals(response.data.result);
         }
      });
   };
   useEffect(() => {
      getPatientDiagnosis();
      getHospitalList();
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
                  label="Өвчтөний нас"
                  name="age"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөний нас'
                     }
                  ]}
               >
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item
                  label="Өвчтөний хүйс"
                  name="gender"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөний хүйс'
                     }
                  ]}
               >
                  <Select
                     options={[
                        { value: gender('WOMAN'), label: 'Эмэгтэй' },
                        { value: gender('MAN'), label: 'Эрэгтэй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item
                  label="Утасны дугаар"
                  name="phone"
                  rules={[
                     {
                        required: true,
                        message: 'Утасны дугаар'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="И-мэйл хаяг"
                  name="email"
                  rules={[
                     {
                        required: true,
                        message: 'И-мэйл хаяг'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Илгээсэн огноо"
                  name="sentDate"
                  rules={[
                     {
                        required: true,
                        message: 'Илгээсэн огноо'
                     }
                  ]}
               >
                  <DatePicker />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Онош"
                  name="diag"
                  rules={[
                     {
                        required: true,
                        message: 'Онош'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => {
                        return option.children.toLowerCase().includes(input.toLowerCase());
                     }}
                  >
                     {diagnosis?.map((diagnose, index) => (
                        <Option key={index} value={diagnose.code}>
                           {diagnose.code}
                        </Option>
                     ))}
                  </Select>
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Хийгдсэн эмчилгээ"
                  name="treatmentAdvice"
                  rules={[
                     {
                        required: true,
                        message: 'Хийгдсэн эмчилгээ'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Эмнэлгээс гарах үеийн биеийн байдал"
                  name="phyCondition"
                  rules={[
                     {
                        required: true,
                        message: 'Эмнэлгээс гарах үеийн биеийн байдал'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => {
                        return option.label.toLowerCase().includes(input.toLowerCase());
                     }}
                     options={[
                        {
                           value: 'Сайжирсан',
                           label: 'Сайжирсан'
                        },
                        {
                           value: 'Хэвийн',
                           label: 'Хэвийн'
                        }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Өвчтөнд өгсөн зөвлөгөө"
                  name="advice"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчтөнд өгсөн зөвлөгөө'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Хүлээн авч буй ЭМБ-д өгөх зөвлөмж"
                  name="receiveHosAdv"
                  rules={[
                     {
                        required: true,
                        message: 'Хүлээн авч буй ЭМБ-д өгөх зөвлөмж'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Хүлээн авч буй ЭМБ"
                  name="recHospitalName"
                  rules={[
                     {
                        required: true,
                        message: 'Хүлээн авч буй ЭМБ-д өгөх зөвлөмж'
                     }
                  ]}
               >
                  <Select
                     virtual={false}
                     allowClear
                     showSearch
                     optionFilterProp="children"
                     filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                     options={hospitals?.map((hospital) => ({
                        label: hospital.hospitalName,
                        value: hospital.hospitalName
                     }))}
                  />
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};

