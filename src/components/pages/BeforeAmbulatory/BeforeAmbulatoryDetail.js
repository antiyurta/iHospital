import React, { useEffect, useState } from 'react';
import PatientInformation from '../PatientInformation';
import BeforeAmbulatoryTabs from './BeforeAmbulatoryTabs';
import { useLocation } from 'react-router-dom';
import BeforeInPatientTabs from './BeforeInPatientTabs';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';

import PmsPatientServices from '../../../services/pms/patient.api';
import DoctorNotes from '../EMR/DoctorNotes';

function BeforeAmbulatoryDetail() {
   let location = useLocation();
   const incomeENRData = useSelector(selectCurrentEmrData);
   const { reasonComming } = location.state;
   const [selectedPatient, setSelectedPatient] = useState({});
   const getByIdPatient = async () => {
      await PmsPatientServices.getById(incomeENRData.patientId).then((response) => {
         setSelectedPatient(response.data?.response);
      });
   };
   useEffect(() => {
      getByIdPatient();
   }, []);
   return (
      <div className="w-full flex flex-col">
         <div className="w-full flex flex-row justify-between p-2">
            <PatientInformation handlesearch={false} patient={selectedPatient} />
            <div className="max-w-[350px]">
               <DoctorNotes patientId={selectedPatient.id} />
            </div>
         </div>
         <div className="w-full p-3 overflow-auto bg-[#f5f6f7]">
            {incomeENRData.usageType === 'OUT' ? (
               <BeforeAmbulatoryTabs
                  patientId={incomeENRData.patientId}
                  patientData={selectedPatient}
                  structureId={incomeENRData.departmentId}
                  listId={incomeENRData.appointmentId}
                  reasonComming={reasonComming}
               />
            ) : (
               <BeforeInPatientTabs
                  patientId={incomeENRData.patientId}
                  listId={incomeENRData.appointmentId}
                  patientData={selectedPatient}
                  departmentName={'TEST'}
                  departmentId={incomeENRData.departmentId}
               />
            )}
         </div>
      </div>
   );
}
export default BeforeAmbulatoryDetail;
