import { Col, Row } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
//img
import { loginBg } from '@Assets/index';
const Auth = () => {
   return (
      <div
         className="px-4 sm:px-4 pt-[90px]"
         style={{
            height: '80vh'
         }}
      >
         <Row gutter={[24, 0]} justify="space-around">
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }} md={{ span: 12 }}>
               <Outlet />
            </Col>
            <Col className="sign-img" style={{ padding: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
               <img src={loginBg} alt="home" />
            </Col>
         </Row>
      </div>
   );
};
export default Auth;
