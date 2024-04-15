import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//comp
import DoctorNotes from '../EMR/DoctorNotes';
import PatientInformation from '../PatientInformation';
import BeforeInPatientTabs from './BeforeInPatientTabs';
import BeforeAmbulatoryTabs from './BeforeAmbulatoryTabs';
//context
import { EmrContextProvider } from '@Features/EmrContext';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';
//api
import PatientApi from '@ApiServices/pms/patient.api';

function BeforeAmbulatoryDetail() {
   const incomeENRData = useSelector(selectCurrentEmrData);
   const [selectedPatient, setSelectedPatient] = useState({});
   const getByIdPatient = async () => {
      await PatientApi.getById(incomeENRData.patientId).then((response) => {
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
                  <BeforeAmbulatoryTabs
                     appointmentType={incomeENRData.type}
                     reasonComming={incomeENRData.reasonComming}
                  />
               ) : (
                  <BeforeInPatientTabs departmentId={incomeENRData.departmentId} />
               )}
            </div>
         </div>
      </EmrContextProvider>
   );
}
export default BeforeAmbulatoryDetail;
