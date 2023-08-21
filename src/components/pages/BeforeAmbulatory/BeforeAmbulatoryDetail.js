import { Card, Empty } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';
import PatientInformation from '../PatientInformation';
import BeforeAmbulatoryTabs from './BeforeAmbulatoryTabs';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import BeforeInPatientTabs from './BeforeInPatientTabs';

function BeforeAmbulatoryDetail() {
   let location = useLocation();
   console.log('location', location);
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };

   const [selectedPatient, setSelectedPatient] = useState();
   const [problems, setProblems] = useState([]);
   const [cardLoading, setCardLoading] = useState(false);
   const onSearch = async () => {
      config.params.registerNumber = location.state?.regNum;
      const response = await Get('pms/patient', token, config);
      if (response.data.length != 0) {
         setSelectedPatient(response.data[0]);
      }
   };
   //
   const getInspectionNotes = async () => {
      const conf = {
         headers: {},
         params: {
            patientId: location.state?.patientId
         }
      };
      const response = await Get('appointment', token, conf);
      if (response.data.length > 0) {
         response.data.reduce(function (r, a) {
            //Оноор бүлэглэх
            r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
            r[a.createdAt.substring(0, 4)].push(a);
            getProblems(a.id);
            return r;
         }, Object.create(null));
      }
   };
   const getProblems = async (id) => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('appointment/show/' + id, token, conf);
      if (response.inspectionNotes?.length > 0) {
         var problem = [];
         response.inspectionNotes.map((note) => {
            problem.push({
               doctorId: note.employees.lastName.substring(0, 1) + '.' + note.employees.firstName,
               diagnose: JSON.parse(note.diagnose),
               inspectionDate: note.createdAt
            });
         });
         setProblems(problem);
      }
   };
   //
   useEffect(() => {
      location.state?.regNum && onSearch();
      getInspectionNotes();
   }, []);

   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-full md:w-full xl:w-1/3 p-1">
               <PatientInformation patient={selectedPatient} handlesearch={onSearch} />
            </div>
            <div className="w-full md:w-full xl:w-1/3 p-1">
               <Card
                  bordered={false}
                  title={<h6 className="font-semibold m-0">Өвчтөний түүх</h6>}
                  className="header-solid h-full"
               ></Card>
            </div>
            <div className="w-full md:w-full xl:w-1/3 p-1">
               <Card
                  bordered={false}
                  title={<h6 className="font-semibold m-0">Гол асуудлууд</h6>}
                  className="header-solid rounded-md"
                  style={{ height: '100%' }}
                  loading={cardLoading}
                  bodyStyle={{
                     paddingTop: 0,
                     paddingLeft: 10,
                     paddingRight: 10,
                     paddingBottom: 10,
                     minHeight: 150,
                     maxHeight: 150
                  }}
               >
                  <div className="scroll" style={{ maxHeight: 150 }}>
                     {problems.length > 0 ? (
                        problems.map((problem, idx) => {
                           return (
                              <div key={idx} className="inline-flex">
                                 <p>{problem.doctorId}</p>
                                 <ul className="list-disc list-inside" style={{ width: 600, paddingLeft: 10 }}>
                                    {problem?.diagnose?.map((diagnose, index) => {
                                       return <li key={index}>{diagnose.code + ' ' + diagnose.nameEn}</li>;
                                    })}
                                 </ul>
                                 <p>{moment(problem.inspectionDate).format('YYYY-MM-DD')}</p>
                              </div>
                           );
                        })
                     ) : (
                        <Empty description="Байхгүй" />
                     )}
                  </div>
               </Card>
            </div>
            <div className="w-full p-1">
               {location?.state?.type === 0 ? (
                  <BeforeAmbulatoryTabs
                     patientId={selectedPatient?.id}
                     type={location.state.appointmentType}
                     structureId={location.state?.structureId}
                     listId={location.state?.appointmentId}
                     reasonComming={location.state?.reasonComming}
                  />
               ) : (
                  <BeforeInPatientTabs
                     patientId={selectedPatient?.id}
                     listId={location.state?.appointmentId}
                     patientData={selectedPatient}
                     departmentName={location.state?.departmentName}
                     departmentId={location.state?.dapartmentId}
                  />
               )}
            </div>
         </div>
      </div>
   );
}
export default BeforeAmbulatoryDetail;
