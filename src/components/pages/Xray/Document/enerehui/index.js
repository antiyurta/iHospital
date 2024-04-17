import React from 'react';

// БАМБАЙ
import Doc3 from './doc3';
// ТҮРҮҮ БУЛЧИРХАЙН ХЭТ АВИАН ОНОШИЛГОО
import Doc4 from './doc4';
import Template from './Template';

const options = [
   {
      value: 1,
      label: 'ХЭВЛИЙН ХӨНДИЙН ХЭТ АВИАН ОНОШИЛГОО',
      docName: 'doc1'
   },
   {
      value: 2,
      label: 'ЭМЭГТЭЙЧҮҮДИЙН ХЭТ АВИАН ОНОШИЛГОО',
      docName: 'doc2'
   },
   {
      value: 3,
      label: 'БАМБАЙ БУЛЧИРХАЙН ХЭТ АВИАН ОНОШИЛГОО',
      docName: 'doc3'
   },
   {
      value: 4,
      label: 'ТҮРҮҮ БУЛЧИРХАЙН ХЭТ АВИАН ОНОШИЛГОО',
      docName: 'doc4'
   },
   {
      value: 5,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО.',
      docName: 'doc5'
   },
   {
      value: 6,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО..',
      docName: 'doc6'
   },
   {
      value: 7,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО...',
      docName: 'doc7'
   },
   {
      value: 8,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО....',
      docName: 'doc8'
   },
   {
      value: 9,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО.....',
      docName: 'doc9'
   },
   {
      value: 10,
      label: 'ХӨХНИЙ ХЭТ АВИАН ОНОШИЛГОО',
      docName: 'doc10'
   }
];

export function ReturnAll() {
   return options;
}
export function ReturnByIdToName(id) {
   return options.find((option) => option.value === id)?.label;
}

export function ReturnById(props) {
   const { serviceName, document, patient, body } = props;
   // if (document.documentId === 1) {
   //    return <Test data={document.data} patient={patient} />;
   // } else if (document.documentId === 3) {
   //    return (
   //       <Template patient={patient} createdAt={document.createdAt}>
   //          {body}
   //       </Template>
   //    );
   // } else if (document.documentId === 4) {
   //    return (
   //       <Template patient={patient} createdAt={document.createdAt}>
   //          {body}
   //       </Template>
   //    );
   //    // return <Doc4 data={document.data} patient={patient} />;
   // }
   return (
      <Template patient={patient} createdAt={document?.createdAt} serviceName={serviceName}>
         {body}
      </Template>
   );
}
