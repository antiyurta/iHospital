import React, { useEffect, useState } from 'react';

import localFileApi from '../../../../../services/file/local-file/local-file.api';
import { getAge, getGenderFullName } from '../../../../common';

const Header = ({ hospital, patientData }) => {
   const [logoScr, setImageUrl] = useState(null);
   const getPatientImage = async () => {
      await localFileApi.getFileGlobal(hospital.logoId).then((response) => {
         if (response) {
            setImageUrl(response);
         } else {
            setImageUrl(null);
         }
      });
   };
   useEffect(() => {
      getPatientImage();
   }, [hospital]);

   return (
      <div className="lab-header">
         <div className="flex flex-col gap-1">
            {logoScr && (
               <div className="max-w-[4cm]">
                  <img src={logoScr} alt="logo" />
               </div>
            )}
            <p className="text-[#2F1C6B] font-bold text-center text-[18pt]">УНИВЕРСАЛ МЕД ЭМНЭЛЭГ</p>
            <p className="font-bold text-center text-[14pt] text-black">
               Эмнэлзүй, эмгэг судлалын нэгдсэн төв лаборатори
            </p>
         </div>
         <div
            className="grid grid-cols-4 gap-1"
            style={{
               borderTop: '2px solid black',
               borderBottom: '2px solid black'
            }}
         >
            <div>
               <p className="text-[11pt] font-bold">Эцэг/эх/-ийн нэр:</p>
               <p className="text-[11pt] font-bold">Өөрийн нэр:</p>
               <p className="text-[11pt] font-bold">Регистрийн дугаар:</p>
            </div>
            <div>
               <p className="text-[11pt]">{patientData?.lastName}</p>
               <p className="text-[11pt]">{patientData?.firstName}</p>
               <p className="text-[11pt]">{patientData?.registerNumber}</p>
            </div>
            <div>
               <p className="text-[11pt] font-bold">Нас:</p>
               <p className="text-[11pt] font-bold">Хүйс:</p>
            </div>
            <div>
               <p className="text-[11pt]">{getAge(patientData?.registerNumber)}</p>
               <p className="text-[11pt]">{getGenderFullName(patientData.registerNumber)}</p>
            </div>
         </div>
      </div>
   );
};
export default Header;
