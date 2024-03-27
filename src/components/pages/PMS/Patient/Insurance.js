import React, { useEffect, useState } from 'react';
import { Form, Result, Select } from 'antd';
import { useSelector } from 'react-redux';
//redux
import { selectCurrentInsurance } from '@Features/authReducer';
//api
import healtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';

function Insurance() {
   const isInsurance = useSelector(selectCurrentInsurance);
   const [socialStatus, setSocialStatus] = useState([]);
   const getFreeType = async () => {
      await healtInsuranceApi.getFreeType().then((response) => {
         if (response.data.code === 200) {
            setSocialStatus(response.data.result);
         }
      });
   };
   useEffect(() => {
      isInsurance && getFreeType();
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
               <Select
                  options={socialStatus.map((status) => ({
                     label: status.name,
                     value: status.id
                  }))}
               />
            </Form.Item>
            <Form.Item label="Харьяа хороо эсэх:" name="isLiver" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
               <Select
                  options={[
                     { value: true, label: 'Тийм' },
                     { value: false, label: 'Үгүй' }
                  ]}
               />
            </Form.Item>
         </div>
      </div>
   );
}
export default Insurance;
