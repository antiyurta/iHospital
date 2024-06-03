import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import contactPersons from '../ContactPerson.js';
function Contact({ form }) {
   return (
      <div className="flex flex-wrap">
         <Form.List name="contacts">
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name, ...restField }) => (
                     <div key={key} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                        <div className="p-1">
                           <Form.Item {...restField} label="Утас" name={[name, 'contactPhoneNo']}>
                              <Input />
                           </Form.Item>
                           <Form.Item {...restField} label="Хамаарал" name={[name, 'contactPersonStatusType']}>
                              <Select
                                 options={contactPersons?.map((contactPerson) => ({
                                    label: contactPerson.label,
                                    value: contactPerson.value
                                 }))}
                              />
                           </Form.Item>
                           <Form.Item className="mb-0">
                              <Button type="primary" danger ghost className="w-full" onClick={() => remove(name)}>
                                 Хасах
                              </Button>
                           </Form.Item>
                        </div>
                     </div>
                  ))}
                  <Form.Item>
                     <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                        Нэмэх
                     </Button>
                  </Form.Item>
               </>
            )}
         </Form.List>
      </div>
   );
}
export default Contact;
