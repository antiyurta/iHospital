import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import AuthContext from './AuthContext';

const ProtectedRoute = () => {
   const { user } = useContext(AuthContext);
   const location = useLocation();
   if (user) {
      return <Outlet />;
   }
   return <Navigate to="/" state={{ from: location }} />;
};
export default ProtectedRoute;
