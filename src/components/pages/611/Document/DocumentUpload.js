import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Form, Input, Popconfirm, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { openNofi } from '../../../comman';
import { ReturnAll } from './Index';
// components
import Index4 from '../../FormBuilder/FBuilder/index4';
import NewModal from '../../../Modal/Modal';
import { NewInput, NewOption, NewSelect, NewSwitch } from '../../../Input/Input';
// services
import OrganizationDocumentFormService from '../../../../services/organization/documentForm';
import xrayApi from '../../../../services/service/xray.api';
//

import * as XrayDocumentIndex from '../../Xray/Document/Index';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../../features/authReducer';

import NewIndex from '../../FormBuilder/newFBuilder/index';

function DocumentUpload({ type }) {
   // Form = 'FORM', // 611 Маягт
   // Xray = 'XRAY', // ЭХО, Оншилгоо
   const hospitalId = useSelector(selectCurrentHospitalId);
   const [form] = Form.useForm();
   const [newForm] = Form.useForm();
   const documents = ReturnAll();
   const XrayDocuments = XrayDocumentIndex.ReturnAll(hospitalId);
   const [selectedId, setSelectedId] = useState(Number);
   const [editMode, setEditMode] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const [searchField, setSearchField] = useState('');
   const [documentForms, setDocumentForms] = useState([]);
   const [loading, setLoading] = useState(false);
   // xray
   const [xrays, setXrays] = useState([]);
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
            if (response.status === 200) {
               form.resetFields();
               getDocumentForms();
               setIsOpenEditModal(false);
            }
         });
      } else {
         await OrganizationDocumentFormService.post({ ...values, type: type }).then((response) => {
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
      await OrganizationDocumentFormService.getByPageFilter({
         params: {
            type: type
         }
      })
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
   const getXrays = async () => {
      await xrayApi.get().then((response) => {
         setXrays(response.data.response.data);
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
         })
         .finally(() => {
            getDocumentForms();
         });
   };
   useEffect(() => {
      getDocumentForms();
      getXrays();
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
                  console.log(values);
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
                  {type === 'FORM' ? (
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
                                    disabled={
                                       documentForms.find((e) => e.documentValue === document.value) ? true : false
                                    }
                                    key={index}
                                    value={document.value}
                                 >
                                    {document.label}
                                 </NewOption>
                              );
                           })}
                        </NewSelect>
                     </Form.Item>
                  ) : null}
                  {type === 'XRAY' ? (
                     <Form.Item label="Холбогдох маягт" name="documentValue">
                        <NewSelect>
                           {XrayDocuments?.map((xrayDoc, index) => {
                              return (
                                 <Option
                                    disabled={
                                       documentForms.find((e) => e.documentValue === xrayDoc.value) ? true : false
                                    }
                                    key={index}
                                    value={xrayDoc.value}
                                 >
                                    {xrayDoc.label}
                                 </Option>
                              );
                           })}
                        </NewSelect>
                     </Form.Item>
                  ) : null}
                  {type === 'XRAY' ? (
                     <Form.Item label="Холбогдох үйлчилгээ" name="serviceId">
                        <NewSelect
                           showSearch
                           allowClear
                           optionFilterProp="children"
                           filterOption={(input, option) =>
                              (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                           }
                        >
                           {xrays?.map((xray, index) => {
                              return (
                                 <NewOption
                                    disabled={documentForms.find((e) => e.serviceId === xray.id) ? true : false}
                                    key={index}
                                    value={xray.id}
                                 >
                                    {xray.name}
                                 </NewOption>
                              );
                           })}
                        </NewSelect>
                     </Form.Item>
                  ) : null}
                  <Form.Item label="Олон талт эсэх" name="isMulti" valuePropName="checked">
                     <NewSwitch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                  </Form.Item>
               </div>
               <div className="rounded-md">
                  <Form.Item name="documentForm">
                     <Input />
                  </Form.Item>
                  <NewIndex form={form} data={form.getFieldValue('documentForm')} />
               </div>
               {/* <div className="rounded-md" style={{ backgroundColor: '#fafafa' }}>
                  <Index4 form={form} titlePanel={'documentForm'} handleChange={HandleChangeTest} />
               </div> */}
            </Form>
         </NewModal>
      </>
   );
}
export default DocumentUpload;
