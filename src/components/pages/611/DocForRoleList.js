import React, { useEffect, useState } from 'react';
import { Button, Card, ConfigProvider, Empty, Form, Modal, Popconfirm, Select, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Delete, Get, Patch, Post } from '../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import EditableTable from './Support/EditableTable';
import mnMN from 'antd/es/locale/mn_MN';
import { ReturnAll, ReturnByIdToName, ReturnDetails } from './Document/Index';
import jwtInterceopter from '../../jwtInterceopter';
const { Option } = Select;

function DocForRoleList() {
   const [form] = Form.useForm();
   const token = useSelector(selectCurrentToken);
   //
   const [list, setList] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const [meta, setMeta] = useState({});
   //
   const [options, setOptions] = useState([]);
   const [opMeta, setOpMeta] = useState({});
   const [opSpinner, setOpSpinner] = useState(false);
   //
   const [selectedId, setSelectedId] = useState(Number);
   const [structures, setStructures] = useState([]);
   const [positions, setPositions] = useState([]);
   const [clonedPositions, setClonedPositions] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const getList = async (page, pageSize) => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize
         }
      };
      const response = await Get('organization/document-role', token, conf);
      setList(response.data);
      setMeta(response.meta);
      setSpinner(false);
   };
   const getOptions = async (page, pageSize) => {
      setOpSpinner(true);
      const conf = {
         headers: {},
         params: {
            page: page,
            limit: pageSize
         }
      };
      await jwtInterceopter
         .get('organization/document-option', conf)
         .then((response) => {
            console.log(response);
            setOptions(response.data.response.data);
            setOpMeta(response.data.response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setOpSpinner(false);
         });
   };
   const openModal = (state, row) => {
      form.resetFields();
      if (row != null) {
         setSelectedId(row.id);
         form.setFieldsValue(row);
      }
      setEditMode(state);
      setIsOpenEditModal(true);
   };
   const getPositions = async () => {
      const conf = {
         headers: {},
         params: {
            type: 1
         }
      };
      const response = await Get('organization/structure', token, conf);
      setPositions(response.data);
      setClonedPositions(response.data);
   };
   const getStructures = async () => {
      const conf = {
         headers: {},
         params: {
            types: '0,2'
         }
      };
      const response = await Get('organization/structure', token, conf);
      setStructures(response.data);
   };
   const getByIdStructureName = (parentId) => {
      const name = structures?.find((e) => e.id === parseInt(parentId))?.name;
      return name;
   };
   const selectDepartment = async (value) => {
      const conf = {
         headers: {},
         params: {
            parentId: value,
            type: 1
         }
      };
      form.setFieldsValue({
         employeePositionIds: [],
         supervisePositionIds: []
      });
      const response = await Get('organization/structure', token, conf);
      setPositions(response.data);
   };
   const getPositionInfo = (positionIds) => {
      return (
         <ul className="list-decimal list-inside text-start">
            {positionIds?.map((positionId, index) => {
               const name = clonedPositions?.find((e) => e.id === parseInt(positionId))?.name;
               return <li key={index}>{name}</li>;
            })}
         </ul>
      );
   };
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      if (editMode) {
         const response = await Patch('organization/document-role/' + selectedId, token, conf, values);
         if (response === 200) {
            form.resetFields();
            setIsOpenEditModal(false);
         }
      } else {
         const response = await Post('organization/document-role', token, conf, values);
         if (response === 201) {
            form.resetFields();
            setIsOpenEditModal(false);
         }
      }
      getList(1, 20);
   };
   const getDelete = async (id) => {
      const conf = {
         headers: {},
         params: {}
      };
      await Delete('organization/document-role/' + id, token, conf);
      getList(1, 10);
   };
   const getDeleteOption = async (id) => {
      const conf = {
         headers: {},
         params: {}
      };
      await Delete('organization/document-option/' + id, token, conf);
      getOptions(1, 10);
   };
   const columns = [
      {
         title: '№',
         width: 40,
         render: (_, _record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         }
      },
      {
         title: 'Тасаг',
         dataIndex: 'structureId',
         render: (text) => {
            return getByIdStructureName(text);
         }
      },
      {
         title: 'Хэрэглэх газар',
         dataIndex: 'usageType',
         render: (text) => {
            if (text === 'OUT') {
               return 'Амбулатори';
            } else {
               return 'Хэвтэн';
            }
         }
      },
      {
         title: 'Төрөл',
         dataIndex: 'documentType',
         render: (text) => {
            if (text === 0) {
               return 'Маягт';
            } else if (text === 1) {
               return 'Бүртгэл';
            } else if (text === 2) {
               return 'Мэдээлэх хуудас';
            } else {
               return 'Зөвшөөрлийн хуудас';
            }
         }
      },
      {
         title: 'Хэн мөрддөг',
         dataIndex: 'employeePositionIds',
         render: (text) => {
            return getPositionInfo(text);
         }
      },
      {
         title: 'Хэн хяналт тавих',
         dataIndex: 'supervisePositionIds',
         render: (text) => {
            return getPositionInfo(text);
         }
      },
      {
         title: 'Маягтууд',
         dataIndex: 'documents',
         render: (documents) => {
            return (
               <ul className="mx-[2px] list-decimal list-inside text-start">
                  {documents?.map((document, index) => {
                     return <li key={index}>{document.label}</li>;
                  })}
               </ul>
            );
         }
      },
      {
         title: 'Үйлдэл',
         width: 40,
         render: (_text, row) => {
            return (
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     gap: 6
                  }}
               >
                  <Button onClick={() => openModal(true, row)} icon={<EditOutlined />} shape="circle" />
                  <Popconfirm
                     title="Та устгахдаа итгэлтэй байна уу?"
                     okText="Тийм"
                     cancelText="Үгүй"
                     onConfirm={() => getDelete(row.id)}
                  >
                     <Button
                        icon={<DeleteOutlined />}
                        shape="circle"
                        type="danger"
                        style={{
                           backgroundColor: 'red'
                        }}
                     />
                  </Popconfirm>
               </div>
            );
         }
      }
   ];
   const columnsOption = [
      {
         title: 'Тасаг',
         dataIndex: ['structure', 'name']
      },
      {
         title: 'Хэн',
         dataIndex: 'employeePositionId',
         render: (text) => {
            return getPositionInfo([text]);
         }
      },
      {
         title: 'Маягт',
         dataIndex: 'documentValue',
         render: (text) => {
            return ReturnByIdToName(text);
         }
      },
      {
         title: 'Бөглөх асуумж',
         dataIndex: 'formOptionIds',
         render: (text) => {
            return (
               <ul>
                  {text?.map((item, index) => {
                     return <li key={index}>{item}</li>;
                  })}
               </ul>
            );
         }
      },
      {
         title: 'Үйлдэл',
         width: 40,
         render: (_text, row) => {
            return (
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     gap: 6
                  }}
               >
                  <Popconfirm
                     title="Та устгахдаа итгэлтэй байна уу?"
                     okText="Тийм"
                     cancelText="Үгүй"
                     onConfirm={() => getDeleteOption(row.id)}
                  >
                     <Button
                        icon={<DeleteOutlined />}
                        shape="circle"
                        type="danger"
                        style={{
                           backgroundColor: 'red'
                        }}
                     />
                  </Popconfirm>
               </div>
            );
         }
      }
   ];
   useEffect(() => {
      getList(1, 20);
      getStructures();
      getPositions();
      getOptions();
   }, []);
   return (
      <div>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 12
            }}
         >
            <Card
               bordered={false}
               className="header-solid max-h-max rounded-md"
               title="Маягтын тохируулга"
               extra={
                  <Button type="primary" onClick={() => openModal(false, null)}>
                     Нэмэх
                  </Button>
               }
            >
               <ConfigProvider locale={mnMN}>
                  <Table
                     rowKey={'id'}
                     bordered
                     size="small"
                     columns={columns}
                     dataSource={list}
                     scroll={{
                        x: 1500
                     }}
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     loading={{
                        spinning: spinner,
                        tip: 'Уншиж байна...'
                     }}
                     pagination={{
                        position: ['topCenter', 'bottomCenter'],
                        size: 'small',
                        current: meta.page,
                        total: meta.itemCount,
                        showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                        pageSize: meta.limit,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showQuickJumper: true,
                        onChange: (page, pageSize) => getList(page, pageSize, pValue, pIndex)
                     }}
                  />
               </ConfigProvider>
            </Card>
            <Card bordered={false} className="header-solid max-h-max rounded-md" title="asda">
               <ConfigProvider locale={mnMN}>
                  <Table
                     rowKey={'id'}
                     bordered
                     size="small"
                     columns={columnsOption}
                     dataSource={options}
                     scroll={{
                        x: 1500
                     }}
                     locale={{ emptyText: <Empty description={'Хоосон'} /> }}
                     loading={{
                        spinning: opSpinner,
                        tip: 'Уншиж байна...'
                     }}
                     pagination={{
                        position: ['topCenter', 'bottomCenter'],
                        size: 'small',
                        current: opMeta.page,
                        total: opMeta.itemCount,
                        showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                        pageSize: opMeta.limit,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showQuickJumper: true,
                        onChange: (page, pageSize) => getOptions(page, pageSize)
                     }}
                  />
               </ConfigProvider>
            </Card>
         </div>
         <Modal
            title={!editMode ? 'Нэмэх' : 'Засах'}
            open={isOpenEditModal}
            onCancel={() => setIsOpenEditModal(false)}
            onOk={() =>
               form.validateFields().then((values) => {
                  onFinish(values);
               })
            }
            okText="Хадгалах"
            cancelText="Болих"
         >
            <Form form={form} layout="vertical">
               <Form.Item
                  label="Тасаг сонгох"
                  name="structureId"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select
                     showSearch
                     allowClear
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input?.toLowerCase())
                     }
                     onSelect={(e) => selectDepartment(e)}
                  >
                     {structures?.map((structure, index) => {
                        return (
                           <Option key={index} value={structure.id}>
                              {structure?.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item
                  label="Ашиглах газар"
                  name="usageType"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select>
                     <Option value={'OUT'}>Амбулатори</Option>
                     <Option value={'IN'}>Хэвтэн</Option>
                  </Select>
               </Form.Item>
               <Form.Item
                  label="Маягтын төрөл"
                  name="documentType"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select>
                     <Option value={0}>Маягт</Option>
                     <Option value={1}>Бүртгэл</Option>
                     <Option value={2}>Мэдээлэх хуудас</Option>
                     <Option value={3}>Зөвшөөрлийн хуудас</Option>
                  </Select>
               </Form.Item>
               <Form.Item
                  label="Хэн мөрдөх"
                  name="employeePositionIds"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select mode="multiple">
                     {positions.map((option, idx) => {
                        return (
                           <Option key={idx} value={option.id}>
                              {option.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item
                  label="Хэн хяналт тавих"
                  name="supervisePositionIds"
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <Select mode="multiple">
                     {positions?.map((option, idx) => {
                        return (
                           <Option key={idx} value={option.id}>
                              {option.name}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.List name="documents">
                  {(documents, { add, remove }) => (
                     <EditableTable form={form} documents={documents} positions={positions} add={add} remove={remove} />
                  )}
               </Form.List>
            </Form>
         </Modal>
      </div>
   );
}
export default DocForRoleList;
