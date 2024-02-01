import React, { useContext, useEffect, useState } from 'react';
import jwtInterceopter from '../../../../jwtInterceopter';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { Button, Modal, Table } from 'antd';
import { ArrowRightOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Customized from '../../../BeforeAmbulatory/Customized/Index';
import dayjs from 'dayjs';

import { i18Little, regularByDocumentValueIn } from '../../../../documentInjection';
import EmrContext from '../../../../../features/EmrContext';
import DocumentViewer from '../../../EMR/DocumentViewer';

const Attachment14 = ({ document }) => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { setDocumentView, isViewDocument } = useContext(EmrContext);
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [selectedData, setSelectedData] = useState({});
   const [data, setData] = useState([]);
   const getData = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               appointmentId: incomeEmrData.inpatientRequestId,
               patientId: incomeEmrData.patientId,
               documentId: 96,
               usageType: incomeEmrData.usageType
            }
         })
         .then(({ data: { response } }) => {
            setData(response);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => {
            return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
         }
      },
      {
         title: 'Мэс заслын дараах хоног',
         dataIndex: ['data', 'q1']
      },
      {
         title: 'Цаг',
         dataIndex: ['data', 'q2'],
         render: (time) => dayjs(time)?.format('HH:mm')
      },
      {
         title: 'Өвдөлтийн байрлал',
         dataIndex: ['data', 'q3'],
         render: (q3) => {
            return Object.entries(q3)?.map(([key]) => <div>{i18Little[key]}</div>);
         }
      },
      {
         title: 'Өвдөлтийн хүч*',
         dataIndex: ['data', 'q4']
      },
      {
         title: '',
         render: (_, row) => (
            <Button
               onClick={() => {
                  setEditMode(true);
                  setIsOpenModal(true);
                  setSelectedData(row);
               }}
            >
               edit
            </Button>
         )
      }
   ];

   useEffect(() => {
      getData();
   }, []);
   return (
      <div>
         {isViewDocument ? (
            <DocumentViewer />
         ) : (
            <div className="attachment-13">
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
                        <Button
                           icon={<ArrowRightOutlined />}
                           onClick={() => {
                              const documents = regularByDocumentValueIn(data);
                              setDocumentView(true, documents, 'many');
                           }}
                        >
                           Дэлгэрэнгүй
                        </Button>
                     </div>
                  </div>
                  <Table
                     rowKey="_id"
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
         )}

         <Modal title="Маягт бөглөх" open={isOpenModal} onCancel={() => setIsOpenModal(false)} footer={null}>
            <Customized
               propsUsageType="IN"
               isEdit={editMode}
               editId={editMode ? selectedData._id : null}
               document={editMode ? selectedData : document}
               documentValue={96}
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
export default Attachment14;
