import Button from 'antd/es/button';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

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
            <Page3 />
            <Page4 />
            <Page5 />
         </div>
         <Button onClick={() => handlePrint()}>Хэвлэх</Button>
      </>
   );
}
export default Index;
