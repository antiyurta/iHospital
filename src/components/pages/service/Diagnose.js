import { ArrowRightOutlined, CloseOutlined, EditOutlined, MinusOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Form, Input, Modal, Popconfirm, Select, Table, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { localMn, openNofi } from '../../comman';
import EditableFormItem from '../611/Support/EditableFormItem';
import EditableFormItemSelect from '../611/Support/EditableFormItemSelect';
//
import HealthInsuranceServices from '../../../services/healt-insurance/healtInsurance';
import ReferenceDiagnoseServices from '../../../services/reference/diagnose';
//
const { Search } = Input;
const { Option } = Select;
const { Column } = Table;
function Diagnose({ form, handleClick, types, hicsServiceId }) {
   const [diagnosisForm] = Form.useForm();
   const [diagnoses, setDiagnoses] = useState([]);
   const [hicsCost, setHicsCost] = useState([]);
   const [meta, setMeta] = useState({});
   const [loading, setLoading] = useState(false);
   const [isLoadingHicsCost, setIsLoadingHicsCost] = useState(false);
   const [selectedCost, setSelectedCost] = useState([]);
   const [param, setParam] = useState('');
   const [paramValue, setParamValue] = useState('');
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
      await ReferenceDiagnoseServices.get(conf)
         .then(({ data: { response } }) => {
            setDiagnoses(response.data);
            setMeta(response.meta);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const add = async (diagnose) => {
      var selectedDiagnoses = await diagnosisForm.getFieldValue('diagnosis');
      var state = selectedDiagnoses?.filter((e) => e.id === diagnose.id);
      if (state?.length > 0) {
         openNofi('warning', 'Анхааруулга', 'Онош сонгогдсон байна');
      } else {
         if (!selectedDiagnoses) {
            selectedDiagnoses = [];
         }
         selectedDiagnoses.push(diagnose);
         diagnosisForm.setFieldsValue({ diagnosis: selectedDiagnoses });
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
         const data = diagnosisForm.getFieldValue('diagnosis');
         var arr = [...data];
         arr.splice(index, 1);
         diagnosisForm.setFieldValue('diagnosis', arr);
      }
      setNewUser(false);
      setEditingIndex(undefined);
   };
   const onSave = (index) => {
      diagnosisForm
         .validateFields()
         .then(() => {
            setNewUser(false);
            setEditingIndex(undefined);
            getHicsCost(index);
         })
         .catch((error) => {
            console.log(error.errorFields);
         });
   };
   // const getInsuranceService = async () => {
   //    const conf = {
   //       params: {
   //          usageType: null
   //       }
   //    };
   //    if (appointmentType === 1) {
   //       conf.params['usageType'] = 'EMERGENCY';
   //    } else {
   //       conf.params['usageType'] = 'OUT';
   //    }
   //    await jwtInterceopter.get('insurance/hics-service-group', conf).then((response) => {
   //       console.log(response);
   //       setInsuranceService(response.data.data);
   //    });
   // };

   const getHicsCost = async (index) => {
      setIsLoadingHicsCost(true);
      const diagnoeses = diagnosisForm.getFieldValue('diagnoses');
      const selectedIcdCode = diagnosisForm.getFieldValue(['diagnoses', index, 'code']);
      const selectedDiagnoseType = diagnosisForm.getFieldValue(['diagnoses', index, 'diagnoseType']);
      const state = diagnoeses?.filter((e) => e.diagnoseType === 0);
      if (state?.length > 1) {
         openNofi('error', 'Алдаа', 'Үндсэн онош сонгогдсон байна');
         diagnosisForm.resetFields([['diagnoses', index, 'diagnoseType']]);
      } else {
         if (hicsServiceId && selectedDiagnoseType === 0) {
            await HealthInsuranceServices.getHicsCostByField(hicsServiceId, selectedIcdCode)
               .then((response) => {
                  openNofi('success', 'Амжилттай', response.data.description);
                  setHicsCost(response.data.result);
                  if (response.data.result?.length === 1) {
                     setSelectedCost(response.data.result);
                  }
               })
               .catch((error) => {
                  setHicsCost([]);
                  openNofi('error', 'Алдаа', error.response.data.message?.replaceAll('HttpException:', ''));
               });
         }
      }
      setIsLoadingHicsCost(false);
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
                        <Select
                           style={{ width: '100%' }}
                           onChange={() => {
                              setEditingIndex(undefined);
                           }}
                        >
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
               title="Үйлдэл"
               width={49}
               render={(_value, _row, index) => {
                  if (index === editingIndex) {
                     return (
                        <React.Fragment>
                           <div className="flex flex-row gap-2 mx-2">
                              <Button
                                 icon={<SaveOutlined />}
                                 shape={'circle'}
                                 type={'primary'}
                                 style={{ marginBottom: 8 }}
                                 onClick={() => onSave(index)}
                              />
                              <Button icon={<CloseOutlined />} shape={'circle'} onClick={() => onCancel(index)} />
                           </div>
                        </React.Fragment>
                     );
                  } else {
                     return (
                        <React.Fragment>
                           <div className="flex flex-row gap-2 mx-2">
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
                           </div>
                        </React.Fragment>
                     );
                  }
               }}
            />
         </Table>
      );
   };
   //
   const rowSelection = {
      type: 'radio',
      selectedCost,
      onSelect: (_record, _selected, selectedRows) => {
         setSelectedCost(selectedRows);
      }
   };
   //
   useEffect(() => {
      getDiagnoses(1, 10, paramValue, param);
   }, []);
   return (
      <>
         <div>
            <Button
               type="primary"
               onClick={() => {
                  setIsOpenDiagnoseModal(true);
                  const diagnosis = form.getFieldValue('diagnosis');
                  diagnosisForm.setFieldValue('diagnosis', diagnosis);
                  setHicsCost([]);
                  setSelectedCost([]);
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
                  diagnosisForm
                     .validateFields()
                     .then(async (value) => {
                        if (selectedCost?.length === 0 && hicsServiceId) {
                           openNofi('warning', 'Анхааруулга', 'Өртгийн жин заавал сонгох');
                        } else {
                           handleClick(value.diagnosis, selectedCost);
                           setIsOpenDiagnoseModal(false);
                        }
                     })
                     .catch((err) => {
                        err.errorFields?.map((errorField) =>
                           message.error({
                              content: errorField.errors
                           })
                        );
                        console.log(err);
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
                                                      add(row);
                                                      // hicsServiceIdForm
                                                      //    .validateFields()
                                                      //    .then(() => {
                                                      //       diagnosisForm
                                                      //          .validateFields()
                                                      //          .then(() => )
                                                      //          .catch((err) => {
                                                      //             console.log(err);
                                                      //          });
                                                      //    })
                                                      //    .catch((error) => {
                                                      //       console.log(error);
                                                      //       openNofi(
                                                      //          'warning',
                                                      //          'Анхааруулга',
                                                      //          'Үйлчилгээний төрөл заавал сонгох'
                                                      //       );
                                                      //    });
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
                                 Сонгогдсон онош
                              </p>
                              <Form form={diagnosisForm}>
                                 <Form.List name="diagnosis">
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
