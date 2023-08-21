import { Button, Form, Spin } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../../../../features/authReducer';
import { DefaultPatch, Get } from '../../../../../comman';
import { PrinterFilled } from '@ant-design/icons';
import Page1 from './Page1';
import Page2 from './Page2';
import moment from 'moment';
import Epicriz from '../../../../BeforeAmbulatory/Lists/Epicriz';
//
import InternalMedicine from '../InternalMedicine/Index'; // Дотрын эмчийн үзлэг
import Neurologist from '../Neurologist/Index'; // МЭДРЭЛИЙН ЭМЧИЙН ҮЗЛЭГ
import Page1ForCT2 from './Page1ForCT2'; // CT2 Nuur
import Children from '../Children/Index'; // CT2
//
function Index({ data }) {
   const token = useSelector(selectCurrentToken);
   let location = useLocation();
   const [form] = Form.useForm();
   const [storyId, setStoryId] = useState(Number);
   const [testData, setTestData] = useState({});
   const [loading, setLoading] = useState(false);
   const printRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   const getStory = async () => {
      setLoading(true);
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: location?.state?.inpatientRequestId
         }
      };
      var response = await Get('inpatient/story', token, conf);
      if (response.data.length > 0) {
         setStoryId(response.data[0].id);
         setTestData(response.data[0]);
         const createdAt = moment(response.data[0]?.createdAt).format('YYYY-MM-DD');
         response.data[0].doctorInspection = JSON.parse(response.data[0].doctorInspection);
         response.data[0]['createdAt'] = createdAt;
         const birthDate = moment(response.data[0]['patient'].birthDate).format('Төрсөн YYYY он MM сар DD өдөр');
         if (birthDate.length != 12) {
            response.data[0]['patient'].birthDate = birthDate.toString();
         }
      }
      form.setFieldsValue(response.data[0]);
      setLoading(false);
   };
   const updateStory = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['doctorInspection'] = JSON.stringify(values['doctorInspection']);
      values['templateId'] = 1;
      const response = await DefaultPatch('inpatient/story/' + storyId, token, conf, values);
      console.log(response);
      // form.setFieldsValue(response);
   };
   const RenderDoctorInspection = () => {
      if (data.templateId === 1) {
         return (
            <>
               <Page1 form={form} />
               <Page2 templateId={data.templateId} />
               <InternalMedicine />
            </>
         );
      } else if (data.templateId === 2) {
         return (
            <>
               <Page1ForCT2 />
               <Children />
            </>
         );
      } else if (data.templateId === 3) {
         return <Neurologist form={form} />;
      }
   };
   useEffect(() => {
      setLoading(true);
      if (typeof data.doctorInspection === 'string') {
         data.doctorInspection = JSON.parse(data.doctorInspection);
      }
      form.setFieldsValue(data);
      console.log(data);
      setLoading(false);
   }, [data]);
   return (
      <div>
         <Button icon={<PrinterFilled />} onClick={() => handlePrint()}>
            Хэвлэх
         </Button>
         <div className="hidden">
            <Spin spinning={loading}>
               <div ref={printRef}>
                  <Form form={form}>
                     <RenderDoctorInspection />
                     <Epicriz />
                  </Form>
               </div>
            </Spin>
         </div>
      </div>
   );
}
export default Index;
