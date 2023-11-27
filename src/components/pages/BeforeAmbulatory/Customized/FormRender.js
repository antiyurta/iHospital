import React, { useState } from 'react';
import { AutoComplete, Button, Divider, Form, Input, Radio, Table } from 'antd';
import {
   NewCheckbox,
   NewCheckboxGroup,
   NewDatePicker,
   NewInput,
   NewInputNumber,
   NewOption,
   NewRadio,
   NewRadioGroup,
   NewRangePicker,
   NewSelect,
   NewTextArea
} from '../../../Input/Input';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { NewColumn } from '../../../Table/Table';
import { MinusOutlined } from '@ant-design/icons';

import DiagnoseService from '../../../../services/reference/diagnose';

function FormRender({ useForm, form, formOptionIds, isCheck }) {
   const message = 'Тань бөглөх эрх байхгүй';
   const [loadingDiagnose, setLoadingDiagnose] = useState(false);
   const [diagnosis, setDiagnosis] = useState([]);

   const [radioKey, setRadioKey] = useState();

   const Render = ({ questions }) => {
      const getDiagnoses = async (code) => {
         setLoadingDiagnose(true);
         await DiagnoseService.get({
            params: {
               filter: code,
               types: [0, 1, 2]
            }
         })
            .then((response) => {
               setDiagnosis(
                  response.data.response.data?.map((diagnose) => ({
                     label: diagnose.code,
                     value: diagnose.code
                  }))
               );
            })
            .finally(() => {
               setLoadingDiagnose(false);
            });
      };
      const removeOther = (state, name) => {
         if (state) {
            useForm.resetFields([`otherFor${name}`]);
         }
      };
      const RenderOther = (props) => {
         const { type, name, tooltip, disabled, length } = props;
         const typecheck = () => {
            if (type === 'radio' && useForm.getFieldValue(name)) {
               console.log(useForm.getFieldsValue());
               console.log(name);
               useForm.resetFields([name]);
               useForm.resetFields(['expandValue']);
            }
         };
         return (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 8
               }}
            >
               <label
                  style={{
                     marginLeft: 8
                  }}
               >
                  Бусад:
               </label>
               <Form.Item name={`otherFor${name}`} tooltip={tooltip} className="mb-0 w-full">
                  <NewInput onChange={typecheck} disabled={disabled} />
               </Form.Item>
            </div>
         );
      };
      const RenderExpand = (props) => {
         const { options } = props;
         const expanded = options.find(
            (option) => option.keyWord === radioKey?.toString() || option.keyWord === radioKey
         );
         if (expanded) {
            return (
               <Form.Item label={'sadsad'} name={'expandValue'}>
                  <Radio.Group>
                     {expanded.expands?.map((expand, index) => {
                        return (
                           <Radio key={index} value={expand.keyWord}>
                              {expand.label}
                           </Radio>
                        );
                     })}
                  </Radio.Group>
               </Form.Item>
            );
         }
      };
      return questions?.map((data, index) => {
         var state = true;
         if (isCheck) {
            state = formOptionIds?.some((id) => id === data.keyWord);
         }
         console.log('========>', data);
         if (data.type === 'diagnose') {
            return (
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
                  <div className="inline-flex w-full p-1">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <AutoComplete onChange={getDiagnoses} options={diagnosis}>
                           <Input disabled={loadingDiagnose} />
                        </AutoComplete>
                     </Form.Item>
                  </div>
               </div>
            );
         }
         if (data.type === 'input') {
            return (
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
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
               <div key={index} className="rounded-md bg-white inline-block m-1">
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
         } else if (data.type === 'dropdown') {
            return (
               <div key={index} className="rounded-md bg-white w-[190px] inline-block m-1">
                  <div className="inline-flex p-1 w-full">
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <NewSelect disabled={!state}>
                           {data?.options?.map((option, index) => {
                              return (
                                 <NewOption
                                    style={{
                                       marginLeft: 8
                                    }}
                                    key={index}
                                    value={data.isInteger ? parseInt(option.keyWord) : option.keyWord}
                                 >
                                    {option.label}
                                 </NewOption>
                              );
                           })}
                        </NewSelect>
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (data.type === 'checkbox') {
            return (
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
                  <div
                     className="p-1 w-full"
                     style={{
                        flexDirection: data.isOther ? 'row' : 'column'
                     }}
                  >
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
                              flexWrap: 'wrap',
                              flexDirection: 'column'
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
                     {data.isOther ? (
                        <RenderOther
                           name={data.keyWord}
                           tooltip={!state ? message : null}
                           disabled={!state}
                           length={data.options.length}
                        />
                     ) : null}
                  </div>
               </div>
            );
         } else if (data.type === 'radio') {
            return (
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
                  <div
                     className="p-1 w-full"
                     style={{
                        flexDirection: data.isOther ? 'row' : 'column'
                     }}
                  >
                     <Form.Item
                        label={data.value}
                        name={data.keyWord}
                        tooltip={!state ? message : null}
                        className="mb-0 w-full"
                     >
                        <NewRadioGroup
                           style={{
                              display: 'flex',
                              flexDirection: 'column'
                           }}
                           disabled={!state}
                           onChange={({ target: { value } }) => {
                              console.log(value);
                              setRadioKey(value);
                              if (data.isOther) {
                                 removeOther(data.isOther, data.keyWord);
                              }
                              if (data.options?.filter((option) => option.isExpand)?.length > 0) {
                                 console.log('data', data);
                              }
                           }}
                        >
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
                     <RenderExpand options={data.options} />
                     {data.isOther ? (
                        <RenderOther
                           type={data.type}
                           name={data.keyWord}
                           tooltip={!state ? message : null}
                           disabled={!state}
                           length={data.options.length}
                        />
                     ) : null}
                  </div>
               </div>
            );
         } else if (data.type === 'textarea') {
            return (
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
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
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
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
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
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
               <div key={index} className="rounded-md bg-white w-full inline-block m-1">
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
                        if (column.type === 'input') {
                           return (
                              <Form.Item name={[index, column.keyWord]}>
                                 <NewInput />
                              </Form.Item>
                           );
                        }
                        if (column.type === 'inputNumber') {
                           <Form.Item name={[index, column.keyWord]}>
                              <NewInputNumber
                                 formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                 parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                              />
                           </Form.Item>;
                        }
                        if (column.type === 'textarea') {
                           <Form.Item name={[index, column.keyWord]}>
                              <NewTextArea />
                           </Form.Item>;
                        }
                        if (column.type === 'datepicker') {
                           return (
                              <Form.Item
                                 name={[index, column.keyWord]}
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
                           );
                        }
                        if (column.type === 'rangepicker') {
                           return (
                              <Form.Item
                                 name={[index, column.keyWord]}
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
                           );
                        }
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
