import React, { useContext, useEffect, useState } from 'react';
import { formatNameForDoc, openNofi } from '../../comman';
import { Button, Checkbox, Form, Input, Modal, Table } from 'antd';
import { CloseOutlined, HeartOutlined, PlusCircleFilled } from '@ant-design/icons';

//components
import OrderTable from '../Order/Order';
import OrderForm from './OrderTable/OrderForm';
import { NewColumn, NewTable } from '../../Table/Table';
import { NewInput, NewSearch, NewTextArea } from '../../Input/Input';
import NewModal from '../../Modal/Modal';
// services
import ServiceService from '../../../services/service/service';
import AuthContext from '../../../features/AuthContext';

function SetOrder({ handleclick }) {
   const { user } = useContext(AuthContext);
   const [form] = Form.useForm();
   const [packForm] = Form.useForm();
   const [editMode, setEditMode] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenPackageModal, setIsOpenPackageModal] = useState(false);
   const [isOpenAddModal, setIsOpenAddModal] = useState(false);
   const [orders, setOrders] = useState([]);
   const [meta, setMeta] = useState({});
   const [selectedOrderId, setSelectedOrderId] = useState(Number);
   const openOrCloseModal = (state, isOpen, data) => {
      setEditMode(state);
      setIsOpenAddModal(isOpen);
      if (state) {
         form.setFieldsValue(data);
         setSelectedOrderId(data.id);
      } else {
         form.resetFields();
      }
   };
   const getSetOrders = async (page, pageSize, value) => {
      setIsLoading(true);
      setSearchValue(value);
      await ServiceService.getSetOrder({
         params: {
            page: page,
            limit: pageSize,
            code: value
         }
      }).then((response) => {
         if (response.data.success) {
            setOrders(response.data.response.data);
            setMeta(response.data.response.meta);
            setIsLoading(false);
         }
      });
   };

   const onFinish = async (values) => {
      setIsLoadingConfirm(true);
      if (editMode) {
         await ServiceService.patchSetOrder(selectedOrderId, values).then((response) => {
            if (response.data.success) {
               setIsLoadingConfirm(false);
               setIsOpenAddModal(false);
               getSetOrders(1, 10);
            }
         });
      } else {
         await ServiceService.postSetOrder(values).then((response) => {
            setIsLoadingConfirm(false);
            setIsOpenAddModal(false);
            getSetOrders(1, 10);
         });
      }
   };

   useEffect(() => {
      // getSetOrders(1, 10);
   }, []);

   const SerivceTable = (props) => {
      const { services, remove } = props;
      const [isOpen, setIsOpen] = useState(false);
      return (
         <>
            <div className="flex flex-col gap-3">
               <div className="flex justify-between">
                  <p>Үйлчилгээ нэмэх</p>
                  <Button
                     onClick={() => setIsOpen(true)}
                     icon={
                        <PlusCircleFilled
                           style={{
                              color: 'green'
                           }}
                        />
                     }
                  />
               </div>
               <NewTable
                  prop={{
                     rowKey: 'serviceId',
                     bordered: true,
                     dataSource: services
                  }}
                  meta={{
                     page: 1,
                     limit: services.length
                  }}
                  isLoading={false}
                  isPagination={false}
               >
                  <NewColumn
                     title="Нэр"
                     render={(value, row, index) => {
                        return (
                           <OrderForm
                              rules={[
                                 {
                                    required: true,
                                    message: 'sadas'
                                 }
                              ]}
                              noStyle
                              name={[index, 'serviceName']}
                              editing={false}
                           >
                              <Input />
                           </OrderForm>
                        );
                     }}
                  />
                  <NewColumn
                     title="Үйлдэл"
                     width={40}
                     render={(value, row, index) => {
                        return (
                           <Button
                              onClick={() => remove(index)}
                              icon={
                                 <CloseOutlined
                                    style={{
                                       color: 'red'
                                    }}
                                 />
                              }
                           />
                        );
                     }}
                  />
               </NewTable>
            </div>
            <NewModal title="Үйлчилгээ" open={isOpen} onCancel={() => setIsOpen(false)} footer={null}>
               <OrderTable
                  isPackage={true}
                  isDoctor={false}
                  categories={[
                     {
                        //shinejilgee
                        name: 'Examination',
                        label: 'Шинжилгээ'
                     },
                     {
                        //onshilgoo
                        name: 'Xray',
                        label: 'Оношилгоо'
                     },
                     {
                        //mes zasal
                        name: 'Surgury',
                        label: 'Мэс засал'
                     },
                     {
                        //emchilgee
                        name: 'Treatment',
                        label: 'Эмчилгээ'
                     },
                     {
                        //duran
                        name: 'Endo',
                        label: 'Дуран'
                     }
                  ]}
                  save={(e) => {
                     setIsOpen(false);
                     const oldServices = form.getFieldValue('services');
                     if (oldServices != undefined) {
                        form.setFieldsValue({
                           services: [...form.getFieldValue('services'), ...e]
                        });
                     } else {
                        form.setFieldsValue({
                           services: e
                        });
                     }
                  }}
               />
            </NewModal>
         </>
      );
   };

   return (
      <>
         <button
            className="green-order"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            <HeartOutlined />
            Сэт-Ордер
         </button>
         <Modal title="Багц үүсгэх" width={400} open={isOpenPackageModal} onCancel={() => setIsOpenPackageModal(false)}>
            <Form form={packForm} layout="vertical">
               <Form.Item className="mb-0" label="Багцын нэр:">
                  <Input />
               </Form.Item>
               <Form.Item className="mb-0" label="Тасаг сонгох:">
                  <Input />
               </Form.Item>
               <Form.Item className="mb-0" label="Код:">
                  <Input />
               </Form.Item>
               <Form.Item className="mb-0" label="Онош:">
                  <Input />
               </Form.Item>
               <Form.Item className="mb-0" label="Загвар болгож хадгалах">
                  <Checkbox />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title="Сэт-Ордер сонгох"
            width={1500}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            okText="Хадгалах"
         >
            <div className="internal-order-set-order">
               <div className="left">
                  <Input placeholder="Хайх ..." />
                  <div>1</div>
                  <Button onClick={() => setIsOpenPackageModal(true)}>Багц үүсгэх</Button>
               </div>
               <div className="right">
                  <NewSearch
                     style={{
                        width: 300
                     }}
                     placeholder="Код хайх"
                     enterButton="Хайх"
                     onSearch={(value) => getSetOrders(1, 10, value)}
                  />
                  <Table
                     rowKey="id"
                     bordered
                     loading={{
                        spinning: isLoading,
                        tip: 'Уншиж байна....'
                     }}
                     columns={[
                        {
                           title: 'Код',
                           dataIndex: 'code'
                        },
                        {
                           title: 'Тайлбар',
                           dataIndex: 'description'
                        },
                        {
                           title: 'Үйлчилгээ',
                           dataIndex: 'services',
                           render: (text) => {
                              return (
                                 <ul>
                                    {text?.map((service, index) => {
                                       return (
                                          <li
                                             key={index}
                                             style={{
                                                display: 'flex',
                                                alignItems: 'start'
                                             }}
                                          >
                                             -{service.serviceName}
                                          </li>
                                       );
                                    })}
                                 </ul>
                              );
                           }
                        },
                        {
                           title: 'Үүсгэсэн эмч',
                           render: (_, row) => {
                              return formatNameForDoc(row.createdLastName, row.createdFirstName);
                           }
                        },
                        {
                           title: 'Үйлдэл',
                           render: (_, row) => {
                              return (
                                 <div className="flex flex-row justify-center gap-3">
                                    <div>
                                       {user.userId === row.createdBy ? (
                                          <Button onClick={() => openOrCloseModal(true, true, row)}>Засах</Button>
                                       ) : null}
                                    </div>
                                    <Button
                                       type="primary"
                                       onClick={() => {
                                          handleclick(row.services);
                                          setIsOpenModal(false);
                                       }}
                                    >
                                       Aшиглах
                                    </Button>
                                 </div>
                              );
                           }
                        }
                     ]}
                     dataSource={orders}
                     pagination={{
                        position: ['bottomCenter'],
                        size: 'small',
                        current: meta.page,
                        total: meta.itemCount,
                        showTotal: (total, range) => `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                        pageSize: meta.limit,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showQuickJumper: true,
                        onChange: (page, pageSize) => getSetOrders(page, pageSize, searchValue)
                     }}
                     footer={() => (
                        <div>
                           <Button type="primary" onClick={() => openOrCloseModal(false, true)}>
                              Нэмэх
                           </Button>
                        </div>
                     )}
                  />
               </div>
            </div>
         </Modal>
         <Modal
            title={editMode ? 'Сэт-Ордер засах' : 'Сэт-Ордер нэмэх'}
            open={isOpenAddModal}
            onCancel={() => openOrCloseModal(false, false)}
            onOk={() => {
               form.validateFields().then((values) => {
                  if (values.services === undefined) {
                     openNofi('error', 'Алдаа', 'Хамгийн багадаа нэг үйлчилгээ нэмэх');
                  } else {
                     onFinish(values);
                  }
               });
            }}
            confirmLoading={isLoadingConfirm}
         >
            <Form form={form} layout="vertical">
               <Form.Item
                  name="code"
                  label="Код:"
                  rules={[
                     {
                        required: true,
                        message: 'Код заавал'
                     }
                  ]}
               >
                  <NewInput />
               </Form.Item>
               <Form.Item
                  name="description"
                  label="Тайлбар:"
                  rules={[
                     {
                        required: true,
                        message: 'Тайлбар заавал'
                     }
                  ]}
               >
                  <NewTextArea />
               </Form.Item>
               <Form.List name="services">
                  {(services, { remove }) => {
                     return <SerivceTable services={services} remove={remove} />;
                  }}
               </Form.List>
            </Form>
         </Modal>
      </>
   );
}
export default SetOrder;
