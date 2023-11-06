import React, { Fragment, Suspense, useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FullScreenLoader from '../../components/FullScreenLoader';
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
      navigate('/login');
   }, [user]);
   return <p>Redirecting...</p>;
   return (
      <div className="bg-[#F7F9FF]">
         <Header />
         <Fragment>
            <Suspense fallback={<FullScreenLoader full={true} />}>
               <Outlet />
            </Suspense>
         </Fragment>
         <Footer />
      </div>
   );
};
export default LandingLayout;
