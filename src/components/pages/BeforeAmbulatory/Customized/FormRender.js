import React from 'react';
import { Divider, Form } from 'antd';
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

function FormRender({ form, formOptionIds }) {
   const Render = ({ form, optionId }) => {
      const data = form.find((e) => e.keyWord === optionId);
      if (data) {
         if (data.type === 'input') {
            return (
               <div className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item label={data.value} name={data.keyWord} className="mb-0">
                        <NewInput />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'inputNumber') {
            return (
               <div className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item label={data.value} name={data.keyWord} className="mb-0">
                        <NewInputNumber
                           formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                           parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'checkbox') {
            return (
               <div className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item label={data.value} name={data.keyWord} className="mb-0">
                        <NewCheckboxGroup>
                           {data?.options?.map((option, index) => {
                              return (
                                 <NewCheckbox
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
               <div className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item label={data.value} name={data.keyWord} className="mb-0">
                        <NewRadioGroup>
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
               <div className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item label={data.value} name={data.keyWord} className="mb-0">
                        <NewTextArea />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'rangepicker') {
            return (
               <div className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        className="mb-0"
                        getValueProps={(i) => {
                           if (i) {
                              return { value: [moment(i[0]), moment(i[1])] };
                           } else {
                              return;
                           }
                        }}
                     >
                        <NewRangePicker format={'YYYY/MM/DD'} locale={mnMN} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'datepicker') {
            return (
               <div className="rounded-md bg-[#F3F4F6] w-max inline-block m-1">
                  <div className="inline-flex p-1">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        className="mb-0"
                        getValueProps={(i) => {
                           if (i) {
                              return { value: moment(i) };
                           } else {
                              return;
                           }
                        }}
                     >
                        <NewDatePicker format={'YYYY/MM/DD'} locale={mnMN} />
                     </Form.Item>
                  </div>
               </div>
            );
         }
      }
   };
   return (
      <div>
         {form?.documentForm?.map((form, index) => {
            return (
               <div key={index}>
                  <Divider orientation="left" className="text-sm my-2">
                     {form.label}
                  </Divider>
                  <div className="flex flex-col gap-3">
                     {formOptionIds?.map((optionId, indx) => {
                        return (
                           <div key={indx}>
                              <Render form={form.options} optionId={optionId} />
                           </div>
                        );
                     })}
                  </div>
               </div>
            );
         })}
      </div>
   );
}
export default FormRender;
