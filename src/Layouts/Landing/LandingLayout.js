import React, { Fragment, Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FullScreenLoader from '../../components/FullScreenLoader';
const LandingLayout = () => {
   const { pathname } = useLocation();
   useEffect(() => {
      const canControlScrollRestoration = 'scrollRestoration' in window.history;
      if (canControlScrollRestoration) {
         window.history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
   }, [pathname]);
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
