import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import ContactPerson from '../ContactPerson.js';
const { Option } = Select;
function Contact() {
   return (
      <div className="flex flex-wrap">
         <Form.List name="contacts">
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name, ...restField }) => (
                     <div key={key} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                        <div className="p-1">
                           <Form.Item
                              {...restField}
                              label="Нэр"
                              labelCol={{ span: 8 }}
                              wrapperCol={{ span: 16 }}
                              name={[name, 'name']}
                           >
                              <Input />
                           </Form.Item>
                           <Form.Item
                              {...restField}
                              label="Регистр дугаар"
                              labelCol={{ span: 8 }}
                              wrapperCol={{ span: 16 }}
                              name={[name, 'registerNumber']}
                           >
                              <Input />
                           </Form.Item>
                           <Form.Item
                              {...restField}
                              label="Имэйл"
                              labelCol={{ span: 8 }}
                              wrapperCol={{ span: 16 }}
                              name={[name, 'email']}
                           >
                              <Input />
                           </Form.Item>
                           <Form.Item
                              {...restField}
                              label="Утас"
                              labelCol={{ span: 8 }}
                              wrapperCol={{ span: 16 }}
                              name={[name, 'contactPhoneNo']}
                           >
                              <Input />
                           </Form.Item>
                           <Form.Item
                              {...restField}
                              label="Хамаарал"
                              labelCol={{ span: 8 }}
                              wrapperCol={{ span: 16 }}
                              name={[name, 'contactPersonStatusType']}
                           >
                              <Select>
                                 {ContactPerson.map((person, index) => {
                                    return (
                                       <Option key={index} value={person.value}>
                                          {person.label}
                                       </Option>
                                    );
                                 })}
                              </Select>
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
