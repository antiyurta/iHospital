import {
   Button,
   InputNumber,
   Select,
   Modal,
   Table,
   Row,
   Col,
   Form,
   Input,
   Space
} from 'antd';
import { useEffect, useState } from 'react';
import { DefualtGet, Get, Post } from '../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import {
   DeleteOutlined,
   MinusCircleOutlined,
   PlusOutlined
} from '@ant-design/icons';
const { TextArea } = Input;
const { Option } = Select;
function Acting({ PatientData, ListId, DepartmentId }) {
   const token = useSelector(selectCurrentToken);
   const [form] = Form.useForm();
   const [spinner, setSpinner] = useState(false);
   const [loading, setLoading] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [materialList, setMaterialList] = useState([]);
   const [fDepartments, setFDepartments] = useState([]);
   const [data, setData] = useState([]);
   const [meta, setMeta] = useState({});
   const showModal = () => {
      setIsModalOpen(true);
      form.resetFields();
   };
   const saveUsedMaterials = async (values) => {
      setLoading(true);
      const conf = {
         headers: {},
         params: {}
      };
      values['dep_id2'] = DepartmentId;
      values['mt_type'] = 70;
      const response = await Post(
         `finance/create-expenses`,
         token,
         conf,
         values
      );
      if (response === 201) {
         setIsModalOpen(false);
      }
      setLoading(false);
   };

   const columns = [
      {
         title: '№',
         dataIndex: 'id',
         render: (_, record, index) => {
            return index + 1;
         }
      },
      {
         title: 'Тайлбар',
         dataIndex: 'descr'
      },
      {
         title: 'Материал / тоо',
         dataIndex: 'expenses',
         render: (text) => {
            return (
               <ul>
                  {text.map((item, index) => {
                     return (
                        <li key={index}>
                           {item.material?.m_name + '/' + item.tcount}
                        </li>
                     );
                  })}
               </ul>
            );
         }
      },
      {
         title: 'Тоо ширхэг',
         dataIndex: 'tcount'
      }
   ];

   const getMaterials = async (id) => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {}
      };
      const response = await DefualtGet(
         `finance/department-material/${id}`,
         token,
         conf
      );
      setMaterialList(response);
      setSpinner(false);
   };
   const getActing = async (page, pageSize, type) => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {
            page: 1,
            limit: pageSize,
            mt_type: type
         }
      };
      const response = await Get('finance/expense-header', token, conf);
      setData(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   const getDepartments = async () => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Get('finance/department', token, conf);
      setFDepartments(response.data);
   };
   const test = (e) => {
      getMaterials(e);
   };
   useEffect(() => {
      getActing(1, 10, 7);
      getDepartments();
   }, []);
   return (
      <>
         <Row gutter={16} className="mb-2">
            <Col span={4}>
               <Button className="mr-2" onClick={() => showModal()}>
                  Захиалга
               </Button>
            </Col>
         </Row>
         <div className="w-full p-1">
            <Select
               value={7}
               onChange={(e) => getActing(1, 10, e)}
               style={{ width: 200 }}
            >
               <Option value={7}>Зарлага</Option>
               <Option value={70}>Захиалга</Option>
               <Option value={9}>Дотоод гүйлгээ</Option>
            </Select>
         </div>
         <div className="w-full p-1">
            <Table
               bordered
               rowKey={(record) => record.id}
               className="whitespace-pre-wrap"
               locale={{ emptyText: 'Мэдээлэл байхгүй' }}
               loading={spinner}
               columns={columns}
               dataSource={data}
            />
            <Modal
               title="Шилжүүлэх"
               open={isModalOpen}
               onOk={() =>
                  form.validateFields().then((values) => {
                     saveUsedMaterials(values);
                  })
               }
               onCancel={() => setIsModalOpen(false)}
               confirmLoading={loading}
               okText="Хадгалах"
               cancelText="Хаах"
               width={800}
            >
               <div>
                  <Form form={form} layout="vertical">
                     <div className="flex flex-wrap">
                        <div className="md:w-1/2 sm:w-full p-1">
                           <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                              <div className="p-1">
                                 <Form.Item
                                    label="Ханаас"
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                    name={'dep_id'}
                                 >
                                    <Select onChange={test}>
                                       {fDepartments.map((dep, index) => {
                                          return (
                                             <Option
                                                key={index}
                                                value={dep.dep_id}
                                             >
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
                           <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                              <div className="p-1">
                                 <Form.Item
                                    label="Яагаад зарлага хийж байгаа"
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                    name={'description'}
                                 >
                                    <TextArea />
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                        <div className="w-full">
                           <Form.List name="expenses">
                              {(fields, { add, remove }) => (
                                 <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                    {fields.map(
                                       ({ key, name, ...restField }) => (
                                          <div className="flex flex-wrap items-center">
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
                                                      filterOption={(
                                                         input,
                                                         option
                                                      ) =>
                                                         option.children.includes(
                                                            input
                                                         )
                                                      }
                                                      filterSort={(
                                                         optionA,
                                                         optionB
                                                      ) =>
                                                         optionA.children
                                                            .toLowerCase()
                                                            .localeCompare(
                                                               optionB.children.toLowerCase()
                                                            )
                                                      }
                                                   >
                                                      {materialList?.map(
                                                         (el, index) => {
                                                            return (
                                                               <Option
                                                                  value={
                                                                     el.m_id
                                                                  }
                                                                  key={index}
                                                               >
                                                                  {el.m_name +
                                                                     '->' +
                                                                     el.countC2 +
                                                                     el.ratecode}
                                                               </Option>
                                                            );
                                                         }
                                                      )}
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
                                             <div className="w-1/12">
                                                <MinusCircleOutlined
                                                   style={{ color: 'red' }}
                                                   onClick={() => remove(name)}
                                                />
                                             </div>
                                          </div>
                                       )
                                    )}
                                    <Form.Item>
                                       <Button
                                          type="dashed"
                                          onClick={() => add()}
                                          block
                                          icon={<PlusOutlined />}
                                       >
                                          Матерал нэмэх
                                       </Button>
                                    </Form.Item>
                                 </div>
                              )}
                           </Form.List>
                        </div>
                     </div>
                  </Form>
               </div>
            </Modal>
         </div>
      </>
   );
}

export default Acting;
