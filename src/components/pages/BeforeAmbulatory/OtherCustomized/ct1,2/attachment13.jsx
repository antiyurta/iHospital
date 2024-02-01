import { Button, Modal, Table } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import Customized from '../../../BeforeAmbulatory/Customized/Index';
import jwtInterceopter from '../../../../jwtInterceopter';
import { formatNameForDoc } from '../../../../comman';
import {
   Chart as ChartJS,
   Tooltip,
   Legend,
   CategoryScale,
   LinearScale,
   PointElement,
   BarElement,
   Title
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';
import { ArrowRightOutlined, PlusCircleOutlined, PrinterOutlined } from '@ant-design/icons';
import { regularByDocumentValueIn } from '../../../../documentInjection';
import EmrContext from '../../../../../features/EmrContext';
import DocumentViewer from '../../../EMR/DocumentViewer';

import DocumentsFormServices from '../../../../../services/organization/document';

const Attachment13 = ({ document }) => {
   ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { setDocumentView, isViewDocument } = useContext(EmrContext);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [selectedData, setSelectedData] = useState({});
   const getData = async () => {
      setIsLoading(true);
      await DocumentsFormServices.get({
         params: {
            appointmentId: incomeEmrData.inpatientRequestId,
            patientId: incomeEmrData.patientId,
            documentId: 91,
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
      await DocumentsFormServices.deleteDocument(id).then(() => {
         getData();
      });
   };
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return dayjs(text).format('YYYY/MM/DD HH:mm');
         }
      },
      {
         title: 'Төрөл',
         dataIndex: ['data', 'q1'],
         render: (text) => {
            if (text === 'q1-1') {
               return 'Биед орсон шингэн';
            } else if (text === 'q1-2') {
               return 'Биеэс гарсан шингэн';
            }
         }
      },
      {
         title: 'Хэрхэн',
         dataIndex: ['data', 'q2'],
         render: (text) => {
            if (text === 'q2-1') {
               return 'Өглөө';
            } else if (text === 'q2-2') {
               return 'Өдөр';
            } else if (text === 'q2-3') {
               return 'Орой';
            }
         }
      },
      {
         title: '',
         children: [
            {
               title: 'Амаар',
               dataIndex: ['data', 'q3'],
               render: (text, row) => {
                  if (row.data?.q1 === 'q1-1') {
                     return `${text} ml`;
                  }
                  return;
               }
            },
            {
               title: 'Шээсээр',
               dataIndex: ['data', 'q3'],
               render: (text, row) => {
                  if (row.data?.q1 === 'q1-2') {
                     return `${text} ml`;
                  }
                  return;
               }
            }
         ]
      },
      {
         title: ' ',
         children: [
            {
               title: 'Гуурсаар',
               dataIndex: ['data', 'q4'],
               render: (text, row) => {
                  if (row.data?.q1 === 'q1-1') {
                     return `${text} ml`;
                  }
                  return;
               }
            },
            {
               title: 'Өтгөнөөр',
               dataIndex: ['data', 'q4'],
               render: (text, row) => {
                  if (row.data?.q1 === 'q1-2') {
                     return `${text} ml`;
                  }
                  return;
               }
            }
         ]
      },
      {
         title: ' ',
         children: [
            {
               title: 'Бусад',
               dataIndex: ['data', 'q5'],
               render: (text, row) => {
                  if (row.data?.q1 === 'q1-1') {
                     return `${text} ml`;
                  }
                  return;
               }
            },
            {
               title: 'Бөөлжүүлэх',
               dataIndex: ['data', 'q5'],
               render: (text, row) => {
                  if (row.data?.q1 === 'q1-2') {
                     return `${text} ml`;
                  }
                  return;
               }
            }
         ]
      },
      {
         title: 'Сувилагч',
         dataIndex: 'createdBy',
         render: (text) => {
            return formatNameForDoc(text.lastName, text.firstName);
         }
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
                     deleteData(row._id);
                  }}
               >
                  delete
               </Button>
            </div>
         )
      }
   ];

   useEffect(() => {
      getData();
   }, []);
   return (
      <>
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
                              console.log('docment', documents);
                              setDocumentView(true, documents, 'many');
                           }}
                        >
                           Дэлгэрэнгүй
                        </Button>
                     </div>
                  </div>
                  <Table
                     rowKey={'_id'}
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
               documentValue={91}
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
export default Attachment13;
