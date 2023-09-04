import React, { useEffect } from 'react';
import { Button, Divider, Form, Input, Table } from 'antd';
import {
   NewCheckbox,
   NewCheckboxGroup,
   NewDatePicker,
   NewInput,
   NewInputNumber,
   NewRadio,
   NewRadioGroup,
   NewRangePicker,
   NewTextArea
} from '../../../Input/Input';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { NewColumn } from '../../../Table/Table';
import EditableFormItem from '../../611/Support/EditableFormItem';
import { MinusOutlined } from '@ant-design/icons';

function FormRender({ form, formOptionIds }) {
   const message = 'Тань бөглөх эрх байхгүй';
   const Render = ({ questions }) => {
      return questions?.map((data, index) => {
         const state = formOptionIds?.some((id) => id === data.keyWord);
         if (data.type === 'input') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex w-full p-1">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <NewInput disabled={!state} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'inputNumber') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex p-1 w-full">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <NewInputNumber
                           disabled={!state}
                           formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                           parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'checkbox') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex p-1 w-full">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <NewCheckboxGroup
                           disabled={!state}
                           style={{
                              display: 'flex',
                              flexWrap: 'wrap'
                           }}
                        >
                           {data?.options?.map((option, index) => {
                              return (
                                 <NewCheckbox
                                    style={{
                                       marginLeft: 8
                                    }}
                                    key={index}
                                    value={data.isInteger ? parseInt(option.keyWord) : option.keyWord}
                                 >
                                    {option.label}
                                 </NewCheckbox>
                              );
                           })}
                        </NewCheckboxGroup>
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'radio') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex p-1 w-full">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <NewRadioGroup disabled={!state}>
                           {data?.options?.map((option, index) => {
                              return (
                                 <NewRadio
                                    key={index}
                                    value={data.isInteger ? parseInt(option.keyWord) : option.keyWord}
                                 >
                                    {option.label}
                                 </NewRadio>
                              );
                           })}
                        </NewRadioGroup>
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'textarea') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex p-1 w-full">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <NewTextArea disabled={!state} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'rangepicker') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex w-full p-1">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                        getValueProps={(i) => {
                           if (i) {
                              return { value: [moment(i[0]), moment(i[1])] };
                           } else {
                              return;
                           }
                        }}
                     >
                        <NewRangePicker disabled={!state} format={'YYYY/MM/DD'} locale={mnMN} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'datepicker') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex p-1 w-full">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                        getValueProps={(i) => {
                           if (i) {
                              return { value: moment(i) };
                           } else {
                              return;
                           }
                        }}
                     >
                        <NewDatePicker disabled={!state} format={'YYYY/MM/DD'} locale={mnMN} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'table') {
            return (
               <div key={index} className="rounded-md bg-[#F3F4F6] w-full inline-block m-1">
                  <div className="inline-flex p-1 w-full">
                     <Form.List name={data.keyWord}>
                        {(rows, { add, remove }) => {
                           return (
                              <FormTable data={rows} options={data?.options} add={add} remove={remove} state={state} />
                           );
                        }}
                     </Form.List>
                  </div>
               </div>
            );
         }
      });
   };
   const FormTable = (props) => {
      const { data, options, add, remove, state } = props;
      return (
         <Table
            style={{
               width: '100%'
            }}
            rowKey={'unikey'}
            bordered
            dataSource={data}
            pagination={false}
            footer={() => (
               <Button title={!state ? message : null} disabled={!state} onClick={() => add()}>
                  Мөр нэмэх
               </Button>
            )}
         >
            {options?.map((column, index) => {
               return (
                  <NewColumn
                     key={index}
                     title={column.label}
                     dataIndex={column.keyWord}
                     render={(value, row, index) => {
                        return (
                           <EditableFormItem editing={true} name={[index, column.keyWord]}>
                              <Input />
                           </EditableFormItem>
                        );
                     }}
                  />
               );
            })}
            <NewColumn
               title=" "
               width={50}
               render={(value, row, index) => {
                  return (
                     <Button
                        onClick={() => remove(index)}
                        icon={<MinusOutlined />}
                        shape="circle"
                        type="danger"
                        style={{
                           backgroundColor: 'red'
                        }}
                     />
                  );
               }}
            />
         </Table>
      );
   };
   return (
      <div>
         {form?.documentForm?.map((form, index) => {
            return (
               <div key={index}>
                  <Divider orientation="left" className="text-sm my-2">
                     {form.label}
                  </Divider>
                  <div className="flex flex-wrap gap-3">
                     <Render questions={form.options} />
                  </div>
               </div>
            );
         })}
      </div>
   );
}
export default FormRender;
