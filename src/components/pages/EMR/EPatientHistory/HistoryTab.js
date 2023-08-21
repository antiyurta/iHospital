import React, { useEffect } from 'react';
import { Collapse, Row, Button, Form } from 'antd';
import Step2 from './Step2';
import Step3 from './Step3';
import Step1 from './Step1';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import moment from 'moment';

export default function HistoryTab({ patientId, inspection }) {
   const { Panel } = Collapse;
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [historyForm] = Form.useForm();
   const saveHistory = () => {
      config.params.patientId = null;
      historyForm.validateFields().then(async (values) => {
         values['patientId'] = patientId;
         const response = await Post('emr/patient-history', token, config, values);
         if (response === 201) {
            getPatientHistory(patientId);
         }
      });
   };
   const getPatientHistory = async (id) => {
      config.params.patientId = id;
      var response = await Get('emr/patient-history', token, config);
      if (Object.keys(response)?.length > 0) {
         response['birth'].birthDate = moment(response.birth?.birthDate);
      }
      historyForm.setFieldsValue(response);
      config.params.patientId = null;
   };
   useEffect(() => {
      getPatientHistory(patientId);
   }, [inspection]);

   return (
      <Form form={historyForm} autoComplete="off" labelAlign="left" scrollToFirstError layout="vertical">
         <div className="flex flex-col gap-3">
            <Collapse accordion>
               <Panel header="Төрөлт, өсөлт бойжилт" key="1" forceRender={true}>
                  <Step1 />
               </Panel>
               <Panel header="Өвчний түүх" key="2">
                  <Step2 />
               </Panel>
               <Panel header="Амьдралын хэв маяг" key="3">
                  <Step3 />
               </Panel>
               <Panel header="Амьдралын нөхцөл" key="14">
                  <Step4 />
               </Panel>
               <Panel header="Харшил" key="5">
                  <Step5 />
               </Panel>
               <Panel header="Эмийн хэрэглээ" key="6">
                  <Step6 />
               </Panel>
               <Panel header="Тархвар зүйн асуумж" key="7">
                  <Step7 />
               </Panel>
               <Panel header="Удамшлын асуумж" key="8">
                  <Step8 />
               </Panel>
            </Collapse>
            <Form.Item>
               <Button type="primary" htmlType="submit" onClick={() => saveHistory()}>
                  Амьдралын түүх xадгалах
               </Button>
            </Form.Item>
         </div>
      </Form>
   );
}
