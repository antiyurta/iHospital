import { Avatar } from 'antd';
import React from 'react';
import { formatNameForDoc } from './comman';
export const ListPatientInfo = ({ patientData }) => {
   return (
      <div className="ambo-list-user">
         <Avatar
            style={{
               minWidth: 32
            }}
         />
         <div className="info">
            <p className="name">{formatNameForDoc(patientData?.lastName, patientData?.firstName)}</p>
            <p>{patientData?.registerNumber}</p>
         </div>
      </div>
   );
};

export const TypeInfo = ({ bgColor, textColor, text }) => {
   return (
      <p
         className="px-2 py-1 rounded-2xl"
         style={{
            backgroundColor: bgColor,
            color: textColor
         }}
      >
         {text}
      </p>
   );
};
