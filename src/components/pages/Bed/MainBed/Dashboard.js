import { Button, Card, Form, Input, Progress, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Get } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { ReloadOutlined, UserAddOutlined } from '@ant-design/icons';
import { Table } from 'react-bootstrap';
import { Bar, Pie, getElementAtEvent } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   ArcElement,
   Tooltip,
   Legend,
   Title
} from 'chart.js';
const { Search } = Input;
function Dashboard() {
   ChartJS.register(
      ChartDataLabels,
      ArcElement,
      Tooltip,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Legend
   );
   const PieRef = useRef();
   const token = useSelector(selectCurrentToken);
   const [structures, setStructures] = useState([]);
   const [meta, setMeta] = useState({});
   const [refreshLoading, setRefreshLoading] = useState(false);
   //
   const [emptyBeds, setEmptyBeds] = useState([]); //Сул өрөө
   const [usedBeds, setUsedBeds] = useState([]); //Дүүрсэн өрөө
   const [repairBeds, setRepairBeds] = useState([]); //Засвартай өрөө
   //
   const getStructures = async () => {
      setRefreshLoading(true);
      const conf = {
         headers: {},
         params: {
            type: 2
         }
      };
      const response = await Get('organization/structure/rooms', token, conf);
      console.log(response);
      const filteredData = [];
      response?.data?.map((item) => {
         if (item.rooms?.length > 0) {
            filteredData.push(item);
         }
      });
      setStructures(filteredData);
      setRefreshLoading(false);
   };
   const getAllBed = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('organization/bed', token, conf);
      response.data &&
         response.data.map((el) => {
            if (el.status === 3) {
               setEmptyBeds((emptyBeds) => [...emptyBeds, el]);
            } else if (el.status === 0) {
               setUsedBeds((usedBeds) => [...usedBeds, el]);
            } else if (el.status === 2) {
               setRepairBeds((repairBeds) => [...repairBeds, el]);
            }
         });
   };
   const onFinishSearchStructure = async (values) => {
      setRefreshLoading(true);
      const conf = {
         headers: {},
         params: {
            type: 2,
            name: values.name
         }
      };
      const response = await Get('organization/structure/rooms', token, conf);
      setStructures(response.data);
      setRefreshLoading(false);
   };
   const dataConverterToPie = (rooms) => {
      var data = [0, 0, 0, 0, 0];
      rooms?.map((room) => {
         if (room.isInpatient) {
            if (room.roomType === 0) {
               data[0] += 1;
            } else if (room.roomType === 1) {
               data[1] += 1;
            }
         }
      });
      console.log(data);
      return {
         labels: ['Энгийн', 'Люкс', 'Гэр бүл', 'VIP-1', 'VIP-2'],
         datasets: [
            {
               label: 'Нийт',
               data: [0, 1, 0, 0, 11111],
               backgroundColor: ['#52c41a', '#ff4d4f', '#faad14'],
               borderWidth: 1
            }
         ]
      };
   };
   const checkRoomType = (rooms) => {
      var countInpatient = 0;
      var countPatient = 0;
      rooms?.map((room) => {
         if (room.isInpatient) {
            countInpatient += 1;
         } else {
            countPatient += 1;
         }
      });
      return (
         <>
            <p>Хэвтэн өрөө: {countInpatient}</p>
            <Progress percent={(countInpatient / rooms?.length) * 100} />
            <p>Үзлэгийн өрөө: {countPatient}</p>
            <Progress percent={(countPatient / rooms?.length) * 100} />
         </>
      );
   };
   const onClickPie = (event) => {
      console.log(getElementAtEvent(PieRef.current, event));
   };
   useEffect(() => {
      getStructures();
      getAllBed();
      console.log('sadsadsa');
   }, []);
   return (
      <>
         <Card bordered={false} className="header-solid max-h-max rounded-md">
            <div className="flow-root">
               <div className="float-left">
                  <Form layout="inline" onFinish={onFinishSearchStructure}>
                     <Form.Item
                        className="mb-0"
                        label="Тасгаар хайх"
                        name="name"
                        rules={[
                           {
                              required: true,
                              message: 'Утга оруулна уу'
                           }
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item className="mb-0">
                        <Button type="primary" htmlType="submit">
                           Хайх
                        </Button>
                     </Form.Item>
                  </Form>
               </div>
               <div className="float-right">
                  <Button
                     style={{
                        display: 'flex',
                        alignItems: 'center'
                     }}
                     title="Сэргээх"
                     type="primary"
                     icon={<ReloadOutlined spin={refreshLoading} />}
                     //   onClick={() => getAppointment(1, 20, start, end)}
                  >
                     Сэргээх
                  </Button>
               </div>
            </div>
         </Card>
         <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div>
               <Card
                  style={styles.cardStyle}
                  className="rounded-xl cursor-pointer"
                  bodyStyle={styles.cardBodyStyle}
                  onClick={() => {
                     props.setSelectedFn('rooms');
                     props.setStatus('3'); //Сул өрөө
                     navigate(`/bed_management/rooms`);
                  }}
               >
                  <div style={{ width: '70%' }}>
                     <p>Сул орны тоо</p>
                     <p style={styles.total}>
                        Нийт: {emptyBeds !== '' && emptyBeds.length}
                     </p>
                  </div>
                  <div>
                     <UserAddOutlined style={styles.iconStyle} />
                  </div>
               </Card>
            </div>
            <div>
               <Card
                  style={styles.cardStyle}
                  className="rounded-xl cursor-pointer"
                  bodyStyle={styles.cardBodyStyle}
                  onClick={() => {
                     props.setSelectedFn('rooms');
                     props.setStatus('2'); //Засвартай өрөө
                     navigate(`/bed_management/rooms`);
                  }}
               >
                  <div style={{ width: '70%' }}>
                     <p>Засвартай өрөө</p>
                     <p style={styles.total}>
                        Нийт: {repairBeds !== '' && repairBeds.length}
                     </p>
                  </div>
                  <div>
                     <UserAddOutlined style={styles.iconStyle} />
                  </div>
               </Card>
            </div>
            <div>
               <Card
                  style={styles.cardStyle}
                  className="rounded-xl cursor-pointer"
                  bodyStyle={styles.cardBodyStyle}
                  onClick={() => {
                     props.setSelectedFn('rooms');
                     props.setStatus('0'); //Дүүрсэн өрөө
                     navigate(`/bed_management/rooms`);
                  }}
               >
                  <div style={{ width: '70%' }}>
                     <p>Дүүрсэн өрөө</p>
                     <p style={styles.total}>
                        Нийт: {usedBeds !== '' && usedBeds.length}
                     </p>
                  </div>
                  <div>
                     <UserAddOutlined style={styles.iconStyle} />
                  </div>
               </Card>
            </div>
         </div>
         <Spin spinning={refreshLoading}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
               {structures?.map((structure, index) => {
                  return (
                     <Card
                        key={index}
                        bordered={false}
                        title={structure.name}
                        className="header-solid max-h-max rounded-md"
                     >
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                           <div>
                              <Pie
                                 ref={PieRef}
                                 onClick={onClickPie}
                                 data={dataConverterToPie(structure.rooms)}
                                 plugins={[ChartDataLabels]}
                                 options={{
                                    responsive: true,
                                    plugins: {
                                       title: {
                                          display: true,
                                          position: 'top',
                                          text: 'Өрөөний мэдээлэл'
                                       },
                                       datalabels: {
                                          display: true,
                                          align: 'bottom',
                                          backgroundColor: '#ccc',
                                          borderRadius: 3,
                                          font: {
                                             size: 18
                                          }
                                       }
                                    }
                                 }}
                              />
                           </div>
                           <div
                              style={{
                                 display: 'flex',
                                 alignItems: 'center'
                              }}
                           >
                              <Bar
                                 data={{
                                    labels: ['Сул ор', 'Дүүрсэн', 'Засвартай'],
                                    datasets: [
                                       {
                                          data: [0, 1, 0],
                                          backgroundColor: [
                                             '#52c41a',
                                             '#ff4d4f',
                                             '#faad14'
                                          ],
                                          borderWidth: 1
                                       }
                                    ]
                                 }}
                                 options={{
                                    responsive: true,
                                    plugins: {
                                       legend: {
                                          display: false
                                       },
                                       title: {
                                          display: true,
                                          position: 'top',
                                          text: 'Орний мэдээлэл'
                                       }
                                    }
                                 }}
                              />
                           </div>
                        </div>
                     </Card>
                  );
               })}
            </div>
         </Spin>
      </>
   );
}
export default Dashboard;
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
