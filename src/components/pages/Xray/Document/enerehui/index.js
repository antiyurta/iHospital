import React from 'react';

import Test from './test';

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
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО-1',
      docName: 'doc5'
   },
   {
      value: 6,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО-2',
      docName: 'doc6'
   },
   {
      value: 7,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО-4',
      docName: 'doc7'
   },
   {
      value: 8,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО-5',
      docName: 'doc8'
   },
   {
      value: 9,
      label: 'ЖИРЭМСНИЙ ЭХО ОНОШИЛГОО-6',
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

export function ReturnById(document, patient) {
   if (document.documentId === 1) {
      return <Test data={document.data} patient={patient} />;
   }
   return;
}
