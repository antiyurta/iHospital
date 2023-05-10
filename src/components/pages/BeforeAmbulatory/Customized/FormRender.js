import React from 'react';
import { Checkbox, Divider, Form, Input } from 'antd';

function FormRender({ form, formOptionIds }) {
   const Render = ({ form, optionId }) => {
      console.log('=======>', form);
      console.log('==>', optionId);
      const data = form.find((e) => e.keyWord === optionId);
      if (data) {
         if (data.type === 'input') {
            return (
               <div className="rounded-md bg-gray-100 w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item label={data.value} name={data.keyWord} className="mb-0">
                        <Input />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'checkbox') {
            return (
               <div className="rounded-md bg-gray-100 w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item label={data.value} name={data.keyWord} className="mb-0">
                        <Checkbox.Group>
                           {data?.options?.map((option, index) => {
                              return (
                                 <Checkbox key={index} value={index}>
                                    {option.label}
                                 </Checkbox>
                              );
                           })}
                        </Checkbox.Group>
                     </Form.Item>
                  </div>
               </div>
            );
         }
      }
   };
   return (
      <div>
         {form?.documentForm?.map((form, index) => {
            return (
               <div key={index}>
                  <Divider orientation="left" className="text-sm my-2">
                     {form.label}
                  </Divider>
                  <div className="flex flex-col gap-3">
                     {formOptionIds?.map((optionId, indx) => {
                        return (
                           <div key={indx}>
                              <Render form={form.options} optionId={optionId} />
                           </div>
                        );
                     })}
                  </div>
               </div>
            );
         })}
      </div>
   );
}
export default FormRender;
