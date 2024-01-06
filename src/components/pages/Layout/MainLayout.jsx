import React, { Fragment, Suspense, useContext } from 'react';
import companyLogo from '../../../assets/logo/iHospital.png';
import male from '../../../assets/images/maleAvatar.svg';
import { Outlet } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
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
   const firstName = useSelector(selectCurrentFirstName);
   const lastName = useSelector(selectCurrentLastName);
   const handelLogOut = async () => {
      dispatch(Delete());
      dispatch(logout()); // tur bicew jwtBugdin ajilah ued ustagna
      await logoutt();
      navigate('/');
   };
   return (
      <div className="main-layout">
         <div className="main-body">
            <div className="sidebar">
               <div className="sidebar-header">
                  <img src={companyLogo} alt="logo" />
               </div>
               <Sidebar />
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
