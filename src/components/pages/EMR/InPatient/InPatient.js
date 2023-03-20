import React from 'react';
import IndexCollapse from './IndexCollapse';
import {
   bodyCondition,
   mind,
   skin,
   respiratoryListen,
   heartTapping,
   heartSound,
   tongue,
   abdomen,
   audition
} from './General';
function InPatient({ inpatientRequests }) {
   const RenderHTML = (data) => {
      if (data.data) {
         return Object.entries(data?.data).map(([key, value], index) => {
            return (
               <span key={index} className="flex flex-wrap">
                  {Object.entries(value).map((elValues, index) => {
                     return (
                        <span className="pr-2" key={index}>
                           {elValues[0] + ': ' + elValues[1]}
                        </span>
                     );
                  })}
               </span>
            );
         });
      }
   };
   const ConvertData = (row) => {
      var string = '';
      if (row?.bodyCondition != null) {
         string += `Биеийн ерөнхий байдал:${
            bodyCondition[`${row.bodyCondition}`]
         }, `;
      }
      if (row?.mind != null) {
         string += `Ухаан санаа:${mind[`${row.mind}`]}, `;
      }
      if (row?.skin != null) {
         string += ` Арьс салст:${skin[`${row.skin}`]}, `;
      }
      if (row?.respiratoryOneMinute != null) {
         string += `Амьсгал 1 минутанд: ${row.respiratoryOneMinute}, `;
      }
      if (row?.respiratoryListen != null) {
         string += `Чагналтаар: ${
            respiratoryListen[`${row.respiratoryListen}`]
         }, `;
      }
      if (row?.pulseOneMinute != null) {
         string += `Судасны цохилт 1 минутанд: ${row.pulseOneMinute}, `;
      }
      if (row?.volt != null) {
         string += `Хүчдэл дүүрэлт: ${row.volt}, `;
      }
      if (row?.heartTapping != null) {
         string += `Тогшилтоор /Зүрхний хил/: ${
            heartTapping[`${row.heartTapping}`]
         }, `;
      }
      if (row?.heartSound != null) {
         string += `Чагналтаар /Зүрхний авиа/: ${
            heartSound[`${row.heartSound}`]
         }`;
      }
      if (row?.heartBPRight != null) {
         string += `АД баруун талд: ${row.heartBPRight}`;
      }
      if (row?.heartBPLeft != null) {
         string += `Зүүн талд: ${row.heartBPLeft}`;
      }
      if (row?.tongue != null) {
         string += `Хэл: ${tongue[`${row.tongue}`]}`;
      }
      if (row?.abdomen != null) {
         string += `Хэвлийн үзлэг: ${abdomen[`${row.abdomen}`]}`;
      }
      if (row?.abdomen != null) {
         string += `Сонсох чадвар: ${audition[`${row.audition}`]}`;
      }
      if (row?.other != null) {
         string += `Бусад: ${row.other}`;
      }
      if (row?.mentalState != null) {
         string += `Cэтгэцийн байдал: ${row.mentalState}`;
      }
      return string;
   };
   const column = [
      {
         title: 'Зовиурь',
         dataIndex: ['appointment', 'inspectionNote', 'pain'],
         render: (text) => {
            return (
               <p className="text-black">
                  <RenderHTML data={JSON.parse(text)} />
               </p>
            );
         }
      },
      {
         title: 'Асуумж',
         dataIndex: ['appointment', 'inspectionNote', 'question'],
         render: (text) => {
            return (
               <p className="text-black">
                  <RenderHTML data={JSON.parse(text)} />
               </p>
            );
         }
      },
      {
         title: 'Бодит үзлэг',
         dataIndex: ['appointment', 'inspectionNote', 'inspection'],
         render: (text) => {
            return (
               <p className="text-black">
                  <RenderHTML data={JSON.parse(text)} />
               </p>
            );
         }
      },
      {
         title: 'Төлөвлөгөө',
         dataIndex: ['appointment', 'inspectionNote', 'plan'],
         render: (text) => {
            return (
               <p className="text-black">
                  <RenderHTML data={JSON.parse(text)} />
               </p>
            );
         }
      },
      {
         title: 'Ерөнхий үзлэг',
         render: (_, row) => {
            return ConvertData(row);
         }
      }
   ];
   return (
      <IndexCollapse
         hookKey="appointmentId"
         hookParamName="appointmentId"
         url={'emr/general-inspection'}
         data={inpatientRequests}
         column={column}
      />
   );
}
export default InPatient;
