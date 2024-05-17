import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Form, Input } from 'antd';

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
      <>
         <Title className="mb-15">Нэвтрэх</Title>
         <Title className="font-regular text-muted" level={5}>
            Нэвтрэх нэр болон Нууц үгээ оруулна уу
         </Title>
         <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" className="row-col">
            <Form.Item
               className="username"
               label="Нэвтрэх нэр"
               name="username"
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
               className="password"
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
            <div className="flex flex-col gap-3">
               <div className="flex justify-end">
                  <Link className="text-blue-400" to="/auth/reset-password">
                     Нууц үг мартсан
                  </Link>
               </div>
               <Form.Item>
                  <Button loading={loginLoading} type="primary" htmlType="submit" style={{ width: '100%' }}>
                     Нэвтрэх
                  </Button>
               </Form.Item>
            </div>
         </Form>
      </>
   );
}

export default Login;
