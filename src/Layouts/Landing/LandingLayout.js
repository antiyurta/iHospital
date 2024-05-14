import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AuthContext from '../../features/AuthContext';
const LandingLayout = () => {
   const navigate = useNavigate();
   const { user } = useContext(AuthContext);
   const { pathname } = useLocation();
   useEffect(() => {
      const canControlScrollRestoration = 'scrollRestoration' in window.history;
      if (canControlScrollRestoration) {
         window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
   }, [pathname]);
   useEffect(() => {
      if (pathname != '/privacy') {
         navigate('/auth/login');
      }
   }, [user]);
   return (
      <div className="bg-[#F7F9FF] h-full">
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};
export default LandingLayout;
