import React from 'react';
import { Button, Checkbox, DatePicker, Input, InputNumber, Table } from 'antd';
import OrderForm from './OrderForm';
import TextArea from 'antd/lib/input/TextArea';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

const { Column } = Table;

const checkNumber = (event) => {
   var charCode = event.charCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
   } else {
      return true;
   }
};

function OrderTable(props) {
   const { usageType, services, form, remove } = props;
   const minRule = (index) => {
      return [
         {
            required:
               form.getFieldValue(['services', index, 'type']) === 8 ||
               form.getFieldValue(['services', index, 'type']) === 2
                  ? true
                  : false,
            message: 'Заавал'
         },
         {
            validator: async (_, item) => {
               if (item < 1) {
                  return Promise.reject(new Error('Хамгийн багадаа 1'));
               } else {
                  return Promise.reject(new Error());
               }
            }
         }
      ];
   };
   const totalCalculator = (key, type, name) => {
      if (type === 'increase') {
         let count = form.getFieldValue(['services', key, `${name}`]);
         if (count === undefined) {
            form.setFieldValue(['services', key, `${name}`], 1);
            count = 1;
         } else {
            form.setFieldValue(['services', key, `${name}`], count + 1);
         }
      } else if (type === 'decrease') {
         const count = form.getFieldValue(['services', key, `${name}`]);
         form.setFieldValue(['services', key, `${name}`], count - 1);
      }
      let repeatTime = form.getFieldValue(['services', key, 'repeatTime']);
      let dayCount = form.getFieldValue(['services', key, 'dayCount']);
      if (repeatTime === undefined) {
         form.setFieldValue(['services', key, 'repeatTime'], 1);
         repeatTime = 1;
      }
      if (dayCount === undefined) {
         form.setFieldValue(['services', key, 'dayCount'], 1);
         dayCount = 1;
      }
      const oPrice = form.getFieldValue(['services', key, 'oPrice']);
      form.setFieldValue(['services', key, 'total'], repeatTime * dayCount);
      form.setFieldValue(['services', key, 'price'], repeatTime * dayCount * oPrice);
      // const services = form.getFieldValue('services');
      // var total = 0;
      // services.map((service) => {
      //    total += service.price;
      // });
      // setTotal(total);
   };
   const isDisable = (index, name) => {
      if (name === 'repeatTime') {
         return form.getFieldValue(['services', index, 'type']) === 8 ||
            form.getFieldValue(['services', index, 'type']) === 2
            ? false
            : true;
      }
   };
   return (
      <div className="overflow-auto">
         <Table bordered dataSource={services} pagination={false}>
            <Column
               title="Cito"
               width={40}
               dataIndex={'isCito'}
               render={(value, row, index) => {
                  return (
                     <OrderForm noStyle name={[index, 'isCito']} valuePropName="checked" editing={true}>
                        <Checkbox />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title="Нэр"
               dataIndex={'name'}
               render={(value, row, index) => {
                  return (
                     <OrderForm noStyle name={[index, 'name']} editing={false}>
                        <Input />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title="Хэлбэр"
               dataIndex={'medicineType'}
               render={(value, row, index) => {
                  return (
                     <OrderForm name={[index, 'medicineType']} editing={false}>
                        <TextArea />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title="Тун"
               dataIndex={'dose'}
               render={(value, row, index) => {
                  return (
                     <OrderForm
                        name={[index, 'dose']}
                        editing={form.getFieldValue(['services', index, 'type']) === 8 ? true : false}
                     >
                        <Input />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title="Сорьц"
               dataIndex={'specimen'}
               render={(value, row, index) => {
                  return (
                     <OrderForm
                        name={[index, 'specimen']}
                        editing={form.getFieldValue(['services', index, 'type']) === 0 ? true : false}
                        // editing={true}
                     >
                        <TextArea />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title="Тайлбар"
               dataIndex={'description'}
               render={(value, row, index) => {
                  return (
                     <OrderForm name={[index, 'description']} editing={true}>
                        <TextArea />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title="Өдөрт хэдэн удаа"
               width={130}
               dataIndex={'repeatTime'}
               render={(value, row, index) => {
                  return (
                     <div className="inline-flex">
                        <Button
                           title="Хасах"
                           onClick={() => totalCalculator(index, 'decrease', 'repeatTime')}
                           disabled={isDisable(index, 'repeatTime')}
                           className={isDisable(index, 'repeatTime') ? 'hidden' : ''}
                           icon={
                              <MinusCircleOutlined
                                 style={{
                                    color: 'red'
                                 }}
                              />
                           }
                           shape="circle"
                        />
                        <OrderForm
                           name={[index, 'repeatTime']}
                           rules={minRule(index)}
                           editing={!isDisable(index, 'repeatTime')}
                        >
                           <InputNumber
                              disabled={true}
                              className=" font-semibold text-black"
                              min={1}
                              onKeyPress={checkNumber}
                           />
                        </OrderForm>
                        <Button
                           title="Нэмэх"
                           onClick={() => totalCalculator(index, 'increase', 'repeatTime')}
                           disabled={isDisable(index, 'repeatTime')}
                           className={isDisable(index, 'repeatTime') ? 'hidden' : ''}
                           icon={
                              <PlusCircleOutlined
                                 style={{
                                    color: 'green'
                                 }}
                              />
                           }
                           shape="circle"
                        />
                     </div>
                  );
               }}
            />
            <Column
               title="Хэдэн өдөр"
               width={50}
               dataIndex={'dayCount'}
               render={(value, row, index) => {
                  return (
                     <OrderForm
                        name={[index, 'dayCount']}
                        rules={minRule(index)}
                        editing={
                           form.getFieldValue(['services', index, 'type']) === 8 ||
                           form.getFieldValue(['services', index, 'type']) === 2
                              ? true
                              : false
                        }
                     >
                        <InputNumber
                           min={1}
                           onChange={(_e) => totalCalculator(index)}
                           keyboard={false}
                           onKeyPress={checkNumber}
                        />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title="Нийт"
               width={60}
               dataIndex={'total'}
               render={(value, row, index) => {
                  return (
                     <OrderForm
                        noStyle
                        name={[index, 'total']}
                        editing={false}
                        // editing={
                        //    form.getFieldValue(['services', index, 'type']) === 8 ||
                        //    form.getFieldValue(['services', index, 'type']) === 2
                        //       ? true
                        //       : false
                        // }
                     >
                        <InputNumber onKeyPress={checkNumber} />
                     </OrderForm>
                  );
               }}
            />
            {usageType === 'IN' && (
               <Column
                  title="Нийт хэмжээ"
                  dataIndex={'startAt'}
                  render={(value, row, index) => {
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
                  }}
               />
            )}
            <Column
               title="Үнэ"
               width={200}
               dataIndex={'price'}
               render={(value, row, index) => {
                  return (
                     <OrderForm noStyle name={[index, 'price']} isNumber={true} editing={false}>
                        <InputNumber onKeyPress={checkNumber} />
                     </OrderForm>
                  );
               }}
            />
            <Column
               title=""
               width={40}
               render={(value, row, index) => {
                  return (
                     <Button onClick={() => remove(index)} icon={<MinusCircleOutlined style={{ color: 'red' }} />} />
                  );
               }}
            />
         </Table>
      </div>
   );
}
export default OrderTable;
