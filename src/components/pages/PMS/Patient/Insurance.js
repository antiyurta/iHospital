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
      <div className="rounded-md bg-[#F3F4F6] p-2 flex flex-col gap-2">
         <Form.Item label="Төр хариуцах төрөл:" name="insuranceType">
            <Select
               options={socialStatus.map((status) => ({
                  label: status.name,
                  value: status.id
               }))}
            />
         </Form.Item>
         <Form.Item label="Харьяа хороо эсэх:" name="isLiver">
            <Select
               options={[
                  { value: true, label: 'Тийм' },
                  { value: false, label: 'Үгүй' }
               ]}
            />
         </Form.Item>
      </div>
   );
}
export default Insurance;
