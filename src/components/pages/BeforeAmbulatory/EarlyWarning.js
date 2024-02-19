//Амбулаторийн үзлэгийн өмнөх жагсаалт -> Эрт сэрэмжлүүлэх үнэлгээ
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Button, Table, Card, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalName } from '../../../features/authReducer';
// import { Table } from 'react-bootstrap';
import { formatNameForDoc } from '../../comman';
//
import {
   Chart as ChartJS,
   Tooltip,
   Legend,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PlusOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import EarlyWarningPrint from './EarlyWarningPrint';
//
///
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
} from '../../injection';
import Customized from '../BeforeAmbulatory/Customized/Index';
import jwtInterceopter from '../../jwtInterceopter';
import NewCard from '../../Card/Card';
import { ReturnById } from '../611/Document/Index';
import dayjs from 'dayjs';
//

export default function EarlyWarning({ PatientId, StructureId, PatientData, UsageType, ListId, isDoctor }) {
   const [data, setData] = useState([]);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const hospitalName = useSelector(selectCurrentHospitalName);
   const [isLoading, setIsLoading] = useState(false);
   const printRef = useRef();
   const [printLoading, setPrintLoading] = useState(false);

   const handlePrint = useReactToPrint({
      onBeforeGetContent: () => setPrintLoading(true),
      onBeforePrint: () => setPrintLoading(false),
      onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });
   //
   ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
   const vsOptions = {
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
            text: 'VS - ын диаграмм'
         }
      }
   };
   const CDOptions = {
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
            text: 'Даралтын диаграмм'
         }
      }
   };

   // shineer ehlew
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
      }
   ];
   const getData = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               appointmentId: ListId,
               patientId: PatientId,
               documentId: 87,
               usageType: UsageType
            }
         })
         .then(({ data: { response } }) => {
            setData(response);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };
   const LineGraphVS = useMemo(() => {
      return {
         labels: data?.map((item) => dayjs(item.createdAt).format('YYYY-MM-DD HH:mm')),
         datasets: [
            {
               label: 'Амьсгал',
               data: data?.slice(-7)?.map((item) => item.data?.respiratoryRate),
               borderColor: ['#2596be'],
               backgroundColor: '#2596be',
               borderWidth: 1
            },
            {
               label: 'SPO2',
               data: data?.slice(-7)?.map((item) => item.data?.spO2),
               borderColor: ['#21130d'],
               backgroundColor: '#21130d',
               borderWidth: 1
            },
            {
               label: 'Пульс',
               data: data?.slice(-7)?.map((item) => item.data?.pulse),
               borderColor: ['#ff0000'],
               backgroundColor: '#ff0000',
               borderWidth: 1
            }
         ]
      };
   }, [data]);

   const LineGraphCD = useMemo(() => {
      return {
         labels: data?.map((item) => dayjs(item.createdAt).format('YYYY-MM-DD HH:mm')),
         datasets: [
            {
               label: 'Дээд даралт',
               data: data?.slice(-7)?.map((item) => item.data?.highPressureRight),
               borderColor: ['#c51ceb'],
               backgroundColor: '#c51ceb',
               borderWidth: 1
            },
            {
               label: 'Доод даралт',
               data: data?.slice(-7)?.map((item) => item.data?.lowPressureRight),
               borderColor: ['#2596be'],
               backgroundColor: '#2596be',
               borderWidth: 1
            },
            {
               label: 'Халуун',
               data: data?.slice(-7)?.map((item) => item.data?.temp),
               borderColor: ['#000000'],
               backgroundColor: '#000000',
               borderWidth: 1
            }
         ]
      };
   }, [data]);

   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         <div className="grid sm:grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="flex flex-col lg:col-span-2 gap-2">
               <NewCard>
                  <Line options={vsOptions} data={LineGraphVS} />
               </NewCard>
               <NewCard>
                  <Line options={CDOptions} data={LineGraphCD} />
               </NewCard>
            </div>
            <div className="lg:col-span-3">
               <Card
                  className="header-solid max-h-max rounded-md"
                  title="Түүх"
                  bodyStyle={{
                     padding: 12
                  }}
                  extra={
                     <div className="flex flex-row gap-1">
                        <Button
                           type="primary"
                           icon={<PlusOutlined />}
                           onClick={() => {
                              setIsOpenModal(true);
                           }}
                        >
                           Нэмэх
                        </Button>
                        {UsageType === 'IN' ? (
                           <Button
                              className="ml-2"
                              icon={<PrinterOutlined />}
                              onClick={handlePrint}
                              loading={printLoading}
                           >
                              Хэвлэх
                           </Button>
                        ) : null}
                     </div>
                  }
               >
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
               </Card>
            </div>
         </div>
         {/* <div ref={printRef}>
            <ReturnById
               type={UsageType}
               id={87}
               appointmentId={ListId}
               data={{
                  formData: data,
                  patientData: PatientData
               }}
               hospitalName={hospitalName}
            />
         </div> */}
         <Modal title="Амин үзүүлэлтийг хянах" open={isOpenModal} onCancel={() => setIsOpenModal(false)} footer={false}>
            <Customized
               usageType={UsageType}
               documentValue={87}
               documentType={0}
               structureId={StructureId}
               appointmentId={ListId}
               patientId={PatientId}
               onOk={(state) => {
                  setIsOpenModal(state);
                  getData();
               }}
            />
         </Modal>
      </>
   );
}
