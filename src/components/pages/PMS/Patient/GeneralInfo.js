import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
//common
import { UploadImage } from '@Comman/Input/UploadImage';
//api
import CountryApi from '@ApiServices/reference/country';
//extends
const { Option } = Select;

function GeneralInfo({ form, gbase }) {
   const [citizens, setCitizens] = useState([]);

   const getCitizens = async () => {
      await CountryApi.getByPageFilter({
         params: {
            type: 1
         }
      }).then(({ data: { response } }) => {
         setCitizens(response.data);
      });
   };
   useEffect(() => {
      getCitizens();
   }, []);
   return (
      <div className="flex flex-col gap-2">
         <div className="flex flex-row gap-2 justify-between">
            <div className="rounded-md bg-[#F3F4F6] p-2">
               <Form.Item name={'imageId'} hidden>
                  <Input />
               </Form.Item>
               <Form.Item name={'base64String'} hidden>
                  <Input />
               </Form.Item>
               <UploadImage form={form} itemName={'imageId'} />
            </div>
         </div>
         <div className="rounded-md bg-[#F3F4F6] p-2">
            <Form.Item name="civilId" hidden>
               <Input />
            </Form.Item>
            <Form.Item name="requestId" hidden>
               <Input />
            </Form.Item>
            <Form.Item name="resultMsg" hidden>
               <Input />
            </Form.Item>
            <Form.Item name="familyName" label="Ургийн овог:">
               <Input />
            </Form.Item>
            <Form.Item
               label="Эцэг/эх/-ийн нэр:"
               name="lastName"
               rules={[
                  {
                     required: true,
                     message: 'Эцэг/эх/-ийн нэр оруулна уу'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Өөрийн нэр:"
               name="firstName"
               rules={[
                  {
                     required: true,
                     message: 'Өөрийн нэр оруулна уу'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Иргэншил:"
               name="countryId"
               rules={[
                  {
                     required: true,
                     message: 'Заавал'
                  }
               ]}
            >
               <Select
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
               >
                  {citizens.map((citizen, index) => {
                     return (
                        <Option key={index} value={citizen.id}>
                           {citizen.name}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
            <Form.Item
               label="Регистр дугаар:"
               name="registerNumber"
               rules={[
                  {
                     required: true,
                     message: 'Регистр дугаар оруулна уу'
                  },
                  {
                     validator: async (_, registerNumber) => {
                        if (registerNumber === undefined) {
                           return Promise.reject(new Error(''));
                        } else {
                           if (registerNumber.length < 10) {
                              return Promise.reject(new Error('Хамгийн багадаа 10 үсэг'));
                           }
                        }
                     }
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Утас"
               name="phoneNo"
               rules={[
                  {
                     required: true,
                     message: 'Утас оруулна уу'
                  }
               ]}
            >
               <Input />
            </Form.Item>
         </div>
      </div>
   );
}
export default GeneralInfo;
