import { Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import SocialStatus from '../socialStatus.js';
import ChildStatus from '../childStatus.js';
import serviceScopeStatus from '../serviceScopeStatus.js';
import marriageStatus from '../marriageStatus.js';
function MoreInfo({ form }) {
   const { Option } = Select;
   const [isChild, setIsChild] = useState(true);
   const checkIsChild = (value) => {
      if (value === 6) {
         setIsChild(false);
      } else {
         setIsChild(true);
         form.setFieldValue('type');
      }
   };
   return (
      <div>
         <div className="p-1">
            <Form.Item
               label="Нийгмийн байдал:"
               name="socialStatusType"
               rules={[{ required: false, message: 'Нийгмийн байдал оруулна уу' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select onChange={checkIsChild}>
                  {SocialStatus.map((status, index) => {
                     return (
                        <Option key={index} value={status.value}>
                           {status.label}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Хэрэв хүүхэд бол:"
               name="type"
               rules={[
                  {
                     required: !isChild,
                     message: 'Хэрэв хүүхэд бол оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select disabled={isChild}>
                  {ChildStatus.map((child, index) => {
                     return (
                        <Option key={index} value={child.value}>
                           {child.label}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Гэрлэлтийн байдал:"
               name="marriageStatus"
               rules={[
                  {
                     // required: isChild,
                     required: false,
                     message: 'Гэрлэлтийн байдал оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select disabled={!isChild}>
                  {marriageStatus.map((status, index) => {
                     return (
                        <Option key={index} value={status.value}>
                           {status.label}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Боловсрол:"
               name="educationType"
               rules={[
                  {
                     // required: isChild,
                     required: false,
                     message: 'Боловсрол оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select>
                  <Option value={0}>Боловсролгүй</Option>
                  <Option value={1}>Бага</Option>
                  <Option value={2}>Бүрэн дунд</Option>
                  <Option value={3}>Мэргэжлийн болон техникийн</Option>
                  <Option value={4}>Дипломын</Option>
                  <Option value={5}>Бакалавр</Option>
                  <Option value={6}>Магистр</Option>
                  <Option value={7}>Доктор</Option>
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Үйлчлэх хүрээ:"
               name="serviceScopeStatusType"
               rules={[
                  {
                     // required: isChild,
                     required: false,
                     message: 'Үйлчлэх хүрээ оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select disabled={!isChild}>
                  {serviceScopeStatus.map((scope, index) => {
                     return (
                        <Option key={index} value={scope.value}>
                           {scope.label}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Ажлын газар:"
               name="organization"
               rules={[
                  {
                     // required: isChild,
                     required: false,
                     message: 'Ажлын газар оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input disabled={!isChild} />
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Албан тушаал:"
               name="jobPosition"
               rules={[
                  {
                     // required: isChild,
                     required: false,
                     message: 'Албан тушаал оруулна уу'
                  }
               ]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input disabled={!isChild} />
            </Form.Item>
         </div>
      </div>
   );
}
export default MoreInfo;
