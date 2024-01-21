import React, { useEffect, useState } from 'react';
import PatientDiagnoseSerivce from '../../../services/emr/patientDiagnose';
import Diagnose from './ListOfIssues/Diagnose';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
import { Each } from '../../../features/Each';

function ListOfIssues() {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [data, setData] = useState([]);
   const getProblems = async (patientId) => {
      await PatientDiagnoseSerivce.getByPageFilter({
         params: {
            patientId: patientId
         }
      }).then(({ data: { response } }) => {
         const data = response?.data?.map((appointment) => ({
            appointmentId: appointment.appointmentId,
            doctor: appointment?.createdLastname?.substring(0, 1) + '.' + appointment.createdFirstname,
            diagnose: appointment.diagnose,
            inspectionDate: appointment.createdAt
         }));
         setData(data);
      });
   };
   useEffect(() => {
      getProblems(incomeEmrData.patientId);
   }, []);
   return (
      <div className="list-of-issues">
         <Each of={data} render={(diagnose, index) => <Diagnose key={index} diagnose={diagnose} index={index} />} />
      </div>
   );
}
export default ListOfIssues;
