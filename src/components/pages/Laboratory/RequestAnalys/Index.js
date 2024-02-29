import {
   ArrowLeftOutlined,
   ArrowRightOutlined,
   BarcodeOutlined,
   EditOutlined,
   PrinterOutlined
} from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Empty, Form, Input, Modal, Space, Table, Tabs, Tag } from 'antd';
import moment from 'moment';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Barcode from 'react-barcode';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, formatNameForDoc } from '../../../comman';
import examinationProcess from '../examinationProcess';
import MonitorCriteria from '../../Insurance/MonitorCriteria';

//
import FilterIndex from './Filter';

import 'moment/locale/mn';

import ServiceApi from '../../../../services/service/service';
import dayjs from 'dayjs';

import AnswerBody from './AnswerBody';

const ProcessEnum = {
   order: 'ORDER',
   sampled: 'SAMPLED',
   tested: 'TESTED',
   answered: 'ANSWERED',
   confirmed: 'CONFIRMED'
};

const { TextArea } = Input;
function Index() {
   const today = new Date();
   const [isRefresh, setIsRefresh] = useState(false);
   const barcodeRef = useRef();
   const [callbackForm] = Form.useForm();
   const [resultForm] = Form.useForm();
   const [statusFilter, setStatusFilter] = useState(0);
   const [requestList, setRequestList] = useState([]);
   const [requestListMeta, setRequestListMeta] = useState({});
   const [requestListLoading, setRequestListLoading] = useState(false);
   const [requestDetailList, setRequestDetailList] = useState([]);
   const [requestDetailListLoading, setRequestDetailListLoading] = useState(false);
   const [barcodeState, setBarCodeState] = useState(false);
   const [selectedRequest, setSelectedRequest] = useState({});
   const [selectedRequestDtl, setSelectedRequestDtl] = useState([]);
   const [barcodeLoading, setBarcodeLoading] = useState(false);
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   const [isOpenCallBack, setIsOpenCallBack] = useState(false);
   const [callback, setCallback] = useState(Number);
   const [isOpenResult, setIsOpenResult] = useState(false);
   const [selectedResult, setSelectedResult] = useState([]);
   //
   const processUpper = (currentProcess) => {
      return examinationProcess
         .map((process, index) => {
            if (process.value === currentProcess) {
               return examinationProcess[index + 1].value;
            }
         })
         .filter(Boolean)[0];
   };
   const processLower = (currentProcess) => {
      return examinationProcess
         .map((process, index) => {
            if (process.value === currentProcess) {
               return examinationProcess[index - 1].value;
            }
         })
         .filter(Boolean)[0];
   };
   const onFinishCallback = async (values) => {
      values['process'] = processLower(callback.process);
      console.log('isBac', callback);
      await ServiceApi.patchErequestDetail(callback.id, values).then((_response) => {
         setIsOpenCallBack(false);
         setIsRefresh(!isRefresh);
         getErequestDtl(callback.examinationRequest);
      });
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
         width: 250,
         title: 'Илгээсэн тасаг',
         dataIndex: ['structure', 'name']
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object.lastName, object.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => {
            return dayjs(createdAt).format('YYYY-MM-DD HH:mm');
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
         dataIndex: 'isCito',
         render: (isCito, row) => {
            if (isCito) {
               return <p className="bg-[#dd4b39] text-white">{row.usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}</p>;
            } else {
               return <p className="bg-[#5cb85c] text-white">{row.usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори'}</p>;
            }
         }
      }
   ];
   const requestListColumn2 = [
      {
         title: '№',
         render: (_, _record, index) => {
            return requestListMeta.page * requestListMeta.limit - (requestListMeta.limit - index - 1);
         }
      },
      {
         width: 250,
         title: 'Илгээсэн тасаг',
         dataIndex: ['structure', 'name']
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object.lastName, object.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
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
                     setSelectedResult(row);
                     resultForm.resetFields();
                     setIsOpenResult(true);
                  }}
               />
            );
         }
      }
   ];
   const requestDetailListColumn = [
      {
         title: '№',
         render: (_, _row, rowIndex) => rowIndex + 1
      },
      {
         title: 'Шинжилгээ',
         dataIndex: ['examination', 'name'],
         className: 'whitespace-pre-line'
      },
      {
         title: 'Баркод',
         dataIndex: 'barcode'
      },
      {
         title: 'Төлөв',
         dataIndex: 'process',
         render: (process) => {
            if (process === 'ORDER') {
               return <Tag color="magenta">Захиалга өгсөн</Tag>;
            } else if (process === 'SAMPLED') {
               return <Tag color="purple">Сорьц авсан</Tag>;
            } else if (process === 'TESTED') {
               return <Tag color="green">Шинжилсэн</Tag>;
            } else if (process === 'ANSWERED') {
               return <Tag color="volcano">Хариу гарсан</Tag>;
            } else if (process === 'CONFIRMED') {
               return <Tag color="cyan">Хариу баталгаажсан</Tag>;
            }
         }
      },
      {
         title: 'Төхөөрөмж',
         dataIndex: ['examination', 'type', 'name']
      },
      {
         title: 'Үйлдэл',
         key: 'action',
         render: (_, record) => {
            if (record.process != 'ORDER') {
               return (
                  <Space size="small">
                     <Tag
                        color="processing"
                        onClick={() => {
                           setCallback(record);
                           setIsOpenCallBack(true);
                        }}
                        className="cursor-pointer"
                     >
                        <ArrowLeftOutlined />
                        Буцаах
                     </Tag>
                  </Space>
               );
            }
            return;
         }
      }
   ];

   // columns end
   const getErequest = async (page, limit, startDate, endDate, process, depId, type, searchValue) => {
      setRequestListLoading(true);
      await ServiceApi.getServiceErequest({
         params: {
            page: page,
            limit: limit,
            startDate: startDate ? dayjs(startDate).format('YYYY-MM-DD HH:mm') : null,
            endDate: endDate ? dayjs(endDate).format('YYYY-MM-DD HH:mm') : null,
            process: process,
            structureId: depId,
            usageType: type,
            filter: searchValue || null
         }
      })
         .then(({ data: { response } }) => {
            setStatusFilter(process);
            if (response.meta?.itemCount === 0) {
               setRequestDetailList([]);
            }
            setRequestList(response.data);
            setRequestListMeta(response.meta);
         })
         .finally(() => {
            setRequestListLoading(false);
         });
   };
   const getErequestDtl = async (row) => {
      setRequestDetailListLoading(true);
      setSelectedRequest(row);
      await ServiceApi.getErequestDetail({ examinationRequestId: row.id, process: statusFilter }).then(
         ({ data: { response } }) => {
            setSelectedRowKeys([]);
            setBarCodeState(false);
            setRequestDetailList(response.data);
            setRequestDetailListLoading(false);
         }
      );
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
         Promise.all(
            selectedRequestDtl?.map(async (dtl) => {
               if (dtl.process === 'ORDER') {
                  await ServiceApi.patchErequestDetail(dtl.id, {
                     process: 'SAMPLED'
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
      Promise.all(
         selectedRequestDtl.map(async (dtl) => {
            const process = processUpper(dtl.process);
            await ServiceApi.patchErequestDetail(dtl.id, {
               process: process
            });
         })
      )
         .then(async () => {
            await getErequestDtl(selectedRequest);
         })
         .then(async () => {
            setIsRefresh(!isRefresh);
         });
   };
   var groupBarcode = selectedRequestDtl.reduce(function (r, a) {
      r[a.barcode] = r[a.barcode] || [];
      r[a.barcode].push(a);
      return r;
   }, Object.create(null));

   const groupResult = useMemo(() => {
      if (selectedResult?.details?.length > 0) {
         const { details } = selectedResult;
         const results = new Set();
         details.map((detail) =>
            results.add(`${detail.barcode}-${detail.examination.examinationTypeId}-${detail.examination.type.name}`)
         );
         return [...results]?.map((result) => {
            const [barcode, typeId, name] = result.split('-');
            return {
               name: name,
               barcode: barcode,
               typeId: Number(typeId),
               data: details.filter((detail) => detail.examination.examinationTypeId === Number(typeId))
            };
         });
      }
      return {};
   }, [selectedResult]);
   useEffect(() => {
      getErequest(1, 10, today, today, ProcessEnum.order);
   }, []);
   return (
      <div className="p-3 w-full h-screen bg-[#f5f6f7]">
         <div className="flex flex-col gap-3">
            <FilterIndex getList={getErequest} isRefresh={isRefresh} />
            <div className="grid grid-cols-2 gap-3">
               <Card
                  bordered={false}
                  bodyStyle={{
                     padding: 7
                  }}
                  className="header-solid max-h-max rounded-md"
               >
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
                  </div>
                  <div className="py-2">
                     <Table
                        rowKey="id"
                        loading={{
                           spinning: requestListLoading,
                           tip: 'Уншиж байна...'
                        }}
                        bordered
                        rowClassName="hover:cursor-pointer"
                        locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                        columns={statusFilter != 'ANSWERED' ? requestListColumn : requestListColumn2}
                        dataSource={requestList}
                        onRow={(row) => {
                           return {
                              onClick: () => {
                                 getErequestDtl(row);
                              }
                           };
                        }}
                        pagination={{
                           position: ['bottomCenter'],
                           simple: true,
                           pageSize: 10,
                           total: requestListMeta.itemCount,
                           current: requestListMeta.page,
                           onChange: (page, pageSize) => getErequest(page, pageSize, Dstart, Dend)
                        }}
                     />
                  </div>
               </Card>
               <Card
                  bordered={false}
                  bodyStyle={{
                     padding: 7
                  }}
                  className="header-solid max-h-max rounded-md"
               >
                  <Table
                     rowKey="id"
                     bordered
                     loading={{
                        spinning: requestDetailListLoading,
                        tip: 'Уншиж байна...'
                     }}
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     rowClassName="hover:cursor-pointer"
                     rowSelection={{
                        ...rowSelection
                     }}
                     columns={requestDetailListColumn}
                     dataSource={requestDetailList}
                     pagination={false}
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

         <div>
            <div ref={barcodeRef} className="mt-4">
               {Object.entries(groupBarcode).map(([key, value]) => {
                  return (
                     <div key={key} className="h-[20mm] w-[30mm] bg-gray-200">
                        <p className="text-[10px]">{value[0]?.examination?.type?.name}</p>
                        <p className="flex flex-wrap gap-1">
                           <p className="text-[10px]">{selectedRequest.patient?.registerNumber}</p>
                           <p className="text-[10px]">
                              {formatNameForDoc(selectedRequest.patient?.lastName, selectedRequest.patient?.firstName)}
                           </p>
                        </p>
                        <Barcode value={key} height={15} fontSize={10} width={1} />
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
            destroyOnClose
            footer={null}
         >
            <Form form={resultForm} layout="vertical">
               <AnswerBody form={resultForm} data={groupResult || {}} patientId={selectedRequest?.patientId} />
            </Form>
         </Modal>
      </div>
   );
}
export default Index;
