import React, { useEffect, useState } from 'react';
import AppointmentServices from '../../../services/appointment/appointment';
import NewCard from '../../Card/Card';
import { NewColumn, NewTable } from '../../Table/Table';
import { newMoment } from '../../comman';

function ListOfIssues({ patientId }) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const getProblems = async () => {
      setIsLoading(true);
      await AppointmentServices.getByPageFilter({
         params: {
            patientId: patientId
         }
      }).then((response) => {
         const data = response.data.response?.data?.map((appointment, index) => {
            return {
               id: index,
               cabinetName: appointment.cabinet?.name,
               doctor: appointment.employee?.lastName.substring(0, 1) + '.' + appointment.employee?.firstName,
               diagnoses: appointment.patientDiagnosis,
               inspectionDate: appointment.createdAt
            };
         });
         setData(data);
         setIsLoading(false);
      });
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
                  y: 100
               }
            }}
            meta={{
               page: 1,
               limit: data?.length
            }}
            isLoading={isLoading}
            isPagination={false}
         >
            <NewColumn dataIndex={'cabinetName'} title={'Кабинет'} />
            <NewColumn dataIndex={'doctor'} title={'Эмч'} />
            <NewColumn
               dataIndex={'diagnoses'}
               title={'Онош'}
               render={(text) => {
                  return (
                     <ul
                        className="list-disc list-inside"
                        style={{
                           paddingLeft: '4px',
                           textAlign: 'start',
                           whiteSpace: 'normal'
                        }}
                     >
                        {text.map((item, index) => {
                           return <li key={index}>{item.diagnose.code}</li>;
                        })}
                     </ul>
                  );
               }}
            />
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
