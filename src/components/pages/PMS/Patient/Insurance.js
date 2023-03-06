import React from 'react';
import { Form, Input, Radio, Switch } from 'antd';

function Insurance({ form }) {
   return (
      <div>
         <div className="p-1">
            <Form.Item
               label="Даатгалын хэлбэр:"
               name="isInsuranceType"
               //    valuePropName="checked"
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               {/* <Switch
                  className="bg-sky-700"
                  checkedChildren="ХУВЬ"
                  unCheckedChildren="ТӨР"
               /> */}
               <Radio.Group>
                  <Radio value={false}>ХУВЬ</Radio>
                  <Radio value={true}>ТӨР</Radio>
               </Radio.Group>
            </Form.Item>
         </div>
         <div className="p-1">
            <Form.Item
               label="Даатгалын дугаар"
               name="insuranceNo"
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Input />
            </Form.Item>
         </div>
      </div>
   );
}
export default Insurance;
