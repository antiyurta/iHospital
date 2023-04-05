import { ClockCircleOutlined } from '@ant-design/icons';
import {
   Alert,
   Checkbox,
   Divider,
   Input,
   InputNumber,
   Modal,
   Select
} from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import {
   DefaultPost,
   DefualtGet,
   Get,
   numberToCurrency,
   openNofi
} from '../../comman';
import Appointment from '../Appointment/Schedule/Appointment';
import EbarimtPrint from '../EPayment/EbarimtPrint';
import axios from 'axios';
const { Option } = Select;
const { Search } = Input;
function Schedule({ isOpen, isOCS, incomeData, selectedPatient, isClose }) {
   // isOCS = true bol emch OSC false bol burgel tolbor awah ued
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
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
   const [customerInfo, setCustomerInfo] = useState({});
   ///
   const getDiscounts = async () => {
      const response = await Get('payment/discount', token, config);
      setDiscounts(response.data);
   };
   const getFilterPayments = (payments) => {
      setTotalAmount(payments.reduce((a, v) => (a = a + v.amount), 0));
      var noTime = [];
      var time = [];
      payments?.map((payment) => {
         if (
            payment.type === 2 &&
            payment.treatmentRequest?.slotId === null &&
            payment.treatment?.isSlot
         ) {
            time.push(payment);
         } else if (
            payment.type === 1 &&
            payment.xrayRequest?.slotId === null &&
            payment.xrayRequest?.usageType === 'OUT'
         ) {
            time.push(payment);
         } else {
            noTime.push(payment);
         }
      });
      setNoTimeRequirePayments(noTime);
      setTimeRequirePayments(time);
   };
   const onClick = (element) => {
      if (element.type === 2) {
         setAppointmentType(2);
         setIsOpenAppointment(true);
         setInvoiceData({ invoiceId: element.id, type: element.type });
      } else if (element.type === 1) {
         setAppointmentType(3);
         setIsOpenAppointment(true);
         setInvoiceData({ invoiceId: element.id, type: element.type });
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
   const check = (e) => {
      setInvoiceRequest(e);
   };
   const dd = (value, e) => {
      if (e.target.checked) {
         setSelectedAmount(selectedAmount + value.amount);
      } else {
         setSelectedAmount(selectedAmount - value.amount);
      }
   };
   const PaymentRequest = async () => {
      setPaymentConfirmLoading(true);
      if (isCustomerNo && Object.keys(customerInfo).length === 0) {
         openNofi('error', 'Алдаа', 'Байгууллага сонго');
      } else {
         if (invoiceRequest.length > 0) {
            const data = {
               invoiceIds: invoiceRequest,
               patientId: selectedPatient.id,
               discountPercentId: discountPercentRequest
            };
            if (isCustomerNo && customerNo) {
               data['customerNo'] = customerNo;
            }
            const response = await DefaultPost(
               'payment/payment',
               token,
               config,
               data
            );
            if (response) {
               setTotalAmount(0);
               isClose(false);
               setPaymentModal(false);
               setEbarimtData(response);
               setEbarimtModal(true);
            }
         } else {
            openNofi('warning', 'Сонгох', 'Аль нэг сонгох');
         }
      }
      setPaymentConfirmLoading(false);
   };
   const onSearchCustomer = async (event) => {
      setCustomerNo(event);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet(
         `ebarimt/organization/${event}`,
         token,
         conf
      );
      console.log(response);
      if (response?.response?.found) {
         openNofi(
            'success',
            'Амжиллтай',
            `Байгууллага: ${response?.response?.name}`
         );
         setCustomerInfo(response?.response);
      } else {
         openNofi('error', 'Алдаа', 'Байгууллага олдсонгүй');
         setCustomerInfo({});
      }
   };
   useEffect(() => {
      getFilterPayments(incomeData);
      getDiscounts();
   }, [incomeData]);

   useEffect(() => {
      if (isOpen) {
         setPaymentModal(isOpen);
         setIsCustomerNo(false);
         setCustomerNo(null);
         setCustomerInfo({});
      }
   }, [isOpen]);
   return (
      <>
         <Modal
            title={
               <>
                  <div className="h-6">
                     <p className="float-left">Төлбөр авах</p>
                     <p className="float-right font-extrabold">
                        Нийт төлбөр: {numberToCurrency(totalAmount)}
                     </p>
                  </div>
               </>
            }
            confirmLoading={paymentConfirmLoading}
            closable={false}
            open={paymentModal}
            width={'50%'}
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
            <div className="flex flex-wrap">
               <div className="w-full p-1">
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
                  <p className="float-right font-bold">
                     Сонгосон төлбөр: {numberToCurrency(selectedAmount)}
                  </p>
               </div>
               <div className="w-full p-1">
                  <Checkbox
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
                  </Checkbox>
               </div>
               {isDiscount && (
                  <div className="w-full p-1">
                     <label>Хөнгөлөх хувь</label>
                     <Select
                        style={{ width: '100%' }}
                        onChange={(e) => setDiscountPercentRequest(e)}
                     >
                        {discounts.map((discount, index) => {
                           return (
                              <Option key={index} value={discount.id}>
                                 {discount.name}
                              </Option>
                           );
                        })}
                     </Select>
                  </div>
               )}
               {isCustomerNo && (
                  <div className="w-full p-1">
                     <p>Байгууллагын дугаар оруулах:</p>
                     <Search
                        onSearch={onSearchCustomer}
                        placeholder="Байгууллагын РД"
                        style={{
                           width: '100%'
                        }}
                     />
                     {Object.keys(customerInfo).length > 0 && (
                        <Alert message={customerInfo.name} type="success" />
                     )}
                  </div>
               )}
               <div className="w-full p-1">
                  <Divider>Захиалсан</Divider>
                  <div className="flex flex-row">
                     <div className={isOCS ? 'w-full' : 'basis-1/2'}>
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
                                 <p className="float-right">
                                    {numberToCurrency(element.amount)}
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                     <Divider style={{ height: 'auto' }} type="vertical" />
                     {!isOCS && (
                        <div className="basis-1/2">
                           <Checkbox.Group className="w-full" onChange={check}>
                              {noTimeRequirePayments?.map((element, index) => {
                                 return (
                                    <div key={index} className="flex flex-wrap">
                                       <div className="basis-1/2">
                                          <Checkbox
                                             className="pl-1 ml-0 w-full"
                                             onChange={(e) => dd(element, e)}
                                             value={element.id}
                                          >
                                             {element.treatmentRequest?.qty ? (
                                                <p>
                                                   {element.name +
                                                      ' ' +
                                                      element.treatmentRequest
                                                         ?.qty +
                                                      'ш'}
                                                </p>
                                             ) : (
                                                <p>{element.name}</p>
                                             )}
                                          </Checkbox>
                                       </div>
                                       <div className="basis-1/2">
                                          <p className="float-right">
                                             {numberToCurrency(element.amount)}
                                          </p>
                                       </div>
                                    </div>
                                 );
                              })}
                           </Checkbox.Group>
                        </div>
                     )}
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
               />
            </div>
         </Modal>
         <Modal
            open={ebarimtModal}
            onCancel={() => setEbarimtModal(false)}
            footer={null}
            width="360px"
         >
            <EbarimtPrint props={ebarimtData} isBackPayment={false} />
         </Modal>
      </>
   );
}
export default Schedule;
