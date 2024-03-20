import React, { Fragment, Suspense, useContext, useState } from 'react';
import companyLogo from '../../../assets/logo/iHospital.png';
import logoCollapsed from '../../../assets/logo/logoCollapsed.svg';
import male from '../../../assets/images/maleAvatar.svg';
import { Outlet } from 'react-router-dom';
import { LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, logout, selectCurrentFirstName, selectCurrentLastName } from '../../../features/authReducer';
import Sidebar from './NewSidebar';
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from '../../FullScreenLoader';
import AuthContext from '../../../features/AuthContext';
import { Button, Layout } from 'antd';
import { removePatient } from '../../../features/patientReducer';
import { remove as removeHospital } from '../../../features/hospitalReducer';

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
