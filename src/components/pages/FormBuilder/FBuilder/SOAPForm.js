import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Collapse, Divider, Form, Input, message, Modal, Popconfirm, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Delete, Get, Patch, Post } from '../../../comman';
import Index2 from './index2';
import Index3 from './index3';
import Index from './index';
function SOAPForm({ docType }) {
   const [SOAPForm] = Form.useForm();
   const { Option } = Select;
   const { Panel } = Collapse;
   const { TextArea } = Input;
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [soapForms, setSoapForms] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [id, setId] = useState(Number);
   const [searchField, setSearchField] = useState('');
   const [isSOAPModal, setIsSOAPModal] = useState(false);
   const [type, setType] = useState(Number); // 0 bol EMR 1 bol EXO
   const [structures, setStructures] = useState([]);
   const [cabinets, setCabinets] = useState([]);
   const [cabinetFilterValue, setCabinetFilterValue] = useState(Number);
   //
   const showModal = (type) => {
      setEditMode(false);
      setType(type);
      SOAPForm.resetFields();
      setIsSOAPModal(true);
   };
   const editModal = (form) => {
      const newForm = [];
      console.log(form);
      newForm['structureId'] = form.structureId;
      newForm['cabinetId'] = form.cabinetId;
      newForm['name'] = form.name;
      newForm['title'] = form.title;
      newForm['formId'] = form.formId;
      if (form.formItem.conclusion.length > 0 && form.formItem.advice.length > 0) {
         newForm['conclusion'] = form.formItem.conclusion;
         newForm['advice'] = form.formItem.advice;
         setType(1);
      } else {
         setType(0);
         newForm['pain'] = form.formItem.pain;
         newForm['inspection'] = form.formItem.inspection;
         newForm['question'] = form.formItem.question;
         newForm['plan'] = form.formItem.plan;
      }
      setEditMode(true);
      setId(form.id);
      setCabinetFilterValue(form.structureId);
      SOAPForm.setFieldsValue(newForm);
      setIsSOAPModal(true);
   };
   const getStructures = async () => {
      const response = await Get('organization/structure', token, {
         headers: {},
         params: { type: 2 }
      });
      setStructures(response.data);
   };
   const getCabinets = async () => {
      const response = await Get('organization/structure', token, {
         headers: {},
         params: { type: 3 }
      });
      setCabinets(response.data);
   };
   const filteredCabinets = cabinets.filter((cabinet) => cabinet.parentId === cabinetFilterValue);
   //
   const typeSelectData = [
      {
         label: 'Гарчиг',
         value: 'title'
      },
      {
         label: 'DropDown',
         value: 'dropdown'
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
      },
      {
         label: 'CHECKBOX',
         value: 'checkbox'
      }
   ];
   const basisRule = [
      {
         required: true,
         message: 'Заавал'
      }
   ];
   const options = [
      {
         name: 'type',
         label: 'Төрөл',
         rules: basisRule,
         type: 'select',
         selectData: typeSelectData
      },
      {
         name: 'label',
         label: 'Асуумж',
         rules: basisRule,
         type: 'textarea'
      }
   ];
   const panels = [
      {
         name: 'Зовиур',
         key: 'pain'
      },
      {
         name: 'Үзлэг',
         key: 'inspection'
      },
      {
         name: 'Асуумж',
         key: 'question'
      },
      {
         name: 'Төлөвлөгөө',
         key: 'plan'
      }
   ];
   const panelsExo = [
      {
         name: 'Дүгнэлт',
         key: 'conclusion'
      },
      {
         name: 'Зөвлөгөө',
         key: 'advice'
      }
   ];

   //
   const onFinish = async (values) => {
      const data = [];
      console.log(values);
      if (type === 0) {
         values.pain?.map((pain) => {
            pain['inspectionType'] = 'pain';
            data.push(pain);
         });
         values.inspection?.map((inspection) => {
            inspection['inspectionType'] = 'inspection';
            data.push(inspection);
         });
         values.question?.map((question) => {
            question['inspectionType'] = 'question';
            data.push(question);
         });
         values.plan?.map((plan) => {
            plan['inspectionType'] = 'plan';
            data.push(plan);
         });
      } else if (type === 1) {
         values.conclusion?.map((conclusion) => {
            conclusion['inspectionType'] = 'conclusion';
            data.push(conclusion);
         });
         values.advice?.map((advice) => {
            advice['inspectionType'] = 'advice';
            data.push(advice);
         });
      }

      if (editMode) {
         const response = await Patch('emr/inspection-form/' + id, token, config, {
            structureId: values.structureId,
            cabinetId: values.cabinetId,
            formId: values.formId,
            usageType: docType,
            name: values.name,
            title: values.title,
            formItems: data
         });
         if (response === 200) {
            setIsSOAPModal(false);
            getSOAPForms();
         }
      } else {
         const response = await Post('emr/inspection-form', token, config, {
            structureId: values.structureId,
            cabinetId: values.cabinetId,
            formId: values.formId,
            name: values.name,
            usageType: docType,
            title: values.title,
            formItems: data
         });
         if (response === 201) {
            setIsSOAPModal(false);
            getSOAPForms();
         }
      }
   };
   const HandleChangeTest = (panelName, optionName, name) => {
      console.log(panelName, optionName, name);
      const formData = SOAPForm.getFieldsValue();
      const type = SOAPForm.getFieldValue([panelName, optionName, 'options', name, 'type']);
      console.log(type);
      if (type === 'radio' || type === 'checkbox' || type === 'dropdown') {
         formData[panelName][optionName].options[name] = {
            type: type,
            value: '',
            options: [{ label: '' }]
         };
      } else {
         formData[panelName][optionName].options[name] = {
            type: type,
            value: ''
         };
      }
      SOAPForm.setFieldsValue(formData);
   };
   const painHandleChange = async (panelName, name) => {
      console.log(panelName, name);
      const formData = SOAPForm.getFieldsValue();
      const type = SOAPForm.getFieldValue([panelName, name, 'type']);
      console.log(type);
      if (type === 'radio' || type === 'checkbox' || type === 'dropdown') {
         formData[panelName][name].options = [{ key: '', value: '' }];
      } else {
         formData[panelName][name].options = undefined;
      }
      SOAPForm.setFieldsValue(formData);
   };
   const getSOAPForms = async () => {
      config.params.usageType = docType;
      const response = await Get('emr/inspection-form', token, config);
      setSoapForms(response.data);
   };
   const deleteForm = async (id) => {
      const response = await Delete('emr/inspection-form/' + id, token, config);
      if (response === 200) {
         getSOAPForms();
      }
   };
   const filteredForm = soapForms.filter((form) => {
      return form.name.toLowerCase().includes(searchField.toLowerCase());
   });
   //
   useEffect(() => {
      getSOAPForms();
      getStructures();
      getCabinets();
   }, [docType]);
   //
   return (
      <div>
         <div>
            <div className="flex flex-wrap">
               <div className="w-full md:w-1/2">
                  <div className="mx-3">
                     <Input placeholder="Хайх" allowClear onChange={(e) => setSearchField(e.target.value)} />
                  </div>
               </div>
               <div className="w-full md:w-1/2">
                  <div className="mx-3">
                     <Button type="primary" htmlType="submit" onClick={() => showModal(0)}>
                        Нэмэх
                     </Button>
                     {docType === 'OUT' && (
                        <Button className="ml-2" htmlType="submit" onClick={() => showModal(1)}>
                           EXO Нэмэх
                        </Button>
                     )}
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap mx-3 my-1">
               {filteredForm.map((form, index) => {
                  return (
                     <div key={index} className="w-full md:w-1/3 p-1">
                        <Card
                           className="custom-card"
                           title={
                              <>
                                 <p>{form.structure?.name}</p>
                                 <p>{form.cabinet?.name}</p>
                              </>
                           }
                           size="small"
                           extra={
                              <div className="inline-flex">
                                 <div className="px-2">
                                    <EditOutlined
                                       style={{
                                          color: 'blue',
                                          fontSize: '18px'
                                       }}
                                       onClick={() => editModal(form)}
                                    />
                                 </div>
                                 <div className="px-2">
                                    <Popconfirm
                                       title="Устгасан тохиолдолд сэргээх боломжгүй"
                                       onConfirm={() => deleteForm(form.id)}
                                       okText="Тийм"
                                       cancelText="Үгүй"
                                    >
                                       <DeleteOutlined
                                          style={{
                                             color: 'red',
                                             fontSize: '18px'
                                          }}
                                       />
                                    </Popconfirm>
                                 </div>
                              </div>
                           }
                        >
                           {form.name}
                        </Card>
                     </div>
                  );
               })}
            </div>
         </div>
         <Modal
            title={editMode ? 'Засах' : 'Нэмэх'}
            open={isSOAPModal}
            onCancel={() => setIsSOAPModal(false)}
            onOk={() =>
               SOAPForm.validateFields().then((values) => {
                  onFinish(values);
               })
            }
            width="70%"
         >
            <Form form={SOAPForm}>
               <div className="rounded-md" style={{ backgroundColor: '#fafafa' }}>
                  <div className="p-2">
                     <div className="flex flex-wrap">
                        {docType === 'OUT' ? (
                           <>
                              <div className="w-full md:w-1/2 p-1">
                                 <Form.Item label="Тасаг" name="structureId" rules={basisRule}>
                                    <Select
                                       notFoundContent="Дата байхгүй"
                                       onChange={(e) => {
                                          setCabinetFilterValue(e);
                                          SOAPForm.setFieldValue('cabinetId', null);
                                       }}
                                    >
                                       {structures.map((structure, index) => {
                                          return (
                                             <Option key={index} value={structure.id}>
                                                {structure.name}
                                             </Option>
                                          );
                                       })}
                                    </Select>
                                 </Form.Item>
                              </div>
                              <div className="w-full md:w-1/2 p-1">
                                 <Form.Item label="Кабинэт" name="cabinetId" rules={basisRule}>
                                    <Select>
                                       {filteredCabinets.map((cabinet, index) => {
                                          return (
                                             <Option key={index} value={cabinet.id}>
                                                {cabinet.name}
                                             </Option>
                                          );
                                       })}
                                    </Select>
                                 </Form.Item>
                              </div>
                              <div className="w-full md:w-1/2 p-1">
                                 <Form.Item label="SOAP нэр" name="name" rules={basisRule}>
                                    <Input />
                                 </Form.Item>
                              </div>
                              <div className="w-full md:w-1/2 p-1">
                                 <Form.Item label="SOAP толгой" name="title" rules={basisRule}>
                                    <TextArea />
                                 </Form.Item>
                              </div>
                           </>
                        ) : (
                           <>
                              <div className="w-full md:w-1/2 p-1">
                                 <Form.Item label="Тасаг" name="structureId" rules={basisRule}>
                                    <Select
                                       notFoundContent="Дата байхгүй"
                                       onChange={(e) => {
                                          setCabinetFilterValue(e);
                                          SOAPForm.setFieldValue('cabinetId', null);
                                       }}
                                    >
                                       {structures.map((structure, index) => {
                                          return (
                                             <Option key={index} value={structure.id}>
                                                {structure.name}
                                             </Option>
                                          );
                                       })}
                                    </Select>
                                 </Form.Item>
                              </div>
                              <div className="w-full md:w-1/2 p-1">
                                 <Form.Item label="SOAP нэр" name="name" rules={basisRule}>
                                    <Input />
                                 </Form.Item>
                              </div>
                              <div className="w-full md:w-1/2 p-1">
                                 <Form.Item label="Хэлбэр" name="formId" rules={basisRule}>
                                    <Select>
                                       <Option value={1}>Дотрын эмчийн үзлэг</Option>
                                       <Option value={2}>Хүүхдийн эмчийн үзлэг</Option>
                                       <Option value={3}>Мэдрэлийн эмчийн үзлэг</Option>
                                    </Select>
                                 </Form.Item>
                              </div>
                           </>
                        )}
                     </div>
                  </div>
               </div>
               <Divider>Асуумж</Divider>
               <Collapse style={{ borderRadius: '0.375rem' }}>
                  {docType === 'OUT' ? (
                     <>
                        {type === 0 &&
                           panels.map((panel, index) => {
                              return (
                                 <Panel key={index} header={panel.name} forceRender={true}>
                                    {/* <Index options={options} namePanel={panel.key} handleChange={HandleChange} /> */}
                                    <Index2 options={options} namePanel={panel.key} handleChange={HandleChangeTest} />
                                 </Panel>
                              );
                           })}
                        {type === 1 &&
                           panelsExo.map((panel, index) => {
                              return (
                                 <Panel key={index} header={panel.name} forceRender={true}>
                                    {/* <Index options={options} namePanel={panel.key} handleChange={HandleChange} /> */}
                                    <Index2 options={options} namePanel={panel.key} handleChange={HandleChangeTest} />
                                 </Panel>
                              );
                           })}
                     </>
                  ) : (
                     <>
                        {panels.map((panel, index) => {
                           return (
                              <Panel key={index} header={panel.name} forceRender={true}>
                                 {/* <Index options={options} namePanel={panel.key} handleChange={HandleChange} /> */}
                                 <Index3 options={options} namePanel={panel.key} handleChange={HandleChangeTest} />
                              </Panel>
                           );
                        })}
                     </>
                  )}
               </Collapse>
            </Form>
         </Modal>
      </div>
   );
}
export default SOAPForm;
