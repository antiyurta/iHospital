import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Form, Popconfirm, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { openNofi } from '../../../comman';
import { ReturnAll } from './Index';
// components
import Index4 from '../../FormBuilder/FBuilder/index4';
import NewModal from '../../../Modal/Modal';
import { NewInput, NewOption, NewSelect, NewSwitch } from '../../../Input/Input';
// services
import OrganizationDocumentFormService from '../../../../services/organization/documentForm';
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
      label: 'INPUTNUMBER',
      value: 'inputNumber'
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
   const [form] = Form.useForm();
   const documents = ReturnAll();
   const [selectedId, setSelectedId] = useState(Number);
   const [editMode, setEditMode] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const [searchField, setSearchField] = useState('');
   const [documentForms, setDocumentForms] = useState([]);
   const [loading, setLoading] = useState(false);
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
      const formData = form.getFieldsValue();
      const type = form.getFieldValue([panelName, optionName, 'options', name, 'type']);
      if (type === 'radio' || type === 'checkbox' || type === 'dropdown' || type === 'table') {
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
      if (editMode) {
         await OrganizationDocumentFormService.patch(selectedId, values).then((response) => {
            console.log(response);
            if (response.status === 200) {
               form.resetFields();
               setIsOpenEditModal(false);
            }
         });
      } else {
         await OrganizationDocumentFormService.post(values).then((response) => {
            if (response.status === 201) {
               form.resetFields();
               getDocumentForms();
               setIsOpenEditModal(false);
            }
         });
      }
   };
   const getDocumentForms = async () => {
      setLoading(true);
      await OrganizationDocumentFormService.getAll()
         .then((response) => {
            setDocumentForms(response.data.response);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const filteredForm = documentForms?.filter((form) => {
      return form.name?.toLowerCase().includes(searchField.toLowerCase());
   });
   const deleteForm = async (id) => {
      await OrganizationDocumentFormService.delete(id)
         .then((response) => {
            if (response.status === 200) {
               getDocumentForms();
               openNofi('success', 'Амжилттай', 'Устгагдсан');
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
                  <NewInput placeholder="Хайх" allowClear onChange={(e) => setSearchField(e.target.value)} />
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
                     <div
                        key={index}
                        style={{
                           width: '100%',
                           backgroundColor: 'white',
                           padding: '8px 12px',
                           borderRadius: 12,
                           border: '1px solid #e3e2e1',
                           display: 'flex',
                           flexDirection: 'column',
                           gap: 8
                        }}
                     >
                        <p
                           style={{
                              fontWeight: 500
                           }}
                        >
                           {form?.name}
                        </p>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between'
                           }}
                        >
                           <Button
                              icon={
                                 <EditOutlined
                                    style={{
                                       color: 'blue',
                                       fontSize: '14px'
                                    }}
                                 />
                              }
                              onClick={() => openModal(true, form)}
                           >
                              Засах
                           </Button>
                           <Popconfirm
                              title="Устгасан тохиолдолд сэргээх боломжгүй"
                              onConfirm={() => deleteForm(form.id)}
                              okText="Тийм"
                              cancelText="Үгүй"
                           >
                              <Button
                                 danger
                                 icon={
                                    <DeleteOutlined
                                       style={{
                                          color: 'red',
                                          fontSize: '14px'
                                       }}
                                    />
                                 }
                              >
                                 Устгах
                              </Button>
                           </Popconfirm>
                        </div>
                     </div>
                  );
               })}
            </div>
         </Spin>
         <NewModal
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
            <Form
               form={form}
               layout="vertical"
               initialValues={{
                  url: 'document-middleware',
                  isMulti: false
               }}
            >
               <div className="grid grid-cols-2 gap-3">
                  <Form.Item label="Маягтын нэр" name="name">
                     <NewInput />
                  </Form.Item>
                  <Form.Item label="URL" name="url">
                     <NewInput />
                  </Form.Item>
                  <Form.Item label="Холбогдох маягт" name="documentValue">
                     <NewSelect
                        showSearch
                        allowClear
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                           (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                     >
                        {documents?.map((document, index) => {
                           return (
                              <NewOption
                                 disabled={documentForms.find((e) => e.documentValue === document.value) ? true : false}
                                 key={index}
                                 value={document.value}
                              >
                                 {document.label}
                              </NewOption>
                           );
                        })}
                     </NewSelect>
                  </Form.Item>
                  <Form.Item label="Олон талт эсэх" name="isMulti" valuePropName="checked">
                     <NewSwitch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                  </Form.Item>
               </div>
               <div className="rounded-md" style={{ backgroundColor: '#fafafa' }}>
                  <Index4 options={options} namePanel={'documentForm'} handleChange={HandleChangeTest} />
               </div>
            </Form>
         </NewModal>
      </>
   );
}
export default DocumentUpload;
