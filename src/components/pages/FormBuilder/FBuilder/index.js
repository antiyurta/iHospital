import {
   DeleteOutlined,
   PlusCircleOutlined,
   PlusOutlined
} from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const styleOptionsSub = [
   {
      label: 'flex',
      value: 'flex'
   },
   {
      label: 'inline-block',
      value: 'inline-block'
   }
];
const styleOptions = [
   {
      label: 'w-full',
      value: 'w-full'
   },
   {
      label: 'basis-1/2',
      value: 'basis-1/2'
   },
   {
      label: 'basis-1/3',
      value: 'basis-1/3'
   },
   {
      label: 'basis-2/3',
      value: 'basis-2/3'
   },
   {
      label: 'basis-1/4',
      value: 'basis-1/4'
   },
   {
      label: 'basis-1/5',
      value: 'basis-1/5'
   },
   {
      label: 'basis-2/5',
      value: 'basis-2/5'
   },
   {
      label: 'basis-3/5',
      value: 'basis-3/5'
   },
   {
      label: 'basis-4/5',
      value: 'basis-4/5'
   },
   {
      label: 'basis-10/12',
      value: 'basis-10/12'
   },
   {
      label: 'basis-2/12',
      value: 'basis-2/12'
   }
];
function index({ options, namePanel, handleChange }) {
   const result = () => {
      return true;
   };
   return (
      <div>
         <Form.List name={namePanel}>
            {(fields, { add, remove }) => (
               <>
                  {fields.map(({ key, name, ...restField }) => (
                     <div key={key} className="rounded-md bg-gray-100 m-2">
                        <div className="p-2">
                           <div className="flex flex-wrap">
                              <div className="basis-5/12 p-1">
                                 <Form.Item
                                    {...restField}
                                    label="Хэжмээ"
                                    name={[name, 'style']}
                                 >
                                    <Select options={styleOptions}></Select>
                                 </Form.Item>
                              </div>
                              <div className="basis-6/12 p-1">
                                 <Form.Item
                                    {...restField}
                                    label="Нэр"
                                    name={[name, 'label']}
                                 >
                                    <Input />
                                 </Form.Item>
                              </div>
                              <div className="basis-1/12 p-1 text-center">
                                 <DeleteOutlined
                                    style={{ color: 'red', fontSize: '18px' }}
                                    onClick={() => remove(name)}
                                 />
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
                                          <div className="flex flex-wrap p-1">
                                             <div className="basis-4/12 p-1">
                                                <Form.Item
                                                   {...restField}
                                                   label="Төрөл"
                                                   name={[
                                                      optionField.name,
                                                      'type'
                                                   ]}
                                                >
                                                   <Select
                                                      onChange={() =>
                                                         handleChange(
                                                            namePanel,
                                                            name,
                                                            optionField.name
                                                         )
                                                      }
                                                   >
                                                      <Option value="title">
                                                         Title
                                                      </Option>
                                                      <Option value="checkbox">
                                                         Checkbox
                                                      </Option>
                                                      <Option value="radio">
                                                         Radio
                                                      </Option>
                                                      <Option value="dropdown">
                                                         Dropdown
                                                      </Option>
                                                      <Option value="input">
                                                         Input
                                                      </Option>
                                                      <Option value="textarea">
                                                         TextArea
                                                      </Option>
                                                   </Select>
                                                </Form.Item>
                                             </div>
                                             <div className="basis-5/12 p-1">
                                                <Form.Item
                                                   {...restField}
                                                   label="Асуулт"
                                                   name={[
                                                      optionField.name,
                                                      'label'
                                                   ]}
                                                >
                                                   <TextArea />
                                                </Form.Item>
                                             </div>
                                             <div className="basis-2/12 p-1">
                                                <Form.Item
                                                   {...restField}
                                                   label="style"
                                                   name={[
                                                      optionField.name,
                                                      'style'
                                                   ]}
                                                >
                                                   <Select
                                                      options={styleOptions}
                                                   ></Select>
                                                </Form.Item>
                                                <Form.Item
                                                   {...restField}
                                                   label="labelCol"
                                                   name={[
                                                      optionField.name,
                                                      'labelCol'
                                                   ]}
                                                >
                                                   <InputNumber maxLength={2} />
                                                </Form.Item>
                                                <Form.Item
                                                   {...restField}
                                                   label="wrapperCol"
                                                   name={[
                                                      optionField.name,
                                                      'wrapperCol'
                                                   ]}
                                                >
                                                   <InputNumber maxLength={2} />
                                                </Form.Item>
                                             </div>
                                             <div className="inline-flex p-1 text-center items-center">
                                                <DeleteOutlined
                                                   style={{
                                                      color: 'red',
                                                      fontSize: '18px'
                                                   }}
                                                   onClick={() =>
                                                      remove(optionField.name)
                                                   }
                                                />
                                             </div>
                                          </div>
                                          <Form.List
                                             name={[
                                                optionField.name,
                                                'options'
                                             ]}
                                          >
                                             {(
                                                optionFieldss,
                                                { add, remove }
                                             ) => (
                                                <>
                                                   <div className="flex flex-wrap">
                                                      {optionFieldss.map(
                                                         (optionFields) => (
                                                            <div
                                                               className="w-full md:w-1/2 lg:w-1/3"
                                                               key={
                                                                  optionFields.key
                                                               }
                                                            >
                                                               <div className="rounded-md bg-white m-1">
                                                                  <Form.Item
                                                                     noStyle
                                                                     shouldUpdate
                                                                  >
                                                                     {() => {
                                                                        return (
                                                                           <div className="grid-rows-2 p-1">
                                                                              <div className="p-1">
                                                                                 <Form.Item
                                                                                    label="Хариулт"
                                                                                    name={[
                                                                                       optionFields.name,
                                                                                       'label'
                                                                                    ]}
                                                                                    style={{
                                                                                       marginBottom: 0
                                                                                    }}
                                                                                 >
                                                                                    <Input />
                                                                                 </Form.Item>
                                                                              </div>
                                                                              <div className="p-1">
                                                                                 <Form.Item
                                                                                    label="Түлхүүр"
                                                                                    name={[
                                                                                       optionFields.name,
                                                                                       'key'
                                                                                    ]}
                                                                                    style={{
                                                                                       marginBottom: 0
                                                                                    }}
                                                                                 >
                                                                                    <Input />
                                                                                 </Form.Item>
                                                                              </div>
                                                                              <div className="p-1">
                                                                                 <Form.Item
                                                                                    label="Хэмжээ"
                                                                                    name={[
                                                                                       optionFields.name,
                                                                                       'style'
                                                                                    ]}
                                                                                    style={{
                                                                                       marginBottom: 0
                                                                                    }}
                                                                                 >
                                                                                    <Select
                                                                                       options={
                                                                                          styleOptionsSub
                                                                                       }
                                                                                    ></Select>
                                                                                 </Form.Item>
                                                                              </div>
                                                                              <div className="p-1 text-center items-center">
                                                                                 <PlusCircleOutlined
                                                                                    style={{
                                                                                       color: 'green',
                                                                                       fontSize:
                                                                                          '18px',
                                                                                       paddingRight:
                                                                                          '6px'
                                                                                    }}
                                                                                    onClick={() =>
                                                                                       add()
                                                                                    }
                                                                                 />
                                                                                 <DeleteOutlined
                                                                                    style={{
                                                                                       color: 'red',
                                                                                       fontSize:
                                                                                          '18px'
                                                                                    }}
                                                                                    onClick={() =>
                                                                                       remove(
                                                                                          optionFields.name
                                                                                       )
                                                                                    }
                                                                                 />
                                                                              </div>
                                                                           </div>
                                                                        );
                                                                     }}
                                                                  </Form.Item>
                                                               </div>
                                                            </div>
                                                         )
                                                      )}
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
   );
}
export default index;
