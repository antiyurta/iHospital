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
//common
import { openNofi } from '@Comman/common';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';
//api
import patientHistoryApi from '@ApiServices/emr/patientHistory';

export default function HistoryTab() {
   const incomeEMRData = useSelector(selectCurrentEmrData);
   const [historyForm] = Form.useForm();
   const [id, setId] = useState(null);
   const [editMode, setEditMode] = useState(false);

   const collapseItems = [
      {
         key: '1',
         label: 'Төрөлт, өсөлт бойжилт',
         forceRender: true,
         children: <Step1 />
      },
      {
         key: '2',
         label: 'Өвчний түүх',
         forceRender: true,
         children: <Step2 />
      },
      {
         key: '3',
         label: 'Амьдралын хэв маяг',
         forceRender: true,
         children: <Step3 />
      },
      {
         key: '4',
         label: 'Амьдралын нөхцөл',
         forceRender: true,
         children: <Step4 />
      },
      {
         key: '5',
         label: 'Харшил',
         forceRender: true,
         children: <Step5 />
      },
      {
         key: '6',
         label: 'Эмийн хэрэглээ',
         forceRender: true,
         children: <Step6 />
      },
      {
         key: '7',
         label: 'Тархвар зүйн асуумж',
         forceRender: true,
         children: <Step7 />
      },
      {
         key: '8',
         label: 'Удамшлын асуумж',
         forceRender: true,
         children: <Step8 />
      }
   ];

   const saveHistory = async (values) => {
      await patientHistoryApi
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
      await patientHistoryApi
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
      await patientHistoryApi
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
         <div className="emr-ins flex flex-col gap-1 justify-between">
            <Collapse accordion items={collapseItems} />
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
