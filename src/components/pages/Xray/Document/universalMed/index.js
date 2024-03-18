import React from 'react';

import Test from './testUni';

const options = [
   {
      value: 1,
      label: '1-6sar',
      docName: '1-6sar'
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
   return <div>{body}</div>;
   // return (
   //    <Template patient={patient} createdAt={document.createdAt} serviceName={serviceName}>
   //       {body}
   //    </Template>
   // );
}
