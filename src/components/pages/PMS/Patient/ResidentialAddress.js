import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
// import districtApi from '@ApiServices/reference/district';
import provinceApi from '@ApiServices/reference/province';

function ResidentialAddress({ form }) {
   const [provinces, setProvinces] = useState([]);
   // const [districts, setDistricts] = useState([]);
   // const provinceId = Form.useWatch('provinceId', form);

   const getProvinces = () => {
      provinceApi.get().then((res) => {
         if (res.data.success) {
            setProvinces(res.data.response);
         }
      });
   };
   // const getDistricts = useCallback(() => {
   //    districtApi.get({ provinceId }).then((res) => {
   //       if (res.data.success) {
   //          setDistricts(res.data.response);
   //       }
   //    });
   // }, [provinceId]);
   useEffect(() => {
      getProvinces();
   }, []);
   // useEffect(() => {
   //    getDistricts();
   // }, [getDistricts]);
   return (
      <div className="rounded-md bg-[#F3F4F6] p-2 flex flex-col gap-2">
         <div className="flex flex-row gap-2 items-end">
            <Form.Item
               label="Аймаг/Хот:"
               className="w-full"
               name={'aimagCityCode'}
               rules={[{ required: true, message: 'Аймаг/Хот оруулна уу' }]}
            >
               <Select options={provinces.map((item) => ({ label: item.name, value: item.code }))} />
            </Form.Item>
            <Form.Item label="" name={'aimagCityName'} hidden>
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
