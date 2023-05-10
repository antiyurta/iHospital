import React from 'react';
import { DeleteOutlined, PlusCircleOutlined, PlusOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
function index2({ options, namePanel, handleChange }) {
   const addOptions = (namePanel, name) => {
      console.log(namePanel, name);
   };
   return (
      <div>
         <Form.List name={namePanel}>
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name, ...restField }) => (
                     <div key={key} className="rounded-md m-2" style={{ backgroundColor: '#fafafa' }}>
                        <div className="p-2">
                           <Form.Item
                              {...restField}
                              label="Гарчиг"
                              name={[name, 'label']}
                              rules={[
                                 {
                                    required: true,
                                    message: 'sadasd'
                                 }
                              ]}
                           >
                              <Input />
                           </Form.Item>
                        </div>
                        <DeleteOutlined style={{ color: 'red', fontSize: '18px' }} onClick={() => remove(name)} />
                        <Form.List name={[name, 'options']}>
                           {(optionFields, { add, remove }) => (
                              <>
                                 {optionFields.map((optionField) => (
                                    <div
                                       key={optionField.key}
                                       className="rounded-md m-2"
                                       style={{ backgroundColor: '#d1d1d1' }}
                                    >
                                       <div className="flex flex-wrap p-1">
                                          <div className="basis-5/12">
                                             <Form.Item
                                                {...restField}
                                                label="Төрөл"
                                                name={[optionField.name, 'type']}
                                                style={{ marginBottom: 0 }}
                                             >
                                                <Select
                                                   onChange={(e) => handleChange(namePanel, name, optionField.name)}
                                                >
                                                   <Option value="checkbox">Checkbox</Option>
                                                   <Option value="radio">Radio</Option>
                                                   <Option value="dropdown">Dropdown</Option>
                                                   <Option value="input">Input</Option>
                                                   <Option value="textarea">TextArea</Option>
                                                </Select>
                                             </Form.Item>
                                          </div>
                                          <div className="basis-6/12">
                                             <Form.Item
                                                {...restField}
                                                label="Асуулт"
                                                name={[optionField.name, 'value']}
                                                style={{ marginBottom: 0 }}
                                             >
                                                <TextArea />
                                             </Form.Item>
                                          </div>
                                          <div className="inline-flex p-1 text-center items-center">
                                             <DeleteOutlined
                                                style={{
                                                   color: 'red',
                                                   fontSize: '18px'
                                                }}
                                                onClick={() => remove(optionField.name)}
                                             />
                                          </div>
                                       </div>
                                       <Form.List name={[optionField.name, 'options']}>
                                          {(optionFieldss, { add, remove }) => (
                                             <>
                                                <div className="flex flex-wrap">
                                                   {optionFieldss.map((optionFields) => (
                                                      <div className="w-full md:w-1/2 lg:w-1/3" key={optionFields.key}>
                                                         <div className="rounded-md bg-white m-1">
                                                            <Form.Item noStyle shouldUpdate>
                                                               {() => {
                                                                  return (
                                                                     <div className="inline-flex p-1">
                                                                        <div className="p-1">
                                                                           <Form.Item
                                                                              label="Хариулт"
                                                                              name={[optionFields.name, 'label']}
                                                                              style={{
                                                                                 marginBottom: 0
                                                                              }}
                                                                           >
                                                                              <Input />
                                                                           </Form.Item>
                                                                        </div>
                                                                        <div className="inline-flex p-1 text-center items-center">
                                                                           <PlusCircleOutlined
                                                                              style={{
                                                                                 color: 'green',
                                                                                 fontSize: '18px',
                                                                                 paddingRight: '6px'
                                                                              }}
                                                                              onClick={() => add()}
                                                                           />
                                                                           <DeleteOutlined
                                                                              style={{
                                                                                 color: 'red',
                                                                                 fontSize: '18px'
                                                                              }}
                                                                              onClick={() => remove(optionFields.name)}
                                                                           />
                                                                        </div>
                                                                     </div>
                                                                  );
                                                               }}
                                                            </Form.Item>
                                                         </div>
                                                      </div>
                                                   ))}
                                                </div>
                                             </>
                                          )}
                                       </Form.List>
                                    </div>
                                 ))}
                                 <Form.Item>
                                    <Button
                                       className="bg-green-400"
                                       type="dashed"
                                       onClick={() => add()}
                                       block
                                       icon={<PlusOutlined />}
                                    >
                                       Талбар нэмэх
                                    </Button>
                                 </Form.Item>
                              </>
                           )}
                        </Form.List>
                     </div>
                  ))}
                  <Form.Item>
                     <Button className="bg-green-400" type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Талбар нэмэх
                     </Button>
                  </Form.Item>
               </>
            )}
         </Form.List>
      </div>
   );
}
export default index2;
