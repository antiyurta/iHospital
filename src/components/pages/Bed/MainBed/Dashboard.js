import { Button, Card, Form, Input, Progress, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Get } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { ReloadOutlined, UserAddOutlined } from '@ant-design/icons';
import { Table } from 'react-bootstrap';
import { Bar, Pie, getElementAtEvent } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, Title } from 'chart.js';
const { Search } = Input;
function Dashboard() {
   ChartJS.register(ChartDataLabels, ArcElement, Tooltip, CategoryScale, LinearScale, BarElement, Title, Legend);
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
   useEffect(() => {
      getStructures();
      getAllBed();
      console.log('sadsadsa');
   }, []);
   return (
      <>
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
                     <p style={styles.total}>Нийт: {emptyBeds !== '' && emptyBeds.length}</p>
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
                     <p style={styles.total}>Нийт: {repairBeds !== '' && repairBeds.length}</p>
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
                     <p style={styles.total}>Нийт: {usedBeds !== '' && usedBeds.length}</p>
                  </div>
                  <div>
                     <UserAddOutlined style={styles.iconStyle} />
                  </div>
               </Card>
            </div>
         </div>
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
