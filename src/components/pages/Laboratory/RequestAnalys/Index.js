import {
   BarcodeOutlined,
   ReloadOutlined,
   SearchOutlined
} from '@ant-design/icons';
import {
   Button,
   Card,
   DatePicker,
   Empty,
   Form,
   Input,
   Segmented,
   Space,
   Table,
   Tag
} from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Barcode from 'react-barcode';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefaultPatch, Get } from '../../../comman';
import examinationProcess from '../examinationProcess.json';

const { RangePicker } = DatePicker;
function Index() {
   const today = new Date();
   const token = useSelector(selectCurrentToken);
   const barcodeRef = useRef();
   const [searchForm] = Form.useForm();
   const [statusFilter, setStatusFilter] = useState(0);
   const [requestList, setRequestList] = useState([]);
   const [requestListMeta, setRequestListMeta] = useState({});
   const [requestListLoading, setRequestListLoading] = useState(false);
   const [requestDetailList, setRequestDetailList] = useState([]);
   const [requestDetailListMeta, setRequestDetailListMeta] = useState({});
   const [requestDetailListLoading, setRequestDetailListLoading] =
      useState(false);
   const [Dstart, setStart] = useState('');
   const [Dend, setEnd] = useState('');
   const [barcodeState, setBarCodeState] = useState(false);
   const [selectedRequest, setSelectedRequest] = useState({});
   const [selectedRequestDtl, setSelectedRequestDtl] = useState([]);
   const [barcodeLoading, setBarcodeLoading] = useState(false);
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   // columns
   const requestListColumn = [
      {
         title: '№',
         render: (_, record, index) => {
            return (
               requestListMeta.page * requestListMeta.limit -
               (requestListMeta.limit - index - 1)
            );
         }
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
         title: 'Регистр',
         dataIndex: 'registerNumber'
      },
      {
         title: 'Огноо',
         dataIndex: 'erequests_requestDate',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Төлөв',
         render: (_, row) => {
            if (row.erequests_isCito) {
               return (
                  <p className="bg-[#dd4b39] text-white">
                     {row.erequests_usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}
                  </p>
               );
            } else {
               return (
                  <p className="bg-[#5cb85c] text-white">
                     {row.erequests_usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}
                  </p>
               );
            }
         }
      }
   ];
   const requestDetailListColumn = [
      {
         title: '№',
         render: (_, row, rowIndex) => {
            return rowIndex + 1;
         }
      },
      {
         title: 'Шинжилгээ',
         dataIndex: ['examinations', 'name'],
         key: 'examination',
         className: 'whitespace-pre-line'
      },
      {
         title: 'Баркод',
         dataIndex: 'barCode'
      },
      {
         title: 'Төлөв',
         dataIndex: 'examinationProcess',
         render: (text) => {
            if (text === 0) {
               return <Tag color="magenta">Захиалга өгсөн</Tag>;
            } else if (text === 1) {
               return <Tag color="purple">Сорьц авсан</Tag>;
            } else if (text === 2) {
               return <Tag color="green">Шинжилсэн</Tag>;
            } else if (text === 3) {
               return <Tag color="volcano">Хариу гарсан</Tag>;
            } else if (text === 4) {
               return <Tag color="cyan">Хариу баталгаажсан</Tag>;
            }
         }
      },
      {
         title: 'Төхөөрөмж',
         dataIndex: ['examinations', 'types', 'name']
      },
      {
         title: 'Үйлдэл',
         key: 'action',
         render: (_, record) => (
            <Space size="small">
               <Tag
                  color="processing"
                  onClick={() => {
                     //  returnChange(record);
                  }}
                  className="cursor-pointer"
               >
                  Буцаах
               </Tag>
            </Space>
         )
      }
   ];
   // columns end
   const getErequest = async (page, pageSize, start, end, values, process) => {
      setRequestListLoading(true);
      setStatusFilter(process);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            examinationProcess: process,
            firstName: values?.firstName ? values?.firstName : null,
            registerNumber: values?.registerNumber
               ? values.registerNumber
               : null
         }
      };
      if (start != null && end != null) {
         start = moment(start).set({ hour: 0, minute: 0, second: 0 });
         end = moment(end).set({ hour: 23, minute: 59, second: 59 });
         conf.params.startDate = moment(start).format('YYYY-MM-DD HH:mm');
         conf.params.endDate = moment(end).format('YYYY-MM-DD HH:mm');
         setStart(start);
         setEnd(end);
      } else if (!values.registerNumber && !values.firstName && !values.date) {
         conf.params.startDate = moment(today).format('YYYY-MM-DD HH:mm');
         conf.params.endDate = moment(today).format('YYYY-MM-DD HH:mm');
      }
      const response = await Get('service/erequest/eprocess', token, conf);
      setRequestList(response.data);
      setRequestListMeta(response.meta);
      setRequestListLoading(false);
   };
   const getErequestDtl = async (id) => {
      setRequestDetailListLoading(true);
      const conf = {
         headers: {},
         params: {
            examinationRequestId: id,
            examinationProcess: statusFilter
         }
      };
      //   setBarcodeLoading(false);
      //   setRequestDetailList(row.examinationRequestDetials);
      //   setSelectedRequest(row);
      //   setBarCodeState(false);
      const response = await Get(
         'service/examinationRequestDetail',
         token,
         conf
      );
      setSelectedRequestDtl(response.data);
      setRequestDetailListLoading(false);
   };
   const rowSelection = {
      selectedRowKeys: selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
         if (selectedRows.length > 0) {
            setBarCodeState(true);
            setSelectedRequestDtl(selectedRows);
         } else {
            setBarCodeState(false);
         }
         setSelectedRowKeys(selectedRowKeys);
      }
   };
   const handlePrintBarCode = useReactToPrint({
      content: () => barcodeRef.current,
      onBeforePrint: () => {
         setBarcodeLoading(true);
      },
      onAfterPrint: () => {
         setBarCodeState(false);
         setBarcodeLoading(false);
         const conf = {
            headers: {},
            params: {}
         };
         selectedRequestDtl.map((dtl) => {
            if (dtl.examinationProcess === 0) {
               DefaultPatch(
                  'service/examinationRequestDetail/' + dtl.id,
                  token,
                  conf,
                  {
                     examinationProcess: 1
                  }
               );
            }
         });
         setSelectedRowKeys([]);
         getErequestDtl(selectedRequest);
      },
      onPrintError: () => {
         console.log('asdasd');
      },
      removeAfterPrint: () => {
         console.log('asdasd1');
      }
   });
   const changeExaminationProcess = () => {
      const conf = {
         headers: {},
         params: {}
      };
      selectedRequestDtl.map((dtl) => {
         DefaultPatch(
            'service/examinationRequestDetail/' + dtl.id,
            token,
            conf,
            {
               examinationProcess: dtl.examinationProcess + 1
            }
         );
      });
   };
   useEffect(() => {
      getErequest(1, 10, today, today, null, 0);
   }, []);
   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-full">
               <Card
                  bordered={false}
                  bodyStyle={{
                     padding: 7
                  }}
                  className="header-solid max-h-max rounded-md"
               >
                  <Segmented
                     className="department-bed-segment text-black"
                     size="small"
                     options={examinationProcess.map((el, index) => {
                        return {
                           label: el.label,
                           value: el.value,
                           icon: null
                        };
                     })}
                     value={statusFilter}
                     onChange={(e) => {
                        getErequest(1, 10, Dstart, Dend, null, e);
                        setSelectedRequestDtl([]);
                        setStatusFilter(e);
                     }}
                  />
               </Card>
            </div>
            <div className="md:w-1/2 pt-2 pr-1">
               <Card
                  bordered={false}
                  bodyStyle={{
                     padding: 7
                  }}
                  className="header-solid max-h-max rounded-md"
               >
                  <div className="py-2">
                     <Card
                        bordered={false}
                        bodyStyle={{
                           padding: 7,
                           backgroundColor: '#fafafa'
                        }}
                        className="header-solid max-h-max rounded-md"
                     >
                        <Form
                           onFinish={(e) =>
                              getErequest(
                                 1,
                                 10,
                                 e.date ? e.date[0] : null,
                                 e.date ? e.date[1] : null,
                                 e,
                                 0
                              )
                           }
                           form={searchForm}
                           layout="vertical"
                        >
                           <div className="flex flex-wrap">
                              <div className="md:w-1/3 xl:w-1/4 p-1">
                                 <Form.Item label="Өдөрөөр:" name="date">
                                    <RangePicker
                                       format="YYYY-MM-DD"
                                       locale={mnMN}
                                    />
                                 </Form.Item>
                              </div>
                              <div className="md:w-1/3 xl:w-1/4 p-1">
                                 <Form.Item
                                    label="Регистрийн дугаар:"
                                    name="registerNumber"
                                 >
                                    <Input />
                                 </Form.Item>
                              </div>
                              <div className="md:w-1/3 xl:w-1/4 p-1">
                                 <Form.Item label="Нэрээр:" name="firstName">
                                    <Input />
                                 </Form.Item>
                              </div>
                              <div className="md:w-2/12 xl:w-1/12">
                                 <Form.Item>
                                    <Button
                                       type="primary"
                                       icon={<SearchOutlined />}
                                       htmlType="submit"
                                    >
                                       Хайх
                                    </Button>
                                 </Form.Item>
                              </div>
                           </div>
                        </Form>
                     </Card>
                  </div>
                  <div className="flow-root py-2">
                     <div className="flex float-left">
                        <div
                           className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                           role="alert"
                        >
                           <span className="font-medium mx-1">Яаралтай</span>
                        </div>
                        <div
                           className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                           role="alert"
                        >
                           <span className="font-medium mx-1">Хэвийн</span>
                        </div>
                     </div>
                     <div className="flex float-right">
                        <Button
                           title="Сэргээх"
                           type="primary"
                           //    onClick={() => getAppointment(1, 20, start, end)}
                        >
                           <ReloadOutlined
                           //    spin={spinner}
                           />
                        </Button>
                     </div>
                  </div>
                  <div className="py-2">
                     <Table
                        rowKey={'id'}
                        loading={{
                           spinning: requestListLoading,
                           tip: 'Уншиж байна...'
                        }}
                        bordered
                        rowClassName="hover:cursor-pointer"
                        locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                        columns={requestListColumn}
                        dataSource={requestList}
                        onRow={(row) => {
                           return {
                              onClick: () => {
                                 getErequestDtl(row.erequests_id);
                              }
                           };
                        }}
                        pagination={{
                           simple: true,
                           pageSize: 10,
                           total: requestListMeta.itemCount,
                           current: requestListMeta.page,
                           onChange: (page, pageSize) =>
                              getErequest(page, pageSize, Dstart, Dend)
                        }}
                     />
                  </div>
               </Card>
            </div>
            <div className="md:w-1/2 pt-2 pl-1">
               <Card
                  bordered={false}
                  bodyStyle={{
                     padding: 7
                  }}
                  className="header-solid max-h-max rounded-md"
               >
                  <Table
                     rowKey={'erequests_id'}
                     bordered
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     rowClassName="hover:cursor-pointer"
                     loading={{
                        spinning: requestDetailListLoading,
                        tip: 'Уншиж байна...'
                     }}
                     rowSelection={{
                        ...rowSelection
                     }}
                     columns={requestDetailListColumn}
                     dataSource={selectedRequestDtl}
                     //  dataSource={selectedRequest.examinationRequestsDetails}
                     pagination={{
                        simple: true,
                        pageSize: 5
                     }}
                     footer={() => {
                        if (!barcodeState) {
                           return;
                        } else {
                           return (
                              <>
                                 <Button
                                    icon={<BarcodeOutlined />}
                                    loading={barcodeLoading}
                                    onClick={() => handlePrintBarCode()}
                                 >
                                    Баркод хэвлэх
                                 </Button>
                                 {statusFilter != 0 && (
                                    <Button
                                       onClick={() =>
                                          changeExaminationProcess()
                                       }
                                    >
                                       Шилжүүлэх
                                    </Button>
                                 )}
                              </>
                           );
                        }
                     }}
                  />
               </Card>
            </div>
         </div>
         <div style={{ display: 'none' }}>
            <div ref={barcodeRef} className="mt-4">
               <p>{selectedRequestDtl[0]?.examinations?.types?.name}</p>
               <p>{selectedRequest.patient?.registerNumber}</p>
               <p>
                  {selectedRequest.patient?.lastName}
                  {selectedRequest.patient?.firstName}
               </p>
               <Barcode value={selectedRequestDtl[0]?.barCode} height={50} />
            </div>
         </div>
      </div>
   );
}
export default Index;
