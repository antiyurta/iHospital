import moment from 'moment';
import React from 'react';
import IndexCollapse from './IndexCollapse';
function MedicineList({ inpatientRequests }) {
   const column = [
      {
         title: 'Огноо',
         dataIndex: 'startAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Захиалгын нэр',
         dataIndex: ['medicine', 'name']
      },
      {
         title: 'Тун',
         dataIndex: 'dose'
      },
      {
         title: 'Тайлбар',
         dataIndex: 'description'
      },
      {
         title: 'Хугацаа',
         dataIndex: 'dayCount'
      },
      {
         title: 'Төлөв'
      }
   ];
   return (
      <IndexCollapse
         hookKey="id"
         hookParamName="inpatientRequestId"
         url={'service/medicine-request'}
         data={inpatientRequests}
         column={column}
      />
   );
}
export default MedicineList;
