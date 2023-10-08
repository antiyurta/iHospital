//Амбулаторийн үзлэгийн өмнөх жагсаалт -> Эрт сэрэмжлүүлэх үнэлгээ
import React, { useState, useEffect, useRef } from 'react';
import { Button, Col, Input, Row, Select, Modal, List, Table, Form, Card } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalName, selectCurrentToken } from '../../../features/authReducer';
// import { Table } from 'react-bootstrap';
import { DefaultPost, Get, getAge, openNofi } from '../../comman';
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
import moment from 'moment';
import { PlusOutlined, PlusSquareOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { useLocation } from 'react-router-dom';
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
import NewModal from '../../Modal/Modal';
import { ReturnById } from '../611/Document/Index';
//

export default function EarlyWarning({ PatientId, StructureId, PatientData, UsageType, ListId, isDoctor }) {
   const [data, setData] = useState([]);
   const hospitalName = useSelector(selectCurrentHospitalName);
   const printRef = useRef();
   const [lineLabels, setLineLabels] = useState([]);
   const [breathData, setBreathData] = useState([]);
   const [spo2Data, setSpo2Data] = useState([]);
   const [pulseData, setPulseData] = useState([]);
   const [HighPressureRightData, setHighPressureRightData] = useState([]);
   const [LowPressureRightData, setLowPressureRightData] = useState([]);
   const [tempData, setTempData] = useState([]);
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
   const LineGraphVS = {
      labels: lineLabels,
      datasets: [
         {
            label: 'Амьсгал',
            data: breathData,
            borderColor: ['#2596be'],
            backgroundColor: '#2596be',
            borderWidth: 1
         },
         {
            label: 'SPO2',
            data: spo2Data,
            borderColor: ['#21130d'],
            backgroundColor: '#21130d',
            borderWidth: 1
         },
         {
            label: 'Пульс',
            data: pulseData,
            borderColor: ['#ff0000'],
            backgroundColor: '#ff0000',
            borderWidth: 2
         }
      ]
   };
   const LineGraphCD = {
      labels: lineLabels,
      datasets: [
         {
            label: 'Дээд даралт',
            data: HighPressureRightData,
            borderColor: ['#c51ceb'],
            backgroundColor: '#c51ceb',
            borderWidth: 1
         },
         {
            label: 'Доод даралт',
            data: LowPressureRightData,
            borderColor: ['#2596be'],
            backgroundColor: '#2596be',
            borderWidth: 1
         },
         {
            label: 'Халуун',
            data: tempData,
            borderColor: ['#000000'],
            backgroundColor: '#000000',
            borderWidth: 2
         }
      ]
   };
   // shineer ehlew
   const [isOpenModal, setIsOpenModal] = useState(false);
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         render: (text) => {
            return moment(text).format('YYYY/MM/DD HH:mm');
         }
      },
      {
         title: 'Амин үзүүлэлт',
         children: [
            {
               title: 'Систол',
               dataIndex: 'highPressureRight',
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
               dataIndex: 'temp',
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
               dataIndex: 'respiratoryRate',
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
               dataIndex: 'spO2',
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
               dataIndex: 'pulse',
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
               dataIndex: 'mind',
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
               render: (_, record) => {
                  return {
                     props: {
                        style: { background: colorTotal(record) }
                     },
                     children: <div title={totalCalculator(record)?.message}>{totalCalculator(record)?.total}</div>
                  };
               }
            }
         ]
      },
      {
         title: 'Сувилагч',
         dataIndex: 'createdByName',
         render: (text) => {
            return {
               props: {
                  style: { whiteSpace: 'pre-line' }
               },
               children: text.lastName + '.' + text.firstName
            };
         }
      }
   ];
   const getData = async () => {
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               appointmentId: ListId,
               patientId: PatientId,
               documentId: 87,
               usageType: UsageType
            }
         })
         .then((response) => {
            let data = [];
            response.data.response?.map((item) => item.data?.map((subData) => data.push(subData)));
            setData(data);
         });
   };
   const getDataForGraph = async () => {
      await jwtInterceopter
         .get('document-middleware', {
            params: {
               limit: 7,
               appointmentId: ListId,
               patientId: PatientId,
               documentId: 87,
               usageType: UsageType
            }
         })
         .then((response) => {
            let data = [];
            response.data.response?.map((item) => item.data?.map((subData) => data.push(subData)));
            var demoLineLabels = [];
            var demoBreathData = [];
            var demoSpo2Data = [];
            var demoPulseData = [];
            var demoHighPressureRight = [];
            var demoLowPressureRight = [];
            var demoTempData = [];
            data?.map((item) => {
               demoLineLabels.push(moment(item.createdAt).format('YYYY-MM-DD HH:mm'));
               demoBreathData.push(item?.respiratoryRate);
               demoSpo2Data.push(item?.spO2);
               demoPulseData.push(item?.pulse);
               demoHighPressureRight.push(item?.highPressureRight);
               demoLowPressureRight.push(item?.lowPressureRight);
               demoTempData.push(item?.temp);
            });
            setLineLabels(demoLineLabels);
            setBreathData(demoBreathData);
            setSpo2Data(demoSpo2Data);
            setPulseData(demoPulseData);
            setHighPressureRightData(demoHighPressureRight);
            setLowPressureRightData(demoLowPressureRight);
            setTempData(demoTempData);
         });
   };
   useEffect(() => {
      getData();
      getDataForGraph();
   }, []);
   //
   return (
      <>
         <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
               <NewCard>
                  <Line options={vsOptions} data={LineGraphVS} />
               </NewCard>
               <NewCard>
                  <Line options={CDOptions} data={LineGraphCD} />
               </NewCard>
            </div>
            <Card
               className="header-solid max-h-max rounded-md"
               title="Түүх"
               bodyStyle={{
                  height: 700,
                  overflow: 'auto'
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
               <Table rowKey={'_id'} bordered columns={columns} dataSource={data} pagination={false} />
            </Card>
         </div>
         <div ref={printRef}>
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
         </div>
         <NewModal title=" " open={isOpenModal} onCancel={() => setIsOpenModal(false)} footer={false}>
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
                  getDataForGraph();
               }}
            />
         </NewModal>
      </>
   );
}
