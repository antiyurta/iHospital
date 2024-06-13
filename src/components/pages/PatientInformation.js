import React, { useState, useEffect, useMemo } from 'react';
import { Input, Radio, Spin } from 'antd';
//images
import {
   manIcon,
   manSymbol,
   womanIcon,
   womanSymbol,
   addressSymbol,
   mailSymbol,
   phoneSymbol,
   mapSymbol
} from '@Assets/index';
// common
import { getAge } from '@Comman/common';
import { getGender } from '@Utils/config/xypField';
//api
import localFileApi from '@ApiServices/file/local-file/local-file.api';
//extends
const { Search } = Input;

function PatientInformation({ handlesearch = true, patient, handleTypeChange, OCS, type }) {
   const [isLoadingImage, setIsLoadingImage] = useState(false);
   const [imageUrl, setImageUrl] = useState('');
   //
   const onSearch = async (value) => {
      handlesearch(1, 10, value);
   };
   const handleTypeChangePatient = async (value) => {
      handleTypeChange(value);
   };

   const getPatientImage = async () => {
      setIsLoadingImage(true);
      await localFileApi
         .getFile(patient.imageId)
         .then((response) => {
            if (response) {
               setImageUrl(response);
            } else {
               setImageUrl(null);
            }
         })
         .catch(() => {
            setImageUrl(null);
         })
         .finally(() => {
            setIsLoadingImage(false);
         });
   };

   const ImageIcon = useMemo(() => {
      if (patient.genderType === 'WOMAN') return womanIcon;
      return manIcon;
   }, [patient]);

   const genderSymbolIcon = useMemo(() => {
      if (patient.genderType === 'WOMAN') return manSymbol;
      return womanSymbol;
   }, [patient]);

   useEffect(() => {
      patient.imageId && getPatientImage();
      !patient.imageId && setImageUrl(ImageIcon);
   }, [patient]);
   return (
      <>
         <div className="patient-info xl:min-w-[500px]">
            <div className="picture">
               <Spin spinning={isLoadingImage}>
                  <div
                     style={{
                        height: 150,
                        width: '100%',
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 16
                     }}
                  />
               </Spin>
            </div>
            <div className="info">
               {handlesearch ? (
                  <div className="w-full">
                     <Search placeholder="Регистр/Нэрээр хайх" onSearch={onSearch} enterButton="Хайх" />
                  </div>
               ) : null}
               <p className="names">{`Овог: ${patient?.lastName || ''} | Нэр: ${patient?.firstName || ''}`}</p>
               <div className="infos">
                  <div className="flex flex-row gap-3">
                     <img
                        style={{
                           height: 16
                        }}
                        src={genderSymbolIcon}
                        alt="symbol"
                     />
                     <p>{`${getGender(patient?.gender) || ''} | ${getAge(patient?.registerNumber) || ''}`}</p>
                  </div>
                  <div className="flex flex-row gap-3">
                     <img
                        src={addressSymbol}
                        alt="Addres"
                        style={{
                           height: 16
                        }}
                     />
                     <p>{patient?.registerNumber}</p>
                  </div>
                  <div className="flex flex-row gap-3">
                     <img src={mailSymbol} alt="symbolMail" />
                     <p>{patient?.email}</p>
                  </div>
                  <div className="flex flex-row gap-3 mr-[18px]">
                     <img src={phoneSymbol} alt="phone" />
                     <p>{patient?.phoneNo}</p>
                  </div>
               </div>
               <div className="flex flex-row gap-3">
                  <img src={mapSymbol} alt="mapSymbol" />
                  <p>{patient?.aimagCityName}</p>
                  <p>{patient?.soumDistrictName}</p>
                  <p>{patient?.bagKhorooName}</p>
               </div>
               {OCS ? (
                  <Radio.Group
                     className="flex"
                     size="small"
                     onChange={handleTypeChangePatient}
                     value={type}
                     optionType="button"
                     buttonStyle="solid"
                  >
                     <Radio
                        style={{
                           fontSize: 14,
                           fontWeight: 700,
                           color: '#2D8CFF'
                        }}
                        value="OTS"
                     >
                        OTS
                     </Radio>
                     <Radio
                        style={{
                           fontSize: 14,
                           fontWeight: 700,
                           color: '#2D8CFF'
                        }}
                        value="EMR"
                     >
                        EMR
                     </Radio>
                  </Radio.Group>
               ) : null}
            </div>
         </div>
      </>
   );
}
export default PatientInformation;
