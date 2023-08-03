import { EyeOutlined, RollbackOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal } from 'antd';
import moment from 'moment';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, numberToCurrency, Patch, ScrollRef } from '../../../comman';
import EbarimtPrint from '../EbarimtPrint';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import PrintIndex from './PrintIndex';

import NewCard from '../../../Card/Card';
import { NewColumn, NewTable } from '../../../Table/Table';

const { RangePicker } = DatePicker;
function DailyIncome() {
   const token = useSelector(selectCurrentToken);
   const scrollRef = useRef();
   const config = {
      headers: {},
      params: {}
   };
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
   const [totalAmount, setTotalAmount] = useState(Number);
   const [discount, setDiscount] = useState([]);
   const getDailyIncome = async (page, pageSize, start, end) => {
      setSpinner(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      setStart(start);
      setEnd(end);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      const response = await Get('payment/payment', token, conf);
      setIncomes(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   const getDiscount = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('payment/discount', token, conf);
      setDiscount(response.data);
   };
   const checkDiscount = (id) => {
      return discount.find((e) => e.id === id)?.name;
   };
   const viewModal = async (id, isBack) => {
      setIsBackPayment(isBack);
      const response = await Get('payment/payment/' + id, token, config);
      setEbarimtData(response);
      setEbarimtModal(true);
   };
   const reload = async (id) => {
      const response = await Patch('payment/payment/' + id, token, config, {
         id: id
      });
      if (response === 200) {
         getDailyIncome(1, 10, start, end);
      }
   };
   const incomeColumns = [
      {
         title: 'Овог',
         dataIndex: ['patient', 'lastName']
      },
      {
         title: 'Нэр',
         dataIndex: ['patient', 'firstName']
      },
      {
         title: 'ТТ Огноо',
         render: (_, row) => {
            return moment(row.createdAt).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Хөнгөлөлт',
         dataIndex: 'discountPercentId',
         render: (text) => {
            return checkDiscount(text);
         }
      },
      {
         title: 'Төлсөн дүн',
         render: (_, row) => {
            return numberToCurrency(row.totalAmount);
         }
      },
      {
         title: 'Ажилтны нэр',
         dataIndex: 'createdEmployeeName'
      },
      {
         title: 'Харах',
         width: 50,
         render: (_, row) => {
            return (
               <Button type="link" onClick={() => viewModal(row.id, false)} title="Харах" style={{ paddingRight: 5 }}>
                  <EyeOutlined />
               </Button>
            );
         }
      },
      {
         title: 'ДАХИН ТАТАХ',
         width: 50,
         render: (_, row) => {
            return (
               <Button type="link" onClick={() => reload(row.id)} title="ТАТАХ" style={{ paddingRight: 5 }}>
                  <DownloadOutlined />
               </Button>
            );
         }
      },
      {
         title: 'Буцаалт',
         render: (_, row) => {
            return (
               <Button
                  type="link"
                  onClick={() => viewModal(row.id, true)}
                  title="Харах"
                  style={{ paddingRight: 5, color: 'red' }}
               >
                  <RollbackOutlined />
               </Button>
            );
         }
      }
   ];
   useEffect(() => {
      ScrollRef(scrollRef);
      getDailyIncome(1, 10, today, today);
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
                        <span className="font-medium mx-1">Байгууллагаар</span>
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
                        if (row?.merchantId != null) {
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
                     dataIndex={'totalAmount'}
                     title="Нийт дүн"
                     render={(text) => {
                        return numberToCurrency(text);
                     }}
                  />
                  <NewColumn
                     width={40}
                     dataIndex={'discountPercentId'}
                     title="Хөнгөлөлт"
                     render={(text) => {
                        return checkDiscount(text);
                     }}
                  />
                  <NewColumn
                     dataIndex={'paidAmount'}
                     title="Төлсөн дүн"
                     render={(text) => {
                        return numberToCurrency(text);
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
            width={'800px'}
            onCancel={() => setPrintOneDay(false)}
         >
            <PrintIndex />
         </Modal>
      </>
   );
}
export default DailyIncome;
