import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../features/authReducer';
import UTable from '../../UTable';

import ReferenceMenuServices from '../../../services/reference/menu';
//api
import ReferenceRoleApi from '@ApiServices/reference/role';
import {
   Button,
   Card,
   Checkbox,
   Form,
   Input,
   InputNumber,
   Modal,
   Result,
   Select,
   Space,
   Switch,
   Table,
   Tree
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import QRCode from 'react-qr-code';

const { DirectoryTree } = Tree;
//
import { ProtectedRoutes } from '../../../Routes';
//
//api
import PermissionApi from '@ApiServices/organization/permission';
import MenuApi from '@ApiServices/reference/menu';
const { TextArea } = Input;

function Permission() {
   const hospitalId = useSelector(selectCurrentHospitalId);

   const getPermissions = async () => {
      await PermissionApi.get().then(({ data: { response } }) => {
         // console.log(response);
      });
   };

   const [roles, setRoles] = useState([]);
   const [menus, setMenus] = useState([]);
   const getRoles = async () => {
      await ReferenceRoleApi.get({}).then((response) => {
         setRoles(response.data.response.data);
      });
   };
   const getMenus = async () => {
      await ReferenceMenuServices.get({}).then(({ data: { response } }) => {
         // setMenus(response.data);
         console.log('response', response);
      });
   };
   const convertTree = (data) => {
      let root = [];
      const cloneData = data?.map((el) => el);
      const idMapping = data.reduce((acc, el, i) => {
         acc[el.id] = i;
         return acc;
      }, []);
      cloneData.forEach((el) => {
         if (el.parentId === null) {
            root.push(el);
            return;
         }
         const parentEl = cloneData[idMapping[el.parentId]];
         parentEl.menus = [...(parentEl.menus || []), el];
      });
      // let root = [];
      // console.log('data', data);
      // const cloneData = data.map((item) => ({
      //    key: item.id,
      //    title: item.title,
      //    parentKey: item.parentId,
      //    isLeaf: !item.isSubMenu
      // }));
      // const idMapping = cloneData.reduce((acc, el, i) => {
      //    acc[el.key] = i;
      //    return acc;
      // }, []);
      // cloneData?.forEach((el) => {
      //    if (el.parentKey === null) {
      //       root.push(el);
      //       return;
      //    }
      //    const parentEl = cloneData?.[idMapping[el.parentKey]];
      //    parentEl.children = [...(parentEl.children || []), el];
      // });
      console.log('root', root);
      return [];
      return root;
   };

   const tree = useMemo(() => {
      const d = convertTree(menus.sort((a, b) => a.position - b.position));
      return d;
   }, [menus]);

   //endes ehli
   const [menuForm] = Form.useForm();
   const [subMenuForm] = Form.useForm();
   const [selectedRole, setRole] = useState();
   const [isLoading, setLoading] = useState(false);
   const [isOpenModalMenu, setOpenModalMenu] = useState(false);
   const [isOpenModalSubMenu, setOpenModalSubMenu] = useState(false);
   //
   const [indeterminate, setIndeterminate] = useState([]);
   const [checkedList, setCheckedList] = useState([]);
   const [checkAll, setCheckAll] = useState([]);
   const plainOptions = [
      { label: 'Нэмэх', value: 'isCreate' },
      { label: 'Харах', value: 'isRead' },
      { label: 'Засах', value: 'isUpdate' },
      { label: 'Устгах', value: 'isDelete' }
   ];
   const onChange = (list, key) => {
      setCheckedList((prevValue) => ({
         ...prevValue,
         [key]: list
      }));
      setIndeterminate((prevValue) => ({
         ...prevValue,
         [key]: !!list.length && list.length < plainOptions.length
      }));
      setCheckAll((prevValue) => ({
         ...prevValue,
         [key]: list.length === plainOptions.length
      }));
   };
   const onCheckAllChange = (e, key) => {
      setCheckedList((prevValue) => ({
         ...prevValue,
         [key]: e.target.checked ? plainOptions?.map((pO) => pO.value) : []
      }));
      setIndeterminate((prevValue) => ({
         ...prevValue,
         [key]: false
      }));
      setCheckAll((prevValue) => ({
         ...prevValue,
         [key]: e.target.checked
      }));
   };
   const getPermission = async (roleId) => {
      setLoading(true);
      await PermissionApi.get({
         params: {
            roleId: roleId
         }
      })
         .then(({ data: { response } }) => {
            // setMenus(response.data);
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const onFinishMenu = async (values) => {
      await MenuApi.post({
         isSubMenu: true,
         hospitalId: hospitalId,
         name: values.title,
         title: values.title,
         icon: values.icon,
         position: values.position,
         url: 'test'
      });
   };
   useEffect(() => {
      // getPermissions();
      getRoles();
      // getMenus();
   }, []);
   return (
      <>
         <div className="p-3 w-full h-full bg-[#f5f6f7]">
            <div className="grid grid-cols-3 gap-2">
               <Card title="Эрх" extra={<Button type="primary">Нэмэх</Button>}>
                  <Table
                     rowKey="id"
                     onRow={(row) => {
                        if (selectedRole?.id === row.id) {
                           return {
                              className: 'bg-blue-100'
                           };
                        }
                        return;
                     }}
                     columns={[
                        {
                           title: 'Нэр',
                           align: 'left',
                           dataIndex: 'name',
                           width: 200,
                           render: (text) => <p className="text-black">{text}</p>
                        },
                        {
                           title: 'Тайлбар',
                           dataIndex: 'description',
                           width: 200,
                           render: (text) => <p className="text-black">{text}</p>
                        },
                        {
                           title: 'Үйлдэл',
                           dataIndex: 'id',
                           render: (id, row) => (
                              <Space>
                                 <Button
                                    icon={<EditOutlined />}
                                    onClick={() => {
                                       setRole(row);
                                       getPermission(id);
                                    }}
                                 />
                                 <Button icon={<DeleteOutlined />} />
                              </Space>
                           )
                        }
                     ]}
                     scroll={{
                        y: 600
                     }}
                     dataSource={roles}
                     pagination={false}
                  />
               </Card>
               <div className="col-span-2">
                  <div className="flex flex-col gap-2">
                     <div className="flex flex-row gap-2">
                        <Button
                           onClick={() => {
                              setOpenModalMenu(true);
                           }}
                        >
                           Дэд цэс нэмэх
                        </Button>
                        <Button
                           onClick={() => {
                              setOpenModalSubMenu(true);
                           }}
                        >
                           Туслах цэс нэмэх
                        </Button>
                     </div>
                     <Card
                        loading={isLoading}
                        title="Зөвшөөрөл"
                        bodyStyle={{
                           height: 'calc(100vh - 200px)',
                           overflow: 'auto'
                        }}
                        extra={
                           <Button
                              type="primary"
                              onClick={() => {
                                 console.log('selected', checkedList);
                              }}
                           >
                              Хадгалах
                           </Button>
                        }
                     >
                        {selectedRole?.id ? (
                           <Tree
                              showIcon
                              showLine
                              titleRender={(node) => {
                                 return (
                                    <div className="flex flex-row gap-2 w-full justify-between items-center">
                                       <p>{node.title}</p>
                                       {node.isLeaf ? (
                                          <div>
                                             <Checkbox
                                                indeterminate={indeterminate[node.key]}
                                                onChange={(e) => {
                                                   onCheckAllChange(e, node.key);
                                                }}
                                                checked={checkAll[node.key]}
                                             >
                                                Бүгд
                                             </Checkbox>
                                             <Checkbox.Group
                                                value={checkedList[node.key]}
                                                options={plainOptions}
                                                onChange={(values) => {
                                                   onChange(values, node.key);
                                                }}
                                             />
                                             <Button danger icon={<DeleteOutlined />} />
                                          </div>
                                       ) : null}
                                    </div>
                                 );
                              }}
                              treeData={tree}
                           />
                        ) : (
                           <Result status={404} />
                        )}
                     </Card>
                  </div>
               </div>
            </div>
         </div>
         <Modal
            title="Туслах цэс нэмэх"
            open={isOpenModalSubMenu}
            onCancel={() => {
               setOpenModalSubMenu(false);
            }}
            onOk={() => {
               subMenuForm.validateFields().then(onFinishMenu);
            }}
         >
            <Form form={subMenuForm} layout="vertical">
               <Form.Item label="Дэд цэс" name="parentId">
                  <Select />
               </Form.Item>
               <Form.Item label="Байрлал" name="position">
                  <InputNumber />
               </Form.Item>
               <Form.Item label="Зураг" name="icon">
                  <TextArea />
               </Form.Item>
               <Form.Item label="title" name="title">
                  <Input />
               </Form.Item>
               <Form.Item label="цэс" name="url">
                  <Select
                     options={ProtectedRoutes?.map((route) => ({
                        label: route.mnName,
                        value: route.url
                     }))}
                  />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title="Дэд цэс нэмэх"
            open={isOpenModalMenu}
            onCancel={() => {
               setOpenModalMenu(false);
            }}
            onOk={() => {
               menuForm.validateFields().then(onFinishMenu);
            }}
         >
            <Form form={menuForm} layout="vertical">
               <Form.Item label="Байрлал" name="position">
                  <InputNumber />
               </Form.Item>
               <Form.Item label="Зураг" name="icon">
                  <TextArea />
               </Form.Item>
               <Form.Item label="title" name="title">
                  <Input />
               </Form.Item>
            </Form>
         </Modal>
         {/* <div className="flex flex-wrap">
            <div className="w-full">
               <UTable
                  title={'Permission'}
                  url={'organization/permission'}
                  column={column}
                  initialValues={{
                     hospitalId: hospitalId
                  }}
                  isCreate={true}
                  isRead={true}
                  isUpdate={true}
                  isDelete={true}
                  width="50%"
               />
            </div>
         </div> */}
      </>
   );
}
export default Permission;
