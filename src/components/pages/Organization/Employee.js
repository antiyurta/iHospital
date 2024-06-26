import { CheckOutlined, CloseOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Form, Button, Card, Descriptions, Input, Modal, Switch, Select, DatePicker, Pagination, Divider } from 'antd';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { ScrollRef } from '../../common';
import Spinner from 'react-bootstrap/Spinner';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
//api
import RoleApi from '@ApiServices/reference/role';
import DegreeApi from '@ApiServices/reference/degree';
import EmployeeApi from '@ApiServices/organization/employee';
import StructureApi from '@ApiServices/organization/structure';
//defults
const { Search } = Input;
const { Option, OptGroup } = Select;

function Employee() {
   const config = {
      headers: {},
      params: {}
   };
   const [form] = Form.useForm();
   //
   const [data, setData] = useState({});
   const [testParam, setTestParam] = useState(true);
   const [employees, setEmployees] = useState([]);
   const [meta, setMeta] = useState({});
   const [spinner, setSpinner] = useState(false);
   const [departments, setDepartments] = useState([]);
   const [positions, setPositions] = useState([]);
   const [degrees, setDegrees] = useState([]);
   const [roles, setRoles] = useState([]);
   const [id, setId] = useState();
   const [mobile, setMoblie] = useState([]);
   //
   const [isOpenViewModal, setIsOpenViewModal] = useState(false);
   const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
   const [viewEmployee, setViewEmployee] = useState({});
   const [editMode, setEditMode] = useState(false);
   //
   //
   const scrollRef = useRef();
   //
   const showModal = () => {
      setEditMode(false);
      form.resetFields();
      setIsOpenCreateModal(true);
   };
   const editModal = async (id) => {
      form.resetFields();
      setEditMode(true);
      setId(id);
      await EmployeeApi.getEmployeeById(id).then(({ data: { response } }) => {
         response['dateInEmployment'] = moment(response['dateInEmployment']);
         response['dateOutEmployment'] = moment(response['dateOutEmployment']);
         form.setFieldsValue(response);
         setIsOpenCreateModal(true);
      });
   };
   const onSearch = (value, index) => {
      config.params[index] = value;
      getEmployee(1);
   };
   const getEmployee = async (page) => {
      await EmployeeApi.getEmployee({
         params: {
            page: page,
            limit: 10
         }
      }).then(({ data: { response } }) => {
         setEmployees(response.data);
         setMeta(response.meta);
         setSpinner(true);
      });
   };
   const viewModal = async (id) => {
      await EmployeeApi.getEmployeeById(id).then(({ data: { response } }) => {
         setViewEmployee(response);
         setIsOpenViewModal(true);
      });
   };
   const getDepartment = async (value) => {
      await StructureApi.get({
         params: {
            type: value
         }
      }).then(({ data: { response } }) => {
         setDepartments(response.data);
      });
   };
   const getPositions = async () => {
      await StructureApi.get({
         params: {
            type: 1
         }
      }).then(({ data: { response } }) => {
         setPositions(response.data);
      });
   };
   const selectDepartment = async (value) => {
      await StructureApi.get({
         params: {
            parentId: value?.toString(),
            type: 1
         }
      }).then(({ data: { response } }) => {
         var result = response.data.reduce(function (r, a) {
            r[a.parentId] = r[a.parentId] || [];
            r[a.parentId].push(a);
            return r;
         }, Object.create(null));
         setPositions(result);
      });
   };
   const getDegree = async () => {
      await DegreeApi.get().then(({ data: { response } }) => {
         setDegrees(response.data);
      });
   };
   const getRoles = async () => {
      await RoleApi.get().then(({ data: { response } }) => {
         setRoles(response.data);
      });
   };
   const getByIdStructureName = (parentId) => {
      return departments?.find((e) => e.id === parseInt(parentId))?.name;
   };

   const onFinish = async () => {
      form.validateFields().then(async (values) => {
         console.log(values);
         if (editMode) {
            await EmployeeApi.patchEmployee(id, values).then(() => {
               getEmployee(1);
               setIsOpenCreateModal(false);
            });
         } else {
            await EmployeeApi.postEmployee(values).then(() => {
               getEmployee(1);
               setIsOpenCreateModal(false);
            });
         }
      });
   };
   //
   useEffect(() => {
      getEmployee(1);
      getDegree();
      getRoles();
      //
      getPositions();
      // getMoblieStructure();
      //
      ScrollRef(scrollRef);
   }, []);
   useEffect(() => {
      getEmployee(1);
      ScrollRef(scrollRef);
   }, [testParam]);

   return (
      <>
         <div className="p-3 bg-[#f5f6f7] w-full flex flex-col">
            <div className="w-full">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  title={'Ажилтан'}
                  extra={
                     <Button onClick={showModal} className="bg-sky-700 rounded-md text-white">
                        Нэмэх
                     </Button>
                  }
               >
                  <div className="table-responsive" id="style-8" ref={scrollRef}>
                     <Table className="ant-border-space" style={{ width: '100%' }}>
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th rowSpan={2} className="font-bold text-sm align-middle">
                                 №
                              </th>
                              <th className="font-bold text-sm align-middle">Овог</th>
                              <th className="font-bold text-sm align-middle">Нэр</th>
                              <th className="font-bold text-sm align-middle">Регистр №</th>
                              <th rowSpan={2} className="font-bold text-sm align-middle whitespace-pre-line">
                                 Ажиллаж байгаа эсэх
                              </th>
                              <th rowSpan={2} className="font-bold text-sm align-middle">
                                 Гэрийн хаяг
                              </th>
                              <th className="w-3 font-bold text-sm align-middle" rowSpan={2}>
                                 Үйлдэл
                              </th>
                              <th className="w-3 font-bold text-sm align-middle" rowSpan={2}>
                                 Санхүү
                              </th>
                           </tr>
                           <tr>
                              <td>
                                 <Search
                                    placeholder={'Хайх'}
                                    allowClear
                                    onSearch={(e) => onSearch(e, 'lastName')}
                                    enterButton={'Хайх'}
                                 />
                              </td>
                              <td>
                                 <Search
                                    placeholder={'Хайх'}
                                    allowClear
                                    onSearch={(e) => onSearch(e, 'firstName')}
                                    enterButton={'Хайх'}
                                 />
                              </td>
                              <td>
                                 <Search
                                    placeholder={'Хайх'}
                                    allowClear
                                    onSearch={(e) => onSearch(e, 'registerNumber')}
                                    enterButton={'Хайх'}
                                 />
                              </td>
                           </tr>
                        </thead>
                        <tbody className="ant-table-tbody p-0">
                           {spinner ? (
                              employees.map((employee, index) => {
                                 return (
                                    <tr key={index}>
                                       <td className="ant-table-row-cell-break-word">
                                          {meta.page * meta.limit - (meta.limit - index - 1)}
                                       </td>
                                       <td className="ant-table-row-cell-break-word">{employee.lastName}</td>
                                       <td className="ant-table-row-cell-break-word">{employee.firstName}</td>
                                       <td className="ant-table-row-cell-break-word">{employee.registerNumber}</td>
                                       <td className="ant-table-row-cell-break-word">
                                          {employee.isWorking ? (
                                             <CheckOutlined className="text-green-600" />
                                          ) : (
                                             <CloseOutlined className="text-red-600" />
                                          )}
                                       </td>
                                       <td className="ant-table-row-cell-break-word">{employee.homeAddress}</td>
                                       <td>
                                          <Button
                                             type="link"
                                             onClick={() => viewModal(employee.id)}
                                             title="Харах"
                                             style={{ paddingRight: 5 }}
                                          >
                                             <EyeOutlined />
                                          </Button>
                                          <Button
                                             type="link"
                                             onClick={() => editModal(employee.id)}
                                             title="Засах"
                                             style={{
                                                paddingRight: 5,
                                                paddingLeft: 5
                                             }}
                                          >
                                             <EditOutlined />
                                          </Button>
                                       </td>
                                       <td className="p-2">
                                          {employee.isStorage ? (
                                             <CheckOutlined className="text-green-600" />
                                          ) : (
                                             <Button
                                                // onClick={() => connectFinance(employee)}
                                                type="text"
                                                className="text-sky-500 font-semibold"
                                             >
                                                Холбох
                                             </Button>
                                          )}
                                       </td>
                                    </tr>
                                 );
                              })
                           ) : (
                              <tr>
                                 <td
                                    colSpan={7}
                                    size="lg"
                                    style={{
                                       backgroundColor: 'white',
                                       textAlign: 'center'
                                    }}
                                 >
                                    <Spinner animation="grow" style={{ color: '#1890ff' }} />
                                 </td>
                              </tr>
                           )}
                        </tbody>
                     </Table>
                  </div>
                  <div>
                     <Pagination className="pagination" pageSize={10} total={meta.itemCount} onChange={getEmployee} />
                  </div>
               </Card>
            </div>
         </div>
         <Modal
            open={isOpenViewModal}
            closable={true}
            onCancel={() => setIsOpenViewModal(false)}
            width={'80%'}
            footer={null}
         >
            <div className="pt-4">
               <Descriptions bordered>
                  <Descriptions.Item label="Овог">{viewEmployee.lastName}</Descriptions.Item>
                  <Descriptions.Item label="Нэр">{viewEmployee.firstName}</Descriptions.Item>
                  <Descriptions.Item label="Регистр №">{viewEmployee.registerNumber}</Descriptions.Item>
                  <Descriptions.Item label="Тасаг">{viewEmployee.dep?.name}</Descriptions.Item>
                  <Descriptions.Item label="Албан тушаал">{viewEmployee.app?.name}</Descriptions.Item>
                  <Descriptions.Item label="Овог">{viewEmployee.lastName}</Descriptions.Item>
                  <Descriptions.Item label="Овог">{viewEmployee.lastName}</Descriptions.Item>
                  <Descriptions.Item label="Овог">{viewEmployee.lastName}</Descriptions.Item>
                  <Descriptions.Item label="Овог">{viewEmployee.lastName}</Descriptions.Item>
                  <Descriptions.Item label="Овог">{viewEmployee.lastName}</Descriptions.Item>
               </Descriptions>
            </div>
         </Modal>
         <Modal
            open={isOpenCreateModal}
            title={editMode ? 'Ажилтан засах' : 'Ажилтан нэмэх'}
            onCancel={() => setIsOpenCreateModal(false)}
            onOk={onFinish}
            okText="Хадгалах"
            cancelText="Болих"
            width={500}
         >
            <Form form={form} layout="vertical">
               <Divider>Ерөнхий мэдээлэл</Divider>
               <div className="rounded-md bg-[#F3F4F6] p-2 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                     <Form.Item
                        label="Системд нэвтрэх нэр:"
                        name="username"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Input placeholder="Системд нэвтрэх нэр" />
                     </Form.Item>
                     <Form.Item
                        label="Овог"
                        name="lastName"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Input placeholder="Овог" />
                     </Form.Item>
                     <Form.Item
                        label="Нэр"
                        name="firstName"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Input placeholder="Нэр" />
                     </Form.Item>
                     <Form.Item
                        label="Регистр №"
                        name="registerNumber"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Input placeholder="Регистр №" />
                     </Form.Item>
                     <Form.Item
                        label="И-мэйл"
                        name="email"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Input placeholder="И-мэйл" />
                     </Form.Item>
                     <Form.Item
                        label="Утасны дугаар"
                        name="phoneNo"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Input placeholder="Утасны дугаар" />
                     </Form.Item>
                     <Form.Item label="Aжиллаж байгаа эсэх" name="isWorking" valuePropName="checked">
                        <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                     </Form.Item>
                  </div>
                  <Form.Item
                     label="Гэрийн хаяг"
                     name="homeAddress"
                     rules={[
                        {
                           required: true,
                           message: 'Zaawal'
                        }
                     ]}
                  >
                     <Input placeholder="Гэрийн хаяг" />
                  </Form.Item>
               </div>
               <Divider>Алба</Divider>
               <div className="rounded-md bg-[#F3F4F6] p-2 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                     <Form.Item
                        label="Тасаг"
                        name="type"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Select onChange={getDepartment}>
                           <Option value={2}>Тасаг</Option>
                           <Option value={0}>Харьяалал</Option>
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Тасаг(Mobile)"
                        name="subOrganizationId"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Select>
                           <Option value={1}>TEST</Option>
                           {mobile?.map((item, index) => {
                              return (
                                 <Option key={index} value={item.id}>
                                    {item.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Aлбан нэгж"
                        name="depIds"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Select mode="multiple" onChange={selectDepartment}>
                           {departments.map((department, index) => {
                              return (
                                 <Option key={index} value={department.id}>
                                    {department.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Албан Тушаал"
                        name="appIds"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Select mode="multiple">
                           {Object.entries(positions)?.map(([key, value], index) => {
                              return (
                                 <OptGroup key={index} label={getByIdStructureName(key)}>
                                    {value?.length != undefined &&
                                       value?.map((option, idx) => {
                                          return (
                                             <Option key={`${index}-${idx}`} value={option.id}>
                                                {option.name}
                                             </Option>
                                          );
                                       })}
                                 </OptGroup>
                              );
                           })}
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Зэрэг"
                        name="degreeId"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Select>
                           {degrees.map((degree, index) => {
                              return (
                                 <Option key={index} value={degree.id}>
                                    {degree.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Эрх үүрэг"
                        name="roleId"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Select>
                           {roles.map((role, index) => {
                              return (
                                 <Option key={index} value={role.id}>
                                    {role.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                     <Form.Item
                        label="Ажилд орсон огноо"
                        name="dateInEmployment"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <DatePicker locale={mnMN} />
                     </Form.Item>
                     <Form.Item label="Ажлаас гарсан огноо" name="dateOutEmployment">
                        <DatePicker locale={mnMN} />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default Employee;
