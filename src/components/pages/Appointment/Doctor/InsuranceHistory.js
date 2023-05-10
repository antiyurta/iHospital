import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefualtGet, Get, numberToCurrency, ScrollRef } from '../../../comman';
function InsuranceHistory({ registerNumber }) {
   const token = useSelector(selectCurrentToken);
   const [data, setData] = useState({});
   const getData = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet('health-insurance/patient-data/' + registerNumber, token, conf);
      setData(response);
   };
   useEffect(() => {
      getData();
   }, []);
   return <div>{data.description}</div>;
}
export default InsuranceHistory;
