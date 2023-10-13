import { Col, DatePicker, Form, Input, InputNumber, Row, Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn } from '../../../comman';
import healthInsurance from '../../../../services/healt-insurance/healtInsurance';
import apiInsurance from '../../../../services/healt-insurance/insurance';
import { selectPatient } from '../../../../features/patientReducer';
import { useSelector } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import patientDiagnose from '../../../../services/emr/patientDiagnose';
import moment from 'moment';
import Finger from '../../../../features/finger';
import { useContext } from 'react';
import AuthContext from '../../../../features/AuthContext';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
import { HICS_PROCESS, SUPPORT_ORGAN_TRANSPLANT } from './enum-utils';
const SaveHics = (props) => {
   const { form } = props;
   const { user } = useContext(AuthContext);
   const [defaultHics, setDefaultHics] = useState([]);
   const currentEmrData = useSelector(selectCurrentEmrData);
   const [hicsServices, setHicsServices] = useState([]);
   const [hicsSeals, setHicsSeals] = useState([]);
   const [hicsGroupDictionary, setHicsGroupDictionary] = useState(new Map());
   const [sealDictionary, setSealDictionary] = useState(new Map());
   const [hicsSealId, setHicsSealId] = useState();
   const [hicsGroupId, setHicsGroupId] = useState();
   const [hicsServiceId, setHicsServiceId] = useState();
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
      await healthInsurance.getHicsService().then(({ data }) => {
         if (data.code == 200) {
            setDefaultHics(data.result);
            console.log('it is working =>', defaultHics);
         }
      });
   };
   const getHicsServiceGroup = async () => {
      await healthInsurance.getHicsServiceGroup().then(({ data }) => {
         if (data.code == 200) {
            const groupDict = data.result.reduce((dict, group) => {
               dict.set(group.id, group);
               return dict;
            }, new Map());
            setHicsGroupDictionary(groupDict);
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
      form.setFieldValue('doctorServiceNumber', `${approval.fromServiceId}`);
   };
   const getIcdFormField = (value) => {
      healthInsurance.getHicsCostByField(form.getFieldValue('hicsServiceId'), value).then(({ data }) => {
         if (data.code == 200) {
            if (Array.isArray(data.result)) {
               setDrgCodes(data.result);
            } else {
               setDrgCodes([]);
               message.warn(data.description);
            }
         }
      });
   };
   const getAllHicsSeals = async () => {
      apiInsurance
         .getAllHicsSeals({
            patientId: patient.id,
            departmentId: currentEmrData.cabinetId,
            createdBy: user.userId,
            process: HICS_PROCESS.SEAL_PENDING
         })
         .then((response) => {
            setHicsSeals(response.data.response.data);
         });
   };
   useEffect(() => {
      getHicsServices();
      getHicsServiceGroup();
      getHicsApprovals();
      getPatientSheets();
      formInsurance();
      getPatientDiagnosis();
      getAllHicsSeals();
   }, []);
   useEffect(() => {
      const sealDictionary = hicsSeals.reduce((dict, seal) => {
         dict.set(seal.id, seal);
         return dict;
      }, new Map());
      setSealDictionary(sealDictionary);
   }, [hicsSeals]);
   useEffect(() => {
      const seal = sealDictionary.get(hicsSealId);
      if (seal) {
         setHicsGroupId(seal.groupId);
         const hicsServices = defaultHics.filter((hicsService) => hicsService.groupId == seal.groupId);
         setHicsServices(hicsServices);
         form.setFieldsValue({
            departNo: seal.department.id,
            departName: seal.department.name,
            hicsServiceId: seal.hicsServiceId
         });
      }
   }, [hicsSealId]);
   return (
      <>
         <Form.Item
            label="Илгээх битүүмжүүд"
            name="id"
            rules={[
               {
                  required: true,
                  message: 'Заавал'
               }
            ]}
         >
            <Select
               style={{ width: '100%' }}
               onSelect={setHicsSealId}
               options={hicsSeals.map((hicsSeal) => ({
                  value: hicsSeal.id,
                  label: `${moment(hicsSeal.startAt).format('YYYY-MM-DD hh:mm:ss')} - ${
                     hicsGroupDictionary.get(hicsSeal.groupId)?.name
                  }`
               }))}
            />
         </Form.Item>
         <p>Өвчтөний мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               Регистр: {patient.registerNumber}
            </Col>
            <Col span={11} offset={1}>
               Өвчтөний нэр: {patient.firstName}
            </Col>
            <Col span={11} offset={1}>
               Өвчтөний овог: {patient.lastName}
            </Col>
            <Col span={11} offset={1} hidden={SUPPORT_ORGAN_TRANSPLANT !== hicsServiceId}>
               <Form.Item
                  label="Донорын регистрийн дугаар"
                  name="secondRegno"
                  tooltip="/эрхтэн шилжүүлэх ТҮ дээр/"
                  rules={
                     SUPPORT_ORGAN_TRANSPLANT == hicsServiceId
                        ? [
                             {
                                required: true,
                                message: 'Заавал'
                             }
                          ]
                        : []
                  }
               >
                  <Input />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
               <Finger
                  text="Хурууний хээ"
                  isFinger={true}
                  steps={[
                     {
                        title: 'Өвчтний',
                        path: 'fingerPrint'
                     }
                  ]}
                  isPatientSheet={false}
                  handleClick={(values) => {
                     form.setFieldsValue({
                        patientFingerprint: values.fingerPrint
                     });
                  }}
               />
               <Form.Item label="Хурууны хээ" name="patientFingerprint" hidden>
                  <Input />
               </Form.Item>
            </Col>
         </Row>
         <p>Үндсэн мэдээлэл</p>
         <Row>
            <Col span={11} offset={1}>
               <Form.Item
                  label="Өвчний түүхийн дугаар"
                  name="patientHistoryCode"
                  rules={[
                     {
                        required: true,
                        message: 'Өвчний түүхийн дугаар'
                     }
                  ]}
               >
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
                     onSelect={(value) => {
                        setHicsServiceId(value);
                     }}
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={hicsServices.map((hicsService) => ({
                        value: hicsService.id,
                        label: hicsService.name
                     }))}
                  />
               </Form.Item>
            </Col>
            <Col span={23} offset={1}>
               <Form.Item label="Эцэг үйлчилгээний дугаар" name="hicsApprovalCode">
                  <Select
                     allowClear
                     showSearch
                     filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                     options={hicsApprovals.map((hicsApproval) => ({
                        value: hicsApproval.approvalCode,
                        label:
                           moment(hicsApproval.approvalDate).format('YYYY-MM-DD') +
                           '->' +
                           hicsApproval.fromServiceName +
                           '->' +
                           hicsApproval.toServiceName
                     }))}
                     onSelect={getDoctorServiceNumber}
                  />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Эмчийн үзлэгийн дугаар" name="doctorServiceNumber">
                  <Input disabled />
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
               <Form.Item label="Кабинет дугаар" name="departNo">
                  <InputNumber disabled />
               </Form.Item>
            </Col>
            <Col span={11} offset={1}>
               <Form.Item label="Кабинет нэр" name="departName">
                  <Input disabled />
               </Form.Item>
            </Col>
         </Row>
         <p>Оношийн мэдээлэл</p>
         <Row>
            <Col span={24}>
               <Form.Item label="Үзлэгийн тэмдэглэл" name="description" rules={[{ required: true }]}>
                  <TextArea />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Оношийн код" name="icdCode">
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
               <Form.Item label="Оношийн код-2/хос онош илгээх Т.Ү дээр/" name="icdCode1">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хавсарсан оношийн код" name="icdAddCode">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="ICD-9 код" name="icd9Code">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item label="Хүндрэлийн зэрэг" name="abcType">
                  <Input />
               </Form.Item>
            </Col>
            <Col span={7} offset={1}>
               <Form.Item
                  label="Оношийн хамааралтай бүлэг"
                  name="drgCode"
                  rules={[
                     {
                        required: true,
                        message: 'Оношийн хамааралтай бүлэг'
                     }
                  ]}
               >
                  <Select options={drgCodes.map((drgCode) => ({ value: drgCode.drgCode, label: drgCode.drgName }))} />
               </Form.Item>
            </Col>
         </Row>
      </>
   );
};
export default SaveHics;
