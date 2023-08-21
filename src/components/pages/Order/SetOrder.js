import React, { useContext, useEffect, useState } from 'react';
import { openNofi } from '../../comman';
import { Button, Form, Input } from 'antd';
import jwtInterceopter from '../../jwtInterceopter';
import { CloseOutlined, PlusCircleFilled } from '@ant-design/icons';

//components
import OrderTable from '../Order/Order';
import OrderForm from './OrderTable/OrderForm';
import { NewColumn, NewColumnGroup, NewTable } from '../../Table/Table';
import { NewInput, NewSearch, NewTextArea } from '../../Input/Input';
import NewModal from '../../Modal/Modal';
// services
import ServiceService from '../../../services/service/service';
import AuthContext from '../../../features/AuthContext';

function SetOrder({ handleclick }) {
   // ooroo
   const { user } = useContext(AuthContext);
   //
   const [form] = Form.useForm();
   const [editMode, setEditMode] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
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
   const getSetOrders = async (page, pageSize) => {
      setIsLoading(true);
      await ServiceService.getSetOrder({
         params: {
            page: page,
            limit: pageSize
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
      getSetOrders(1, 10);
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
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            Сэт-Ордер
         </Button>
         <NewModal
            title="SET ORDER"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
         >
            <div className="flex flex-col gap-3">
               <div className="flex justify-between gap-3">
                  <NewSearch placeholder="Код хайх" onChange={(value) => filter(value.target.value)} />
                  <Button type="primary" onClick={() => openOrCloseModal(false, true)}>
                     Нэмэх
                  </Button>
               </div>
               <NewTable
                  prop={{
                     rowKey: 'id',
                     bordered: true,
                     dataSource: orders
                  }}
                  meta={meta}
                  isLoading={isLoading}
                  isPagination={true}
               >
                  <NewColumn title="Код" dataIndex={'code'} />
                  <NewColumn title="Тайлбар" dataIndex={'description'} />
                  <NewColumn
                     title="Үйлчилгээ"
                     dataIndex={'services'}
                     render={(text) => {
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
                     }}
                  />
                  <NewColumn
                     title="Үүсгэсэн эмч"
                     width={120}
                     render={(_, row) => {
                        return row.createdLastName?.substring(0, 1) + '.' + row.createdFirstName;
                     }}
                  />
                  <NewColumn
                     title="Үйлдэл"
                     width={230}
                     render={(_, row) => {
                        return (
                           <div className="flex flex-row justify-center gap-3">
                              <div>
                                 {user.userId === row.createdBy ? (
                                    <Button onClick={() => openOrCloseModal(true, true, row)}>Жор засах</Button>
                                 ) : null}
                              </div>
                              <Button
                                 type="primary"
                                 onClick={() => {
                                    handleclick(row.services);
                                    setIsOpenModal(false);
                                 }}
                              >
                                 Жор ашиглах
                              </Button>
                           </div>
                        );
                     }}
                  />
               </NewTable>
            </div>
         </NewModal>
         <NewModal
            title={editMode ? 'SET ORDER ЗАСАХ' : 'SET ORDER НЭМЭХ'}
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
         </NewModal>
      </>
   );
}
export default SetOrder;
