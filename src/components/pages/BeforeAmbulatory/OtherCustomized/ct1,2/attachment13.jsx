import { Button, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
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
import { PlusCircleOutlined, PrinterOutlined } from '@ant-design/icons';
const Attachment13 = ({ document }) => {
   ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const getData = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .get('document-middleware', {
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
      }
   ];

   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         <div className="attachment-13">
            <div className="list">
               <div className="head">
                  <p>Түүх</p>
                  <div className="flex flex-row gap-2">
                     <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => setIsOpenModal(true)}>
                        Нэмэх
                     </Button>
                     <Button icon={<PrinterOutlined />}>Хэвлэх</Button>
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
         <Modal title="Маягт бөглөх" open={isOpenModal} onCancel={() => setIsOpenModal(false)}>
            <Customized
               document={document}
               documentValue={91}
               documentType={0}
               onOk={(state) => {
                  getData();
                  setIsOpenModal(state);
               }}
            />
         </Modal>
      </>
   );
};
export default Attachment13;
