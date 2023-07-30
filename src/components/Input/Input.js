import React from 'react';
import { Input, Radio } from 'antd';

const { TextArea, Search } = Input;

function NewInput() {
   return <Input />;
}

function NewTextArea() {
   return <TextArea />;
}

function NewSearch(props) {
   return <Search {...props} />;
}

function NewRadio(props) {
   return <Radio {...props}>{props.children}</Radio>;
}

function NewRadioGroup(props) {
   return <Radio.Group {...props}>{props.children}</Radio.Group>;
}

export { NewInput, NewTextArea, NewSearch, NewRadio, NewRadioGroup };
