import moment from 'moment';
import React from 'react';
import IndexCollapse from './IndexCollapse';
function Anemiz({ inpatientRequests }) {
   const column = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Хэвтэх үеийн зовиур',
         dataIndex: ['anemis', 'inPatientPain']
      },
      {
         title: 'Өвчний түүх',
         dataIndex: ['anemis', 'painStory']
      },
      {
         title: 'Амьдралын түүх',
         dataIndex: ['anemis', 'lifeStory']
      }
   ];
   return (
      <IndexCollapse
         hookKey="id"
         hookParamName="inpatientRequestId"
         url={'inpatient/story'}
         data={inpatientRequests}
         column={column}
      />
   );
}
export default Anemiz;
