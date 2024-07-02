import React, { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Dropdown, Menu, Modal, Popconfirm, Row, Table } from 'antd';
import {
   PauseCircleOutlined,
   CloseCircleOutlined,
   WarningOutlined,
   CheckCircleOutlined,
   ReloadOutlined,
   EditOutlined
} from '@ant-design/icons';
import moment from 'moment';
import mnMN from 'antd/es/calendar/locale/mn_MN';
//api
import MedicineApi from '@ApiServices/service/medicine.api';

function MedicineRequests({ PatientId, ListId }) {
   const today = new Date();
   const [datas, setDatas] = useState([]);
   const [meta, setMeta] = useState({});
   const [spinner, setSpinner] = useState(false);
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [requestId, setRequestId] = useState(Number);

   const [openModal, setOpenModal] = useState(false);

   const [histories, setHistories] = useState([]);

   const handleMenuClick = async (key) => {
      var data = {};
      if (Number(key) === 1) {
         data['status'] = 'implemented';
      } else if (Number(key) === 2) {
         data['status'] = 'cancelled';
      } else if (Number(key) === 3) {
         data['status'] = 'stopped';
      } else {
         data['status'] = 'refused';
      }
      await MedicineApi.postMedicinePlan({
         ...data,
         materialRequestId: requestId
      }).then(() => {
         setTimeout(() => {
            getMedicineRequests(1, 15, start, end);
         }, 1000);
      });
   };

   const items = (
      <Menu
         items={[
            {
               key: 1,
               label: (
                  <Popconfirm
                     title={false}
                     description="Хэрэгжүүлсэн төлөврүү шилжүүлэх"
                     onConfirm={() => handleMenuClick(1)}
                     trigger={'click'}
                  >
                     <p className="bg-[#5cb85c] text-white p-1">
                        <CheckCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />
                        Хэрэгжүүлсэн
                     </p>
                  </Popconfirm>
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
         return (
            <div className="flex justify-center items-center gap-1.5 text-sm text-green-500 font-semibold">
               Хэрэгжүүлсэн
               <CheckCircleOutlined className="mt-0.5" />
            </div>
         );
      } else if (text === 'cancelled') {
         return (
            <div className="flex justify-center items-center gap-1.5 text-sm text-[#f0ad4e] font-semibold">
               Цуцалсан
               <WarningOutlined className="mt-0.5" />
            </div>
         );
      } else if (text === 'stopped') {
         return (
            <div className="flex justify-center items-center gap-1.5 text-sm text-[#dd4b39] font-semibold">
               Зогсоосон
               <CloseCircleOutlined className="mt-0.5" />
            </div>
         );
      } else if (text === 'refused') {
         return (
            <div className="flex justify-center items-center gap-1.5 text-sm text-[#5bc0de] font-semibold">
               Татгалзсан
               <PauseCircleOutlined className="mt-0.5" />
            </div>
         );
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
         dataIndex: 'startAt',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Захиалгын нэр',
         dataIndex: ['material', 'name']
      },
      {
         title: 'DOSE',
         dataIndex: ['material', 'measurement', 'name']
      },
      {
         title: 'Тайлбар',
         dataIndex: 'description'
      },
      {
         title: 'Хэрэгжүүлэлт',
         dataIndex: ['histories'],
         render: (data) => {
            return (
               <Button
                  size="small"
                  className="text-sm underline border-none shadow-none outline-none bg-transparent"
                  onClick={() => {
                     setOpenModal(true);
                     setHistories(data);
                  }}
               >
                  Харах
               </Button>
            );
         }
      },
      {
         title: 'Төлөв',
         dataIndex: 'state',
         render: (text, row) => {
            return (
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
            );
         }
      }
   ];
   const getMedicineRequests = async (page, pageSize, start, end) => {
      setSpinner(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      setStart(start);
      setEnd(end);

      await MedicineApi.getMedicinePlan({
         page: page,
         limit: pageSize,
         inpatientRequestId: ListId,
         startDate: moment(start).format('YYYY-MM-DD HH:mm'),
         endDate: moment(end).format('YYYY-MM-DD HH:mm')
      }).then(({ data: { response } }) => {
         setDatas(
            (response.data || []).map((data) => {
               return {
                  ...data,
                  history: data.histories[data.histories.length - 1]
               };
            })
         );

         setMeta(response.meta);
         setSpinner(false);
      });
   };f
   useEffect(() => {
      getMedicineRequests(1, 15, today, today);
   }, []);
   return (
      <div className="flex flex-wrap">
         <div className="w-full p-1 flex justify-between">
            <DatePicker
               className="w-1/3"
               locale={mnMN}
               onChange={(e, dateString) => {
                  if (e != null) {
                     getMedicineRequests(1, 15, dateString, dateString);
                  }
               }}
            />
            <Button
               type="primary"
               title="Сэргээх"
               icon={<ReloadOutlined spin={spinner} />}
               onClick={() => getMedicineRequests(1, 20, start, end)}
            />
         </div>
         {/* <div className="w-full p-1">
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
         </div> */}
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
         <Modal
            open={openModal}
            title="Хэрэгжүүлэлт"
            onCancel={() => setOpenModal(false)}
            forceRender={true}
            footer={false}
            style={{ maxHeight: '800px', overflowY: 'scroll' }}
         >
            <Row gutter={[12, 12]}>
               {(histories || []).map((history, idx) => (
                  <Col key={idx} span={24} className="w-full flex justify-between items-center border-b pb-2">
                     <p className="text-sm font-normal text-gray-600">
                        {moment(history.createdAt).format('YYYY/MM/DD HH:MM')}
                     </p>
                     {getRequestInfo(history.status)}
                  </Col>
               ))}
            </Row>
         </Modal>
      </div>
   );
}
export default MedicineRequests;
