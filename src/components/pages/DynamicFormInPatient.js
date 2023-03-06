import React from 'react';
import { Form, Input, Radio } from 'antd';

function DynamicFormInPatient({ data, forkey, unikey }) {
   console.log(data);
   return (
      <>
         <div className={`${data.style}`} style={{ border: '1px solid black' }}>
            {!data.options ? (
               <div className="text-start pl-2">
                  <p className="font-bold">{data.label}</p>
               </div>
            ) : (
               <>
                  <div className="text-start pl-2">
                     <p className="font-bold">{data.label}</p>
                  </div>
                  <div className="flex flex-wrap">
                     {data.options?.map((form, index) => {
                        if (form.type === 'radio') {
                           console.log(form);
                           return (
                              <div
                                 className={form.style && `${form.style}`}
                                 style={
                                    form.style && { border: '1px solid black' }
                                 }
                              >
                                 <Form.Item
                                    key={index}
                                    label={
                                       form.label && (
                                          <div className="text-start pl-2">
                                             <p className="font-bold">
                                                {form.label}
                                             </p>
                                          </div>
                                       )
                                    }
                                    name={[
                                       unikey,
                                       forkey.toString(),
                                       form.label
                                    ]}
                                    rules={[{ required: false, message: '' }]}
                                    className="mb-0"
                                    labelCol={{ span: form.labelCol }}
                                    wrapperCol={{ span: form.wrapperCol }}
                                 >
                                    <div className="text-start pl-2">
                                       <Radio.Group>
                                          {form.options?.map((el, index) => {
                                             return (
                                                <div
                                                   key={index}
                                                   className={`${el.style}`}
                                                >
                                                   <Radio
                                                      className="pl-1 ml-0"
                                                      value={el.key}
                                                   >
                                                      {el.label}
                                                   </Radio>
                                                </div>
                                             );
                                          })}
                                       </Radio.Group>
                                    </div>
                                 </Form.Item>
                              </div>
                           );
                        } else if (form.type === 'title' && !form.style) {
                           return (
                              <div key={index} className="text-start pl-2">
                                 <p className="font-bold">{form.label}</p>
                              </div>
                           );
                        } else if (form.type === 'title' && form.style) {
                           return (
                              <div className="flex flex-wrap">
                                 <div
                                    className={form.style && `${form.style}`}
                                    style={
                                       form.style && {
                                          border: '1px solid black'
                                       }
                                    }
                                 >
                                    <div
                                       key={index}
                                       className="text-start pl-2"
                                    >
                                       <p className="font-bold">{form.label}</p>
                                    </div>
                                 </div>
                              </div>
                           );
                        } else if (form.type === 'input') {
                           return (
                              <Form.Item
                                 key={index}
                                 label={
                                    form.label && (
                                       <div className="text-start pl-2">
                                          <p className="font-bold">
                                             {form.label}
                                          </p>
                                       </div>
                                    )
                                 }
                                 name={[unikey, forkey.toString(), form.label]}
                                 rules={[{ required: false, message: '' }]}
                                 className="mb-0"
                                 labelCol={{ span: form.labelCol }}
                                 wrapperCol={{ span: form.wrapperCol }}
                              >
                                 <Input />
                              </Form.Item>
                           );
                        }
                     })}
                  </div>
               </>
            )}
         </div>
      </>
   );
}
export default DynamicFormInPatient;
