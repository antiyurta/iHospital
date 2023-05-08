import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefualtGet, Get, numberToCurrency, ScrollRef } from '../../../comman';
function InsuranceHistory({ patientId }) {
   const token = useSelector(selectCurrentToken);
   const [data, setData] = useState({});
   const getData = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet(
         'health-insurance/patient-data/' + patientId,
         token,
         conf
      );
      setData(response);
   };
   useEffect(() => {
      getData();
   }, []);
   if (data.code === 204) {
      return <div>{data.description}</div>;
   }
}
export default InsuranceHistory;
