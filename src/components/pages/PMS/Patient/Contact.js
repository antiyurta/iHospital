import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import ContactPerson from '../ContactPerson.json';
function Contact({ form }) {
   const { Option } = Select;
   return (
      <div className="flex flex-wrap">
         <Form.List name="contacts">
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name, ...restField }) => (
                     <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                        <div className="p-1">
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
                              <Button
                                 type="primary"
                                 danger
                                 ghost
                                 className="w-full"
                                 onClick={() => remove(name)}
                              >
                                 Хасах
                              </Button>
                           </Form.Item>
                        </div>
                     </div>
                  ))}
                  <Form.Item>
                     <Button
                        type="dashed"
                        onClick={() => add()}
                        icon={<PlusOutlined />}
                     >
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
