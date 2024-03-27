import React, { useEffect, useState } from 'react';
import MiddleTable from './MiddleTable';
import { Button, ConfigProvider, DatePicker, Form, Input, InputNumber, Modal, Select, Table } from 'antd';
import locale from 'antd/es/locale/mn_MN';

import iBalanceApi from '../../../../../services/ibalance/index.api';
import { TypeInfo } from '../../../../ListInjection';
import dayjs from 'dayjs';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import InfiniteSelect from '../../../../InfiniteSelect';

const StatusFilter = {
   NEW: <TypeInfo bgColor={'#fff'} textColor={'#0DCAF0'} text="Захиалга" />, // Шинэ
   ORDER_IGNORE: <TypeInfo bgColor={'#fff'} textColor={'#DC3545'} text="Захиалга цуцалсан" />, // Захиалга цуцалсан
   DISTRIBUTE: <TypeInfo bgColor={'#fff'} textColor={'#FFC107'} text="Зөвшөөрсөн" />,
   DISTRIBUTE_IGNORE: <TypeInfo bgColor={'#fff'} textColor={'#DC3545'} text="Зөвшөөрөл цуцалсан" />, // Хуваарилалт цуцалсан
   CONFIRM: <TypeInfo bgColor={'#fff'} textColor={'green'} text="Олгосон" />, // Олгосон
   CONFIRM_IGNORE: <TypeInfo bgColor={'#fff'} textColor={'#DC3545'} text="Олголт цуцалсан" /> // Олголт цуцалсан
};

const { Option } = Select;

function Transfers() {
   const [form] = Form.useForm();
   const [materialPage, setMaterialPage] = useState(1);
   const [booking, setBooking] = useState([]);
   const [warehouses, setWarehouses] = useState([]);
   const [materials, setMaterials] = useState([]);
   const [materialMeta, setMaterialMeta] = useState({});
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [selectLoading, setSelectLoading] = useState(false);

   const getLists = async () => {
      await iBalanceApi
         .getBooking({
            type: 'LOCAL'
         })
         .then(({ data: { response } }) => {
            setBooking(response.data);
         });
   };

   const getWarehouse = async () => {
      await iBalanceApi.getWarehouse({}).then(({ data: { response } }) => {
         setWarehouses(response.data);
      });
   };

   const getMaterials = async (page, limit) => {
      setSelectLoading(true);
      await iBalanceApi
         .getMaterials({
            page: page,
            limit: limit
         })
         .then(({ data: { response } }) => {
            setMaterialMeta(response.meta);
            setMaterials([...materials, ...response.data]);
         })
         .finally(() => {
            setMaterialPage(page);
            setSelectLoading(false);
         });
   };

   const onScrollSelect = async (event) => {
      const target = event.target;
      if (
         !selectLoading &&
         target.scrollTop + target.offsetHeight === target.scrollHeight &&
         materialMeta.hasNextPage
      ) {
         target.scrollTo(0, target.scrollHeight);
         getMaterials(materialPage + 1, 10);
      }
   };

   const columns = [
      {
         title: 'Захиалгын ID',
         dataIndex: 'id'
      },
      {
         title: 'Баримтын огноо',
         dataIndex: 'bookingAt'
      },
      {
         title: 'Орлогын байршил',
         dataIndex: ['fromWarehouse', 'name']
      },
      {
         title: 'Зарлагын байршил',
         dataIndex: ['toWarehouse', 'name']
      },
      {
         title: 'Тоо',
         dataIndex: 'materialQuantity'
      },
      {
         title: 'Тоо хэмжээ/захилга/',
         dataIndex: 'bookingQuantity'
      },
      {
         title: 'Баримтын төлөв',
         dataIndex: 'status',
         render: (status) => StatusFilter[`${status}`]
      },
      {
         title: 'Захиалга хийсэн огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD HH:mm')
      }
   ];

   const onFinish = async (values) => {
      console.log(values);
   };

   useEffect(() => {
      getLists();
      getWarehouse();
      getMaterials(materialPage, 10);
   }, []);

   return (
      <div>
         <Button
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            sadsa
         </Button>
         <Table rowKey={'id'} columns={columns} dataSource={booking} />
         <Modal
            title="Захиалга хийх"
            width={800}
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            onOk={() => {
               form.validateFields().then(onFinish);
            }}
         >
            <Form form={form} layout="vertical">
               <div className="grid grid-cols-2 gap-3">
                  <Form.Item label="Хаанаас" name="fromWarehouseId">
                     <Select
                        options={warehouses?.map((warehouse) => ({
                           label: warehouse.name,
                           value: warehouse.id
                        }))}
                     />
                  </Form.Item>
                  <Form.Item label="Хааш нь" name="toWarehouseId">
                     <Select
                        options={warehouses?.map((warehouse) => ({
                           label: warehouse.name,
                           value: warehouse.id
                        }))}
                     />
                  </Form.Item>
               </div>
               <Form.Item label="bookingAt Огноо" name="bookingAt">
                  <ConfigProvider locale={locale}>
                     <DatePicker />
                  </ConfigProvider>
               </Form.Item>
               <div className="bg-gray-50 p-2">
                  <Form.List name="bookingMaterials">
                     {(bookingMaterials, { add, remove }, { errors }) => (
                        <>
                           {bookingMaterials.map((bookingMaterial, index) => (
                              <div key={index} className="flex flex-row gap-2 justify-between items-center">
                                 <Form.Item label="Материалын нэр" name={[bookingMaterial.name, 'id']}>
                                    <Select loading={selectLoading} onPopupScroll={onScrollSelect}>
                                       {materials?.map((material) => (
                                          <Option key={material.id} value={material.id}>
                                             {material.name}
                                          </Option>
                                       ))}
                                       {selectLoading && <Option>Loading...</Option>}
                                    </Select>
                                 </Form.Item>
                                 <InfiniteSelect isRender={true} />
                                 <Form.Item label="Үлдсэн тоо" name={[bookingMaterial.name, 'lastQty']}>
                                    <InputNumber disabled />
                                 </Form.Item>
                                 <Form.Item label="Захиалах тоо" name={[bookingMaterial.name, 'quantity']}>
                                    <InputNumber />
                                 </Form.Item>
                                 <Button
                                    danger
                                    onClick={() => {
                                       remove(bookingMaterial.name);
                                    }}
                                    icon={<MinusOutlined />}
                                 />
                              </div>
                           ))}
                           <Form.Item>
                              <Button
                                 type="dashed"
                                 onClick={() => add()}
                                 style={{ width: '60%' }}
                                 icon={<PlusOutlined />}
                              >
                                 Add field
                              </Button>
                              <Form.ErrorList errors={errors} />
                           </Form.Item>
                        </>
                     )}
                  </Form.List>
               </div>
            </Form>
         </Modal>
      </div>
   );
   // return <MiddleTable typeId={9} />;
}
export default Transfers;
