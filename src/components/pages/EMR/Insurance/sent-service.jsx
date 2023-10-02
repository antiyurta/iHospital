import React, { useState, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { HEALTH_SERVCES_DESCRIPTION, HEALTH_SERVICES_TITLE } from './enum-utils';
import { Button, Drawer, Form, List, Divider, message, Space } from 'antd';
import healthInsuranceService from '../../../../services/healt-insurance/healtInsurance';
import SetPatientSheet from './set-patient-sheet';
import Search from 'antd/lib/input/Search';
import SaveHics from './save-hics';
import SetApproval from './set-approval';
import SetPatientReturn from './set-patient-return';
import SendHics from './send-hics-service';
import CancelHics from './cancel-hics';
import Prescription from './prescription';

const SentService = () => {
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
         healthInsuranceService.savePrescription(values).then(({ data }) => {
            if (data.respMsgCode == 200) {
               message.success(data.respMsg);
            } else {
               message.warn(data.respMsg);
            }
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.sendHics) {
         healthInsuranceService.sendHicsService(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      } else if (chooseService === HEALTH_SERVICES_TITLE.setApproval) {
         healthInsuranceService.postApproval(values).then((response) => {
            console.log(response);
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.setPatientSheet) {
         healthInsuranceService
            .setPatientSheet(values)
            .then((response) => {
               message.success(response.data.description);
            })
            .catch((error) => {
               message.error(error);
            });
      } else if (chooseService == HEALTH_SERVICES_TITLE.saveHics) {
         healthInsuranceService
            .saveHics(values)
            .then((response) => {
               message.success(response.data.description);
            })
            .catch((error) => {
               message.error(error);
            });
      } else if (chooseService === HEALTH_SERVICES_TITLE.setPatientReturn) {
         healthInsuranceService.postPatientReturn(values).then((response) => {
            console.log(response);
         });
      } else if (chooseService == HEALTH_SERVICES_TITLE.cancelService) {
         healthInsuranceService.cancelService(values).then(({ data }) => {
            if (data.code == 200) {
               message.success(data.description);
            } else {
               message.warn(data.description);
            }
         });
      }
   };
   const getForms = () => {
      if (chooseService === HEALTH_SERVICES_TITLE.savePrescription) {
         return <Prescription form={insuranceForm} />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.sendHics) {
         return <SendHics form={insuranceForm} />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.setApproval) {
         return <SetApproval form={insuranceForm} />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.setPatientSheet) {
         return <SetPatientSheet form={insuranceForm} />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.saveHics) {
         return <SaveHics form={insuranceForm} />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.setPatientReturn) {
         return <SetPatientReturn form={insuranceForm} />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.cancelService) {
         return <CancelHics form={insuranceForm} />;
      } else {
         return 'ali ch nohtsol biyleegui bn';
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
                        }}
                        icon={<SendOutlined />}
                     ></Button>
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
            forceRender
            extra={
               <Space>
                  <Button onClick={() => insuranceForm.resetFields()}>Цэвэрлэх</Button>
                  <Button
                     onClick={() => {
                        insuranceForm.validateFields().then((values) => {
                           sentService(values);
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
