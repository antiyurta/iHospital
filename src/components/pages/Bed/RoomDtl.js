import React from 'react';
import { Col, Row, Card, Button } from 'antd';
import { ArrowLeftOutlined, UserAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
   borderColor: '#4a7fc1'
};
const cardBodyStyle = {
   flex: 1,
   display: 'flex',
   flexDirection: 'row',
   padding: 12,
   paddingRight: 10,
   paddingLeft: 10,
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '100%'
};
const iconStyle = {
   backgroundColor: '#4a7fc1',
   padding: 15,
   borderRadius: 12,
   fontSize: 20,
   color: '#fff'
};
const total = {
   fontSize: 20,
   fontWeight: 'bold'
};
const RoomDtl = (props) => {
   let navigate = useNavigate();
   console.log('props', props);
   return (
      <div>
         <Row>
            <Button className="rounded-md" onClick={() => navigate(-1)}>
               <ArrowLeftOutlined />
               Буцах
            </Button>
         </Row>
         <Row gutter={[16, 16]} className="mt-4">
            <Col span={16}>
               <Card style={cardStyle} className="rounded-xl cursor-pointer" bodyStyle={cardBodyStyle}>
                  <div style={{ width: '70%' }}>
                     <p>Сул орны тоо</p>
                     <p style={total}>Нийт: 7</p>
                  </div>
                  <div>
                     <UserAddOutlined style={iconStyle} />
                  </div>
               </Card>
            </Col>
            <Col span={16}></Col>
            <Card style={cardStyle} className="rounded-xl cursor-pointer" bodyStyle={cardBodyStyle}>
               <div style={{ width: '70%' }}>
                  <p>Сул орны тоо</p>
                  <p style={total}>Нийт: 7</p>
               </div>
               <div>
                  <UserAddOutlined style={iconStyle} />
               </div>
            </Card>
         </Row>
      </div>
   );
};

export default RoomDtl;
