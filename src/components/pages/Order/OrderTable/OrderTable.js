import React from 'react';
import { Button, Checkbox, DatePicker, Input, InputNumber, Table } from 'antd';
import OrderForm from './OrderForm';
import TextArea from 'antd/lib/input/TextArea';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { MinusCircleOutlined } from '@ant-design/icons';
import { NewInputNumber } from '../../../Input/Input';
const checkNumber = (event) => {
   var charCode = event.charCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
   } else {
      return true;
   }
};

function OrderTable(props) {
   const { isLoading, usageType, services, form, remove, setTotal } = props;
   const minRule = (index) => {
      const type = form.getFieldValue(['services', index, 'type']);
      const state = type === 8 || type === 2 ? true : false;
      return [
         {
            required: state,
            message: 'Заавал'
         },
         {
            validator: async (_, item) => {
               if (state && item < 1) {
                  return Promise.reject(new Error('Хамгийн багадаа 1'));
               }
            }
         }
      ];
   };
   const totalCalculator = (key, value, name) => {
      form.setFieldValue(['services', key, `${name}`], value);
      let repeatTime = form.getFieldValue(['services', key, 'repeatTime']);
      let dayCount = form.getFieldValue(['services', key, 'dayCount']);
      const oPrice = form.getFieldValue(['services', key, 'oPrice']);
      form.setFieldValue(['services', key, 'total'], repeatTime * dayCount);
      form.setFieldValue(['services', key, 'price'], repeatTime * dayCount * oPrice);
      const services = form.getFieldValue('services');
      var total = 0;
      services.map((service) => {
         if (service.price) {
            total += service.price;
         }
      });
      setTotal(total);
   };
   const isDisable = (index, name) => {
      if (name === 'repeatTime' || name === 'dayCount') {
         const type = form.getFieldValue(['services', index, 'type']);
         if (type === 8 || type === 2) {
            return false;
         } else {
            return true;
         }
      }
   };
   return (
      <>
         <Table
            rowKey="fieldKey"
            loading={isLoading}
            columns={[
               {
                  title: '№',
                  width: 50,
                  render: (_, _row, index) => index + 1
               },
               {
                  title: 'Cito',
                  width: 40,
                  dataIndex: 'isCito',
                  render: (_value, _row, index) => (
                     <OrderForm noStyle name={[index, 'isCito']} valuePropName="checked" editing={true}>
                        <Checkbox />
                     </OrderForm>
                  )
               },
               {
                  title: 'Нэр',
                  dataIndex: 'name',
                  render: (_value, _row, index) => (
                     <OrderForm noStyle name={[index, 'name']} editing={false}>
                        <Input />
                     </OrderForm>
                  )
               },
               {
                  title: 'Хэлбэр',
                  dataIndex: 'medicineType',
                  render: (_value, _row, index) => (
                     <OrderForm name={[index, 'medicineType']} editing={false}>
                        <TextArea />
                     </OrderForm>
                  )
               },
               {
                  title: 'Тун',
                  dataIndex: 'dose',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'dose']}
                        editing={form.getFieldValue(['services', index, 'type']) === 8 ? true : false}
                     >
                        <Input />
                     </OrderForm>
                  )
               },
               {
                  title: 'Сорьц',
                  dataIndex: 'specimen',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'specimen']}
                        editing={form.getFieldValue(['services', index, 'type']) === 0 ? true : false}
                     >
                        <TextArea />
                     </OrderForm>
                  )
               },
               {
                  title: 'Тайлбар',
                  dataIndex: 'description',
                  render: (_value, _row, index) => (
                     <OrderForm name={[index, 'description']} editing={true}>
                        <TextArea />
                     </OrderForm>
                  )
               },
               {
                  title: 'Өдөрт хэдэн удаа',
                  width: 130,
                  dataIndex: 'repeatTime',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'repeatTime']}
                        rules={minRule(index, 'repeatTime')}
                        editing={!isDisable(index, 'repeatTime')}
                     >
                        <NewInputNumber
                           onChange={(e) => totalCalculator(index, e, 'repeatTime')}
                           defualtvalue={1}
                           controls={false}
                           min={1}
                           onKeyPress={checkNumber}
                        />
                     </OrderForm>
                  )
               },
               {
                  title: 'Хэдэн өдөр',
                  width: 130,
                  dataIndex: 'dayCount',
                  render: (_value, _row, index) => (
                     <OrderForm
                        name={[index, 'dayCount']}
                        rules={minRule(index, 'dayCount')}
                        editing={!isDisable(index, 'dayCount')}
                     >
                        <NewInputNumber
                           onChange={(e) => totalCalculator(index, e, 'dayCount')}
                           defualtvalue={1}
                           controls={false}
                           min={1}
                           onKeyPress={checkNumber}
                        />
                     </OrderForm>
                  )
               },
               {
                  title: 'Нийт',
                  width: 60,
                  dataIndex: 'total',
                  render: (_value, _row, index) => (
                     <OrderForm noStyle name={[index, 'total']} editing={false}>
                        <InputNumber onKeyPress={checkNumber} />
                     </OrderForm>
                  )
               },
               {
                  title: 'Эхлэх өдөр',
                  dataIndex: 'startAt',
                  render: (_value, _row, index) => {
                     const type = form.getFieldValue(['services', index, 'type']);
                     if (type === 2 || type === 8) {
                        return (
                           <OrderForm name={[index, 'startAt']} editing={true}>
                              <DatePicker
                                 showTime={{
                                    format: 'HH:mm'
                                 }}
                                 locale={mnMN}
                                 placeholder="Өдөр сонгох"
                              />
                           </OrderForm>
                        );
                     }
                     return;
                  }
               },
               {
                  title: 'Үнэ',
                  width: 200,
                  dataIndex: 'price',
                  render: (_value, _row, index) => (
                     <OrderForm noStyle name={[index, 'price']} isNumber={true} editing={false}>
                        <InputNumber onKeyPress={checkNumber} />
                     </OrderForm>
                  )
               },
               {
                  title: '',
                  width: 40,
                  render: (_value, _row, index) => (
                     <Button onClick={() => remove(index)} icon={<MinusCircleOutlined style={{ color: 'red' }} />} />
                  )
               }
            ]}
            dataSource={services}
            pagination={false}
         />
      </>
   );
}
export default OrderTable;
