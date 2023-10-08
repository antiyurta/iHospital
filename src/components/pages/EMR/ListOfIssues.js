import React, { useEffect, useState } from 'react';
import NewCard from '../../Card/Card';
import { NewColumn, NewTable } from '../../Table/Table';
import { newMoment } from '../../comman';
import PatientDiagnoseSerivce from '../../../services/emr/patientDiagnose';

function ListOfIssues({ patientId }) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const getProblems = async () => {
      setIsLoading(true);
      await PatientDiagnoseSerivce.getByPageFilter({
         params: {
            patientId: patientId
         }
      }).then((response) => {
         const data = response.data.response?.data?.map((diagnose, index) => {
            return {
               id: index,
               // cabinetName: diagnose,
               doctor: diagnose?.createdLastname?.substring(0, 1) + '.' + diagnose.createdFirstname,
               diagnose: diagnose.diagnose,
               inspectionDate: diagnose.createdAt
            };
         });
         setData(data);
         setIsLoading(false);
      });
      // await AppointmentServices.getByPageFilter({
      //    params: {
      //       patientId: patientId
      //    }
      // }).then((response) => {
      //    const data = response.data.response?.data?.map((appointment, index) => {
      //       return {
      //          id: index,
      //          cabinetName: appointment.cabinet?.name,
      //          doctor: appointment.employee?.lastName.substring(0, 1) + '.' + appointment.employee?.firstName,
      //          diagnoses: appointment.patientDiagnosis,
      //          inspectionDate: appointment.createdAt
      //       };
      //    });
      //    setData(data);
      //    setIsLoading(false);
      // });
   };
   useEffect(() => {
      getProblems();
   }, [patientId]);
   return (
      <NewCard title="Асуудлын жагсаалт">
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
      </NewCard>
   );
}
export default ListOfIssues;
