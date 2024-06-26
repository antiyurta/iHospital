import React, { useEffect, useState } from 'react';
import { Tabs, Card, Row, Col, Modal, Table } from 'antd';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { BarChartOutlined } from '@ant-design/icons';

export default function Dashboard() {
   const [data, setData] = useState({});
   const config = {
      headers: {},
      params: {}
   };
   ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, BarElement, Title, Legend);
   const dataEx = {
      labels: ['Сул', 'Засвартай', 'Дүүрсэн'],
      datasets: [
         {
            label: 'Нийт',
            data: [12, 19, 3],
            backgroundColor: ['#52c41a', '#ff4d4f', '#faad14'],
            borderWidth: 1
         }
      ]
   };
   const RenderAmbulatory = () => {
      const [totalReport, setTotalReport] = useState(null);
      const [selectedInvoiceDtl, setSelectedInvoiceDtl] = useState({});
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [type, setType] = useState(null);
      const [modalTitle, setModalTitle] = useState(null);
      const [tableData, setTableData] = useState([]);
      const [dataLoading, setDataLoading] = useState(false);
      const [chart1Label, setChart1Label] = useState([]);
      const [doctorData, setDoctorData] = useState([]);
      const [dataLoadingDoctor, setDataLoadingDoctor] = useState(false);

      const options = {
         responsive: true,
         plugins: {
            legend: {
               position: 'top'
            }
         }
      };
      const chart1Data = {
         labels: chart1Label.map((el) => el.name),
         datasets: [
            {
               label: 'Орлогын мэдээ',
               data: chart1Label.map((el) => el.countPatients),
               backgroundColor: '#7cb5ec'
            }
         ]
      };

      const showModal = (type_id, title) => {
         setDataLoading(true);
         setType(type_id);
         setModalTitle(title);
         setIsModalOpen(true);
      };
      const handleCancel = () => {
         setTableData([]);
         setIsModalOpen(false);
      };

      const calcTotal = (type) => {
         var el = '0 / 0';
         totalReport?.filter((e) => {
            if (e.type === type) {
               el =
                  e.countPatients +
                  ' / ' +
                  e.totalAmount?.replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,') +
                  ' ₮';
            }
         });
         return el;
      };
      // Кабинетэд үйлчлүүлсэн өвчтөний тоо
      const getInvoice = async () => {
         // const response = await Get('report/service/receipt', token, config);
         // if (response.length != 0) {
         //    // console.log("get Invoice=======>", response);
         //    setTotalReport(response);
         // }
      };
      const getInvoiceDetail = async (type) => {
         // const response = await Get(`report/service-detail/receipt?type=${type}`, token, config);
         // if (response.length != 0) {
         //    // console.log("get InvoiceDetail=======>", response);
         //    response.map((el, index) => {
         //       setTableData((oldData) => [
         //          ...oldData,
         //          {
         //             key: index,
         //             name: el.name,
         //             totalAmount: el.totalAmount,
         //             countPatients: el.countPatients
         //          }
         //       ]);
         //    });
         //    setDataLoading(false);
         // }
      };

      useEffect(() => {
         setDataLoadingDoctor(true);
         getInvoice();
         getInspectionReport();
         getDoctorReceipt();
      }, []);

      useEffect(() => {
         type !== null && getInvoiceDetail(type);
      }, [type]);

      const columns = [
         {
            title: 'Нэр',
            dataIndex: 'name'
         },
         {
            title: 'Дүн',
            dataIndex: 'totalAmount',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.totalAmount - b.totalAmount
         },
         {
            title: 'Үйлчлүүлэгчдийн тоо',
            dataIndex: 'countPatients',
            sorter: (a, b) => a.countPatients - b.countPatients
         }
      ];
      const columnsDoctor = [
         {
            title: 'Нэр',
            dataIndex: 'name'
         },
         {
            title: 'Дүн',
            dataIndex: 'totalAmount',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.totalAmount - b.totalAmount
         },
         {
            title: 'Үйлчлүүлэгчдийн тоо',
            dataIndex: 'countPatients',
            sorter: (a, b) => a.countPatients - b.countPatients
         }
      ];

      const getInspectionReport = async () => {
         // const response = await Get('report/inspection/receipt', token, config);
         // console.log('get InspectionReport=======>', response);
         // if (response.length != 0) {
         //    setChart1Label(response);
         // }
      };
      const getDoctorReceipt = async () => {
         const response = [];
         // const response = await Get('report/doctor/receipt', token, config);
         console.log('get DoctorReceipt=======>', response);
         setDataLoadingDoctor(false);
         if (response.length != 0) {
            response.map((el, index) => {
               setDoctorData((oldData) => [
                  ...oldData,
                  {
                     key: index,
                     name: el.lastName?.substr(0, 1) + '. ' + el.firstName,
                     totalAmount:
                        el.totalAmount?.toString()?.replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,') + ' ₮',
                     countPatients: el.countPatients
                  }
               ]);
            });
            var total = 0;
            var totalPatient = 0;
            for (var i = 0; i < response.length; i++) {
               total += response[i].totalAmount;
               totalPatient += parseInt(response[i].countPatients);
            }
            setDoctorData((oldData) => [
               ...oldData,
               {
                  key: 'total',
                  name: <strong>Нийт</strong>,
                  totalAmount: (
                     <strong>{total?.toString()?.replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,') + ' ₮'}</strong>
                  ),
                  countPatients: <strong>{totalPatient}</strong>
               }
            ]);
         }
      };
      return (
         <div>
            {totalReport !== null ? (
               <>
                  <Row gutter={[16, 16]}>
                     <Col className="gutter-row" span={6}>
                        <Card
                           style={styles.cardStyle}
                           className="rounded-xl cursor-pointer"
                           bodyStyle={styles.cardBodyStyle}
                           onClick={() => showModal(2, 'Эмчилгээ үйлчлүүлэгч тоо, орлого дүн')}
                        >
                           <div style={{ width: '70%' }}>
                              <p style={{ width: '80%' }}>Эмчилгээ үйлчлүүлэгч тоо, орлого дүн</p>
                              <p style={styles.total}>{calcTotal('2')}</p>
                           </div>
                           <div>
                              <BarChartOutlined style={styles.iconStyle} />
                           </div>
                        </Card>
                     </Col>
                     <Col className="gutter-row" span={6}>
                        <Card
                           style={styles.cardStyle}
                           className="rounded-xl cursor-pointer"
                           bodyStyle={styles.cardBodyStyle}
                           onClick={() => showModal(1, 'Оношилгоо үйлчлүүлэгч тоо, орлого дүн')}
                        >
                           <div style={{ width: '70%' }}>
                              <p style={{ width: '80%' }}>Оношилгоо үйлчлүүлэгч тоо, орлого дүн</p>
                              <p style={styles.total}>{calcTotal('1')}</p>
                           </div>
                           <div>
                              <BarChartOutlined style={styles.iconStyle} />
                           </div>
                        </Card>
                     </Col>
                     <Col className="gutter-row" span={6}>
                        <Card
                           style={styles.cardStyle}
                           className="rounded-xl cursor-pointer"
                           bodyStyle={styles.cardBodyStyle}
                           onClick={() => showModal(0, 'Шинжилгээ үйлчлүүлэгч тоо, орлого дүн')}
                        >
                           <div style={{ width: '70%' }}>
                              <p style={{ width: '80%' }}>Шинжилгээ үйлчлүүлэгч тоо, орлого дүн</p>
                              <p style={styles.total}>{calcTotal('0')}</p>
                           </div>
                           <div>
                              <BarChartOutlined style={styles.iconStyle} />
                           </div>
                        </Card>
                     </Col>
                     <Col className="gutter-row" span={6}>
                        <Card
                           style={styles.cardStyle}
                           className="rounded-xl cursor-pointer"
                           bodyStyle={styles.cardBodyStyle}
                           onClick={() => showModal(7, 'Багц үйлчлүүлэгч тоо, орлого дүн')}
                        >
                           <div style={{ width: '70%' }}>
                              <p style={{ width: '80%' }}>Багц үйлчлүүлэгч тоо, орлого дүн</p>
                              <p style={styles.total}>{calcTotal('7')}</p>
                           </div>
                           <div>
                              <BarChartOutlined style={styles.iconStyle} />
                           </div>
                        </Card>
                     </Col>
                     <Modal title={modalTitle} open={isModalOpen} footer={false} onCancel={handleCancel} width={1000}>
                        <Table columns={columns} dataSource={tableData} loading={dataLoading} />
                     </Modal>
                  </Row>
                  <Row gutter={[16, 16]} className="mt-4">
                     <Col className="gutter-row" span={12}>
                        <Card title="Орлогын мэдээ" className="rounded-xl cursor-pointer">
                           <Bar options={options} data={chart1Data} />
                        </Card>
                     </Col>
                     <Col className="gutter-row" span={12}>
                        <Card title="Хамгийн их үйлчилгээ хийсэн" className="rounded-xl cursor-pointer">
                           <Table columns={columnsDoctor} dataSource={doctorData} loading={dataLoadingDoctor} />
                        </Card>
                     </Col>
                  </Row>
               </>
            ) : null}
         </div>
      );
   };
   const RenderBed = () => {
      return (
         <div>
            <div className="site-card-border-less-wrapper">
               <Card
                  title="Орны мэдээлэл"
                  bordered={false}
                  style={{
                     width: 300
                  }}
               >
                  <Pie data={dataEx} />
               </Card>
            </div>
         </div>
      );
   };
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <Tabs
            defaultActiveKey="1"
            type="card"
            items={[
               {
                  label: `Амбулатори`,
                  key: '1',
                  children: <RenderAmbulatory />
               },
               {
                  label: `Хэвтэн`,
                  key: '2',
                  children: <RenderBed />
               }
            ]}
         />
      </div>
   );
}
const styles = {
   cardStyle: {
      // borderColor: blue.primary
   },
   cardBodyStyle: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      padding: 12,
      paddingRight: 10,
      paddingLeft: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
   },
   iconStyle: {
      // backgroundColor: blue.primary,
      padding: 15,
      borderRadius: 12,
      fontSize: 20,
      color: '#fff'
   },
   total: {
      fontSize: 20,
      fontWeight: 'bold'
   }
};
