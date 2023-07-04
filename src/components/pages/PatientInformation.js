import { Input, Card, Radio, Descriptions, Button, Modal, Divider, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import male from '../../assets/images/maleAvatar.svg';
import { selectCurrentAppId, selectCurrentToken } from '../../features/authReducer';
import { Get, openNofi } from '../comman';
import { SnippetsOutlined } from '@ant-design/icons';

import Customized from './BeforeAmbulatory/Customized/Index';
import jwtInterceopter from '../jwtInterceopter';
import DocumentShow from './611/DocumentShow';

const { Search } = Input;

function PatientInformation({ handlesearch = true, patient, handleTypeChange, OCS, type, appointmentId, deparmentId }) {
   console.log('===============>a[pp', appointmentId);
   const token = useSelector(selectCurrentToken);
   const AppIds = useSelector(selectCurrentAppId);
   const [citizens, setCitizens] = useState([]);
   const [provices, setProvices] = useState([]);
   const [towns, setTowns] = useState([]);
   //
   const [documents, setDocuments] = useState([]);
   const [isLoadingGetDocuments, setIsLoadingGetDocuments] = useState(false);
   const [documentSearchValue, setDocumentSearchValue] = useState('');
   const [documentId, setDocumentId] = useState(Number);
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
   const getDocuments = async () => {
      setIsLoadingGetDocuments(true);
      const conf = {
         headers: {},
         params: {
            employeePositionIds: AppIds,
            structureId: deparmentId,
            usageType: 'OUT',
            documentType: 2
         }
      };
      await jwtInterceopter
         .get('organization/document-role/show', conf)
         .then((response) => {
            if (response.data.response?.length === 0) {
               openNofi('info', 'Анхааруулга', 'Таньд маягт алга');
            } else {
               var data = [];
               response.data.response?.map((item) =>
                  item?.documents?.map((document) => {
                     data.push(document);
                  })
               );
               setDocuments(data);
               setIsOpenAM(true);
               setDocumentId(0);
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setIsLoadingGetDocuments(false));
   };
   const filteredDocument = documents.filter((document) => {
      return document.label.toLowerCase().includes(documentSearchValue.toLowerCase());
   });
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
               paddingTop: 0,
               paddingLeft: 10,
               paddingRight: 10,
               paddingBottom: 10
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12
               }}
            >
               {handlesearch && (
                  <div className="w-full">
                     <Search placeholder="Регистр/Нэрээр хайх" onSearch={onSearch} enterButton="Хайх" />
                  </div>
               )}
               <div className="w-full">
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 12
                     }}
                  >
                     <img className="w-24" src={male} alt="patient" />
                     <Descriptions column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}>
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
               <div className="w-full">
                  {OCS && (
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           gap: 12
                        }}
                     >
                        <div
                           style={{
                              minWidth: 96,
                              textAlign: 'center'
                           }}
                        >
                           <Radio.Group
                              size="small"
                              onChange={handleTypeChangePatient}
                              value={type}
                              optionType="button"
                              buttonStyle="solid"
                           >
                              <Radio.Button
                                 style={{
                                    height: 28
                                 }}
                                 value="OCS"
                              >
                                 OTS
                              </Radio.Button>
                              <Radio.Button
                                 style={{
                                    height: 28
                                 }}
                                 value="EMR"
                              >
                                 EMR
                              </Radio.Button>
                           </Radio.Group>
                        </div>
                        <div className="w-full">
                           {OCS && (
                              <div className="w-full justify-end flex flex-row gap-3">
                                 <Button className="h-6" type="primary" onClick={() => setIsOpenHistory(true)}>
                                    Өвчний түүх
                                 </Button>
                                 <Button
                                    type="primary"
                                    onClick={() => getDocuments()}
                                    loading={isLoadingGetDocuments}
                                    icon={<SnippetsOutlined />}
                                 >
                                    Маягт
                                 </Button>
                                 <DocumentShow
                                    props={{
                                       appIds: AppIds,
                                       deparmentId: deparmentId,
                                       usageType: 'OUT',
                                       documentType: 0
                                    }}
                                 />
                              </div>
                           )}
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </Card>
         <Modal title="Маягт жагсаалт" open={isOpenAM} onCancel={() => setIsOpenAM(false)} width={'70%'} footer={null}>
            <div className="flex flex-row gap-3">
               <div className="flex flex-col gap-3 p-3 border-r-[2px] w-[300px]">
                  <Input
                     placeholder="Хайх"
                     value={documentSearchValue}
                     onChange={(e) => setDocumentSearchValue(e.target.value)}
                  />
                  <div>
                     <Table
                        rowKey={'value'}
                        rowClassName="hover:cursor-pointer"
                        bordered
                        columns={[
                           {
                              title: 'ДТ',
                              width: 40,
                              dataIndex: 'value'
                           },
                           {
                              title: 'Нэр',
                              dataIndex: 'label',
                              width: 100,
                              className: 'whitespace-normal'
                           }
                        ]}
                        scroll={{
                           y: 3000
                        }}
                        onRow={(record, _rowIndex) => {
                           return {
                              onClick: () => {
                                 setDocumentId(record.value);
                              }
                           };
                        }}
                        pagination={false}
                        dataSource={filteredDocument}
                     />
                  </div>
               </div>
               <div className="w-full">
                  <Customized
                     usageType={'OUT'}
                     documentValue={documentId}
                     structureId={deparmentId}
                     appointmentId={appointmentId}
                     patientId={patient.id}
                  />
               </div>
            </div>
         </Modal>
         <Modal title="Өвчний түүх" open={isOpenHistory} onCancel={() => setIsOpenHistory(false)} width={'70%'}>
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
