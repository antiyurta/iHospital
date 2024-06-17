import React from 'react';
import { Form, Input, InputNumber, Switch } from 'antd';
//defaults
const { TextArea } = Input;
const General = () => {
   return (
      <div className="h-[500px] overflow-auto flex flex-col gap-2">
         <div className="bg-[#F2F3F5] p-2 rounded-lg flex flex-col gap-1">
            <Form.Item name="id" hidden>
               <InputNumber />
            </Form.Item>
            <Form.Item
               label="Эмнэлэгийн нэр"
               name="name"
               rules={[
                  {
                     required: true,
                     message: 'Эмнэлэгийн нэр'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Эмнэлэгийн төрөл"
               name="hospitalType"
               rules={[
                  {
                     required: true,
                     message: 'Эмнэлэгийн нэр'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Database Нэр"
               name="databaseName"
               rules={[
                  {
                     required: true,
                     message: 'Database Нэр'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Регистр дугаар"
               name="registerNumber"
               rules={[
                  {
                     required: true,
                     message: 'Регистр дугаар'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Цагийн хуваарь"
               name="hsTimetable"
               rules={[
                  {
                     required: true,
                     message: 'Цагийн хуваарь'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Social хаяг"
               name="hsSocial"
               rules={[
                  {
                     required: true,
                     message: 'Танилцууллага'
                  }
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="Хаяг"
               name="hsAddress"
               rules={[
                  {
                     required: true,
                     message: 'Хаяг'
                  }
               ]}
            >
               <TextArea />
            </Form.Item>
            <Form.Item
               label="Танилцууллага"
               name="hsIntroduction"
               rules={[
                  {
                     required: true,
                     message: 'Танилцууллага'
                  }
               ]}
            >
               <TextArea />
            </Form.Item>
            <div className="grid grid-cols-2 gap-2 items-end">
               <Form.Item
                  label="Утасны дугаар"
                  name="phone"
                  rules={[
                     {
                        required: true,
                        message: 'Утас заавал'
                     }
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item label="Холбоо барих хүний дугаар" name="hsPersonPhone">
                  <Input />
               </Form.Item>
               <Form.Item label="Салбарын өргөрөг" name="hsLat">
                  <InputNumber />
               </Form.Item>
               <Form.Item label="Салбарын уртраг" name="hsLng">
                  <InputNumber />
               </Form.Item>
               <Form.Item label="Нийт орны тоо" name="hsCapacity">
                  <InputNumber />
               </Form.Item>
               <Form.Item label="Сул орны тоо" name="numberOfBeds">
                  <InputNumber />
               </Form.Item>
               <Form.Item
                  label="Идэвхтэй эсэх"
                  name="isActive"
                  rules={[
                     {
                        required: true,
                        message: 'Идэвхтэй эсэх'
                     }
                  ]}
                  className="white-radio"
                  valuePropName="checked"
               >
                  <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
               </Form.Item>
               <Form.Item
                  label="Даатгалтай эсэх"
                  name="isInsurance"
                  rules={[
                     {
                        required: true,
                        message: 'Даатгалтай эсэх'
                     }
                  ]}
                  className="white-radio"
                  valuePropName="checked"
               >
                  <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
               </Form.Item>
               <Form.Item
                  label="XYP эсэх"
                  name="isXyp"
                  rules={[
                     {
                        required: true,
                        message: 'XYP эсэх'
                     }
                  ]}
                  className="white-radio"
                  valuePropName="checked"
               >
                  <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
               </Form.Item>
               <Form.Item
                  label="Дараа төлбөрт эсэх"
                  name="isAfterPay"
                  rules={[
                     {
                        required: true,
                        message: 'Дараа төлбөрт эсэх'
                     }
                  ]}
                  className="white-radio"
                  valuePropName="checked"
               >
                  <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
               </Form.Item>
               <Form.Item
                  label="Дараа төлбөрт эсэх"
                  name="isAfterPay"
                  rules={[
                     {
                        required: true,
                        message: 'Дараа төлбөрт эсэх'
                     }
                  ]}
                  className="white-radio"
                  valuePropName="checked"
               >
                  <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
               </Form.Item>
            </div>
         </div>
      </div>
   );
};
export default General;
