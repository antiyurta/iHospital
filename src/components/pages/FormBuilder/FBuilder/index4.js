import React from 'react';
import { DeleteOutlined, PlusCircleOutlined, PlusOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
function index4({ options, namePanel, handleChange }) {
   const addOptions = (namePanel, name) => {
      console.log(namePanel, name);
   };
   return (
      <div className="p-3">
         <Form.List name={namePanel}>
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name, ...restField }) => (
                     <div key={key} className="rounded-md m-2" style={{ backgroundColor: '#fafafa' }}>
                        <div className="p-2">
                           <div
                              style={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 gap: '6px'
                              }}
                           >
                              <div className="w-full">
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
                                    className="mb-0"
                                 >
                                    <Input />
                                 </Form.Item>
                              </div>
                              <div
                                 style={{
                                    display: 'flex',
                                    alignItems: 'end'
                                 }}
                              >
                                 <Button danger title="Устгах" icon={<DeleteOutlined />} onClick={() => remove(name)} />
                              </div>
                           </div>
                        </div>
                        <Form.List name={[name, 'options']}>
                           {(optionFields, { add, remove }) => (
                              <>
                                 {optionFields.map((optionField) => (
                                    <div
                                       key={optionField.key}
                                       className="rounded-md m-2"
                                       style={{ backgroundColor: '#d1d1d1' }}
                                    >
                                       <div
                                          style={{
                                             display: 'flex',
                                             flexDirection: 'row',
                                             padding: 6,
                                             gap: '6px'
                                          }}
                                       >
                                          <div className="w-full">
                                             <div className="grid grid-cols-3 gap-[6px]">
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
                                                <Form.Item
                                                   {...restField}
                                                   label="Түлхүүр"
                                                   name={[optionField.name, 'keyWord']}
                                                   style={{ marginBottom: 0 }}
                                                >
                                                   <TextArea />
                                                </Form.Item>
                                                <Form.Item
                                                   {...restField}
                                                   label="Асуулт"
                                                   name={[optionField.name, 'value']}
                                                   style={{ marginBottom: 0 }}
                                                >
                                                   <TextArea />
                                                </Form.Item>
                                             </div>
                                          </div>
                                          <div
                                             style={{
                                                display: 'flex',
                                                alignItems: 'end'
                                             }}
                                          >
                                             <Button
                                                danger
                                                title="Устгах"
                                                icon={<DeleteOutlined />}
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
                                                                     <div className="inline-flex p-1 w-full">
                                                                        <div className="p-1 w-full">
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
export default index4;