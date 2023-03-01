import {
   CheckCircleOutlined,
   CheckOutlined,
   CloseCircleOutlined,
   EditOutlined,
   MinusOutlined,
   PauseCircleOutlined,
   PlusOutlined,
   WarningOutlined
} from '@ant-design/icons';
import { DatePicker, Empty, Table, Tag } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';

function Cardex({ PatientId, ListId }) {
   const token = useSelector(selectCurrentToken);
   const [requestDetailListLoading, setRequestDetailListLoading] =
      useState(false);
   const [xrayLoading, setXrayLoading] = useState(false);
   const [selectedRequestDtl, setSelectedRequestDtl] = useState([]);
   const [xrayList, setXrayList] = useState([]);
   //
   const treatmentColumn = [
      {
         title: 'Огноо'
      },
      {
         title: 'Төрөл'
      },
      {
         title: 'Эмийн нэр'
      },
      {
         title: 'Хугацаа'
      },
      {
         title: 'Төлөв'
      },
      {
         title: 'Сувилагч'
      }
   ];
   const examinationColumn = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (_, row, rowIndex) => {
            return (
               <span style={{ width: 100, textAlign: 'center' }}>
                  {row.createdAt?.substr(0, 10) ?? ''}
               </span>
            );
         },
         width: 100
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
         dataIndex: 'createdAt',
         render: (_, row, rowIndex) => {
            return (
               <span style={{ width: 80, textAlign: 'center' }}>
                  {row.createdAt?.substr(0, 10) ?? ''}
               </span>
            );
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
   const getTreatmentData = async () => {};

   const getErequestDtl = async (page, pageSize) => {
      setSelectedRequestDtl([]);
      setRequestDetailListLoading(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            patientId: PatientId
         }
      };
      const response = await Get('service/erequest', token, conf);
      // console.log('response.data', response.data);
      if (response.data) {
         response?.data?.map((el) => {
            el.examinationRequestDetials?.map((dtl) => {
               setSelectedRequestDtl((selectedRequestDtl) => [
                  ...selectedRequestDtl,
                  dtl
               ]);
            });
         });
      }
      setRequestDetailListLoading(false);
   };
   const getXrayList = async (page, pageSize) => {
      setXrayList([]);
      setXrayLoading(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            patientId: PatientId
         }
      };
      const response = await Get('service/xrayRequest', token, conf);
      // console.log('response.data xxx', response.data);
      if (response.data) {
         setXrayList(response.data);
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
   useEffect(() => {
      getTreatmentData();
      getErequestDtl();
      getXrayList();
   }, []);
   return (
      <div className="flex flex-wrap">
         <div className="w-full">
            <div className="flex float-left">
               <DatePicker locale={mnMN} />
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
            <Table columns={treatmentColumn} />
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
                  pageSize: 5
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
                  pageSize: 5
               }}
            />
         </div>
      </div>
   );
}
export default Cardex;
