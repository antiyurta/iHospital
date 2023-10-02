import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { useEffect } from 'react';
import insurance from '../../../../services/healt-insurance/insurance';
import { useState } from 'react';
import { localMn } from '../../../comman';
import patientDiagnose from '../../../../services/emr/patientDiagnose';
import healtInsurance from '../../../../services/healt-insurance/healtInsurance';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../features/patientReducer';

const SetPatientSheet = (props) => {
   const { form } = props;
   const [hicsServices, setHicsServices] = useState([]);
   const [diagnosis, setDiagnosis] = useState([]);
   const [sentReasons, setSentReasons] = useState([]);
   const patient = useSelector(selectPatient);
   useEffect(() => {
      form.setFieldsValue({
         patientRegno: patient.registerNumber,
         patientFirstname: patient.firstName,
         patientLastname: patient.lastName,
         age: patient.age,
         gender: gender(patient.genderType),
         phone: patient.phoneNo,
         email: patient.email,
         address: patient.address,
         trusteeName: patient.contacts[0].name,
         trusteePhone: patient.contacts[0].contactPhoneNo,
         trusteeEmail: patient.contacts[0].email
      });
   }, []);
   const gender = (value) => {
      if (value == 'WOMAN') return 'эм';
      else if (value == 'MAN') return 'эр';
   };
   const getHicsServices = async () => {
      await insurance.getHicsService().then((response) => {
         if (response.status == 200) {
            setHicsServices(response.data.data);
         }
      });
   };
   const getSentReasons = async () => {
      await healtInsurance.getSentReason().then(({ data }) => {
         if (data.code == 200) {
            setSentReasons(data.result);
         }
      });
   };
   const getPatientDiagnosis = async () => {
      await patientDiagnose.getByPageFilter({ page: 1, limit: 10, patientId: patient.id }).then(({ data }) => {
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
   useEffect(() => {
      getHicsServices();
      getPatientDiagnosis();
      getSentReasons();
   }, []);
   return (
      <>
         <p>Өвчтөний мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Өвчтөний регистр"
                  name="patientRegno"
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
            <Col span={5} offset={1}>
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
                  <Input />
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
            <Col span={11} offset={1}>
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
            <Col span={23} offset={1}>
               <Form.Item
                  label="Хаяг"
                  name="address"
                  rules={[
                     {
                        required: true,
                        message: 'Хаяг оруулна уу.'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Col>
         </Row>
         <p>Асран хамгаалагчийн мэдээлэл</p>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Нэр"
                  name="trusteeName"
                  rules={[
                     {
                        required: true,
                        message: 'Асран хамгаалагч нэр'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Утасны дугаар"
                  name="trusteePhone"
                  rules={[
                     {
                        required: true,
                        message: 'Асран хамгаалагч утасны дугаар'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="И-мэйл хаяг"
                  name="trusteeEmail"
                  rules={[
                     {
                        required: true,
                        message: 'Асран хамгаалагч и-мэйл хаяг'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Үндсэн мэдээлэл</p>
         <Row>
            <Col span={7} offset={1}>
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
                     options={hicsServices.map((hicsService) => ({ value: hicsService.id, label: hicsService.name }))}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
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
                  <DatePicker locale={localMn} />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Хүлээн авах эмнэлэг"
                  name="recHospitalName"
                  rules={[
                     {
                        required: true,
                        message: 'Хүлээн авах эмнэлэг'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Төрөл"
                  name="type"
                  rules={[
                     {
                        required: true,
                        message: 'Төрөл'
                     }
                  ]}
               >
                  <Select
                     options={[
                        { value: 1, label: '13А' },
                        { value: 3, label: '13Б' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Эмчийн нэр"
                  name="doctor"
                  rules={[
                     {
                        required: true,
                        message: 'Эмчийн нэр'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
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
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={diagnosis.map((diagnose) => ({ value: diagnose.code, label: diagnose.code }))}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Илгээх шалтгаан"
                  name="sentReason"
                  rules={[
                     {
                        required: true,
                        message: 'Илгээх шалтгаан'
                     }
                  ]}
               >
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={sentReasons.map((sentReason) => ({ value: sentReason.id, label: sentReason.name }))}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Иргэнд өгөх зөвлөгөө"
                  name="advice"
                  rules={[
                     {
                        required: true,
                        message: 'Иргэнд өгөх зөвлөгөө'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Цусны ерөнхий шинжилгээ"
                  name="bloodExam"
                  rules={[
                     {
                        required: true,
                        message: 'Цусны ерөнхий шинжилгээ'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="ШЕШинжилгээ"
                  name="urinalysis"
                  rules={[
                     {
                        required: true,
                        message: 'Шээсний ерөнхий шинжилгээ'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Биохимийн шинжилгээ"
                  name="bioExam"
                  rules={[
                     {
                        required: true,
                        message: 'Биохимийн шинжилгээ'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Рентген"
                  name="rentgenExam"
                  rules={[
                     {
                        required: true,
                        message: 'Рентген'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Бусад шинжилгээ"
                  name="otherExam"
                  rules={[
                     {
                        required: true,
                        message: 'Бусад шинжилгээ'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};
export default SetPatientSheet;
