import { Form, Input, Select } from 'antd';
import React from 'react';
import educations from '../educations.js'; //bolowsrol
import occupations from '../occupations.js'; //mergejil
import workplaces from '../workplaces.js'; //ajlin gazar
import positions from '../positions.js'; // alban tushaal
import employements from '../employements.js'; // hodolmor erehlelt
import emplessDescriptions from '../emplessDescriptions.js'; // hodolmor erhlegu shaltgaan
function MoreInfo({ form }) {
   return (
      <div className="rounded-md bg-[#F3F4F6] p-2 flex flex-col gap-2">
         <Form.Item label="Ажлын газар:" name="workplace">
            <Select
               showSearch
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               options={workplaces?.map((workplace) => ({
                  label: workplace.name,
                  value: workplace.id
               }))}
            />
         </Form.Item>
         <Form.Item label="Албан байр:" name="positionId">
            <Select
               showSearch
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               onSelect={(_, option) => form.setFieldValue('positionName', option.label)}
               options={positions?.map((position) => ({
                  label: position.name,
                  value: position.id
               }))}
            />
         </Form.Item>
         <Form.Item label="" name="positionName" hidden>
            <Input disabled className="w-10" />
         </Form.Item>
         <Form.Item label="Мэргэжил:" name="occuptionId">
            <Select
               showSearch
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               onSelect={(_, option) => form.setFieldValue('occuptionName', option.label)}
               options={occupations?.map((occupation) => ({
                  label: occupation.name,
                  value: occupation.id
               }))}
            />
         </Form.Item>
         <Form.Item label="" name="occuptionName" hidden>
            <Input disabled className="w-10" />
         </Form.Item>
         <Form.Item label="Боловсрол:" name="educationId">
            <Select
               showSearch
               onSelect={(_, option) => form.setFieldValue('educationName', option.label)}
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               options={educations?.map((education) => ({
                  label: education.name,
                  value: education.id
               }))}
            />
         </Form.Item>
         <Form.Item label="" name="educationName" hidden>
            <Input disabled className="w-10" />
         </Form.Item>
         <Form.Item label="Хөдөлмөр эрхлэлт:" name="employmentId">
            <Select
               showSearch
               onSelect={(_, option) => form.setFieldValue('employmentName', option.label)}
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               options={employements?.map((employement) => ({
                  label: employement.name,
                  value: employement.id
               }))}
            />
         </Form.Item>
         <Form.Item label="" name="employmentName" hidden>
            <Input disabled className="w-10" />
         </Form.Item>
         <Form.Item label="Хөдөлмөр эрхлээгүй шалтгаан:" name="emplessDescriptionId">
            <Select
               showSearch
               onSelect={(_, option) => form.setFieldValue('emplessDescription', option.label)}
               filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
               options={emplessDescriptions?.map((emplessDescription) => ({
                  label: emplessDescription.name,
                  value: emplessDescription.id
               }))}
            />
         </Form.Item>
         <Form.Item name="emplessDescription" hidden>
            <Input disabled />
         </Form.Item>
      </div>
   );
}
export default MoreInfo;
