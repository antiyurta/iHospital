import React, { useEffect, useState } from 'react';
//api
import XypApi from '@ApiServices/xyp/xyp.api';
//common
import { openNofi } from '@Comman/common';
import { Badge, Card, Spin } from 'antd';
import { labelstyle } from '../EPatientHistory/Pregnancy';
import dayjs from 'dayjs';
const Vaccine = ({ registerNumber }) => {
   const [vaccines, setVaccines] = useState([]);
   const [isLoading, setLoading] = useState(false);
   const getVaccine = async () => {
      setLoading(true);
      await XypApi.vaccineByRegno(registerNumber)
         .then(({ data: { response } }) => {
            if (response.return?.resultCode === 0) {
               openNofi('success', response.return.resultMessage);
               setVaccines(response.return.response.data);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   useEffect(() => {
      registerNumber && getVaccine();
   }, []);
   return (
      <div className="h-full">
         <Spin spinning={isLoading} wrapperClassName="h-full emr-tabs">
            <div className="grid grid-cols-2 gap-4">
               {vaccines?.map((vaccine, index) => (
                  <Card key={index} className="h-full">
                     <p style={labelstyle}>Эмнэлэг: {vaccine.hospitalName}</p>
                     <div className="w-full h-[3px] bg-[#f5f6f7]" />
                     <p style={labelstyle}>Vaccine:</p>
                     <p>Нэр: {vaccine.vaccineName}</p>
                     <p>Бүлэгийн нэр: {vaccine.vaccineGroupName}</p>
                     <p>Бүлэгийн төрөл: {vaccine.vaccineGroupTypeName}</p>
                     <p>Эмч: {`${vaccine.vaccinatedLastName}. ${vaccine.vaccinatedFirstName}`}</p>
                     <p>Хамрагдсан огноо: {dayjs(vaccine.vaccinatedDate).format('YYYY/MM/DD HH:mm')}</p>
                  </Card>
               ))}
            </div>
         </Spin>
      </div>
   );
};
export default Vaccine;
