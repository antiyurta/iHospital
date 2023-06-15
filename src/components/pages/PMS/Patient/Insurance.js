import React, { useEffect, useState } from 'react';
import { Form, Input, Radio, Result, Select, Switch } from 'antd';
import jwtInterceopter from '../../../jwtInterceopter';
import { useSelector } from 'react-redux';
import { selectCurrentInsurance } from '../../../../features/authReducer';

const { Option } = Select;

function Insurance({ form }) {
   const isInsurance = useSelector(selectCurrentInsurance);
   const [socialStatus, setSocialStatus] = useState([]);
   const getFreeType = async () => {
      await jwtInterceopter.get('health-insurance/free-type').then((response) => {
         if (response.data.code === 200) {
            setSocialStatus(response.data.result);
         }
      });
   };
   useEffect(() => {
      if (isInsurance) {
         getFreeType();
      }
   }, []);
   if (!isInsurance) {
      return <Result title="Эмнэлэг даатгалгүй байна" />;
   }
   return (
      <div>
         <div className="p-1">
            <Form.Item
               label="Төр хариуцах төрөл:"
               name="insuranceType"
               // rules={[{ required: isInsurance, message: 'Төр хариуцах төрөл заавал сонго' }]}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
            >
               <Select>
                  {socialStatus.map((status, index) => {
                     return (
                        <Option key={index} value={status.id}>
                           {status.name}
                        </Option>
                     );
                  })}
               </Select>
            </Form.Item>
         </div>
      </div>
   );
}
export default Insurance;
