import { Input, Card, Radio, Descriptions, Button, Modal, Divider } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import male from '../../assets/images/maleAvatar.svg';
import { selectCurrentToken } from '../../features/authReducer';
import { Get } from '../comman';
import { SnippetsOutlined } from '@ant-design/icons';
import AMIndex from './EMR/InPatient/document/Ambulatory/Index';

const { Search } = Input;

function PatientInformation({
   handlesearch = true,
   patient,
   handleTypeChange,
   OCS,
   type
}) {
   const token = useSelector(selectCurrentToken);
   const [citizens, setCitizens] = useState([]);
   const [provices, setProvices] = useState([]);
   const [towns, setTowns] = useState([]);
   //
   const [isOpenAM, setIsOpenAM] = useState(false);
   const [isOpenHistory, setIsOpenHistory] = useState(false);
   //
   const onSearch = async (value) => {
      handlesearch(1, 10, value);
   };
   const handleTypeChangePatient = async (value) => {
      handleTypeChange(value);
   };

   const getGender = (registerNumber) => {
      if (registerNumber != undefined) {
         if (registerNumber[registerNumber.length - 2] % 2 === 1) {
            return 'Эр';
         } else {
            return 'Эм';
         }
      } else {
         return null;
      }
   };
   const getAge = (registerNumber) => {
      if (registerNumber != undefined) {
         const date = new Date();
         let year = parseInt(registerNumber.substring(2, 4));
         let month = parseInt(registerNumber.substring(4, 6));
         if (month > 20 && month < 33) {
            year += 2000;
            month -= 20;
         } else {
            year += 1900;
         }
         const currentYear = date.getFullYear();
         const age = currentYear - year;
         return age;
      } else {
         return null;
      }
   };
   const getAddress = (
      countryId,
      aimagId,
      soumId,
      committee,
      building,
      address
   ) => {
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
      const conf = {
         headers: {},
         params: {
            type: 1
         }
      };
      const response = await Get('reference/country', token, conf);
      setCitizens(response.data);
   };
   const getProvices = async () => {
      const conf = {
         headers: {},
         params: {
            type: 2
         }
      };
      const response = await Get('reference/country', token, conf);
      setProvices(response.data);
   };
   const getTowns = async () => {
      const conf = {
         headers: {},
         params: {
            type: 3
         }
      };
      const response = await Get('reference/country', token, conf);
      setTowns(response.data);
   };
   useEffect(() => {
      getCitizens();
      getProvices();
      getTowns();
   }, []);
   return (
      <>
         <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Өвчтөний мэдээлэл</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
               paddingTop: 10,
               paddingLeft: 10,
               paddingRight: 10,
               paddingBottom: 10,
               minHeight: 150,
               maxHeight: 150
            }}
            extra={
               handlesearch ? (
                  <Search
                     placeholder="Регистр/Нэрээр хайх"
                     onSearch={onSearch}
                     enterButton="Хайх"
                  />
               ) : (
                  <div>
                     <Button.Group>
                        <Button onClick={() => setIsOpenHistory(true)}>
                           Өвчний түүх
                        </Button>
                        <Button
                           onClick={() => setIsOpenAM(true)}
                           className="ml-2"
                           icon={<SnippetsOutlined />}
                        >
                           Маягт
                        </Button>
                     </Button.Group>
                  </div>
               )
            }
         >
            <div className="flex flex-row">
               <div className="basis-1/4 p-1">
                  <div
                     className="container h-24 min-h-24 bg-contain bg-no-repeat bg-center"
                     style={{ backgroundImage: 'url(' + male + ')' }}
                  ></div>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                     }}
                  >
                     {OCS && (
                        <Radio.Group
                           size="small"
                           onChange={handleTypeChangePatient}
                           value={type}
                           optionType="button"
                           buttonStyle="solid"
                           className="small-radio-button mt-2"
                        >
                           <Radio.Button value="OCS">OTS</Radio.Button>
                           <Radio.Button value="EMR">EMR</Radio.Button>
                        </Radio.Group>
                     )}
                  </div>
               </div>
               <div className="basis-3/4 p-1">
                  <div className="container">
                     <Descriptions
                        column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
                     >
                        <Descriptions.Item label="Овог">
                           {patient?.lastName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Нэр">
                           {patient?.firstName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Хүйс">
                           {getGender(patient?.registerNumber)}
                        </Descriptions.Item>
                        <Descriptions.Item label="Нас">
                           {getAge(patient?.registerNumber)}
                        </Descriptions.Item>
                        <Descriptions.Item label="РД">
                           {patient?.registerNumber}
                        </Descriptions.Item>
                        <Descriptions.Item label="Утас">
                           {patient?.phoneNo}
                        </Descriptions.Item>
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
         </Card>
         <Modal
            title="Маягт жагсаалт"
            open={isOpenAM}
            onCancel={() => setIsOpenAM(false)}
            width={'70%'}
         >
            <AMIndex />
         </Modal>
         <Modal
            title="Өвчний түүх"
            open={isOpenHistory}
            onCancel={() => setIsOpenHistory(false)}
            width={'70%'}
         >
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
         </Modal>
      </>
   );
}
export default PatientInformation;
