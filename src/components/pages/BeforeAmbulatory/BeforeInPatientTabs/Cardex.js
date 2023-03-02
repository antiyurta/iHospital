import {
   CheckCircleOutlined,
   CheckOutlined,
   CloseCircleOutlined,
   CloseOutlined,
   EditOutlined,
   LoadingOutlined,
   MinusOutlined,
   PauseCircleOutlined,
   PlusOutlined,
   QuestionOutlined,
   StarOutlined,
   WarningOutlined
} from '@ant-design/icons';
import { DatePicker, Empty, Table, Tag } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';

function Cardex({ PatientId, ListId }) {
   const today = new Date();
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const token = useSelector(selectCurrentToken);
   const [requestDetailListLoading, setRequestDetailListLoading] =
      useState(false);
   const [xrayLoading, setXrayLoading] = useState(false);
   //
   const [selectedRequestDtl, setSelectedRequestDtl] = useState([]);
   const [selectedRequestDtlMeta, setSelectedRequestDtlMeta] = useState({});
   //
   const [xrayList, setXrayList] = useState([]);
   const [xrayListMeta, setXrayListMeta] = useState({});
   //
   const [treatmentList, setTreatmentList] = useState([]);
   const [treatmentListMeta, setTreatmentListMeta] = useState({});
   const [treatmentListLoading, setTreatmentListLoading] = useState(false);
   //
   const getRequestInfo = (text) => {
      if (text === 'implemented') {
         return <CheckCircleOutlined style={{ color: 'green' }} />;
      } else if (text === 'cancelled') {
         return <WarningOutlined style={{ color: '#f0ad4e' }} />;
      } else if (text === 'cancelled') {
         return <CloseCircleOutlined style={{ color: '#dd4b39' }} />;
      } else if (text === 'refused') {
         return <PauseCircleOutlined style={{ color: '#5bc0de' }} />;
      }
   };
   //
   const treatmentColumn = [
      {
         title: 'Огноо',
         dataIndex: 'date',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Эмчилгээний нэр',
         dataIndex: 'treatmentName'
      },
      {
         title: 'Өглөө',
         dataIndex: 'isMorning',
         render: (text, row) => {
            return row.treatmentRequests?.isMorning && text === null ? (
               <EditOutlined />
            ) : (
               getRequestInfo(text)
            );
         }
      },
      {
         title: 'Өдөр',
         dataIndex: 'isAfternoon',
         render: (text, row) => {
            return row.treatmentRequests?.isAfternoon && text === null ? (
               <EditOutlined />
            ) : (
               getRequestInfo(text)
            );
         }
      },
      {
         title: 'Орой',
         dataIndex: 'isEvening',
         render: (text, row) => {
            return row.treatmentRequests?.isEvening && text === null ? (
               <EditOutlined />
            ) : (
               getRequestInfo(text)
            );
         }
      },
      {
         title: 'Шөнө',
         dataIndex: 'isNight',
         render: (text, row) => {
            return row.treatmentRequests?.isNight && text === null ? (
               <EditOutlined />
            ) : (
               getRequestInfo(text)
            );
         }
      }
   ];
   const examinationColumn = [
      {
         title: 'Огноо',
         dataIndex: 'requestDate',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Шинжилгээний нэр',
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
         title: 'Сувилагч'
      }
   ];
   const xrayColumn = [
      {
         title: 'Огноо',
         dataIndex: 'startAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Оншилгооны нэр',
         dataIndex: ['xrays', 'name']
      },
      {
         title: 'Үзлэг хийгдсэн эсэх',
         dataIndex: 'xrayProcess',
         render: (text) => {
            return checkType(text);
         }
      },
      {
         title: 'Сувилагч'
      }
   ];
   //
   const getTreatmentData = async (page, pageSize, start, end) => {
      setTreatmentListLoading(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            patientId: PatientId,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      const response = await Get('treatment-plan', token, conf);
      if (response.data) {
         setTreatmentList(response.data);
         setTreatmentListMeta(response.meta);
      }
      setTreatmentListLoading(false);
   };

   const getErequestDtl = async (page, pageSize, start, end) => {
      setRequestDetailListLoading(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            patientId: PatientId,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      const response = await Get('service/erequest', token, conf);
      if (response.data.length > 0) {
         setSelectedRequestDtlMeta(response.meta);
         response?.data?.map((el) => {
            el.examinationRequestDetials?.map((dtl) => {
               setSelectedRequestDtl((selectedRequestDtl) => [
                  ...selectedRequestDtl,
                  dtl
               ]);
            });
         });
      } else {
         setSelectedRequestDtlMeta({});
         setSelectedRequestDtl([]);
      }
      setRequestDetailListLoading(false);
   };
   const getXrayList = async (page, pageSize, start, end) => {
      setXrayLoading(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            patientId: PatientId,
            findStartDate: moment(start).format('YYYY-MM-DD HH:mm'),
            findEndDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      const response = await Get('service/xrayRequest', token, conf);
      if (response.data) {
         setXrayList(response.data);
         setXrayListMeta(response.meta);
      }
      setXrayLoading(false);
   };

   const checkType = (process) => {
      if (process === 0) {
         return <MinusOutlined style={{ color: 'red' }} />;
      } else if (process === 1) {
         return <PlusOutlined style={{ color: 'blue' }} />;
      } else {
         return <CheckOutlined style={{ color: 'green' }} />;
      }
   };
   const getData = async (e) => {
      getTreatmentData(1, 5, e, e);
      getErequestDtl(1, 5, e, e);
      getXrayList(1, 5, e, e);
   };
   useEffect(() => {
      getTreatmentData(1, 5, today, today);
      getErequestDtl(1, 5, today, today);
      getXrayList(1, 5, today, today);
   }, []);
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <div className="flex float-left">
               <DatePicker
                  locale={mnMN}
                  onChange={(e) => {
                     if (e != null) {
                        getData(e);
                     }
                  }}
               />
            </div>
            <div className="flex float-right">
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <CheckCircleOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Хэрэгжүүлсэн
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <WarningOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Цуцалсан
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <CloseCircleOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Зогсоосон
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-2">
                     <PauseCircleOutlined
                        style={{ marginTop: '-2px', marginRight: 4 }}
                     />
                     Татгалзсан
                  </span>
               </div>
            </div>
         </div>
         <div className="md:w-1/2 sm:w-full py-2 pr-2">
            <div
               className="p-1 text-sm text-white bg-[#2d8cff] dark:bg-blue-200 dark:text-blue-800"
               role="alert"
            >
               <span className="font-medium mx-1">Эмийн бус эмчилгээ</span>
            </div>
            <Table
               rowKey={'id'}
               bordered
               loading={{
                  spinning: treatmentListLoading,
                  tip: 'Уншиж байна...'
               }}
               locale={{ emptyText: <Empty description={'Хоосон'} /> }}
               columns={treatmentColumn}
               dataSource={treatmentList}
               pagination={{
                  simple: true,
                  pageSize: 5,
                  total: treatmentListMeta.itemCount,
                  current: treatmentListMeta.page,
                  onChange: (page, pageSize) => getTreatmentData(page, pageSize)
               }}
            />
         </div>
         <div className="md:w-1/2 sm:w-full py-2 pl-2">
            <div
               className="p-1 text-sm text-white bg-[#2d8cff] dark:bg-blue-200 dark:text-blue-800"
               role="alert"
            >
               <span className="font-medium mx-1">Шинжилгээ</span>
            </div>
            <Table
               rowKey={'id'}
               columns={examinationColumn}
               loading={{
                  spinning: requestDetailListLoading,
                  tip: 'Уншиж байна...'
               }}
               bordered
               locale={{ emptyText: <Empty description={'Хоосон'} /> }}
               dataSource={selectedRequestDtl}
               pagination={{
                  simple: true,
                  pageSize: 5,
                  total: selectedRequestDtlMeta.itemCount,
                  current: selectedRequestDtlMeta.page,
                  onChange: (page, pageSize) => getErequestDtl(page, pageSize)
               }}
            />
         </div>
         <div className="md:w-1/2 sm:w-full py-2 pr-2">
            <div
               className="p-1 text-sm text-white bg-[#2d8cff] dark:bg-blue-200 dark:text-blue-800"
               role="alert"
            >
               <span className="font-medium mx-1">Оношилгоо</span>
            </div>
            <Table
               rowKey={'id'}
               columns={xrayColumn}
               loading={{
                  spinning: xrayLoading,
                  tip: 'Уншиж байна...'
               }}
               bordered
               locale={{ emptyText: <Empty description={'Хоосон'} /> }}
               dataSource={xrayList}
               pagination={{
                  simple: true,
                  pageSize: 5,
                  total: xrayListMeta.itemCount,
                  current: xrayListMeta.page,
                  onChange: (page, pageSize) => getXrayList(page, pageSize)
               }}
            />
         </div>
      </div>
   );
}
export default Cardex;
