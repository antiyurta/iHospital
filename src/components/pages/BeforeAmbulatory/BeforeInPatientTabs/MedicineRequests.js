import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Col, DatePicker, Dropdown, Menu, Modal, Popconfirm, Row, Select, Table } from 'antd';
import {
   PauseCircleOutlined,
   CloseCircleOutlined,
   WarningOutlined,
   CheckCircleOutlined,
   ReloadOutlined,
   EditOutlined,
   SaveOutlined,
   AlignLeftOutlined,
   EyeOutlined
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
   const [confirmModal, setConfirmModal] = useState(false);

   const [histories, setHistories] = useState([]);

   const [groupIDS, setGroupIDS] = useState([]);

   const [activeStatus, setActiveStatus] = useState('willDone');

   useEffect(() => {
      setGroupIDS([]);
   }, []);

   const hideConfirmModal = () => setConfirmModal(false);
   const openConfirmModal = () => setConfirmModal(true);

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
         title: '',
         dataIndex: 'id',
         render: (id, second) => {
            return (
               <Checkbox
                  checked={!!groupIDS.find((ids) => ids === id)}
                  onChange={(e) => {
                     setGroupIDS((prev) =>
                        e.target.checked
                           ? [...prev.filter((prevItem) => prevItem !== id), id]
                           : prev.filter((prevItem) => prevItem !== id)
                     );
                  }}
               />
            );
         }
      },
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
      // {
      //    title: 'Төлөв',
      //    dataIndex: ['histories'],
      //    render: (data) => {
      //       return (
      //          <Button
      //             size="small"
      //             className="text-sm underline border-none shadow-none outline-none bg-transparent"
      //             onClick={() => {
      //                setOpenModal(true);
      //                setHistories(data);
      //             }}
      //          >
      //             Харах
      //          </Button>
      //       );
      //    }
      // },
      {
         title: 'Үйлдэл',
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
                  <Button>
                     <EyeOutlined
                        onClick={() => {
                           setOpenModal(true);
                           setHistories(row);
                        }}
                     />
                  </Button>
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
   };

   useEffect(() => {
      getMedicineRequests(1, 15, today, today);
   }, []);

   return (
      <div className="flex flex-wrap">
         <Modal
            title="Modal"
            open={confirmModal}
            onOk={hideConfirmModal}
            onCancel={hideConfirmModal}
            okText="Ok"
            cancelText="Cancel"
         >
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
         </Modal>
         <div className="w-full p-1 flex justify-between">
            <div className="flex gap-3">
               <div className="flex gap-3 items-center">
                  {weekFilterOptions.map((item, idx) => {
                     return (
                        <div key={idx} className="flex gap-1">
                           <Checkbox />
                           {item.label}
                        </div>
                     );
                  })}
               </div>
               {/* <DatePicker
                  className="w-[300px]"
                  locale={mnMN}
                  onChange={(e, dateString) => {
                     if (e != null) {
                        getMedicineRequests(1, 15, dateString, dateString);
                     }
                  }}
               /> */}
            </div>
            <div className="flex gap-1 items-center">
               {groupIDS.length > 0 && (
                  <>
                     {/* <Select size="middle" className="!w-fit min-w-[140px]" defaultValue={'willDone'}>
                        {statusOptions.map((option) => (
                           <Option key={option.value} value={option.value} className={option.className}>
                              {option.label}
                           </Option>
                        ))}
                     </Select> */}
                     <Button type="primary" icon={<SaveOutlined />} iconPosition="start" onClick={openConfirmModal}>
                        Хадгалах
                     </Button>
                  </>
               )}
               <Button
                  type="primary"
                  title="Сэргээх"
                  icon={<ReloadOutlined spin={spinner} />}
                  onClick={() => getMedicineRequests(1, 20, start, end)}
                  className="w-[32px] h-[32px]"
               />
            </div>
         </div>
         <div className="w-full flex my-2">
            {statuses.map((status, idx) => (
               <div
                  key={idx}
                  className={`px-2 py-1 text-sm font-semibold uppercase text-white cursor-pointer ${status.color} ${
                     status.value === activeStatus && ``
                  }`}
                  onClick={() => setActiveStatus(status.value)}
               >
                  {status.icon}
                  {status.title}
               </div>
            ))}
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

const statuses = [
   {
      icon: <AlignLeftOutlined style={{ marginTop: '-2px', marginRight: 4 }} />,
      title: 'Бүгд',
      color: 'bg-gray-400',
      value: 'all'
   },
   {
      icon: <CheckCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />,
      title: 'Гүйцэтгэх',
      color: 'bg-[#5bc0de]',
      value: 'willDone'
   },
   {
      icon: <CheckCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />,
      title: 'Хэрэгжүүлсэн',
      color: 'bg-green-500',
      value: 'done'
   },
   {
      icon: <WarningOutlined style={{ marginTop: '-2px', marginRight: 4 }} />,
      title: 'Цуцалсан',
      color: 'bg-[#f0ad4e]',
      value: 'cancelled'
   },
   {
      icon: <PauseCircleOutlined style={{ marginTop: '-2px', marginRight: 4 }} />,
      title: 'Татгалзсан',
      color: 'bg-[#dd4b39]',
      value: 'refused'
   }
];

const statusOptions = [
   {
      label: 'Гүйцэтгэх',
      value: 'willDone',
      className: 'bg-[#5bc0de] text-white mt-1'
   },
   {
      label: 'Хэрэгжүүлсэн',
      value: 'done',
      className: 'bg-green-500 text-white mt-1'
   },
   {
      label: 'Цуцалсан',
      value: 'paused',
      className: 'bg-[#f0ad4e] text-white mt-1'
   },
   {
      label: 'Татгалзсан',
      value: 'canceled',
      className: 'bg-[#dd4b39] text-white mt-1'
   }
];

const weekFilterOptions = [
   {
      label: 'Өнөөдөр',
      value: 'day'
   },
   {
      label: '7-хоног',
      value: 'week'
   },
   {
      label: '14-хоног',
      value: 'twoWeek'
   },
   {
      label: 'Сар',
      value: 'month'
   }
];
