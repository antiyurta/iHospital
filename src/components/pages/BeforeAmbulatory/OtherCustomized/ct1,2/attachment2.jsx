import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { Button, Modal, Table } from 'antd';
import Customized from '../../../BeforeAmbulatory/Customized/Index';
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
import {
   colorMindews,
   colorPulsews,
   colorRespiratoryews,
   colorSpoews,
   colorSystolews,
   colorTempews,
   colorTotal,
   highPressureRightCalculator,
   mindCalculator,
   pulseCalculator,
   respiratoryRateCalculator,
   spO2Calculator,
   tempCalculator,
   totalCalculator
} from '../../../../injection';
import { formatNameForDoc } from '../../../../common';
import { ArrowRightOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { regularByDocumentValueIn } from '../../../../documentInjection';
import EmrContext from '../../../../../features/EmrContext';
import DocumentViewer from '../../../EMR/DocumentViewer';
import DocumentsFormServices from '../../../../../services/organization/document';
const Attachment2 = ({ document }) => {
   ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { setDocumentView, isViewDocument } = useContext(EmrContext);
   const [editMode, setEditMode] = useState(false);
   const [selectedData, setSelectedData] = useState({});
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const getData = async () => {
      setIsLoading(true);
      await DocumentsFormServices.get({
         params: {
            appointmentId: incomeEmrData.inpatientRequestId,
            patientId: incomeEmrData.patientId,
            documentId: 87,
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
         title: 'Систол',
         dataIndex: ['data', 'highPressureRight'],
         render: (text) => {
            return {
               props: {
                  style: { background: colorSystolews(text) }
               },
               children: <div title={text}>{highPressureRightCalculator(text)}</div>
            };
         }
      },
      {
         title: 'Халуун',
         dataIndex: ['data', 'temp'],
         render: (text) => {
            return {
               props: {
                  style: { background: colorTempews(text) }
               },
               children: <div title={text}>{tempCalculator(text)}</div>
            };
         }
      },
      {
         title: 'Амьсгал',
         dataIndex: ['data', 'respiratoryRate'],
         render: (text) => {
            return {
               props: {
                  style: { background: colorRespiratoryews(text) }
               },
               children: <div title={text}>{respiratoryRateCalculator(text)}</div>
            };
         }
      },
      {
         title: `SpO'2`,
         dataIndex: ['data', 'spO2'],
         render: (text) => {
            return {
               props: {
                  style: { background: colorSpoews(text) }
               },
               children: <div title={text}>{spO2Calculator(text)}</div>
            };
         }
      },
      {
         title: `Пульс`,
         dataIndex: ['data', 'pulse'],
         render: (text) => {
            return {
               props: {
                  style: { background: colorPulsews(text) }
               },
               children: <div title={text}>{pulseCalculator(text)}</div>
            };
         }
      },
      {
         title: 'Ухаан санаа',
         dataIndex: ['data', 'mind'],
         render: (text) => {
            return {
               props: {
                  style: { background: colorMindews(text) }
               },
               children: <div title={text}>{mindCalculator(text)}</div>
            };
         }
      },
      {
         title: 'Нийт',
         dataIndex: 'data',
         render: (record) => {
            return {
               props: {
                  style: { background: colorTotal(record) }
               },
               children: <div title={totalCalculator(record)?.message}>{totalCalculator(record)?.total}</div>
            };
         }
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
               <div className="graph">
                  <div className="line">
                     <Bar
                        options={{
                           responsive: true,
                           maintainAspectRatio: false,
                           plugins: {
                              legend: {
                                 display: true,
                                 position: 'bottom'
                              },
                              title: {
                                 display: true,
                                 position: 'top',
                                 text: 'VS - ын диаграмм',
                                 color: 'black'
                              }
                           }
                        }}
                        data={{
                           labels: data?.map((item) => dayjs(item.createdAt).format('YYYY-MM-DD HH:mm')),
                           datasets: [
                              {
                                 label: 'Амьсгал',
                                 data: data?.slice(-7)?.map((item) => item.data?.respiratoryRate),
                                 borderColor: ['#2596be'],
                                 backgroundColor: '#2596be',
                                 borderRadius: 15
                              },
                              {
                                 label: 'SPO2',
                                 data: data?.slice(-7)?.map((item) => item.data?.spO2),
                                 borderColor: ['#21130d'],
                                 backgroundColor: '#21130d',
                                 borderRadius: 15
                              },
                              {
                                 label: 'Пульс',
                                 data: data?.slice(-7)?.map((item) => item.data?.pulse),
                                 borderColor: ['#ff0000'],
                                 backgroundColor: '#ff0000',
                                 borderRadius: 15
                              }
                           ]
                        }}
                     />
                  </div>
                  <div className="line">
                     <Bar
                        options={{
                           responsive: true,
                           maintainAspectRatio: false,
                           plugins: {
                              legend: {
                                 display: true,
                                 position: 'bottom'
                              },
                              title: {
                                 display: true,
                                 position: 'top',
                                 text: 'Даралтын диаграмм',
                                 color: 'black'
                              }
                           }
                        }}
                        data={{
                           labels: data?.map((item) => dayjs(item.createdAt).format('YYYY-MM-DD HH:mm')),
                           datasets: [
                              {
                                 label: 'Дээд даралт',
                                 data: data?.slice(-7)?.map((item) => item.data?.highPressureRight),
                                 borderColor: ['#c51ceb'],
                                 backgroundColor: '#c51ceb',
                                 borderRadius: 15
                              },
                              {
                                 label: 'Доод даралт',
                                 data: data?.slice(-7)?.map((item) => item.data?.lowPressureRight),
                                 borderColor: ['#2596be'],
                                 backgroundColor: '#2596be',
                                 borderRadius: 15
                              },
                              {
                                 label: 'Халуун',
                                 data: data?.slice(-7)?.map((item) => item.data?.temp),
                                 borderColor: ['#000000'],
                                 backgroundColor: '#000000',
                                 borderRadius: 15
                              }
                           ]
                        }}
                     />
                  </div>
               </div>
            </div>
         )}
         <Modal
            title="Маягт бөглөх"
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            footer={null}
            destroyOnClose
         >
            <Customized
               propsUsageType={incomeEmrData.usageType}
               isEdit={editMode}
               editId={editMode ? selectedData._id : null}
               document={editMode ? selectedData : document}
               documentValue={87}
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
export default Attachment2;
