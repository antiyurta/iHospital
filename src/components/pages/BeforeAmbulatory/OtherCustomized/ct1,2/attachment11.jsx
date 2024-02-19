import React, { useContext, useEffect, useState } from 'react';
import DocumentViewer from '../../../EMR/DocumentViewer';
import EmrContext from '../../../../../features/EmrContext';
import { Button, Collapse, Modal, Table } from 'antd';
import { ArrowRightOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { regularByDocumentValueIn } from '../../../../documentInjection';
import Customized from '../../../BeforeAmbulatory/Customized/Index';
import DocumentFormServices from '../../../../../services/organization/document';

import { columns1, columns2, columns3, columns4, columns5, columns6 } from './injection11';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { useSelector } from 'react-redux';

const { Panel } = Collapse;

const Attachment11 = ({ document }) => {
   const { isViewDocument, setDocumentView } = useContext(EmrContext);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [editMode, setEditMode] = useState(false);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectedData, setSelectedData] = useState({});

   const getData = async () => {
      setIsLoading(true);
      await DocumentFormServices.get({
         params: {
            appointmentId: incomeEmrData.inpatientRequestId,
            patientId: incomeEmrData.patientId,
            documentId: 89,
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
   const deleteData = async (id) => {
      await DocumentFormServices.deleteDocument(id).then(() => {
         getData();
      });
   };
   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         {isViewDocument ? (
            <DocumentViewer />
         ) : (
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
                  <div className="flex flex-col gap-2">
                     <p className="bg-white font-bold">ӨДӨР ТУТМЫН ҮНЭЛГЭЭ</p>
                     <Collapse>
                        <Panel header="1. Амьсгал/ Зүрх судас">
                           <Table
                              bordered
                              rowKey="_id"
                              loading={{
                                 spinning: isLoading,
                                 tip: 'Уншиж байна'
                              }}
                              scroll={{
                                 x: 500
                              }}
                              columns={[
                                 ...columns1,
                                 ...[
                                    {
                                       title: '',
                                       render: (_, row) => (
                                          <>
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
                                                   deleteData(row._id);
                                                }}
                                             >
                                                delete
                                             </Button>
                                          </>
                                       )
                                    }
                                 ]
                              ]}
                              dataSource={data}
                              pagination={false}
                           />
                        </Panel>
                        <Panel header="2. Хоол боловсруулалт">
                           <Table
                              bordered
                              rowKey="_id"
                              loading={{
                                 spinning: isLoading,
                                 tip: 'Уншиж байна'
                              }}
                              scroll={{
                                 x: 500
                              }}
                              columns={[
                                 ...columns2,
                                 ...[
                                    {
                                       title: '',
                                       render: (_, row) => (
                                          <>
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
                                                   deleteData(row._id);
                                                }}
                                             >
                                                delete
                                             </Button>
                                          </>
                                       )
                                    }
                                 ]
                              ]}
                              dataSource={data}
                              pagination={false}
                           />
                        </Panel>
                        <Panel header="3. Шээс ялгаруулалт">
                           <Table
                              bordered
                              rowKey="_id"
                              loading={{
                                 spinning: isLoading,
                                 tip: 'Уншиж байна'
                              }}
                              scroll={{
                                 x: 500
                              }}
                              columns={[
                                 ...columns3,
                                 ...[
                                    {
                                       title: '',
                                       render: (_, row) => (
                                          <>
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
                                                   deleteData(row._id);
                                                }}
                                             >
                                                delete
                                             </Button>
                                          </>
                                       )
                                    }
                                 ]
                              ]}
                              dataSource={data}
                              pagination={false}
                           />
                        </Panel>
                        <Panel header="4. Арьс">
                           <Table
                              bordered
                              rowKey="_id"
                              loading={{
                                 spinning: isLoading,
                                 tip: 'Уншиж байна'
                              }}
                              scroll={{
                                 x: 500
                              }}
                              columns={[
                                 ...columns4,
                                 ...[
                                    {
                                       title: '',
                                       render: (_, row) => (
                                          <>
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
                                                   deleteData(row._id);
                                                }}
                                             >
                                                delete
                                             </Button>
                                          </>
                                       )
                                    }
                                 ]
                              ]}
                              dataSource={data}
                              pagination={false}
                           />
                        </Panel>
                        <Panel header="5. Мэдрэл, сэтгэхүйн байдал">
                           <Table
                              bordered
                              rowKey="_id"
                              loading={{
                                 spinning: isLoading,
                                 tip: 'Уншиж байна'
                              }}
                              scroll={{
                                 x: 500
                              }}
                              columns={[
                                 ...columns5,
                                 ...[
                                    {
                                       title: '',
                                       render: (_, row) => (
                                          <>
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
                                                   deleteData(row._id);
                                                }}
                                             >
                                                delete
                                             </Button>
                                          </>
                                       )
                                    }
                                 ]
                              ]}
                              dataSource={data}
                              pagination={false}
                           />
                        </Panel>
                     </Collapse>
                     <p className="bg-white font-bold">ӨДӨР ТУТМЫН СУВИЛГАА</p>
                     <Collapse>
                        <Panel header="6. ӨДӨР ТУТМЫН СУВИЛГАА">
                           <Table
                              bordered
                              rowKey="_id"
                              loading={{
                                 spinning: isLoading,
                                 tip: 'Уншиж байна'
                              }}
                              scroll={{
                                 x: 500
                              }}
                              columns={[
                                 ...columns6,
                                 ...[
                                    {
                                       title: '',
                                       render: (_, row) => (
                                          <>
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
                                                   deleteData(row._id);
                                                }}
                                             >
                                                delete
                                             </Button>
                                          </>
                                       )
                                    }
                                 ]
                              ]}
                              dataSource={data}
                              pagination={false}
                           />
                        </Panel>
                     </Collapse>
                  </div>
               </div>
            </div>
         )}
         <Modal
            title="Маягт бөглөх"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            destroyOnClose
            footer={null}
         >
            <Customized
               propsUsageType="IN"
               isEdit={editMode}
               editId={editMode ? selectedData._id : null}
               document={editMode ? selectedData : document}
               documentValue={89}
               documentType={0}
               onOk={(state) => {
                  getData();
                  setIsOpenModal(state);
               }}
               isBackButton={false}
               handleBackButton={() => null}
            />
         </Modal>
      </>
   );
};
export default Attachment11;
