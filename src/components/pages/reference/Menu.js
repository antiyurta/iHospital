import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../features/authReducer';
import { Button, Card, Form, Input, InputNumber, Modal, Pagination, Select, Switch } from 'antd';
import { Table } from 'react-bootstrap';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { PublicRoutes, ProtectedRoutes } from '../../../Routes';

import MenuService from '../../../services/reference/menu';

const { Option } = Select;
const { TextArea } = Input;

function Menu() {
   let Routes = [...PublicRoutes, ...ProtectedRoutes];
   const hospitalId = useSelector(selectCurrentHospitalId);
   const [form] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [id, setId] = useState([]);
   const [isSubMenu, setIsSubMenu] = useState(false);
   const [menus, setMenus] = useState([]);
   const [isSubMenus, setIsSubMenus] = useState([]);
   const [meta, setMeta] = useState([]);
   const showModal = () => {
      form.resetFields();
      setIsOpenModal(true);
      setEditMode(false);
   };
   const getMenus = async (page, pageSize) => {
      await MenuService.get({
         params: { page: page, limit: pageSize }
      }).then((response) => {
         setMenus(response.data.response.data);
         setMeta(response.data.response.meta);
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

   return (
      <div>
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            title="MENUS"
            extra={
               <Button onClick={showModal} className="bg-sky-700 rounded-md text-white">
                  Нэмэх
               </Button>
            }
         >
            <div className="table-responsive p-4" id="style-8">
               <Table className="ant-border-space" style={{ width: '100%' }}>
                  <thead className="ant-table-thead bg-slate-200">
                     <tr>
                        <th>title</th>
                        <th>name</th>
                        <th>isSubMenu</th>
                        <th>icon</th>
                        <th>title</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {menus.map((menu, index) => {
                        return (
                           <tr key={index} className="ant-table-row ant-table-row-level-0">
                              <td className="ant-table-row-cell-break-word">{menu.title}</td>
                              <td className="ant-table-row-cell-break-word">{menu.name}</td>
                              <td className="ant-table-row-cell-break-word">{menu.isSubMenu ? 'TIIM' : 'UGU'}</td>
                              <td className="ant-table-row-cell-break-word w-6">
                                 <a
                                    dangerouslySetInnerHTML={{
                                       __html: menu.icon
                                    }}
                                 ></a>
                              </td>
                              <td>
                                 <Button
                                    type="link"
                                    onClick={() => editModal(menu.id)}
                                    title="Засах"
                                    style={{ paddingRight: 5, paddingLeft: 5 }}
                                 >
                                    <EditOutlined />
                                 </Button>
                                 <Button
                                    type="link"
                                    onClick={() => deleteModal(menu.id)}
                                    title="Устгах"
                                    style={{ paddingLeft: 5 }}
                                 >
                                    <DeleteOutlined style={{ color: 'red' }} />
                                 </Button>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
            </div>
            <div>
               <Pagination className="pagination" pageSize={10} total={meta.itemCount} onChange={getMenus} />
            </div>
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
                  <Select>
                     {Routes?.map((route, index) => {
                        return (
                           <Option key={index} value={route.url}>
                              {route.mnName}
                           </Option>
                        );
                     })}
                  </Select>
               </Form.Item>
               <Form.Item label="Байрлал" name="position">
                  <InputNumber />
               </Form.Item>
               <Form.Item label="ICON" name="icon">
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
      </div>
   );
}
export default Menu;
