import React, { useState, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, List, Divider, message, Space, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
   SendMedicalExam,
   SendEsbNotification,
   SendHospitalInfo,
   SendCheckLicenseInfo,
   SendEditMedicalLink,
   SentAddHicsService,
   SendDirectService,
   SendFormData,
   SwitchSupport
} from './DrawerComps';

//defaults
const { Search } = Input;
import { HEALTH_SERVCES_DESCRIPTION, HEALTH_SERVICES_TITLE as HST } from './enum-utils';
//api
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import appointmentApi from '@ApiServices/appointment/api-appointment-service';
//redux
import { setAddHics, setEmrData, setHicsSeal } from '@Features/emrReducer';

// style css
import './style.css';

const SentService = ({ patient, hicsSeal, parentHicsSeal, inspectionNoteId, incomeEmrData, addHics }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [insuranceForm] = Form.useForm();
   const [open, setOpen] = useState(false);
   const [isDisabled, setDisabled] = useState(false);
   const [insuranceServiceItems, setInsuranceServiceItems] = useState([]);
   const [chooseService, setChooseService] = useState(HST.saveHics);
   const { appointmentType, appointmentId, departmentId } = incomeEmrData;
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

   const createAddHics = async (startCode) => {
      return await insuranceApi
         .createAddHics({
            checkupId: 1,
            departName: hicsSeal.department.name,
            departNo: hicsSeal.departNo,
            hicsSealId: hicsSeal.id,
            startDate: new Date(),
            startCode: startCode
         })
         .then(({ data: { response } }) => {
            dispatch(
               setEmrData({
                  ...incomeEmrData,
                  addHicsId: response.id
               })
            );
            return response;
         });
   };

   const patchAppointment = async (data) => {
      try {
         const apiMap = {
            0: appointmentApi.patchAppointment,
            1: appointmentApi.patchPreOrder
         };
         const selectedApi = apiMap[appointmentType];
         if (!selectedApi) throw new Error('Unknown service type');
         return await selectedApi(appointmentId, data).then(({ data }) => data);
      } catch (error) {
         message.error(error);
      }
   };

   const deleteAddHics = async () => {
      addHics.id &&
         (await insuranceApi.deleteAddHics(addHics.id).then(() => {
            dispatch(setAddHics(null));
            dispatch(
               setEmrData({
                  ...incomeEmrData,
                  addHicsId: null
               })
            );
         }));
   };

   const updateHicsSeal = async (startCode, hicsServiceId) => {
      await insuranceApi.requestHicsSeal(hicsSeal.id, {
         hicsServiceId: hicsServiceId,
         startAt: new Date(),
         hicsStartCode: startCode,
         diagnosis: null
      });
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
            startDate: hicsSeal?.startAt,
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
               age: 27,
               workplace: '1'
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
            [HST.switchSupport]: healthInsuranceApi.postStartHics,
            [HST.sendHics]: healthInsuranceApi.sendHicsService,
            [HST.setApproval]: healthInsuranceApi.postApproval,
            [HST.setPatientSheet]: healthInsuranceApi.setPatientSheet,
            [HST.saveHics]: healthInsuranceApi.saveHics,
            [HST.setPatientReturn]: healthInsuranceApi.postPatientReturn,
            [HST.cancelService]: healthInsuranceApi.cancelService,
            [HST.confirmHics]: healthInsuranceApi.confirmHicsService,
            [HST.reConfirmHics]: healthInsuranceApi.reConfirmService,
            [HST.fingerRequest]: healthInsuranceApi.fingerRequest,
            [HST.repairHics]: healthInsuranceApi.postRepair,
            [HST.startHics]: healthInsuranceApi.postStartHics,
            [HST.skipHics]: healthInsuranceApi.postSkipHicsService,
            [HST.esbMedicalExam]: healthInsuranceApi.postSendEsbMedicalExamHistory,
            [HST.sendEsbNotf]: healthInsuranceApi.postEsbNotification,
            [HST.sendHospitalInfo]: async (values) => {
               const transformedValues = {
                  ...values,
                  hasBranch: values.hasBranch?.[0],
                  hasInsurance: values.hasInsurance?.[0]
               };
               await healthInsuranceApi.postHostpitalInfo(transformedValues).then(async ({ data }) => {
                  if (data.code === 200) {
                     openNofi('success', 'Амжилттай', data.description);
                     setOpen(false);
                     insuranceForm.resetFields();
                  }
               });
            },
            [HST.sendCheckLicenseInfo]: healthInsuranceApi.postCheckLicenseInfo,
            [HST.sendEditMedicalLink]: healthInsuranceApi.postEditMedicalLink,
            [HST.sendAddHicsService]: healthInsuranceApi.postAddHicsService,
            [HST.sendDirectService]: healthInsuranceApi.postDirectSendService,
            [HST.sendFormData]: healthInsuranceApi.postSendFormData
         };
         const selectedApi = apiMap[chooseService];
         if (!selectedApi) throw new Error('Unknown service type');
         if (chooseService === HST.saveHics) {
            await selectedApi(dataa).then(async ({ data }) => {
               if (data.code === 200) {
                  openNofi('success', 'Амжилттай', data.description);
                  await insuranceApi
                     .requestHicsSeal(hicsSeal.id, {
                        amountCit: values.amountCit,
                        amountHi: values.amountHi,
                        amountTotal: values.amountTotal,
                        diagnosis: values.diagnosis,
                        // doctorServiceNumber
                        // donorRegno
                        endAt: new Date(),
                        hicsSealCode: data.result.serviceNumber,
                        patientHistoryCode: values.historyCode,
                        process: 1
                        // sent13RequestNo
                     })
                     .then(({ data }) => {
                        dispatch(setHicsSeal(data));
                     });
                  message.success(data.description);
                  setOpen(false);
                  setDisabled(false);
               }
            });
         } else if (chooseService === HST.sendHics) {
            console.log(';end orj irne', values);
            const dataa = {
               patientRegno: patient.registerNumber,
               patientFingerprint: values.fingerprint,
               patientFirstname: patient.firstName,
               patientLastname: patient.lastName,
               payments: values.payments
            };
            await selectedApi(dataa).then(async (data) => {
               if (data.code === 200) {
                  openNofi('success', 'Амжилттай', data.description);
                  await insuranceApi
                     .requestHicsSeal(hicsSeal.id, {
                        process: 2
                     })
                     .then(({ data }) => {
                        dispatch(setHicsSeal(data));
                     });
                  message.success(data.description);
                  setOpen(false);
                  setDisabled(false);
               }
            });
         } else if (chooseService === HST.switchSupport) {
            await selectedApi({
               patientRegno: patient.registerNumber,
               patientFingerprint: values.fingerprint,
               hicsServiceId: values?.hicsServiceId
            }).then(async ({ data }) => {
               if (data.code === 400) {
                  openNofi('error', 'Амжилтгүй', data.description);
               } else if (data.code === 200) {
                  const result = data.result;
                  const hicsServiceId = values.hicsServiceId;
                  let newAddHicsId = null;
                  if (hicsServiceId === 20120) {
                     const addHicsResponse = await createAddHics(result.code);
                     await patchAppointment({
                        addHicsId: addHicsResponse.id
                     }).then(() => {
                        newAddHicsId = addHicsResponse.id;
                     });
                  } else {
                     const oldHicsServiceId = hicsSeal.hicsServiceId;
                     if (oldHicsServiceId === 20120) {
                        await patchAppointment({
                           addHicsId: null
                        }).then(async (response) => {
                           if (response.success) {
                              await deleteAddHics();
                           }
                        });
                     }
                  }
                  await updateHicsSeal(result.code, hicsServiceId);
                  dispatch(
                     setEmrData({
                        ...incomeEmrData,
                        addHicsId: newAddHicsId,
                        startDate: new Date()
                     })
                  );
                  navigate(0);
               }
            });
         } else {
            const response = await selectedApi(values);
            const { data } = response;
            if (data.code === 200 || data.respMsgCode === 200) {
               message.success(data.description || data.respMsg);
            } else {
               message.warn(data.description || data.respMsg);
            }
         }
      } catch (error) {
         console.log('err', error);
         message.error(error.message || 'An error occurred');
      }
   };

   const getForms = () => {
      const formMap = {
         [HST.savePrescription]: <SendPrescription form={insuranceForm} />,
         [HST.switchSupport]: <SwitchSupport form={insuranceForm} hicsServiceIds={incomeEmrData.hicsServiceIds} />,
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
         [HST.esbMedicalExam]: <SendMedicalExam form={insuranceForm} />,
         [HST.sendEsbNotf]: <SendEsbNotification form={insuranceForm} />,
         [HST.sendHospitalInfo]: <SendHospitalInfo form={insuranceForm} />,
         [HST.sendCheckLicenseInfo]: <SendCheckLicenseInfo form={insuranceForm} />,
         [HST.sendEditMedicalLink]: <SendEditMedicalLink form={insuranceForm} />,
         [HST.sendAddHicsService]: <SentAddHicsService form={insuranceForm} />,
         [HST.sendDirectService]: <SendDirectService form={insuranceForm} />,
         [HST.sendFormData]: <SendFormData form={insuranceForm} />
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
                              sentService(values);
                           })
                           .catch((error) => {
                              console.log('---->', error);
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
