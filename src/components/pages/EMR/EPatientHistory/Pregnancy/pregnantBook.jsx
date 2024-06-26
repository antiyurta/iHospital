import React, { useState } from 'react';
import { Badge, Button, Card, Form, InputNumber, Modal, Spin } from 'antd';
import { QuestionRender } from './QuestionRender';
import { EyeOutlined } from '@ant-design/icons';
//img
import pregnantWomenImg from './pregnantWomen.png';
//api
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//defualts
import { labelstyle } from './index';
const PregnantBook = ({ patient, summaryData }) => {
   const [form] = Form.useForm();
   const [isLoading, setLoading] = useState(false);
   const [isOpen, setOpen] = useState(false);
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
   return (
      <>
         <div
            className="rounded-md bg-[#F3F4F6] w-full inline-block p-2"
            style={{
               height: 'calc(100vh - 495px)',
               overflow: 'auto'
            }}
         >
            <Spin wrapperClassName="h-full" spinning={isLoading}>
               <div className="flex flex-col gap-2">
                  <Button
                     type="default"
                     onClick={() => {
                        getFormList();
                     }}
                     className="border-green-400 flex gap-2 justify-center items-center uppercase font-semibold text-xs text-black/70"
                  >
                     <img src={pregnantWomenImg} alt="pregnant-women" className="w-6 h-fit" />
                     Мэдээлэл оруулах
                  </Button>
                  <p style={labelstyle}>Товлолууд:</p>
                  {summaryData?.length > 0 ? (
                     <div className="grid grid-cols-2 gap-2">
                        {summaryData?.map((data, index) => (
                           <Badge.Ribbon
                              key={index}
                              rootClassName="w-[calc(100%-1rem)]"
                              text={data.pregnancyWeek}
                              color="green"
                           >
                              <Card className="h-full">
                                 <div className="flex flex-row gap-2 justify-between pt-8">
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
                              </Card>
                           </Badge.Ribbon>
                        ))}
                     </div>
                  ) : (
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">Байхгүй</div>
                  )}
               </div>
            </Spin>
         </div>
         <Modal
            title="Мэдээлэл оруулах"
            open={isOpen}
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
               <QuestionRender form={form} />
            </Form>
         </Modal>
      </>
   );
};
export default PregnantBook;
