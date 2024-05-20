import React from 'react';
import { Form, Input, Radio, Select } from 'antd';
//utils
import {
   education,
   workplace,
   position,
   occupation,
   isEmployment,
   employment,
   emplessDescription
} from '@Utils/config/xypField.js';
function MoreInfo({ form }) {
   return (
      <div className="rounded-md bg-[#F3F4F6] p-2 flex flex-col gap-2">
         <Form.Item className="mb-0 white-radio" label="Оршин суугч эсэх:" name="isLiver">
            <Radio.Group
               options={[
                  {
                     label: 'Тийм',
                     value: true
                  },
                  {
                     label: 'Үгүй',
                     value: false
                  }
               ]}
            />
         </Form.Item>
         <Form.Item label="Боловсрол:" name="educationId">
            <Select
               showSearch
               onSelect={(_, option) => form.setFieldValue('educationName', option.label)}
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               options={education?.map((edu) => ({
                  label: edu.valueName,
                  value: edu.valueId.toString()
               }))}
            />
         </Form.Item>
         <Form.Item label="" name="educationName" hidden>
            <Input disabled className="w-10" />
         </Form.Item>
         <Form.Item label="Ажлын газар:" name="workplace">
            <Select
               showSearch
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               options={workplace?.map((place) => ({
                  label: place.valueName,
                  value: place.valueName
               }))}
            />
         </Form.Item>
         <Form.Item label="Нийгмийн байдал:" name="positionId">
            <Select
               showSearch
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               onSelect={(_, option) => form.setFieldValue('positionName', option.label)}
               options={position?.map((pos) => ({
                  label: pos.valueName,
                  value: pos.valueId.toString()
               }))}
            />
         </Form.Item>
         <Form.Item label="" name="positionName" hidden>
            <Input disabled className="w-10" />
         </Form.Item>
         <Form.Item label="Мэргэжил:" name="occupationId">
            <Select
               showSearch
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               onSelect={(_, option) => form.setFieldValue('occupationName', option.label)}
               options={occupation?.map((occu) => ({
                  label: occu.valueName,
                  value: occu.valueId.toString()
               }))}
            />
         </Form.Item>
         <Form.Item label="" name="occupationName" hidden>
            <Input disabled className="w-10" />
         </Form.Item>
         <Form.Item className="mb-0 white-radio" label="Хөдөлмөр эрхлэлт:" name="isEmployment">
            <Radio.Group
               onChange={(e) => {
                  if (e.target.value === 1) {
                     form.resetFields([['emplessDescriptionId', 'emplessDescription']]);
                  } else if (e.target.value === 2) {
                     form.resetFields([['employmentId', 'employmentName']]);
                  }
               }}
               options={isEmployment?.map((empo) => ({
                  label: empo.valueName,
                  value: empo.valueId
               }))}
            />
         </Form.Item>
         <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.isEmployment !== currentValues.isEmployment}
         >
            {({ getFieldValue }) =>
               getFieldValue('isEmployment') === 1 ? (
                  <>
                     <Form.Item label="Хөдөлмөр эрхлэлт:" name="employmentId">
                        <Select
                           showSearch
                           onSelect={(_, option) => form.setFieldValue('employmentName', option.label)}
                           filterOption={(input, option) =>
                              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                           }
                           options={employment?.map((emp) => ({
                              label: emp.valueName,
                              value: emp.valueId.toString()
                           }))}
                        />
                     </Form.Item>
                     <Form.Item label="" name="employmentName" hidden>
                        <Input disabled className="w-10" />
                     </Form.Item>
                  </>
               ) : (
                  <>
                     <Form.Item label="Хөдөлмөр эрхлээгүй шалтгаан:" name="emplessDescriptionId">
                        <Select
                           showSearch
                           onSelect={(_, option) => form.setFieldValue('emplessDescription', option.label)}
                           filterOption={(input, option) =>
                              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                           }
                           options={emplessDescription?.map((empl) => ({
                              label: empl.valueName,
                              value: empl.valueId.toString()
                           }))}
                        />
                     </Form.Item>
                     <Form.Item name="emplessDescription" hidden>
                        <Input disabled />
                     </Form.Item>
                  </>
               )
            }
         </Form.Item>
      </div>
   );
}
export default MoreInfo;
