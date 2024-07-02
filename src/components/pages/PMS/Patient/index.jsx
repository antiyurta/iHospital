import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Radio, Select, Steps } from 'antd';
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
import { useSelector } from 'react-redux';
import { selectHospitalIsXyp } from '@Features/hospitalReducer';
import { message } from '@Features/AppGlobal';
import OTPInput from 'react-otp-input';

const RegisterPatient = ({ patientId, onFinish, editMode }) => {
   const [form] = Form.useForm();
   const isCitizenByOtp = useSelector(({ hospitalReducer }) => hospitalReducer.isCitizenByOtp);
   const isXyp = useSelector(selectHospitalIsXyp);
   const registerType = Form.useWatch('registerType', form);
   const authType = Form.useWatch('authType', form);
   const [isLoading, setIsLoading] = useState(false);
   const [current, setCurrent] = useState(isXyp ? 0 : 2);
   const [childrens, setChildrens] = useState([]);
   const [citizenPhone, setCitizenPhone] = useState('');

   useEffect(() => {
      !editMode && form.resetFields();
   }, [editMode]);

   const steps = [
      {
         title: 'Төрөл',
         icon: <AuditOutlined />,
         content: (
            <>
               <Form.Item
                  name="registerType"
                  className="white-radio"
                  label="Бүртгэлийн төрөл"
                  rules={[{ required: true, message: 'Бүртгэлийн төрөлөө сонгоно уу.' }]}
               >
                  <Radio.Group>
                     <Radio.Button value="citizen">Иргэн</Radio.Button>
                     <Radio.Button value="children">Хүүхэд</Radio.Button>
                     <Radio.Button value="foreignCitizen">Гадны иргэн</Radio.Button>
                  </Radio.Group>
               </Form.Item>
               <Form.Item
                  name="regnum"
                  label={registerType == 'children' ? 'Эцэг эхийн регистр' : 'Регистр'}
                  rules={[{ required: true, message: 'Регистр оруулна уу!' }]}
               >
                  <Input />
               </Form.Item>
               {registerType == 'citizen' && (
                  <Form.Item
                     name="authType"
                     className="white-radio"
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
               )}
               {registerType == 'children' && (
                  <Form.Item
                     name="searchType"
                     label="Эцэг/эх"
                     rules={[{ required: true, message: 'Эцэг/эх эсэхийг сонгоно уу!' }]}
                  >
                     <Radio.Group>
                        <Radio value={1}>Эцэг</Radio>
                        <Radio value={2}>Эх</Radio>
                     </Radio.Group>
                  </Form.Item>
               )}
               {registerType == 'foreignCitizen' && (
                  <>
                     <Form.Item
                        name="username"
                        label="Нэвтрэх нэр"
                        rules={[{ required: true, message: 'Хэрэглэгчийн нэр оруулна уу!' }]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="password"
                        label="Нууц үг"
                        rules={[{ required: true, message: 'Нууц үг оруулна уу!' }]}
                     >
                        <Input />
                     </Form.Item>
                  </>
               )}
               {authType == 1 && (
                  <Form.Item
                     name="phoneNum"
                     label="Утасны дугаар"
                     rules={[{ required: true, message: 'Утасны дугаар оруулна уу!' }]}
                  >
                     <InputNumber />
                  </Form.Item>
               )}
            </>
         )
      },
      {
         title: 'Баталгаажуулалт',
         icon: <SolutionOutlined />,
         content: (
            <>
               Утас: {citizenPhone}
               {form.getFieldValue('authType') == 1 && (
                  <>
                     <Form.Item name="otp" label="OTP" rules={[{ required: true, message: 'OTP кодоо оруулна уу!' }]}>
                        <OTPInput
                           inputStyle={{
                              height: 50,
                              width: 50,
                              margin: 6,
                              border: '1px solid #2D8CFF',
                              borderRadius: 8,
                              fontSize: 24
                           }}
                           inputType="number"
                           numInputs={6}
                           renderSeparator={<span>-</span>}
                           renderInput={(props) => <Input {...props} />}
                        />
                     </Form.Item>
                  </>
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
               {form.getFieldValue('registerType') == 'children' && (
                  <Form.Item name="currentChildCivildId" label="Хүүхэд">
                     <Select
                        options={childrens.map((item) => ({ value: item?.civilId, label: item?.firstname }))}
                     ></Select>
                  </Form.Item>
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

   const next = async () => {
      form
         .validateFields()
         .then(async () => {
            const registerType = form.getFieldValue('registerType');
            const authType = form.getFieldValue('authType');
            const regnum = form.getFieldValue('regnum');
            const phoneNum = form.getFieldValue('phoneNum');
            if (current === 0) {
               authType == 1 && registerOtp(regnum, phoneNum);
               registerType == 'children' && childrenInfo();
               registerType == 'foreignCitizen' && foreignPersonInfo();
               setCurrent(current + 1);
            } else if (current === 1) {
               if (authType === 0) {
                  // manual registration
                  getByRegno(regnum);
               } else if (authType == 1) {
                  const isCheck = await checkOtp();
                  if (!isCheck) {
                     setIsLoading(false);
                  } else {
                     sentXyp({
                        regnum,
                        authType,
                        otp: form.getFieldValue('otp')
                     });
                     setCurrent(current + 1);
                  }
               } else if (authType == 2) {
                  // siganture registration
                  setCurrent(current + 1);
               } else if (authType == 3) {
                  // finger registration
                  sentXyp({
                     regnum,
                     authType,
                     fingerprint: form.getFieldValue('citizenFinger'),
                     operator: {
                        regnum: form.getFieldValue('operatorRegnum'),
                        fingerprint: form.getFieldValue('operatorFinger')
                     }
                  });
                  setCurrent(current + 1);
               }
               if (registerType == 'children') {
                  childByCivildId(form.getFieldValue('currentChildCivildId'));
                  setCurrent(current + 1);
               }
            }
         })
         .catch((info) => {
            info.errorFields?.map((errorMsg) => {
               message.error(errorMsg.errors[0]);
            });
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
   const registerOtp = (regnum, phoneNum) => {
      setIsLoading(true);
      if (isCitizenByOtp) {
         xypApi
            .registerOtpByCitizen(regnum, phoneNum, [{ ws: 'WS100101_getCitizenIDCardInfo' }])
            .then(({ data: { response } }) => {
               if (response.return.resultCode != 0) {
                  openNofi('warning', 'ХУР-сервис', response.return.resultMessage);
               } else {
                  form.setFieldValue('otp', response.return.response.otp);
                  setCitizenPhone(response.return.response.phoneNum);
                  openNofi('success', 'ХУР-сервис', response.return.resultMessage);
               }
            })
            .finally(() => setIsLoading(false));
      } else {
         xypApi
            .registerOtp(regnum, phoneNum)
            .then(({ data: { response } }) => {
               if (response.return.resultCode != 0) {
                  openNofi('warning', 'ХУР-сервис', response.return.resultMessage);
               } else {
                  openNofi('success', 'ХУР-сервис', response.return.resultMessage);
               }
            })
            .finally(() => setIsLoading(false));
      }
   };
   const checkOtp = async () => {
      setIsLoading(true);
      const otp = form.getFieldValue('otp');
      const regnum = form.getFieldValue('regnum');
      const phoneNum = form.getFieldValue('phoneNum');
      let result = false;
      try {
         let response;
         if (isCitizenByOtp) {
            const { data } = await xypApi.checkOtpByCitizen(String(phoneNum), otp);
            response = data.response;
         } else {
            const { data } = await xypApi.checkOtp(regnum, otp);
            response = data.response;
         }
         if (response.return.resultCode !== 0) {
            openNofi('warning', 'ХУР-сервис', response.return.resultMessage);
         } else {
            openNofi('success', 'ХУР-сервис', response.return.returnMessage);
            result = true;
         }
      } catch (error) {
         openNofi('warning', 'OTP шалгах явцад алдаа гарлаа:', error);
      } finally {
         setIsLoading(false);
      }
      return result;
   };
   const childrenInfo = async () => {
      setIsLoading(true);
      const regnum = form.getFieldValue('regnum');
      const searchType = form.getFieldValue('searchType');
      xypApi
         .childrenInfo(regnum, searchType)
         .then(({ data: { response } }) => {
            if (response.return.resultCode != 0) {
               openNofi('warning', 'ХУР-сервис', response.return.resultMessage);
            } else {
               form.setFieldValue('requestId', response.return.requestId);
               setChildrens(response.return.response.listData);
               openNofi('success', 'ХУР-сервис', response.return.resultMessage);
            }
         })
         .finally(() => setIsLoading(false));
   };
   const foreignPersonInfo = async () => {
      setIsLoading(true);
      xypApi
         .foreignPersonInfo(
            form.getFieldValue('regnum'),
            form.getFieldValue('username'),
            form.getFieldValue('password')
         )
         .then(({ data: { response } }) => {
            if (response.return.resultCode != 0) {
               openNofi('warning', 'ХУР-сервис', response.return.resultMessage);
            } else {
               setChildrens(response.return.response.listData);
               openNofi('success', 'ХУР-сервис', response.return.resultMessage);
            }
         })
         .finally(() => setIsLoading(false));
   };
   const sentXyp = async (values) => {
      setIsLoading(true);
      await xypApi
         .citizenCard(values)
         .then(({ data: { response } }) => {
            if (response.return.resultCode != 0) {
               openNofi('warning', 'ХУР-сервис', response.return.resultMessage);
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
   const childByCivildId = (civilId) => {
      const currentIndex = childrens.findIndex((item) => item?.civilId == civilId);
      if (currentIndex > -1) {
         const children = childrens[currentIndex];
         form.setFieldsValue({
            civilId,
            familyName: children.lastname,
            lastName: children.childLastname,
            firstName: children.firstname,
            registerNumber: children.regnum,
            aimagCityCode: children.addressData.aimagCityCode,
            soumDistrictCode: children.addressData.soumDistrictCode,
            bagKhorooCode: children.addressData.bagKhorooCode,
            addressDetail: children.fullAddress
         });
      }
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
      <Form form={form} onFinish={onFinish} layout="vertical" className="flex flex-col gap-2">
         <Steps
            style={{
               padding: 6,
               borderRadius: 12,
               background: '#f5f6f7'
            }}
            size="small"
            current={current}
            items={steps.map(({ title, icon }) => ({ title, icon }))}
         />
         <div className="steps-content">{steps[current].content}</div>
         <div className="steps-action">
            {current > 0 && (
               <Button
                  disabled={editMode || !isXyp}
                  style={{ margin: '0 8px' }}
                  onClick={() => prev()}
                  icon={<CaretLeftOutlined />}
               >
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
                  onClick={() =>
                     form
                        .validateFields()
                        .then(onFinish)
                        .catch(({ errorFields }) => {
                           errorFields?.map((error) => message.error(error.errors[0]));
                        })
                  }
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
