import { Badge, Button, Card, Form, Input, message, Modal, Select, Space, Switch, Upload } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Patch, Post } from '../../common';
import { EditOutlined, LoadingOutlined, MinusCircleOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function EquipmentList() {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [equipments, setEquipments] = useState([]);
   const [searchField, setSearchField] = useState('');
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isOpenReference, setIsOpenReference] = useState(false);
   const [editMode, setEditMode] = useState(false);
   const [loading, setLoading] = useState(false);
   const [imageUrl, setImageUrl] = useState();
   const [photoId, setPhotoId] = useState(Number);
   const [id, setId] = useState(Number);
   const [form] = Form.useForm();
   const [referenceForm] = Form.useForm();
   const basisRule = [
      {
         required: true,
         message: 'Заавал'
      }
   ];
   const specimenOptions = [
      {
         label: 'Цус',
         value: 'blood'
      },
      {
         label: 'Шээс',
         value: 'urine'
      },
      {
         label: 'Цус',
         value: 'serum'
      }
   ];
   const types = [
      {
         label: 'examination',
         value: 0
      },
      {
         label: 'Xray',
         value: 1
      },
      {
         label: 'Treatment ',
         value: 2
      },
      {
         label: 'Surgery ',
         value: 3
      },
      {
         label: 'Endo ',
         value: 4
      },
      {
         label: 'Inspection ',
         value: 5
      },
      {
         label: 'Inpatient  ',
         value: 6
      },
      {
         label: 'Package  ',
         value: 7
      }
   ];
   const openModal = () => {
      setEditMode(false);
      setIsOpenModal(true);
   };
   const editModal = (item) => {
      setEditMode(true);
      setId(item.id);
      setPhotoId(item.photoId);
      form.setFieldsValue(item);
      setIsOpenModal(true);
   };
   const getEquipments = async () => {
      const { data } = await Get('equipment', token, config);
      await Promise.all(
         data.map(async (equip) => {
            const equipPhotoSrc = await getPhoto(equip.photoId);
            equip['photoSrc'] = equipPhotoSrc;
         })
      );
      setEquipments(data);
   };
   const getPhoto = async (id) => {
      const response = await axios.get(DEV_URL + 'local-files/' + id, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': API_KEY
         },
         responseType: 'blob'
      });
      const file = new Blob([response.data], { type: response.type });
      const fileURL = URL.createObjectURL(file);
      return fileURL;
   };
   const filteredEquipment = equipments.filter((equipment) => {
      return equipment.equipmentNameEn.toLowerCase().includes(searchField.toLowerCase());
   });
   const getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
   };
   const beforeUpload = (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
         message.error('JPEG эсвэл PNG');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
         message.error('2MB бага байна');
      }
      return isJpgOrPng && isLt2M;
   };
   const handleChange = (info) => {
      if (info.file.status === 'uploading') {
         setLoading(true);
         return;
      }
      if (info.file.status === 'done') {
         // Get this url from response in real world.
         setPhotoId(info.file.response.response.id);
         getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
         });
      }
   };
   const headers = {
      Authorization: `Bearer ${token}`,
      'x-api-key': API_KEY
   };
   const uploadButton = (
      <div>
         {loading ? <LoadingOutlined /> : <PlusOutlined />}
         <div
            style={{
               marginTop: 8
            }}
         >
            Зураг оруулах
         </div>
      </div>
   );
   useEffect(() => {
      getEquipments();
   }, []);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
               <div className="mx-3">
                  <Input placeholder="Нэрээр хайх" allowClear onChange={(e) => setSearchField(e.target.value)} />
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="mx-3">
                  <Button type="primary" onClick={() => openModal()}>
                     Нэмэх
                  </Button>
               </div>
            </div>
         </div>
         <div className="flex flex-wrap">
            {filteredEquipment?.map((equipment, index) => {
               return (
                  <div key={index} className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-4">
                     <Badge.Ribbon
                        text={equipment.isActive ? 'Идэвхтэй' : 'Идэвхгүй'}
                        color={equipment.isActive ? 'green' : 'red'}
                     >
                        <Card
                           cover={
                              <img
                                 style={{
                                    height: 250,
                                    width: 'auto',
                                    margin: 'auto'
                                 }}
                                 src={equipment.photoSrc}
                                 alt=""
                              />
                           }
                           actions={[
                              <SettingOutlined key="setting" onClick={() => setIsOpenReference(true)} />,
                              <EditOutlined onClick={() => editModal(equipment)} key="edit" />
                           ]}
                        >
                           <Meta
                              title={
                                 <>
                                    <div className="block">{equipment.equipmentNameMn}</div>
                                    <div className="block">{equipment.equipmentNameEn}</div>
                                    <div className="block">{equipment.serialNumber}</div>
                                 </>
                              }
                              description={
                                 <>
                                    <div className="block">
                                       <label>Төхөөрөмжийн төрөл:</label>
                                       {types[equipment.type].label}
                                    </div>
                                    <div className="block">
                                       <label>Сорьц төрөл:</label>
                                       {specimenOptions.find((element) => element.value === equipment.specimen).label}
                                    </div>
                                 </>
                              }
                           />
                        </Card>
                     </Badge.Ribbon>
                  </div>
               );
            })}
         </div>
         <Modal
            title={editMode ? 'Төхөөрөмж засах' : 'Төхөөрөмж нэмэх'}
            open={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() =>
               form.validateFields().then(async (values) => {
                  values['photoId'] = photoId;
                  if (editMode) {
                     const response = await Patch('equipment/' + id, token, config, values);
                     if (response === 200) {
                        setIsOpenModal(false);
                        getEquipments();
                     }
                  } else {
                     const response = await Post('equipment', token, config, values);
                     if (response === 201) {
                        setIsOpenModal(false);
                        getEquipments();
                     }
                  }
               })
            }
            width="50%"
         >
            <Form form={form}>
               <div className="flex flex-wrap">
                  <div className="w-full md:w-1/3">
                     <Upload
                        name="file"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${DEV_URL}local-files/fileUpload`}
                        headers={headers}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                     >
                        {imageUrl ? (
                           <img
                              src={imageUrl}
                              alt="avatar"
                              style={{
                                 width: '100%'
                              }}
                           />
                        ) : (
                           uploadButton
                        )}
                     </Upload>
                  </div>
                  <div className="w-full md:w-2/3">
                     <Form.Item
                        label="Сериал дугаар"
                        name={'serialNumber'}
                        rules={basisRule}
                        labelCol={{
                           span: 12
                        }}
                        wrapperCol={{
                           span: 12
                        }}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Төхөөрөмж нэр(MN)"
                        name={'equipmentNameEn'}
                        rules={basisRule}
                        labelCol={{
                           span: 12
                        }}
                        wrapperCol={{
                           span: 12
                        }}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Төхөөрөмж нэр(EN)"
                        name={'equipmentNameMn'}
                        rules={basisRule}
                        labelCol={{
                           span: 12
                        }}
                        wrapperCol={{
                           span: 12
                        }}
                     >
                        <Input />
                     </Form.Item>
                  </div>
               </div>
               <div className="flex flex-wrap">
                  <div className="basis-1/2 p-1">
                     <Form.Item label="Сорьц төрөл" name="specimen" rules={basisRule}>
                        <Select options={specimenOptions} />
                     </Form.Item>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item label="Төхөөрөмжийн төрөл" name="type" rules={basisRule}>
                        <Select options={types} />
                     </Form.Item>
                  </div>
                  <div className="basis-1/2 p-1">
                     <Form.Item label="Идэвхтэй эсэх" name="isActive" rules={basisRule} valuePropName="checked">
                        <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
         <Modal title="Лавлах нэгжүүд" open={isOpenReference} onCancel={() => setIsOpenReference(false)}>
            <Form form={referenceForm}>
               <Form.List name="reference">
                  {(fields, { add, remove }) => (
                     <>
                        {fields.map(({ key, name, ...restField }) => (
                           <Space key={key} style={{ display: 'flex' }} align="baseline">
                              <Form.Item
                                 {...restField}
                                 label="Нэр"
                                 name={[name, 'first']}
                                 rules={[
                                    {
                                       required: true,
                                       message: 'Missing first name'
                                    }
                                 ]}
                              >
                                 <Input />
                              </Form.Item>
                              <Form.Item>
                                 <Button onClick={() => remove(name)} icon={<MinusCircleOutlined />}>
                                    Add field
                                 </Button>
                              </Form.Item>
                           </Space>
                        ))}
                        <Form.Item>
                           <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                              Нэмэх
                           </Button>
                        </Form.Item>
                     </>
                  )}
               </Form.List>
            </Form>
         </Modal>
      </>
   );
}
export default EquipmentList;
