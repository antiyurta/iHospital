import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import male from '../../assets/images/maleAvatar.svg';
import NewCard from '../Card/Card';
import CountryServices from '../../services/reference/country';
import { NewSearch, NewRadioGroup, NewRadio } from '../Input/Input';
import { getGender, getAge } from '../comman';

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
         <NewCard title={'Өвчтөний мэдээлэл'}>
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
         </NewCard>
         {/* <Modal title="Өвчний түүх" open={isOpenHistory} onCancel={() => setIsOpenHistory(false)} width={'70%'}>
            <div className="flex flex-wrap">
               <div
                  className="sm:w-full md:w-1/4 lg:w-1/4"
                  style={{
                     borderRight: '1px solid #f0f0f0'
                  }}
               >
                  <div className="px-2">
                     <Divider>Амбулатори</Divider>
                     <Divider>Хэвтэн</Divider>
                  </div>
               </div>
               <div className="sm:w-full md:w-3/4 lg:w-3/4"></div>
            </div>
         </Modal> */}
      </>
   );
}
export default PatientInformation;
