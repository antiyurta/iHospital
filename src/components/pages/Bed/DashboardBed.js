import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';

function DashboardBed(props) {
   let navigate = useNavigate();
   const token = useSelector(selectCurrentToken);
   const [emptyBeds, setEmptyBeds] = useState([]); //Сул өрөө
   const [usedBeds, setUsedBeds] = useState([]); //Дүүрсэн өрөө
   const [repairBeds, setRepairBeds] = useState([]); //Засвартай өрөө

   const config = {
      headers: {},
      params: {}
   };
   const getAllBed = async () => {
      const response = await Get('organization/bed', token, config);
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
      getAllBed();
   }, []);

   return (
      <div className="p-6">
         <Row gutter={[16, 16]}>
            <Col className="gutter-row" span={6}>
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
            </Col>
            <Col className="gutter-row" span={6}>
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
            </Col>
            <Col className="gutter-row" span={6}>
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
            </Col>
         </Row>
      </div>
   );
}

export default DashboardBed;
const styles = {
   cardStyle: {
      borderColor: blue.primary
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
      backgroundColor: blue.primary,
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
