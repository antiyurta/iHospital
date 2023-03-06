import {
   CheckOutlined,
   CloseOutlined,
   EditOutlined,
   EyeOutlined
} from '@ant-design/icons';
import {
   Form,
   Button,
   Card,
   Descriptions,
   Input,
   Modal,
   Switch,
   Cascader,
   Select,
   DatePicker,
   Pagination
} from 'antd';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Patch, Post, ScrollRef } from '../../comman';
import Spinner from 'react-bootstrap/Spinner';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
const { Search } = Input;
const { Option } = Select;

function DemoEmployee() {
   const token = useSelector(selectCurrentToken);
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
      setEditMode(true);
      setId(id);
      const response = await Get('organization/employee/' + id, token, config);
      if (response.length != 0) {
         response['dateInEmployment'] = moment(response['dateInEmployment']);
         response['dateOutEmployment'] = moment(response['dateOutEmployment']);
         form.setFieldsValue(response);
         setIsOpenCreateModal(true);
      }
   };
   const onSearch = (value, index) => {
      config.params[index] = value;
      getEmployee(1);
   };
   const getEmployee = async (page) => {
      config.params.limit = 10;
      config.params.page = page;
      const response = await Get('organization/employee', token, config);
      if (response.data.length > 0) {
         setEmployees(response.data);
         setMeta(response.meta);
         setSpinner(true);
      }
      config.params.limit = null;
      config.params.page = null;
   };
   const viewModal = async (id) => {
      const response = await Get('organization/employee/' + id, token, config);
      if (response) {
         setViewEmployee(response);
         setIsOpenViewModal(true);
      }
   };
   const getDepartment = async (value) => {
      config.params.type = value;
      const response = await Get('organization/structure', token, config);
      if (response.data.length != 0) {
         setDepartments(response.data);
      }
      config.params.type = null;
   };
   const getPositions = async () => {
      config.params.type = 1;
      const response = await Get('organization/structure', token, config);
      setPositions(response.data);
      config.params.type = null;
   };
   const selectDepartment = async (value) => {
      config.params.parentId = value;
      config.params.type = 1;
      const response = await Get('organization/structure', token, config);
      setPositions(response.data);
      config.params.parentId = null;
      config.params.type = null;
   };
   const getDegree = async () => {
      config.params.page = null;
      config.params.limit = null;
      const response = await Get('reference/degree', token, config);
      if (response.data.length != 0) {
         setDegrees(response.data);
      }
   };
   const getRoles = async () => {
      config.params.page = null;
      config.params.limit = null;
      const response = await Get('reference/role', token, config);
      if (response.data.length != 0) {
         setRoles(response.data);
      }
   };
   const connectFinance = async (el) => {
      data.clid = el.id;
      data.ccode = el.id?.toString();
      data.cname = el.firstName;
      data.cregister = el.registerNumber;
      data.cdirector = el.lastName;
      data.cemail = el.email;
      data.caddress = el.homeAddress;
      data.cphone = el.phone;
      data.cmobile = el.phoneNo;
      config.params = {};
      const response = await Post(`finance/client`, token, config, data);
      if (response === 201) {
         setTestParam(!testParam);
      }
   };
   const onFinish = async () => {
      form.validateFields().then(async (values) => {
         console.log(values);
         if (editMode) {
            const response = await Patch(
               'organization/employee/' + id,
               token,
               config,
               values
            );
            if (response === 200) {
               getEmployee(1);
               setIsOpenCreateModal(false);
            }
         } else {
            const response = await Post(
               'organization/employee',
               token,
               config,
               values
            );
            if (response === 201) {
               getEmployee(1);
               setIsOpenCreateModal(false);
            }
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
      //
      ScrollRef(scrollRef);
   }, []);
   useEffect(() => {
      getEmployee(1);
      ScrollRef(scrollRef);
   }, [testParam]);

   return (
      <div>
         <div className="flex flex-wrap">
            <div className="w-full">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  title={'Ажилтан'}
                  extra={
                     <Button
                        onClick={showModal}
                        className="bg-sky-700 rounded-md text-white"
                     >
                        Нэмэх
                     </Button>
                  }
               >
                  <div
                     className="table-responsive"
                     id="style-8"
                     ref={scrollRef}
                  >
                     <Table
                        className="ant-border-space"
                        style={{ width: '100%' }}
                     >
                        <thead className="ant-table-thead bg-slate-200">
                           <tr>
                              <th
                                 rowSpan={2}
                                 className="font-bold text-sm align-middle"
                              >
                                 №
                              </th>
                              <th className="font-bold text-sm align-middle">
                                 Овог
                              </th>
                              <th className="font-bold text-sm align-middle">
                                 Нэр
                              </th>
                              <th className="font-bold text-sm align-middle">
                                 Регистр №
                              </th>
                              <th
                                 rowSpan={2}
                                 className="font-bold text-sm align-middle"
                              >
                                 Ажилж байгаа эсэх
                              </th>
                              <th
                                 rowSpan={2}
                                 className="font-bold text-sm align-middle"
                              >
                                 Гэрийн хаяг
                              </th>
                              <th
                                 className="w-3 font-bold text-sm align-middle"
                                 rowSpan={2}
                              >
                                 Үйлдэл
                              </th>
                              <th
                                 className="w-3 font-bold text-sm align-middle"
                                 rowSpan={2}
                              >
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
                                    onSearch={(e) =>
                                       onSearch(e, 'registerNumber')
                                    }
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
                                          {meta.page * meta.limit -
                                             (meta.limit - index - 1)}
                                       </td>
                                       <td className="ant-table-row-cell-break-word">
                                          {employee.lastName}
                                       </td>
                                       <td className="ant-table-row-cell-break-word">
                                          {employee.firstName}
                                       </td>
                                       <td className="ant-table-row-cell-break-word">
                                          {employee.registerNumber}
                                       </td>
                                       <td className="ant-table-row-cell-break-word">
                                          {employee.isWorking ? (
                                             <CheckOutlined className="text-green-600" />
                                          ) : (
                                             <CloseOutlined className="text-red-600" />
                                          )}
                                       </td>
                                       <td className="ant-table-row-cell-break-word">
                                          {employee.homeAddress}
                                       </td>
                                       <td>
                                          <Button
                                             type="link"
                                             onClick={() =>
                                                viewModal(employee.id)
                                             }
                                             title="Харах"
                                             style={{ paddingRight: 5 }}
                                          >
                                             <EyeOutlined />
                                          </Button>
                                          <Button
                                             type="link"
                                             onClick={() =>
                                                editModal(employee.id)
                                             }
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
                                                onClick={() =>
                                                   connectFinance(employee)
                                                }
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
                                    <Spinner
                                       animation="grow"
                                       style={{ color: '#1890ff' }}
                                    />
                                 </td>
                              </tr>
                           )}
                        </tbody>
                     </Table>
                  </div>
                  <div>
                     <Pagination
                        className="pagination"
                        pageSize={10}
                        total={meta.itemCount}
                        onChange={getEmployee}
                     />
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
                  <Descriptions.Item label="Овог">
                     {viewEmployee.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Нэр">
                     {viewEmployee.firstName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Регистр №">
                     {viewEmployee.registerNumber}
                  </Descriptions.Item>
                  <Descriptions.Item label="Тасаг">
                     {viewEmployee.dep?.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Албан тушаал">
                     {viewEmployee.app?.name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Овог">
                     {viewEmployee.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Овог">
                     {viewEmployee.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Овог">
                     {viewEmployee.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Овог">
                     {viewEmployee.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Овог">
                     {viewEmployee.lastName}
                  </Descriptions.Item>
               </Descriptions>
            </div>
         </Modal>
         <Modal
            open={isOpenCreateModal}
            title={editMode ? 'Ажилтан засах' : 'Ажилтан нэмэх'}
            onCancel={() => setIsOpenCreateModal(false)}
            onOk={onFinish}
            width={'80%'}
         >
            <Form form={form}>
               <div className="flex flex-wrap">
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
                     <Form.Item
                        label="Aжиллаж байгаа эсэх"
                        name="isWorking"
                        valuePropName="checked"
                     >
                        <Switch
                           className="bg-sky-700"
                           checkedChildren="Тийм"
                           unCheckedChildren="Үгүй"
                        />
                     </Form.Item>
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="w-full p-1">
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
                        <Select
                           mode="multiple"
                           // onChange={selectDepartment}
                        >
                           {departments.map((department, index) => {
                              return (
                                 <Option key={index} value={department.id}>
                                    {department.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
                     <Form.Item
                        label="Албан Тушаал"
                        name="appId"
                        rules={[
                           {
                              required: true,
                              message: 'Zaawal'
                           }
                        ]}
                     >
                        <Select>
                           {positions.map((position, index) => {
                              return (
                                 <Option key={index} value={position.id}>
                                    {position.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="md:w-1/4 sm:w-1/3 p-1">
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
                  </div>
                  <div className="w-1/2 p-1">
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
                  </div>
                  <div className="w-1/2 p-1">
                     <Form.Item
                        label="Ажлаас гарсан огноо"
                        name="dateOutEmployment"
                     >
                        <DatePicker locale={mnMN} />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
      </div>
   );
}
export default DemoEmployee;
