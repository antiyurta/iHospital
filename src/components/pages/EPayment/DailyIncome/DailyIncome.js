import React, { useState, useEffect } from 'react';
import { EyeOutlined, RollbackOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal } from 'antd';
import moment from 'moment';
import { numberToCurrency, openNofi } from '../../../comman';
import EbarimtPrint from '../EbarimtPrint';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import PrintIndex from './PrintIndex';

import PaymentServices from '../../../../services/payment/payment';
import NewCard from '../../../Card/Card';
import { NewColumn, NewSummaryCell, NewSummaryRow, NewTable } from '../../../Table/Table';

const { RangePicker } = DatePicker;
function DailyIncome() {
   const today = new Date();
   const [incomes, setIncomes] = useState([]);
   const [meta, setMeta] = useState({});
   const [spinner, setSpinner] = useState(false);
   const [ebarimtModal, setEbarimtModal] = useState(false);
   const [printOneDay, setPrintOneDay] = useState(false);
   const [ebarimtData, setEbarimtData] = useState({});
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [isBackPayment, setIsBackPayment] = useState(false);
   const [discount, setDiscount] = useState([]);
   const [paymentShape, setPaymentShape] = useState([]);
   const getDailyIncome = async (page, pageSize, start, end) => {
      setSpinner(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      setStart(start);
      setEnd(end);
      await PaymentServices.getPayment({
         params: {
            page: page,
            limit: pageSize,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      }).then((response) => {
         const data = response.data.response.data;
         setIncomes(data);
         setMeta(response.data.response.meta);
         setSpinner(false);
      });
   };
   const getDiscount = async () => {
      await PaymentServices.getDiscount().then((response) => {
         setDiscount(response.data.response.data);
      });
   };
   const checkDiscount = (id) => {
      return discount.find((e) => e.id === id)?.name;
   };
   const checkPaymentShape = (id) => {
      return paymentShape.find((e) => e.id === id)?.name;
   };
   const viewModal = async (id, isBack) => {
      setIsBackPayment(isBack);
      await PaymentServices.getPaymentById(id).then((response) => {
         setEbarimtData(response.data.response);
         setEbarimtModal(true);
      });
   };
   const reload = async (id) => {
      await PaymentServices.patchPayment(id, { id: id }).then((response) => {
         if (response.status === 200) {
            openNofi('success', 'Амжиллтай', 'Дахин татах үйлдэл амжилттай');
            getDailyIncome(1, 10, start, end);
         }
      });
   };
   const getPaymentType = async () => {
      await PaymentServices.getPaymentType().then((response) => {
         setPaymentShape(response.data.response);
      });
   };
   useEffect(() => {
      getDailyIncome(1, 10, today, today);
      getPaymentType();
      getDiscount();
   }, []);
   return (
      <>
         <NewCard
            title="Өдрийн орлогийн тайлан"
            extra={
               <>
                  <Button type="primary" onClick={() => setPrintOneDay(true)}>
                     Өдрийн орлого
                  </Button>
               </>
            }
         >
            <div className="flex flex-col gap-3">
               <div className="w-1/3 md:w-1/2">
                  <RangePicker
                     onChange={(e) => {
                        if (e != null) {
                           getDailyIncome(1, 10, e[0], e[1]);
                        }
                     }}
                     locale={mnMN}
                  />
               </div>
               <div className="w-full">
                  <div className="flex float-left">
                     <div
                        className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                        role="alert"
                     >
                        <span className="font-medium mx-1">Хувь хүн</span>
                     </div>
                     <div
                        className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                        role="alert"
                     >
                        <span className="font-medium mx-1">Бизнес эрхлэгч</span>
                     </div>
                     <div
                        className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                        role="alert"
                     >
                        <span className="font-medium mx-1">Буцаалт хийгдсэн</span>
                     </div>
                  </div>
               </div>
               <NewTable
                  prop={{
                     rowKey: 'id',
                     bordered: true,
                     dataSource: incomes,
                     rowClassName: (record) => {
                        if (record.isReturn) {
                           return 'bg-red-200 hover:cursor-pointer';
                        } else {
                           return 'hover: cursor-pointer';
                        }
                     },
                     summary: (pageData) => {
                        return (
                           <NewSummaryRow>
                              <NewSummaryCell index={0} colSpan={4}>
                                 <p
                                    style={{
                                       fontWeight: 'bold',
                                       textAlign: 'end'
                                    }}
                                 >
                                    Нийт
                                 </p>
                              </NewSummaryCell>
                              <NewSummaryCell index={1}>
                                 <p
                                    style={{
                                       fontWeight: 'bold',
                                       textAlign: 'center'
                                    }}
                                 >
                                    {numberToCurrency(
                                       pageData.reduce((total, current) => {
                                          if (current.status != 'pre') {
                                             return total + current.plusAmount;
                                          }
                                          return total + 0;
                                       }, 0)
                                    )}
                                 </p>
                              </NewSummaryCell>
                              <NewSummaryCell index={2} />
                              <NewSummaryCell index={3} />
                              <NewSummaryCell index={4}>
                                 <p
                                    style={{
                                       fontWeight: 'bold',
                                       textAlign: 'center'
                                    }}
                                 >
                                    {numberToCurrency(
                                       pageData.reduce((total, current) => {
                                          return total + current.paidAmount;
                                       }, 0)
                                    )}
                                 </p>
                              </NewSummaryCell>
                              <NewSummaryCell index={5} colSpan={5} />
                           </NewSummaryRow>
                        );
                     }
                  }}
                  meta={meta}
                  onChange={(page, pageSize) => getDailyIncome(page, pageSize, start, end)}
                  isLoading={spinner}
                  isPagination={true}
               >
                  <NewColumn
                     dataIndex={'createdAt'}
                     title="ТТ Огноо"
                     width={120}
                     render={(text, row) => {
                        if (row?.customerNo) {
                           return (
                              <div className="bg-[#5cb85c] text-white">{moment(text).format('YYYY/MM/DD HH:mm')}</div>
                           );
                        } else {
                           return (
                              <div className="bg-[#f0ad4e] text-white">{moment(text).format('YYYY/MM/DD HH:mm')}</div>
                           );
                        }
                     }}
                  />
                  <NewColumn dataIndex={['patient', 'lastName']} title="Овог" />
                  <NewColumn dataIndex={['patient', 'firstName']} title="Нэр" />
                  <NewColumn
                     dataIndex={'plusAmount'}
                     title="Нийт төлбөр"
                     render={(text, row) => {
                        if (row.status != 'pre') {
                           return numberToCurrency(text);
                        }
                     }}
                  />
                  <NewColumn
                     width={40}
                     dataIndex={'discountPercentId'}
                     title="Хөнгөлөлтын утга"
                     render={(text) => {
                        return checkDiscount(text);
                     }}
                  />
                  <NewColumn
                     width={40}
                     title="Төлсөн урьдчилгаа"
                     dataIndex={'preAmount'}
                     render={(text) => {
                        return numberToCurrency(text);
                     }}
                  />
                  <NewColumn
                     dataIndex={'paidAmount'}
                     title="Төлсөн дүн"
                     render={(text) => {
                        return numberToCurrency(text);
                     }}
                  />
                  <NewColumn
                     width={40}
                     title="Төлбөрийн хэлбэр"
                     dataIndex={'paymentTypeId'}
                     render={(text) => {
                        return checkPaymentShape(text);
                     }}
                  />
                  <NewColumn dataIndex={'createdEmployeeName'} title="Ажилтны нэр" />
                  <NewColumn
                     dataIndex={'id'}
                     title="Харах"
                     width={50}
                     render={(text) => {
                        return (
                           <Button
                              type="link"
                              onClick={() => viewModal(text, false)}
                              title="Харах"
                              style={{ paddingRight: 5 }}
                           >
                              <EyeOutlined />
                           </Button>
                        );
                     }}
                  />
                  <NewColumn
                     dataIndex={'id'}
                     title="Дахин татах"
                     width={50}
                     render={(text) => {
                        return (
                           <Button type="link" onClick={() => reload(text)} title="ТАТАХ" style={{ paddingRight: 5 }}>
                              <DownloadOutlined />
                           </Button>
                        );
                     }}
                  />
                  <NewColumn
                     dataIndex={'id'}
                     title="Буцаалт"
                     width={50}
                     render={(text) => {
                        return (
                           <Button
                              type="link"
                              onClick={() => viewModal(text, true)}
                              title="Харах"
                              style={{ paddingRight: 5, color: 'red' }}
                           >
                              <RollbackOutlined />
                           </Button>
                        );
                     }}
                  />
               </NewTable>
            </div>
         </NewCard>
         <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)} footer={null} width="360px">
            <EbarimtPrint props={ebarimtData} isBackPayment={isBackPayment} />
         </Modal>
         <Modal
            title={'Өдрийн орлого'}
            open={printOneDay}
            footer={null}
            width={'1200px'}
            onCancel={() => setPrintOneDay(false)}
         >
            <PrintIndex />
         </Modal>
      </>
   );
}
export default DailyIncome;
