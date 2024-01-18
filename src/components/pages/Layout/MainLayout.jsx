import React, { Fragment, Suspense, useContext, useState } from 'react';
import companyLogo from '../../../assets/logo/iHospital.png';
import male from '../../../assets/images/maleAvatar.svg';
import { Outlet } from 'react-router-dom';
import { ExpandOutlined, LogoutOutlined, MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, logout, selectCurrentFirstName, selectCurrentLastName } from '../../../features/authReducer';
import Sidebar from './NewSidebar';
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from '../../FullScreenLoader';
import AuthContext from '../../../features/AuthContext';
import { Button, Layout } from 'antd';

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [collapsed, setCollapsed] = useState(false);
   const { logoutt } = useContext(AuthContext);
   const firstName = useSelector(selectCurrentFirstName);
   const lastName = useSelector(selectCurrentLastName);
   const handelLogOut = async () => {
      dispatch(Delete());
      dispatch(logout()); // tur bicew jwtBugdin ajilah ued ustagna
      await logoutt();
      navigate('/');
   };
   return (
      <>
         {/* <Layout className="main-layout">
            <Sider trigger={null} collapsible collapsed={collapsed}>
               <div className="sidebar-header">
                  <img src={companyLogo} alt="logo" />
                  <Button
                     type="link"
                     onClick={() => {
                        setCollapsed(!collapsed);
                     }}
                     icon={<MenuFoldOutlined />}
                  />
               </div>
               <Sidebar collapsed={collapsed} />
               <div className="sidebar-footer">
                  <div className="image-cropper" onClick={() => navigate('/profile')}>
                     <img src={male} className="profile-pic" alt="profile" />
                  </div>
                  <div className="profile-info">
                     <p className="profile-lastname">{lastName}</p>
                     <p className="profile-firstname">{firstName}</p>
                  </div>
                  <div className="logout" onClick={() => handelLogOut()}>
                     <LogoutOutlined title="Гарах" />
                  </div>
               </div>
            </Sider>
            <Layout>
               <Content>Content</Content>
            </Layout>
         </Layout> */}
         <div className="main-layout">
            <div className="main-body">
               <div className="sidebar">
                  <div className="sidebar-header">
                     <img src={companyLogo} alt="logo" />
                     <Button type="link" icon={<MenuFoldOutlined />} />
                  </div>
                  <Sidebar collapsed={collapsed} />
                  <div className="sidebar-footer">
                     <div className="image-cropper" onClick={() => navigate('/profile')}>
                        <img src={male} className="profile-pic" alt="profile" />
                     </div>
                     <div className="profile-info">
                        <p className="profile-lastname">{lastName}</p>
                        <p className="profile-firstname">{firstName}</p>
                     </div>
                     <div className="logout" onClick={() => handelLogOut()}>
                        <LogoutOutlined title="Гарах" />
                     </div>
                  </div>
               </div>
               <div className="main-content">
                  <Fragment>
                     <Suspense fallback={<FullScreenLoader full={true} />}>
                        <Outlet />
                     </Suspense>
                  </Fragment>
               </div>
            </div>
         </div>
      </>
   );
};
export default MainLayout;
