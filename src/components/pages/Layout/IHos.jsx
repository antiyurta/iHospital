import React, { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import FullScreenLoader from '../../FullScreenLoader';

const IHos = () => {
   return (
      <Fragment>
         <Suspense fallback={<FullScreenLoader full={true} />}>
            <Outlet />
         </Suspense>
      </Fragment>
   );
};
export default IHos;
