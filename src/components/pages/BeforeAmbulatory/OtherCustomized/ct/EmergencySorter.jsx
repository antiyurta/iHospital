import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'antd';
import { useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
//comp
import Customized from '@Pages/BeforeAmbulatory/Customized/Index';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';
//api
import UrgentApi from '@ApiServices/urgent/urgent.api';
import dayjs from 'dayjs';

const EmergencySorter = ({ document }) => {
   const incomeENRData = useSelector(selectCurrentEmrData);
   const [editMode, setEditMode] = useState(false);
   const [data, setData] = useState([]);
   const [selectedData, setSelectedData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD HH:mm')
      },
      {
         title: 'Ухаан санаа',
         dataIndex: 'mind',
         render: (mind) => {
            if (mind === 0) {
               return 'Ухаантай, хэвийн харьцаатай';
            } else if (mind === 1) {
               return 'Орчиндоо харьцаа сул, самуурсан';
            } else if (mind === 2) {
               return 'Ухаангүй, дуудахад сэргэнэ, догшрол';
            } else if (mind === 3) {
               return 'Ухаангүй, өвтгөхөд сэргэнэ';
            }
         }
      },
      {
         title: 'Амьсгалын зам',
         dataIndex: 'respiratory',
         render: (respiratory) => {
            if (respiratory === 0) {
               return 'Чөлөөтэй';
            } else if (respiratory === 1) {
               return 'Уухилсан, шуугисан';
            } else if (respiratory === 2) {
               return 'Бачуурсан, хяхнасан';
            } else if (respiratory === 3) {
               return 'Боогдсон, хаагдсан';
            }
         }
      },
      {
         title: 'Амьсгалын тоо 1 минутанд',
         dataIndex: 'respiratoryCount'
      },
      {
         title: 'Судасны лугшилтын тоо 1 минутанд',
         dataIndex: 'pulseCount'
      },
      {
         title: 'Систолийн даралт',
         dataIndex: 'systol'
      },
      {
         title: 'Өвчтөнд яаралтай тусламж үзүүлж эхлэх хугацаа',
         dataIndex: 'supportTime'
      },
      {
         title: 'Эрэмблэн ялгасан өнгө',
         dataIndex: 'color',
         render: (color) => (
            <div
               style={{
                  backgroundColor: color,
                  height: 15,
                  width: 15
               }}
            ></div>
         )
      },
      {
         title: '',
         render: (_, row) => (
            <div className="flex flex-row gap-2">
               <Button
                  onClick={() => {
                     setEditMode(true);
                     setIsOpenModal(true);
                     setSelectedData(row);
                  }}
               >
                  edit
               </Button>
               <Button
                  onClick={() => {
                     deleteData(row.id);
                  }}
               >
                  delete
               </Button>
            </div>
         )
      }
   ];
   const getData = async () => {
      setIsLoading(true);
      await UrgentApi.getEmergencySorters({
         params: {
            appointmentId: incomeENRData.appointmentId,
            patientId: incomeENRData.patientId
         }
      })
         .then(({ data: { response } }) => {
            setData(response.data);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const deleteData = async (id) => {
      await UrgentApi.deleteEmergencySorters(id).then(() => {
         getData();
      });
   };
   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <div className="attachment-12">
            <div className="list">
               <div className="head">
                  <p>Түүх</p>
                  <div className="flex flex-row gap-2">
                     <Button
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        onClick={() => {
                           setEditMode(false);
                           setIsOpenModal(true);
                        }}
                     >
                        Нэмэх
                     </Button>
                  </div>
               </div>
               <Table
                  rowKey="id"
                  loading={{
                     spinning: isLoading,
                     tip: 'Уншиж байна'
                  }}
                  scroll={{
                     x: 500
                  }}
                  columns={columns}
                  dataSource={data}
                  pagination={false}
               />
            </div>
         </div>
         <Modal
            title="Эрэмблэн ангилалт"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            destroyOnClose
            footer={null}
         >
            <Customized
               propsUsageType={incomeENRData.usageType}
               isEdit={editMode}
               editId={editMode ? selectedData.id : null}
               document={editMode ? { ...selectedData, formId: document.formId } : document}
               documentValue={110}
               documentType={0}
               onOk={(state) => {
                  getData();
                  setIsOpenModal(state);
               }}
               isBackButton={false}
               handleBackButton={() => null}
            />
         </Modal>
      </div>
   );
};
export default EmergencySorter;
