import React, { useRef, useState, useEffect, useMemo } from 'react';
import {
   ArrowLeftOutlined,
   ArrowRightOutlined,
   BarcodeOutlined,
   EditOutlined,
   PrinterOutlined
} from '@ant-design/icons';
import { Button, Card, Empty, Form, Input, Modal, Space, Table, Tag } from 'antd';
import Barcode from 'react-barcode';
import { useReactToPrint } from 'react-to-print';
import dayjs from 'dayjs';

//
import examinationProcess from '../examinationProcess';
import MonitorCriteria from '../../Insurance/MonitorCriteria';
import { formatNameForDoc, isObjectEmpty, openNofi } from '../../../common';
import FilterIndex from './Filter';
import Body from '../Template/Body';
import { ReturnById } from '../Template/index';
import AnswerBody from './AnswerBody';
import { ListPatientInfo, TypeInfo } from '../../../ListInjection';
import ServiceApi from '../../../../services/service/service';
import InsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import SealApi from '@ApiServices/healt-insurance/insurance';

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
   const printRef = useRef();
   const [callbackForm] = Form.useForm();
   const [resultForm] = Form.useForm();
   const [editMode, setEditMode] = useState(false);
   const [statusFilter, setStatusFilter] = useState('ORDER');
   const [requestList, setRequestList] = useState([]);
   const [requestListMeta, setRequestListMeta] = useState({});
   const [requestListLoading, setRequestListLoading] = useState(false);
   const [requestDetailList, setRequestDetailList] = useState([]);
   const [requestDetailListLoading, setRequestDetailListLoading] = useState(false);
   const [barcodeState, setBarCodeState] = useState(false);
   const [confirmState, setConfirmState] = useState(false);
   const [selectedRequest, setSelectedRequest] = useState({});
   const [selectedRequestDtl, setSelectedRequestDtl] = useState([]);
   const [barcodeLoading, setBarcodeLoading] = useState(false);
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   const [isOpenCallBack, setIsOpenCallBack] = useState(false);
   const [isOpenConfirmed, setIsOpenConfirmed] = useState(false);
   const [callback, setCallback] = useState(Number);
   const [isOpenResult, setIsOpenResult] = useState(false);
   const [selectedResult, setSelectedResult] = useState([]);
   //

   const handlePrint = useReactToPrint({
      // onBeforeGetContent: () => setPrintLoading(true),
      // onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });

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
   const onFinish = async (values) => {
      if (editMode) {
         console.log('selec', selectedRequest);
         const id = selectedRequest.examinationResult.id;
         await ServiceApi.patchResultForExamination(id, {
            result: values
         })
            .then((_response) => {
               openNofi('success', 'Амжилттай', 'Шинжилгээний хариу амжиллтай хадгалагдлаа');
               setIsOpenResult(false);
            })
            .finally(() => {
               setIsRefresh(!isRefresh);
            });
      } else {
         await ServiceApi.postResultForExamination({
            result: values,
            patientId: selectedRequest?.patientId,
            examinationRequestId: selectedRequest?.id
         })
            .then((_response) => {
               openNofi('success', 'Амжилттай', 'Шинжилгээний хариу амжиллтай хадгалагдлаа');
               setIsOpenResult(false);
            })
            .finally(() => {
               setIsRefresh(!isRefresh);
            });
      }
   };
   const getTypeInfo = (isCito, usageType) => {
      const string = usageType == 'IN' ? 'Хэвтэн' : 'Амбулатори';
      if (isCito) {
         return <TypeInfo bgColor="#dd4b39" textColor="white" text={string} />;
      }
      return <TypeInfo bgColor="#5cb85c" textColor="white" text={string} />;
   };

   const onClickAddResult = (row) => {
      if (row?.examinationResult?.hasOwnProperty('id')) {
         setEditMode(true);
         const result = row.examinationResult.result;
         const conclusions = row.examinationResult.conclusions;
         const customizedConslusion = {};
         conclusions?.map((conclusion) => {
            customizedConslusion[`${conclusion.examinationTypeId}`] = conclusion.conclusion;
         });
         resultForm.setFieldsValue({ ...result, conclusion: customizedConslusion });
      } else {
         setEditMode(false);
         resultForm.resetFields();
      }
      setSelectedResult(row);
      setIsOpenResult(true);
   };

   // columns
   const requestListColumn = [
      {
         title: '№',
         render: (_, _record, index) =>
            requestListMeta.page * requestListMeta.limit - (requestListMeta.limit - index - 1)
      },
      {
         width: 250,
         title: 'Илгээсэн тасаг',
         dataIndex: ['structure', 'name']
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => dayjs(createdAt).format('YYYY-MM-DD HH:mm')
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
         render: (isCito, row) => getTypeInfo(isCito, row.usageType)
      }
   ];
   const requestListColumn2 = [
      {
         title: '№',
         render: (_, _record, index) =>
            requestListMeta.page * requestListMeta.limit - (requestListMeta.limit - index - 1)
      },
      {
         width: 250,
         title: 'Илгээсэн тасаг',
         dataIndex: ['structure', 'name']
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => dayjs(createdAt).format('YYYY-MM-DD HH:mm')
      },
      {
         title: 'Төлөв',
         render: (isCito, row) => getTypeInfo(isCito, row.usageType)
      },
      {
         title: 'Хариу оруулах',
         render: (_, row) => {
            return <Button type="primary" icon={<EditOutlined />} onClick={() => onClickAddResult(row)} />;
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
      if (process != statusFilter) {
         setSelectedRequest({});
      }
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
   const changeExaminationProcess = async () => {
      for await (const item of selectedRequestDtl) {
         console.log('item =========>', item);
         const process = processUpper(item.process);
         if (process == 'TESTED') {
            await InsuranceApi.saveHics({
               patientRegno: item?.hicsSeal?.patient?.registerNumber,
               patientFingerprint: 'finger',
               patientFirstname: item?.hicsSeal?.patient?.firstName,
               patientLastname: item?.hicsSeal?.patient?.lastName,
               startDate: item?.sampleDate,
               endDate: new Date(),
               hicsServiceId: item?.hicsSeal?.hicsServiceId,
               departNo: item?.hicsSeal?.departmentId,
               departName: 'Урологийн кабинет',
               isForeign: item?.hicsSeal?.patient?.isLocal ? 0 : 1,
               freeTypeId: 0,
               historyCode: item?.hicsSeal?.patientHistoryCode,
               phoneNo: item?.hicsSeal?.patient?.phoneNo,
               bloodType: item?.hicsSeal?.patient?.bloodType,
               diagnosis: item?.hicsSeal?.diagnosis
            })
               .then(async (res) => {
                  if (res.data.code == 200) {
                     await SealApi.requestHicsSeal(item?.hicsSeal?.id, {
                        hicsSealCode: res?.data?.result?.serviceNumber,
                        process: res?.data?.result?.serviceNumber ? 1 : 0
                     });
                  } else {
                     openNofi('error', res.data.description);
                  }
               })
               .catch((err) => openNofi('error', err));
         } else if (process == 'CONFIRMED') {
            await SealApi.requestHicsSealSent(item?.hicsSeal?.id, {
               patientFingerprint: 'test'
            })
               .then(async (res) => {
                  if (res.data.code == 200) {
                     await SealApi.requestHicsSeal(item?.hicsSeal?.id, {
                        process: 2
                     });
                     openNofi('success', 'Амжилттай үйлчилгээ илгээлээ.');
                  } else {
                     openNofi('error', res.data?.description);
                  }
               })
               .catch((err) => openNofi('error', err));
         }
         await ServiceApi.patchErequestDetail(item.id, {
            process: process
         });
      }
      await getErequestDtl(selectedRequest);
      setIsRefresh(!isRefresh);
   };
   var groupBarcode = selectedRequestDtl.reduce(function (r, a) {
      r[a.barcode] = r[a.barcode] || [];
      r[a.barcode].push(a);
      return r;
   }, Object.create(null));

   const groupResult = useMemo(() => {
      if (selectedResult?.details?.length > 0) {
         const { details, examinationResults } = selectedResult;
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
               data: details.filter((detail) => detail.examination.examinationTypeId === Number(typeId)),
               result: examinationResults
            };
         });
      }
      return {};
   }, [selectedResult]);

   // hariu hewleh ued
   const middleware = () => {
      // request={selectedRequest} keys={selectedRowKeys}
      console.log(selectedRequest);
      const unDupKeys = selectedRowKeys.filter((key, index) => selectedRowKeys.indexOf(key) === index);
      console.log(unDupKeys);
      const d = unDupKeys?.map((key) => {
         return selectedRequest.details?.map((detail) => {
            if (detail.id === key) {
               const typeId = detail.examination.examinationTypeId;
               return selectedRequest.examinationResult?.result[typeId];
            }
         });
      });
      console.log('dd', d);

      // const selectedDetails = selectedRowKeys?.map((key) =>
      //    selectedRequest.details?.find((detail) => detail.id == key)
      // );
      // const selectedTypeIds = selectedDetails?.map((detail) => detail.examination.examinationTypeId);
      // const unDup = selectedTypeIds.filter((typeId, index) => selectedTypeIds.indexOf(typeId) === index);
      // console.log('unDup', unDup);
   };

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
                                 if (statusFilter === ProcessEnum.confirmed) {
                                    setConfirmState(true);
                                 } else {
                                    setConfirmState(false);
                                 }
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
                     rowSelection={statusFilter != ProcessEnum.confirmed ? { ...rowSelection } : null}
                     columns={requestDetailListColumn}
                     dataSource={requestDetailList}
                     pagination={false}
                     footer={() => {
                        if (!barcodeState) {
                           if (confirmState && !isObjectEmpty(selectedRequest)) {
                              return (
                                 <Button
                                    icon={<PrinterOutlined />}
                                    className="ml-2"
                                    onClick={() => setIsOpenConfirmed(true)}
                                 >
                                    Хариу хэвлэх
                                 </Button>
                              );
                           }
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
                                 {statusFilter != ProcessEnum.confirmed && (
                                    <Button
                                       icon={<ArrowRightOutlined />}
                                       className="ml-2"
                                       onClick={() => {
                                          changeExaminationProcess();
                                       }}
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
         <div className="hidden">
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
            onOk={() => {
               resultForm.validateFields().then(onFinish);
            }}
            okText="Хадгалах"
            cancelText="Болих"
            destroyOnClose
         >
            <Form form={resultForm} layout="vertical">
               <AnswerBody form={resultForm} data={groupResult || {}} />
            </Form>
         </Modal>
         <Modal
            title="Шинжилгээний хариу харах цонх"
            open={isOpenConfirmed}
            onCancel={() => setIsOpenConfirmed(false)}
            onOk={() => {
               handlePrint();
            }}
            bodyStyle={{
               width: '19cm'
            }}
            width={'max-content'}
         >
            <div ref={printRef}>
               <ReturnById hospitalId={selectedRequest.examinationResult?.hospital?.id} request={selectedRequest} />
            </div>
         </Modal>
      </div>
   );
}
export default Index;
