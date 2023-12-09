import React, { useEffect, useState } from 'react';
import PatientDiagnoseSerivce from '../../../services/emr/patientDiagnose';
import Diagnose from './ListOfIssues/Diagnose';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';

function ListOfIssues() {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const getProblems = async (patientId) => {
      setIsLoading(true);
      await PatientDiagnoseSerivce.getByPageFilter({
         params: {
            patientId: patientId
         }
      }).then((response) => {
         console.log(response);
         const data = response.data.response?.data?.map((appointment, index) => {
            return {
               appointmentId: appointment.id,
               doctor: appointment?.createdLastname?.substring(0, 1) + '.' + appointment.createdFirstname,
               diagnose: appointment.diagnose,
               inspectionDate: appointment.createdAt
            };
         });
         setData(data);
         console.log(data);
         setIsLoading(false);
      });
   };
   useEffect(() => {
      getProblems();
      // getProblems(incomeEmrData.patientId);
   }, []);
   return (
      <>
         <div className="list-of-issues">
            {data.map((diagnose, index) => {
               return <Diagnose key={index} diagnose={diagnose} index={index} />;
            })}
         </div>
         {/* <NewCard title="Асуудлын жагсаалт">
            <NewTable
               prop={{
                  rowKey: 'id',
                  bordered: true,
                  dataSource: data,
                  scroll: {
                     y: 100,
                     x: 400
                  }
               }}
               meta={{
                  page: 1,
                  limit: data?.length
               }}
               isLoading={isLoading}
               isPagination={false}
            >
               <NewColumn
                  dataIndex={'cabinetName'}
                  title={'Кабинет'}
                  render={(text) => {
                     return (
                        <span
                           style={{
                              whiteSpace: 'pre-wrap'
                           }}
                        >
                           {text}
                        </span>
                     );
                  }}
               />
               <NewColumn
                  dataIndex={'doctor'}
                  title={'Эмч'}
                  render={(text) => {
                     return (
                        <span
                           style={{
                              whiteSpace: 'pre-wrap'
                           }}
                        >
                           {text}
                        </span>
                     );
                  }}
               />
               <NewColumn dataIndex={['diagnose', 'code']} title={'Онош'} />
               <NewColumn
                  dataIndex={'inspectionDate'}
                  title={'Огноо'}
                  render={(text) => {
                     return newMoment(text);
                  }}
               />
            </NewTable>
         </NewCard> */}
      </>
   );
}
export default ListOfIssues;
