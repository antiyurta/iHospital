import React, { useState, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { HEALTH_SERVCES_DESCRIPTION, HEALTH_SERVICES_TITLE } from './enum-utils';
import GetPatientSheet from './get-patient-sheet';
import { Button, Drawer, Form, List, Divider, message, Space } from 'antd';
import healthInsuranceService from '../../../../services/healt-insurance/healtInsurance';
import SetPatientSheet from './set-patient-sheet';
import Search from 'antd/lib/input/Search';
import SaveHics from './save-hics';

const SentService = () => {
   const [insuranceForm] = Form.useForm();
   const [chooseService, setChooseService] = useState(HEALTH_SERVICES_TITLE.getPatientSheet);
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
      if (chooseService == HEALTH_SERVICES_TITLE.getPatientSheet) {
         
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
      }
   };
   const getFormFields = () => {
      if (chooseService === HEALTH_SERVICES_TITLE.getPatientSheet) {
         return <GetPatientSheet />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.setPatientSheet) {
         return <SetPatientSheet form={insuranceForm} />;
      } else if (chooseService === HEALTH_SERVICES_TITLE.saveHics) {
         return <SaveHics form={insuranceForm} />;
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
               {getFormFields()}
            </Form>
         </Drawer>
      </>
   );
};

export default SentService;
