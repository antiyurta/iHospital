import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
   const location = useLocation();
   const isPermission = () => {
      if (location.state?.isRead) {
         return true;
      }
      return false;
   };
   const permission = isPermission();
   return permission ? children : <Navigate to="/notPermission" />;
}
export default PrivateRoute;
