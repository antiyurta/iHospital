import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Empty, Form, Input, InputNumber, Modal, Row, Select, Space, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import FullScreenLoader from '../../../../FullScreenLoader';
import MiddleTable from './MiddleTable';
const { Option } = Select;
const { TextArea } = Input;
function Orders() {
   const [form] = Form.useForm();
   const [calcedPlan, setCalcedPlan] = useState([]);
   const [calcedPlanLoading, setCalcedPlanLoading] = useState(false);
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
   const [selectedRows, setSelectedRows] = useState({});
   const [orderType, setOrderType] = useState(false); // false bwal gaduur true bwal emchiin
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [materialList, setMaterialList] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const [fDepartments, setFDepartments] = useState([]);
   const [filterOrderStatus, setFilterOrderStatus] = useState(Number);
   const getFDepartments = async () => {
      // const conf = {
      //    headers: {},
      //    params: {}
      // };
      // const response = await Get('finance/department', token, conf);
      // setFDepartments(response.data);
   };
   const filterOrder = async (id) => {
      // setCalcedPlanLoading(true);
      // setFilterOrderStatus(id);
      // const conf = {
      //    headers: {},
      //    params: {}
      // };
      // const response = await Get('service/medicine-request/calc/' + id, token, conf);
      // setCalcedPlan(response);
      // setCalcedPlanLoading(false);
   };
   const rowSelection = {
      selectedRowKeys: selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
         console.log(selectedRowKeys, selectedRows);
         if (selectedRows.length > 0) {
            setOrderType(true);
            setSelectedRows(selectedRows);
         } else {
            setOrderType(false);
         }
         setSelectedRowKeys(selectedRowKeys);
      }
   };
   const showModal = () => {
      setIsModalOpen(true);
      if (orderType) {
         const fDep = fDepartments.find((e) => e.dep_id === filterOrderStatus)?.dep_id;
         form.setFieldValue('dep_id2', fDep);
         var data = [];
         selectedRows?.map((expense) => {
            var row = {};
            row['materialId'] = expense.medicine?.materialId;
            row['count'] = expense.quantity;
            data.push(row);
         });
         form.setFieldValue('expenses', data);
      } else {
         form.resetFields();
      }
   };
   const saveUsedMaterials = async (values) => {
      // setLoading(true);
      // const conf = {
      //    headers: {},
      //    params: {}
      // };
      // values['mt_type'] = 70;
      // values['medicineRequestIds'] = selectedRowKeys;
      // console.log(values);
      // const response = await Post(`finance/create-expenses`, token, conf, values);
      // if (response === 201) {
      //    setIsModalOpen(false);
      // }
      // filterOrder(filterOrderStatus);
      // setLoading(false);
   };
   const test = (e) => {
      getMaterials(e);
   };
   // const getMaterials = async (id) => {
   //    setSpinner(true);
   //    const conf = {
   //       headers: {},
   //       params: {}
   //    };
   //    const response = await DefualtGet(`finance/department-material/${id}`, token, conf);
   //    setMaterialList(response);
   //    setSpinner(false);
   // };
   useEffect(() => {
      // getFDepartments();
   }, []);
   return (
      <>
         <Row gutter={16} className="mb-2">
            <Col span={4}>
               <Button type="primary" className="mr-2" onClick={() => showModal()}>
                  Захиалга
               </Button>
            </Col>
         </Row>
         <MiddleTable typeId={70} />
         <div className="pt-2">
            <Card
               bordered={false}
               title="Эмчийн захиалга"
               className="header-solid max-h-max rounded-md"
               extra={
                  <Space>
                     <p>Тасаг сонгох</p>
                     <Select style={{ width: 200 }} onChange={filterOrder}>
                        {fDepartments?.map((fdep, index) => {
                           return (
                              <Option key={index} value={fdep.dep_id}>
                                 {fdep.dep_name}
                              </Option>
                           );
                        })}
                     </Select>
                  </Space>
               }
            >
               <Table
                  bordered
                  rowKey={'id'}
                  locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                  loading={{
                     spinning: calcedPlanLoading,
                     tip: 'Уншиж байна...'
                  }}
                  columns={[
                     {
                        title: 'Захиалсан огноо',
                        dataIndex: 'createdAt',
                        render: (text) => {
                           return moment(text).format('YYYY-MM-DD HH:mm');
                        }
                     },
                     {
                        title: 'Эмчийн нэр',
                        children: [
                           {
                              title: 'Овог',
                              dataIndex: ['user', 'lastName']
                           },
                           {
                              title: 'Нэр',
                              dataIndex: ['user', 'firstName']
                           }
                        ]
                     },
                     {
                        title: 'Өвчтөний нэр',
                        children: [
                           {
                              title: 'Овог',
                              dataIndex: ['patient', 'lastName']
                           },
                           {
                              title: 'Нэр',
                              dataIndex: ['patient', 'firstName']
                           }
                        ]
                     },
                     {
                        title: 'Эм',
                        children: [
                           {
                              title: 'ОУ/Нэр',
                              dataIndex: ['medicine', 'iName']
                           },
                           {
                              title: 'Х/Нэр',
                              dataIndex: ['medicine', 'name']
                           }
                        ]
                     },
                     {
                        title: 'Тоо ширхэг',
                        dataIndex: 'quantity'
                     }
                  ]}
                  rowSelection={{
                     ...rowSelection
                  }}
                  dataSource={calcedPlan}
                  pagination={false}
               />
            </Card>
         </div>
         <Modal
            title="Шилжүүлэх"
            open={isModalOpen}
            onOk={() =>
               form.validateFields().then((values) => {
                  saveUsedMaterials(values);
               })
            }
            onCancel={() => {
               setIsModalOpen(false);
               setOrderType(false);
               setSelectedRowKeys([]);
            }}
            confirmLoading={loading}
            okText="Хадгалах"
            cancelText="Хаах"
            width={800}
         >
            <div>
               <Form form={form} layout="vertical">
                  <div className="flex flex-wrap">
                     <div className="md:w-1/2 sm:w-full p-1">
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                           <div className="p-1">
                              <Form.Item label="Ханаас" rules={[{ required: true, message: 'Заавал' }]} name={'dep_id'}>
                                 <Select onChange={test}>
                                    {fDepartments.map((dep, index) => {
                                       return (
                                          <Option key={index} value={dep.dep_id}>
                                             {dep.dep_name}
                                          </Option>
                                       );
                                    })}
                                 </Select>
                              </Form.Item>
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/2 sm:w-full p-1">
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                           <div className="p-1">
                              <Form.Item
                                 label="Хааш нь"
                                 rules={[{ required: true, message: 'Заавал' }]}
                                 name={'dep_id2'}
                              >
                                 <Select onChange={test} disabled={orderType}>
                                    {fDepartments.map((dep, index) => {
                                       return (
                                          <Option key={index} value={dep.dep_id}>
                                             {dep.dep_name}
                                          </Option>
                                       );
                                    })}
                                 </Select>
                              </Form.Item>
                           </div>
                        </div>
                     </div>
                     <div className="md:w-full sm:w-full p-1">
                        <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                           <div className="p-1">
                              <Form.Item
                                 label="Яагаад зарлага хийж байгаа"
                                 rules={[{ required: true, message: 'Заавал' }]}
                                 name={'description'}
                              >
                                 <TextArea />
                              </Form.Item>
                           </div>
                        </div>
                     </div>
                     {spinner ? (
                        <div className="w-full">
                           <FullScreenLoader full={false} />
                        </div>
                     ) : (
                        <div className="w-full">
                           <Form.List name="expenses">
                              {(fields, { add, remove }) => (
                                 <div className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                                    {fields.map(({ key, name, ...restField }) => (
                                       <div key={key} className="flex flex-wrap items-center">
                                          <div className="w-6/12 p-1">
                                             <Form.Item
                                                {...restField}
                                                label="Матерал"
                                                name={[name, 'materialId']}
                                                rules={[
                                                   {
                                                      required: true,
                                                      message: 'Заавал'
                                                   }
                                                ]}
                                             >
                                                <Select
                                                   allowClear
                                                   showSearch
                                                   style={{
                                                      minWidth: 200
                                                   }}
                                                   size="small"
                                                   placeholder="Сонгох"
                                                   optionFilterProp="children"
                                                   filterOption={(input, option) => option.children.includes(input)}
                                                   filterSort={(optionA, optionB) =>
                                                      optionA.children
                                                         .toLowerCase()
                                                         .localeCompare(optionB.children.toLowerCase())
                                                   }
                                                >
                                                   {materialList?.map((el, index) => {
                                                      return (
                                                         <Option value={el.m_id} key={index}>
                                                            {el.m_name + '->' + el.countC2 + el.ratecode}
                                                         </Option>
                                                      );
                                                   })}
                                                </Select>
                                             </Form.Item>
                                          </div>
                                          <div className="w-5/12 p-1">
                                             <Form.Item
                                                {...restField}
                                                label="Тоо ширхэг"
                                                name={[name, 'count']}
                                                rules={[
                                                   {
                                                      required: true,
                                                      message: 'Заавал'
                                                   }
                                                ]}
                                             >
                                                <InputNumber />
                                             </Form.Item>
                                          </div>
                                          {!orderType && (
                                             <div className="w-1/12">
                                                <MinusCircleOutlined
                                                   style={{ color: 'red' }}
                                                   onClick={() => remove(name)}
                                                />
                                             </div>
                                          )}
                                       </div>
                                    ))}
                                    {!orderType && (
                                       <Form.Item>
                                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                             Матерал нэмэх
                                          </Button>
                                       </Form.Item>
                                    )}
                                 </div>
                              )}
                           </Form.List>
                        </div>
                     )}
                  </div>
               </Form>
            </div>
         </Modal>
      </>
   );
}
export default Orders;
