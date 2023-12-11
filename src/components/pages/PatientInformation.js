import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';

import maleSymbol from '../../../src/assets/images/male.svg';
import femaleSymbol from '../../../src/assets/images/female.svg';
import addressSymbol from '../../../src/assets/images/address.svg';
import mailSymbol from '../../../src/assets/images/mail.svg';
import phoneSymbol from '../../../src/assets/images/phone.svg';
import mapSymbol from '../../../src/assets/images/map.svg';

import male from '../../assets/images/maleAvatar.svg';
import NewCard from '../Card/Card';
import CountryServices from '../../services/reference/country';
import { NewSearch, NewRadioGroup, NewRadio } from '../Input/Input';
import { getGender, getAge, getGenderFullName } from '../comman';

function PatientInformation({ handlesearch = true, patient, handleTypeChange, OCS, type }) {
   const [citizens, setCitizens] = useState([]);
   const [provices, setProvices] = useState([]);
   const [towns, setTowns] = useState([]);
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
      await CountryServices.getByPageFilter({
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
      await CountryServices.getByPageFilter({
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
      await CountryServices.getByPageFilter({
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
   useEffect(() => {
      getCitizens();
      getProvices();
      getTowns();
   }, []);
   return (
      <>
         <div className="patient-info">
            <div className="picture">
               <img src={male} alt="pation" />
            </div>
            <div className="info">
               {handlesearch ? (
                  <div className="w-full">
                     <NewSearch placeholder="Регистр/Нэрээр хайх" onSearch={onSearch} enterButton="Хайх" />
                  </div>
               ) : null}
               <p className="names">{`Овог: ${patient?.lastName || ''} | Нэр: ${patient.firstName || ''}`}</p>
               <div className="flex justify-between">
                  <div className="flex flex-row gap-3">
                     <img src={femaleSymbol} alt="symbol" />
                     <p>{`${getGenderFullName(patient?.registerNumber || undefined)} | ${getAge(
                        patient?.registerNumber || undefined
                     )} Нас`}</p>
                  </div>
                  <div className="flex flex-row gap-3">
                     <img src={addressSymbol} alt="Addres" />
                     <p>{patient?.registerNumber}</p>
                  </div>
               </div>
               <div className="flex justify-between">
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
                  <NewRadioGroup
                     className="flex"
                     size="small"
                     onChange={handleTypeChangePatient}
                     value={type}
                     optionType="button"
                     buttonStyle="solid"
                  >
                     <NewRadio
                        style={{
                           fontSize: 14,
                           fontWeight: 700,
                           color: '#2D8CFF'
                        }}
                        value="OCS"
                     >
                        OTS
                     </NewRadio>
                     <NewRadio
                        style={{
                           fontSize: 14,
                           fontWeight: 700,
                           color: '#2D8CFF'
                        }}
                        value="EMR"
                     >
                        EMR
                     </NewRadio>
                  </NewRadioGroup>
               ) : null}
            </div>
         </div>
         {/* <NewCard>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12
               }}
            >
               {handlesearch && (
                  <div className="w-full">
                     <NewSearch placeholder="Регистр/Нэрээр хайх" onSearch={onSearch} enterButton="Хайх" />
                  </div>
               )}
               <div className="w-full">
                  <div className="flex justify-between gap-3">
                     <div className="min-w-24 h-24">
                        <div className="flex flex-col gap-3">
                           <img className="w-24" src={male} alt="patient" />
                           {OCS ? (
                              <NewRadioGroup
                                 className="flex"
                                 size="small"
                                 onChange={handleTypeChangePatient}
                                 value={type}
                                 optionType="button"
                                 buttonStyle="solid"
                              >
                                 <NewRadio value="OCS">OTS</NewRadio>
                                 <NewRadio value="EMR">EMR</NewRadio>
                              </NewRadioGroup>
                           ) : null}
                        </div>
                     </div>
                     <div className="w-full">
                        <Descriptions column={{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}>
                           <Descriptions.Item label="Овог">{patient?.lastName}</Descriptions.Item>
                           <Descriptions.Item label="Нэр">{patient?.firstName}</Descriptions.Item>
                           <Descriptions.Item label="Хүйс">{getGender(patient?.registerNumber)}</Descriptions.Item>
                           <Descriptions.Item label="Нас">{getAge(patient?.registerNumber)}</Descriptions.Item>
                           <Descriptions.Item label="РД">{patient?.registerNumber}</Descriptions.Item>
                           <Descriptions.Item label="Утас">{patient?.phoneNo}</Descriptions.Item>
                           <Descriptions.Item label="Хаяг">
                              {getAddress(
                                 patient?.countryId,
                                 patient?.aimagId,
                                 patient?.soumId,
                                 patient?.committee,
                                 patient?.building,
                                 patient?.address
                              )}
                           </Descriptions.Item>
                        </Descriptions>
                     </div>
                  </div>
               </div>
            </div>
         </NewCard> */}
      </>
   );
}
export default PatientInformation;
