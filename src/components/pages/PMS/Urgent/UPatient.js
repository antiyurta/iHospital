import React from 'react';
import { DatePicker, Form, Input, Radio } from 'antd';

function UPatient() {
   return (
      <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
         <div className="flex flex-col gap-3">
            <div className="p-3">
               <Form.Item className="mb-0" label="Регистрийн дугаар" name="registerNumber">
                  <Input />
               </Form.Item>
            </div>
            <div className="p-3">
               <Form.Item className="mb-0" label="Эцэг/Эхийн нэр" name="lastName">
                  <Input disabled={true} />
               </Form.Item>
            </div>
            <div className="p-3">
               <Form.Item className="mb-0" label="Өөрийн нэр" name="firstName">
                  <Input disabled={true} />
               </Form.Item>
            </div>
            <div className="p-3">
               <Form.Item className="mb-0" label="Төрсөн огноо" name="birthDate">
                  <DatePicker disabled={true} format={'YYYY/MM/DD'} />
               </Form.Item>
            </div>
            <div className="p-3">
               <Form.Item
                  rules={[
                     {
                        required: true,
                        message: 'Хүйс заавал'
                     }
                  ]}
                  className="mb-0"
                  label="Хүйс"
                  name="genderType"
               >
                  <Radio.Group className="flex justify-center">
                     <Radio value={'MAN'}>ЭРЭГТЭЙ</Radio>
                     <Radio value={'WOMAN'}>ЭМЭГТЭЙ</Radio>
                  </Radio.Group>
               </Form.Item>
            </div>
            <div className="p-3">
               <Form.Item className="mb-0" label="Утасны дугаар" name="phoneNo">
                  <Input />
               </Form.Item>
            </div>
         </div>
      </div>
   );
}
export default UPatient;
