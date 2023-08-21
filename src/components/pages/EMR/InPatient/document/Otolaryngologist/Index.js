import Button from 'antd/es/button';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Page1 from './Page1';
import Page2 from './Page2';

function Index() {
   return (
      <>
         <Page1 />
         <Page2 />
      </>
   );
}
export default Index;
