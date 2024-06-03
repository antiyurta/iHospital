import React from 'react';
import { Form, Input } from 'antd';

function ResidentialAddress({ form }) {
   return (
      <div className="rounded-md bg-[#F3F4F6] p-2 flex flex-col gap-2">
         <div className="flex flex-row gap-2 items-end">
            <Form.Item
               label="Аймаг/Хот:"
               className="w-full"
               name={'aimagCityName'}
               rules={[{ required: true, message: 'Аймаг/Хот оруулна уу' }]}
            >
               <Input />
            </Form.Item>
            <Form.Item label="" name={'aimagCityCode'} hidden>
               <Input disabled className="w-10" />
            </Form.Item>
         </div>
         <div className="flex flex-row gap-2 items-end">
            <Form.Item
               label="Сум/Дүүрэг:"
               className="w-full"
               name="soumDistrictName"
               rules={[{ required: true, message: 'Сум/Дүүрэг оруулна уу' }]}
            >
               <Input />
            </Form.Item>
            <Form.Item label="" name="soumDistrictCode" hidden>
               <Input disabled className="w-10" />
            </Form.Item>
         </div>
         <div className="flex flex-row gap-2 items-end">
            <Form.Item
               label="Баг/Хороо:"
               className="w-full"
               name="bagKhorooName"
               rules={[{ required: true, message: 'Баг/Хороо оруулна уу' }]}
            >
               <Input />
            </Form.Item>
            <Form.Item label="" name="bagKhorooCode" hidden>
               <Input disabled className="w-10" />
            </Form.Item>
         </div>
         <Form.Item
            label="Гудамж/Байшин:"
            name="addressStreetName"
            rules={[{ required: true, message: 'Гудамж/Байшин оруулна уу' }]}
         >
            <Input />
         </Form.Item>
         <Form.Item label="Тоот:" name="addressDetail" rules={[{ required: true, message: 'Тоот оруулна уу' }]}>
            <Input />
         </Form.Item>
      </div>
   );
}
export default ResidentialAddress;
