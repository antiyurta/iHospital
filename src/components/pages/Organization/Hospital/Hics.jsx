import React from 'react';
import { Form, Input } from 'antd';
const Hics = () => {
   return (
      <>
         <Form.Item
            label="Даатгалын нэвтрэх нэр"
            name="insuranceUsername"
            rules={[
               {
                  required: true,
                  message: 'Заавал'
               }
            ]}
         >
            <Input />
         </Form.Item>
         <Form.Item
            label="Даатгалын нууц үг"
            name="insurancePassword"
            rules={[
               {
                  required: true,
                  message: 'Заавал'
               }
            ]}
         >
            <Input />
         </Form.Item>
      </>
   );
};
export default Hics;
