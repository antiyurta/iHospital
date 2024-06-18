import React from 'react';
import { DatePicker, Form, InputNumber, Select, Spin, message } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import dayjs from 'dayjs';

import { isImpairment, relationship, employment } from '@Utils/config/xypField';

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
const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

export const SavePregnantSummary = ({ form, patient }) => {
   console.log('relationship', isImpairment);
   console.log('relationship', isImpairment);
   return (
      <Spin spinning={false}>
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
      </Spin>
   );
};
