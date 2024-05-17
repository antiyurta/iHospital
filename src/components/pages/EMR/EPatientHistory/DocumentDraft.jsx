import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Space, Table, Tooltip } from 'antd';
import { CheckCircleOutlined, DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
//context
import EmrContext from '@Features/EmrContext';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';
//comp
import { ReturnByIdToName } from '@Pages/611/Document/Index';
import Customized from '@Pages/BeforeAmbulatory/Customized/Index';
//api
import DocumentsFormPatientApi from '@ApiServices/organization/document';
const DocumentDraft = (props) => {
   const { usageType, handleCount } = props;
   const [isLoading, setIsLoading] = useState(false);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [draftedDocuments, setDraftedDocuments] = useState([]);
   const [selectedDocument, setSelectedDocument] = useState({});
   const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
   const { setDocumentDraft, isReloadDocumentHistory, setIsReloadDocumentHistory } = useContext(EmrContext);
   const getDocumentsInDraft = async () => {
      setIsLoading(true);
      await DocumentsFormPatientApi.getByDocument(incomeEmrData.patientId, {
         appointmentId: incomeEmrData.inpatientRequestId,
         type: 'FORM',
         usageType: usageType,
         saveType: 'Draft'
      })
         .then(
            async ({
               data: {
                  response: { response }
               }
            }) => {
               setDraftedDocuments(response);
               setDocumentDraft(response);
               handleCount?.(response?.length);
            }
         )
         .finally(() => {
            setIsLoading(false);
         });
   };
   const changeSaveStatus = (_id) => {
      Modal.confirm({
         content: 'Та маягтаа бүрэн гүйцэт бөглөөрэй!',
         cancelText: 'Болих',
         okText: 'Тийм',
         onOk: async () => {
            return await DocumentsFormPatientApi.patch(_id, {
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
            return await DocumentsFormPatientApi.deleteDocument(_id).then(() => {
               getDocumentsInDraft();
            });
         }
      });
   };
   useEffect(() => {
      isReloadDocumentHistory && getDocumentsInDraft();
   }, [isReloadDocumentHistory]);
   useEffect(() => {
      getDocumentsInDraft();
   }, []);
   return (
      <div>
         <Table
            rowKey="_id"
            loading={isLoading}
            columns={[
               {
                  title: '№',
                  render: (_, _record, index) => index + 1,
                  width: 40
               },
               {
                  title: 'Хувь',
                  width: 60,
                  dataIndex: ['data', 'documentPercent'],
                  render: (percent) => `${percent?.toFixed(1)}%`
               },
               {
                  title: 'Нэр',
                  dataIndex: 'documentId',
                  render: (documentId) => (
                     <div className="whitespace-break-spaces text-start px-2">{ReturnByIdToName(documentId)}</div>
                  )
               },
               {
                  title: 'Огноо',
                  dataIndex: 'createdAt',
                  render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD HH:mm')
               },
               {
                  title: 'Үйлдэл',
                  width: 100,
                  render: (_, row) => (
                     <Space>
                        <Tooltip title="Засах">
                           <EditOutlined
                              onClick={() => {
                                 setIsOpenModalEdit(true);
                                 setSelectedDocument(row);
                              }}
                              className="hover: cursor-pointer text-[#2D8CFF]"
                           />
                        </Tooltip>
                        <Tooltip title="Устгах">
                           <DeleteOutlined
                              onClick={() => onDeleteDocument(row._id)}
                              className="hover: cursor-pointer text-red-500"
                           />
                        </Tooltip>
                        <Tooltip title="Маягт болсон">
                           <CheckCircleOutlined
                              onClick={() => changeSaveStatus(row._id)}
                              className="hover: cursor-pointer text-green-600"
                           />
                        </Tooltip>
                     </Space>
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
               propsUsageType={incomeEmrData.usageType}
               isEdit={true}
               editId={selectedDocument._id}
               document={selectedDocument}
               documentValue={selectedDocument?.documentId}
               documentType={0}
               onOk={(state) => {
                  setIsOpenModalEdit(state);
                  getDocumentsInDraft();
               }}
               isBackButton={false}
               handleIsReload={setIsReloadDocumentHistory}
               handleBackButton={() => null}
            />
         </Modal>
      </div>
   );
};
export default DocumentDraft;
