import React from 'react';
import { Checkbox, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import { localMn } from '../../../common';

const { Group: CheckboxGroup } = Checkbox;

const defaultOptions = [
   { value: 0, label: 'Үгүй' },
   { value: 1, label: 'Тийм' }
];

export const statusOptions = [
   { value: 0, label: 'Идэвхгүй' },
   { value: 1, label: 'Идэвхтэй' }
];

export const renderFormItem = (label, name, required = true, component, span = 11) => (
   <Col span={span} offset={1}>
      <Form.Item name={name} label={label} rules={[{ required: required, message: 'Шаардлагатай талбар!' }]}>
         {component || <Input placeholder="-----" />}
      </Form.Item>
   </Col>
);

export const DynamicComp = ({ items, onChange }) => {
   const renderComponent = (
      name,
      placeholder,
      checkbox,
      checkboxOptions,
      select,
      selectOptions,
      component,
      number,
      key = ''
   ) => {
      if (name === 'indate') {
         return <DatePicker locale={localMn} placeholder="Огноо сонгох" style={{ height: '32px' }} />;
      }
      if (checkbox) {
         return (
            <CheckboxGroup
               options={checkboxOptions.length > 0 ? checkboxOptions : defaultOptions}
               onChange={(checkedValues) => onChange(checkedValues[0], name, key)}
            />
         );
      }
      if (select) {
         return (
            <Select
               allowClear
               showSearch
               filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
               options={selectOptions || defaultOptions}
               placeholder="Сонгох"
               onChange={(e) => onChange(e, name, key)}
            />
         );
      }
      if (component) {
         return component;
      }
      if (number) {
         return <InputNumber min={0} placeholder={placeholder} onChange={(e) => onChange(e, name, key)} />;
      }
      return <Input placeholder={placeholder} onChange={(e) => onChange(e.target.value, name, key)} />;
   };

   return (
      <Row gutter={[12, 12]}>
         {items.map(
            ({
               name,
               label,
               placeholder = '- - - - -',
               span = 11,
               offset = 1,
               component,
               row,
               number = false,
               checkbox = false,
               checkboxOptions = [],
               select = false,
               selectOptions = [],
               noForm,
               key
            }) => {
               const content = renderComponent(
                  name,
                  placeholder,
                  checkbox,
                  checkboxOptions,
                  select,
                  selectOptions,
                  component,
                  number,
                  key
               );

               const formItem = (
                  <Form.Item
                     key={name}
                     name={name}
                     label={label}
                     rules={[{ required: true, message: `Шаардлагатай талбар!` }]}
                  >
                     {content}
                  </Form.Item>
               );

               const itemContent = noForm ? content : formItem;

               return row ? (
                  <Row style={{ width: '100%' }} key={name}>
                     <Col span={span} offset={offset}>
                        {itemContent}
                     </Col>
                  </Row>
               ) : (
                  <Col span={span} offset={offset} key={name}>
                     {itemContent}
                  </Col>
               );
            }
         )}
      </Row>
   );
};
