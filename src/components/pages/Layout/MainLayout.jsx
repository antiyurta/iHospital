import React, { Fragment, Suspense, useContext, useState } from 'react';
import companyLogo from '../../../assets/logo/iHospital.png';
import profileImg from '../../../assets/images/test.jpg';
import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, logout, selectCurrentFirstName, selectCurrentLastName } from '../../../features/authReducer';
import Sidebar from './NewSidebar';
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from '../../FullScreenLoader';
import AuthContext from '../../../features/AuthContext';

const MainLayout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { logoutt } = useContext(AuthContext);
   const [collapsed, setCollapsed] = useState(false);
   const firstName = useSelector(selectCurrentFirstName);
   const lastName = useSelector(selectCurrentLastName);
   const collapse = () => {
      // setCollapsed(!collapsed);
      setCollapsed(false);
   };
   const handelLogOut = async () => {
      dispatch(Delete());
      dispatch(logout()); // tur bicew jwtBugdin ajilah ued ustagna
      await logoutt();
      navigate('/');
   };
   return (
      <div className="main-layout">
         <div className="main-body">
            <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
               <div className="sidebar-header">
                  <p className="companyName">iHospital</p>
                  {!collapsed ? <MenuFoldOutlined onClick={collapse} /> : <MenuUnfoldOutlined onClick={collapse} />}
               </div>
               <Sidebar collapsed={collapsed} />
               <div className="sidebar-footer">
                  <div className="image-cropper" onClick={() => navigate('/profile')}>
                     <img src={profileImg} className="profile-pic" alt="profile" />
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
            <Fragment>
               <Suspense fallback={<FullScreenLoader full={true} />}>
                  <Outlet />
               </Suspense>
            </Fragment>
         </div>
      </div>
   );
};
export default MainLayout;
