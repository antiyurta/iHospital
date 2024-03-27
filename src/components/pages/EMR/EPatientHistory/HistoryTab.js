import React, { useEffect, useState } from 'react';
import { Collapse, Button, Form } from 'antd';
import Step2 from './Step2';
import Step3 from './Step3';
import Step1 from './Step1';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';

import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../features/emrReducer';

import patientHistoryService from '../../../../services/emr/patientHistory';
import { openNofi } from '../../../common';

const { Panel } = Collapse;

export default function HistoryTab() {
   const incomeEMRData = useSelector(selectCurrentEmrData);
   const [historyForm] = Form.useForm();
   const [id, setId] = useState(null);
   const [editMode, setEditMode] = useState(false);
   const saveHistory = async (values) => {
      await patientHistoryService
         .postPatientHistory({
            patientId: incomeEMRData.patientId,
            ...values
         })
         .then(({ data: { success } }) => {
            if (success) {
               openNofi('success', 'Амжилттай', 'Амьдралын түүр амжиллтай хадгалагдлаа');
            }
         });
   };
   const updateHistory = async (values) => {
      await patientHistoryService
         .patchPatientHistory(id, values)
         .then(({ data: { success } }) => {
            if (success) {
               openNofi('success', 'Амжилттай', 'Амьдралын түүр амжиллтай засагдлаа');
            }
         })
         .finally(() => {
            getPatientHistory();
         });
   };
   const getPatientHistory = async () => {
      await patientHistoryService
         .getPatientHistory({
            params: {
               patientId: incomeEMRData.patientId
            }
         })
         .then(({ data: { response } }) => {
            if (Object.keys(response)?.length > 0) {
               setEditMode(true);
               setId(response.id);
               response['birth'].birthDate = dayjs(response.birth?.birthDate);
            }
            historyForm.setFieldsValue(response);
         });
   };
   useEffect(() => {
      incomeEMRData && getPatientHistory();
   }, []);

   return (
      <Form
         form={historyForm}
         autoComplete="off"
         labelAlign="left"
         scrollToFirstError
         layout="vertical"
         className="h-full"
      >
         <div className="flex flex-col gap-3 h-full justify-between">
            <Collapse accordion>
               <Panel header="Төрөлт, өсөлт бойжилт" key="1" forceRender={true}>
                  <Step1 />
               </Panel>
               <Panel header="Өвчний түүх" key="2" forceRender={true}>
                  <Step2 />
               </Panel>
               <Panel header="Амьдралын хэв маяг" key="3" forceRender={true}>
                  <Step3 />
               </Panel>
               <Panel header="Амьдралын нөхцөл" key="14" forceRender={true}>
                  <Step4 />
               </Panel>
               <Panel header="Харшил" key="5" forceRender={true}>
                  <Step5 />
               </Panel>
               <Panel header="Эмийн хэрэглээ" key="6" forceRender={true}>
                  <Step6 />
               </Panel>
               <Panel header="Тархвар зүйн асуумж" key="7" forceRender={true}>
                  <Step7 />
               </Panel>
               <Panel header="Удамшлын асуумж" key="8" forceRender={true}>
                  <Step8 />
               </Panel>
            </Collapse>
            <Form.Item noStyle>
               <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => {
                     historyForm
                        .validateFields()
                        .then((values) => {
                           editMode ? updateHistory(values) : saveHistory(values);
                        })
                        .catch((error) => {
                           error.errorFields?.map((errorField) => {
                              openNofi('error', 'Алдаа', `${errorField.errors[0]}`);
                           });
                        });
                  }}
               >
                  Амьдралын түүх xадгалах
               </Button>
            </Form.Item>
         </div>
      </Form>
   );
}
