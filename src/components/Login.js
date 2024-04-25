import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Typography, Form, Input } from 'antd';
//img
import { loginBg } from '@Assets/index';
//context
import AuthContext from '@Features/AuthContext';

const { Title } = Typography;
function Login() {
   const navigate = useNavigate();
   const { loginn, user } = useContext(AuthContext);
   const [loginLoading, setLoginLoading] = useState(false);

   const onFinish = async (values) => {
      setLoginLoading(true);
      const res = await loginn(values);
      setLoginLoading(res);
   };
   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };
   useEffect(() => {
      user && navigate('/profile');
   }, []);

   return (
      <div
         className="px-4 sm:px-4 pt-[90px]"
         style={{
            height: '80vh'
         }}
      >
         <Row gutter={[24, 0]} justify="space-around">
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }} md={{ span: 12 }}>
               <Title className="mb-15">Нэвтрэх</Title>
               <Title className="font-regular text-muted" level={5}>
                  Нэвтрэх нэр болон Нууц үгээ оруулна уу
               </Title>
               <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" className="row-col">
                  <Form.Item
                     className="username"
                     label="Нэвтрэх нэр"
                     name="email"
                     rules={[
                        {
                           required: true,
                           message: 'Нэвтрэх нэр оруулна уу'
                        }
                     ]}
                  >
                     <Input placeholder="Нэвтрэх нэр" />
                  </Form.Item>
                  <Form.Item
                     className="username"
                     label="Нууц үг"
                     name="password"
                     rules={[
                        {
                           required: true,
                           message: 'Нууц үг оруулна уу'
                        }
                     ]}
                  >
                     <Input.Password type="password" placeholder="Нууц үг" />
                  </Form.Item>

                  <Form.Item>
                     <Button loading={loginLoading} type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Нэвтрэх
                     </Button>
                  </Form.Item>
               </Form>
            </Col>
            <Col className="sign-img" style={{ padding: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
               <img src={loginBg} alt="" />
            </Col>
         </Row>
      </div>
   );
}

export default Login;
