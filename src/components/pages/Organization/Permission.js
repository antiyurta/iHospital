import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../features/authReducer';
import UTable from '../../UTable';

import ReferenceMenuServices from '../../../services/reference/menu';
//api
import ReferenceRoleApi from '@ApiServices/reference/role';
import PermissionApi from '@ApiServices/organization/permission';
import { Button, Card, Checkbox, Space, Table, Tree } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import QRCode from 'react-qr-code';

const { DirectoryTree } = Tree;

function Permission() {
   const hospitalId = useSelector(selectCurrentHospitalId);
   const getPermissions = async () => {
      await PermissionApi.get().then(({ data: { response } }) => {
         // console.log(response);
      });
   };
   const getPermission = async (roleId) => {
      await PermissionApi.get({
         params: {
            roleId: roleId
         }
      }).then((response) => {
         // console.log('res', response);
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
         setMenus(response.data);
      });
   };
   const convertTree = (data) => {
      let root = [];
      const cloneData = data.map((item) => ({
         key: item.id,
         title: item.title,
         parentKey: item.parentId,
         isLeaf: !item.isSubMenu
      }));
      const idMapping = cloneData.reduce((acc, el, i) => {
         acc[el.key] = i;
         return acc;
      }, []);
      cloneData?.forEach((el) => {
         if (el.parentKey === null) {
            root.push(el);
            return;
         }
         const parentEl = cloneData?.[idMapping[el.parentKey]];
         parentEl.children = [...(parentEl.children || []), el];
      });
      return root;
   };

   const tree = useMemo(() => {
      const d = convertTree(menus.sort((a, b) => a.position - b.position));
      return d;
   }, [menus]);

   //
   const [indeterminate, setIndeterminate] = useState(true);
   const [checkedList, setCheckedList] = useState([]);
   const [checkAll, setCheckAll] = useState(false);
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
      setIndeterminate(!!list.length && list.length < plainOptions.length);
      setCheckAll(list.length === plainOptions.length);
   };
   const onCheckAllChange = (e) => {
      setCheckedList(e.target.checked ? plainOptions?.map((pO) => pO.value) : []);
      setIndeterminate(false);
      setCheckAll(e.target.checked);
   };
   useEffect(() => {
      getPermissions();
      getRoles();
      getMenus();
   }, []);
   return (
      <>
         <div className="p-3 w-full h-full bg-[#f5f6f7]">
            <div className="grid grid-cols-3 gap-2">
               <Card title="Эрх">
                  <Table
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
                           render: (id) => (
                              <Space>
                                 <Button
                                    icon={<EditOutlined />}
                                    onClick={() => {
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
                  <Card
                     title="Зөвшөөрөл"
                     bodyStyle={{
                        height: 'calc(100vh - 200px)',
                        overflow: 'auto'
                     }}
                  >
                     <Tree
                        showIcon
                        showLine
                        titleRender={(node) => {
                           return (
                              <div className="flex flex-row gap-2 w-full justify-between">
                                 <p>{node.title}</p>
                                 {node.isLeaf ? (
                                    <div>
                                       <Checkbox
                                          indeterminate={indeterminate}
                                          onChange={onCheckAllChange}
                                          checked={checkAll}
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
                                    </div>
                                 ) : null}
                              </div>
                           );
                        }}
                        treeData={tree}
                     />
                  </Card>
               </div>
            </div>
         </div>
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
