import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Drawer, Form, Input, InputNumber, Modal, Popconfirm, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Delete, Get } from '../../../comman';

function PatientForm() {
   const [searchField, setSearchField] = useState('');
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [inpatientForm] = Form.useForm();
   const [inpatientForms, setInpatientForms] = useState([]);
   const [isInpatientModal, setIsInpatientModal] = useState(false);
   const filteredForm = inpatientForms.filter((form) => {
      return form.name.toLowerCase().includes(searchField.toLowerCase());
   });
   const showModal = () => {
      inpatientForm.resetFields();
      setIsInpatientModal(true);
   };
   const editModal = (form) => {
      console.log(form);
      // const newForm = [];
      // newForm['structureId'] = form.structureId;
      // newForm['cabinetId'] = form.cabinetId;
      // newForm['name'] = form.name;
      // newForm['title'] = form.title;
      // newForm['pain'] = form.formItem.pain;
      // newForm['inspection'] = form.formItem.inspection;
      // newForm['question'] = form.formItem.question;
      // newForm['plan'] = form.formItem.plan;
      // setEditMode(true);
      // setId(form.id);
      // setCabinetFilterValue(form.structureId);
      // SOAPForm.setFieldsValue(newForm);
      // setIsSOAPModal(true);
   };
   const deleteForm = async (id) => {
      const response = await Delete('emr/inspection-form/' + id, token, config);
      if (response === 200) {
         getInpatientForms();
      }
   };
   const getInpatientForms = async () => {
      // const response = await Get('')
   };
   useEffect(() => {
      getInpatientForms();
   }, []);
   //
   const [layout, setLayout] = useState(false);
   const [builderForm] = Form.useForm();
   const [bigData, setBigData] = useState([]);
   const { Option } = Select;
   //
   return (
      <div className="flex flex-wrap">
         <div className="basis-1/5">
            <Button
               onClick={() => {
                  builderForm.validateFields().then((values) => setBigData(values.formItems));
               }}
            >
               Харах
            </Button>
            <Card>
               <Form form={builderForm} layout="vertical">
                  <Form.List name={'formItems'}>
                     {(fields, { add, remove }) => (
                        <>
                           {fields.map(({ key, name, ...restField }) => (
                              <>
                                 <Card>
                                    <div className="flex flex-wrap">
                                       <div className="basis-1/2">
                                          <Form.Item label="Төрөл" name={[name, 'type']}>
                                             <Select>
                                                <Option value={true}>Толгой</Option>
                                                <Option value={false}>Бие</Option>
                                             </Select>
                                          </Form.Item>
                                       </div>
                                       <div className="basis-1/2">
                                          <Form.Item label="Нэр" name={[name, 'label']}>
                                             <Input />
                                          </Form.Item>
                                       </div>
                                       <div className="basis-1/2">
                                          <Form.Item label="Мөр" name={[name, 'col']}>
                                             <InputNumber />
                                          </Form.Item>
                                       </div>
                                       <div className="basis-1/2">
                                          <Form.Item label="Багана" name={[name, 'row']}>
                                             <InputNumber />
                                          </Form.Item>
                                       </div>
                                    </div>
                                 </Card>
                                 <DeleteOutlined
                                    style={{ color: 'red', fontSize: '18px' }}
                                    onClick={() => remove(name)}
                                 />
                              </>
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
               </Form>
            </Card>
         </div>
         <div className="basis-4/5">
            <Button onClick={() => setLayout(!layout)}>Эргүүлэх</Button>
            <div className={layout ? 'page-landscape' : 'page'} style={{ margin: 'auto' }}>
               <Table bordered className="ant-border-space">
                  <tbody className="ant-table-tbody p-0">
                     {bigData?.map((data, index) => {
                        return (
                           <tr key={index} className="ant-table-row ant-table-row-level-0">
                              {data.type ? (
                                 <th colSpan={data.col} rowSpan={data.row}>
                                    {data.label}
                                 </th>
                              ) : (
                                 <td colSpan={data.col} rowSpan={data.row}>
                                    {data.label}
                                 </td>
                              )}
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   );
}
export default PatientForm;
