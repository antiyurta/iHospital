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
import { getAge, getGenderInType } from '@Comman/common';
//apiF
import localFileApi from '@ApiServices/file/local-file/local-file.api';
import CountryApi from '@ApiServices/reference/country';
//extends
const { Search } = Input;

function PatientInformation({ handlesearch = true, patient, handleTypeChange, OCS, type }) {
   const [citizens, setCitizens] = useState([]);
   const [provices, setProvices] = useState([]);
   const [towns, setTowns] = useState([]);
   const [isLoadingImage, setIsLoadingImage] = useState(false);
   const [imageUrl, setImageUrl] = useState('');
   //
   const onSearch = async (value) => {
      handlesearch(1, 10, value);
   };
   const handleTypeChangePatient = async (value) => {
      handleTypeChange(value);
   };

   const getAddress = (countryId, aimagId, soumId, committee, building, address) => {
      var message = '';
      if (countryId != undefined) {
         const country = citizens.filter((citizen) => citizen.id === countryId);
         if (country.length > 0) {
            message += country[0].name + ' ';
         } else {
            message += '';
         }
      }
      if (aimagId != undefined) {
         const aimag = provices.filter((provice) => provice.id === aimagId);
         if (aimag.length > 0) {
            message += aimag[0].name + ' ';
         } else {
            message += '';
         }
      }
      if (soumId != undefined) {
         const soum = towns.filter((town) => town.id === soumId);
         if (soum.length > 0) {
            message += soum[0].name + ' ';
         } else {
            message += '';
         }
      }
      if (message && committee != null && building != null && address != null) {
         return <p>{message + committee + ' ' + building + ' ' + address}</p>;
      }
      return;
   };
   const getCitizens = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 1
         }
      })
         .then((response) => {
            setCitizens(response.data.response?.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const getProvices = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 2
         }
      })
         .then((response) => {
            setProvices(response.data.response?.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const getTowns = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 3
         }
      })
         .then((response) => {
            setTowns(response.data.response?.data);
         })
         .catch((error) => {
            console.log(error);
         });
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
         .finally(() => {
            setIsLoadingImage(false);
         });
   };

   const ImageIcon = useMemo(() => {
      if (patient.genderType === 'WOMAN') {
         return womanIcon;
      } else {
         return manIcon;
      }
   }, [patient]);

   const genderSymbolIcon = useMemo(() => {
      if (patient.genderType === 'WOMAN') {
         return manSymbol;
      } else {
         return womanSymbol;
      }
   }, [patient]);

   useEffect(() => {
      getCitizens();
      getProvices();
      getTowns();
   }, []);
   useEffect(() => {
      patient.imageId && getPatientImage();
   }, [patient]);
   return (
      <>
         <div className="patient-info xl:min-w-[500px]">
            <div className="picture">
               <Spin spinning={isLoadingImage}>
                  <img src={imageUrl || ImageIcon} alt="pation" />
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
                     <p>{`${getGenderInType(patient?.genderType || undefined)} | ${getAge(
                        patient?.registerNumber || undefined
                     )}`}</p>
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
                  <div className="flex flex-row gap-3">
                     <img src={phoneSymbol} alt="phone" />
                     <p>{patient?.phoneNo}</p>
                  </div>
               </div>
               <div className="flex flex-row gap-3">
                  <img src={mapSymbol} alt="mapSymbol" />
                  {getAddress(
                     patient?.countryId,
                     patient?.aimagId,
                     patient?.soumId,
                     patient?.committee,
                     patient?.building,
                     patient?.address
                  )}
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
