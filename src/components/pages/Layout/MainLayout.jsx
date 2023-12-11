import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { Layout } from 'antd';
import AuthContext from '../../../features/AuthContext';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const MainLayout = () => {
   const { user, logoutt } = useContext(AuthContext);
   return (
      <Layout
         style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'row'
         }}
      >
         <Sidebar />
         <Layout
            style={{
               backgroundColor: 'white'
            }}
         >
            <Content>
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   );
};
export default MainLayout;
