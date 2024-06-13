import React from 'react';
import { Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import AForm from '../../../BeforeAmbulatory/Customized/AForm';
import { bloodType, pregnancyActivity, relationship } from '@Utils/config/xypField';

const maxWidth = 'max-w-[200px] min-w-[200px]';
const defaultPlaceholder = '------';

const SelectInput = ({ label, name, options, rules, onSelect }) => (
   <AForm>
      <Form.Item label={label} name={name} rules={rules}>
         <Select className={maxWidth} placeholder={'Сонгох'} onSelect={onSelect} options={options} />
      </Form.Item>
   </AForm>
);

export const PregnantInfoItem = ({ form }) => {
   return (
      <Row gutter={[3, 3]} className="mt-3">
         <Col span={24}>
            <AForm>
               <Form.Item
                  label="Тусламж, үйлчилгээний дугаар"
                  name={['pregnantInfo', 'serviceNo']}
                  rules={[{ required: true, message: 'Тусламж, үйлчилгээний дугаар' }]}
               >
                  <Input className={maxWidth} placeholder={defaultPlaceholder} />
               </Form.Item>
            </AForm>
         </Col>
         <Col span={24}>
            <AForm>
               <Form.Item
                  className="flex justify-end"
                  label="Жирэмсний хяналтад орсон огноо"
                  name={['pregnantInfo', 'pregnancyControlledDate']}
                  rules={[{ required: true, message: 'Жирэмсний хяналтад орсон огноо' }]}
               >
                  <DatePicker className={maxWidth} placeholder={'Огноо оруулах'} />
               </Form.Item>
            </AForm>
         </Col>
         <Col span={24}>
            <AForm>
               <Form.Item
                  label="Жирэмсний хугацаа /7 хоногоор/"
                  name={['pregnantInfo', 'pregnancyWeek']}
                  rules={[{ required: true, message: 'Жирэмсний хугацаа /7 хоногоор/' }]}
               >
                  <InputNumber className={maxWidth} placeholder={defaultPlaceholder} />
               </Form.Item>
            </AForm>
         </Col>
         <Col span={24}>
            <SelectInput
               label="Төлөв"
               name={['pregnantInfo', 'pregnancyActivityId']}
               options={pregnancyActivity.map((item) => ({ value: item.valueId, label: item.valueName }))}
               rules={[{ required: true, message: 'Нийт дүн' }]}
               onSelect={(_, option) => form.setFieldValue('pregnancyActivityName', option.label)}
            />
            <Form.Item name={['pregnantInfo', 'pregnancyActivityName']} hidden>
               <Input placeholder={defaultPlaceholder} />
            </Form.Item>
         </Col>
         <Col span={24}>
            <SelectInput
               label="Жирэмслэхээс сэргийлэх арга хэмжээ авч байсан эсэх"
               name={['pregnantInfo', 'protectMethod']}
               options={[
                  { value: 1, label: 'Тийм' },
                  { value: 2, label: 'Үгүй' }
               ]}
            />
         </Col>
         <Col span={24}>
            <SelectInput
               label="Үр хөндүүлж байсан эсэх"
               name={['pregnantInfo', 'abortion']}
               options={[
                  { value: 1, label: 'Тийм' },
                  { value: 2, label: 'Үгүй' }
               ]}
            />
         </Col>
         <Col span={24}>
            <SelectInput
               label="Цусны бүлэг"
               name={['pregnantInfo', 'bloodType']}
               options={bloodType.map((item) => ({ value: item.valueId, label: item.valueName }))}
            />
         </Col>
         <Col span={24}>
            <SelectInput
               label="Гэрлэлтийн байдал"
               name={['pregnantInfo', 'martialStatus']}
               options={relationship.map((item) => ({ value: item.valueId, label: item.valueName }))}
            />
         </Col>
         <Col span={24}>
            <SelectInput
               label="Хөгжлийн бэрхшээлтэй эсэх"
               name={['pregnantInfo', 'isImpairment']}
               options={[
                  { value: 1, label: 'Тийм' },
                  { value: 2, label: 'Үгүй' }
               ]}
            />
         </Col>
         <Col span={24}>
            <SelectInput
               label="Архи хэрэглэдэг эсэх"
               name={['pregnantInfo', 'isAlcohol']}
               options={[
                  { value: 1, label: 'Тийм' },
                  { value: 2, label: 'Үгүй' }
               ]}
            />
         </Col>
         <Col span={24}>
            <SelectInput
               label="Тамхи хэрэглэдэг эсэх"
               name={['pregnantInfo', 'isSmoking']}
               options={[
                  { value: 1, label: 'Тийм' },
                  { value: 2, label: 'Үгүй' }
               ]}
            />
         </Col>
         <Col span={24}>
            <SelectInput
               label="Урт хугацааны эм биологийн идэвхит бүтээгдэхүүн тогтмол хэрэглэдэг эсэх"
               name={['pregnantInfo', 'isDrug']}
               options={[
                  { value: 1, label: 'Тийм' },
                  { value: 2, label: 'Үгүй' }
               ]}
            />
         </Col>
      </Row>
   );
};
