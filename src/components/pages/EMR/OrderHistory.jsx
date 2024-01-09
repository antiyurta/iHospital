import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
//api
import ServiceRequestApi from '../../../services/serviceRequest';

const OrderHistory = () => {
   const IncomeEMRData = useSelector(selectCurrentEmrData);
   const getPatientRequests = async () => {
      await ServiceRequestApi.get({
         params: {
            patientId: IncomeEMRData.patientId
         }
      }).then(({ data: { response, success } }) => {
         console.log(response, success);
      });
   };
   useEffect(() => {
      getPatientRequests();
   }, []);
   return <div>1</div>;
};
export default OrderHistory;
