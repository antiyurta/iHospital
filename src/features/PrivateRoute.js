import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authReducer';
import axios from 'axios';
import { Spin } from 'antd';

function PrivateRoute({ children }) {
   const [isAuth, setIsAuth] = useState('loading');
   const location = useLocation();
   const isPermission = () => {
      if (location.state) {
         return true;
      }
      return false;
   };
   const permission = isPermission();
   const token = useSelector(selectCurrentToken);
   useEffect(() => {
      axios
         .get(process.env.REACT_APP_DEV_URL + 'authentication', {
            headers: {
               Authorization: `Bearer ${token}`,
               'X-API-KEY': process.env.REACT_APP_API_KEY
            }
         })
         .then((response) => {
            if (response.status === 200) {
               setIsAuth('done');
            }
         })
         .catch((error) => {
            console.log('=============>', error);
            setIsAuth('failed');
         });
   }, [children]);
   if (isAuth === 'loading') {
      return (
         <div className="text-center">
            <Spin tip="Уншиж байна ..." />
         </div>
      );
   } else if (isAuth === 'done') {
      return permission ? children : <Navigate to="/notPermission" />;
   } else {
      return <Navigate to="/" />;
   }
}
export default PrivateRoute;
