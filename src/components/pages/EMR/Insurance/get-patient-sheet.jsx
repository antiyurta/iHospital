import { Table, message } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../features/patientReducer';
import { useEffect } from 'react';
import healthInsuranceService from '../../../../services/healt-insurance/healtInsurance';

const GetPatientSheet = () => {
   const patient = useSelector(selectPatient);
   
   const [patientSheets, setPatientSheet] = useState([]);
   const columns = [
      {
         title: 'Хүсэлтийн дугаар',
         dataIndex: 'requestNo',
         key: 'requestNo'
      },
      {
         title: 'Үйлчилгээ',
         dataIndex: 'serviceName',
         key: 'serviceName'
      },
      {
         title: 'Төлөв',
         dataIndex: 'statusStr',
         key: 'statusStr'
      }
   ];
   useEffect(() => {
      healthInsuranceService
            .getPatientSheet(patient.registerNumber)
            .then(({data}) => {
               message.success(data.description);
               setPatientSheet(response.result);
            })
            .catch((error) => {
               message.error(error);
            });
   }, [])
   return (
      <>
         <Table columns={columns} dataSource={patientSheets} />
      </>
   );
};
export default GetPatientSheet;
