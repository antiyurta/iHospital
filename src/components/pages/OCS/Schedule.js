import React, { useState, useEffect } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox, Divider, Input, Modal, Radio, Select, Table } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentIsAfterPay } from '../../../features/authReducer';
import { numberToCurrency, openNofi } from '../../common';
import dayjs from 'dayjs';
import Appointment from '../Appointment/Index';
import EbarimtPrint from '../EPayment/EbarimtPrint';

import PaymentService from '../../../services/payment/payment';
import EbarimtService from '../../../services/ebarimt/ebarimt';

const { Search } = Input;
function Schedule({ isOpen, isOCS, incomeData, selectedPatient, isClose, isSuccess }) {
   // isOCS = true bol emch OSC false bol burgel tolbor awah ued
   const hospitalIsAfterPay = useSelector(selectCurrentIsAfterPay);
   const [noTimeRequirePayments, setNoTimeRequirePayments] = useState([]);
   const [timeRequirePayments, setTimeRequirePayments] = useState([]);
   //
   const [appointmentType, setAppointmentType] = useState(Number);
   const [invoiceData, setInvoiceData] = useState({});
   const [isOpenAppointment, setIsOpenAppointment] = useState(false);
   //
   const [invoiceRequest, setInvoiceRequest] = useState([]);
   const [selectedAmount, setSelectedAmount] = useState(0);
   const [paymentConfirmLoading, setPaymentConfirmLoading] = useState(false);
   const [paymentModal, setPaymentModal] = useState(false);
   const [totalAmount, setTotalAmount] = useState(0);
   const [isDiscount, setIsDiscount] = useState(false);
   const [discountPercentRequest, setDiscountPercentRequest] = useState(null);
   const [discounts, setDiscounts] = useState([]);
   const [ebarimtModal, setEbarimtModal] = useState(false);
   const [ebarimtData, setEbarimtData] = useState({});
   ///
   const [isCustomerNo, setIsCustomerNo] = useState(false);
   const [customerNo, setCustomerNo] = useState('');
   const [customerTin, setCustomerTin] = useState('');
   ///
   const [paymentShape, setPaymentShape] = useState([]);
   const [currentType, setCurrentType] = useState('B2C_RECEIPT');
   const [selectedPaymentShape, setSelectedPaymentShape] = useState(null);
   // hongololt
   const [prePayments, setPrePayments] = useState([]);
   const [preTotalAmount, setPreTotalAmount] = useState(Number);
   const [prePaymentId, setPrePaymentId] = useState(Number);
   //
   const getDiscounts = async () => {
      await PaymentService.getDiscount().then(({ data: { response } }) => {
         setDiscounts(response.data);
      });
   };
   const getFilterInvoices = (invoices) => {
      setTotalAmount(invoices?.reduce((totalAmount, invoice) => (totalAmount += invoice.amount), 0));
      var noTime = [];
      var time = [];
      invoices?.map((invoice) => {
         if (hospitalIsAfterPay) {
            noTime.push(invoice);
         } else {
            console.log('end', invoice);
            if (invoice.type === 2 && invoice.treatmentRequest?.slotId === null && invoice.treatment?.isSlot) {
               time.push(invoice);
            } else if (
               invoice.type === 1 &&
               invoice.xrayRequest?.slotId === null &&
               invoice.xrayRequest?.usageType === 'OUT'
            ) {
               console.log('end orj irne');
               time.push(invoice);
            } else {
               noTime.push(invoice);
            }
         }
      });
      setNoTimeRequirePayments(noTime);
      setTimeRequirePayments(time);
   };
   const onClick = (element) => {
      if (element.type === 2) {
         setAppointmentType(2);
         setIsOpenAppointment(true);
         setInvoiceData({ invoiceId: element.id, type: element.type, isCheckInsurance: false });
      } else if (element.type === 1) {
         setAppointmentType(3);
         setIsOpenAppointment(true);
         setInvoiceData({ invoiceId: element.id, type: element.type, isCheckInsurance: false });
      }
   };
   const transfer = (id) => {
      var arr = [...timeRequirePayments];
      const filtered = arr.find((e) => e.id === id);
      setNoTimeRequirePayments([...noTimeRequirePayments, filtered]);
      arr.splice(
         arr.findIndex((e) => e.id === id),
         1
      );
      setTimeRequirePayments(arr);
   };
   const callBackClick = (state, id) => {
      if (state) {
         setIsOpenAppointment(false);
         transfer(id);
      }
   };
   const PaymentRequest = async () => {
      setPaymentConfirmLoading(true);
      if (currentType == 'B2C_RECEIPT' && customerTin !== '') {
         openNofi('error', 'Алдаа', 'Байгууллага сонго');
      } else {
         if (selectedPaymentShape === null) {
            openNofi('error', 'Алдаа', 'Төлбөрийн хэлбэр сонгох');
         } else {
            if (invoiceRequest.length > 0) {
               const data = {
                  type: currentType,
                  customerTin,
                  invoiceIds: invoiceRequest.map((invoice) => invoice.id),
                  patientId: selectedPatient.id,
                  discountPercentId: discountPercentRequest,
                  paymentTypeId: selectedPaymentShape,
                  prePaymentId: prePaymentId
               };
               if (isCustomerNo && customerNo) {
                  data['customerNo'] = customerNo;
               }
               await PaymentService.postPayment(data)
                  .then((response) => {
                     if (response.data.success) {
                        isSuccess(true);
                        setTotalAmount(0);
                        isClose(false);
                        setPaymentModal(false);
                        setEbarimtData(response.data.response);
                        setEbarimtModal(true);
                     }
                  })
                  .catch((error) => {
                     openNofi('error', 'Алдаа', 'И-баримт');
                  });
            } else {
               openNofi('warning', 'Сонгох', 'Аль нэг сонгох');
            }
         }
      }
      setPaymentConfirmLoading(false);
   };
   const onSearchCustomer = async (event) => {
      setCustomerNo(event);
      await EbarimtService.getOrganizationInfo(event).then((response) => {
         if (response.status === 200) {
            openNofi('success', 'Амжиллтай', `Худалдан авагчийн ТТД: ${response?.data?.response?.data}`);
            setCustomerTin(response?.data?.response?.data);
         } else {
            openNofi('error', 'Алдаа', 'Худалдан авагчийн ТТД олдсонгүй');
            setCustomerTin('');
         }
      });
   };
   // nemelterer select table
   const rowSelection = {
      onChange: (_selectedRowKeys, selectedRows) => {
         setInvoiceRequest(selectedRows);
         var tAmount = 0;
         selectedRows?.map((item) => {
            tAmount += item.amount;
         });
         setSelectedAmount(tAmount);
      }
   };
   const rowSelectionPre = {
      type: 'radio',
      onChange: (_selectedRowKeys, selectedRows) => {
         setPrePaymentId(selectedRows[0].id);
         setPreTotalAmount(selectedRows[0].preAmount);
      }
   };
   // nemelterer select table
   // udcilgaa
   const getPaymentType = async () => {
      await PaymentService.getPaymentType().then((response) => {
         setPaymentShape(response.data.response);
      });
   };
   const getPrePayments = async () => {
      await PaymentService.getPayment({
         params: {
            patientId: selectedPatient.id,
            isInclude: false
         }
      }).then((response) => {
         setPrePayments(response.data.response.data);
      });
   };
   //
   useEffect(() => {
      if (incomeData) {
         getFilterInvoices(incomeData);
      }
      getDiscounts();
      getPaymentType();
   }, [incomeData]);
   useEffect(() => {
      selectedPatient && getPrePayments();
   }, [selectedPatient]);
   useEffect(() => {
      if (isOpen) {
         setPaymentModal(isOpen);
         setIsCustomerNo(false);
         setCustomerNo(null);
         setCustomerTin('');
      }
   }, [isOpen]);
   return (
      <>
         <Modal
            title={
               <>
                  <div className="h-6">
                     <p className="float-left">Төлбөр авах</p>
                     <p className="float-right font-extrabold">Нийт төлбөр: {numberToCurrency(totalAmount)}</p>
                  </div>
               </>
            }
            confirmLoading={paymentConfirmLoading}
            closable={false}
            open={paymentModal}
            width={'80%'}
            onOk={() => {
               !isOCS ? PaymentRequest() : setPaymentModal(false);
            }}
            onCancel={() => {
               setPaymentModal(false);
               isClose(false);
            }}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <div className="flex flex-col gap-3">
               <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flex flex-col gap-3">
                           <Checkbox
                              onChange={(e) => {
                                 setIsDiscount(e.target.checked);
                                 if (!e.target.checked) {
                                    setDiscountPercentRequest(null);
                                 }
                              }}
                           >
                              Хөнгөлөлтэй эсэх
                           </Checkbox>
                           {isDiscount && (
                              <div className="w-full p-1">
                                 <label>Хөнгөлөх хувь</label>
                                 <Select
                                    style={{ width: '100%' }}
                                    onChange={(e) => setDiscountPercentRequest(e)}
                                    options={discounts.map((discount) => ({
                                       label: discount.name,
                                       value: discount.id
                                    }))}
                                 />
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flex flex-col gap-3">
                           <Radio.Group
                              optionType="button"
                              value={currentType}
                              onChange={(e) => setCurrentType(e.target.value)}
                              options={[
                                 { label: 'Хувь хүн', value: 'B2C_RECEIPT' },
                                 { label: 'Байгууллага', value: 'B2B_RECEIPT' }
                              ]}
                           ></Radio.Group>
                           {/* <Checkbox
                              checked={isCustomerNo}
                              onChange={(e) => {
                                 setIsCustomerNo(e.target.checked);
                                 if (!e.target.checked) {
                                    setCustomerNo(null);
                                    setCustomerInfo({});
                                 }
                              }}
                           >
                              Байгууллагаар бол:
                           </Checkbox> */}
                           {currentType == 'B2B_RECEIPT' && (
                              <div className="w-full p-1">
                                 <p>Байгууллагын дугаар оруулах</p>
                                 <Search
                                    onSearch={onSearchCustomer}
                                    placeholder="Байгууллагын РД"
                                    style={{
                                       background: 'white',
                                       width: '100%'
                                    }}
                                 />
                                 {customerTin !== '' && (
                                    <Alert message={`Худалдан авагчийн ТТД: ${customerTin}`} type="success" />
                                 )}
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
               <Divider className="m-0">Захиалсан</Divider>
               <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flex flex-col gap-3">
                           <p className="font-bold">Цаг захиалах шаардлагатай</p>
                           {timeRequirePayments.map((element, index) => {
                              return (
                                 <div key={index} className="flow-root">
                                    <a
                                       onClick={() => {
                                          onClick(element);
                                       }}
                                       className="float-left"
                                       style={{ color: 'green' }}
                                    >
                                       <ClockCircleOutlined />
                                       {element.name}
                                    </a>
                                    <p className="float-right">{numberToCurrency(element.amount)}</p>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                        <div className="p-3">
                           <div className="flex flex-col gap-3">
                              <p className="float-right font-bold">
                                 Урьдчилан өгсөн төлбөр : {numberToCurrency(preTotalAmount)}
                              </p>
                              <Table
                                 rowKey="id"
                                 columns={[
                                    {
                                       title: 'Огноо',
                                       dataIndex: 'createdAt',
                                       render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD')
                                    },
                                    {
                                       title: 'Төлсөн дүн',
                                       dataIndex: 'preAmount',
                                       render: (preAmount) => numberToCurrency(preAmount)
                                    }
                                 ]}
                                 dataSource={prePayments}
                                 rowSelection={rowSelectionPre}
                                 pagination={false}
                              />
                           </div>
                        </div>
                     </div>
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                        <div className="p-3">
                           <div className="flex flex-col gap-3">
                              <p className="float-right font-bold">
                                 Сонгосон төлбөр: {numberToCurrency(selectedAmount)}
                              </p>
                              <Table
                                 rowKey={'id'}
                                 bordered
                                 rowSelection={rowSelection}
                                 scroll={{
                                    y: 500
                                 }}
                                 columns={[
                                    {
                                       title: 'Үйлчилгээ',
                                       render: (_, record) => {
                                          if (record.treatmentRequest?.qty) {
                                             return (
                                                <p className="text-black">
                                                   {record.name + ' ' + record.treatmentRequest?.qty + 'ш'}
                                                </p>
                                             );
                                          } else {
                                             return <p className="text-black">{record.name}</p>;
                                          }
                                       }
                                       // service name iig name bolgow 2023/11/10
                                       // dataIndex: 'name'
                                    },
                                    {
                                       title: 'Иргэн төлөх',
                                       align: 'right',
                                       dataIndex: 'amount',
                                       width: 150,
                                       render: (amount) => numberToCurrency(amount)
                                    },
                                    {
                                       title: 'Даатгал төлөх',
                                       align: 'right',
                                       dataIndex: 'hicsAmount',
                                       width: 150,
                                       render: (text) => numberToCurrency(text)
                                    }
                                 ]}
                                 dataSource={noTimeRequirePayments}
                                 pagination={false}
                              />
                           </div>
                        </div>
                     </div>
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                        <div className="p-3">
                           <div className="flex justify-between">
                              <p className="float-right font-bold w-full">Төлбөрийн хэлбэр</p>
                              <Select
                                 className="w-full"
                                 onChange={(e) => setSelectedPaymentShape(e)}
                                 options={paymentShape?.map((shape) => ({
                                    label: shape.name,
                                    value: shape.id
                                 }))}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
         <Modal
            width={'85%'}
            open={isOpenAppointment}
            onCancel={() => setIsOpenAppointment(false)}
            footer={null}
            bodyStyle={{ backgroundColor: 'rgb(248 250 252)', padding: 10 }}
         >
            <div className="pt-10">
               <Appointment
                  selectedPatient={selectedPatient}
                  type={appointmentType}
                  invoiceData={invoiceData}
                  handleClick={callBackClick}
                  isExtraGrud={{
                     isCreate: true,
                     isChange: false,
                     isDelete: false
                  }}
               />
            </div>
         </Modal>
         <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)} footer={null} width="360px">
            <EbarimtPrint props={ebarimtData} isBackPayment={false} />
         </Modal>
      </>
   );
}
export default Schedule;
