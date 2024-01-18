import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { Button, Empty, Modal, Table, Tabs } from 'antd';
import { ReturnById, ReturnByIdToCode } from '../../../611/Document/Index';
import dayjs from 'dayjs';
import Customized from '../../../BeforeAmbulatory/Customized/Index';
import arrow from '../document/arrow.svg';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import ReactToPrint from 'react-to-print';

import Document from './document';
import GroupDocument from './groupDocument';

import apiAppointmentService from '../../../../../services/appointment/api-appointment-service';
import DocumentsFormPatientService from '../../../../../services/organization/document';
import serviceService from '../../../../../services/service/service';
import { Each } from '../../../../../features/Each';

const DocumentHistory = () => {
   const currentRef = useRef(null);
   const elementsRef = useRef([]);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { usageType } = incomeEmrData;
   const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
   const [isOpenModalView, setIsOpenModalView] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [documentsOut, setDocuments] = useState([]);
   const [documentsIn, setDocumentsIn] = useState([]);
   const [documentsInNurse, setDocumentsInNurse] = useState([]);
   const [documentsInDoctor, setDocumentsInDoctor] = useState([]);
   const [selectedDocument, setSelectedDocument] = useState({});
   const [selectedDocuments, setSelectedDocuments] = useState([]);
   const [selectedId, setSelectedId] = useState(false);
   const groupedByAppointmentId = (documents) => {
      // hewtengiin maygtuud angilah
      return documents.reduce((apps, document) => {
         const { appointmentId } = document;
         if (!apps[appointmentId]) {
            apps[appointmentId] = [];
         }
         apps[appointmentId].push(document);
         return apps;
      }, {});
   };
   const groupByDocumentValueIn = (groupedDocuments) => {
      var result = {};
      Object?.entries(groupedDocuments)?.map(([key, value]) => {
         result[key] = [];
         value?.map((document, index) => {
            const { formType, documentId } = document;
            if (formType != 1) {
               result[key].push({
                  unikey: index,
                  isExpand: false,
                  ...document
               });
            } else {
               const isInclude = !!result[key]?.find((res) => res.documentId === documentId);
               if (isInclude) {
                  const index = result[key].findIndex((res) => res.documentId === documentId);
                  result[key][index].children.push(document);
               } else {
                  result[key].push({
                     unikey: index,
                     isExpand: true,
                     documentId: documentId,
                     children: [document]
                  });
               }
            }
         });
      });
      return result;
   };
   const getDocumentsHistory = async () => {
      setIsLoading(true);
      await DocumentsFormPatientService.getByDocument(incomeEmrData.patientId, {
         type: 'FORM',
         usageType: usageType
      })
         .then(
            async ({
               data: {
                  response: { response }
               }
            }) => {
               if (response?.length > 0) {
                  if (usageType === 'OUT') {
                     const sortedResponse = response.sort((a, b) => a.createdAt - b.createdAt);
                     setDocuments(sortedResponse);
                  } else if (usageType === 'IN') {
                     const sortedResponse = response.sort((a, b) => a.position - b.position);
                     const groupedDocuments = groupedByAppointmentId(sortedResponse);
                     const grouped = groupByDocumentValueIn(groupedDocuments);
                     figureOut(grouped);
                  }
               } else {
                  figureOut({});
               }
            }
         )
         .finally(() => {
            setIsLoading(false);
         });
   };
   const deleteDocument = async (id) => {
      DocumentsFormPatientService.deleteDocument(id).then((response) => {
         getDocumentsHistory();
      });
   };
   const getInpatientRequest = async (id, index, value) => {
      return await serviceService.getInpatientRequestById(id).then(({ data: { response } }) => {
         return {
            index: index,
            structureName: response.structure?.name,
            date: {
               startDate: response.startDate,
               endDate: response.endDate
            },
            documents: value
         };
      });
   };
   const figureOut = async (groupedDocuments) => {
      const promises = Object?.entries(groupedDocuments)?.map(async ([key, value], index) => {
         return await getInpatientRequest(key, index, value);
      });
      const items = await Promise.all(promises);
      console.log('items', items);
      setDocumentsInDoctor(items);
   };

   const ambColumns = [
      {
         title: '№',
         render: (_text, _row, rowIndex) => {
            return rowIndex + 1;
         }
      },
      {
         title: 'Нэр',
         dataIndex: 'documentId',
         render: (text) => {
            return <span className="whitespace-pre-wrap">{ReturnByIdToCode(text)}</span>;
         }
      },
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return dayjs(text).format('YYYY/MM/DD HH:mm');
         }
      },
      {
         title: 'засах',
         dataIndex: '_id',
         render: (text) => {
            return <Button onClick={() => console.log(text)}>1</Button>;
         }
      },
      {
         title: 'Харах',
         render: (_text, row) => {
            return (
               <Button
                  onClick={() => {
                     setSelectedDocuments(row);
                     setIsOpenModalView(true);
                  }}
               >
                  1
               </Button>
            );
         }
      }
   ];

   const inColumns = [
      {
         title: '№',
         render: (_text, _row, rowIndex) => {
            return rowIndex + 1;
         }
      },
      {
         title: 'Тасаг',
         dataIndex: 'structureName'
      },
      {
         title: 'Хуцагцаа',
         dataIndex: 'date',
         render: (text) => {
            const startDate = dayjs(text.startDate).format('YYYY/MM/DD');
            const endDate = dayjs(text.endDate).format('YYYY/MM/DD');
            return `${startDate} -> ${endDate}`;
         }
      },
      {
         title: '',
         dataIndex: 'documents',
         render: (text) => (
            <img
               onClick={() => {
                  setSelectedDocuments(text);
                  setIsOpenModalView(true);
               }}
               src={arrow}
            />
         )
      }
   ];

   const expandable = {
      expandedRowRender: (record) => {
         const { documents } = record;
         const getPercent = (percents) => {
            if (typeof percents === 'number') {
               return `${percents.toFixed(2)} %`;
            } else {
               let sum = percents?.reduce((sum, percent) => sum + percent, 0);
               return `${(sum / percents?.length).toFixed(2)} %`;
            }
         };
         return (
            <div className="pl-4">
               <Table
                  rowKey={'_id'}
                  columns={[
                     {
                        title: 'Хувь',
                        dataIndex: 'isExpand',
                        align: 'left',
                        render: (isExpand, row) => {
                           if (!isExpand) {
                              return getPercent(row.data.documentPercent);
                           } else {
                              return getPercent(row.children?.map((child) => child.data.documentPercent));
                           }
                        }
                     },
                     {
                        title: 'Маягт',
                        align: 'left',
                        dataIndex: 'documentId',
                        render: (text, row) => {
                           if (row.formType != 1) {
                              return ReturnByIdToCode(text);
                           } else {
                              return dayjs(row.createdAt).format('YYYY/MM/DD HH:mm');
                           }
                        }
                     },
                     {
                        title: ' ',
                        dataIndex: 'isExpand',
                        align: 'right',
                        render: (isExpand, row) => {
                           if (!isExpand) {
                              return (
                                 <div className="flex flex-row gap-2 justify-end">
                                    <EditOutlined
                                       style={{
                                          color: 'blue'
                                       }}
                                       onClick={() => {
                                          setSelectedId(row._id);
                                          setIsOpenModalEdit(true);
                                          setSelectedDocument(row);
                                       }}
                                    />
                                    {row.formType != 1 ? (
                                       <EyeOutlined
                                          style={{
                                             color: 'green'
                                          }}
                                          onClick={() => {
                                             setSelectedDocuments([row]);
                                             setIsOpenModalView(true);
                                          }}
                                       />
                                    ) : null}
                                    <DeleteOutlined
                                       style={{
                                          color: 'red'
                                       }}
                                       onClick={() => deleteDocument(row._id)}
                                    />
                                 </div>
                              );
                           } else {
                              return (
                                 <EyeOutlined
                                    style={{
                                       color: 'green'
                                    }}
                                    onClick={() => {
                                       setSelectedDocuments([row]);
                                       setIsOpenModalView(true);
                                    }}
                                 />
                              );
                           }
                        }
                     }
                  ]}
                  dataSource={documents}
                  pagination={false}
               />
            </div>
         );
      }
   };

   useEffect(() => {
      getDocumentsHistory();
   }, []);
   return (
      <div className="list-of-orders">
         {usageType === 'OUT' ? (
            documentsOut
               ?.filter((documentOut) => documentOut.documentId != 87)
               .map((fDocumentOut, index) => (
                  <Document key={index} document={fDocumentOut} index={index} incomeEmrData={incomeEmrData} />
               ))
         ) : (
            <Tabs
               type="card"
               tabBarStyle={{
                  backgroundColor: 'white'
               }}
               items={[
                  {
                     key: 1,
                     label: 'Эмч',
                     children: (
                        <div className="documents-in">
                           <Each
                              of={documentsInDoctor}
                              render={(documentInDoctor, index) => (
                                 <GroupDocument key={index} document={documentInDoctor} />
                              )}
                           />
                        </div>
                     )
                  },
                  {
                     key: 2,
                     label: 'Сувилагч'
                  }
               ]}
            />
         )}
         {/* <Table
            rowKey={usageType === 'OUT' ? '_id' : 'index'}
            rowClassName="hover: cursor-pointer"
            locale={{
               emptyText: <Empty description={'Хоосон'} />
            }}
            expandable={usageType != 'OUT' ? expandable : null}
            loading={{
               spinning: isLoading,
               tip: 'Уншиж байна....'
            }}
            columns={usageType === 'OUT' ? ambColumns : inColumns}
            dataSource={usageType === 'OUT' ? documentsIn : documentsOut}
            pagination={false}
         /> */}
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
               isEdit={true}
               editId={selectedId}
               document={selectedDocument}
               documentValue={selectedDocument?.documentId}
               documentType={0}
               onOk={(state) => {
                  setIsOpenModalEdit(state);
                  getDocumentsHistory();
               }}
            />
         </Modal>
         <Modal
            width={'21cm'}
            title="Маягт харах"
            open={isOpenModalView}
            onCancel={() => setIsOpenModalView(false)}
            bodyStyle={{
               width: '19cm',
               margin: 'auto'
            }}
         >
            {selectedDocuments.length > 1 ? (
               <ReactToPrint
                  trigger={() => {
                     return <Button type="primary">Хэвлэх</Button>;
                  }}
                  content={() => currentRef.current}
               />
            ) : null}
            <div ref={currentRef} className="new-form">
               {selectedDocuments?.map((document, index) => {
                  return (
                     <div key={index}>
                        {selectedDocuments.length === 1 ? (
                           <ReactToPrint
                              trigger={() => {
                                 return <Button type="primary">Хэвлэх</Button>;
                              }}
                              content={() => elementsRef.current[index]}
                           />
                        ) : null}
                        <div
                           key={index}
                           ref={(ref) => {
                              elementsRef.current[index] = ref;
                           }}
                        >
                           <ReturnById
                              type={usageType}
                              id={document.documentId}
                              appointmentId={incomeEmrData.inpatientRequestId || incomeEmrData.appointmentId}
                              data={{
                                 formData: document.isExpand ? document.children?.map((dD) => dD.data) : document.data,
                                 patientData: {}
                              }}
                              hospitalName={'hospitalName'}
                           />
                        </div>
                     </div>
                  );
               })}
            </div>
         </Modal>
      </div>
   );
};
export default DocumentHistory;
