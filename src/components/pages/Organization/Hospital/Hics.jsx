import React from 'react';
import { Form, Input, Switch } from 'antd';
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
         <Form.Item
            label="Тусгай дугаарт иргэн мсж явуулах эсэх"
            name="isCitizenByOtp"
            className="white-radio"
            valuePropName="checked"
         >
            <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
         </Form.Item>
      </>
   );
};
export default Hics;
