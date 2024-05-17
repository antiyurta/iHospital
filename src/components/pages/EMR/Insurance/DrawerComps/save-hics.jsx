import React, { useEffect, useMemo, useState } from 'react';
import { Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, Spin } from 'antd';
import { useSelector } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
//utls
import { SUPPORT_ORGAN_TRANSPLANT } from './enum-utils';
import { bloodType, healthType, isPregnancy, isImpairment, pregnancyActivity } from '@Utils/config/xypField';
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

const SaveHics = ({ form, hicsSeal, parentHicsSeal, inspectionNoteId, isDisable }) => {
   console.log('parentHicsSeal', parentHicsSeal);
   const patient = useSelector(selectPatient);
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
            setDiagnosis(diagnosis);
            setIcdCode1(icdCode1);
            setIcdAddCode(icdAddCode);
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
      return defaultHics.find((hics) => hics.id === hicsSeal.hicsServiceId)?.name;
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
                  <Form.Item
                     label="Оношийн код"
                     name={['diagnosis', 'icdCode']}
                     className="mb-0"
                     rules={[
                        {
                           required: true,
                           message: 'Онош заавал'
                        }
                     ]}
                  >
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
                     rules={
                        icd1Code?.length > 0
                           ? [
                                {
                                   required: true,
                                   message: 'Оношийн код-2/хос онош илгээх Т.Ү дээр/'
                                }
                             ]
                           : []
                     }
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
                  <Form.Item
                     label="Хавсарсан оношийн код"
                     name={['diagnosis', 'icdAddCode']}
                     className="mb-0"
                     rules={
                        icdAddCode?.length > 0
                           ? [
                                {
                                   required: true,
                                   message: 'Оношийн код-2/хос онош илгээх Т.Ү дээр/'
                                }
                             ]
                           : []
                     }
                  >
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
                  <Form.Item
                     label="Оношийн хамааралтай бүлэг"
                     name={['diagnosis', 'drgCode']}
                     rules={[
                        {
                           required: true,
                           message: 'Оношийн хамааралтай бүлэг'
                        }
                     ]}
                  >
                     <Select
                        options={drgCodes.map((drgCode) => ({ value: drgCode.drgCode, label: drgCode.drgName }))}
                     />
                  </Form.Item>
                  <Form.Item
                     label="Хүндрэлийн зэрэг"
                     name={['diagnosis', 'abcType']}
                     className="mb-0"
                     rules={[
                        {
                           required: true,
                           message: 'Хүндрэлийн зэрэг заавал'
                        }
                     ]}
                  >
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

