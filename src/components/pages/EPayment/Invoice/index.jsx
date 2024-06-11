import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Pagination, Table, Result, ConfigProvider, Form, Select, Radio, InputNumber } from 'antd';
import dayjs from 'dayjs';
//common
import { localMn, openNofi } from '@Comman/common';
//comp
import Order from '@Pages/Order/Order';
import EbarimtPrint from '../EbarimtPrint';
import Schedule from '@Pages/OCS/Schedule';
import PatientInformation from '@Pages/PatientInformation';
//api
import EBarimtApi from '@ApiServices/ebarimt/ebarimt';
import PatientApi from '@ApiServices/pms/patient.api';
import PaymentApi from '@ApiServices/payment/payment';
import ServiceRequestApi from '@ApiServices/serviceRequest';

function Invoice() {
   const [orderModal, setOrderModal] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [isLoadingEbarimt, setIsLoadingEbarimt] = useState(false);
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
   const [invoices, setInvoices] = useState([]);
   const [selectedPatient, setSelectedPatient] = useState({});
   //ebarimt getInfohadaglah
   const [ebarimtInfo, setEbarimtInfo] = useState({});
   //ebarimt getInfohadaglah
   //tolbor urdchilan
   const [ebarimtModal, setEbarimtModal] = useState(false);
   const [ebarimtData, setEbarimtData] = useState({});
   const [beforePayForm] = Form.useForm();
   const [paymentShape, setPaymentShape] = useState([]);
   const [isOpenBeforePaymentModal, setIsOpenBeforePaymentModal] = useState(false);

   //tolbor urdchilan
   const onSearch = async (_page, _pageSize, value) => {
      setIsLoadingFilter(true);
      await PaymentApi.getPaymentPatient({
         params: {
            filter: value
         }
      })
         .then((response) => {
            setPatientsList(response.data?.response);
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
      await PatientApi.getFilter({
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
   const getInvoices = async (id) => {
      setIsLoadingGetPayInfo(true);
      await PaymentApi.get({
         params: {
            patientId: id
         }
      })
         .then(({ data: { response } }) => {
            getPatient(id);
            setInvoices(response.data);
            setIsOpen(true);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(setIsLoadingGetPayInfo(false));
   };
   const getPatient = async (id) => {
      await PatientApi.getById(id)
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
         const stateIsCito = !!value.find((item) => !item.isCito);
         await ServiceRequestApi.post({
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
   const sendDataButton = async () => {
      setIsLoadingEbarimt(true);
      await EBarimtApi.sendData()
         .then(({ data }) => {
            if (data.success) {
               openNofi('success', 'Амжиллтай', 'Амжилттай И-Баримт илгээгдлээ');
               getInformation();
            } else {
               openNofi('error', 'Алдаа', 'Татах үед алдаа гарлаа');
            }
         })
         .finally(() => {
            setIsLoadingEbarimt(false);
         });
   };
   const getInformation = async () => {
      await EBarimtApi.getInformation().then((response) => {
         setEbarimtInfo(response.data.response);
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
         //mes ajilbar
         name: 'Operation',
         label: 'Мэс ажилбар'
      },
      {
         //bagts
         name: 'Package',
         label: 'Багц'
      },
      {
         //hewtuuleh
         name: 'Inpatient',
         label: 'Хэвтэн эмчлүүлэх'
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
               <Button loading={isLoadingGetPayInfo} type="primary" onClick={() => getInvoices(text)}>
                  Төлбөр авах
               </Button>
            );
         }
      }
   ];
   //
   const getPaymentType = async () => {
      await PaymentApi.getPaymentType().then((response) => {
         setPaymentShape(response.data.response);
      });
   };
   const beforePay = async (values) => {
      values['patientId'] = selectedPatient.id;
      values['invoiceIds'] = [];
      await PaymentApi.postPrePayment(values).then((response) => {
         if (values.isEbarimt) {
            setEbarimtData(response.data.response);
            setEbarimtModal(true);
         }
         setIsOpenBeforePaymentModal(false);
      });
   };
   //
   useEffect(() => {
      isOpenBeforePaymentModal && getPaymentType();
   }, [isOpenBeforePaymentModal]);
   useEffect(() => {
      getInformation();
   }, []);
   return (
      <div className="w-full flex flex-col">
         <div
            className="flex flex-row gap-2 justify-between p-2"
            style={{
               borderBottom: '1px solid #e5e6eb'
            }}
         >
            <PatientInformation patient={selectedPatient} handlesearch={onSearch} />
            <div className="rounded-md bg-[#F3F4F6] flex flex-col gap-2 p-3 max-w-xs">
               <div className="flex flex-row gap-2 justify-between">
                  <p className="font-bold">И-Баримт:</p>
                  <p className="font-bold">{ebarimtInfo?.leftLotteries} </p>
               </div>
               <div className="flex flex-row gap-2 justify-between">
                  <p className="font-bold">Сүүлд татсан огноо:</p>
                  <p className="font-bold">{`${dayjs(ebarimtInfo?.lastSentDate).format('YYYY/MM/DD')}`}</p>
               </div>
               <Button loading={isLoadingEbarimt} onClick={() => sendDataButton()} type="primary">
                  И-баримт илгээх
               </Button>
               <div className="h-[1px] w-full bg-black" />
               <Button type="primary" onClick={() => setOrderModal(true)}>
                  Оношилгоо шинжилгээ захиалах
               </Button>
               <Button type="primary" onClick={() => setIsOpenBeforePaymentModal(true)}>
                  Урьдчилгаа төлбөр
               </Button>
            </div>
         </div>
         <div
            className="overflow-auto bg-[#f5f6f7] p-3"
            style={{
               height: 'calc(100vh - 200px)'
            }}
         >
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
         </div>

         <Modal
            title="Урьдчилгаа төлбөр"
            open={isOpenBeforePaymentModal}
            onCancel={() => setIsOpenBeforePaymentModal(false)}
            onOk={() =>
               beforePayForm.validateFields().then((values) => {
                  beforePay(values);
               })
            }
            width={700}
            maskClosable={true}
            cancelText="Болих"
            okText="Хадгалах"
            bodyStyle={{
               backgroundColor: '#F3F4F6',
               padding: 10
            }}
         >
            <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-1">
               <PatientInformation patient={selectedPatient} handlesearch={onSearchPayment} />
               <Card
                  bordered={false}
                  title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>}
                  className="header-solid rounded-md"
                  style={{
                     margin: 12
                  }}
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
               <Card
                  bordered={false}
                  title={<h6 className="font-semibold m-0">Төлбөр</h6>}
                  className="header-solid rounded-md"
                  style={{
                     marginLeft: 12,
                     marginRight: 12,
                     marginBottom: 12
                  }}
                  bodyStyle={{
                     paddingTop: 0,
                     paddingLeft: 10,
                     paddingRight: 10,
                     paddingBottom: 10
                  }}
               >
                  <Form form={beforePayForm} layout="vertical">
                     <Form.Item name="preAmount" label="Урьдчилсан төлбөр">
                        <InputNumber
                           style={{
                              width: '100%'
                           }}
                           prefix={'₮ '}
                           formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                           parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        />
                     </Form.Item>
                     <Form.Item name="paymentTypeId" label="Төлбөрийн хэлбэр">
                        <Select
                           options={paymentShape?.map((paymentShape) => ({
                              label: paymentShape.name,
                              value: paymentShape.id
                           }))}
                        />
                     </Form.Item>
                     <Form.Item name={'isEbarimt'} label="И-Баримт өгөх эсэх">
                        <Radio.Group>
                           <Radio value={true}>Тийм</Radio>
                           <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                     </Form.Item>
                  </Form>
               </Card>
            </div>
         </Modal>
         <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)} footer={null} width="360px">
            <EbarimtPrint props={ebarimtData} isBackPayment={false} />
         </Modal>
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
            <div className="flex flex-col gap-3 p-3">
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
               {selectedPatient.id ? (
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
               ) : (
                  <Result title="Үйлчлүүлэгч сонгох" />
               )}
            </div>
         </Modal>
         <Schedule
            isOpen={isOpen}
            isOCS={false}
            incomeData={invoices}
            selectedPatient={selectedPatient}
            isClose={() => setIsOpen(false)}
            isSuccess={() => getInformation()}
         />
      </div>
   );
}
export default Invoice;
