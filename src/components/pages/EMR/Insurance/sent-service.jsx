import React, { useState, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, List, Divider, message, Space, Input } from 'antd';
//common
import { openNofi } from '@Comman/common';
//comp
import SaveHics from './save-hics';
import CancelHics from './cancel-hics';
import RepairHics from './repair-hics';
import ConfirmHics from './confirm-hics';
import SetApproval from './set-approval';
import Prescription from './prescription';
import SendHics from './send-hics-service';
import ReConfirmHics from './reconfirm-hics';
import FingerRequest from './finger-request';
import SetPatientSheet from './set-patient-sheet';
import SetPatientReturn from './set-patient-return';
//api
import insuranceApi from '@ApiServices/healt-insurance/insurance';
import healthInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//defaults
const { Search } = Input;
import { HEALTH_SERVCES_DESCRIPTION, HEALTH_SERVICES_TITLE } from './enum-utils';
import { setHicsSeal } from '@Features/emrReducer';
import { useDispatch } from 'react-redux';

const SentService = ({ patient, hicsSeal, parentHicsSeal, inspectionNoteId }) => {
   console.log('hicsSeal', hicsSeal);
   const dispatch = useDispatch();
   const [isDisabled, setDisabled] = useState(false);
   const [insuranceForm] = Form.useForm();
   const [chooseService, setChooseService] = useState(HEALTH_SERVICES_TITLE.saveHics);
   const [open, setOpen] = useState(false);
   const [insuranceServiceItems, setInsuranceServiceItems] = useState([]);
   const onClose = () => {
      setOpen(false);
   };
   const defaultServiceItems = () => {
      return Object.values(HEALTH_SERVICES_TITLE).map((value) => ({
         value,
         title: HEALTH_SERVCES_DESCRIPTION(value)
      }));
   };
   const onSearch = (value) => {
      const filter = defaultServiceItems().filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
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
               } else {
                  message.warn(data.description);
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
      switch (chooseService) {
         case HEALTH_SERVICES_TITLE.savePrescription:
            return <Prescription form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.sendHics:
            return <SendHics form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.setApproval:
            return <SetApproval form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.setPatientSheet:
            return <SetPatientSheet form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.saveHics:
            return (
               <SaveHics
                  form={insuranceForm}
                  hicsSeal={hicsSeal}
                  parentHicsSeal={parentHicsSeal}
                  inspectionNoteId={inspectionNoteId}
                  isDisable={(state) => {
                     setDisabled(state);
                  }}
               />
            );
         case HEALTH_SERVICES_TITLE.setPatientReturn:
            return <SetPatientReturn form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.cancelService:
            return <CancelHics form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.confirmHics:
            return <ConfirmHics form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.reConfirmHics:
            return <ReConfirmHics form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.fingerRequest:
            return <FingerRequest form={insuranceForm} />;
         case HEALTH_SERVICES_TITLE.repairHics:
            return <RepairHics form={insuranceForm} />;
         default:
            break;
      }
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
            placement="right"
            title={HEALTH_SERVCES_DESCRIPTION(chooseService)}
            closable={false}
            onClose={onClose}
            open={open}
            destroyOnClose
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
