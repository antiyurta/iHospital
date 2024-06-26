import React, { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, InputNumber, Modal, Row } from 'antd';
import { Table } from 'react-bootstrap';
import Order from '../Order/Order';
//api
import ServiceApi from '@ApiServices/service/service';
//common
import { checkNumber } from '@Comman/common';

function Packages() {
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
      },
      {
         //emchind uzleg
         name: 'doctorInspection',
         label: 'Эмчийн үзлэг'
      }
   ];

   const showModal = () => {
      setIsOpenModal(true);
      setEditMode(false);
      form.resetFields();
   };

   const editModal = async (id) => {
      await ServiceApi.getPackageById(id).then(({ data: { response } }) => {
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
            await ServiceApi.deletePackage(id);
            getPackages();
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
               await ServiceApi.patchPackage(id, value).then(() => {
                  getPackages();
                  setIsOpenModal(false);
               });
            } else {
               await ServiceApi.postPackage(value).then(() => {
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
      await ServiceApi.getPackage().then(({ data: { response } }) => {
         setData(response.data);
         setMeta(response.meta);
      });
   };

   useEffect(() => {
      getPackages();
   }, []);

   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            title="Багц"
            bodyStyle={{
               padding: 10,
               height: 'calc(100vh - 100px)',
               overflow: 'auto'
            }}
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
                        <th>Нэр</th>
                        <th>Үнэ</th>
                        <th>Насны доод хязгаар</th>
                        <th>Насны дээд хязгаар</th>
                        <th>Үйлчилгээнүүд</th>
                        <th>Үйлдэл</th>
                     </tr>
                  </thead>
                  <tbody className="ant-table-tbody p-0">
                     {data.map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{item.name}</td>
                              <td>{item.price}</td>
                              <td>{item.minAge}</td>
                              <td>{item.maxAge}</td>
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
            title="Багц нэмэх"
            onCancel={() => setIsOpenModal(false)}
            onOk={savePack}
            open={isOpenModal}
            // width={'50%'}
         >
            <Form
               form={form}
               labelAlign={'right'}
               labelCol={{
                  span: 8
               }}
               wrapperCol={{
                  span: 16
               }}
            >
               <Row gutter={[8, 8]}>
                  <Col span={24}>
                     <Form.Item
                        label="Багц нэр"
                        name="name"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <Input placeholder="Багц нэр" />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.Item
                        label="Үнэ"
                        name="price"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <InputNumber placeholder="Үнэ" onKeyPress={checkNumber} />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.Item
                        label="Насны доод"
                        name="minAge"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <InputNumber placeholder="Насны доод" onKeyPress={checkNumber} />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.Item
                        label="Насны дээд"
                        name="maxAge"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <InputNumber placeholder="Насны дээд" onKeyPress={checkNumber} />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.List name="services">
                        {(fields, { add, remove }) => (
                           <>
                              <div className="table-responsive p-4" id="style-8">
                                 <Table className="ant-border-space" style={{ width: '100%' }}>
                                    <thead className="ant-table-thead bg-slate-200">
                                       <tr>
                                          <th>Нэр</th>
                                          <th>
                                             <Button className="btn-add" onClick={() => setIsOpenSecondModal(true)}>
                                                нэмэх
                                             </Button>
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {fields.map(({ key, name }) => (
                                          <tr key={key}>
                                             <td>{form.getFieldValue(['services', name, 'serviceName'])}</td>
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
         <Modal title="Сонгох" onCancel={() => setIsOpenSecondModal(false)} footer={null} open={isOpenSecondModal}>
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
export default Packages;
