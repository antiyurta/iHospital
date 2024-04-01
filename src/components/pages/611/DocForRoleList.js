import React, { useEffect, useState } from 'react';
import { Button, Card, ConfigProvider, Empty, Form, Modal, Popconfirm, Select, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import EditableTable from './Support/EditableTable';
import mnMN from 'antd/es/locale/mn_MN';
import { ReturnByIdToName } from './Document/Index';

import OrganizationStructureApi from '../../../services/organization/structure';
import OrganizationDocumentOptionApi from '../../../services/organization/documentOption';
import OrganizationDocumentRoleApi from '../../../services/organization/documentRole';

function DocForRoleList() {
   const [form] = Form.useForm();
   const [list, setList] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const [meta, setMeta] = useState({});
   const [options, setOptions] = useState([]);
   const [opMeta, setOpMeta] = useState({});
   const [opSpinner, setOpSpinner] = useState(false);
   const [selectedId, setSelectedId] = useState(Number);
   const [structures, setStructures] = useState([]);
   const [positions, setPositions] = useState([]);
   const [clonedPositions, setClonedPositions] = useState([]);
   const [editMode, setEditMode] = useState(false);
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const getList = async (page, pageSize) => {
      setSpinner(true);
      await OrganizationDocumentRoleApi.getByPageFilter({
         params: {
            page: page,
            limit: pageSize
         }
      })
         .then(({ data: { response } }) => {
            setList(response.data);
            setMeta(response.meta);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const getOptions = async (page, pageSize) => {
      setOpSpinner(true);
      await OrganizationDocumentOptionApi.getByPageFilter({
         params: {
            page: page,
            limit: pageSize
         }
      })
         .then(({ data: { response } }) => {
            setOptions(response.data);
            setOpMeta(response.data);
         })
         .finally(() => {
            setOpSpinner(false);
         });
   };
   const openModal = (state, row) => {
      form.resetFields();
      if (row != null) {
         setSelectedId(row.id);
         selectDepartment(row.departmentIds);
         form.setFieldsValue(row);
      }
      setEditMode(state);
      setIsOpenEditModal(true);
   };
   const getPositions = async () => {
      await OrganizationStructureApi.get({
         params: {
            type: 1
         }
      }).then(({ data: { response } }) => {
         var result = response.data.reduce(function (r, a) {
            r[a.parentId] = r[a.parentId] || [];
            r[a.parentId].push(a);
            return r;
         }, Object.create(null));
         const grouped = Object.entries(result)?.map(([key, value]) => ({
            label: getByIdStructureName(key),
            options: value.map((item) => ({
               label: item.name,
               value: item.id
            }))
         }));
         setPositions(grouped);
         setClonedPositions(response.data);
      });
   };
   const getStructures = async () => {
      await OrganizationStructureApi.get({
         params: {
            type: 2
         }
      })
         .then(({ data: { response } }) => {
            setStructures(response.data);
         })
         .finally(() => {
            getPositions();
         });
   };
   const getByIdStructureName = (id) => {
      const name = structures?.find((e) => e.id === Number(id))?.name;
      return name;
   };
   const selectDepartment = async (depIds) => {
      form.setFieldsValue({
         employeePositionIds: [],
         supervisePositionIds: []
      });
      await OrganizationStructureApi.get({
         params: {
            parentId: depIds.toString(),
            type: 1
         }
      }).then(
         ({
            data: {
               response: { data }
            }
         }) => {
            var result = data.reduce(function (r, a) {
               r[a.parentId] = r[a.parentId] || [];
               r[a.parentId].push(a);
               return r;
            }, Object.create(null));
            const grouped = Object.entries(result)?.map(([key, value]) => ({
               label: getByIdStructureName(key),
               options: value.map((item) => ({
                  label: item.name,
                  value: item.id
               }))
            }));
            setPositions(grouped);
         }
      );
   };
   const getPositionInfo = (positionIds) => (
      <ul className="list-decimal list-inside text-start">
         {positionIds?.map((positionId, index) => {
            const name = clonedPositions?.find((e) => e.id === parseInt(positionId))?.name;
            return <li key={index}>{name}</li>;
         })}
      </ul>
   );
   const onFinish = async (values) => {
      if (editMode) {
         await OrganizationDocumentRoleApi.patch(selectedId, values).then(({ data: { success } }) => {
            if (success) {
               form.resetFields();
               setIsOpenEditModal(false);
            }
         });
      } else {
         await OrganizationDocumentRoleApi.post(values).then(({ data: { success } }) => {
            if (success) {
               form.resetFields();
               setIsOpenEditModal(false);
            }
         });
      }
      getList(1, 20);
   };
   const getDelete = async (id) => {
      await OrganizationDocumentRoleApi.delete(id).then(({ data: { success } }) => {
         if (success) {
            getList(1, 10);
         }
      });
   };
   const getDeleteOption = async (id) => {
      await OrganizationDocumentOptionApi.delete(id).then(({ data: { success } }) => {
         if (success) {
            getOptions(1, 10);
         }
      });
   };
   const columns = [
      {
         title: '№',
         width: 40,
         render: (_, _record, index) => meta.page * meta.limit - (meta.limit - index - 1)
      },
      {
         title: 'Тасаг',
         dataIndex: 'departments',
         render: (departments) => {
            return departments?.map((departments) => departments.name).join('|');
         }
      },
      {
         title: 'Хэрэглэх газар',
         dataIndex: 'usageType',
         render: (usageType) => {
            if (usageType === 'OUT') {
               return 'Амбулатори';
            } else {
               return 'Хэвтэн';
            }
         }
      },
      {
         title: 'Төрөл',
         dataIndex: 'documentType',
         render: (documentType) => {
            if (documentType === 0) {
               return 'Маягт';
            } else if (documentType === 1) {
               return 'Бүртгэл';
            } else if (documentType === 2) {
               return 'Мэдээлэх хуудас';
            } else {
               return 'Зөвшөөрлийн хуудас';
            }
         }
      },
      {
         title: 'Хэн мөрддөг',
         dataIndex: 'employeePositionIds',
         render: (employeePositionIds) => getPositionInfo(employeePositionIds)
      },
      {
         title: 'Хэн хяналт тавих',
         dataIndex: 'supervisePositionIds',
         render: (supervisePositionIds) => getPositionInfo(supervisePositionIds)
      },
      {
         title: 'Маягтууд',
         dataIndex: 'documents',
         render: (documents) => (
            <div className="grid grid-cols-6 gap-1 justify-items-start">
               {documents?.map((document, index) => (
                  <li key={index}>{document.label}</li>
               ))}
            </div>
         )
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
               <div className="grid grid-cols-6 gap-1 justify-items-start">
                  {text?.map((item, index) => {
                     return <div key={index}>{item}</div>;
                  })}
               </div>
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
      getOptions();
   }, []);
   return (
      <div className="w-full overflow-auto h-screen bg-[#f5f6f7] p-3">
         <div className="flex flex-col gap-2">
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
                        onChange: (page, pageSize) => getList(page, pageSize)
                     }}
                  />
               </ConfigProvider>
            </Card>
            <Card bordered={false} className="header-solid max-h-max rounded-md" title="Permission">
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
                  name="structureIds"
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
                     mode="multiple"
                     optionFilterProp="children"
                     filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input?.toLowerCase())
                     }
                     onChange={selectDepartment}
                     options={structures?.map((structure) => ({
                        label: structure.name,
                        value: structure.id
                     }))}
                  />
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
                  <Select
                     options={[
                        {
                           label: 'Амбулатори',
                           value: 'OUT'
                        },
                        {
                           label: 'Хэвтэн',
                           value: 'IN'
                        }
                     ]}
                  />
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
                  <Select
                     options={[
                        {
                           label: 'Маягт',
                           value: 0
                        },
                        {
                           label: 'Бүртгэл',
                           value: 1
                        },
                        {
                           label: 'Мэдээлэх хуудас',
                           value: 2
                        },
                        {
                           label: 'Зөвшөөрлийн хуудас',
                           value: 3
                        }
                     ]}
                  />
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
                  <Select mode="multiple" options={positions} />
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
                  <Select mode="multiple" options={positions} />
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
