import React, { useContext } from 'react';
import { Button, Row, Col, Typography, Form, Input } from 'antd';
import signinbg from '../assets/images/background/front.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthContext from '../features/AuthContext';

const { Title } = Typography;
function Login() {
   const navigate = useNavigate();
   const [loginLoading, setLoginLoading] = useState(false);
   const { loginn, user } = useContext(AuthContext);

   const onFinish = async (values) => {
      setLoginLoading(true);
      const res = await loginn(values);
      setLoginLoading(res);
   };
   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };
   useEffect(() => {
      if (user) {
         navigate('/profile');
      }
   }, []);

   return (
      <div className="px-4 sm:px-4 pt-[72px]">
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
               <img src={signinbg} alt="" />
            </Col>
         </Row>
      </div>
   );
}

export default Login;
