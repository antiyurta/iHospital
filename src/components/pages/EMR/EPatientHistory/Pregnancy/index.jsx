import React, { Suspense, useEffect, useState } from 'react';
import { Button, Drawer, Form, Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { ListPatientInfo } from '@Comman/ListInjection';
import { selectPatient } from '@Features/patientReducer';
import InsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import pregnantWomenImg from './pregnantWomen.png';

import { ReadOutlined } from '@ant-design/icons';
import { PregnantInfoItem } from './pregnantInfo';
import { PregnantBookItem } from './pregnantBook';

import './style.css';

const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

export const PregnancyInfo = () => {
   const [form] = Form.useForm();
   const patient = useSelector(selectPatient);

   const [open, setOpen] = useState(false);

   const getFormList = async () => {
      await InsuranceApi.getFormData(1).then((res) => {
         return form.setFieldValue('formdata', res.data.result);
      });
   };

   useEffect(() => {
      getFormList();
   }, []);

   const onClose = () => setOpen(false);
   const onOpen = () => setOpen(true);

   const tabItems = [
      {
         key: 1,
         label: (
            <>
               <ReadOutlined className="text-lg mb-[2px]" />
               ЖИРЭМСЭН ҮЕИЙН
            </>
         ),
         children: <PregnantInfoItem form={form} />
      },
      {
         key: 2,
         label: (
            <>
               <ReadOutlined className="text-lg mb-[2px]" />
               ЖИРЭМСНИЙ ХЯНАЛТЫН ДЭВТЭР
            </>
         ),
         children: (
            <Suspense fallback={<></>}>
               <PregnantBookItem form={form} patient={patient} />
            </Suspense>
         )
      }
   ];

   return (
      <Form form={form} className="flex flex-col gap-3">
         <ListPatientInfo patientData={patient} />

         <p style={labelstyle} className="mt-2">
            ЖИРЭМСЭН ҮЕИЙН МЭДЭЭЛЭЛ:
         </p>
         <Button
            type="default"
            onClick={onOpen}
            className="border-green-400 flex gap-2 justify-center items-center uppercase font-semibold text-xs text-black/70"
         >
            <img src={pregnantWomenImg} alt="pregnant-women" className="w-6 h-fit" />
            Мэдээлэл оруулах
         </Button>

         <Drawer
            width={640}
            open={open}
            destroyOnClose
            closable={false}
            placement="right"
            onClose={onClose}
            title={<img src={pregnantWomenImg} alt="pregnant-women" className="w-8 h-fit" />}
            extra={<img src={pregnantWomenImg} alt="pregnant-women" className="w-8 h-fit" />}
            children={<Tabs items={tabItems} defaultActiveKey="1" />}
         />
      </Form>
   );
};
