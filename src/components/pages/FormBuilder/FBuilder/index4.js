import React from 'react';
import { DeleteOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Radio, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
function index4({ form, titlePanel, handleChange }) {
   const handeExpand = (panel, option, subOption) => {
      const formData = form.getFieldsValue();
      const isExpand = form.getFieldValue(['documentForm', panel, 'options', option, 'options', subOption, 'isExpand']);
      if (isExpand) {
         formData['documentForm'][panel]['options'][option]['options'][subOption].expands = [
            {
               label: '',
               keyWord: ''
            }
         ];
      } else {
         formData['documentForm'][panel]['options'][option]['options'][subOption].expands = [];
      }
   };
   return (
      <div className="p-3">
         <Form.List name={titlePanel}>
            {(namePanels, { add: addNamePanels, remove: removeNamePanels }) => (
               <>
                  {namePanels.map((namePanel) => (
                     <div key={namePanel.key} className="rounded-md m-2" style={{ backgroundColor: '#fafafa' }}>
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
                                    label="Гарчиг"
                                    name={[namePanel.name, 'label']}
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
                                 <Button
                                    danger
                                    title="Устгах"
                                    icon={<DeleteOutlined />}
                                    onClick={() => removeNamePanels(namePanel.name)}
                                 />
                              </div>
                           </div>
                        </div>
                        <Form.List name={[namePanel.name, 'options']}>
                           {(options, { add: addOptions, remove: removeOptions }) => (
                              <>
                                 {options.map((option) => (
                                    <div
                                       key={option.key}
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
                                             <div className="grid grid-cols-4 gap-[6px]">
                                                <Form.Item
                                                   label="Төрөл"
                                                   name={[option.name, 'type']}
                                                   style={{ marginBottom: 0 }}
                                                >
                                                   <Select
                                                      onChange={(e) =>
                                                         // ender anhaarna
                                                         handleChange(titlePanel, namePanel.name, option.name)
                                                      }
                                                   >
                                                      <Option value="diagnose">ICD Онош</Option>
                                                      <Option value="checkbox">Олон сонголтод</Option>
                                                      <Option value="radio">Нэг сонголт</Option>
                                                      <Option value="dropdown">Dropdown</Option>
                                                      <Option value="input">Текст бичих</Option>
                                                      <Option value="inputNumber">Тоо оруулах</Option>
                                                      <Option value="textarea">Их текст бичих</Option>
                                                      <Option value="rangepicker">Тэднээс тэдэн хугацаа</Option>
                                                      <Option value="datepicker">Нэг хугацаа</Option>
                                                      <Option value="table">Хүснэгт</Option>
                                                   </Select>
                                                </Form.Item>
                                                <Form.Item
                                                   label="Түлхүүр"
                                                   name={[option.name, 'keyWord']}
                                                   style={{ marginBottom: 0 }}
                                                >
                                                   <TextArea />
                                                </Form.Item>
                                                <Form.Item
                                                   label="Асуулт"
                                                   name={[option.name, 'value']}
                                                   style={{ marginBottom: 0 }}
                                                >
                                                   <TextArea />
                                                </Form.Item>
                                                <Form.Item
                                                   label={
                                                      <div>
                                                         <p
                                                            style={{
                                                               fontWeight: 400
                                                            }}
                                                         >
                                                            Энэ асуултын хариулт тоо?
                                                         </p>
                                                         <p
                                                            style={{
                                                               fontWeight: 400
                                                            }}
                                                         >
                                                            Анхааруулга та сайн лавлаж асууна уу !!!
                                                         </p>
                                                      </div>
                                                   }
                                                   name={[option.name, 'isInteger']}
                                                   style={{
                                                      marginBottom: 0
                                                   }}
                                                >
                                                   <Radio.Group>
                                                      <Radio value={true}>Тийм</Radio>
                                                      <Radio value={false}>Үгүй</Radio>
                                                   </Radio.Group>
                                                </Form.Item>
                                                <Form.Item
                                                   label="Бусад байгаа эсэх"
                                                   name={[option.name, 'isOther']}
                                                   style={{ marginBottom: 0 }}
                                                   valuePropName="checked"
                                                >
                                                   <Checkbox />
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
                                                onClick={() => removeOptions(option.name)}
                                             />
                                          </div>
                                       </div>
                                       <Form.List name={[option.name, 'options']}>
                                          {(subOptions, { add: addSubOptions, remove: removeSubOptions }) => (
                                             <>
                                                <div className="flex flex-wrap">
                                                   {subOptions.map((subOption) => (
                                                      <div className="w-full md:w-1/2 lg:w-1/3" key={subOption.key}>
                                                         <div className="rounded-md bg-white m-1">
                                                            <Form.Item noStyle shouldUpdate>
                                                               {() => {
                                                                  return (
                                                                     <div className="inline-flex p-1 w-full">
                                                                        <div className="p-1 grid grid-cols-2 gap-1">
                                                                           <Form.Item noStyle shouldUpdate>
                                                                              {() => {
                                                                                 const type = form.getFieldValue([
                                                                                    'documentForm',
                                                                                    namePanel.name,
                                                                                    'options',
                                                                                    subOption.name,
                                                                                    'type'
                                                                                 ]);
                                                                                 if (type === 'table') {
                                                                                    return (
                                                                                       <Form.Item
                                                                                          label="Мөрийн төрөл"
                                                                                          name={[
                                                                                             subOption.name,
                                                                                             'type'
                                                                                          ]}
                                                                                       >
                                                                                          <Select>
                                                                                             <Option value="input">
                                                                                                Текст бичих
                                                                                             </Option>
                                                                                             <Option value="inputNumber">
                                                                                                Тоо оруулах
                                                                                             </Option>
                                                                                             <Option value="textarea">
                                                                                                Их текст бичих
                                                                                             </Option>
                                                                                             <Option value="rangepicker">
                                                                                                Тэднээс тэдэн хугацаа
                                                                                             </Option>
                                                                                             <Option value="datepicker">
                                                                                                Нэг хугацаа
                                                                                             </Option>
                                                                                          </Select>
                                                                                       </Form.Item>
                                                                                    );
                                                                                 }
                                                                              }}
                                                                           </Form.Item>
                                                                           <Form.Item
                                                                              label="Хариулт"
                                                                              name={[subOption.name, 'label']}
                                                                              style={{
                                                                                 marginBottom: 0
                                                                              }}
                                                                           >
                                                                              <Input />
                                                                           </Form.Item>
                                                                           <Form.Item
                                                                              label="Түлхүүр"
                                                                              name={[subOption.name, 'keyWord']}
                                                                              style={{
                                                                                 marginBottom: 0
                                                                              }}
                                                                           >
                                                                              <Input />
                                                                           </Form.Item>
                                                                           <Form.Item
                                                                              label="Задрах эсэх"
                                                                              name={[subOption.name, 'isExpand']}
                                                                              valuePropName="checked"
                                                                              style={{
                                                                                 marginBottom: 0
                                                                              }}
                                                                           >
                                                                              <Checkbox
                                                                                 onChange={() =>
                                                                                    handeExpand(
                                                                                       namePanel.name,
                                                                                       option.name,
                                                                                       subOption.name
                                                                                    )
                                                                                 }
                                                                              />
                                                                           </Form.Item>
                                                                           <Form.List
                                                                              name={[subOption.name, 'expands']}
                                                                           >
                                                                              {(
                                                                                 expands,
                                                                                 {
                                                                                    add: addExpands,
                                                                                    remove: removeExpands
                                                                                 }
                                                                              ) => (
                                                                                 <div
                                                                                    style={{
                                                                                       backgroundColor: '#cbd5e1',
                                                                                       padding: 3
                                                                                    }}
                                                                                 >
                                                                                    {expands.map((expand) => (
                                                                                       <div key={expand.key}>
                                                                                          <Form.Item
                                                                                             label="Хариулт"
                                                                                             name={[
                                                                                                expand.name,
                                                                                                'label'
                                                                                             ]}
                                                                                             style={{
                                                                                                marginBottom: 0
                                                                                             }}
                                                                                          >
                                                                                             <Input />
                                                                                          </Form.Item>
                                                                                          <Form.Item
                                                                                             label="Түлхүүр"
                                                                                             name={[
                                                                                                expand.name,
                                                                                                'keyWord'
                                                                                             ]}
                                                                                             style={{
                                                                                                marginBottom: 0
                                                                                             }}
                                                                                          >
                                                                                             <Input />
                                                                                          </Form.Item>
                                                                                          <PlusCircleOutlined
                                                                                             style={{
                                                                                                color: 'green',
                                                                                                fontSize: '18px',
                                                                                                paddingRight: '6px'
                                                                                             }}
                                                                                             onClick={() =>
                                                                                                addExpands()
                                                                                             }
                                                                                          />
                                                                                          <DeleteOutlined
                                                                                             style={{
                                                                                                color: 'red',
                                                                                                fontSize: '18px'
                                                                                             }}
                                                                                             onClick={() =>
                                                                                                removeExpands(
                                                                                                   option.name
                                                                                                )
                                                                                             }
                                                                                          />
                                                                                       </div>
                                                                                    ))}
                                                                                 </div>
                                                                              )}
                                                                           </Form.List>
                                                                        </div>
                                                                        <div className="inline-flex p-1 text-center items-center">
                                                                           <PlusCircleOutlined
                                                                              style={{
                                                                                 color: 'green',
                                                                                 fontSize: '18px',
                                                                                 paddingRight: '6px'
                                                                              }}
                                                                              onClick={() => addSubOptions()}
                                                                           />
                                                                           <DeleteOutlined
                                                                              style={{
                                                                                 color: 'red',
                                                                                 fontSize: '18px'
                                                                              }}
                                                                              onClick={() =>
                                                                                 removeSubOptions(option.name)
                                                                              }
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
                                       onClick={() => addOptions()}
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
                     <Button
                        className="bg-green-400"
                        type="dashed"
                        onClick={() => addNamePanels()}
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
   );
}
export default index4;
