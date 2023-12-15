import React from 'react';
import Sidebar from './Sidebar';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;
const MainLayout = () => {
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
