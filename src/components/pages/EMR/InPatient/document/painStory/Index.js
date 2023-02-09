import { Button, Form, Spin } from 'antd';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../../../../features/authReducer';
import { DefaultPatch, Get } from '../../../../../comman';
import Page1 from './Page1';
import Page2 from './Page2';
import moment from 'moment';
import Epicriz from '../../../../BeforeAmbulatory/Lists/Epicriz';
//
import InternalMedicine from '../InternalMedicine/Index';
import Neurologist from '../Neurologist/Index';
//
function Index({ id }) {
   const token = useSelector(selectCurrentToken);
   let location = useLocation();
   const [storyId, setStoryId] = useState(Number);
   const [testData, setTestData] = useState({});
   const [loading, setLoading] = useState(false);
   const [form] = Form.useForm();
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
         const createdAt = moment(response.data[0]?.createdAt).format(
            'YYYY-MM-DD'
         );
         response.data[0].doctorInspection = JSON.parse(
            response.data[0].doctorInspection
         );
         response.data[0]['createdAt'] = createdAt;
         const birthDate = moment(response.data[0]['patient'].birthDate).format(
            'Төрсөн YYYY он MM сар DD өдөр'
         );
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
      const response = await DefaultPatch(
         'inpatient/story/' + storyId,
         token,
         conf,
         values
      );
      console.log(response);
      // form.setFieldsValue(response);
   };
   const RenderDoctorInspection = () => {
      if (id === 1) {
         return <InternalMedicine />;
      } else if (id === 2) {
         return <Neurologist />;
      }
   };
   useEffect(() => {
      getStory();
   }, [location]);
   return (
      <>
         <Spin spinning={loading}>
            <div ref={printRef}>
               <Form form={form}>
                  <Page1 />
                  <Page2 />
                  <RenderDoctorInspection />
                  <Epicriz />
               </Form>
            </div>
         </Spin>
         <Button onClick={() => handlePrint()}>Хэвлэх</Button>
         <Button
            onClick={() =>
               form.validateFields().then((values) => {
                  updateStory(values);
               })
            }
         >
            хадгалах
         </Button>
         <Button onClick={() => console.log(form.getFieldsValue())}>
            АРЙЫБЙЫБ
         </Button>
      </>
   );
}
export default Index;
