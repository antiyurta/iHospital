import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Get, Post } from '../../../common';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import moment from 'moment';
import {
   CheckCircleOutlined,
   CloseCircleOutlined,
   PauseCircleOutlined,
   ReloadOutlined,
   WarningOutlined
} from '@ant-design/icons';

function NursingLog() {
   const token = useSelector(selectCurrentToken);
   const [spinner, setSpinner] = useState(false);
   const [logList, setLogList] = useState([]);
   const StatusIo = [
      {
         value: 0,
         label: 'Өглөө'
      },
      {
         value: 1,
         label: 'Өдөр'
      },
      {
         value: 2,
         label: 'Орой'
      },
      {
         value: 3,
         label: 'Шөнө'
      }
   ];
   const MedicinePlanStatus = [
      {
         value: 'cancelled',
         label: 'Цуцалсан'
      },
      {
         value: 'implemented',
         label: 'Хэрэгжүүлсэн'
      },
      {
         value: 'stopped',
         label: 'Зогсоосон'
      },
      {
         value: 'refused',
         label: 'Татгалзсан'
      }
   ];

   const columns = [
      {
         title: '№',
         dataIndex: 'id',
         render: (_, record, index) => {
            return index + 1;
         }
      },
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (_, record, index) => {
            return moment(record.createdAt).format('YYYY-MM-DD HH:MM:SS');
         }
      },
      {
         title: 'Ажилтан',
         dataIndex: 'username'
      },
      {
         title: 'Өдрийн төлөвүүд',
         dataIndex: 'statusIo',
         render: (_, record, index) => {
            return StatusIo?.map((obj) => {
               if (obj.value === record.statusIo) {
                  return obj.label;
               }
            });
         }
      },
      {
         title: 'Эмийн төлөвлөгөө',
         dataIndex: 'changeStatus',
         render: (_, record, index) => {
            return MedicinePlanStatus?.map((obj) => {
               if (obj.value === record.changeStatus) {
                  return obj.label;
               }
            });
         }
      }
   ];

   const getLogList = async () => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get(`nursing-log`, token, conf);
      console.log('RES', response);
      setLogList(response.data);
      setSpinner(false);
   };
   useEffect(() => {
      getLogList();
   }, []);

   return (
      <div>
         <div className="flex flex-wrap justify-between">
            <div className="flex float-left">
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <CheckCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Хэрэгжүүлсэн
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <WarningOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Цуцалсан
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <CloseCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Зогсоосон
                  </span>
               </div>
               <div
                  className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-2">
                     <PauseCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Татгалзсан
                  </span>
               </div>
            </div>
            <div className="float-right">
               <Button title="Сэргээх" type="primary" onClick={() => getLogList()}>
                  <ReloadOutlined spin={spinner} />
               </Button>
            </div>
         </div>
         <div className="w-full p-1">
            <Table
               bordered
               rowKey={(record) => record.id}
               className="whitespace-pre-wrap"
               locale={{ emptyText: 'Мэдээлэл байхгүй' }}
               loading={spinner}
               columns={columns}
               dataSource={logList}
            />
         </div>
      </div>
   );
}

export default NursingLog;
