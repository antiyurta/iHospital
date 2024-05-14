import React, { useState } from 'react';
import { Badge, Button, Form, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { InfoCircleOutlined } from '@ant-design/icons';
import PasswordChecklist from 'react-password-checklist';
const { Title } = Typography;
//common
import { openNofi } from '@Comman/common';
//redux
import { selectOTPData, setOTPData } from '@Features/authReducer';
//api
import AuthApi from '@ApiServices/authentication/authentication.api';
const ResetPassword = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const otpData = useSelector(selectOTPData);
   //change password
   const [password, setPassword] = useState('');
   const [passwordAgain, setPasswordAgain] = useState('');
   const [passwordValid, setPasswordValid] = useState(false);
   //
   const [isLoading, setLoading] = useState(false);
   const [otp, setOtp] = useState('');
   const [currentStep, setCurrentStep] = useState(otpData?.step || 0);
   const onFinish = async (values) => {
      setLoading(true);
      await AuthApi.postOTP(values)
         .then(({ data: { response } }) => {
            dispatch(
               setOTPData({
                  details: response.details,
                  step: 1,
                  ...values
               })
            );
            setCurrentStep(1);
         })
         .catch((error) => {
            openNofi('error', 'Алдаа', error.response?.data?.message);
         })
         .finally(() => {
            setLoading(false);
         });
   };

   const verifyOTP = async () => {
      setLoading(true);
      await AuthApi.verifyOTP({
         details: otpData.details,
         otp: otp
      })
         .then(({ data: { response } }) => {
            dispatch(
               setOTPData({
                  ...otpData,
                  token: response.accessToken,
                  step: 2
               })
            );
            setCurrentStep(2);
         })
         .catch((error) => {
            openNofi('error', 'Алдаа', error.response?.data?.message);
         })
         .finally(() => {
            setLoading(false);
         });
   };

   const onFinishFailed = () => {};

   const validPasswordHandle = (isValid) => {
      isValid ? setPasswordValid(true) : setPasswordValid(false);
   };

   const onChangePassword = async () => {
      setLoading(true);
      if (passwordValid) {
         await AuthApi.changePassword({
            password: password,
            token: otpData.token
         })
            .then((response) => {
               if (response.status === 200) {
                  dispatch(setOTPData(null));
                  openNofi('success', 'Нууц үг', 'Нууц үг амжилттай солигдлоо');
                  navigate('/auth/login');
               }
            })
            .catch((error) => {
               if (error.response.status === 400) {
                  openNofi('warning', 'Нууц үг', 'Нууц үг шаардлага хангахгүй');
               }
            });
      } else {
         openNofi('warning', 'Нууц үг', 'Нууц үг шаардлага хангахгүй');
      }
      setLoading(false);
   };

   return (
      <>
         <Title className="mb-15">Нууц үг сэргээх</Title>
         {currentStep === 0 ? (
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" className="row-col">
               <Form.Item
                  className="email"
                  label="И-Мэйл"
                  name="email"
                  rules={[
                     {
                        required: true,
                        message: 'И-Мэйл оруулна уу'
                     },
                     {
                        type: 'email',
                        message: 'И-Мэйл хэлбэр буруу'
                     }
                  ]}
               >
                  <Input placeholder="И-Мэйл оруулна уу" />
               </Form.Item>
               <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 self-center">
                     <p>Та бүртгэлтэй юу?</p>
                     <Link className="text-blue-400" to="/auth/login">
                        Нэвтрэх
                     </Link>
                  </div>
                  <Form.Item>
                     <Button loading={isLoading} type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Хүсэлт илгээх
                     </Button>
                  </Form.Item>
               </div>
            </Form>
         ) : null}
         {currentStep === 1 ? (
            <div className="flex flex-col gap-2 justify-between items-start">
               <div className="flex flex-row gap-2 items-center">
                  <Badge count={<InfoCircleOutlined />} />
                  <p className="text-base">
                     Таны <span className="font-bold">{otpData?.email}</span> хаяг руу код илгээв
                  </p>
               </div>
               <OtpInput
                  inputStyle={{
                     height: 50,
                     width: 50,
                     margin: 6,
                     border: '1px solid #2D8CFF',
                     borderRadius: 8,
                     fontSize: 24
                  }}
                  inputType="number"
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
               />
               <Button
                  type="primary"
                  loading={isLoading}
                  disabled={otp.length >= 6 ? false : true}
                  onClick={() => {
                     verifyOTP();
                  }}
               >
                  Баталгаажуулах
               </Button>
            </div>
         ) : null}
         {currentStep === 2 ? (
            <div className="flex flex-col gap-2">
               <div className="rounded bg-[#F6F6F6]">
                  <PasswordChecklist
                     rules={['minLength', 'specialChar', 'capital', 'match']}
                     minLength={8}
                     value={password}
                     valueAgain={passwordAgain}
                     onChange={validPasswordHandle}
                     messages={{
                        minLength: '8 болон түүнээс дээш тэмдэг',
                        specialChar: '1 тусгай тэмдэгт эсвэл 1 тоо (!@#$%^&*_)',
                        capital: 'Багадаа 1 том үсэг',
                        match: 'Нууц үг таарч байна'
                     }}
                     style={{ padding: 10 }}
                  />
               </div>
               <Input.Password
                  type="password"
                  placeholder="Шинэ нууц үг"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Input.Password
                  type="password"
                  placeholder="Шинэ нууц үг давтах"
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
               />
               <Button
                  loading={isLoading}
                  type="primary"
                  style={{ width: '100%' }}
                  onClick={() => {
                     onChangePassword();
                  }}
               >
                  Нууц үг солих
               </Button>
            </div>
         ) : null}
      </>
   );
};
export default ResetPassword;
