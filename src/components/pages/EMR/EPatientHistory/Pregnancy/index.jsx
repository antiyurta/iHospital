import React, { Suspense, useEffect, useState } from 'react';
import { Button, Collapse, DatePicker, Drawer, Form, InputNumber, Modal, Select, Spin, Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { ListPatientInfo } from '@Comman/ListInjection';
import { selectPatient } from '@Features/patientReducer';
import pregnantWomenImg from './pregnantWomen.png';

import { EyeOutlined, ReadOutlined } from '@ant-design/icons';
import { PregnantInfoItem } from './pregnantInfo';
import { PregnantBookItem } from './pregnantBook';

//sdsa
import { isImpairment, relationship, employment } from '@Utils/config/xypField';
import mnMN from 'antd/es/calendar/locale/mn_MN';
const trueOrFalse = [
   {
      label: 'үгүй',
      value: 0
   },
   {
      label: 'тийм',
      value: 1
   }
];
//sda

import './style.css';
//api
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
import dayjs from 'dayjs';
import { openNofi } from '@Comman/common';
import { selectCurrentHicsSeal } from '@Features/emrReducer';

const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

export const PregnancyInfo = () => {
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const [form] = Form.useForm();
   const [isLoading, setLoading] = useState(false);
   const patient = useSelector(selectPatient);
   const [summary, setSummary] = useState({});
   const [summaryData, setSummaryData] = useState({});
   const [extraFormData, setExtraFormData] = useState({});
   const [open, setOpen] = useState(false);
   const [openCreate, setOpenCreate] = useState(false);
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
            serviceNo: hicsSeal.hicsSealCode,
            doctorName: 'Амарбат'
         },
         formdata: newFormData
      }).then(({ data }) => {
         if (data.code === 200) {
            setOpen(false);
            getCheckSummary();
         }

         console.log(data);
      });
   };

   const getSetNote = async (values) => {
      console.log(values);
      console.log();
      await HealtInsuranceApi.postSavePregnantSummary({
         regNo: patient.registerNumber,
         lastName: patient.lastName,
         firstName: patient.firstName,
         birthDate: patient.birthDate,
         bloodType: 'A',
         ethnicity: 'Монгол',
         birthPlace: 'Улаанбаатар',
         address: `${patient?.aimagCityName},${patient?.soumDistrictName},${patient?.bagKhorooName}`,
         education: patient?.educationName,
         serviceNo: hicsSeal.hicsSealCode,
         doctor: 'Амарбат',
         ...values
      }).then(({ data }) => {
         if (data.code === 200) {
            setOpenCreate(false);
            getCheckSummary();
         }
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
                  {summary.pregnancyNo > 0 ? (
                     <div>
                        <p style={labelstyle}>Нээсэн огноо: {summary?.createdDate}</p>
                        <p style={labelstyle}>Эмч: {summary?.doctor}</p>
                        <p style={labelstyle}>Жирэмсний дугаар: {summary?.pregnancyNo}</p>
                     </div>
                  ) : (
                     <Button
                        onClick={() => {
                           form.resetFields();
                           setOpenCreate(true);
                        }}
                     >
                        Дэвтэр нээх
                     </Button>
                  )}
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
               title="Нээх"
               open={openCreate}
               onCancel={() => {
                  setOpenCreate(false);
               }}
               onOk={() => {
                  form.validateFields().then(getSetNote);
               }}
            >
               <Form form={form} layout="vertical">
                  <div className="flex flex-col gap-2">
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                        <div className="flex flex-col gap-2">
                           <p style={labelstyle}>Ерөнхий мэдээлэл</p>
                           <div className="grid grid-cols-3 gap-2">
                              <div className="col-span-1">
                                 <p style={labelstyle}>Регистерийн дугаар:</p>
                                 <p style={labelstyle}>Овог:</p>
                                 <p style={labelstyle}>Нэр:</p>
                                 <p style={labelstyle}>Төрсөн огноо:</p>
                                 <p style={labelstyle}>Цусны бүлэг:</p>
                                 <p style={labelstyle}>Яс үндэс:</p>
                                 <p style={labelstyle}>Төрсөн газар:</p>
                                 <p style={labelstyle}>Хаяг:</p>
                                 <p style={labelstyle}>Боловсрол:</p>
                              </div>
                              <div className="col-span-2">
                                 <p style={labelstyle}>{patient?.registerNumber}</p>
                                 <p style={labelstyle}>{patient?.lastName}</p>
                                 <p style={labelstyle}>{patient?.firstName}</p>
                                 <p style={labelstyle}>{dayjs(patient?.birthDate).format('YYYY / MM / DD')}</p>
                                 <p style={labelstyle}>""</p>
                                 <p style={labelstyle}>""</p>
                                 <p style={labelstyle}>""</p>
                                 <p
                                    style={labelstyle}
                                 >{`${patient?.aimagCityName},${patient?.soumDistrictName},${patient?.bagKhorooName}`}</p>
                                 <p style={labelstyle}>{patient?.educationName}</p>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-2">
                              <Form.Item
                                 label="Ажил эрхлэлтийн байдал"
                                 name="employmentStatus"
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Ажил эрхлэлтийн байдал заавал'
                                    }
                                 ]}
                              >
                                 <Select
                                    options={employment?.map((emp) => ({
                                       label: emp.valueName,
                                       value: emp.valueName
                                    }))}
                                 />
                              </Form.Item>
                              <Form.Item
                                 label="Гэр бүлийн байдал"
                                 name="familyStatus"
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Гэр бүлийн байдал заавал'
                                    }
                                 ]}
                              >
                                 <Select
                                    options={relationship?.map((relation) => ({
                                       label: relation.valueName,
                                       value: relation.valueName
                                    }))}
                                 />
                              </Form.Item>
                              <Form.Item
                                 label="Хөгжлийн бэрхшээлтэй эсэх"
                                 name="isImpairment"
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Хөгжлийн бэрхшээлтэй эсэх заавал'
                                    }
                                 ]}
                              >
                                 <Select
                                    options={trueOrFalse?.map((impairment) => ({
                                       label: impairment.label,
                                       value: impairment.value.toString()
                                    }))}
                                 />
                              </Form.Item>
                              <Form.Item
                                 label="Архи, согтууруулах ундаа хэрэглэдэг эсэх"
                                 name="isAlcoholic"
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Архи, согтууруулах ундаа хэрэглэдэг эсэх заавал'
                                    }
                                 ]}
                              >
                                 <Select
                                    options={trueOrFalse?.map((alcoholic) => ({
                                       label: alcoholic.label,
                                       value: alcoholic.value.toString()
                                    }))}
                                 />
                              </Form.Item>
                              <Form.Item
                                 label="Тамхи татдаг эсэх"
                                 name="isSmoking"
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Тамхи татдаг эсэх заавал'
                                    }
                                 ]}
                              >
                                 <Select
                                    options={trueOrFalse?.map((smoke) => ({
                                       label: smoke.label,
                                       value: smoke.value.toString()
                                    }))}
                                 />
                              </Form.Item>
                           </div>
                        </div>
                     </div>
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                        <p style={labelstyle}>Сарын тэмдгийн талаарх мэдээлэл:</p>
                        <Form.Item
                           label="Сарын тэмдэг хэд хоног үргэлжилдэг"
                           name={['pregnantPeriod', 'previousPeriodLength']}
                           rules={[
                              {
                                 required: true,
                                 message: 'Сарын тэмдэг хэд хоног үргэлжилдэг заавал'
                              }
                           ]}
                        >
                           <InputNumber />
                        </Form.Item>
                        <Form.Item
                           label="Сарын тэмдэг дунджаар хэд хоногийн зайтай ирдэг"
                           name={['pregnantPeriod', 'previousCycleLength']}
                           rules={[
                              {
                                 required: true,
                                 message: 'Сарын тэмдэг дунджаар хэд хоногийн зайтай ирдэг заавал'
                              }
                           ]}
                        >
                           <InputNumber />
                        </Form.Item>
                        <Form.Item
                           label="Сүүлийн сарын тэмдэг ирсэн огноо"
                           name={['pregnantPeriod', 'lastPeriodDate']}
                           rules={[
                              {
                                 required: true,
                                 message: 'Сүүлийн сарын тэмдэг ирсэн огноо'
                              }
                           ]}
                        >
                           <DatePicker locale={mnMN} />
                        </Form.Item>
                     </div>
                  </div>
               </Form>
            </Modal>
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
