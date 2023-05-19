import React from 'react';
import { Input, Form, Radio, Checkbox, Select } from 'antd';

export default function DynamicFormInspection({ data, forkey, unikey }) {
   const { TextArea } = Input;
   const { Option } = Select;
   //antd FORM нь ингэж хадгалж чаддаг юм байна өөө : {[el.inspectionType, el.label]} => [object -н KEY, Param -ууд]
   //Жнь: question: {Асуумж: '22', checkchoose: Array(2), bodyStatus: 'heavy'} => Асуумжын Парамууд

   return (
      <>
         {data?.map((element, index) => {
            if (element.type === 'checkbox') {
               return (
                  <div key={index} className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                     <div className="inline-flex p-1">
                        <Form.Item
                           label={element.value}
                           name={[unikey, forkey, element.value]}
                           rules={[{ required: false, message: '' }]}
                           className="mb-0"
                        >
                           <Checkbox.Group className="align-middle grid">
                              {element.options?.map((el, index) => {
                                 return (
                                    <Checkbox className="pl-1 ml-0" value={el.label} key={index}>
                                       {el.label}
                                    </Checkbox>
                                 );
                              })}
                           </Checkbox.Group>
                        </Form.Item>
                     </div>
                  </div>
               );
            } else if (element.type === 'radio') {
               return (
                  <div key={index} className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                     <div className="inline-flex p-1">
                        <Form.Item
                           label={element.value}
                           name={[unikey, forkey, element.value]}
                           rules={[{ required: false, message: '' }]}
                           className="mb-0"
                        >
                           <Radio.Group className="align-middle grid">
                              {element.options?.map((el, index) => {
                                 return (
                                    <Radio className="pl-1 ml-0" value={el.label} key={index}>
                                       {el.label}
                                    </Radio>
                                 );
                              })}
                           </Radio.Group>
                        </Form.Item>
                     </div>
                  </div>
               );
            } else if (element.type === 'dropdown') {
               return (
                  <div key={index} className="rounded-md bg-[#F3F4F6] w-1/2 inline-block m-1">
                     <div className="p-1">
                        <Form.Item
                           label={element.value}
                           name={[unikey, forkey, element.value]}
                           rules={[{ required: false, message: '' }]}
                           className="mb-0"
                        >
                           <Select
                              style={{
                                 width: '100%'
                              }}
                           >
                              {element.options?.map((el, index) => {
                                 return (
                                    <Option value={el.label} key={index}>
                                       {el.label}
                                    </Option>
                                 );
                              })}
                           </Select>
                        </Form.Item>
                     </div>
                  </div>
               );
            } else if (element.type === 'input') {
               return (
                  <div key={index} className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                     <div className="inline-flex p-1">
                        <Form.Item
                           label={element.value}
                           name={[unikey, forkey, element.value]}
                           rules={[{ required: false, message: '' }]}
                           className="mb-0"
                        >
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               );
            } else if (element.type === 'textarea') {
               return (
                  <div key={index} className="rounded-md bg-[#F3F4F6] m-1">
                     <div className="p-1">
                        <Form.Item
                           label={element.value}
                           name={[unikey, forkey, element.value]}
                           rules={[{ required: false, message: '' }]}
                           className="mb-0 p-1"
                        >
                           <TextArea />
                        </Form.Item>
                     </div>
                  </div>
               );
            }
         })}
      </>
   );
}
