import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Collapse, Drawer, Form, Input, Modal, Radio, Select, Space } from 'antd';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../features/authReducer';
import { Post } from '../../comman';

function FormBuilder2() {
   const [form] = Form.useForm();
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [bigData, setBigData] = useState([]);
   const demoRef = useRef();
   const handleDemo = useReactToPrint({
      content: () => demoRef.current
   });
   const { Panel } = Collapse;
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
         label: 'basis-1/4',
         value: 'basis-1/4'
      }
   ];
   const basisRule = [
      {
         required: true,
         message: 'Заавал'
      }
   ];
   const inputTypes = [
      {
         label: 'Title',
         value: 'title'
      },
      {
         label: 'INPUT',
         value: 'input'
      },
      {
         label: 'TEXTAREA',
         value: 'textarea'
      },
      {
         label: 'RADIO',
         value: 'radio'
      }
   ];
   const [isOpenModal, setIsOpenModal] = useState(false);
   const painHandleChange = async (value) => {
      const formData = form.getFieldsValue();
      const type = form.getFieldValue(['pain', value, 'type']);
      if (type === 'radio') {
         formData.pain[value].options = [{ key: '', value: '' }];
      } else {
         formData.pain[value].options = undefined;
      }
      form.setFieldsValue(formData);
   };
   const result = () => {
      return true;
   };
   const save = async () => {
      const response = await Post('emr/inspection-form', token, config, {
         structureId: 1,
         cabinetId: null,
         usageType: 'IN',
         name: 'SAD',
         title: 'DSA',
         formItems: bigData
      });
      console.log(response);
   };
   //
   const navigate = useNavigate();
   const toChange = () => {
      navigate(`/builder`);
   };
   return (
      <>
         <div>
            <Button onClick={() => setIsOpenModal(true)}>Нэмэх</Button>
            <Button onClick={() => save()}>Хадгалах</Button>
            <div ref={demoRef} style={{ width: '21cm', height: '29.7cm' }}>
               <div className="flex flex-wrap text-center">
                  {bigData.pain?.map((data, index) => {
                     return (
                        <div key={index} className={`${data.style}`} style={{ border: '1px solid black' }}>
                           {data.type === 'radio' && (
                              <div className="text-start pl-2">
                                 <p className="font-bold contents">{data.label}</p>
                                 <Radio.Group>
                                    {data.options.map((option, idx) => {
                                       return (
                                          <div key={idx} className={`${option.style}`}>
                                             <Radio value={option.key}>{option.value}</Radio>
                                          </div>
                                       );
                                    })}
                                 </Radio.Group>
                              </div>
                           )}
                           {data.type === 'title' && (
                              <div className="text-start pl-2">
                                 <p className="font-bold">{data.label + ':'}</p>
                              </div>
                           )}
                           {data.type === 'input' && (
                              <div className="text-start pl-2">
                                 <p className="font-bold">
                                    {data.label + ':'}
                                    <Input style={{ width: 'auto' }} />
                                 </p>
                              </div>
                           )}
                        </div>
                     );
                  })}
               </div>
            </div>
            <Button onClick={handleDemo}>Хэвлэх</Button>
         </div>
         <Modal
            open={isOpenModal}
            title="ADD FORM"
            onOk={() =>
               form.validateFields().then((values) => {
                  console.log(values);
                  setBigData(values);
                  // setIsOpenModal(false);
               })
            }
            onCancel={() => setIsOpenModal(false)}
            width="80%"
         >
            <Form form={form}>
               <Collapse accordion>
                  <Panel header="Zowiur">
                     <Form.List name="pain">
                        {(fields, { add, remove }) => (
                           <>
                              {fields.map(({ key, name, ...restField }) => (
                                 <div key={key} className="rounded-md bg-gray-100 m-2">
                                    <div className="p-2">
                                       <div className="flex flex-wrap">
                                          <div className="basis-3/12 p-1">
                                             <Form.Item
                                                {...restField}
                                                rules={basisRule}
                                                label="Төрөл"
                                                name={[name, 'type']}
                                             >
                                                <Select
                                                   options={inputTypes}
                                                   onChange={() => painHandleChange(name)}
                                                ></Select>
                                             </Form.Item>
                                          </div>
                                          <div className="basis-3/12 p-1">
                                             <Form.Item
                                                {...restField}
                                                rules={basisRule}
                                                label="Асуулт"
                                                name={[name, 'label']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </div>
                                          <div className="basis-3/12 p-1">
                                             <Form.Item
                                                {...restField}
                                                rules={basisRule}
                                                label="Түлхүүр"
                                                name={[name, 'key']}
                                             >
                                                <Input />
                                             </Form.Item>
                                          </div>
                                          <div className="basis-2/12 p-1">
                                             <Form.Item
                                                {...restField}
                                                rules={basisRule}
                                                label="Style"
                                                name={[name, 'style']}
                                             >
                                                <Select options={styleOptions}></Select>
                                             </Form.Item>
                                          </div>
                                          <div className="basis-1/12 p-1 text-center">
                                             <DeleteOutlined
                                                style={{
                                                   color: 'red',
                                                   fontSize: '18px'
                                                }}
                                                onClick={() => remove(name)}
                                             />
                                          </div>
                                       </div>
                                       <Form.List name={[name, 'options']}>
                                          {(optionFields, { add, remove }) => (
                                             <>
                                                {optionFields.map((optionField) => (
                                                   <div
                                                      style={{
                                                         display: result() ? '' : 'none'
                                                      }}
                                                      className="rounded-md bg-white m-2"
                                                      key={optionField.key}
                                                   >
                                                      <div className="p-2">
                                                         <Form.Item noStyle shouldUpdate>
                                                            {() => {
                                                               return (
                                                                  <div className="flex flex-wrap">
                                                                     <div className="basis-4/12 p-1">
                                                                        <Form.Item
                                                                           {...optionField}
                                                                           label="Түлхүүр"
                                                                           name={[optionField.name, 'key']}
                                                                           style={{
                                                                              marginBottom: 0
                                                                           }}
                                                                        >
                                                                           <Input />
                                                                        </Form.Item>
                                                                     </div>
                                                                     <div className="basis-4/12 p-1">
                                                                        <Form.Item
                                                                           {...optionField}
                                                                           label="Асуулт"
                                                                           name={[optionField.name, 'value']}
                                                                           style={{
                                                                              marginBottom: 0
                                                                           }}
                                                                        >
                                                                           <Input />
                                                                        </Form.Item>
                                                                     </div>
                                                                     <div className="basis-3/12 p-1">
                                                                        <Form.Item
                                                                           {...optionField}
                                                                           label="Style"
                                                                           name={[optionField.name, 'style']}
                                                                           style={{
                                                                              marginBottom: 0
                                                                           }}
                                                                        >
                                                                           <Select options={styleOptionsSub}></Select>
                                                                        </Form.Item>
                                                                     </div>
                                                                     <div className="basis-1/12 p-1 text-center">
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
                                                                           onClick={() => remove(name)}
                                                                        />
                                                                     </div>
                                                                  </div>
                                                               );
                                                            }}
                                                         </Form.Item>
                                                      </div>
                                                   </div>
                                                ))}
                                             </>
                                          )}
                                       </Form.List>
                                    </div>
                                 </div>
                              ))}
                              <Form.Item>
                                 <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                 </Button>
                              </Form.Item>
                           </>
                        )}
                     </Form.List>
                  </Panel>
               </Collapse>
            </Form>
         </Modal>
      </>
   );
}
export default FormBuilder2;
