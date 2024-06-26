import React, { useEffect, useState } from 'react';
import { Card, Spin } from 'antd';
import dayjs from 'dayjs';
//api
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//common
import { openNofi } from '@Comman/common';

const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

const PrescriptionHistory = ({ registerNumber }) => {
   const [isLoading, setLoading] = useState(false);
   const [receipts, setReceipts] = useState([]);
   const getReceiptBy = async () => {
    setLoading(true);
      await HealtInsuranceApi.getReceiptByRegNo(registerNumber)
         .then(({ data }) => {
            if (data.code === 200) {
               if (data.result === null) {
                  openNofi('warning', 'Анхааруулга', data.description);
               } else {
                  const details = data.result?.sort((a, b) => new Date(a.receiptDate) - new Date(b.receiptDate));
                  setReceipts(details?.reverse() || []);
               }
            } else {
               openNofi('error', 'Амжилтгүй', data.description);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   useEffect(() => {
      registerNumber && getReceiptBy();
   }, []);
   return (
      <div className="h-full">
         <Spin spinning={isLoading} wrapperClassName="h-full emr-tabs">
            <div className="grid grid-cols-2 gap-2">
               {receipts?.map((data, index) => (
                  <Card key={index}>
                     <p>Төрөл: {data.prescriptionTypeName}</p>
                     <p>Жорийн дугаар: {data.receiptNumber}</p>
                     <p>Онош: {data.receiptDiag}</p>
                     <p style={labelstyle}>Жор бичсэн огноо: {dayjs(data.receiptDate).format('YYYY/MM/DD HH:mm')}</p>
                     <p style={labelstyle}>
                        Жор дуусах огноо: {dayjs(data.receiptExpireDate).format('YYYY/MM/DD HH:mm')}
                     </p>
                     <p>Төлөв: {data.statusStr}</p>
                     <p>Эм:</p>
                     <div className="w-full h-[2px] bg-[#f5f6f7]" />
                     {data.listReceiptTabletModel?.map((tablet, idx) => (
                        <div key={idx}>
                           <p>Нэр: {tablet.tbltName}</p>
                           <p>Хэдэн өдөр: {tablet.totalDays}</p>
                           <p>Өдөрт хэдэн удаа: {tablet.dailyCount}</p>
                           <p>Нийт: {tablet.tbltSize}</p>
                           <p>Төлөв: {tablet.statusStr}</p>
                           <div className="w-full h-[2px] bg-[#f5f6f7]" />
                        </div>
                     ))}
                  </Card>
               ))}
            </div>
         </Spin>
      </div>
   );
};
export default PrescriptionHistory;
