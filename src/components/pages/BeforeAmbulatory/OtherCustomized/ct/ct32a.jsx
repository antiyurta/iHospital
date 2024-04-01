import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'antd';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
//comp
import Customized from '@Pages/BeforeAmbulatory/Customized/Index';
//api
import DocumentsFormApi from '@ApiServices/organization/document';
import AppointmentApi from '@ApiServices/appointment/api-appointment-service';
//feature
import { selectCurrentEmrData } from '@Features/emrReducer';
const ct32a = ({ document }) => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   // yaralta duudlaga
   const getData = async () => {
      setIsLoading(true);
      await DocumentsFormApi.get({
         params: {
            documentId: 111,
            patientId: incomeEmrData.patientId,
            usageType: incomeEmrData.usageType,
            appointmentId: incomeEmrData.appointmentId
         }
      })
         .then(({ data: { response } }) => {
            setData(response);
            setIsLoading(false);
         })
         .catch((error) => {});
   };

   const patchAppointment = async (id) => {
      await AppointmentApi.patchAppointment(incomeEmrData.appointmentId, {
         urgentInspectionNoteId: id
      }).then(() => {
         getData();
      });
   };

   const deleteD = async (id) => {
      DocumentsFormApi.deleteDocument(id);
   };

   useEffect(() => {
      getData();
   }, []);
   return (
      <div>
         <div className="flex flex-col gap-3">
            <div className="flow-root">
               <div className="float-left">
                  <Button
                     disabled={data?.length > 0 ? true : false}
                     type="primary"
                     onClick={() => {
                        setIsOpenModal(true);
                     }}
                  >
                     Бөглөх
                  </Button>
               </div>
            </div>
            <div>
               <Table
                  rowKey={'_id'}
                  bordered
                  loading={isLoading}
                  columns={[
                     {
                        title: 'Огноо',
                        dataIndex: 'createdAt',
                        render: (text) => {
                           return dayjs(text).format('YYYY-MM-DD HH:mm:ss');
                        }
                     },
                     {
                        title: 'Дуудлагын төрөл',
                        dataIndex: 'hicsServiceId',
                        render: (text) => {
                           // return callServices?.find((e) => e.id === text)?.name;
                        }
                     },
                     {
                        title: 'Оношийн хамааралтай бүлэг',
                        dataIndex: 'drgCode'
                     },
                     {
                        title: 'ICD Код',
                        dataIndex: 'icdCode'
                     },
                     {
                        title: 'sada',
                        dataIndex: '_id',
                        render: (id) => <Button onClick={() => deleteD(id)}>sd</Button>
                     }
                  ]}
                  dataSource={data}
                  pagination={false}
               />
            </div>
         </div>
         <Modal title="CT32A" open={isOpenModal} onCancel={() => setIsOpenModal(false)} footer={null} destroyOnClose>
            <Customized
               propsUsageType={'OUT'}
               isEdit={false}
               editId={null}
               document={document}
               documentValue={document.value}
               documentType={0}
               onOk={(state, response) => {
                  patchAppointment(response._id);
                  setIsOpenModal(state);
               }}
               isBackButton={false}
               handleIsReload={(_state) => null}
               handleBackButton={(_state) => null}
            />
         </Modal>
      </div>
   );
};
export default ct32a;
