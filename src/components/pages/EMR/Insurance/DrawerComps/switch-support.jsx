import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
import Finger from '@Comman/Finger/Finger';

import healtInsurance from '@ApiServices/healt-insurance/healtInsurance';
import { useSelector } from 'react-redux';
import { selectCurrentHicsSeal } from '@Features/emrReducer';

export const SwitchSupport = (props) => {
   const { form } = props;
   const hicsSeal = useSelector(selectCurrentHicsSeal);

   const [hicsSupports, setHicsSupports] = useState([]);

   const getHicsService = async () => {
      await healtInsurance.getHicsService().then(({ data: { code, description, result } }) => {
         if (code === 200) {
            const currentGroupId = (hicsSeal.hicsServiceId || '')?.toString().substring(0, 3);
            if (currentGroupId) {
               setHicsSupports(
                  result.filter(
                     (hicsService) =>
                        [Number(currentGroupId)].includes(hicsService.groupId) &&
                        hicsService.id != hicsSeal.hicsServiceId
                  )
               );
            }
         } else {
            openNofi('error', 'Амжилттгүй', description);
         }
      });
   };

   useEffect(() => {
      getHicsService();
   }, []);

   return (
      <div className="space-y-3">
         <Form form={form} layout="vertical">
            <div className="w-full flex flex-col gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block p-2">
                  <Finger
                     form={form}
                     insurance={true}
                     noStyle
                     name="fingerprint"
                     rules={[
                        {
                           required: true,
                           message: 'Иргэний хурууны хээ заавал'
                        }
                     ]}
                  >
                     <Input />
                  </Finger>
               </div>
               <Form.Item
                  label="Т.Ү-ний дугаар"
                  name="hicsServiceId"
                  rules={[{ required: true, message: 'Үйлчилгээний төрөл заавал сонгох' }]}
                  style={{
                     width: '100%'
                  }}
                  className="mb-0"
               >
                  <Select
                     placeholder="Үйлчилгээний төрөл сонгох"
                     options={hicsSupports.map((hicsSupport) => ({
                        label: `${hicsSupport.name}->${hicsSupport.id}`,
                        value: hicsSupport.id
                     }))}
                  />
               </Form.Item>
            </div>
         </Form>
      </div>
   );
};
