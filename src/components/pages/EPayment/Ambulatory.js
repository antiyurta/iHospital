import { Card, Button, Modal, Pagination, Table, Result, ConfigProvider, Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import { localMn, openNofi } from '../../comman';
import PatientInformation from '../PatientInformation';
import Order from '../Order/Order';
import Schedule from '../OCS/Schedule';
import jwtInterceopter from '../../jwtInterceopter';
import moment from 'moment';

function Ambulatory() {
   const [orderModal, setOrderModal] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   // owchton haih ued
   const [isLoadingFilter, setIsLoadingFilter] = useState(false);
   // owchton haih ued
   // tolbor awah darah ued
   const [isLoadingGetPayInfo, setIsLoadingGetPayInfo] = useState(false);
   // tolbor awah darah ued
   const [patientsList, setPatientsList] = useState([]);
   const [notPatientsList, setNotPatientsList] = useState([]);
   const [notPatientsMeta, setNotPatientsMeta] = useState({
      page: 1,
      limit: 10
   });
   const [notPatientsValue, setNotPatientsValue] = useState('');
   const [payments, setPayments] = useState([]);
   const [selectedPatient, setSelectedPatient] = useState([]);
   //ebarimt getInfohadaglah
   const [ebarimtInfo, setEbarimtInfo] = useState({});
   //ebarimt getInfohadaglah
   const onSearch = async (_page, _pageSize, value) => {
      setIsLoadingFilter(true);
      await jwtInterceopter
         .get('payment/patient', {
            params: {
               filter: value
            }
         })
         .then((response) => {
            setPatientsList(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoadingFilter(false);
         });
   };
   const onSearchPayment = async (page, pageSize, value) => {
      setNotPatientLoading(true);
      if (value != undefined) {
         setNotPatientsValue(value);
      }
      await jwtInterceopter
         .get('pms/patient', {
            params: {
               filter: value,
               page: page,
               limit: pageSize
            }
         })
         .then((response) => {
            setNotPatientsList(response.data.response.data);
            setNotPatientsMeta(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setNotPatientLoading(false);
         });
   };
   const getPayment = async (id) => {
      setIsLoadingGetPayInfo(true);
      await jwtInterceopter
         .get('payment/invoice', {
            params: {
               patientId: id
            }
         })
         .then((response) => {
            getPatient(id);
            setPayments(response.data.response.data);
            setIsOpen(true);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(setIsLoadingGetPayInfo(false));
   };
   const getPatient = async (id) => {
      await jwtInterceopter
         .get('pms/patient/' + id)
         .then((response) => {
            setSelectedPatient(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const saveOrder = async (value) => {
      if (selectedPatient && selectedPatient.length === 0) {
         openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
      } else if (value.length > 0) {
         var stateIsCito = false;
         value.map((item) => {
            if (!item.isCito) {
               stateIsCito = true;
            }
         });
         await jwtInterceopter
            .post('service-request', {
               patientId: selectedPatient.id,
               requestDate: new Date(),
               isCito: stateIsCito ? true : false,
               usageType: 'OUT',
               services: value
            })
            .then((response) => {
               if (response.status === 201) {
                  setOrderModal(false);
                  openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
               }
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
      }
   };
   const sendData = async () => {
      await jwtInterceopter.get('ebarimt/sendData').then((response) => {
         if (response.data.response.status && response.status === 200) {
            openNofi('success', 'Амжиллтай', 'Амжилттай татлаа');
            getInformation();
         } else {
            openNofi('error', 'Алдаа', 'Татах үед алдаа гарлаа');
         }
      });
   };
   const checkEbarimtInfo = () => {
      if ((ebarimtInfo?.countBill * 100) / ebarimtInfo?.countLottery > 98) {
         return false;
      }
      return true;
   };
   const getInformation = async () => {
      await jwtInterceopter.get('ebarimt/information').then((response) => {
         setEbarimtInfo(response.data.response.result?.extraInfo);
      });
   };
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
         dataIndex: 'cardNumber',
         width: 70
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
               <Button loading={isLoadingGetPayInfo} type="primary" onClick={() => getPayment(text)}>
                  Төлбөр авах
               </Button>
            );
         }
      }
   ];
   useEffect(() => {
      getInformation();
   }, []);
   return (
      <div className="flex flex-col gap-3">
         <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
            <PatientInformation patient={selectedPatient} handlesearch={onSearch} />
            <Card
               bordered={false}
               title={<h6 className="font-semibold m-0">Туслах цэс</h6>}
               className="header-solid max-h-max rounded-md"
               bodyStyle={{
                  paddingTop: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 10
               }}
            >
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block mb-3">
                  <div className="p-3 flex justify-between">
                     <div className="flex flex-row gap-3">
                        <label>И-Баримт:</label>
                        <p>{ebarimtInfo?.countBill}</p>/<p>{ebarimtInfo?.countLottery}</p>
                        <label>Сүүлд татсан огноо:</label>
                        <p>{moment(ebarimtInfo?.lastSentdate).format('YYYY-MM-DD')}</p>
                     </div>
                     <Button onClick={() => sendData()} type="primary">
                        И-баримт илгээх
                     </Button>
                  </div>
               </div>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-3">
                        <Button className="bg-[#4a7fc1]" type="primary" onClick={() => setOrderModal(true)}>
                           Оношилгоо шинжилгээ захиалах
                        </Button>
                     </div>
                  </div>
               </div>
            </Card>
         </div>
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
               paddingTop: 10,
               paddingLeft: 10,
               paddingRight: 10,
               paddingBottom: 10
            }}
         >
            <ConfigProvider locale={localMn()}>
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
                     position: ['topCenter', 'bottomCenter'],
                     size: 'small',
                     total: patientsList?.length,
                     showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                     pageSize: 10
                  }}
               />
            </ConfigProvider>
         </Card>
         <Modal
            title={'Оношилгоо шинжилгээ захиалах'}
            open={orderModal}
            maskClosable={true}
            onCancel={() => setOrderModal(false)}
            footer={null}
            width="90%"
            cancelText="Болих"
            okText="Хадгалах"
            bodyStyle={{
               backgroundColor: '#F3F4F6',
               padding: 10
            }}
         >
            <div className="flex flex-col gap-3">
               <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
                  <PatientInformation patient={selectedPatient} handlesearch={onSearchPayment} />
                  <Card
                     bordered={false}
                     title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>}
                     className="header-solid max-h-max rounded-md"
                     bodyStyle={{
                        paddingTop: 0,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 10
                     }}
                     extra={
                        <>
                           <Pagination
                              simple
                              current={notPatientsMeta.page}
                              pageSize={notPatientsMeta.limit}
                              total={notPatientsMeta.itemCount}
                              onChange={(page, pageSize) => onSearchPayment(page, pageSize, notPatientsValue)}
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
                              onClick: () => {
                                 setSelectedPatient(row);
                              }
                           };
                        }}
                        loading={notPatientLoading}
                        columns={notPatientColumn}
                        dataSource={notPatientsList}
                        pagination={false}
                        scroll={{ y: 120 }}
                     />
                  </Card>
               </div>
               <Card
                  bordered={false}
                  title={<h6 className="font-semibold m-0">Үйлчилгээний Жагсаалт</h6>}
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
            isSuccess={() => getInformation()}
         />
      </div>
   );
}
export default Ambulatory;
