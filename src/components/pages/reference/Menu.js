import { Delete, Get, Patch, Post } from '../../comman';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import {
   Button,
   Card,
   Form,
   Input,
   InputNumber,
   Modal,
   Pagination,
   Select,
   Switch
} from 'antd';
import { Table } from 'react-bootstrap';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

function Menu() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [form] = Form.useForm();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [id, setId] = useState([]);
   const [isSubMenu, setIsSubMenu] = useState(false);
   //
   const [menus, setMenus] = useState([]);
   const [isSubMenus, setIsSubMenus] = useState([]);
   const [meta, setMeta] = useState([]);
   //
   const showModal = () => {
      setIsOpenModal(true);
      setEditMode(false);
   };
   const getMenus = async (page, pageSize) => {
      config.params.page = page;
      config.params.limit = pageSize;
      const response = await Get('reference/menu', token, config);
      if (response.data.length != 0) {
         setMenus(response.data);
         setMeta(response.meta);
      }
   };

   const getIsSubMenu = async () => {
      config.params.isSubMenu = true;
      const response = await Get('reference/menu', token, config);
      if (response.data.length != 0) {
         setIsSubMenus(response.data);
      }
      config.params.isSubMenu = null;
   };

   const onFinish = async (value) => {
      if (editMode) {
         const response = await Patch(
            'reference/menu/' + id,
            token,
            config,
            value
         );
         if (response === 200) {
            setIsOpenModal(false);
            getMenus();
         }
      } else {
         const response = await Post('reference/menu', token, config, value);
         if (response === 201) {
            setIsOpenModal(false);
            getMenus();
         }
      }
   };
   const deleteModal = (id) => {
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан дохиолдолд дахин сэргэхгүй болно</div>,
         async onOk() {
            await Delete('reference/menu/' + id, token, config);
            getMenus();
         }
      });
   };

   const editModal = async (id) => {
      setEditMode(true);
      setId(id);
      const response = await Get('reference/menu/show/' + id, token, config);
      if (response.length != 0) {
         form.setFieldsValue(response);
         setIsOpenModal(true);
      }
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
               <Button
                  onClick={showModal}
                  className="bg-sky-700 rounded-md text-white"
               >
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
                           <tr
                              key={index}
                              className="ant-table-row ant-table-row-level-0"
                           >
                              <td className="ant-table-row-cell-break-word">
                                 {menu.title}
                              </td>
                              <td className="ant-table-row-cell-break-word">
                                 {menu.name}
                              </td>
                              <td className="ant-table-row-cell-break-word">
                                 {menu.isSubMenu ? 'TIIM' : 'UGU'}
                              </td>
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
               <Pagination
                  className="pagination"
                  pageSize={10}
                  total={meta.itemCount}
                  onChange={getMenus}
               />
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
            <Form form={form}>
               <Form.Item
                  label={'Туслах цэстэй эсэх'}
                  name="isSubMenu"
                  valuePropName="checked"
                  initialValue={isSubMenu}
               >
                  <Switch
                     className="bg-[#2d8cff]"
                     checkedChildren="Тийм"
                     unCheckedChildren="Үгүй"
                     onChange={() => setIsSubMenu(!isSubMenu)}
                  />
               </Form.Item>
               {!isSubMenu && (
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
               <Form.Item label="Нэр mongol" name="title">
                  <Input />
               </Form.Item>
               <Form.Item label="Нэр angli" name="name">
                  <Input />
               </Form.Item>
               <Form.Item label="Хаяг" name="url">
                  <Input />
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
