import {
   ArrowRightOutlined,
   BarcodeOutlined,
   EditOutlined,
   PrinterOutlined,
   ReloadOutlined,
   SearchOutlined
} from '@ant-design/icons';
import { Button, Card, DatePicker, Divider, Empty, Form, Input, Modal, Segmented, Space, Table, Tag } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import React, { useRef, useState, useEffect } from 'react';
import Barcode from 'react-barcode';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefaultPatch, Get, Patch } from '../../../comman';
import examinationProcess from '../examinationProcess';
import MonitorCriteria from '../../Insurance/MonitorCriteria';

const { TextArea } = Input;
const { RangePicker } = DatePicker;
function Index() {
   const today = new Date();
   const token = useSelector(selectCurrentToken);
   const barcodeRef = useRef();
   const [callbackForm] = Form.useForm();
   const [searchForm] = Form.useForm();
   const [resultForm] = Form.useForm();
   const [formValues, setFormValues] = useState({});
   const [statusFilter, setStatusFilter] = useState(0);
   const [requestList, setRequestList] = useState([]);
   const [requestListMeta, setRequestListMeta] = useState({});
   const [requestListLoading, setRequestListLoading] = useState(false);
   const [requestDetailList, setRequestDetailList] = useState([]);
   const [requestDetailListLoading, setRequestDetailListLoading] = useState(false);
   const [measurements, setMeasurements] = useState([]);
   const [Dstart, setStart] = useState('');
   const [Dend, setEnd] = useState('');
   const [barcodeState, setBarCodeState] = useState(false);
   const [selectedRequest, setSelectedRequest] = useState({});
   const [selectedRequestDtl, setSelectedRequestDtl] = useState([]);
   const [barcodeLoading, setBarcodeLoading] = useState(false);
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   const [isOpenCallBack, setIsOpenCallBack] = useState(false);
   const [callback, setCallback] = useState(Number);
   const [isOpenResult, setIsOpenResult] = useState(false);
   const [selectedResult, setSelectedResult] = useState([]);
   const onFinishCallback = async (values) => {
      values['examinationProcess'] = callback.examinationProcess - 1;
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Patch('service/examinationRequestDetail/' + callback.id, token, conf, values);
      if (response) {
         setIsOpenCallBack(false);
         await getErequestDtl(selectedRequest);
         getErequest(1, 10, Dstart, Dend, null, statusFilter);
      }
   };
   const getResult = async (row) => {
      const conf = {
         headers: {},
         params: {
            examinationRequestId: row.erequests_id,
            examinationProcess: 3
         }
      };
      const response = await Get('service/examinationRequestDetail', token, conf);
      setSelectedResult(response.data);
   };
   // columns
   const requestListColumn = [
      {
         title: '№',
         render: (_, _record, index) => {
            return requestListMeta.page * requestListMeta.limit - (requestListMeta.limit - index - 1);
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
         title: 'Хяналт',
         width: 60,
         render: (_text, row) => {
            return <MonitorCriteria props={{ serviceId: row.erequests_id, serviceType: 0 }} />;
         }
      },
      {
         title: 'Төлөв',
         render: (_, row) => {
            if (row.erequests_isCito) {
               return (
                  <p className="bg-[#dd4b39] text-white">{row.erequests_usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}</p>
               );
            } else {
               return (
                  <p className="bg-[#5cb85c] text-white">{row.erequests_usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}</p>
               );
            }
         }
      }
   ];
   const requestListColumn2 = [
      {
         title: '№',
         render: (_, record, index) => {
            return requestListMeta.page * requestListMeta.limit - (requestListMeta.limit - index - 1);
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
                  <p className="bg-[#dd4b39] text-white">{row.erequests_usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}</p>
               );
            } else {
               return (
                  <p className="bg-[#5cb85c] text-white">{row.erequests_usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}</p>
               );
            }
         }
      },
      {
         title: 'Хариу оруулах',
         render: (_, row) => {
            return (
               <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => {
                     setIsOpenResult(true);
                     getResult(row);
                  }}
               />
            );
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
                     setCallback(record);
                     setIsOpenCallBack(true);
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
      if (values) {
         setFormValues(values);
      }
      setStatusFilter(process);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            examinationProcess: process,
            firstName: values?.firstName ? values?.firstName : null,
            registerNumber: values?.registerNumber ? values.registerNumber : null
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
   const getErequestDtl = async (row) => {
      setRequestDetailListLoading(true);
      const conf = {
         headers: {},
         params: {
            examinationRequestId: row.erequests_id,
            examinationProcess: statusFilter
         }
      };
      setSelectedRequest(row);
      const response = await Get('service/examinationRequestDetail', token, conf);
      setSelectedRowKeys([]);
      setBarCodeState(false);
      setRequestDetailList(response.data);
      setRequestDetailListLoading(false);
   };
   const getMeasurements = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('reference-measurement', token, conf);
      console.log('response =======>', response.data);
      setMeasurements(response.data);
      console.log('measurements =======>', measurements);
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
         Promise.all(
            selectedRequestDtl?.map(async (dtl) => {
               if (dtl.examinationProcess === 0) {
                  await DefaultPatch('service/examinationRequestDetail/' + dtl.id, token, conf, {
                     examinationProcess: 1
                  });
               }
            })
         ).then(() => {
            getErequestDtl(selectedRequest);
         });
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
      Promise.all(
         selectedRequestDtl.map(async (dtl) => {
            await DefaultPatch('service/examinationRequestDetail/' + dtl.id, token, conf, {
               examinationProcess: dtl.examinationProcess + 1
            });
         })
      )
         .then(async () => {
            await getErequestDtl(selectedRequest);
         })
         .then(async () => {
            await getErequest(1, 10, null, null, formValues, statusFilter);
         });
   };
   var groupBarcode = selectedRequestDtl.reduce(function (r, a) {
      // Barcode bulegleh
      r[a.barCode] = r[a.barCode] || [];
      r[a.barCode].push(a);
      return r;
   }, Object.create(null));
   var groupResult = selectedResult.reduce(function (r, a) {
      // hariu zasah ued bulegleh
      r[a.examinations?.types?.name] = r[a.examinations?.types?.name] || [];
      r[a.examinations?.types?.name].push(a);
      return r;
   }, Object.create(null));
   useEffect(() => {
      getErequest(1, 10, today, today, null, 0);
      getMeasurements();
   }, []);
   return (
      <div className="p-3 w-full bg-[#f5f6f7] overflow-auto">
         <div className="flex flex-col gap-2">
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
                        setRequestDetailList([]);
                        setBarCodeState(false);
                        setStatusFilter(e);
                     }}
                  />
               </Card>
            </div>
            <div className="flex flex-row gap-2">
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
                                    statusFilter
                                 )
                              }
                              form={searchForm}
                              layout="vertical"
                           >
                              <div
                                 style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 12,
                                    alignItems: 'flex-end'
                                 }}
                              >
                                 <Form.Item label="Өдөр:" name="date">
                                    <RangePicker format="YYYY-MM-DD" locale={mnMN} />
                                 </Form.Item>
                                 <Form.Item label="Регистрийн №:" name="registerNumber">
                                    <Input />
                                 </Form.Item>
                                 <Form.Item label="Нэр:" name="firstName">
                                    <Input />
                                 </Form.Item>
                                 <Form.Item>
                                    <Button
                                       type="primary"
                                       style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          gap: 4,
                                          alignItems: 'center'
                                       }}
                                       icon={<SearchOutlined />}
                                       htmlType="submit"
                                    >
                                       Хайх
                                    </Button>
                                 </Form.Item>
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
                           rowKey={'erequests_id'}
                           loading={{
                              spinning: requestListLoading,
                              tip: 'Уншиж байна...'
                           }}
                           bordered
                           rowClassName="hover:cursor-pointer"
                           locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                           columns={statusFilter != 3 ? requestListColumn : requestListColumn2}
                           dataSource={requestList}
                           onRow={(row) => {
                              return {
                                 onClick: () => {
                                    getErequestDtl(row);
                                 }
                              };
                           }}
                           pagination={{
                              simple: true,
                              pageSize: 10,
                              total: requestListMeta.itemCount,
                              current: requestListMeta.page,
                              onChange: (page, pageSize) => getErequest(page, pageSize, Dstart, Dend)
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
                        rowKey={'id'}
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
                        dataSource={requestDetailList}
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
                                          icon={<ArrowRightOutlined />}
                                          className="ml-2"
                                          onClick={() => changeExaminationProcess()}
                                       >
                                          Шилжүүлэх
                                       </Button>
                                    )}
                                    {statusFilter === 4 && (
                                       <Button icon={<PrinterOutlined />} className="ml-2">
                                          Хариу хэвлэх
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
         </div>
         <div style={{ display: 'none' }}>
            <div ref={barcodeRef} className="mt-4">
               {Object.entries(groupBarcode).map(([key, value]) => {
                  return (
                     <div key={key}>
                        <p>{value[0]?.examinations?.types?.name}</p>
                        <p>{selectedRequest.registerNumber}</p>
                        <p>
                           {selectedRequest.lastName}
                           {selectedRequest.firstName}
                        </p>
                        <Barcode value={key} height={50} />
                     </div>
                  );
               })}
            </div>
         </div>
         <Modal
            title="Буцаалт"
            open={isOpenCallBack}
            onCancel={() => setIsOpenCallBack(false)}
            onOk={() => callbackForm.validateFields().then((values) => onFinishCallback(values))}
            okText="Буцаах"
            cancelText="Болих"
         >
            <Form form={callbackForm}>
               <Form.Item label="Шалтгаан" name={'description'}>
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title="Хариу оруулах хэсэг"
            open={isOpenResult}
            onCancel={() => setIsOpenResult(false)}
            onOk={() => resultForm.validateFields().then((values) => console.log(values))}
            cancelText="Болих"
            okText="Хадгалах"
         >
            {Object.entries(groupResult).map(([key, value]) => {
               return (
                  <div key={key}>
                     <Divider>{key}</Divider>
                     <Form form={resultForm} layout="vertical">
                        {value?.map((item, idx) => {
                           return (
                              <div key={idx}>
                                 <p>{item.examinations?.name}</p>
                                 <Table
                                    rowKey={'id'}
                                    bordered
                                    columns={[
                                       {
                                          title: 'Нэр',
                                          dataIndex: 'parameterName'
                                       },
                                       {
                                          title: 'Лавлах хэмжээ',
                                          render: (_, row) => {
                                             return `${row.low} -> ${row.high}`;
                                          }
                                       },
                                       {
                                          title: 'Хэмжих нэгж',
                                          dataIndex: 'measurementId',
                                          render: (text) => {
                                             return measurements.find((e) => {
                                                console.log('value =====>', text);
                                                return e.id === text;
                                             });
                                          }
                                       },
                                       {
                                          title: 'Хариу',
                                          render: (_, row) => {
                                             return (
                                                <Form.Item name={[row.parameterName, 'result']}>
                                                   <Input />
                                                </Form.Item>
                                             );
                                          }
                                       },
                                       {
                                          title: 'HL'
                                       }
                                    ]}
                                    dataSource={item?.examinations?.parameters}
                                    pagination={false}
                                 />
                              </div>
                           );
                        })}
                     </Form>
                  </div>
               );
            })}
         </Modal>
      </div>
   );
}
export default Index;
