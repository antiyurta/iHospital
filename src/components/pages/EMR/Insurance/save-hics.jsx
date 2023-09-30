import { Form, Input } from 'antd';
import React from 'react';
const SaveHics = (props) => {
   const { form } = props;
   return (
      <Form.Item>
         <Form.Item
            label="Битүүмж үүсгэх"
            name="regno"
            rules={[
               {
                  required: true,
                  message: 'Регистр оруулна уу'
               }
            ]}
         >
            <Input placeholder="Регистр оруулна уу" />
         </Form.Item>
      </Form.Item>
   );
};
export default SaveHics;
