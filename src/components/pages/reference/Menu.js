import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../features/authReducer';
import {
   Button,
   Card,
   Checkbox,
   Form,
   Input,
   InputNumber,
   Modal,
   Pagination,
   Popconfirm,
   Select,
   Switch,
   Table
} from 'antd';
// import { Table } from 'react-bootstrap';
import {
   DeleteOutlined,
   EditOutlined,
   PlusOutlined,
   CloseOutlined,
   MinusOutlined,
   SaveOutlined
} from '@ant-design/icons';

import { PublicRoutes, ProtectedRoutes } from '../../../Routes';

import MenuService from '../../../services/reference/menu';

const { Option } = Select;
const { TextArea } = Input;

function Menu() {
   let Routes = [...PublicRoutes, ...ProtectedRoutes];
   const hospitalId = useSelector(selectCurrentHospitalId);
   const [subForm] = Form.useForm();
   const [form] = Form.useForm();
   const [isOpenModalSub, setIsOpenModalSub] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [editModeSub, setEditModeSub] = useState(false);
   const [id, setId] = useState([]);
   const [isSubMenu, setIsSubMenu] = useState(false);
   const [allMenus, setAllMenus] = useState([]);
   const [menus, setMenus] = useState([]);
   const [isSubMenus, setIsSubMenus] = useState([]);
   const [meta, setMeta] = useState([]);
   //
   const [idParent, setIdParent] = useState(undefined);
   //
   const showModal = () => {
      form.resetFields();
      setIsOpenModal(true);
      setEditMode(false);
   };
   const showModalSub = () => {
      subForm.resetFields();
      setIsOpenModalSub(true);
   };
   const generateData = (data) => {
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
      setMenus(root);
      console.log(root);
   };
   const getMenus = async (page, pageSize) => {
      await MenuService.get({
         params: { page: page, limit: pageSize }
      }).then((response) => {
         generateData(response.data.response.data);
         setAllMenus(response.data.response.data);
         // setMeta(response.data.response.meta);
      });
   };

   const getIsSubMenu = async () => {
      await MenuService.get({
         params: {
            isSubMenu: true
         }
      }).then((response) => {
         setIsSubMenus(response.data.response.data);
      });
   };
   const onFinishSub = async (values) => {
      const data = {
         isSubMenu: true,
         hospitalId: hospitalId,
         name: values.name,
         title: values.name,
         url: '/'
      };
      await MenuService.post(data)
         .then((response) => {
            if (response.data.success) {
            }
         })
         .finally(() => {
            getMenus();
         });
   };
   const onFinish = async (values) => {
      if (editMode) {
         await MenuService.patch(id, values)
            .then((response) => {
               if (response.data.success) {
                  setIsOpenModal(false);
               }
            })
            .finally(() => {
               getMenus();
            });
      } else {
         const route = Routes.find((route) => route.url === values.url);
         var data = {
            hospitalId: hospitalId,
            position: values.position,
            icon: values.icon,
            parentId: values.parentId,
            isSubMenu: values.isSubMenu,
            url: route.url,
            title: route.mnName,
            name: route.name
         };
         await MenuService.post(data)
            .then((response) => {
               if (response.data.success) {
                  setIsOpenModal(false);
               }
            })
            .finally(() => {
               getMenus();
            });
      }
   };
   const deleteModal = (id) => {
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан тохиолдолд дахин сэргээгдэхгүй болно</div>,
         async onOk() {
            await MenuService.remove(id);
            getMenus();
         }
      });
   };

   const editModal = async (id) => {
      setEditMode(true);
      setId(id);
      await MenuService.getShow(id).then((response) => {
         if (response.data.success) {
            form.setFieldsValue(response.data.response);
            setIsOpenModal(true);
         }
      });
   };

   useEffect(() => {
      getMenus(1, 10);
      getIsSubMenu();
   }, []);

   const EditableUsersTable = (props) => {
      const { menus, add, remove } = props;
      const [isNewMenu, setNewMenu] = useState(false);
      const [editingIndex, setEditingIndex] = useState(undefined);
      const onSave = async () => {
         if (editModeSub) {
            subForm
               .validateFields([['menus', editingIndex, 'url']])
               .then(async () => {
                  const currentMenuUrl = subForm.getFieldValue(['menus', editingIndex, 'url']);
                  const currentIcon = subForm.getFieldValue(['menus', editingIndex, 'icon']);
                  if (isNewMenu) {
                     var data = {
                        hospitalId: hospitalId,
                        icon: currentIcon,
                        parentId: idParent,
                        isSubMenu: false,
                        url: currentMenuUrl,
                        title: Routes.find((route) => route.url === currentMenuUrl)?.mnName,
                        name: Routes.find((route) => route.url === currentMenuUrl)?.name
                     };
                     await MenuService.post(data).then((response) => {
                        if (response.data.success) {
                           getMenus(1, 10);
                        }
                     });
                  } else {
                     var data = {
                        icon: currentIcon,
                        url: currentMenuUrl,
                        title: Routes.find((route) => route.url === currentMenuUrl)?.mnName,
                        name: Routes.find((route) => route.url === currentMenuUrl)?.name
                     };
                     const childId = subForm.getFieldValue(['menus', editingIndex, 'id']);
                     await MenuService.patch(childId, data).then((response) => {
                        console.log(response);
                        if (response.data.success) {
                           getMenus(1, 10);
                        }
                     });
                  }

                  setNewMenu(false);
                  setEditingIndex(undefined);
               })
               .catch((error) => {
                  error.errorFields?.map((errorMsg) => {
                     message.error(errorMsg.errors[0]);
                  });
                  return false;
               });
         }
      };
      const onCancel = (index) => {
         if (isNewMenu) {
            remove(index);
         } else {
            form.resetFields([['menus', index, 'url']]);
         }
         setNewMenu(false);
         setEditingIndex(undefined);
      };
      const removeMenu = async (index) => {
         const childId = subForm.getFieldValue(['menus', index, 'id']);
         await MenuService.remove(childId).then((response) => {
            if (response.data.success) {
               remove(index);
               getMenus(1, 10);
            }
         });
      };
      const addMenu = () => {
         add();
         setEditingIndex(menus.length);
         setNewMenu(true);
      };
      return (
         <Table
            bordered
            columns={[
               {
                  width: 50,
                  title: 'id',
                  dataIndex: 'id',
                  render: (text, row, index) => {
                     return (
                        <Form.Item name={[index, 'id']}>
                           <Input disabled />
                        </Form.Item>
                     );
                  }
               },
               {
                  title: 'Меню',
                  dataIndex: 'url',
                  render: (text, row, index) => {
                     return (
                        <Form.Item
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                           name={[index, 'url']}
                        >
                           <Select
                              disabled={!(index === editingIndex)}
                              options={Routes.map((route) => ({
                                 value: route.url,
                                 label: route.mnName
                              }))}
                           />
                        </Form.Item>
                     );
                  }
               },
               {
                  title: 'ICON',
                  dataIndex: 'icon',
                  render: (text, row, index) => {
                     return (
                        <Form.Item name={[index, 'icon']}>
                           <TextArea disabled={!(index === editingIndex)} />
                        </Form.Item>
                     );
                  }
               },
               {
                  title: 'Үйлдэл',
                  dataIndex: 'id',
                  render: (text, row, index) => {
                     if (index === editingIndex) {
                        return (
                           <React.Fragment>
                              <Button
                                 icon={<SaveOutlined />}
                                 shape={'circle'}
                                 type={'primary'}
                                 style={{ marginRight: 8 }}
                                 onClick={onSave}
                              />
                              <Button icon={<CloseOutlined />} shape={'circle'} onClick={() => onCancel(index)} />
                           </React.Fragment>
                        );
                     } else {
                        return (
                           <React.Fragment>
                              <Button
                                 icon={<EditOutlined />}
                                 shape={'circle'}
                                 style={{ marginRight: 8 }}
                                 disabled={editingIndex !== undefined}
                                 onClick={() => setEditingIndex(index)}
                              />
                              <Popconfirm
                                 title="Are you sure？"
                                 okText="Yes"
                                 cancelText="No"
                                 onConfirm={() => removeMenu(index)}
                              >
                                 <Button
                                    icon={<MinusOutlined />}
                                    shape={'circle'}
                                    type={'danger'}
                                    disabled={editingIndex !== undefined}
                                 />
                              </Popconfirm>
                           </React.Fragment>
                        );
                     }
                  }
               }
            ]}
            dataSource={menus}
            pagination={false}
            footer={() => (
               <Button onClick={() => addMenu()}>
                  <PlusOutlined /> Туслах меню нэмэх
               </Button>
            )}
         ></Table>
      );
   };

   return (
      <div>
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            title="MENUS"
            extra={
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     gap: 12
                  }}
               >
                  <Button onClick={showModalSub} className="bg-sky-700 rounded-md text-white">
                     Дэд цэс нэмэх
                  </Button>
                  <Button onClick={showModal} className="bg-sky-700 rounded-md text-white">
                     Цэс нэмэх
                  </Button>
               </div>
            }
         >
            <Table
               rowKey={'id'}
               bordered
               columns={[
                  {
                     title: 'Нэр',
                     dataIndex: 'name'
                  },
                  {
                     width: 40,
                     title: 'Зураг',
                     dataIndex: 'icon',
                     render: (text) => {
                        return (
                           <p
                              style={{
                                 width: 40
                              }}
                              dangerouslySetInnerHTML={{ __html: text }}
                           />
                        );
                     }
                  },
                  {
                     width: 50,
                     title: 'Дэд цэс эсэх',
                     dataIndex: 'isSubMenu',
                     render: (text) => {
                        return text ? (
                           <span
                              style={{
                                 color: 'green'
                              }}
                           >
                              Тийм
                           </span>
                        ) : (
                           <span
                              style={{
                                 color: 'red'
                              }}
                           >
                              Үгүй
                           </span>
                        );
                     }
                  },
                  {
                     title: 'Агуулагдах цэснүүд',
                     dataIndex: 'menus',
                     render: (text) => {
                        if (text?.length > 0) {
                           return (
                              <ul className="list-inside list-decimal">
                                 {text?.map((item, index) => (
                                    <li
                                       key={index}
                                       style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          gap: 12
                                       }}
                                    >
                                       {item.title}
                                       <p
                                          style={{
                                             width: 40
                                          }}
                                          dangerouslySetInnerHTML={{ __html: item.icon }}
                                       />
                                    </li>
                                 ))}
                              </ul>
                           );
                        }
                        return 'Байхгүй /Дэд цэс байхгүй/';
                     }
                  },
                  {
                     width: 50,
                     title: 'Үйлдэл',
                     dataIndex: 'isSubMenu',
                     render: (text, row, index) => {
                        return (
                           <div
                              style={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 gap: 8
                              }}
                           >
                              <Button
                                 type="link"
                                 icon={<EditOutlined />}
                                 onClick={() => {
                                    if (text) {
                                       setIdParent(row.id);
                                       setEditMode(false);
                                       setEditModeSub(true);
                                       setIsOpenModalSub(true);
                                       subForm.setFieldsValue(row);
                                    } else {
                                    }
                                 }}
                              />
                              <Button
                                 type="link"
                                 icon={
                                    <DeleteOutlined
                                       style={{
                                          color: 'red'
                                       }}
                                    />
                                 }
                                 onClick={() => deleteModal(row.id)}
                              />
                           </div>
                        );
                     }
                  }
               ]}
               dataSource={menus}
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
                  onChange: (page, pageSize) => getMenus(page, pageSize)
               }}
            />
         </Card>
         <Modal
            title="MENU NEMEH"
            open={isOpenModal}
            onOk={() =>
               form
                  .validateFields()
                  .then((values) => {
                     onFinish(values);
                  })
                  .catch((error) => {
                     console.log(error);
                  })
            }
            onCancel={() => setIsOpenModal(false)}
            okText="Хадгалах"
            cancelText="Болих"
         >
            <Form
               form={form}
               initialValues={{
                  isSubMenu: false
               }}
            >
               <Form.Item label={'Туслах цэс эсэх'} name="isSubMenu" valuePropName="checked" initialValue={isSubMenu}>
                  <Switch
                     className="bg-[#4a7fc1]"
                     checkedChildren="Тийм"
                     unCheckedChildren="Үгүй"
                     onChange={() => setIsSubMenu(!isSubMenu)}
                  />
               </Form.Item>
               {isSubMenu && (
                  <Form.Item label="Дэд цэс" name="parentId">
                     <Select>
                        {isSubMenus.map((menu, index) => {
                           return (
                              <Option key={index} value={menu.id}>
                                 {menu.name}
                              </Option>
                           );
                        })}
                     </Select>
                  </Form.Item>
               )}
               <Form.Item label="Route" name="url">
                  <Select
                     options={Routes.map((route) => ({
                        value: route.url,
                        label: route.name
                     }))}
                  />
               </Form.Item>
               <Form.Item label="Байрлал" name="position">
                  <InputNumber />
               </Form.Item>
               <Form.Item label="ICON" name="icon">
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title="Дэд цэс"
            open={isOpenModalSub}
            onCancel={() => setIsOpenModalSub(false)}
            onOk={() =>
               subForm.validateFields().then((values) => {
                  onFinishSub(values);
               })
            }
         >
            <Form form={subForm}>
               <Form.Item
                  rules={[
                     {
                        required: true,
                        message: 'Нэр заавал'
                     }
                  ]}
                  label="Нэр"
                  name="name"
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  rules={[
                     {
                        required: true,
                        message: 'Нэр заавал'
                     }
                  ]}
                  label="ICON"
                  name="icon"
               >
                  <TextArea />
               </Form.Item>
               <label>Цэснүүд</label>
               <Form.List name="menus">
                  {(menus, { add, remove }) => <EditableUsersTable menus={menus} add={add} remove={remove} />}
               </Form.List>
            </Form>
         </Modal>
      </div>
   );
}
export default Menu;
