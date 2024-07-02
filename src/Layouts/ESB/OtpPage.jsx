import React, { useState } from 'react';
import { Button, Form, InputNumber } from 'antd';
import XypApi from '@ApiServices/xyp/xyp.api';
import OTPInput from 'react-otp-input';
import { openNofi } from '@Comman/common';
import { message } from '@Features/AppGlobal';
const OTPPage = ({ selected, id, regNo, signature, setLoading, getFile }) => {
   const [form] = Form.useForm();
   const [otp, setOtp] = useState('');
   const [current, setCurrent] = useState(1);
   const [phoneNum, setPhoneNum] = useState(null);
   const [xypRes, setXypRes] = useState(false);
   const FirstStep = () => {
      const getOTP = async ({ phoneNum }) => {
         try {
            setPhoneNum(phoneNum.toString());
            setLoading(true);
            const apiMap = {
               'OTP-COMPANY': XypApi.registerOtp,
               'OTP-CITIZEN': XypApi.registerOtpByCitizen
            };
            const selectedApi = apiMap[selected];
            if (!selectedApi) throw new Error('Unknown service type');
            await selectedApi(regNo, phoneNum)
               .then(({ data: { response } }) => {
                  if (response.return.resultCode === 0) {
                     setLoading(false);
                     setXypRes(response.return.response);
                     setCurrent(2);
                     openNofi('success', response.return.resultMessage);
                  } else {
                     openNofi('success', response.return.resultMessage);
                  }
               })
               .finally(() => {
                  setLoading(false);
               });
         } catch (error) {
            console.log(error);
            message(error);
         }
      };

      return (
         <div>
            <Form form={form} layout="vertical">
               <Form.Item
                  label="Утасны дугаар"
                  name="phoneNum"
                  rules={[
                     {
                        required: true,
                        message: 'Утасны дугаар заавал'
                     }
                  ]}
               >
                  <InputNumber placeholder="Утасны дугаар" />
               </Form.Item>
               <Button
                  type="primary"
                  onClick={() => {
                     form.validateFields().then(getOTP);
                  }}
               >
                  илгээх
               </Button>
            </Form>
         </div>
      );
   };
   const verifyOTP = async (otp) => {
      try {
         setLoading(true);
         const apiMap = {
            'OTP-COMPANY': XypApi.checkOtp,
            'OTP-CITIZEN': XypApi.checkOtpByCitizen
         };
         const selectedApi = apiMap[selected];
         if (!selectedApi) throw new Error('Unknown service type');
         await selectedApi(selected === 'OTP-COMPANY' ? regNo : phoneNum, otp).then(({ data: { response } }) => {
            if (response.return.resultCode === 0) {
               setLoading(false);
               verifyDS();
               openNofi('success', response.return.resultMessage);
            } else {
               openNofi('error', response.return.resultMessage);
               setLoading(false);
            }
         });
      } catch (error) {
         console.log(error);
         message(error);
      }
   };
   const verifyDS = async () => {
      setLoading(true);
      await XypApi.verifyDSById(id, signature, regNo)
         .then(({ data }) => {
            if (data) {
               const file = new Blob([data], { type: 'application/pdf' });
               const fileUrl = URL.createObjectURL(file);
               getFile(fileUrl);
               openNofi('success', 'Амжилттай');
            } else {
               openNofi('error', 'Алдаа');
            }
         })
         .catch(() => {
            openNofi('error', 'Баталгаажуулалт амжилтгүй');
         })
         .finally(() => {
            setLoading(false);
         });
   };
   return (
      <div>
         {current === 1 ? <FirstStep /> : null}
         {current === 2 ? (
            <>
               <p className="text-base">Таны дугаар руу код илгээв</p>
               {xypRes.otp}
               <OTPInput
                  inputStyle={{
                     height: 40,
                     width: 40,
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
               <div className="flex flex-row gap-2 justify-between">
                  <Button
                     type="primary"
                     disabled={otp.length >= 6 ? false : true}
                     onClick={() => {
                        verifyOTP(otp);
                        // verifyDS();
                     }}
                  >
                     Баталгаажуулах
                  </Button>
               </div>
            </>
         ) : null}
      </div>
   );
};
export default OTPPage;
