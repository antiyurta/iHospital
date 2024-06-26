import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
//img
import { companyLogo } from '@Assets/index';
//api
import { Button, Result, Spin } from 'antd';
import { LockOutlined, MessageOutlined } from '@ant-design/icons';
import OTPPage from './OtpPage';

const MainESB = () => {
   const { id } = useParams();
   const location = useLocation();
   const [isView, setView] = useState(false);
   const queryParams = new URLSearchParams(location.search);
   const regNo = queryParams.get('regNo');
   const signature = queryParams.get('signature');
   console.log('id', id);
   console.log('regNo', regNo);
   console.log('signature', signature);
   //
   const [isLoading, setLoading] = useState(false);
   const [selected, setSelected] = useState(null);
   const [pdfUrl, setPdfUrl] = useState(null);
   const getFile = async (fileUrl) => {
      setView(true);
      setPdfUrl(fileUrl);
   };

   if (!id || !regNo || !signature || (!regNo && !signature)) {
      return (
         <div className="h-screen f-wull content-center bg-[#f5f6f7]">
            <Result status="403" title="403" subTitle="Таньд хандах эрх байхгүй байна." />
         </div>
      );
   }

   return (
      <Spin spinning={isLoading}>
         <div className="h-screen f-wull content-center bg-[#f5f6f7]">
            {isView ? (
               <iframe src={pdfUrl} height={'100%'} width={'100%'} />
            ) : (
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
                        {selected === 'OTP' ? (
                           <OTPPage
                              id={id}
                              regNo={regNo}
                              signature={signature}
                              setLoading={setLoading}
                              getFile={getFile}
                           />
                        ) : null}
                        <div className="flex flex-col gap-4"></div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </Spin>
   );
};
export default MainESB;
