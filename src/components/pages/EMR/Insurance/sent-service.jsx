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
      try {
         const apiMap = {
            [HST.savePrescription]: healthInsuranceApi.savePrescription,
            [HST.sendHics]: insuranceApi.createHicsPayment,
            [HST.setApproval]: healthInsuranceApi.postApproval,
            [HST.setPatientSheet]: healthInsuranceApi.setPatientSheet,
            [HST.saveHics]: async (values) => {
               const { data } = await insuranceApi.requestHicsSeal(hicsSeal.id, values);
               if (data.code === 200) {
                  openNofi('success', 'Амжилттай', data.description);
                  const sealResponse = await insuranceApi.getByIdHicsSeals(hicsSeal.id);
                  dispatch(setHicsSeal(sealResponse.data.response));
                  setOpen(false);
                  setDisabled(false);
               }
               return data;
            },
            [HST.setPatientReturn]: healthInsuranceApi.postPatientReturn,
            [HST.cancelService]: healthInsuranceApi.cancelService,
            [HST.confirmHics]: healthInsuranceApi.confirmHicsService,
            [HST.reConfirmHics]: healthInsuranceApi.reConfirmService,
            [HST.fingerRequest]: healthInsuranceApi.fingerRequest,
            [HST.repairHics]: healthInsuranceApi.postRepair,
            [HST.startHics]: healthInsuranceApi.postStartHics,
            [HST.skipHics]: healthInsuranceApi.postSkipHics,
            [HST.getEsbRef]: healthInsuranceApi.getEsbRefValues,
            [HST.esbMedicalExam]: healthInsuranceApi.esbMedicalExamHistory,
            [HST.getQuestionCategories]: healthInsuranceApi.getQuestionCategories,
            [HST.getQuestionsByCategory]: healthInsuranceApi.getQuestionsByCategory
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

