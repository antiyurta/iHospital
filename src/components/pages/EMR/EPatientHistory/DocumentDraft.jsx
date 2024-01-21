import React, { useContext, useEffect, useState } from 'react';

import DocumentsFormPatientService from '../../../../services/organization/document';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
import EmrContext from '../../../../features/EmrContext';
import { Modal, Table } from 'antd';
import { ReturnByIdToName } from '../../611/Document/Index';
import { CheckCircleOutlined, DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import Customized from '../../BeforeAmbulatory/Customized/Index';
const DocumentDraft = () => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { setDocumentDraft, setIsReloadDocumentHistory } = useContext(EmrContext);
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
   const [draftedDocuments, setDraftedDocuments] = useState([]);
   //
   const [selectedId, setSelectedId] = useState(null);
   const [selectedDocument, setSelectedDocument] = useState({});
   //
   const getDocumentsInDraft = async () => {
      setIsLoading(true);
      await DocumentsFormPatientService.getByDocument(incomeEmrData.patientId, {
         appointmentId: incomeEmrData.inpatientRequestId,
         type: 'FORM',
         usageType: incomeEmrData.usageType,
         saveType: 'Draft'
      })
         .then(
            async ({
               data: {
                  response: { response }
               }
            }) => {
               console.log(response);
               setDraftedDocuments(response);
               setDocumentDraft(response?.length);
               //    if (response?.length > 0) {
               //       if (usageType === 'OUT') {
               //          const sortedResponse = response.sort((a, b) => a.createdAt - b.createdAt);
               //          setDocuments(sortedResponse);
               //       } else if (usageType === 'IN') {
               //          const sortedResponse = response.sort((a, b) => a.position - b.position);
               //          const groupedDocuments = groupedByAppointmentId(sortedResponse);
               //          const grouped = groupByDocumentValueIn(groupedDocuments);
               //          figureOut(grouped);
               //       }
               //    } else {
               //       figureOut({});
               //    }
            }
         )
         .finally(() => {
            setIsLoading(false);
         });
   };
   const changeSaveStatus = (_id) => {
      Modal.confirm({
         content: 'Та маягтаа бүрэнгүйцэт бөглөөрөй',
         cancelText: 'Болих',
         okText: 'Тийм',
         onOk: async () => {
            return await DocumentsFormPatientService.patch(_id, {
               saveType: 'Save'
            }).then(() => {
               getDocumentsInDraft();
               setIsReloadDocumentHistory(true);
            });
         }
      });
   };
   const onDeleteDocument = (_id) => {
      Modal.confirm({
         icon: <ExclamationCircleFilled />,
         content: 'Та маягтаа устгахдаа итгэлтэй байна уу',
         cancelText: 'Болих',
         okText: 'Тийм',
         okType: 'danger',
         onOk: async () => {
            return await DocumentsFormPatientService.deleteDocument(_id).then(() => {
               getDocumentsInDraft();
            });
         }
      });
   };
   useEffect(() => {
      getDocumentsInDraft();
   }, []);
   return (
      <div>
         <Table
            rowKey="value"
            columns={[
               {
                  title: '№',
                  render: (_, _record, index) => index + 1,
                  width: 40
               },
               {
                  title: 'Хувь',
                  dataIndex: ['data', 'documentPercent'],
                  render: (percent) => `${percent?.toFixed(1)}%`
               },
               {
                  title: 'Нэр',
                  dataIndex: 'documentId',
                  render: (documentId) => ReturnByIdToName(documentId)
               },
               {
                  title: 'Огноо',
                  dataIndex: 'createdAt',
                  render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD HH:mm')
               },
               {
                  title: ' ',
                  render: (_, row) => (
                     <p
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           gap: 8
                        }}
                     >
                        <EditOutlined
                           onClick={() => {
                              setIsOpenModalEdit(true);
                              setSelectedId(row._id);
                              setSelectedDocument(row);
                           }}
                           className="hover: cursor-pointer text-[#2D8CFF]"
                        />
                        <DeleteOutlined
                           onClick={() => onDeleteDocument(row._id)}
                           className="hover: cursor-pointer text-red-500"
                        />
                        <CheckCircleOutlined
                           onClick={() => changeSaveStatus(row._id)}
                           className="hover: cursor-pointer text-green-600"
                        />
                     </p>
                     //  <div
                     //     className="hover: cursor-pointer"
                     //     onClick={() => {
                     //        setCurrentMonitor(MonitorType.Document);
                     //        setSelectedDocument(row);
                     //     }}
                     //  >
                     //     <img src={ArrowIcon} alt="sda" />
                     //  </div>
                  )
               }
            ]}
            dataSource={draftedDocuments}
            pagination={false}
         />
         <Modal
            title="Маягт засах"
            open={isOpenModalEdit}
            onCancel={() => {
               setIsOpenModalEdit(false);
            }}
            width={700}
            destroyOnClose
            footer={false}
         >
            <Customized
               propsUsageType="IN"
               isEdit={true}
               editId={selectedId}
               document={selectedDocument}
               documentValue={selectedDocument?.documentId}
               documentType={0}
               onOk={(state) => {
                  setIsOpenModalEdit(state);
                  getDocumentsInDraft();
               }}
               isBackButton={false}
               handleBackButton={() => null}
            />
         </Modal>
      </div>
   );
};
export default DocumentDraft;
