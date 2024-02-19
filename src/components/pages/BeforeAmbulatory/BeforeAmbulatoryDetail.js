import React, { useEffect, useState } from 'react';
import PatientInformation from '../PatientInformation';
import BeforeAmbulatoryTabs from './BeforeAmbulatoryTabs';
import BeforeInPatientTabs from './BeforeInPatientTabs';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';

import PmsPatientServices from '../../../services/pms/patient.api';
import DoctorNotes from '../EMR/DoctorNotes';
import { EmrContextProvider } from '../../../features/EmrContext';

function BeforeAmbulatoryDetail() {
   const incomeENRData = useSelector(selectCurrentEmrData);
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
      <EmrContextProvider>
         <div className="w-full flex flex-col">
            <div className="w-full flex flex-row justify-between p-2">
               <PatientInformation handlesearch={false} patient={selectedPatient} />
               <div className="max-w-[350px]">
                  <DoctorNotes patientId={selectedPatient.id} />
               </div>
            </div>
            <div className="w-full p-3 overflow-auto bg-[#f5f6f7]">
               {incomeENRData.usageType === 'OUT' ? (
                  <BeforeAmbulatoryTabs reasonComming={incomeENRData.reasonComming} />
               ) : (
                  <BeforeInPatientTabs departmentId={incomeENRData.departmentId} />
               )}
            </div>
         </div>
      </EmrContextProvider>
   );
}
export default BeforeAmbulatoryDetail;
