import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio, Steps, message } from 'antd';
//common
import { openNofi } from '@Comman/common';
import Finger from '@Comman/Finger/Finger';
//api
import xypApi from '@ApiServices/xyp/xyp.api';
import patientApi from '@ApiServices/pms/patient.api';
import {
   AuditOutlined,
   CaretLeftOutlined,
   CaretRightOutlined,
   CheckOutlined,
   SolutionOutlined,
   UserOutlined
} from '@ant-design/icons';
import PatientInfo from './PatientInfo';
import dayjs from 'dayjs';

const RegisterPatient = ({ patientId, onFinish }) => {
   const [form] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   const [current, setCurrent] = useState(0);

   const steps = [
      {
         title: 'Төрөл',
         icon: <AuditOutlined />,
         content: (
            <Form.Item
               name="authType"
               label="Мэдээлэл татах төрөл"
               rules={[{ required: true, message: 'Мэдээлэл татах төрөлөө сонгоно уу!' }]}
            >
               <Radio.Group>
                  <Radio.Button value={0}>Үйлчилүүлэгчээр бөглүүлэх</Radio.Button>
                  <Radio.Button value={1}>OTP</Radio.Button>
                  <Radio.Button value={2}>Тоон гарын үсэг</Radio.Button>
                  <Radio.Button value={3}>Хурууны хээ</Radio.Button>
               </Radio.Group>
            </Form.Item>
         )
      },
      {
         title: 'Баталгаажуулалт',
         icon: <SolutionOutlined />,
         content: (
            <>
               <Form.Item name="regnum" label="Pегистр" rules={[{ required: true, message: 'Регистр оруулна уу!' }]}>
                  <Input />
               </Form.Item>
               {form.getFieldValue('authType') == 1 && (
                  <Form.Item name="otp" label="OTP" rules={[{ required: true, message: 'OTP кодоо оруулна уу!' }]}>
                     <Input />
                  </Form.Item>
               )}
               {form.getFieldValue('authType') == 2 && (
                  <Form.Item
                     name="certFingerprint"
                     label="Иргэний тоон гарын үсгийн сериал дугаар"
                     rules={[{ required: true, message: 'Иргэний тоон гарын үсгийн сериал дугаар оруулна уу!' }]}
                  >
                     <Input />
                  </Form.Item>
               )}
               {form.getFieldValue('authType') == 3 && (
                  <div className="grid grid-cols-2 gap-2">
                     <div className="rounded-md bg-[#F3F4F6] flex flex-col gap-2 w-full p-2">
                        <label>Иргэн:</label>
                        <Finger
                           form={form}
                           insurance={true}
                           noStyle
                           name="citizenFinger"
                           rules={[
                              {
                                 required: true,
                                 message: 'Иргэний хурууний хээ заавал'
                              }
                           ]}
                        >
                           <Input />
                        </Finger>
                     </div>
                     <div className="rounded-md bg-[#F3F4F6] flex flex-col gap-2 w-full p-2">
                        <label>Ажилтан:</label>
                        <Form.Item
                           className="mb-0"
                           name="operatorRegnum"
                           rules={[
                              {
                                 required: true,
                                 message: 'Иргэний хурууний хээ заавал'
                              }
                           ]}
                        >
                           <Input placeholder="Ажилтаны регистрийн дугаар" />
                        </Form.Item>
                        <Finger
                           form={form}
                           insurance={true}
                           noStyle
                           name="operatorFinger"
                           rules={[
                              {
                                 required: true,
                                 message: 'Ажилтаны хурууний хээ заавал'
                              }
                           ]}
                        >
                           <Input />
                        </Finger>
                     </div>
                  </div>
               )}
            </>
         )
      },
      {
         title: 'Иргэний мэдээлэл',
         icon: <UserOutlined />,
         content: <PatientInfo form={form} />
      }
   ];

   const next = () => {
      form
         .validateFields()
         .then(() => {
            if (current === 1) {
               if (form.getFieldValue('authType') === 0) {
                  // manual registration
                  getByRegno(form.getFieldValue('regnum'));
               } else if (form.getFieldValue('authType') == 1) {
                  // otp registration
               } else if (form.getFieldValue('authType') == 2) {
                  // siganture registration
               } else if (form.getFieldValue('authType') == 3) {
                  // finger registration
                  sentXyp({
                     regnum: form.getFieldValue('regnum'),
                     authType: 3,
                     fingerprint: form.getFieldValue('citizenFinger'),
                     operator: {
                        regnum: form.getFieldValue('operatorRegnum'),
                        fingerprint: form.getFieldValue('operatorFinger')
                     }
                  });
               }
            }
            setCurrent(current + 1);
         })
         .catch((info) => {
            message.warning(info);
         });
   };

   const prev = () => {
      setCurrent(current - 1);
   };
   const getByRegno = async (regno) => {
      setIsLoading(true);
      await patientApi
         .getByRegno(regno)
         .then((res) => {
            if (res.data.response !== null) {
               form.setFieldsValue(res.data.response);
            }
         })
         .finally(() => setIsLoading(false));
   };
   const sentXyp = async (values) => {
      setIsLoading(true);
      await xypApi
         .post(values)
         .then(({ data: { response } }) => {
            if (response.return.resultCode != 0) {
               openNofi('warning', response.return.resultMessage);
            } else {
               const { response: newResponse, requestId, resultMessage } = response.return;
               form.setFieldsValue({
                  requestId: requestId,
                  resultMsg: resultMessage,
                  civilId: newResponse.civilId,
                  base64String: newResponse.image,
                  familyName: newResponse.surname,
                  lastName: newResponse.lastname,
                  firstName: newResponse.firstname,
                  registerNumber: newResponse.regnum,
                  nationality: newResponse.nationality,
                  ethnicity: newResponse.ethnicity,
                  aimagCityName: newResponse.aimagCityName,
                  aimagCityCode: newResponse.aimagCityCode,
                  soumDistrictName: newResponse.soumDistrictName,
                  soumDistrictCode: newResponse.soumDistrictCode,
                  bagKhorooName: newResponse.bagKhorooName,
                  bagKhorooCode: newResponse.bagKhorooCode,
                  addressStreetName: newResponse.addressStreetName ?? newResponse.addressApartmentName,
                  addressDetail: newResponse.addressDetail
               });
            }
         })
         .finally(() => setIsLoading(false));
   };

   const getPatientById = async () => {
      form.resetFields();
      await patientApi
         .getById(patientId)
         .then((response) => {
            response.data.response['birthDay'] = dayjs(response.data.response['birthDay']);
            form.setFieldsValue({
               ...response.data.response,
               authType: 0,
               regnum: response.data.response.registerNumber
            });
            setIsLoading(false);
            setCurrent(2);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   useEffect(() => {
      patientId && getPatientById();
   }, [patientId]);

   return (
      <Form form={form} onFinish={onFinish} layout="vertical">
         <Steps current={current} items={steps.map(({ title, icon }) => ({ title, icon }))} />
         <div className="steps-content ">{steps[current].content}</div>
         <div className="steps-action" style={{ marginTop: 24 }}>
            {current > 0 && (
               <Button style={{ margin: '0 8px' }} onClick={() => prev()} icon={<CaretLeftOutlined />}>
                  Өмнөх
               </Button>
            )}
            {current < steps.length - 1 && (
               <Button type="primary" onClick={() => next()} loading={isLoading} icon={<CaretRightOutlined />}>
                  Дараах
               </Button>
            )}
            {current === steps.length - 1 && (
               <Button
                  type="primary"
                  onClick={() => form.validateFields().then((values) => onFinish(values))}
                  loading={isLoading}
                  icon={<CheckOutlined />}
               >
                  Болсон
               </Button>
            )}
         </div>
      </Form>
   );
};
export default RegisterPatient;
