import {
   Card,
   Button,
   Modal,
   Select,
   Pagination,
   Table,
   Result,
   Spin
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { DefaultPost, Get, openNofi, Post, ScrollRef } from '../../comman';
import PatientInformation from '../PatientInformation';
import Order from '../Order/Order';
import Schedule from '../OCS/Schedule';
import moment from 'moment';
import FullScreenLoader from '../../FullScreenLoader';

const { Option } = Select;

function Ambulatory() {
   const token = useSelector(selectCurrentToken);
   const [cardLoading, setCardLoading] = useState(false);
   const [orderModal, setOrderModal] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   // owchton haih ued
   const [isLoadingFilter, setIsLoadingFilter] = useState(false);
   // owchton haih ued
   // tolbor awah darah ued
   const [isLoadingGetPayInfo, setIsLoadingGetPayInfo] = useState(false);
   // tolbor awah darah ued

   const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   const [patientsList, setPatientsList] = useState([]);
   const [notPatientsList, setNotPatientsList] = useState([]);
   const [notPatientsMeta, setNotPatientsMeta] = useState({
      page: 1,
      limit: 10
   });
   const [notPatientsValue, setNotPatientsValue] = useState('');
   //
   const [payments, setPayments] = useState([]);

   //
   const [selectedPatient, setSelectedPatient] = useState([]);
   const scrollRef = useRef();
   const config = {
      headers: {},
      params: {}
   };
   const onSearch = async (page, pageSize, value) => {
      setIsLoadingFilter(true);
      const conf = {
         headers: {},
         params: {
            filter: value
         }
      };
      const response = await Get('payment/patient', token, conf);
      setPatientsList(response);
      setIsLoadingFilter(false);
   };
   const onSearchPayment = async (page, pageSize, value) => {
      setNotPatientLoading(true);
      if (value != undefined) {
         setNotPatientsValue(value);
      }
      const conf = {
         headers: {},
         params: {
            filter: value,
            page: page,
            limit: pageSize
         }
      };
      const response = await Get('pms/patient', token, conf);
      setNotPatientsMeta(response.meta);
      setNotPatientsList(response.data);
      setNotPatientLoading(false);
   };
   const getPayment = async (id) => {
      setIsLoadingGetPayInfo(true);
      setIsOpen(true);
      const conf = {
         headers: {},
         params: {
            patientId: id
         }
      };
      const response = await Get('payment/invoice', token, conf);
      getPatient(id);
      setPayments(response.data);
      setIsLoadingGetPayInfo(false);
   };
   const getPatient = async (id) => {
      const patient = await Get('pms/patient/' + id, token, config);
      setSelectedPatient(patient);
   };
   const saveOrder = async (value) => {
      // console.log(value);
      if (selectedPatient && selectedPatient.length === 0) {
         openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
      } else if (value.length > 0) {
         var stateIsCito = false;
         value.map((item) => {
            if (!item.isCito) {
               stateIsCito = true;
            }
         });
         const response = await Post('service-request', token, config, {
            patientId: selectedPatient.id,
            requestDate: new Date(),
            isCito: stateIsCito ? true : false,
            usageType: 'OUT',
            services: value
         });
         if (response === 201) {
            setOrderModal(false);
         }
      } else {
         openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
      }
   };

   // const checkAPI = async () => {
   //    const conf = {
   //       headers: {},
   //       params: {}
   //    };
   //    const response = await Get('ebarimt/checkApi', token, conf);
   //    if (!response.database.success) {
   //       Get('ebarimt/sendData', token, config);
   //    }
   // };

   useEffect(() => {
      ScrollRef(scrollRef);
   }, []);
   const [notPatientLoading, setNotPatientLoading] = useState(false);
   const categories = [
      {
         //shinejilgee
         name: 'Examination',
         label: 'Шинжилгээ'
      },
      {
         //onshilgoo
         name: 'Xray',
         label: 'Оношилгоо'
      },
      {
         //emchilgee
         name: 'Treatment',
         label: 'Эмчилгээ'
      },
      {
         //hagalgaa mes
         name: 'Surgery',
         label: 'Мэс засал'
      },
      {
         //duran
         name: 'Endo',
         label: 'Дуран'
      },
      {
         //bagts
         name: 'Package',
         label: 'Багц'
      }
   ];
   const notPatientColumn = [
      {
         title: 'Картын №',
         dataIndex: 'cardNumber'
      },
      {
         title: 'Овог',
         dataIndex: 'lastName'
      },
      {
         title: 'Нэр',
         dataIndex: 'firstName'
      },
      {
         title: 'Регистрийн дугаар',
         dataIndex: 'registerNumber'
      }
   ];
   const columns = [
      {
         title: 'Картын №',
         dataIndex: 'cardNumber'
      },
      {
         title: 'Овог',
         dataIndex: 'lastName'
      },
      {
         title: 'Нэр',
         dataIndex: 'firstName'
      },
      {
         title: 'Регистрийн дугаар',
         dataIndex: 'registerNumber'
      },
      {
         title: 'Төлбөр',
         dataIndex: 'id',
         render: (text) => {
            return (
               <Button type="primary" onClick={() => getPayment(text)}>
                  Төлбөр авах
               </Button>
            );
         }
      }
   ];
   if (isLoadingGetPayInfo) {
      return <FullScreenLoader />;
   }
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-full md:w-full xl:w-1/2 p-1">
               <PatientInformation
                  patient={selectedPatient}
                  handlesearch={onSearch}
               />
            </div>
            <div className="w-full md:w-full xl:w-1/2 p-1">
               <Card
                  bordered={false}
                  title={<h6 className="font-semibold m-0">Туслах цэс</h6>}
                  className="header-solid max-h-max rounded-md"
                  loading={cardLoading}
                  bodyStyle={{
                     paddingTop: 10,
                     paddingLeft: 10,
                     paddingRight: 10,
                     paddingBottom: 10,
                     minHeight: 150,
                     maxHeight: 150
                  }}
               >
                  <div className="flex flex-wrap">
                     <div className="w-full md:w-1/3 xl:1/3">
                        <Button
                           className="bg-[#2d8cff]"
                           type="primary"
                           onClick={() => setOrderModal(true)}
                        >
                           Оношилгоо шинжилгээ захиалах
                        </Button>
                     </div>
                  </div>
               </Card>
            </div>
            <div className="w-full p-1">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  loading={cardLoading}
               >
                  <Table
                     rowKey={'id'}
                     bordered
                     locale={{
                        emptyText: <Result title="Мэдээлэл байхгүй байна" />
                     }}
                     loading={isLoadingFilter}
                     columns={columns}
                     dataSource={patientsList}
                     pagination={{
                        simple: true,
                        pageSize: 15
                     }}
                  />
               </Card>
            </div>
         </div>
         <Modal
            title={'Оношилгоо шинжилгээ захиалах'}
            open={orderModal}
            maskClosable={true}
            onCancel={() => setOrderModal(false)}
            footer={null}
            confirmLoading={isConfirmLoading}
            width="90%"
            cancelText="Болих"
            okText="Хадгалах"
            className="bg-slat-50"
            bodyStyle={{
               backgroundColor: '#f8fafc'
            }}
         >
            <div className="flex flex-wrap">
               <div className="w-full md:w-1/2 p-1">
                  <PatientInformation
                     patient={selectedPatient}
                     handlesearch={onSearchPayment}
                  />
               </div>
               <div className="w-full md:w-1/2 p-1">
                  <Card
                     bordered={false}
                     title={
                        <h6 className="font-semibold m-0">
                           Үйлчлүүлэгчийн Жагсаалт
                        </h6>
                     }
                     className="header-solid max-h-max rounded-md"
                     bodyStyle={{
                        paddingTop: 0,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 10,
                        minHeight: 150,
                        maxHeight: 150
                     }}
                     extra={
                        <>
                           <Pagination
                              simple
                              current={notPatientsMeta.page}
                              pageSize={notPatientsMeta.limit}
                              total={notPatientsMeta.itemCount}
                              onChange={(page, pageSize) =>
                                 onSearchPayment(
                                    page,
                                    pageSize,
                                    notPatientsValue
                                 )
                              }
                           />
                        </>
                     }
                  >
                     <Table
                        rowKey={'id'}
                        bordered
                        rowClassName="hover:cursor-pointer"
                        onRow={(row, rowIndex) => {
                           return {
                              onDoubleClick: () => {
                                 setSelectedPatient(row);
                              }
                           };
                        }}
                        loading={notPatientLoading}
                        columns={notPatientColumn}
                        dataSource={notPatientsList}
                        pagination={false}
                        scroll={{ y: 100 }}
                     />
                  </Card>
               </div>
            </div>
            <div className="p-1">
               <Card
                  bordered={false}
                  title={
                     <h6 className="font-semibold m-0">
                        Үйлчлүүлэгчийн Жагсаалт
                     </h6>
                  }
                  className="header-solid max-h-max rounded-md"
                  bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
               >
                  <Order
                     isDoctor={false}
                     selectedPatient={selectedPatient}
                     usageType="OUT"
                     categories={categories}
                     save={saveOrder}
                  />
               </Card>
            </div>
         </Modal>
         <Schedule
            isOpen={isOpen}
            isOCS={false}
            incomeData={payments}
            selectedPatient={selectedPatient}
            isClose={() => setIsOpen(false)}
         />
      </div>
   );
}
export default Ambulatory;
