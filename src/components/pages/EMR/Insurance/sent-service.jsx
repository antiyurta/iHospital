import React, { useState, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, List, Divider, message, Space, Input } from 'antd';

//common
import { openNofi } from '@Comman/common';

//comp
import {
   CancelHics,
   ConfirmHics,
   FingerRequest,
   Prescription,
   RepairHics,
   SaveHics,
   SendHics,
   SetApproval,
   SetPatientReturn,
   SetPatientSheet,
   ReConfirmHics,
   SkipHics,
   StartHics,
   GetEsbRef,
   MedicalExam,
   QuestionCategories,
   QuestionsByCategory
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
      if (chooseService == HEALTH_SERVICES_TITLE.savePrescription) {
         healthInsuranceApi.savePrescription(values).then(({ data }) => {
            if (data.respMsgCode == 200) {
               message.success(data.respMsg);
            } else {
               message.warn(data.respMsg);
            }
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.sendHics) {
         insuranceApi.createHicsPayment(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
         // healthInsuranceApi.sendHicsService(values).then(({ data }) => {
         //    if (data.code == 200) {
         //       message.success(data.description);
         //    } else {
         //       message.warn(data.description);
         //    }
         // });
      } else if (chooseService === HEALTH_SERVICES_TITLE.setApproval) {
         healthInsuranceApi.postApproval(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.setPatientSheet) {
         healthInsuranceApi
            .setPatientSheet(values)
            .then((response) => {
               message.success(response.data.description);
            })
            .catch((error) => {
               message.error(error);
            });
      } else if (chooseService == HEALTH_SERVICES_TITLE.saveHics) {
         console.log('values', values, hicsSeal, patient);
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
         const data = {
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
         await healthInsuranceApi
            .saveHics(data)
            .then(async ({ data }) => {
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
            })
            .catch((error) => {
               console.log('end aldaa');
               message.error(error);
            });
      } else if (chooseService === HEALTH_SERVICES_TITLE.setPatientReturn) {
         healthInsuranceApi.postPatientReturn(values).then((response) => {
            console.log(response);
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.cancelService) {
         healthInsuranceApi.cancelService(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.confirmHics) {
         healthInsuranceApi.confirmHicsService(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.reConfirmHics) {
         healthInsuranceApi.reConfirmService(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.fingerRequest) {
         healthInsuranceApi.fingerRequest(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.repairHics) {
         healthInsuranceApi.postRepair(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      }
   };

   const getForms = () => {
      const formMap = {
         [HST.savePrescription]: <Prescription form={insuranceForm} />,
         [HST.sendHics]: <SendHics form={insuranceForm} />,
         [HST.setApproval]: <SetApproval form={insuranceForm} />,
         [HST.setPatientSheet]: <SetPatientSheet form={insuranceForm} />,
         [HST.saveHics]: (
            <SaveHics
               hicsSeal={hicsSeal}
               form={insuranceForm}
               parentHicsSeal={parentHicsSeal}
               inspectionNoteId={inspectionNoteId}
               isDisable={setDisabled}
            />
         ),
         [HST.setPatientReturn]: <SetPatientReturn form={insuranceForm} />,
         [HST.cancelService]: <CancelHics form={insuranceForm} />,
         [HST.confirmHics]: <ConfirmHics form={insuranceForm} />,
         [HST.reConfirmHics]: <ReConfirmHics form={insuranceForm} />,
         [HST.fingerRequest]: <FingerRequest form={insuranceForm} />,
         [HST.repairHics]: <RepairHics form={insuranceForm} />,
         [HST.startHics]: <StartHics form={insuranceForm} />,
         [HST.skipHics]: <SkipHics form={insuranceForm} />,
         [HST.getEsbRef]: <GetEsbRef form={insuranceForm} />,
         [HST.esbMedicalExam]: <MedicalExam form={insuranceForm} />,
         [HST.getQuestionCategories]: <QuestionCategories form={insuranceForm} />,
         [HST.getQuestionsByCategory]: <QuestionsByCategory form={insuranceForm} />
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
            renderItem={(item) => (
               <List.Item
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
            extra={
               <Space>
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
            }
         >
            <Form layout="vertical" form={insuranceForm}>
               {getForms()}
            </Form>
         </Drawer>
      </>
   );
};

export default SentService;

