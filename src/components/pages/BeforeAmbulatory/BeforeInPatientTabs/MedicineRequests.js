import { Button, DatePicker, Dropdown, Menu, Table } from 'antd';
import {
   PauseCircleOutlined,
   CloseCircleOutlined,
   WarningOutlined,
   CheckCircleOutlined,
   ReloadOutlined,
   EditOutlined
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Get, Patch } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import moment from 'moment';
import mnMN from 'antd/es/calendar/locale/mn_MN';
function MedicineRequests({ PatientId, ListId }) {
   const today = new Date();
   const token = useSelector(selectCurrentToken);
   const [datas, setDatas] = useState([]);
   const [meta, setMeta] = useState({});
   const [spinner, setSpinner] = useState(false);
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [requestId, setRequestId] = useState(Number);
   const handleMenuClick = async (key) => {
      const conf = {
         headers: {},
         params: {}
      };
      var data = {};
      if (Number(key) === 1) {
         data['state'] = 'implemented';
      } else if (Number(key) === 2) {
         data['state'] = 'cancelled';
      } else if (Number(key) === 3) {
         data['state'] = 'stopped';
      } else {
         data['state'] = 'refused';
      }
      const response = await Patch('medicine-plan/' + requestId, token, conf, data);
      if (response === 200) {
         getMedicineRequests(1, 15, start, end);
      }
   };
   const items = (
      <Menu
         onClick={(e) => handleMenuClick(e.key)}
         items={[
            {
               key: 1,
               label: (
                  <p className="bg-[#5cb85c] text-white p-1">
                     <CheckCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Хэрэгжүүлсэн
                  </p>
               )
            },
            {
               key: 2,
               label: (
                  <p className="bg-[#f0ad4e] text-white p-1">
                     <WarningOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Цуцалсан
                  </p>
               )
            },
            {
               key: 3,
               label: (
                  <p className="bg-[#dd4b39] text-white p-1">
                     <CloseCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Зогсоосон
                  </p>
               )
            },
            {
               key: 4,
               label: (
                  <p className="bg-[#5bc0de] text-white p-1">
                     <PauseCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Татгалзсан
                  </p>
               )
            }
         ]}
      />
   );
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
   const columns = [
      {
         title: '№',
         render: (_, _record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         }
      },
      {
         title: 'Хэрэгжүүлэх',
         dataIndex: 'date',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Захиалгын нэр',
         dataIndex: 'medicineName'
      },
      {
         title: 'DOSE',
         dataIndex: ['medicineRequest', 'dose']
      },
      {
         title: 'Тайлбар',
         dataIndex: ['medicineRequest', 'description']
      },
      {
         title: 'Хэрэгжүүлэл',
         dataIndex: 'state',
         render: (text, row) => {
            return text === null ? (
               <>
                  <Dropdown
                     overlay={items}
                     trigger={['click']}
                     arrow={{
                        pointAtCenter: true
                     }}
                  >
                     <Button>
                        <EditOutlined
                           onClick={(e) => {
                              e.preventDefault();
                              setRequestId(row.id);
                           }}
                        />
                     </Button>
                  </Dropdown>
               </>
            ) : (
               getRequestInfo(text)
            );
         }
      }
   ];
   const getMedicineRequests = async (page, pageSize, start, end) => {
      setSpinner(true);
      console.log(start);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize,
            inpatientRequestId: ListId,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      const response = await Get('medicine-plan', token, conf);
      setDatas(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   useEffect(() => {
      getMedicineRequests(1, 15, today, today);
   }, []);
   return (
      <div className="flex flex-wrap">
         <div className="w-1/3 p-1">
            <DatePicker
               locale={mnMN}
               onChange={(e) => {
                  if (e != null) {
                     getMedicineRequests(1, 15, e, e);
                  }
               }}
            />
         </div>
         <div className="w-full p-1">
            <div className="flex float-left">
               <div
                  className="p-1 mr-1 text-sm text-white bg-[#818787] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
               >
                  <span className="font-medium mx-1">
                     <EditOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                     Төлөв сонгох
                  </span>
               </div>
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
               <Button title="Сэргээх" type="primary" onClick={() => getMedicineRequests(1, 20, start, end)}>
                  <ReloadOutlined spin={spinner} />
               </Button>
            </div>
         </div>
         <div className="w-full p-1">
            <Table
               bordered
               rowKey={'id'}
               scroll={{
                  x: 1000
               }}
               className="whitespace-pre-wrap"
               locale={{ emptyText: 'Мэдээлэл байхгүй' }}
               loading={spinner}
               columns={columns}
               dataSource={datas}
               pagination={{
                  simple: true,
                  pageSize: 20,
                  total: meta.itemCount,
                  current: meta.page,
                  onChange: (page, pageSize) => getMedicineRequests(page, pageSize, start, end)
               }}
            />
         </div>
      </div>
   );
}
export default MedicineRequests;
