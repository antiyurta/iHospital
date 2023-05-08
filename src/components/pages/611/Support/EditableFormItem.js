import React from 'react';
import { Form } from 'antd';

function EditableFormItem(props) {
   const { editing, ...rest } = props;
   const Dummy = (props) => <div>{props.value}</div>;
   return (
      <Form.Item className="mb-0" {...rest}>
         {editing ? props.children : <Dummy />}
      </Form.Item>
   );
}
export default EditableFormItem;
