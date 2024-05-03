import React, { useState } from 'react';
import { Button, Modal, Result } from 'antd';
import { CheckOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

// 112 Мэс засал/мэс ажилбар хийлгэх тухай зөвшөөрлийн хуудас
const includeIds = [112];
//common
import { openNofi } from '@Comman/common';
import { ReturnByIdToCode, ReturnById } from '../../611/Document/Index';
//api
import SurgeryApi from '@ApiServices/service/surgery.api';
import DocumentPatientApi from '@ApiServices/organization/document';

const SurgeryBoss = ({ row, handleRefresh }) => {
   const [isShow, setShow] = useState(false);
   const [isLoadingConfirm, setLoadingConfirm] = useState(false);
   const [isLoading, setLoading] = useState(false);
   const [activeKey, setActiveKey] = useState(null);
   const [isOpenModal, setOpenModal] = useState(false);
   const [documents, setDocuments] = useState([]);
   const [selectedDocument, setSelectedDocument] = useState({});
   const getDocuments = async () => {
      setLoading(true);
      // operation songok appId depId songow
      await DocumentPatientApi.getByDocument(row.patientId, {
         type: 'FORM',
         usageType: row.usageType,
         saveType: 'Save'
      })
         .then(
            ({
               data: {
                  response: { response }
               }
            }) => {
               const filteredDocuments = response?.filter((res) => includeIds.includes(res.documentId));
               setDocuments(
                  filteredDocuments?.map((document) => ({
                     document: document,
                     title: ReturnByIdToCode(document.documentId),
                     documentId: document.documentId
                  }))
               );
               setShow(true);
            }
         )
         .finally(() => {
            setOpenModal(true);
            setLoading(false);
         });
   };
   const showConfirm = () => {
      Modal.confirm({
         okText: 'Балтах',
         title: 'Та батлахдаа итгэлтэй байна уу?',
         icon: <ExclamationCircleOutlined />,
         content: 'Some descriptions',
         okButtonProps: {
            loading: isLoadingConfirm
         },
         async onOk() {
            setLoadingConfirm(true);
            await SurgeryApi.postRequestConfirm({
               columnId: 4,
               description: 'TEST CONFIRM',
               taskId: row.id
            }).finally(() => {
               handleRefresh();
               openNofi('success', 'Амжилттай', 'Амжилттай батлагдлаа');
               setOpenModal(false);
               setLoadingConfirm(false);
            });
         },
         onCancel() {
            console.log('Cancel');
         }
      });
   };
   return (
      <>
         <Button
            type="primary"
            icon={<CheckOutlined />}
            loading={isLoading}
            className="flex flex-row items-center"
            onClick={() => {
               getDocuments();
            }}
         >
            Батлах
         </Button>
         <Modal
            title="Батлах цонх"
            open={isOpenModal}
            onCancel={() => {
               setOpenModal(false);
            }}
            onOk={() => {
               showConfirm();
            }}
            cancelText="Хаах"
            okText="Батлах"
            width="80%"
         >
            {isShow ? (
               <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="h-[550px] overflow-auto">
                        <div className="flex flex-col gap-2 p-2">
                           {documents?.map((document, index) => (
                              <button
                                 key={index}
                                 onClick={() => {
                                    setActiveKey(document.documentId);
                                    setSelectedDocument(document.document);
                                 }}
                                 className={`list-type ${activeKey === document.documentId ? 'active' : ''}`}
                              >
                                 {document.title}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block col-span-2 p-2">
                     <ReturnById
                        type={row.usageType}
                        id={selectedDocument.documentId}
                        appointmentId={row.inpatientRequestId || row.appointmentId}
                        data={{
                           formData: selectedDocument.data,
                           history: selectedDocument.history,
                           createdAt: selectedDocument.createdAt
                        }}
                     />
                  </div>
               </div>
            ) : (
               <Result title="TEST" />
            )}
         </Modal>
      </>
   );
};
export default SurgeryBoss;
