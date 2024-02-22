import React, { useContext, useEffect, useState } from 'react';
import DocumentsFormPatientService from '../../../../services/organization/document';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
import EmrContext from '../../../../features/EmrContext';
import { Modal, Table, Tooltip } from 'antd';
import { ReturnByIdToName } from '../../611/Document/Index';
import { CheckCircleOutlined, DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import dayjs from 'dayjs';
import Customized from '../../BeforeAmbulatory/Customized/Index';
const DocumentDraft = (props) => {
   const { usageType, handleCount } = props;
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { setDocumentDraft, isReloadDocumentHistory, setIsReloadDocumentHistory } = useContext(EmrContext);
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
   const [draftedDocuments, setDraftedDocuments] = useState([]);
   const [selectedDocument, setSelectedDocument] = useState({});

   const getDocumentsInDraft = async () => {
      setIsLoading(true);
      await DocumentsFormPatientService.getByDocument(incomeEmrData.patientId, {
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
               if (usageType === 'IN') {
                  setDocumentDraft(response);
               } else {
                  handleCount?.(response?.length);
               }
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
                  title: 'Үйлдэл',
                  render: (_, row) => (
                     <p
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           gap: 8,
                           justifyContent: 'center'
                        }}
                     >
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
                     </p>
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
               propsUsageType={usageType}
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
               handleBackButton={() => null}
            />
         </Modal>
      </div>
   );
};
export default DocumentDraft;
