import { Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn } from '../../../comman';
import insurance from '../../../../services/healt-insurance/insurance';
import healthInsurance from '../../../../services/healt-insurance/healtInsurance';
import { selectPatient } from '../../../../features/patientReducer';
import { useSelector } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import patientDiagnose from '../../../../services/emr/patientDiagnose';
const SaveHics = (props) => {
   const { form } = props;
   const [hicsServices, setHicsServices] = useState([]);
   const [hicsApprovals, setApprovals] = useState([]);
   const [patientSheets, setPatientSheets] = useState([]);
   const [diagnosis, setDiagnosis] = useState([]);
   const [drgCodes, setDrgCodes] = useState([]);
   const patient = useSelector(selectPatient);
   const formInsurance = () => {
      form.setFieldsValue({
         patientRegno: patient.registerNumber,
         patientFirstname: patient.firstName,
         patientLastname: patient.lastName,
         isForeign: patient.isLocal ? 0 : 1,
         phoneNo: patient.phoneNo
      });
   };
   const getHicsServices = async () => {
      await insurance.getHicsService().then((response) => {
         if (response.status == 200) {
            setHicsServices(response.data.data);
         }
      });
   };
   const getHicsApprovals = async () => {
      await healthInsurance.getApprovalList(patient.registerNumber).then(({ data }) => {
         if (data.code == 200) {
            const sortedApproval = data.result.sort((a, b) => a.approvalDate - b.approvalDate);
            setApprovals(sortedApproval);
         }
      });
   };
   const getPatientSheets = async () => {
      await healthInsurance.getPatientSheet(patient.registerNumber).then(({ data }) => {
         if (data.code == 200) {
            setPatientSheets(data.result);
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
   const getDoctorServiceNumber = (value) => {
      const approval = hicsApprovals.find((approval) => approval.approvalCode === value);
      form.setFieldValue('doctorServiceNumber', approval.fromServiceId);
   };
   const getIcdFormField = (value) => {
      healthInsurance.getHicsCostByField(form.getFieldValue('hicsServiceId'), value).then(({ data }) => {
         if (data.code == 200) {
            setDrgCodes(data.result);
         }
      });
      const diagnose = diagnosis.find((diagnose) => diagnose.code === value);
      form.setFieldsValue({
         diagnosis: {
            icdCodeName: diagnose.nameEn
         }
      });
   };
   useEffect(() => {
      getHicsServices();
      getHicsApprovals();
      getPatientSheets();
      formInsurance();
      getPatientDiagnosis();
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
               <Form.Item label="Донорын регистрийн дугаар" name="secondRegno" tooltip="/эрхтэн шилжүүлэх ТҮ дээр/">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
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
            <Col span={5} offset={1}>
               <Form.Item label="Харъяалал" name="isForeign">
                  <Select
                     options={[
                        { value: 0, label: 'Монгол' },
                        { value: 1, label: 'Гадаад' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Оршин суугч эсэх" name="isLiver">
                  <Select
                     options={[
                        { value: 1, label: 'Тийм' },
                        { value: 0, label: 'Үгүй' }
                     ]}
                  />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Утасны дугаар" name="phoneNo">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={5} offset={1}>
               <Form.Item label="Цусны бүлэг" name="bloodType">
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
               <Form.Item label="Өвчний түүхийн дугаар" name="historyCode">
                  <Input />
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
               <Form.Item label="Эцэг үйлчилгээний дугаар" name="parentServiceNumber">
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={hicsApprovals.map((hicsApproval) => ({
                        value: hicsApproval.approvalCode,
                        label: hicsApproval.toServiceName
                     }))}
                     onSelect={getDoctorServiceNumber}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Эмчийн үзлэгийн дугаар" name="doctorServiceNumber">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Эмнэлэгт өвтөн илгээх хуудас үүсгэх" name="sent13RequestNo">
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={patientSheets.map((patientSheet) => ({
                        value: patientSheet.requestNo,
                        label: patientSheet.serviceName
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Кабинет дугаар"
                  name="departNo"
                  rules={[
                     {
                        required: true,
                        message: 'Кабинет дугаар'
                     }
                  ]}
               >
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Кабинет нэр"
                  name="departName"
                  rules={[
                     {
                        required: true,
                        message: 'Кабинет нэр'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Оношийн мэдээлэл</p>
         <Row>
            <Col span={7} offset={1}>
               <Form.Item label="Оношийн код" name={['diagnosis', 'icdCode']}>
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={diagnosis.map((diagnose) => ({ value: diagnose.code, label: diagnose.code }))}
                     onSelect={getIcdFormField}
                  />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Оношийн нэр" name={['diagnosis', 'icdCodeName']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Оношийн код-2/хос онош илгээх Т.Ү дээр/" name={['diagnosis', 'icdCode1']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Оношийн бүлэг" name={['diagnosis', 'icdGroup']}>
                  <InputNumber />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Оношийн бүлгийн нэр" name={['diagnosis', 'icdGroupName']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хавсарсан оношийн код" name={['diagnosis', 'icdAddCode']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хавсарсан оношийн нэр" name={['diagnosis', 'icdAddName']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="ICD-9 код" name={['diagnosis', 'icd9Code']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="ICD-9 нэр" name={['diagnosis', 'icd9Name']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хүндрэлийн зэрэг" name={['diagnosis', 'abcType']}>
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Оношийн хамааралтай бүлэг"
                  name={['diagnosis', 'drgCode']}
                  rules={[
                     {
                        required: true,
                        message: 'Кабинет нэр'
                     }
                  ]}
               >
                  <Select
                     options={drgCodes.map((drgCode) => ({ value: `${drgCode.drgTypeCode}`, label: drgCode.drgName }))}
                  />
               </Form.Item>
            </Col>
         </Row>
         <p>Амбулаторийн үзлэгт хамаарах</p>
         <Row>
            <Col span={5} offset={1}>
               <Form.Item
                  label="Эхлэх код"
                  name="startCode"
                  tooltip={
                     '4.47 сервисээр үүссэн дугаарыг дамжуулна. Зөвхөн амбулаторийн багцын тусламж, үйлчилгээ дээр.'
                  }
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={17} offset={1}>
               <Form.Item
                  label="Үзлэгийн тэмдэглэл"
                  name={['diagnosis', 'description']}
                  tooltip={'Зөвхөн амбулаторийн тусламж үйлчилгээнүүд дээр.'}
               >
                  <TextArea />
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};
export default SaveHics;
