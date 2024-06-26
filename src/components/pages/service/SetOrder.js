import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Input, Modal, Row } from 'antd';
import { DeleteOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Table } from 'react-bootstrap';
//comp
import Order from '../Order/Order';
//api
import SetOrderApi from '@ApiServices/service/service';
//defaults
const { TextArea } = Input;

function SetOrder() {
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
   const [data, setData] = useState([]);
   const [id, setId] = useState([]);
   const [meta, setMeta] = useState({});
   const [editMode, setEditMode] = useState(false);
   const [form] = Form.useForm();
   const categories = [
      {
         //shinejilgee
         name: 'Examination'
      },
      {
         //onshilgoo
         name: 'Xray'
      },
      {
         //emchilgee
         name: 'Treatment'
      },
      {
         //hagalgaa mes
         name: 'Surgery'
      },
      {
         //duran
         name: 'Endo'
      }
   ];
   const showModal = () => {
      setIsOpenModal(true);
      setEditMode(false);
      form.resetFields();
   };

   const editModal = async (id) => {
      await SetOrderApi.getSetOrderById(id).then(({ data: { response } }) => {
         form.setFieldsValue(response);
         setEditMode(true);
         setId(response.id);
         setIsOpenModal(true);
      });
   };

   const deleteModal = async (id) => {
      Modal.error({
         title: 'Устгах',
         okText: 'Устгах',
         closable: true,
         content: <div>Устгасан тохиолдолд дахин сэргээгдэхгүй болно</div>,
         async onOk() {
            await SetOrderApi.deleteSetOrder(id).then(() => {
               getPackages();
            });
         }
      });
   };

   const AddServices = async (value) => {
      setIsOpenSecondModal(false);
      if (editMode) {
         var arr = await form.validateFields();
         value = value.concat(arr?.services);
      }
      form.setFieldsValue({ services: value });
   };

   const savePack = async () => {
      form
         .validateFields()
         .then(async (value) => {
            if (editMode) {
               await SetOrderApi.patchSetOrder(id, value).then(() => {
                  getPackages();
                  setIsOpenModal(false);
               });
            } else {
               await SetOrderApi.postSetOrder(value).then(() => {
                  getPackages();
                  setIsOpenModal(false);
               });
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getPackages = async () => {
      await SetOrderApi.getSetOrder({
         page: 1,
         limit: 10
      }).then(({ data: { response } }) => {
         setData(response.data);
         setMeta(response.meta);
      });
   };

   useEffect(() => {
      getPackages();
   }, []);

   return (
      <div>
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            title="Болзолт жор"
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
                        <th>Код</th>
                        <th>Тайлбар</th>
                        <th>Үйлчилгээнүүд</th>
                        <th>Үйлдэл</th>
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {data.map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{item.code}</td>
                              <td>{item.description}</td>
                              <td>
                                 <ul className="list-disc">
                                    {item.services.map((service, idx) => {
                                       return <li key={idx}>{service.serviceName}</li>;
                                    })}
                                 </ul>
                              </td>
                              <td>
                                 <Button
                                    type="link"
                                    onClick={() => editModal(item.id)}
                                    title="Засах"
                                    style={{ paddingRight: 5, paddingLeft: 5 }}
                                 >
                                    <EditOutlined />
                                 </Button>
                                 <Button
                                    type="link"
                                    onClick={() => deleteModal(item.id)}
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
         </Card>
         <Modal
            title="Болзолт жор нэмэх"
            onCancel={() => setIsOpenModal(false)}
            onOk={savePack}
            open={isOpenModal}
            width={'50%'}
         >
            <Form form={form}>
               <Row gutter={[8, 8]}>
                  <Col span={24}>
                     <Form.Item
                        label="Код"
                        name="code"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Input placeholder="Код" />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.Item
                        label="Тайлбар"
                        name="description"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <TextArea rows={4} placeholder="Тайлбар" />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.List name="services">
                        {(fields, { remove }) => (
                           <>
                              <div className="table-responsive p-4" id="style-8">
                                 <Table className="ant-border-space" style={{ width: '100%' }}>
                                    <thead className="ant-table-thead bg-slate-200">
                                       <tr>
                                          <th>Нэр</th>
                                          <th>Yнэ</th>
                                          <th>Үйлдэл</th>
                                          <th>
                                             <Button onClick={() => setIsOpenSecondModal(true)}>нэмэх</Button>
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {fields.map(({ key, name }) => (
                                          <tr key={key}>
                                             <td>
                                                <Form.Item name={[name, 'serviceName']}>
                                                   <Input disabled={true} />
                                                </Form.Item>
                                             </td>
                                             <td>
                                                <Form.Item name={[name, 'servicePrice']}>
                                                   <Input disabled={true} />
                                                </Form.Item>
                                             </td>
                                             <td>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                             </td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </Table>
                              </div>
                           </>
                        )}
                     </Form.List>
                  </Col>
               </Row>
            </Form>
         </Modal>
         <Modal onCancel={() => setIsOpenSecondModal(false)} footer={null} open={isOpenSecondModal} width={'70%'}>
            <Order
               isDoctor={false}
               isPackage={true}
               selectedPatient={null}
               usageType={null}
               categories={categories}
               save={AddServices}
            />
         </Modal>
      </div>
   );
}
export default SetOrder;
