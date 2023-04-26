import React from 'react';
import { Form, InputNumber, Select, Switch } from 'antd';
const { Option } = Select;
function PurchaseInformation() {
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-1">
               <Form.Item label="Хаана ашиглах" name="usageType">
                  <Select>
                     <Option value="OUT">Амбулатори</Option>
                     <Option value="IN">Хэвтэн</Option>
                     <Option value="DAY_TREATMENT">Өдрийн эмчилгээ</Option>
                     <Option value="TRADITIONAL">Уламжлалт</Option>
                     <Option value="ALL">Бүгд</Option>
                  </Select>
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Даатгалд хамаарах эсэх"
                  name="isInsurance"
                  valuePropName="checked"
                  labelCol={{
                     span: 12
                  }}
                  wrapperCol={{
                     span: 12
                  }}
               >
                  <Switch
                     className="bg-sky-700"
                     checkedChildren="Тийм"
                     unCheckedChildren="Үгүй"
                  />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item label="Амбулаторийн үнэ" name="price">
                  <InputNumber />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Стационар хөнгөлөлттэй эсэх"
                  name="isInDiscount"
                  valuePropName="checked"
                  labelCol={{
                     span: 12
                  }}
                  wrapperCol={{
                     span: 12
                  }}
               >
                  <Switch
                     className="bg-sky-700"
                     checkedChildren="Тийм"
                     unCheckedChildren="Үгүй"
                  />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item label="Хэвтэн эмчлүүлэх үнэ" name="inpatientPrice">
                  <InputNumber />
               </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-1">
               <Form.Item
                  label="Идэвхтэй эсэх"
                  name="isActiveMedicine"
                  valuePropName="checked"
                  labelCol={{
                     span: 12
                  }}
                  wrapperCol={{
                     span: 12
                  }}
               >
                  <Switch
                     className="bg-sky-700"
                     checkedChildren="Тийм"
                     unCheckedChildren="Үгүй"
                  />
               </Form.Item>
            </div>
         </div>
      </>
   );
}
export default PurchaseInformation;
