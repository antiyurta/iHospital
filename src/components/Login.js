import React, { useContext } from 'react';
import { Layout, Button, Row, Col, Typography, Form, Input } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';
// import Logo from '../assets/logo/logo.png';
import Logo from '../assets/logo/iHospital.png';
// import signinbg from '../assets/logo/demo4.png';
import signinbg from '../assets/images/background/front.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout, DelAppId, DelDepId, DelUserId, DelUserInfo, DelInsurrance } from '../features/authReducer';
import { openNofi } from './comman';
import { useEffect, useState } from 'react';
import AuthContext from '../features/AuthContext';
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
const MenuNav = [
   {
      key: '1',
      icon: <StepBackwardOutlined />,
      label: 'Холбоо барих'
   },
   {
      key: '2',
      icon: <StepBackwardOutlined />,
      label: 'Дэлгэрэнгүй'
   },
   {
      key: '3',
      icon: <StepBackwardOutlined />,
      label: 'Мэдээлэл'
   }
];

function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [loginLoading, setLoginLoading] = useState(false);
   const { loginn, user } = useContext(AuthContext);
   const onFinish = async (values) => {
      setLoginLoading(true);
      const res = await loginn(values);
      setLoginLoading(res);
      // axios
      //    .post(process.env.REACT_APP_DEV_URL + 'authentication/login', values, {
      //       headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY }
      //    })
      //    .then((response) => {
      //       if (response.status === 200) {
      //          dispatch(login(response.data.response.accessToken));
      //          localStorage.setItem('tokens', JSON.stringify(response.data.response));
      //          navigate('/profile');
      //       }
      //    })
      //    .catch((err) => {
      //       console.log(err);
      //       if (err.code === 'ERR_NETWORK') {
      //          openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
      //       } else if (err.response.status == 400) {
      //          openNofi('warning', 'Нэвтрэх', 'Нэвтрэх нэр эсвэл нууц үг буруу');
      //       }
      //    })
      //    .finally(() => {
      //       setLoginLoading(false);
      //    });
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
