import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//img
import { companyLogo } from '@Assets/index';
//redux
import { selectOTPData, setOTPData } from '@Features/authReducer';
//api
import AuthApi from '@ApiServices/authentication/authentication.api';

const UserConfirm = () => {
   const {
      state: { email }
   } = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const otpData = useSelector(selectOTPData);
   const [isLoading, setLoading] = useState(false);
   const [seconds, setSeconds] = useState(60);
   const [otp, setOtp] = useState('');
   const sendOTP = async () => {
      setLoading(true);
      await AuthApi.postOTP({
         email: email
      })
         .then(({ data: { response } }) => {
            setSeconds(60);
            dispatch(
               setOTPData({
                  details: response.details
               })
            );
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
         .then(({ data: { success } }) => {
            if (success) {
               navigate('/profile');
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };

   useEffect(() => {
      !otpData?.details && sendOTP();
   }, []);

   useEffect(() => {
      const countdown = setInterval(() => {
         setSeconds((prevSeconds) => {
            if (prevSeconds === 0) {
               clearInterval(countdown);
               return 0;
            } else {
               return prevSeconds - 1;
            }
         });
      }, 1000);

      return () => clearInterval(countdown);
   }, []);

   return (
      <div className="h-screen f-wull content-center bg-[#f5f6f7]">
         <div className="w-[600px] h-[600px] flex flex-col gap-3 m-auto bg-transparent">
            <img className="w-[150px]" src={companyLogo} alt="logo" />
            <div className="bg-white p-4 rounded-md">
               <div className="flex flex-col">
                  <p className="text-2xl mt-8 font-bold">И-майл баталгаажуулах</p>
                  <div className="w-full h-[1px] my-12 bg-gray-400" />
                  <div className="flex flex-col gap-4">
                     <div className="flex flex-row gap-2 justify-between items-center">
                        <div className="flex flex-row gap-2 items-center">
                           <Badge count={<InfoCircleOutlined />} />
                           <p className="text-base">
                              Таны <span className="font-bold">{email}</span> хаяг руу код илгээв
                           </p>
                        </div>
                        <Button
                           type="primary"
                           loading={isLoading}
                           disabled={seconds === 0 ? false : true}
                           className="h-auto"
                           onClick={() => {
                              sendOTP();
                           }}
                        >
                           {seconds === 0 ? null : seconds} Дахин илгээх
                        </Button>
                     </div>
                     <div className="flex flex-row gap-2 justify-between items-center">
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
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default UserConfirm;
