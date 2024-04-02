import React, { useState } from 'react';
import { Button, Form, Spin } from 'antd';
//comp
import NewFormRender from '@Pages/BeforeAmbulatory/Customized/NewFormRender';
// forms
import { UrgnetFormLast } from '../DefualtForms';
const Last = () => {
   const [form] = Form.useForm();
   const [isLoading, setLoading] = useState(false);
   const onFinish = (values) => {
      console.log(values);
   };
   const onFinishFailed = (error) => {
      console.log(error);
   };
   return (
      <Spin spinning={isLoading}>
         <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <div className="flex flex-col gap-2">
               <div className="h-[450px] overflow-auto p-3">
                  <NewFormRender
                     useForm={form}
                     form={{
                        documentForm: UrgnetFormLast
                     }}
                     formOptionIds={[]}
                     isCheck={false}
                     formName={null}
                     incomeKeyWords={[]}
                     checkProgress={(_keyWords) => null}
                     isDisabledButton={(_state) => null}
                  />
               </div>
               <Button type="primary" htmlType="submit" loading={isLoading}>
                  Хадгалах
               </Button>
            </div>
         </Form>
      </Spin>
   );
};
export default Last;
