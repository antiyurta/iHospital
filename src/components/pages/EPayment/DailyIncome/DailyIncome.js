import React, { useState, useEffect } from 'react';
import { EyeOutlined, RollbackOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Card, Modal, Space, Table } from 'antd';
import dayjs from 'dayjs';
//comp
import PrintIndex from './PrintIndex';
import EbarimtPrint from '../EbarimtPrint';
import ListFilter from '@Pages/BeforeAmbulatory/Lists/Index/listFilter';
//common
import { ListPatientInfo } from '@Comman/ListInjection';
import { numberToCurrency, openNofi } from '@Comman/common';
//api
import PaymentApi from '@ApiServices/payment/payment';

function DailyIncome() {
   const [incomes, setIncomes] = useState([]);
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
      await PaymentApi.getPayment({
         params: {
            page: page,
            limit: pageSize,
            startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
            endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
         }
      }).then(({ data: { response } }) => {
         setIncomes(response.data);
         setSpinner(false);
      });
   };
   const getDiscount = async () => {
      await PaymentApi.getDiscount().then((response) => {
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
      await PaymentApi.getPaymentById(id).then((response) => {
         setEbarimtData(response.data.response);
         setEbarimtModal(true);
      });
   };
   const reload = async (id) => {
      await PaymentApi.patchPayment(id, { id: id }).then((response) => {
         if (response.status === 200) {
            openNofi('success', 'Амжиллтай', 'Дахин татах үйлдэл амжилттай');
            getDailyIncome(1, 10, start, end);
         }
      });
   };
   const getPaymentType = async () => {
      await PaymentApi.getPaymentType().then((response) => {
         setPaymentShape(response.data.response);
      });
   };
   useEffect(() => {
      getPaymentType();
      getDiscount();
   }, []);
   return (
      <div className="w-full h-screen bg-[#f5f6f7] p-3">
         <div className="flex flex-col gap-3">
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
            <ListFilter meta={false} appointmentsLength={incomes?.length || 0} getList={getDailyIncome} />
            <Card
               bordered={false}
               className="header-solid rounded-md"
               bodyStyle={{
                  padding: 8
               }}
               extra={
                  <Button type="primary" onClick={() => setPrintOneDay(true)}>
                     Өдрийн орлого
                  </Button>
               }
            >
               <Table
                  rowKey="id"
                  bordered
                  loading={spinner}
                  rowClassName={(record) => {
                     if (record.isReturn) {
                        return 'bg-red-200 hover:cursor-pointer';
                     } else {
                        return 'hover: cursor-pointer';
                     }
                  }}
                  columns={[
                     {
                        title: '№',
                        width: 50,
                        render: (_, _row, index) => index + 1
                     },
                     {
                        title: 'ТТ Огноо',
                        dataIndex: 'createdAt',
                        width: 120,
                        render: (text, row) => {
                           if (row?.customerNo) {
                              return (
                                 <div className="bg-[#5cb85c] text-white">{dayjs(text).format('YYYY/MM/DD HH:mm')}</div>
                              );
                           } else {
                              return (
                                 <div className="bg-[#f0ad4e] text-white">{dayjs(text).format('YYYY/MM/DD HH:mm')}</div>
                              );
                           }
                        }
                     },
                     {
                        title: 'Үйлчлүүлэгч',
                        dataIndex: 'patient',
                        render: (patient) => <ListPatientInfo patientData={patient} />
                     },
                     {
                        title: 'Нийт төлбөр',
                        dataIndex: 'plusAmount',
                        render: (text, row) => {
                           if (row.status != 'pre') {
                              return numberToCurrency(text);
                           }
                        }
                     },
                     {
                        width: 150,
                        title: 'Хөнгөлөлтийн утга',
                        dataIndex: 'discountPercentId',
                        render: (text) => <p className="m-2 text-black">{checkDiscount(text)}</p>
                     },
                     {
                        title: 'Төлсөн урьдчилгаа',
                        width: 150,
                        dataIndex: 'preAmount',
                        render: (text) => numberToCurrency(text)
                     },
                     {
                        title: 'Төлсөн дүн',
                        dataIndex: 'paidAmount',
                        render: (text) => numberToCurrency(text)
                     },
                     {
                        title: 'Даатгал дүн',
                        dataIndex: 'insuranceAmount',
                        render: (text) => numberToCurrency(text)
                     },
                     {
                        title: 'Төлбөрийн хэлбэр',
                        dataIndex: 'paymentTypeId',
                        render: (text) => checkPaymentShape(text)
                     },
                     {
                        title: 'Ажилтны нэр',
                        dataIndex: 'createdEmployeeName'
                     },
                     {
                        title: 'Үйлдэл',
                        dataIndex: 'id',
                        render: (text, row) => (
                           <Space>
                              <Button
                                 type="primary"
                                 onClick={() => viewModal(text, false)}
                                 title="Харах"
                                 icon={<EyeOutlined />}
                              />
                              <Button
                                 type="dashed"
                                 disabled={row.isEbarimtSend}
                                 onClick={() => {
                                    if (row.isEbarimtSend) {
                                       Modal.error({
                                          okText: 'За',
                                          content: 'Илгээгдсэн баримт дахин татах боломжгүй'
                                       });
                                    } else {
                                       reload(text);
                                    }
                                 }}
                                 title={
                                    row.isEbarimtSend ? 'Илгээгдсэн баримт дахин татах боломжгүй' : 'E-barimt ТАТАХ'
                                 }
                                 icon={<DownloadOutlined />}
                              />
                              <Button
                                 danger
                                 disabled={row.isEbarimtSend}
                                 onClick={() => {
                                    if (row.isEbarimtSend) {
                                       Modal.error({
                                          okText: 'За',
                                          content: 'Илгээгдсэн баримт буцаах боломжгүй'
                                       });
                                    } else {
                                       viewModal(text, true);
                                    }
                                 }}
                                 title={row.isEbarimtSend ? 'Илгээгдсэн баримт буцаах боломжгүй' : 'Буцаалт'}
                                 icon={<RollbackOutlined />}
                              />
                           </Space>
                        )
                     }
                  ]}
                  scroll={{
                     y: 650
                  }}
                  dataSource={incomes}
                  pagination={false}
                  summary={(pageData) => (
                     <Table.Summary fixed>
                        <Table.Summary.Row>
                           <Table.Summary.Cell index={0} colSpan={2}>
                              <p className="font-bold text-center">{pageData?.length}</p>
                           </Table.Summary.Cell>
                           <Table.Summary.Cell index={1}>
                              <p className="font-bold text-end">Нийт</p>
                           </Table.Summary.Cell>
                           <Table.Summary.Cell index={2}>
                              <p className="font-bold text-center">
                                 {numberToCurrency(
                                    pageData.reduce((total, current) => {
                                       if (current.status != 'pre') {
                                          return total + current.plusAmount;
                                       }
                                       return total + 0;
                                    }, 0)
                                 )}
                              </p>
                           </Table.Summary.Cell>
                           <Table.Summary.Cell index={3} />
                           <Table.Summary.Cell index={4} />
                           <Table.Summary.Cell index={5}>
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
                           </Table.Summary.Cell>
                           <Table.Summary.Cell index={6}>
                              <p
                                 style={{
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                 }}
                              >
                                 {numberToCurrency(
                                    pageData.reduce((total, current) => {
                                       return total + current.totalAmount;
                                    }, 0)
                                 )}
                              </p>
                           </Table.Summary.Cell>
                           <Table.Summary.Cell index={7} colSpan={4} />
                        </Table.Summary.Row>
                     </Table.Summary>
                  )}
               />
            </Card>
         </div>
         <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)} footer={null} width="360px">
            <EbarimtPrint props={ebarimtData} isBackPayment={isBackPayment} />
         </Modal>
         <Modal
            title={'Өдрийн орлого'}
            open={printOneDay}
            footer={null}
            width={'1200px'}
            onCancel={() => setPrintOneDay(false)}
            destroyOnClose
         >
            <PrintIndex />
         </Modal>
      </div>
   );
}
export default DailyIncome;
