import { Button, Form } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function Index({ data }) {
   const printRef = useRef();
   const [form] = Form.useForm();
   const dataConverter = () => {
      const dd = {};
      // console.log(JSON.parse(data.pain));
      // form.setFieldsValue(JSON.parse(data.pain));
   };
   const onFinish = () => {
      form.validateFields().then((values) => {
         console.log(values);
      });
   };
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   useEffect(() => {
      dataConverter();
   }, [data]);
   return (
      <>
         <div ref={printRef}>
            <Form form={form}>
               <Page1 form={form} />
               <Page2 form={form} />
               <Page3 form={form} />
            </Form>
         </div>
         <Button onClick={() => handlePrint()}>Хэвлэх</Button>
      </>
   );
}
export default Index;
