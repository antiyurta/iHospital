import { Button, Form } from 'antd';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import Page1 from './Page1';
import Page2 from './Page2';

function Index({ data }) {
   const [form] = Form.useForm();
   const printRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   console.log(data);
   return (
      <>
         <div ref={printRef}>
            <Page1
               patient={data.patient}
               anemis={data.anemis}
               diagnose={data.diagnose}
            />
            <Page2
               anemis={data.anemis}
               generalInspection={data.generalInspection}
            />
         </div>
         <Button onClick={() => handlePrint()}>Хэвлэх</Button>
      </>
   );
}
export default Index;
