import React, { useEffect, useState } from 'react';
import { Badge, Card, Table } from 'antd';
import io from 'socket.io-client';
import jwtInterceopter from '../../jwtInterceopter';
import moment from 'moment';
const DEV_URL = process.env.REACT_APP_DEV_URL;
function Dashboard() {
   const [data, setData] = useState([]);
   const [connected, setConnected] = useState(false);
   const [isConnected, setIsConnected] = useState(false);
   //
   const customizeNames = (lastName, firstName) => {
      let names = lastName + ' ' + firstName;
      let cNames = '';
      for (var i = 0; i <= names.length - 1; i++) {
         if (i % 2 == 1) {
            if (names[i] != ' ') {
               cNames += '*';
            } else {
               cNames += ' ';
            }
         } else {
            cNames += names[i];
         }
      }
      return cNames;
   };
   const customizeWorkersNames = (taskWorkers) => {
      if (taskWorkers.operation && taskWorkers.firstHelper && taskWorkers.secondHelper) {
         let names = '';
         const operation = taskWorkers?.operation;
         const firstHelper = taskWorkers?.firstHelper;
         const secondHelper = taskWorkers?.secondHelper;
         names += operation?.lastName?.substring(0, 1) + '.' + operation?.firstName + '\n';
         names += firstHelper?.lastName?.substring(0, 1) + '.' + firstHelper?.firstName + '\n';
         names += secondHelper?.lastName?.substring(0, 1) + '.' + secondHelper?.firstName;
         return names;
      } else {
         return '?';
      }
   };
   const customizeDocNames = (doctors) => {
      if (doctors?.length > 0) {
         return doctors?.map((doctor, index) => {
            return (
               <span key={index}>
                  {doctor?.taskDoctors?.lastName.substring(0, 1) + '.' + doctor?.taskDoctors?.firstName + '\n'}
               </span>
            );
         });
      } else {
         return '?';
      }
   };
   //
   const columns = [
      {
         title: 'Овог/Нэр',
         render: (_text, row) => {
            return customizeNames(row.lastName, row.firstName);
         }
      },
      {
         title: 'Тасаг',
         dataIndex: ['taskWorkers', 'surgery', 'name']
      },
      {
         title: 'Мэдээгүйжүүлгийн эмч',
         dataIndex: 'taskDoctorRels',
         render: (text) => {
            return <p className="whitespace-pre-line text-black">{customizeDocNames(text)}</p>;
         }
      },
      {
         title: 'Мэс заслын эмч',
         dataIndex: 'taskWorkers',
         render: (text) => {
            return <p className="whitespace-pre-line text-black">{customizeWorkersNames(text)}</p>;
         }
      },
      {
         title: 'Эхэлсэн цаг'
      },
      {
         title: 'Дууссан цаг'
      },
      {
         title: 'Үргэлжилсэн хугацаа'
      },
      {
         title: 'Өрөө',
         dataIndex: ['room', 'roomNumber']
      },
      {
         title: 'Төлөв',
         dataIndex: ['currentColumn', 'column', 'name']
      }
   ];
   const getData = async () => {
      await jwtInterceopter.get('tasks/stat/dashboard').then((response) => {
         console.log(response);
         setData(response.data.response);
      });
   };
   let socket;
   useEffect(() => {
      if (connected) {
         socket = io(DEV_URL); // Replace with your Socket.IO server URL
         socket.on('connect', () => {
            console.log('connect');
            setIsConnected(true);
         });
         // Listen for 'chat message' events from the server
         socket.on('dashboard', (message) => {
            if (message) {
               getData();
            }
         });
         socket.on('connect_error', (error) => {
            console.error('Socket.IO connection error:', error.message);
            if (error.message === 'xhr poll error') {
               console.error('Connection refused by the server. Make sure the server is running.');
            }
            setConnected(false);
            setIsConnected(false);
         });
         // Handle connection errors
         socket.on('error', (error) => {
            console.error('Socket.IO error:', error);
         });
         // Handle connection timeout
         socket.on('connect_timeout', () => {
            console.error('Socket.IO connection timeout');
         });
      }

      // Clean up the socket when the component unmounts or when disconnected
      return () => {
         if (socket) {
            socket.disconnect();
            setIsConnected(false);
         }
      };
   }, [connected]);
   const handleConnect = () => {
      setConnected(true);
   };

   const handleDisconnect = () => {
      setConnected(false);
   };
   useEffect(() => {
      getData();
      handleConnect();
   }, []);
   return (
      <div>
         <Card
            title={<h6 className="font-semibold m-0">Мэс заслын хуваарь</h6>}
            bordered={false}
            className="header-solid max-h-max rounded-md"
            extra={
               <p
                  style={{
                     fontSize: 15,
                     fontWeight: 600,
                     color: '#4a7fc1'
                  }}
               >
                  {moment().format('YYYY/MM/DD')}
               </p>
            }
         >
            <div className="flex flex-col gap-3">
               <div className="w-full flex flex-row gap-2">
                  <div
                     style={{
                        display: 'flex',
                        fontWeight: 600,
                        fontSize: 16,
                        color: 'white',
                        background: 'orange',
                        padding: 24,
                        borderRadius: 12,
                        alignItems: 'center'
                     }}
                  >
                     Зөвлөгөө
                  </div>
                  <p
                     style={{
                        fontWeight: 700,
                        fontSize: 17
                     }}
                  >
                     Мэс засалд орсон үйлчлүүлэгч сэргээх өрөөнөөс гараад тасагтаа эсвэл эрчимт эмчилгээний тасагт
                     шилжинэ. Эрчимт эмчилгээний тасагт шилжсэн тохиолдолд 8888-9181 дугаарт залгаж зааврын дагуу Эрчимт
                     эмчилгээний тасагтай холбогдож мэдээлэл авна уу. Шаардлагатай тохиолдолд эмч ар гэрийнхэнтэй уулзах
                     бол өвчтөний бүртгэлд бичигдсэн холбогдож утсаар холбогдох болно.
                  </p>
               </div>
               {/* <button onClick={handleConnect} disabled={connected}>
                  Connect
               </button>
               <button onClick={handleDisconnect} disabled={!connected}>
                  Disconnect
               </button> */}
               <Table rowKey={'id'} columns={columns} dataSource={data} />
            </div>
         </Card>
      </div>
   );
}
export default Dashboard;
