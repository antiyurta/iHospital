import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber, Modal, Popconfirm, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { openNofi } from '../../../comman';
import { ReturnAll } from './Index';
// services
import OrganizationDocumentFormService from '../../../../services/organization/documentForm';
import xrayApi from '../../../../services/service/xray.api';
import OrganizationStructureServices from '../../../../services/organization/structure';
import EmrInspectionFormServices from '../../../../services/emr/inspectionForm';
//

import * as XrayDocumentIndex from '../../Xray/Document/Index';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../../features/authReducer';

import NewIndex from '../../FormBuilder/newFBuilder/index';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

export const documentFormType = {
   Form: 'FORM',
   Xray: 'XRAY',
   Inspection: 'INSPECTION'
};

function DocumentUpload({ type }) {
   // Form = 'FORM', // 611 Маягт
   // Xray = 'XRAY', // ЭХО, Оншилгоо
   // Inspection = "INSPECTION" // Эмчийн үзлэг
   const hospitalId = useSelector(selectCurrentHospitalId);
   const [form] = Form.useForm();
   const documents = ReturnAll();
   const XrayDocuments = XrayDocumentIndex.ReturnAll(hospitalId);
   const [newIndexData, setNewIndexData] = useState([]);
   const [selectedId, setSelectedId] = useState(Number);
   const [editMode, setEditMode] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const [searchField, setSearchField] = useState('');
   const [documentForms, setDocumentForms] = useState([]);
   const [loading, setLoading] = useState(false);
   // inspection
   const [structures, setStructures] = useState([]);
   const [cabinets, setCabinets] = useState([]);
   const [cabinetFilterValue, setCabinetFilterValue] = useState(Number);
   // xray
   const [xrays, setXrays] = useState([]);
   const openModal = (state, row) => {
      form.resetFields();
      if (row != null) {
         setSelectedId(row.id);
         form.setFieldsValue(row);
         setNewIndexData(row.documentForm);
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
      if (type === documentFormType.Inspection) {
         await EmrInspectionFormServices.post(values).then((response) => {
            console.log(response);
         });
      } else {
         if (editMode) {
            // values['documentForm'] = [];
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
   const getEmrInspectionForms = async () => {
      setLoading(true);
      await EmrInspectionFormServices.get()
         .then((response) => {
            setDocumentForms(response.data.response.data);
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
      if (type === documentFormType.Inspection) {
         await EmrInspectionFormServices.delete(id);
      } else {
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
      }
   };
   const getStructures = async () => {
      await OrganizationStructureServices.get({
         params: {
            type: 2
         }
      }).then(({ data: { response } }) => {
         setStructures(response.data);
      });
   };
   const getCabinets = async () => {
      await OrganizationStructureServices.get({
         params: {
            type: 3
         }
      }).then(({ data: { response } }) => {
         setCabinets(response.data);
      });
   };
   const filteredCabinets = cabinets.filter((cabinet) => cabinet.parentId === cabinetFilterValue);
   useEffect(() => {
      if (type === documentFormType.Inspection) {
         getEmrInspectionForms();
         getStructures();
         getCabinets();
      } else {
         getDocumentForms();
         getXrays();
      }
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
                           gap: 8,
                           justifyContent: 'space-between'
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
         <Modal
            title="Маягтын асуумж"
            open={isOpenEditModal}
            destroyOnClose={true}
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
                  url: type === documentFormType.Inspection ? 'emr/inpsection-form' : 'document-middleware',
                  formType: 0
               }}
            >
               <div className="grid grid-cols-2 gap-3">
                  <Form.Item label="Маягтын нэр" name="name">
                     <Input />
                  </Form.Item>
                  <Form.Item label="URL" name="url">
                     <Input />
                  </Form.Item>
                  {type === documentFormType.Inspection ? (
                     <>
                        <Form.Item label="Тасаг" name="structureId">
                           <Select
                              options={structures?.map((structure) => ({
                                 label: structure.name,
                                 value: structure.id
                              }))}
                              onChange={(e) => {
                                 setCabinetFilterValue(e);
                                 form.setFieldValue('cabinetId', null);
                              }}
                           />
                        </Form.Item>
                        <Form.Item label="Кабинет" name="cabinetId">
                           <Select
                              options={filteredCabinets?.map((cabinet) => ({
                                 label: cabinet.name,
                                 value: cabinet.id
                              }))}
                           />
                        </Form.Item>
                     </>
                  ) : null}
                  {type === documentFormType.Form ? (
                     <>
                        <Form.Item label="Холбогдох маягт" name="documentValue">
                           <Select
                              showSearch
                              allowClear
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                 (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                              }
                           >
                              {documents?.map((document, index) => (
                                 <Option
                                    disabled={
                                       documentForms.find((e) => e.documentValue === document.value) ? true : false
                                    }
                                    key={index}
                                    value={document.value}
                                 >
                                    {document.label}
                                 </Option>
                              ))}
                           </Select>
                        </Form.Item>
                        <Form.Item label="Маягтын төрөл" name="formType">
                           <Select
                              options={[
                                 {
                                    label: 'Энгийн',
                                    value: 0
                                 },
                                 {
                                    label: 'Энгийн бус',
                                    value: 1
                                 },
                                 {
                                    label: 'Карт',
                                    value: 2
                                 },
                                 {
                                    label: 'Хамтран',
                                    value: 3
                                 }
                              ]}
                           />
                        </Form.Item>
                        <Form.Item
                           label="Байрлал"
                           name="position"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              },
                              ({ _getFieldValue }) => ({
                                 validator(_, value) {
                                    const isInclude = !!documentForms.find((form) => form.position === value);
                                    if (isInclude && !editMode) {
                                       return Promise.reject('position dawhtsaj baina');
                                    }
                                    return Promise.resolve();
                                 }
                              })
                           ]}
                        >
                           <InputNumber />
                        </Form.Item>
                     </>
                  ) : null}
                  {type === documentFormType.Xray ? (
                     <>
                        <Form.Item label="Холбогдох маягт" name="documentValue">
                           <Select>
                              {XrayDocuments?.map((xrayDoc, index) => (
                                 <Option
                                    disabled={
                                       documentForms.find((e) => e.documentValue === xrayDoc.value) ? true : false
                                    }
                                    key={index}
                                    value={xrayDoc.value}
                                 >
                                    {xrayDoc.label}
                                 </Option>
                              ))}
                           </Select>
                        </Form.Item>
                        <Form.Item label="Холбогдох үйлчилгээ" name="serviceId">
                           <Select
                              showSearch
                              allowClear
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                 (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                              }
                           >
                              {xrays?.map((xray, index) => (
                                 <Option
                                    disabled={documentForms.find((e) => e.serviceId === xray.id) ? true : false}
                                    key={index}
                                    value={xray.id}
                                 >
                                    {xray.name}
                                 </Option>
                              ))}
                           </Select>
                        </Form.Item>
                     </>
                  ) : null}
               </div>
               <div className="rounded-md">
                  {type === documentFormType.Inspection ? (
                     <>
                        <Divider>Зовиур</Divider>
                        <Form.Item shouldUpdate name={'inspection'}>
                           <TextArea disabled />
                        </Form.Item>
                        <NewIndex type={type} form={form} data={newIndexData} formListName="inspection" />
                        <Divider>Асуумж</Divider>
                        <Form.Item shouldUpdate name={'question'}>
                           <TextArea disabled />
                        </Form.Item>
                        <NewIndex type={type} form={form} data={newIndexData} formListName="question" />
                        <Divider>Бодит үзлэг</Divider>
                        <Form.Item shouldUpdate name={'pain'}>
                           <TextArea disabled />
                        </Form.Item>
                        <NewIndex type={type} form={form} data={newIndexData} formListName="pain" />
                        <Divider>Төлөвлөгөө</Divider>
                        <Form.Item shouldUpdate name={'plan'}>
                           <TextArea disabled />
                        </Form.Item>
                        <NewIndex type={type} form={form} data={newIndexData} formListName="plan" />
                     </>
                  ) : null}
                  {type === documentFormType.Form || type === documentFormType.Xray ? (
                     <>
                        <Form.Item shouldUpdate name="documentForm">
                           <TextArea disabled />
                        </Form.Item>
                        <NewIndex type={type} form={form} data={newIndexData} formListName="documentForm" />
                     </>
                  ) : null}
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default DocumentUpload;
