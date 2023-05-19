import {
   ArrowRightOutlined,
   CloseOutlined,
   EditOutlined,
   MinusCircleOutlined,
   MinusOutlined,
   SaveOutlined
} from '@ant-design/icons';
import { Button, ConfigProvider, Form, Input, Modal, Pagination, Popconfirm, Select, Table } from 'antd';
import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
import { localMn, openNofi } from '../../comman';
import jwtInterceopter from '../../jwtInterceopter';
import EditableFormItem from '../611/Support/EditableFormItem';
import EditableFormItemSelect from '../611/Support/EditableFormItemSelect';
const { Search } = Input;
const { TextArea } = Input;
const { Option, OptGroup } = Select;
const { Column } = Table;
function Diagnose({ handleClick, types, appointmentHasInsurance }) {
   const [diagnosesForm] = Form.useForm();
   const [hicsServiceIdForm] = Form.useForm();
   const [diagnoses, setDiagnoses] = useState([]);
   const [hicsCost, setHicsCost] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [meta, setMeta] = useState({});
   const [loading, setLoading] = useState(false);
   //
   const [param, setParam] = useState('');
   const [paramValue, setParamValue] = useState('');
   //
   const [insuranceService, setInsuranceService] = useState([]);
   const [hicsServiceId, setHicsServiceId] = useState(null);
   //
   const [isOpenDiagnoseModal, setIsOpenDiagnoseModal] = useState(false);
   const [editingIndex, setEditingIndex] = useState(undefined);
   const [isNewUser, setNewUser] = useState(false);
   //
   const getDiagnoses = async (page, pageSize, e, v) => {
      setLoading(true);
      const conf = {
         params: {
            page: page,
            limit: pageSize,
            types: types
         }
      };
      if (e && v) {
         setParam(v);
         setParamValue(e);
         conf.params[v] = e;
      }
      await jwtInterceopter
         .get('reference/diagnose', conf)
         .then((response) => {
            setDiagnoses(response.data.response.data);
            setMeta(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const add = async (diagnose) => {
      var selectedDiagnoses = await diagnosesForm.getFieldValue('diagnoses');
      setHicsCost([]);
      var state = selectedDiagnoses?.filter((e) => e.id === diagnose.id);
      if (state?.length > 0) {
         openNofi('warning', 'Анхааруулга', 'Онош сонгогдсон байна');
      } else {
         if (!selectedDiagnoses) {
            selectedDiagnoses = [];
         }
         console.log(diagnose);
         selectedDiagnoses.push(diagnose);
         diagnosesForm.setFieldsValue({ diagnoses: selectedDiagnoses });
      }
   };
   const remove = (index) => {
      // var arr = [...selectedDiagnoses];
      // arr.splice(index, 1);
      // setSelectedDiagnoses(arr);
   };
   const onCancel = (index) => {
      if (isNewUser) {
         remove(index);
      } else {
         const data = diagnosesForm.getFieldValue('diagnoses');
         console.log(data);
         var arr = [...data];
         arr.splice(index, 1);
         diagnosesForm.setFieldValue('diagnoses', arr);
      }
      setNewUser(false);
      setEditingIndex(undefined);
   };
   const onSave = () => {
      diagnosesForm
         .validateFields()
         .then(() => {
            setNewUser(false);
            setEditingIndex(undefined);
         })
         .catch((error) => {
            console.log(error.errorFields);
         });
   };
   const getInsuranceService = async () => {
      await jwtInterceopter
         .get('insurance/hics-service-group', {
            params: {
               usageType: 'OUT'
            }
         })
         .then((response) => {
            console.log(response);
            setInsuranceService(response.data.data);
         });
   };

   const getHicsCost = async (value, index) => {
      setHicsCost([]);
      const diagnoeses = diagnosesForm.getFieldValue('diagnoses');
      const selectedIcdCode = diagnosesForm.getFieldValue(['diagnoses', index, 'code']);
      const state = diagnoeses?.filter((e) => e.diagnoseType === 0);
      if (state?.length > 1) {
         openNofi('error', 'Алдаа', 'Үндсэн онош сонгогдсон байна');
         diagnosesForm.resetFields([['diagnoses', index, 'diagnoseType']]);
      } else {
         console.log(hicsServiceId, value);
         if (hicsServiceId && value === 0) {
            const conf = {
               params: {
                  icdCode: selectedIcdCode,
                  serviceId: hicsServiceId
               }
            };
            await jwtInterceopter
               .get('health-insurance/hics-cost-by-field', conf)
               .then((response) => {
                  openNofi('success', 'Амжилттай', response.data.description);
                  setHicsCost(response.data.result);
               })
               .catch((error) => {
                  setHicsCost([]);
                  openNofi('error', 'Алдаа', error.response.data.message?.replaceAll('HttpException:', ''));
               });
         }
      }
   };

   const EditableTable = (props) => {
      const { diagnoses, remove } = props;
      return (
         <Table bordered dataSource={diagnoses} pagination={false}>
            <Column
               dataIndex={'code'}
               title="Код"
               render={(_value, _row, index) => {
                  return (
                     <EditableFormItem name={[index, 'code']}>
                        <Input />
                     </EditableFormItem>
                  );
               }}
            />
            <Column
               dataIndex={'nameMn'}
               title="Код"
               render={(_value, _row, index) => {
                  return (
                     <EditableFormItem name={[index, 'nameMn']}>
                        <Input />
                     </EditableFormItem>
                  );
               }}
            />
            <Column
               dataIndex={'diagnoseType'}
               title="Оношийн төрөл"
               render={(_value, _row, index) => {
                  return (
                     <EditableFormItemSelect
                        rules={[{ required: true, message: 'Оношийн төрөл сонгох' }]}
                        name={[index, 'diagnoseType']}
                        editing={index === editingIndex}
                     >
                        <Select onChange={(e) => getHicsCost(e, index)} style={{ width: '100%' }}>
                           <Option value={0}>Үндсэн</Option>
                           <Option value={1}>Урьдчилсан</Option>
                           <Option value={2}>Хавсрах онош</Option>
                           <Option value={3}>Дагалдах</Option>
                        </Select>
                     </EditableFormItemSelect>
                  );
               }}
            />
            <Column
               title=""
               render={(_value, _row, index) => {
                  if (index === editingIndex) {
                     return (
                        <React.Fragment>
                           <Button
                              icon={<SaveOutlined />}
                              shape={'circle'}
                              type={'primary'}
                              style={{ marginBottom: 8 }}
                              onClick={onSave}
                           />
                           <Button icon={<CloseOutlined />} shape={'circle'} onClick={() => onCancel(index)} />
                        </React.Fragment>
                     );
                  } else {
                     return (
                        <React.Fragment>
                           <Button
                              title="Засах"
                              icon={<EditOutlined />}
                              shape={'circle'}
                              style={{ marginBottom: 8 }}
                              disabled={editingIndex !== undefined}
                              onClick={() => setEditingIndex(index)}
                           />
                           <Popconfirm
                              title="Are you sure？"
                              okText="Yes"
                              cancelText="No"
                              onConfirm={() => remove(index)}
                           >
                              <Button
                                 style={{
                                    background: 'red'
                                 }}
                                 icon={<MinusOutlined />}
                                 shape={'circle'}
                                 type={'danger'}
                                 disabled={editingIndex !== undefined}
                              />
                           </Popconfirm>
                        </React.Fragment>
                     );
                  }
               }}
            />
         </Table>
      );
   };
   //
   useEffect(() => {
      getDiagnoses(1, 10, paramValue, param);
   }, []);
   useEffect(() => {
      if (appointmentHasInsurance) {
         getInsuranceService();
      }
   }, [appointmentHasInsurance]);
   return (
      <>
         <div>
            <Button
               className="btn-add"
               onClick={() => {
                  setIsOpenDiagnoseModal(true);
                  diagnosesForm.resetFields();
                  hicsServiceIdForm.resetFields();
               }}
            >
               Онош сонгох
            </Button>
            <Modal
               title="Онош"
               open={isOpenDiagnoseModal}
               onCancel={() => {
                  setIsOpenDiagnoseModal(false);
               }}
               onOk={() => {
                  diagnosesForm.validateFields().then((value) => {
                     handleClick(value.diagnoses, hicsServiceIdForm.getFieldsValue());
                     setIsOpenDiagnoseModal(false);
                  });
               }}
               width={'90%'}
               okText="Хадгалах"
               cancelText="Болих"
            >
               <div className="flex flex-col gap-3">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Search
                           placeholder={'Код , Нэрүүдээр хайх'}
                           allowClear
                           onSearch={(e) => getDiagnoses(1, 10, e, 'filter')}
                           enterButton={'Хайх'}
                        />
                     </div>
                  </div>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <p
                           className="pb-3"
                           style={{
                              fontWeight: '600'
                           }}
                        >
                           Өртгийн жин
                        </p>
                        <ConfigProvider locale={localMn()}>
                           <Table
                              rowKey={'icd9Code'}
                              loading={loading}
                              bordered
                              columns={[
                                 {
                                    title: 'ICD 10 Код',
                                    dataIndex: 'icd10Code'
                                 },
                                 {
                                    title: 'ICD 9 Код',
                                    dataIndex: 'icd9Code'
                                 },
                                 {
                                    title: 'Үйлчилгээний нэр',
                                    dataIndex: 'drgName'
                                 },
                                 {
                                    title: 'Даатгалаас төлөх',
                                    dataIndex: 'amountHi'
                                 }
                              ]}
                              dataSource={hicsCost}
                              pagination={false}
                           />
                        </ConfigProvider>
                     </div>
                  </div>
                  <div className="grid sm:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 gap-3">
                     <div className="xl:col-span-2">
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                           <div className="p-3">
                              <p
                                 className="pb-3"
                                 style={{
                                    fontWeight: '600'
                                 }}
                              >
                                 Онош сонгох хэсэг
                              </p>
                              <ConfigProvider locale={localMn()}>
                                 <Table
                                    rowKey={'id'}
                                    loading={loading}
                                    bordered
                                    columns={[
                                       {
                                          title: 'Код',
                                          dataIndex: 'code'
                                       },
                                       {
                                          title: 'Монгол нэр',
                                          dataIndex: 'nameMn'
                                       },
                                       {
                                          title: 'Англи нэр',
                                          dataIndex: 'nameEn'
                                       },
                                       {
                                          title: 'Орос нэр',
                                          dataIndex: 'nameRu'
                                       },
                                       {
                                          title: '',
                                          render: (_, row) => {
                                             return (
                                                <Button
                                                   icon={
                                                      <ArrowRightOutlined
                                                         style={{
                                                            font: 24,
                                                            color: '#4a7fc1'
                                                         }}
                                                      />
                                                   }
                                                   onClick={() => {
                                                      hicsServiceIdForm
                                                         .validateFields()
                                                         .then(() => {
                                                            diagnosesForm
                                                               .validateFields()
                                                               .then(() => add(row))
                                                               .catch((err) => {
                                                                  console.log(err);
                                                               });
                                                         })
                                                         .catch((error) => {
                                                            console.log(error);
                                                            openNofi(
                                                               'warning',
                                                               'Анхааруулга',
                                                               'Үйлчилгээний төрөл сонгох'
                                                            );
                                                         });
                                                   }}
                                                />
                                             );
                                          }
                                       }
                                    ]}
                                    dataSource={diagnoses}
                                    pagination={{
                                       position: ['bottomCenter'],
                                       size: 'small',
                                       current: meta.page,
                                       total: meta.itemCount,
                                       showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                                       pageSize: meta.limit,
                                       showSizeChanger: true,
                                       pageSizeOptions: ['5', '10', '20', '50'],
                                       showQuickJumper: true,
                                       onChange: (page, pageSize) => getDiagnoses(page, pageSize, paramValue, param)
                                    }}
                                 />
                              </ConfigProvider>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                           <div className="p-3">
                              <p
                                 className="pb-3"
                                 style={{
                                    fontWeight: '600'
                                 }}
                              >
                                 Үйлчилгээний төрөл
                              </p>
                              {appointmentHasInsurance && (
                                 <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                                    <div className="p-1">
                                       <Form form={hicsServiceIdForm}>
                                          <Form.Item
                                             name="hicsServiceId"
                                             rules={[{ required: true, message: 'Заавал' }]}
                                             style={{
                                                width: '100%'
                                             }}
                                             className="mb-0"
                                          >
                                             <Select
                                                placeholder="Үйлчилгээний төрөл сонгох"
                                                onChange={(e) => setHicsServiceId(e)}
                                             >
                                                {insuranceService?.map((group, index) => {
                                                   return (
                                                      <OptGroup key={index} label={group.name}>
                                                         {group?.hicsServices?.map((service, idx) => {
                                                            return (
                                                               <Option key={`${index}-${idx}`} value={service.id}>
                                                                  {service.name}
                                                               </Option>
                                                            );
                                                         })}
                                                      </OptGroup>
                                                   );
                                                })}
                                             </Select>
                                          </Form.Item>
                                       </Form>
                                    </div>
                                 </div>
                              )}
                           </div>
                        </div>
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                           <div className="p-3">
                              <p
                                 className="pb-3"
                                 style={{
                                    fontWeight: '600'
                                 }}
                              >
                                 Сонгогдсон онош
                              </p>
                              <Form form={diagnosesForm}>
                                 <Form.List name="diagnoses">
                                    {(diagnoses, { add, remove }) => (
                                       <EditableTable diagnoses={diagnoses} remove={remove} />
                                    )}
                                 </Form.List>
                              </Form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Modal>
         </div>
      </>
   );
}
export default Diagnose;
