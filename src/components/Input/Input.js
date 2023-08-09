import React from 'react';
import { DatePicker, Input, InputNumber, Radio, Select } from 'antd';

const { TextArea, Search } = Input;
const { Option } = Select;

function NewInput(props) {
   return <Input {...props} />;
}

function NewInputNumber(props) {
   return <InputNumber {...props} />;
}

function NewTextArea(props) {
   return <TextArea {...props} rows={4} />;
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

function NewSelect(props) {
   return <Select {...props}></Select>;
}

function NewOption(props) {
   return <Option {...props}>{props.children}</Option>;
}

function NewDatePicker(props) {
   return <DatePicker {...props} />;
}

export {
   NewInput,
   NewInputNumber,
   NewTextArea,
   NewSearch,
   NewRadio,
   NewRadioGroup,
   NewSelect,
   NewOption,
   NewDatePicker
};
