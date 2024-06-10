import React, { useEffect, useMemo, useState } from 'react';
import { Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, Spin } from 'antd';
import { useSelector } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
//utls
import { SUPPORT_ORGAN_TRANSPLANT } from '../enum-utils';
import {
   bloodType,
   healthType,
   isPregnancy,
   isImpairment,
   hasSurgery,
   treatmentResult,
   inpatientStatus,
   surgeryType,
   surgerySeverity,
   disease,
   isSendSubstate,
   paymentType,
   pregnancyActivity,
   hasSurgeryFourWeeks,
   hasQuestionnaire,
   isQuestionnaireUsed,
   deathType,
   deathLocation,
   fetalMortality,
   isTwin,
   isStillBirth,
   isMotherMortality,
   motherMortality,
   motherMortalityResult,
   relationship,
   birthType,
   birthPlace,
   hasPregnantSeverity,
   manageBirth,
   isSurrogateMother
} from '@Utils/config/xypField';
//common
import { openNofi } from '@Comman/common';
import { ListPatientInfo } from '@Comman/ListInjection';
//comp
import Finger from '@Comman/Finger/Finger';
//api
import patientDiagnose from '@ApiServices/emr/patientDiagnose';
import InspectionNoteApi from '@ApiServices/emr/inspectionNote';
import healthInsurance from '@ApiServices/healt-insurance/healtInsurance';
//redux
import { selectPatient } from '@Features/patientReducer';
const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

export const SendSaveHics = ({ form, hicsSeal, parentHicsSeal, inspectionNoteId, isDisable }) => {
   console.log('hicsSeal', hicsSeal);
   const patient = useSelector(selectPatient);
   console.log('patient', patient);
   const [isLoading, setLoading] = useState(false);
   const [defaultHics, setDefaultHics] = useState([]);
   const [hicsApprovals, setApprovals] = useState([]);
   const [patientSheets, setPatientSheets] = useState([]);
   const [diagnosis, setDiagnosis] = useState([]);
   const [icd1Code, setIcdCode1] = useState([]);
   const [icdAddCode, setIcdAddCode] = useState([]);
   const [drgCodes, setDrgCodes] = useState([]);

   const getInspectionNote = async () => {
      if (inspectionNoteId) {
         return await InspectionNoteApi.getById(inspectionNoteId).then(({ data: { response } }) => {
            if (response.inspection) return JSON.parse(response.inspection)?.['Бодит үзлэг'];
            return undefined;
         });
      }
      return 'TEST';
   };

   const formInsurance = async () => {
      form.setFieldsValue({
         abcType: hicsSeal.abcType,
         doctorServiceNumber: hicsSeal?.doctorServiceNumber,
         donorRegno: hicsSeal.donorRegno,
         drgCode: hicsSeal.drgCode,
         icdCode: hicsSeal.icdCode,
         icd1Code: hicsSeal.icd1Code,
         icd9Code: hicsSeal.icd9Code,
         icdAddCode: hicsSeal.icdAddCode,
         patientHistoryCode: hicsSeal.patientHistoryCode,
         hicsApprovalCode: hicsSeal?.hicsApprovalCode,
         sent13RequestNo: hicsSeal.sent13RequestNo,
         patientRegno: patient.registerNumber,
         patientFirstname: patient.firstName,
         patientLastname: patient.lastName,
         isForeign: patient.isLocal ? 0 : 1,
         phoneNo: patient.phoneNo,
         departNo: hicsSeal.departmentId,
         departName: hicsSeal.department?.name,
         diagnosis: {
            description: hicsSeal.description || (await getInspectionNote())
         }
      });
      if (hicsSeal.icdCode) {
         getIcdFormField(hicsSeal.icdCode);
      }
   };
   const getHicsServices = async () => {
      await healthInsurance.getHicsService().then(({ data }) => {
         if (data.code == 200) {
            setDefaultHics(data.result);
         }
      });
   };
   const getHicsApprovals = async () => {
      setLoading(true);
      await healthInsurance
         .getApprovalList(patient.registerNumber)
         .then(({ data }) => {
            if (data.code == 200 && Array.isArray(data.result)) {
               const sortedApproval = data.result.sort((a, b) => a.approvalDate - b.approvalDate);
               setApprovals(sortedApproval);
            }
         })
         .finally(() => {
            formInsurance();
            setLoading(false);
         });
   };
   const getPatientSheets = async () => {
      await healthInsurance.getPatientSheet(patient.registerNumber).then(({ data }) => {
         if (data.code == 200 && Array.isArray(data.result)) {
            setPatientSheets(data.result);
         }
      });
   };
   const getPatientDiagnosis = async () => {
      await patientDiagnose
         .getByPageFilter({
            patientId: patient.id,
            appointmentId: hicsSeal.appointmentId,
            inpatientRequestId: hicsSeal.inpatientRequestId
         })
         .then(({ data: { response } }) => {
            const diagnosis = response.data
               ?.filter((res) => res.diagnoseType === 0)
               ?.map((patientDiagnose) => patientDiagnose.diagnose);
            const icdCode1 = response.data
               ?.filter((res) => res.diagnoseType != 0 && res.diagnoseType != 2)
               ?.map((patientDiagnose) => patientDiagnose.diagnose);
            const icdAddCode = response.data
               ?.filter((res) => res.diagnoseType === 2)
               ?.map((patientDiagnose) => patientDiagnose.diagnose);
            setDiagnosis(response.data?.map((patientDiagnose) => patientDiagnose.diagnose));
            setIcdCode1(response.data?.map((patientDiagnose) => patientDiagnose.diagnose));
            setIcdAddCode(response.data?.map((patientDiagnose) => patientDiagnose.diagnose));
         });
   };
   const getDoctorServiceNumber = (value) => {
      const approval = hicsApprovals.find((approval) => approval.approvalCode === value);
      form.setFieldValue('doctorServiceNumber', approval.fromServiceId);
   };
   const getIcdFormField = (value) => {
      const current = diagnosis?.find((diagnose) => diagnose.code === value);
      form.setFieldValue(['diagnosis', 'icdCodeName'], current?.nameMn);
      setLoading(true);
      healthInsurance
         .getHicsCostByField(hicsSeal.hicsServiceId, value)
         .then(({ data }) => {
            if (data.code == 200) {
               openNofi('success', 'Амжилттай', data.description);
               if (Array.isArray(data.result)) {
                  setDrgCodes(data.result);
               } else {
                  setDrgCodes([]);
               }
            } else {
               openNofi('error', 'Амжилтгүй', data.description);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };

   useEffect(() => {
      getHicsServices();
      getHicsApprovals();
      getPatientSheets();
      getPatientDiagnosis();
      hicsSeal.process === 1 && isDisable(false);
   }, []);

   const getCurrentServiceName = useMemo(() => {
      return defaultHics.find((hics) => hics.id === hicsSeal?.hicsServiceId)?.name;
   }, [defaultHics]);

   return (
      // tip={isLoading ? 'Уншиж байна.' : 'Битүүмж үүссэн байна'} spinning={isLoading || hicsSeal.process === 1}
      <Spin spinning={false}>
         <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
               <div className="rounded-md bg-[#F3F4F6] max-w-[366px] w-full inline-block p-2">
                  <div className="flex flex-col gap-2">
                     <p style={labelstyle}>Үйлчилгээ:</p>
                     <p className="flex flex-row justify-between">
                        <span>{getCurrentServiceName}</span>
                        <span>{moment(hicsSeal?.startAt).format('YYYY-MM-DD hh:mm:ss')}</span>
                     </p>
                     <p style={labelstyle}>Өвчтөний мэдээлэл:</p>
                     <ListPatientInfo patientData={patient} />
                     <p style={labelstyle}>Үндсэн мэдээлэл:</p>
                     <Form.Item
                        label="Өвчний түүхийн дугаар"
                        name="historyCode"
                        className="mb-0"
                        rules={[
                           {
                              required: true,
                              message: 'Өвчний түүхийн дугаар'
                           }
                        ]}
                     >
                        <Input placeholder="Өвчний түүхийн дугаар бичих" />
                     </Form.Item>
                     <Form.Item
                        name="bloodType"
                        label="Цусны бүлэг"
                        rules={[
                           {
                              required: true,
                              message: 'Цусны бүлэг заавал'
                           }
                        ]}
                     >
                        <Select
                           placeholder="Цусны бүлэг"
                           options={bloodType?.map((type) => ({
                              label: type.valueName,
                              value: type.valueName
                           }))}
                        />
                     </Form.Item>
                  </div>
               </div>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                  <Finger
                     form={form}
                     insurance={true}
                     noStyle
                     name="patientFingerprint"
                     rules={[
                        {
                           required: true,
                           message: 'Хурууний хээ заавал'
                        }
                     ]}
                  >
                     <Input />
                  </Finger>
               </div>
            </div>
            {SUPPORT_ORGAN_TRANSPLANT === hicsSeal.hicsServiceId ? (
               <div className="rounded-md bg-[#F3F4F6] inline-block p-2">
                  <p style={labelstyle}>Донор:</p>
                  <Form.Item
                     label="Донорын регистрийн дугаар"
                     name="secondRegno"
                     tooltip="/эрхтэн шилжүүлэх ТҮ дээр/"
                     rules={
                        SUPPORT_ORGAN_TRANSPLANT == hicsSeal.hicsServiceId
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
               </div>
            ) : null}
            {parentHicsSeal != null ? (
               <div className="rounded-md bg-[#F3F4F6] inline-block p-2">
                  <p style={labelstyle}>Эцэг үйлчилгээ:</p>
                  <div className="grid grid-cols-2 gap-2">
                     <Form.Item label="Эцэг үйлчилгээний дугаар" name="hicsApprovalCode" className="mb-0">
                        <Select
                           allowClear
                           onClear={() => {
                              form.resetFields([['doctorServiceNumber']]);
                           }}
                           showSearch
                           placeholder={'Заавал биш'}
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
                     <Form.Item label="Эмчийн үзлэгийн дугаар" name="doctorServiceNumber" className="mb-0">
                        <InputNumber disabled />
                     </Form.Item>
                  </div>
               </div>
            ) : null}
            <div className="rounded-md bg-[#F3F4F6] inline-block p-2">
               <p style={labelstyle}>13A:</p>
               <Form.Item label="Эмнэлэгт өвтөн илгээх хуудас үүсгэх" name="sent13RequestNo" className="mb-0">
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
            </div>
            <div className="rounded-md bg-[#F3F4F6] inline-block p-2">
               <p style={labelstyle}>Оношийн мэдээлэл:</p>
               <div className="grid grid-cols-2 gap-2">
                  {/*  */}
                  <Form.Item label="" name={['diagnosis', 'icdCodeName']} hidden>
                     <Input />
                  </Form.Item>
                  {/*  */}
                  <Form.Item label="Оношийн код" name={['diagnosis', 'icdCode']} className="mb-0">
                     <Select
                        allowClear
                        onClear={() => {
                           form.resetFields([['diagnosis', 'drgCode']]);
                        }}
                        showSearch
                        filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                        options={diagnosis.map((diagnose) => ({ value: diagnose.code, label: diagnose.code }))}
                        onSelect={getIcdFormField}
                     />
                  </Form.Item>
                  <Form.Item
                     label="Оношийн код-2/хос онош илгээх Т.Ү дээр/"
                     name={['diagnosis', 'icd1Code']}
                     className="mb-0"
                  >
                     <Select
                        allowClear
                        showSearch
                        filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                        options={icd1Code.map((diagnose) => ({ value: diagnose.code, label: diagnose.code }))}
                     />
                  </Form.Item>
                  {/*  */}
                  <Form.Item label="" name={['diagnosis', 'icdAddName']} hidden>
                     <Input />
                  </Form.Item>
                  {/*  */}
                  <Form.Item label="Хавсарсан оношийн код" name={['diagnosis', 'icdAddCode']} className="mb-0">
                     <Select
                        allowClear
                        showSearch
                        filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                        onChange={(code) => {
                           const current = icdAddCode?.find((diagnose) => diagnose.code === code);
                           form.setFieldValue(['diagnosis', 'icdAddName'], current?.nameMn);
                        }}
                        options={icdAddCode.map((diagnose) => ({ value: diagnose.code, label: diagnose.code }))}
                     />
                  </Form.Item>
                  <Form.Item label="" name={['diagnosis', 'icd9Name']} hidden>
                     <Input />
                  </Form.Item>
                  <Form.Item label="ICD-9 код" name={['diagnosis', 'icd9Code']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Оношийн хамааралтай бүлэг" name={['diagnosis', 'drgCode']}>
                     <Select
                        onSelect={(value) => {
                           const current = drgCodes.find((drgCode) => drgCode.drgCode === value);
                           form.setFieldsValue({
                              amountCit: current.amountCit || 0,
                              amountHi: current.amountHi || 0,
                              amountTotal: current.amountTotal || 0
                           });
                        }}
                        options={drgCodes.map((drgCode) => ({ value: drgCode.drgCode, label: drgCode.drgName }))}
                     />
                  </Form.Item>
                  <Form.Item label="Хүндрэлийн зэрэг" name={['diagnosis', 'abcType']} className="mb-0">
                     <Select
                        options={[
                           {
                              label: 'A',
                              value: 'A'
                           },
                           {
                              label: 'B',
                              value: 'B'
                           },
                           {
                              label: 'C',
                              value: 'C'
                           }
                        ]}
                     />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>Төлбөрийн мэдээлэл</p>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="amountCit" name="amountCit">
                     <Input />
                  </Form.Item>
                  <Form.Item label="amountHi" name="amountHi">
                     <Input />
                  </Form.Item>
                  <Form.Item label="amountTotal" name="amountTotal">
                     <Input />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>ХӨДӨЛМӨР ЭРХЛЭЛТИЙН БАЙДАЛ</p>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="Хөдөлмөрийн чадвар түр алдалтын хоног" name={['employment', 'abalityLoseDays']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хөдөлмөрийн чадвар алдалтын зэрэг" name={['employment', 'disabilityDegree']}>
                     <InputNumber />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>ЭРҮҮЛ МЭНДИЙН МЭДЭЭЛЭЛ</p>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="Эрүүл мэндийн төрөл" name={['healthInfo', 'healthType']}>
                     <Select
                        options={healthType?.map((type) => ({
                           label: type.valueName,
                           value: type.valueName.toString()
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Жирэмсэн эсэх" name={['healthInfo', 'isPregnancy']}>
                     <Radio.Group
                        options={isPregnancy?.map((preg) => ({
                           label: preg.valueName,
                           value: preg.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Жин" name={['healthInfo', 'weight']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Өндөр" name={['healthInfo', 'height']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хөгжлийн бэрхшээлтэй" name={['healthInfo', 'isImpairment']}>
                     <Radio.Group
                        options={isImpairment?.map((impa) => ({
                           label: impa.valueName,
                           value: impa.valueId
                        }))}
                     />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>ТУСЛАМЖ, ҮЙЛЧИЛГЭЭНИЙ МЭДЭЭЛЭЛ</p>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="Ерөнхий эмч" name={['medicalInfo', 'generalDoctor']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Эмнэлгээс гарагчийн төрөл" name={['medicalInfo', 'inpatientStatusName']}>
                     <Select
                        options={inpatientStatus?.map((status) => ({
                           label: status.fieldName,
                           value: status.fieldName
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Өвчний төгсгөл" name={['medicalInfo', 'treatmentResultId']}>
                     <Select
                        options={treatmentResult?.map((result) => ({
                           label: result.fieldName,
                           value: result.fieldId.toString()
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Өвчний төгсгөл" name={['medicalInfo', 'treatmentResult']}>
                     <TextArea />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>Мэс засл</p>
               <Form.Item label="Mэс засал хийлгэсэн эсэх" name={['medicalInfo', 'hasSurgery']}>
                  <Radio.Group
                     options={hasSurgery?.map((state) => ({
                        label: state.valueName,
                        value: state.valueId
                     }))}
                  />
               </Form.Item>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="Мэс заслын төрөл" name={['medicalInfo', 'surgeryType']}>
                     <Select
                        options={surgeryType?.map((type) => ({
                           label: type.valueName,
                           value: type.valueName
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Мэс заслын хүндрэл" name={['medicalInfo', 'surgerySeverity']}>
                     <Select
                        options={surgerySeverity?.map((severity) => ({
                           label: severity.valueName,
                           value: severity.valueName
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Эмийн зардал" name={['medicalInfo', 'drugExpenses']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Оношилгоо, шинжилгээний нэр" name={['medicalInfo', 'examName']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Өвчлөл" name={['medicalInfo', 'diseaseName']}>
                     <Select
                        options={disease?.map((dss) => ({
                           label: dss.valueName,
                           value: dss.valueName
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="ICD10 код" name={['medicalInfo', 'icd10code']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Дээд шатлалд илгээсэн эсэх" name={['medicalInfo', 'isSendSubstate']}>
                     <Select
                        options={isSendSubstate?.map((state) => ({
                           label: state.valueName,
                           value: state.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Эмнэлэгт хэвтсэн огноо" name={['medicalInfo', 'indateInpatient']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item label="Эмнэлэгт гарсан огноо" name={['medicalInfo', 'outdateInpatient']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item label="Хэвтэн эмчлүүлсэн ор хоног" name={['medicalInfo', 'inpatientDays']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Эмчийн код" name={['medicalInfo', 'doctorId']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Эмчийн нэр" name={['medicalInfo', 'doctorName']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Эмчийн нэр" name={['medicalInfo', 'paymentType']}>
                     <Select
                        options={paymentType?.map((type) => ({
                           label: type.valueName,
                           value: type.valueId.toString()
                        }))}
                     />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>ЖИРЭМСЭН ҮЕИЙН МЭДЭЭЛЭЛ</p>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="Жирэмсний хяналтад орсон огноо" name={['pregnantInfo', 'pregnancyControlledDate']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item label="Жирэмсний хугацаа /7 хоногоор/" name={['pregnantInfo', 'pregnancyWeek']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Жирэмсний төрөл" name={['pregnantInfo', 'pregnancyActivityId']}>
                     <Select
                        onSelect={(_, option) => {
                           form.setFieldValue(['pregnantInfo', 'pregnancyActivityName'], option.label);
                        }}
                        options={pregnancyActivity?.map((activity) => ({
                           label: activity.valueName,
                           value: activity.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item hidden name={['pregnantInfo', 'pregnancyActivityName']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="protectMethod" name={['pregnantInfo', 'protectMethod']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="abortion" name={['pregnantInfo', 'abortion']}>
                     <Input />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>НАС БАРАЛТЫН МЭДЭЭЛЭЛ</p>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="Нас барсан огноо /он сар, өдөр, цаг,минут/" name={['medicalInfo', 'deathInfo']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item
                     label="Үхэлд шууд хүргэсэн өвчин ба эмгэг:ICD10 оношийн код"
                     name={['medicalInfo', 'deathResultCode']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Үхэлд шууд хүргэсэн өвчин ба эмгэг:ICD10 оношийн нэр"
                     name={['medicalInfo', 'deathResult']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Үхэлд хүргэсэн ослын шалтгаан:ICD10 оношийн код /V01-Y98/"
                     name={['medicalInfo', 'deathAccidentCode']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Үхэлд хүргэсэн ослын шалтгаан ICD10 оношийн нэр"
                     name={['medicalInfo', 'deathAccident']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Сүүлийн 4 долоо хоногт мэс засал хийлгэсэн эсэх"
                     name={['medicalInfo', 'hasSurgeryFourWeeks']}
                  >
                     <Select
                        options={hasSurgeryFourWeeks?.map((weeks) => ({
                           label: weeks.valueName,
                           value: weeks.valueName
                        }))}
                     />
                  </Form.Item>
                  <Form.Item
                     label="Асуумжаар дүгнэлт шинжилгээ /VA WHO 2016 standart/ хийсэн эсэх"
                     name={['medicalInfo', 'hasQuestionnaireId']}
                  >
                     <Select
                        onSelect={(_, option) => {
                           form.setFieldValue(['medicalInfo', 'hasQuestionnaire'], option.label);
                        }}
                        options={hasQuestionnaire?.map((question) => ({
                           label: question.valueName,
                           value: question.valueId.toString()
                        }))}
                     />
                  </Form.Item>
                  <Form.Item hidden name={['medicalInfo', 'hasQuestionnaire']}>
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Хэрэв тийм бол баталгаажуулахад ашигласан эсэх"
                     name={['medicalInfo', 'isQuestionnaireUsed']}
                  >
                     <Select
                        options={isQuestionnaireUsed?.map((question) => ({
                           label: question.valueName,
                           value: question.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Нас барсан хэлбэр" name={['medicalInfo', 'deathType']}>
                     <Select
                        options={deathType?.map((type) => ({
                           label: type.valueName,
                           value: type.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Нас барсан газар" name={['medicalInfo', 'deathLocationId']}>
                     <Select
                        onSelect={(_, option) => {
                           form.setFieldValue(['medicalInfo', 'deathLocationName'], option.label);
                        }}
                        options={deathLocation?.map((loc) => ({
                           label: loc.valueName,
                           value: loc.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item hidden name={['medicalInfo', 'deathLocationName']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Хорт хавдар, ХДХВ оношлогдсон огноо" name={['medicalInfo', 'cancerHIVDate']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item
                     label="Хоног болоогүй нас баралтын хугацаа /цаг минут секунд/"
                     name={['medicalInfo', 'datetimeOfRemaindayOfDeath']}
                  >
                     <DatePicker />
                  </Form.Item>
                  <Form.Item label="Ураг болон нярайн эндэгдэл" name={['medicalInfo', 'fetalMortality']}>
                     <Select
                        options={fetalMortality?.map((fetal) => ({
                           label: fetal.valueName,
                           value: fetal.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Ихэр эсэх" name={['medicalInfo', 'isTwin']}>
                     <Select
                        options={isTwin?.map((twin) => ({
                           label: twin.valueName,
                           value: twin.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Амьгүй төрөлт" name={['medicalInfo', 'isStillBirth']}>
                     <Select
                        options={isStillBirth?.map((still) => ({
                           label: still.valueName,
                           value: still.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Төрөх үеийн жин /гр/" name={['medicalInfo', 'birthWeight']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Жирэмсний хугацаа /7 хоногоор/" name={['medicalInfo', 'pregnantWeek']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Эхийн нас" name={['medicalInfo', 'motherAge']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Эхийн регистр" name={['medicalInfo', 'motherRegister']}>
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Жирэмсэн ба төрөх үеийн хүндрэлийн оношийн код ICD10"
                     name={['medicalInfo', 'birthSeverityCode']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Жирэмсэн ба төрөх үеийн хүндрэлийн оношийн нэр ICD10"
                     name={['medicalInfo', 'birthSeverity']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item label="Эхийн эндэгдэлтэй эсэх" name={['medicalInfo', 'isMotherMortality']}>
                     <Select
                        options={isMotherMortality?.map((mortality) => ({
                           label: mortality.valueName,
                           value: mortality.valueName
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Эхийн эндэгдэл" name={['medicalInfo', 'motherMortalityId']}>
                     <Select
                        onSelect={(_, option) => {
                           form.setFieldValue(['medicalInfo', 'motherMortalityName'], option.label);
                        }}
                        options={motherMortality?.map((mortality) => ({
                           label: mortality.valueName,
                           value: mortality.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item hidden name={['medicalInfo', 'motherMortalityName']}>
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Жирэмслэлт нь нас баралтын шалтгаан болсон эсэх"
                     name={['medicalInfo', 'motherMortalityResult']}
                  >
                     <Select
                        options={motherMortalityResult?.map((result) => ({
                           label: result.valueName,
                           value: result.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Гэрчилгээ олгосон огноо /Он, сар, өдөр/" name={['medicalInfo', 'registerDate']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item label="Гэрчилгээ олгосон эмч" name={['medicalInfo', 'registerDoctor']}>
                     <Input />
                  </Form.Item>
               </div>
            </div>
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <p style={labelstyle}>ТӨРӨЛТИЙН ҮЕИЙН БОЛОН НЯРАЙН МЭДЭЭЛЭЛ</p>
               <div className="grid grid-cols-2 gap-2">
                  <Form.Item label="Гэр бүлийн байдал" name={['birthInfo', 'relationshipId']}>
                     <Select
                        onSelect={(_, option) => {
                           form.setFieldValue(['birthInfo', 'relationshipName'], option.label);
                        }}
                        options={relationship?.map((rel) => ({
                           label: rel.valueName,
                           value: rel.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item hidden name={['birthInfo', 'relationshipName']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Хэд дэх жирэмслэлт" name={['birthInfo', 'pregnantCount']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хэд дэх төрөлт" name={['birthInfo', 'birthCount']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Жирэмсний хяналтанд үзүүлсэн тоо" name={['birthInfo', 'pregnantSurveyCount']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Төрлөгийн хэлбэр" name={['birthInfo', 'birthTypeId']}>
                     <Select
                        onSelect={(_, option) => {
                           form.setFieldValue(['birthInfo', 'birthTypeName'], option.label);
                        }}
                        options={birthType?.map((type) => ({
                           label: type.valueName,
                           value: type.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item hidden name={['birthInfo', 'birthTypeName']}>
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Төрөх үеийн тээлтийн хугацаа /долоо хоногоор/"
                     name={['birthInfo', 'pregnantDuration']}
                  >
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Хүүхдийн регистр" name={['birthInfo', 'childRegister']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Төрсөн огноо /он, сар, өдөр, цаг, минут/" name={['birthInfo', 'birthday']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item label="Хүүхдийн өндөр /см/" name={['birthInfo', 'childHeight']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Толгойн бүслүүр" name={['birthInfo', 'childHeadCircumference']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Мөрний бүслүүр" name={['birthInfo', 'childShoulderCircumference']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Төрсөн газар" name={['birthInfo', 'birthPlace']}>
                     <Select
                        options={birthPlace?.map((place) => ({
                           label: place.valueName,
                           label: place.valueId.toString()
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Анх хяналтанд авсан долоо хоног" name={['birthInfo', 'takeControlDate']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Жирэмсний хүндрэлтэй эсэх" name={['birthInfo', 'hasPregnantSeverity']}>
                     <Select
                        options={hasPregnantSeverity?.map((severity) => ({
                           label: severity.valueName,
                           label: severity.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item
                     label="Жирэмсний хүндрэлийн оношийн код ICD10"
                     name={['birthInfo', 'pregnantSeverityCode']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item
                     label="Жирэмсний хүндрэлийн оношийн нэр ICD10"
                     name={['birthInfo', 'pregnantSeverityName']}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item label="Төрөлт удирдсан" name={['birthInfo', 'manageBirth']}>
                     <Select
                        options={manageBirth?.map((birth) => ({
                           label: birth.valueName,
                           label: birth.valueName
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Төрөлтийн хүндрэл" name={['birthInfo', 'birthSeverityDescription']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Төрөлтийн дараах хүндрэл" name={['birthInfo', 'birthAfterSeverity']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Төрөлтийн дараах хүндрэл" name={['birthInfo', 'isSurrogateMother']}>
                     <Select
                        options={isSurrogateMother?.map((isSurr) => ({
                           label: isSurr.valueName,
                           label: isSurr.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Тээгч эхийн регистр, овог, нэр" name={['birthInfo', 'surrogateMotherRegister']}>
                     <Input />
                  </Form.Item>
                  <Form.Item label="Ихэр эсэх" name={['birthInfo', 'isTwin']}>
                     <Select
                        options={isTwin?.map((twin) => ({
                           label: twin.valueName,
                           value: twin.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Амьгүй төрөлт" name={['birthInfo', 'isStillBirth']}>
                     <Select
                        options={isStillBirth?.map((still) => ({
                           label: still.valueName,
                           value: still.valueId
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Жирэмсний хугацаа /7 хоногоор/" name={['birthInfo', 'pregnantWeek']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Төрөх үеийн жин /гр/" name={['birthInfo', 'birthWeight']}>
                     <InputNumber />
                  </Form.Item>
                  <Form.Item label="Гэрчилгээ олгосон огноо /Он, сар, өдөр/" name={['birthInfo', 'registerDate']}>
                     <DatePicker />
                  </Form.Item>
                  <Form.Item label="Гэрчилгээ олгосон эмч" name={['birthInfo', 'registerDoctor']}>
                     <Input />
                  </Form.Item>
               </div>
            </div>
         </div>
         <Form.Item hidden name="departNo">
            <Input />
         </Form.Item>
         <Form.Item hidden name="departName">
            <Input />
         </Form.Item>
         <Form.Item
            hidden
            name={['diagnosis', 'description']}
            rules={[
               {
                  required: true,
                  message: 'Үзлэгийн тэмдэглэл заавал'
               }
            ]}
         >
            <TextArea />
         </Form.Item>
      </Spin>
   );
};
