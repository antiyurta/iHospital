import React, { Suspense, useEffect, useState } from 'react';
import { Button, Collapse, Drawer, Form, InputNumber, Modal, Spin, Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { ListPatientInfo } from '@Comman/ListInjection';
import { selectPatient } from '@Features/patientReducer';
import pregnantWomenImg from './pregnantWomen.png';

import { EyeOutlined, ReadOutlined } from '@ant-design/icons';
import { PregnantInfoItem } from './pregnantInfo';
import { PregnantBookItem } from './pregnantBook';

import './style.css';
//api
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import dayjs from 'dayjs';
import { openNofi } from '@Comman/common';

const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

export const PregnancyInfo = () => {
   const [form] = Form.useForm();
   const [isLoading, setLoading] = useState(false);
   const patient = useSelector(selectPatient);
   const [summary, setSummary] = useState({});
   const [summaryData, setSummaryData] = useState({});
   const [extraFormData, setExtraFormData] = useState({});
   const [open, setOpen] = useState(false);
   const [isOpenExtra, setOpenExtra] = useState(false);

   const getFormList = async () => {
      setLoading(true);
      await HealtInsuranceApi.getFormData(1)
         .then(({ data }) => {
            const sortedData = data.result?.sort((a, b) => a.categoryId - b.categoryId);
            form.setFieldValue('formdata', sortedData);
            setOpen(true);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getExtraData = async (data) => {
      setLoading(true);
      await HealtInsuranceApi.getPregnantFormData(data.pregnancyNo, patient.registerNumber, data.pregnancyWeek)
         .then(({ data }) => {
            if (data.code === 200) {
               const sortedData = data.result?.sort((a, b) => a.categoryId - b.categoryId);
               form.setFieldValue('formdata', sortedData);
               setOpen(true);
            } else {
               openNofi('error', 'Амжилтгүй', data.description);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   // dewtertei eseig shalgah
   const getCheckSummary = async () => {
      setLoading(true);
      await HealtInsuranceApi.getPregnantSummary(patient.registerNumber)
         .then(({ data }) => {
            if (data.code === 200) {
               setSummary(data.result);
               getAllSummary(data.result.pregnancyNo);
            } else {
               setSummary({});
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getAllSummary = async (pregnancyNo) => {
      await HealtInsuranceApi.getPregnantAppointment(pregnancyNo, patient.registerNumber).then(({ data }) => {
         setSummaryData(data.result || []);
      });
   };

   const onFinish = async (values) => {
      const newFormData = values.formdata?.map((data) => {
         if (data.type === 'inputDate') {
            return {
               ...data,
               value: dayjs(data.value || new Date()).format('YYYY-MM-DD')
            };
         }
         return data;
      });
      await HealtInsuranceApi.postSendPregnantFormData({
         appointment: {
            regNo: patient.registerNumber,
            pregnancyNo: summary.pregnancyNo,
            pregnancyWeek: values.appointment.pregnancyWeek,
            serviceNo: '20160-240618-4535918',
            doctorName: 'amarbat'
         },
         formdata: newFormData
      }).then(({ data }) => {
         console.log(data);
      });
   };

   useEffect(() => {
      getCheckSummary();
   }, []);

   return (
      <Spin spinning={isLoading}>
         <div className="flex flex-col gap-3">
            <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
               <div className="flex flex-row justify-between gap-1">
                  <ListPatientInfo patientData={patient} />
                  <div>
                     <p style={labelstyle}>Нээсэн огноо: {summary?.createdDate}</p>
                     <p style={labelstyle}>Эмч: {summary?.doctor}</p>
                     <p style={labelstyle}>Жирэмсний дугаар: {summary?.pregnancyNo}</p>
                  </div>
               </div>
            </div>
            <p style={labelstyle}>Товлолууд:</p>
            {summaryData?.length > 0 ? (
               <div className="grid grid-cols-2 gap-2">
                  {summaryData?.map((data, index) => (
                     <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                        <div className="flex flex-row gap-2 justify-between">
                           <div>
                              <p style={labelstyle}>Нээсэн огноо: {data?.createdDate}</p>
                              <p style={labelstyle}>Эмнэлэг: {data?.hospitalName}</p>
                              <p style={labelstyle}>Эмч: {data?.doctorName}</p>
                              <p style={labelstyle}>Жирэмсний 7 хоног: {data?.pregnancyWeek}</p>
                           </div>
                           <div>
                              <Button
                                 icon={<EyeOutlined />}
                                 onClick={() => {
                                    getExtraData(data);
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">Байхгүй</div>
            )}
            <p style={labelstyle} className="mt-2">
               ЖИРЭМСЭН ҮЕИЙН МЭДЭЭЛЭЛ:
            </p>
            <Button
               type="default"
               onClick={() => {
                  // setOpen(true);
                  getFormList();
               }}
               className="border-green-400 flex gap-2 justify-center items-center uppercase font-semibold text-xs text-black/70"
            >
               <img src={pregnantWomenImg} alt="pregnant-women" className="w-6 h-fit" />
               Мэдээлэл оруулах
            </Button>
            <Modal
               title="Мэдээлэл оруулах"
               open={open}
               onCancel={() => {
                  setOpen(false);
               }}
               onOk={() => {
                  form.validateFields().then(onFinish);
               }}
               destroyOnClose
            >
               <Form form={form} layout="vertical">
                  <div className="flex flex-col gap-3">
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                        <p style={labelstyle}>Товлолын мэдээлэл:</p>
                        <Form.Item label="Товлолын жирэмсний 7 хоног" name={['appointment', 'pregnancyWeek']}>
                           <InputNumber />
                        </Form.Item>
                     </div>
                  </div>
                  <p style={labelstyle}>Жирэмсний хяналтын дэвтрийн мэдээлэл:</p>
                  <PregnantBookItem form={form} />
               </Form>
            </Modal>
            {/* <Drawer
            width={640}
            open={open}
            destroyOnClose
            closable={false}
            placement="right"
            onClose={onClose}
            title={<img src={pregnantWomenImg} alt="pregnant-women" className="w-8 h-fit" />}
            extra={<img src={pregnantWomenImg} alt="pregnant-women" className="w-8 h-fit" />}
            children={<Tabs items={tabItems} defaultActiveKey="1" />}
         /> */}
         </div>
      </Spin>
   );
};
