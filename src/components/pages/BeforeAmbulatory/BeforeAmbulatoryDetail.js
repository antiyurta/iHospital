import { Card } from 'antd';
import React from 'react';
import PatientInformation from '../PatientInformation';
import BeforeAmbulatoryTabs from './BeforeAmbulatoryTabs';
import { useLocation } from 'react-router-dom';
import BeforeInPatientTabs from './BeforeInPatientTabs';
import ListOfIssues from '../EMR/ListOfIssues';

function BeforeAmbulatoryDetail() {
   let location = useLocation();
   const { selectedPatient, usageType, structureId, appointmentId, reasonComming } = location.state;
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-full md:w-full xl:w-1/3 p-1">
               <PatientInformation handlesearch={false} patient={selectedPatient} />
            </div>
            <div className="w-full md:w-full xl:w-1/3 p-1">
               <Card
                  bordered={false}
                  title={<h6 className="font-semibold m-0">Өвчтөний түүх</h6>}
                  className="header-solid h-full"
               ></Card>
            </div>
            <div className="w-full md:w-full xl:w-1/3 p-1">
               <ListOfIssues patientId={selectedPatient.id} />
            </div>
            <div className="w-full p-1">
               {usageType === 'OUT' ? (
                  <BeforeAmbulatoryTabs
                     patientId={selectedPatient?.id}
                     patientData={selectedPatient}
                     structureId={structureId}
                     listId={appointmentId}
                     reasonComming={reasonComming}
                  />
               ) : (
                  <BeforeInPatientTabs
                     patientId={selectedPatient?.id}
                     listId={appointmentId}
                     patientData={selectedPatient}
                     departmentName={'TEST'}
                     departmentId={structureId}
                  />
               )}
            </div>
         </div>
      </div>
   );
}
export default BeforeAmbulatoryDetail;
