import React, { useEffect, useState } from 'react';
import { Button, Form, Spin, Tabs } from 'antd';
import GeneralInfo from './Patient/GeneralInfo';
import MoreInfo from './Patient/MoreInfo';
import ResidentialAddress from './Patient/ResidentialAddress';
import Insurance from './Patient/Insurance';
import Contact from './Patient/Contact';
import dayjs from 'dayjs';

import patientApi from '../../../services/pms/patient.api';

const PatientSupport = (props) => {
   const { editMode, patientId, setGlobalDb, filterTowns, onFinish, mongoliaId } = props;
   const [form] = Form.useForm();
   const [isLoading, setIsLoading] = useState(false);
   const getPatient = async () => {
      setIsLoading(true);
      await patientApi
         .getById(patientId)
         .then((response) => {
            response.data.response['birthDay'] = dayjs(response.data.response['birthDay']);
            filterTowns(response.data.response.aimagId);
            form.setFieldsValue(response.data.response);
            setIsLoading(false);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const onFinishFailed = (error) => {
      console.log('dsdsa', error);
   };

   useEffect(() => {
      if (editMode) {
         patientId && getPatient();
      } else {
         form.resetFields();
      }
   }, [patientId, editMode]);
   const items = [
      {
         forceRender: true,
         label: 'Ерөнхий мэдээлэл',
         key: 1,
         children: <GeneralInfo form={form} gbase={setGlobalDb} />
      },
      { forceRender: true, label: 'Нэмэлт мэдээлэл', key: 2, children: <MoreInfo form={form} /> },
      {
         forceRender: true,
         label: 'Оршин суугаа хаяг',
         key: 3,
         children: <ResidentialAddress />
      },
      {
         forceRender: true,
         label: 'Даатгал',
         key: 4,
         children: <Insurance form={form} />
      },
      {
         forceRender: true,
         label: 'Холбоо барих хүний мэдээлэл',
         key: 5,
         children: <Contact />
      }
   ];

   return (
      <Form
         form={form}
         layout="vertical"
         initialValues={{
            countryId: mongoliaId,
            contacts: [{}]
         }}
      >
         <Spin spinning={isLoading}>
            <div className="flex flex-col gap-1">
               <Tabs tabPosition="left" destroyInactiveTabPane items={items} />
               <Button
                  type="primary"
                  onClick={() => {
                     form
                        .validateFields()
                        .then((values) => {
                           onFinish(values);
                        })
                        .catch((error) => {
                           onFinishFailed(error);
                        });
                  }}
               >
                  Хадгалах
               </Button>
            </div>
         </Spin>
      </Form>
   );
};
export default PatientSupport;
