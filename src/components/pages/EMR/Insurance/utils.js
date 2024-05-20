import React from 'react';
import { Col, Form, Input, Row } from 'antd';

export const DynamicComp = ({ items }) => (
   <Row gutter={[12, 12]}>
      {items.map(({ name, label, placeholder, span, offset = 1, component, row }) => {
         const FormItem = (
            <Form.Item name={name} label={label} rules={[{ required: true, message: `${label} оруулна уу` }]}>
               {component || <Input placeholder={placeholder} />}
            </Form.Item>
         );
         return row ? (
            <Row style={{ width: '100%' }} key={name}>
               <Col span={span} offset={offset}>
                  {FormItem}
               </Col>
            </Row>
         ) : (
            <Col span={span} offset={offset} key={name}>
               {FormItem}
            </Col>
         );
      })}
   </Row>
);
