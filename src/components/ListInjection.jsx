import { Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { formatNameForDoc } from './common';
//api
import localFileApi from '@ApiServices/file/local-file/local-file.api';

export const ListPatientInfo = ({ patientData }) => {
   const [imgSrc, setImgSrc] = useState('');
   const getImage = async () => {
      await localFileApi.getFile(patientData.imageId).then((response) => {
         setImgSrc(response);
      });
   };
   useEffect(() => {
      if (patientData && patientData.imageId != null) {
         getImage();
      }
   }, [patientData]);
   return (
      <div className="ambo-list-user">
         <Avatar
            src={imgSrc || null}
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
         className="px-2 py-1 rounded-2xl text-center"
         style={{
            backgroundColor: bgColor,
            color: textColor
         }}
      >
         {text}
      </p>
   );
};
