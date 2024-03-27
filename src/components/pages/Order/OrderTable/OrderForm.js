import React from 'react';
import { Form } from 'antd';
import { numberToCurrency } from '../../../common';

function OrderForm(props) {
   const { editing, isNumber, ...rest } = props;
   const Dummy = (props) => <div className="mx-1">{isNumber ? numberToCurrency(props.value) : props.value}</div>;
   return (
      <Form.Item className="mb-0" {...rest}>
         {editing ? props.children : <Dummy />}
      </Form.Item>
   );
}
export default OrderForm;
