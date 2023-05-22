import { DeleteOutlined, EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Modal, Popconfirm, Select, Spin, Upload } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { DefualtGet, Get, Patch, Post, openNofi } from '../../../comman';
import { ReturnById, ReturnDetails, ReturnAll } from './Index';
//
import Index4 from '../../FormBuilder/FBuilder/index4';
import jwtInterceopter from '../../../jwtInterceopter';
//
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const { Option } = Select;
const { TextArea } = Input;

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

function DocumentUpload() {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const documents = ReturnAll();
   const [selectedId, setSelectedId] = useState(Number);
   const [editMode, setEditMode] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const [searchField, setSearchField] = useState('');
   const [documentForms, setDocumentForms] = useState([]);
   //
   const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [jsFilePath, setJsFilePath] = useState('');
   const [uploadForm] = Form.useForm();
   const [dd, setdd] = useState(false);
   //
   const openModal = (state, row) => {
      if (row != null) {
         setSelectedId(row.id);
         form.setFieldsValue(row);
      }
      setEditMode(state);
      setIsOpenEditModal(true);
   };
   const HandleChangeTest = (panelName, optionName, name) => {
      console.log(panelName, optionName, name);
      const formData = form.getFieldsValue();
      const type = form.getFieldValue([panelName, optionName, 'options', name, 'type']);
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
      form.setFieldsValue(formData);
   };
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      if (editMode) {
         const response = await Patch('organization/document-form/' + selectedId, token, conf, values);
         if (response === 200) {
            form.resetFields();
            setIsOpenEditModal(false);
         }
      } else {
         const response = await Post('organization/document-form', token, conf, values);
         if (response === 201) {
            form.resetFields();
            getDocumentForms();
            setIsOpenEditModal(false);
         }
      }
   };
   const getDocumentForms = async () => {
      setLoading(true);
      await jwtInterceopter
         .get('organization/document-form')
         .then((response) => {
            console.log(response);
            setDocumentForms(response.data.response.data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const filteredForm = documentForms.filter((form) => {
      return form.name.toLowerCase().includes(searchField.toLowerCase());
   });
   const deleteForm = async (id) => {
      await jwtInterceopter
         .delete('organization/document-form/' + id)
         .then((response) => {
            console.log(response);
            if (response.status === 200) {
               getDocumentForms();
               openNofi('success', 'asdsa', 'asdsa');
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };
   useEffect(() => {
      getDocumentForms();
   }, []);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
               <div className="mx-3">
                  <Input placeholder="Хайх" allowClear onChange={(e) => setSearchField(e.target.value)} />
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="mx-3">
                  <Button
                     type="primary"
                     htmlType="submit"
                     onClick={() => {
                        openModal(false, null);
                        form.resetFields();
                     }}
                  >
                     Нэмэх
                  </Button>
               </div>
            </div>
         </div>
         <Spin spinning={loading}>
            <div className="grid grid-cols-4 gap-3 m-3">
               {filteredForm?.map((form, index) => {
                  return (
                     <Card
                        key={index}
                        className="custom-card"
                        title={
                           <>
                              <p>{form?.name}</p>
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
                                    onClick={() => openModal(true, form)}
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
                     />
                  );
               })}
            </div>
         </Spin>

         <Modal
            title="Маягтын асуумж"
            open={isOpenEditModal}
            onCancel={() => setIsOpenEditModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
               })
            }
            width="70%"
         >
            <Form form={form} layout="vertical">
               <Form.Item label="Form name Нэр" name="name">
                  <Input />
               </Form.Item>
               <Form.Item label="Холбогдох маягт" name="documentValue">
                  <Select
                     showSearch
                     allowClear
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                     }
                  >
                     {documents?.map((document, index) => {
                        return (
                           <Option
                              disabled={documentForms.find((e) => e.documentValue === document.value) ? true : false}
                              key={index}
                              value={document.value}
                           >
                              {document.label}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <div className="rounded-md" style={{ backgroundColor: '#fafafa' }}>
                  <Index4 options={options} namePanel={'documentForm'} handleChange={HandleChangeTest} />
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default DocumentUpload;
