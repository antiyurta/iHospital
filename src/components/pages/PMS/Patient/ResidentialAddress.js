import { Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import ReferenceCountryApi from '../../../../services/reference/country';

function ResidentialAddress() {
   const { Option } = Select;
   const [towns, setTowns] = useState([]);
   const [provices, setProvices] = useState([]);
   const filterTowns = async (value) => {
      await ReferenceCountryApi.getByPageFilter({
         params: {
            type: 3,
            parentId: value
         }
      }).then(({ data: { response } }) => {
         setTowns(response.data);
      });
   };
   const getProvices = async () => {
      await ReferenceCountryApi.getByPageFilter({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setProvices(response.data);
      });
   };
   const getTowns = async () => {
      await ReferenceCountryApi.getByPageFilter({
         params: {
            type: 3
         }
      }).then(({ data: { response } }) => {
         setTowns(response.data);
      });
   };
   useEffect(() => {
      getProvices();
      getTowns();
   }, []);
   return (
      <div>
         <div className="p-1">
            <Form.Item
               label="Аймаг/Хот:"
               name={'aimagId'}
               rules={[{ required: true, message: 'Аймаг/Хот оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select
                  onChange={filterTowns}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
               >
                  {provices.map((provice, index) => {
                     return (
                        <Option key={index} value={provice.id}>
                           {provice.name}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Сум/Дүүрэг:"
               name="soumId"
               rules={[{ required: true, message: 'Сум/Дүүрэг оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
               >
                  {towns?.map((town, index) => {
                     return (
                        <Option key={index} value={town.id}>
                           {town.name}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Баг/Хороо:"
               name="committee"
               rules={[{ required: true, message: 'Баг/Хороо оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Гудамж/Байшин:"
               name="building"
               rules={[{ required: true, message: 'Гудамж/Байшин оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Тоот:"
               name="address"
               rules={[{ required: true, message: 'Тоот оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
      </div>
   );
}
export default ResidentialAddress;
