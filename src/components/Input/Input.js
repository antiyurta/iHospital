import React from 'react';
import { Checkbox, DatePicker, Input, InputNumber, Radio, Select, Switch } from 'antd';

const { TextArea, Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
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
   return <Radio {...props} />;
}

function NewRadioGroup(props) {
   return <Radio.Group {...props} />;
}

function NewCheckbox(props) {
   return <Checkbox {...props} />;
}

function NewCheckboxGroup(props) {
   return <Checkbox.Group {...props} />;
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

function NewRangePicker(props) {
   return <RangePicker {...props} />;
}

function NewSwitch(props) {
   return <Switch {...props} />;
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
   NewDatePicker,
   NewRangePicker,
   NewCheckboxGroup,
   NewCheckbox,
   NewSwitch
};
