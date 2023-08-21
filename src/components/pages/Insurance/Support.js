import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Get } from '../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';

function Support({ result }) {
   const token = useSelector(selectCurrentToken);
   const [loading, setIsloading] = useState(false);
   const [codesForm] = Form.useForm();
   const onFinish = async (values) => {
      setIsloading(true);
      const conf = {
         headers: {},
         params: {
            startCode: values.startCode,
            endCode: values.endCode
         }
      };
      const response = await Get('reference/diagnose/between/code', token, conf);
      result(response);
      setIsloading(false);
   };
   return (
      <Form form={codesForm} layout="vertical" onFinish={onFinish}>
         <Form.Item
            label="Эхлэх"
            name="startCode"
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
            label="Дуусах"
            name="endCode"
            rules={[
               {
                  required: true,
                  message: 'Заавал'
               }
            ]}
         >
            <Input />
         </Form.Item>
         <Form.Item>
            <Button
               type="primary"
               loading={loading}
               onClick={() => codesForm.validateFields().then((values) => onFinish(values))}
            >
               Татах
            </Button>
         </Form.Item>
      </Form>
   );
}
export default Support;
