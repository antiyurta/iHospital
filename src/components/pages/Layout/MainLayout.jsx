import React, { Fragment, Suspense, useContext, useState } from 'react';
import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons';
//common
import FullScreenLoader from '@Comman/FullScreenLoader';
//comp
import Sidebar from './NewSidebar';
//img
import { manIcon, companyLogo, logoCollapsed } from '@Assets/index';
//context
import AuthContext from '@Features/AuthContext';
//redux
import { removePatient } from '@Features/patientReducer';
import { remove as removeHospital } from '@Features/hospitalReducer';
import { Delete, logout, selectCurrentFirstName, selectCurrentLastName } from '@Features/authReducer';
//extends
const { Sider } = Layout;

const MainLayout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [collapsed, setCollapsed] = useState(false);
   const { logoutt } = useContext(AuthContext);
   const firstName = useSelector(selectCurrentFirstName);
   const lastName = useSelector(selectCurrentLastName);
   const handelLogOut = async () => {
      dispatch(removePatient());
      dispatch(Delete());
      dispatch(logout()); // tur bicew jwtBugdin ajilah ued ustagna
      dispatch(removeHospital());
      await logoutt();
      navigate('/');
   };
   return (
      <Layout>
         <div
            style={{
               transition: 'all 1s ease 0s'
            }}
         >
            <Sider theme="light" trigger={null} collapsible collapsed={collapsed} collapsedWidth={77}>
               <div className={collapsed ? 'sidebar collapsed' : 'sidebar'}>
                  <div className="sidebar-header">
                     <img src={collapsed ? logoCollapsed : companyLogo} alt="logo" />
                     <Button onClick={() => setCollapsed(!collapsed)} type="link" icon={<MenuFoldOutlined />} />
                  </div>
                  <Sidebar collapsed={collapsed} />
                  <div className="sidebar-footer">
                     <div className="image-cropper" onClick={() => navigate('/profile')}>
                        <img src={manIcon} className="profile-pic" alt="profile" />
                     </div>
                     <div className="profile-info" onClick={() => navigate('/profile')}>
                        <p className="profile-lastname">{lastName}</p>
                        <p className="profile-firstname">{firstName}</p>
                     </div>
                     <div className="logout" onClick={() => handelLogOut()}>
                        <LogoutOutlined title="Гарах" />
                     </div>
                  </div>
               </div>
            </Sider>
         </div>
         <Layout>
            <div className="main-content">
               <Fragment>
                  <Suspense fallback={<FullScreenLoader full={true} />}>
                     <Outlet />
                  </Suspense>
               </Fragment>
            </div>
         </Layout>
      </Layout>
   );
};
export default MainLayout;
