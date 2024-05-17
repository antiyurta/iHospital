import React, { useState, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, List, Divider, message, Space, Input } from 'antd';

//common
import { openNofi } from '@Comman/common';

//comp
import {
   SendCancelHics,
   SendConfirmHics,
   SendFingerRequest,
   SendPrescription,
   SendRepairHics,
   SendSaveHics,
   SendHics,
   SendApproval,
   SendPatientReturn,
   SendPatientSheet,
   SendReConfirmHics,
   SendSkipHics,
   SendStartHics,
   GetEsbRef,
   SendMedicalExam,
   GetQuestionCategories,
   GetQuestionsByCategory,
   GetTabletCategories,
   GetTabletsByCategory,
   SendEsbNotification,
   SendHostpitalInfo,
   SendCheckLicenseInfo,
   SendEditMedicalLink,
   GetHostpitalOperation,
   GetVaccineByRegno,
   SentAddHicsService,
   SendDirectService,
   SendFormData,
   SendFixDoctorExams,
   GetDataByFormSummary,
   GetDataFormData,
   GetCt4
} from './DrawerComps';

//defaults
const { Search } = Input;

//api
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

import { HEALTH_SERVCES_DESCRIPTION, HEALTH_SERVICES_TITLE as HST } from './enum-utils';
import { setHicsSeal } from '@Features/emrReducer';
import { useDispatch } from 'react-redux';

// style css
import './style.css';

const SentService = ({ patient, hicsSeal, parentHicsSeal, inspectionNoteId }) => {
   const dispatch = useDispatch();
   const [insuranceForm] = Form.useForm();

   const [open, setOpen] = useState(false);
   const [isDisabled, setDisabled] = useState(false);
   const [insuranceServiceItems, setInsuranceServiceItems] = useState([]);
   const [chooseService, setChooseService] = useState(HST.saveHics);

   const onClose = () => setOpen(false);

   const defaultServiceItems = () =>
      Object.values(HST).map((value) => ({
         value,
         title: HEALTH_SERVCES_DESCRIPTION(value)
      }));

   const onSearch = (value) => {
      const lowerCaseValue = value.toLowerCase();
      const filter = defaultServiceItems().filter((item) => item.title.toLowerCase().includes(lowerCaseValue));
      setInsuranceServiceItems(filter);
   };

   const sentService = async (values) => {
      try {
         const {
            civilId: patientCivilId,
            familyName: patientSurname,
            aimagCityCode: patientAimagCode,
            aimagCityName: patientAimagName,
            soumDistrictCode: patientSoumCode,
            soumDistrictName: patientSoumName,
            contacts: patientContacts,
            ...otherInfoPatient
         } = patient;
         const dataa = {
            patientRegno: patient.registerNumber,
            patientFingerprint: values.patientFingerprint,
            patientFirstname: patient.firstName,
            patientLastname: patient.lastName,
            startDate: hicsSeal.startAt,
            endDate: new Date(),
            hicsServiceId: hicsSeal.hicsServiceId,
            parentServiceNumber: parentHicsSeal?.hicsServiceId,
            doctorServiceNumber: values.doctorServiceNumber,
            sent13RequestNo: values.sent13RequestNo,
            departNo: values.departNo,
            departName: values.departName,
            isForeign: 0,
            freeTypeId: 0,
            historyCode: values.historyCode,
            phoneNo: patient.phoneNo,
            bloodType: values.bloodType,
            diagnosis: values.diagnosis,
            isLiver: patient.isLiver ? 1 : 2,
            startCode: hicsSeal.hicsStartCode,
            xypResponse: {
               requestId: patient.requestId,
               resultMsg: patient.resultMsg
            },
            personalInfo: {
               patientCivilId: patientCivilId,
               isRaped: 2,
               surname: patientSurname,
               aimagCode: patientAimagCode,
               aimgName: patientAimagName,
               soumCode: patientSoumCode,
               soumName: patientSoumName,
               parentPhoneNo: parseInt(patientContacts?.[0]?.contactPhoneNo) || null,
               ...otherInfoPatient,
               age: 27
               // isDonor: 2
               // donorTypeId
               // donorTypeName
            },
            employment: {
               ...values.employment,
               employmentId: patient.employmentId || '1',
               employmentName: patient.employmentName || '- Цалин хөлстэй ажиллагч',
               isEmployment: patient.isEmployment,
               emplessDescriptionId: patient.emplessDescriptionId,
               emplessDescription: patient.emplessDescription
            },
            healthInfo: values.healthInfo
         };
         const apiMap = {
            [HST.savePrescription]: healthInsuranceApi.savePrescription,
            [HST.sendHics]: insuranceApi.createHicsPayment,
            [HST.setApproval]: healthInsuranceApi.postApproval,
            [HST.setPatientSheet]: healthInsuranceApi.setPatientSheet,
            [HST.saveHics]: async (values) => {
               await healthInsuranceApi.saveHics(dataa).then(async ({ data }) => {
                  if (data.code === 200) {
                     openNofi('success', 'Амжилттай', data.description);
                     console.log('ene heregtei data ========>', data);
                     await insuranceApi
                        .requestHicsSeal(hicsSeal.id, {
                           diagnosis: values.diagnosis,
                           // doctorServiceNumber
                           // donorRegno
                           endAt: new Date(),
                           hicsSealCode: data.result.serviceNumber,
                           patientHistoryCode: values.historyCode,
                           process: 1
                           // sent13RequestNo
                        })
                        .then(({ data: { response } }) => {
                           dispatch(setHicsSeal(response));
                        });
                     message.success(data.description);
                     setOpen(false);
                     setDisabled(false);
                  }
               });
            },
            [HST.setPatientReturn]: healthInsuranceApi.postPatientReturn,
            [HST.cancelService]: healthInsuranceApi.cancelService,
            [HST.confirmHics]: healthInsuranceApi.confirmHicsService,
            [HST.reConfirmHics]: healthInsuranceApi.reConfirmService,
            [HST.fingerRequest]: healthInsuranceApi.fingerRequest,
            [HST.repairHics]: healthInsuranceApi.postRepair,
            [HST.startHics]: healthInsuranceApi.postStartHics,
            [HST.skipHics]: healthInsuranceApi.postSkipHicsService,
            [HST.getEsbRef]: healthInsuranceApi.getEsbRefValues,
            [HST.esbMedicalExam]: healthInsuranceApi.postSendEsbMedicalExamHistory,
            [HST.getQuestionCategories]: healthInsuranceApi.getQuestionCategories,
            [HST.getQuestionsByCategory]: healthInsuranceApi.getQuestionsByCategory,
            [HST.getTabletCategories]: healthInsuranceApi.getTabletCategories,
            [HST.getTabletsByCategory]: healthInsuranceApi.getTabletsByCategory,
            [HST.sendEsbNotf]: healthInsuranceApi.postEsbNotification,
            [HST.sendHospitalInfo]: healthInsuranceApi.postHostpitalInfo,
            [HST.sendCheckLicenseInfo]: healthInsuranceApi.postCheckLicenseInfo,
            [HST.sendEditMedicalLink]: healthInsuranceApi.postEditMedicalLink,
            [HST.getHospitalOperation]: healthInsuranceApi.getHostpitalOperation,
            [HST.getVaccineByRegno]: healthInsuranceApi.getVaccineByRegno,
            [HST.sendAddHicsService]: healthInsuranceApi.postAddHicsService,
            [HST.sendDirectService]: healthInsuranceApi.postDirectSendService,
            [HST.sendFormData]: healthInsuranceApi.postSendFormData,
            [HST.sendFixDoctorExams]: healthInsuranceApi.postFixDoctorExams,
            [HST.getDataByFormSummary]: healthInsuranceApi.getDataByFormSummary,
            [HST.getDataFormData]: healthInsuranceApi.getDataFormData,
            [HST.getCt4]: healthInsuranceApi.getCt4
         };
         const selectedApi = apiMap[chooseService];
         if (!selectedApi) throw new Error('Unknown service type');
         const response = await selectedApi(values);
         const { data } = response;
         if (data.code === 200 || data.respMsgCode === 200) {
            message.success(data.description || data.respMsg);
         } else {
            message.warn(data.description || data.respMsg);
         }
      } catch (error) {
         message.error(error.message || 'An error occurred');
      }
   };

   const getForms = () => {
      const formMap = {
         [HST.savePrescription]: <SendPrescription form={insuranceForm} />,
         [HST.sendHics]: <SendHics form={insuranceForm} />,
         [HST.setApproval]: <SendApproval form={insuranceForm} />,
         [HST.setPatientSheet]: <SendPatientSheet form={insuranceForm} />,
         [HST.saveHics]: (
            <SendSaveHics
               hicsSeal={hicsSeal}
               form={insuranceForm}
               parentHicsSeal={parentHicsSeal}
               inspectionNoteId={inspectionNoteId}
               isDisable={setDisabled}
            />
         ),
         [HST.setPatientReturn]: <SendPatientReturn form={insuranceForm} />,
         [HST.cancelService]: <SendCancelHics form={insuranceForm} />,
         [HST.confirmHics]: <SendConfirmHics form={insuranceForm} />,
         [HST.reConfirmHics]: <SendReConfirmHics form={insuranceForm} />,
         [HST.fingerRequest]: <SendFingerRequest form={insuranceForm} />,
         [HST.repairHics]: <SendRepairHics form={insuranceForm} />,
         [HST.startHics]: <SendStartHics form={insuranceForm} />,
         [HST.skipHics]: <SendSkipHics form={insuranceForm} />,
         [HST.getEsbRef]: <GetEsbRef form={insuranceForm} />,
         [HST.esbMedicalExam]: <SendMedicalExam form={insuranceForm} />,
         [HST.getQuestionCategories]: <GetQuestionCategories form={insuranceForm} />,
         [HST.getQuestionsByCategory]: <GetQuestionsByCategory form={insuranceForm} />,
         [HST.getTabletCategories]: <GetTabletCategories form={insuranceForm} />,
         [HST.getTabletsByCategory]: <GetTabletsByCategory form={insuranceForm} />,
         [HST.sendEsbNotf]: <SendEsbNotification form={insuranceForm} />,
         [HST.sendHospitalInfo]: <SendHostpitalInfo form={insuranceForm} />,
         [HST.sendCheckLicenseInfo]: <SendCheckLicenseInfo form={insuranceForm} />,
         [HST.sendEditMedicalLink]: <SendEditMedicalLink form={insuranceForm} />,
         [HST.getHospitalOperation]: <GetHostpitalOperation form={insuranceForm} />,
         [HST.getVaccineByRegno]: <GetVaccineByRegno form={insuranceForm} />,
         [HST.sendAddHicsService]: <SentAddHicsService form={insuranceForm} />,
         [HST.sendDirectService]: <SendDirectService form={insuranceForm} />,
         [HST.sendFormData]: <SendFormData form={insuranceForm} />,
         [HST.sendFixDoctorExams]: <SendFixDoctorExams form={insuranceForm} />,
         [HST.getDataByFormSummary]: <GetDataByFormSummary form={insuranceForm} />,
         [HST.getDataFormData]: <GetDataFormData form={insuranceForm} />,
         [HST.getCt4]: <GetCt4 form={insuranceForm} />
      };

      return formMap[chooseService] || null;
   };

   useEffect(() => {
      setInsuranceServiceItems(defaultServiceItems());
   }, []);

   return (
      <>
         <Search placeholder="Хайх..." allowClear enterButton="Хайх" size="large" onSearch={onSearch} />
         <Divider />
         <List
            dataSource={insuranceServiceItems}
            bordered
            style={{ overflowY: 'auto', height: '60vh', paddingBottom: '1.5rem' }}
            renderItem={(item) => (
               <List.Item
                  className="asdasasd"
                  key={item.value}
                  actions={[
                     <Button
                        key={item.value}
                        type="link"
                        onClick={() => {
                           setChooseService(item.value);
                           setOpen(true);
                           setDisabled(false);
                        }}
                        icon={<SendOutlined />}
                     />
                  ]}
               >
                  <List.Item.Meta description={item.title} />
               </List.Item>
            )}
         />
         <Drawer
            width={640}
            open={open}
            destroyOnClose
            closable={false}
            placement="right"
            onClose={onClose}
            title={HEALTH_SERVCES_DESCRIPTION(chooseService)}
            // forceRender
         >
            <Space direction="vertical" style={{ justifyContent: 'space-between', height: '100%' }}>
               <Form layout="vertical" form={insuranceForm}>
                  {getForms()}
               </Form>
               <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                  <Button disabled={isDisabled} onClick={() => insuranceForm.resetFields()}>
                     Цэвэрлэх
                  </Button>
                  <Button
                     disabled={isDisabled}
                     onClick={() => {
                        insuranceForm
                           .validateFields()
                           .then((values) => {
                              console.log(values);
                              sentService(values);
                           })
                           .catch((error) => {
                              error.errorFields?.map((errorField) => {
                                 openNofi('error', 'Амжилттгүй', errorField.errors?.[0]);
                              });
                           });
                     }}
                     type="primary"
                  >
                     Илгээх
                  </Button>
               </Space>
            </Space>
         </Drawer>
      </>
   );
};

export default SentService;

