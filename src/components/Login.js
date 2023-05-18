import React, { useContext } from 'react';
import { Button, Row, Col, Typography, Form, Input } from 'antd';
import signinbg from '../assets/images/background/front.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, DelAppId, DelDepId, DelUserId, DelUserInfo, DelInsurrance } from '../features/authReducer';
import { useEffect, useState } from 'react';
import AuthContext from '../features/AuthContext';
const { Title } = Typography;
function Login() {
   const dispatch = useDispatch();
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
   const clearStorage = () => {
      dispatch(logout());
      dispatch(DelAppId());
      dispatch(DelDepId());
      dispatch(DelUserId());
      dispatch(DelUserInfo());
      dispatch(DelInsurrance());
   };
   useEffect(() => {
      if (user) {
         navigate('/profile');
      } else {
         clearStorage();
      }
   }, []);

   return (
      <>
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
      </>
   );
}

export default Login;
