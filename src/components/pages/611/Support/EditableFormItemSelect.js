import React from 'react';
import { Form } from 'antd';
import DiagnoseTypes from '../../service/DiagnoseTypes.js';

function EditableFormItemSelect(props) {
   const { editing, ...rest } = props;
   const Dummy = (props) => <div>{DiagnoseTypes[`${props.value}`]?.label}</div>;
   return (
      <Form.Item className="mb-0" {...rest}>
         {editing ? props.children : <Dummy />}
      </Form.Item>
   );
}
export default EditableFormItemSelect;
