import Button from 'antd/es/button';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Page1 from './Page1';
import Page2 from './Page2';

function Index() {
   const printRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   return (
      <>
         <div ref={printRef} style={{ width: '20cm' }}>
            <Page1 />
            <Page2 />
         </div>
         <Button onClick={() => handlePrint()}>Хэвлэх</Button>
      </>
   );
}
export default Index;
