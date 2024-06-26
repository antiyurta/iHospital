import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
//img
import { companyLogo } from '@Assets/index';
//api
import localFileApi from '@ApiServices/file/local-file/local-file.api';
import { Button, Radio, Result, Spin } from 'antd';
import { LockOutlined, MessageOutlined } from '@ant-design/icons';
import OTPPage from './OtpPage';
import XypApi from '@ApiServices/xyp/xyp.api';
import { openNofi } from '@Comman/common';

const MainESB = () => {
   const { id } = useParams();
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const regNo = queryParams.get('regNo');
   const signature = queryParams.get('signature');
   //
   const [isLoading, setLoading] = useState(false);
   const [selected, setSelected] = useState(null);

   const getFile = async () => {
      //   await localFileApi.getFile(id).then((response) => {
      //      console.log(response);
      //   });
   };

   useEffect(() => {
      getFile();
   }, []);

   if (!regNo && !signature) {
      return (
         <div className="h-screen f-wull content-center bg-[#f5f6f7]">
            <Result status="403" title="403" subTitle="Таньд хандах эрх байхгүй байна." />
         </div>
      );
   }

   return (
      <Spin spinning={isLoading}>
         <div className="h-screen f-wull content-center bg-[#f5f6f7]">
            <div className="w-[400px] h-[400px] flex flex-col gap-3 m-auto bg-transparent">
               <img className="w-[150px]" src={companyLogo} alt="logo" />
               <div className="bg-white p-4 rounded-md">
                  <div className="flex flex-col gap-2">
                     <p className="text-2xl font-bold">Баталгаажуулах төрөл сонгох</p>
                     <div className="flex flex-row gap-2 justify-between">
                        <Button
                           type="primary"
                           onClick={() => {
                              setSelected('OTP');
                           }}
                           icon={<MessageOutlined />}
                           size="large"
                        >
                           Мессеж
                        </Button>
                        <Button
                           type="primary"
                           onClick={() => {
                              setSelected('gsign');
                           }}
                           icon={<LockOutlined />}
                           size="large"
                        >
                           Тоон гарын үсэг
                        </Button>
                     </div>
                     <div className="w-full h-[1px] bg-gray-400" />
                     {selected === 'OTP' ? <OTPPage regNo={regNo} setLoading={setLoading} /> : null}
                     <div className="flex flex-col gap-4"></div>
                  </div>
               </div>
            </div>
         </div>
      </Spin>
   );
};
export default MainESB;
