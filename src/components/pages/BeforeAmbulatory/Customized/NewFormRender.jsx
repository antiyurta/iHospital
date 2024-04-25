import React, { useEffect, useState } from 'react';
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio, TimePicker, Tooltip } from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons';
//comp
import HumanParts from './human-parts';
import NewFormTable from './NewFormTable';
import DiagnoseWindow from '../../service/DiagnoseWindow';
//form
import AForm from './AForm';
//extends
const { TextArea } = Input;
//
const NewFormRender = ({
   useForm,
   form,
   formOptionIds,
   isCheck,
   formName,
   incomeKeyWords,
   checkProgress,
   isDisabledButton
}) => {
   const [treeData, setTreeData] = useState();
   const message = 'Тань бөглөх эрх байхгүй';
   const [keyWords, setKeyWords] = useState([]);

   const configNames = (name) => {
      if (!isCheck && formName) {
         return [formName, name];
      }
      return name;
   };

   const convertTree = (data) => {
      let root = [];
      const cloneData = data?.map((item) => ({
         ...item
      }));
      const idMapping = cloneData?.reduce((acc, el, i) => {
         acc[el.index] = i;
         return acc;
      }, []);
      cloneData?.forEach((el) => {
         if (el.parentIndex === null) {
            root.push(el);
            return;
         }
         const parentEl = cloneData?.[idMapping[el.parentIndex]];
         parentEl.options = [...(parentEl?.options || []), el];
      });
      return root;
   };
   const findKeyWords = (parentKey, option) => {
      if (!option.isHead && option.options) {
         return option.options?.flatMap((fOption) => findKeyWords(parentKey, fOption));
      } else if (option.isHead && option.options)
         return option.options?.flatMap((fOption) => findKeyWords(option.keyWord, fOption));
      return [parentKey || '', option.keyWord];
   };
   const handleChangeCheckbox = (iKeyWords, options, currentIndex) => {
      var newKeyWords = [...keyWords];
      var unSelectedOptions = [];
      if (iKeyWords?.length > 0) {
         const selectedOptions = options?.filter((option) => iKeyWords?.includes(option.keyWord));
         unSelectedOptions = options?.filter((option) => !iKeyWords?.includes(option.keyWord));
         var unDup = [];
         if (selectedOptions?.length > 0) {
            const keyWords = selectedOptions?.flatMap((option) => option?.options?.map((cOption) => cOption.keyWord));
            const allKeyWords = [...newKeyWords, ...keyWords];
            unDup = allKeyWords.filter((item, index) => allKeyWords.indexOf(item) === index);
            newKeyWords = unDup;
         }
      } else {
         unSelectedOptions = options;
         useForm.resetFields([currentIndex]);
      }
      if (unSelectedOptions?.length > 0) {
         const unSelectedKeyWords = unSelectedOptions?.flatMap((fOption) => findKeyWords(null, fOption));
         const unDupunSelected = unSelectedKeyWords.filter((item, index) => unSelectedKeyWords.indexOf(item) === index);
         useForm.resetFields(unDupunSelected);
         unDupunSelected?.map((keyWord) => {
            const index = newKeyWords.indexOf(keyWord);
            if (index > 0) {
               newKeyWords.splice(index, 1);
            }
         });
      }
      checkProgress(newKeyWords);
      setKeyWords([...newKeyWords, ...['']]);
   };

   const handleChangeRadio = (keyWord, options, currentIndex) => {
      var newKeyWords = [...keyWords];
      var unSelectedOptions = [];
      if (keyWord != null) {
         const selectedOption = options?.find((option) => option.keyWord === keyWord);
         unSelectedOptions = options?.filter((option) => option.keyWord != keyWord);
         var unDup = [];
         if (selectedOption?.options?.length > 0) {
            const keyWords = selectedOption.options?.map((option) => option.keyWord);
            const allKeyWords = [...newKeyWords, ...keyWords];
            unDup = allKeyWords.filter((item, index) => allKeyWords.indexOf(item) === index);
            newKeyWords = unDup;
         }
      } else {
         unSelectedOptions = options;
         useForm.resetFields([currentIndex]);
      }
      if (unSelectedOptions?.length > 0) {
         const unSelectedKeyWords = unSelectedOptions?.flatMap((fOption) => findKeyWords(null, fOption));
         const unDupunSelected = unSelectedKeyWords.filter((item, index) => unSelectedKeyWords.indexOf(item) === index);
         useForm.resetFields(unDupunSelected);
         unDupunSelected?.map((keyWord) => {
            const index = newKeyWords.indexOf(keyWord);
            if (index > 0) {
               newKeyWords.splice(index, 1);
            }
         });
      }
      checkProgress(newKeyWords);
      setKeyWords([...newKeyWords, ...['']]);
   };
   const RenderChildren = ({ children }) =>
      children?.map((child, index) => (
         <div key={index} className="form-child">
            {child}
         </div>
      ));
   const IsOther = ({ item }) => (
      <Form.Item className="mb-0 pl-3" label={'Бусад'} name={`${item.keyWord}Other`}>
         <Input
            onChange={() => {
               checkProgress(keyWords);
            }}
         />
      </Form.Item>
   );
   const RenderFormInType = ({ item, children }) => {
      const restItem = {
         className: 'mb-0',
         label: item.question,
         name: configNames(item.keyWord),
         tooltip: state ? message : null
      };
      var state = false;
      if (isCheck) {
         state = !formOptionIds.includes(item.keyWord);
      }
      if (keyWords.includes(item.keyWord)) {
         if (item.type === 'radio') {
            const options = form.documentForm.filter((form) => form.parentIndex === item.index);
            return (
               <div key={item.index} className="document-forms">
                  <AForm>
                     <div className="flex flex-row gap-1 justify-between items-center">
                        <p className="font-bold">{item.question}</p>
                        <Tooltip title="Хариу арилгах">
                           <Button
                              danger
                              disabled={state}
                              icon={<CloseOutlined />}
                              onClick={() => {
                                 handleChangeRadio(null, item?.options, configNames(item.keyWord));
                              }}
                           />
                        </Tooltip>
                     </div>
                     <Form.Item
                        tooltip={state ? message : null}
                        label={state ? ' ' : null}
                        className="mb-0"
                        labelCol={{
                           style: {
                              width: '100%'
                           }
                        }}
                        name={configNames(item.keyWord)}
                     >
                        <Radio.Group
                           className="p-[2px] bg-[#fafafa] w-full flex flex-col"
                           onChange={(e) => {
                              handleChangeRadio(e.target.value, item?.options, configNames(item.keyWord));
                           }}
                           disabled={state}
                        >
                           {options.map((option, index) => (
                              <Radio key={index} value={item.isInteger ? Number(option.keyWord) : option.keyWord}>
                                 {option.question}
                              </Radio>
                           ))}
                        </Radio.Group>
                     </Form.Item>
                     {item.isOther ? <IsOther item={item} /> : null}
                  </AForm>
                  <RenderChildren children={children} />
               </div>
            );
         } else if (item.type === 'checkbox') {
            const style = {
               padding: 2,
               width: '100%',
               display: 'flex',
               flexDirection: 'column'
            };
            const otherStyle = {
               padding: 2,
               width: '100%',
               display: 'grid',
               gridTemplateColumns: `repeat(${item.grid?.cols || 1}, minmax(0, 1fr))`
            };
            const options = form.documentForm.filter((form) => form.parentIndex === item.index);
            return (
               <div key={item.index} className="document-forms">
                  <AForm>
                     <Form.Item {...restItem}>
                        <Checkbox.Group
                           onChange={(e) => {
                              handleChangeCheckbox(e, item?.options, configNames(item.keyWord));
                           }}
                           disabled={state}
                           className="bg-transparent"
                           style={item.grid?.state ? otherStyle : style}
                        >
                           {options.map((option, index) => (
                              <Checkbox
                                 className="ml-0"
                                 key={index}
                                 value={item.isInteger ? Number(option.keyWord) : option.keyWord}
                              >
                                 {option.question}
                              </Checkbox>
                           ))}
                        </Checkbox.Group>
                     </Form.Item>
                     {item.isOther ? <IsOther item={item} /> : null}
                  </AForm>
                  <RenderChildren children={children} />
               </div>
            );
         } else if (item.type === 'input' || item.type === 'inputNumber' || item.type === 'textarea') {
            const rest = {
               disabled: state,
               placeholder: item.question || 'Бичих',
               onChange: () => {
                  checkProgress(keyWords);
               }
            };
            const InputN = (props) => {
               if (item.type === 'input') return <Input {...rest} {...props} />;
               else if (item.type === 'inputNumber') return <InputNumber {...rest} {...props} />;
               else if (item.type === 'textarea') return <TextArea {...rest} {...props} rows={6} />;
            };
            return (
               <AForm key={item.index}>
                  <Form.Item {...restItem}>
                     <InputN />
                  </Form.Item>
               </AForm>
            );
         } else if (item.type === 'table') {
            return (
               <>
                  <strong>{item.question}</strong>
                  <Form.List name={configNames(item.keyWord)}>
                     {(rows, { add, remove }) => {
                        return <NewFormTable data={rows} options={item.options} add={add} remove={remove} />;
                     }}
                  </Form.List>
               </>
            );
         } else if (item.type === 'diagnose' || item.type === 'diagnoseMNName') {
            const value = (diagnose) => {
               if (item.type === 'diagnose') {
                  return diagnose.code;
               } else if (item.type === 'diagnoseMNName') {
                  return `${diagnose.code}-${diagnose.nameMn}`;
               }
            };
            return (
               <AForm key={item.index}>
                  <div className="flex flex-row gap-2 justify-between">
                     <Form.Item {...restItem}>
                        <Input disabled placeholder={item.question} />
                     </Form.Item>
                     <DiagnoseWindow
                        handleClick={(diagnose) => {
                           useForm.setFieldsValue({
                              [`${item.keyWord}Id`]: diagnose.id,
                              [`${configNames(item.keyWord)}`]: value(diagnose),
                              [`${item.keyWord}CreatedAt`]: new Date()
                           });
                           checkProgress(keyWords);
                        }}
                        disabled={state}
                     />
                     <Form.Item className="hidden" name={`${item.keyWord}CreatedAt`}>
                        <Input />
                     </Form.Item>
                     <Form.Item className="hidden" name={`${item.keyWord}Id`}>
                        <InputNumber />
                     </Form.Item>
                  </div>
               </AForm>
            );
         } else if (item.type === 'title') {
            return (
               <>
                  <p className="pt-3 text-sm font-bold">{item.question}</p>
                  <RenderChildren children={children} />
               </>
            );
         } else if (item.type === 'timepicker' || item.type === 'datepicker' || item.type === 'dateTime') {
            const rest = {
               disabled: state,
               placeholder: item.question || 'Бичих',
               locale: mnMN
            };
            const Picker = (props) => {
               if (item.type === 'timepicker') {
                  return <TimePicker {...rest} {...props} />;
               } else if (item.type === 'datepicker') {
                  return <DatePicker {...rest} {...props} format={'YYYY/MM/DD'} />;
               } else if (item.type === 'dateTime') {
                  return <DatePicker {...rest} {...props} showTime format={'YYYY/MM/DD HH:mm'} />;
               }
            };
            return (
               <AForm key={item.index}>
                  <Form.Item
                     {...restItem}
                     getValueProps={(i) => {
                        if (i) {
                           return { value: moment(i) };
                        } else {
                           return;
                        }
                     }}
                  >
                     <Picker />
                  </Form.Item>
               </AForm>
            );
         } else if (item.type === 'humanhead' || item.type === 'humanbody' || item.type === 'human32a') {
            const Part = () => {
               if (item.type === 'humanhead') return 'head';
               else if (item.type === 'humanbody') return 'body';
               else if (item.type === 'human32a') return '32a';
            };
            return (
               <AForm key={item.index}>
                  <p className="font-bold pb-2">{item.question}</p>
                  <div className="flex flex-row gap-2 justify-between">
                     <Form.List name={configNames(item.keyWord)}>
                        {(fields, index) => (
                           <div key={index}>
                              {fields.map((field) => (
                                 <div key={field.key} className="flex flex-row gap-1">
                                    <Form.Item shouldUpdate name={[field.name, 'desc']}>
                                       <Input disabled />
                                    </Form.Item>
                                    <Form.Item shouldUpdate name={[field.name, 'top']}>
                                       <Input disabled />
                                    </Form.Item>
                                    <Form.Item shouldUpdate name={[field.name, 'left']}>
                                       <Input disabled />
                                    </Form.Item>
                                 </div>
                              ))}
                           </div>
                        )}
                     </Form.List>
                     <div>
                        <HumanParts
                           part={Part()}
                           name={configNames(item.keyWord)}
                           currentData={useForm.getFieldValue(configNames(item.keyWord))}
                           handleClick={(data) => {
                              useForm.setFieldValue(configNames(item.keyWord), data[`${configNames(item.keyWord)}`]);
                           }}
                        />
                     </div>
                  </div>
               </AForm>
            );
         }
      }
      return;
   };
   const renderHTML = (item, indx) => {
      var children;
      if (item.type === 'radio' || item.type === 'checkbox') {
         const newOptions = item.options?.flatMap((option) => option.options).filter(Boolean);
         children = newOptions?.map(renderHTML);
      } else {
         children = item.options?.map(renderHTML);
      }
      return (
         <React.Fragment key={indx}>
            <RenderFormInType item={item}>{children}</RenderFormInType>
         </React.Fragment>
      );
   };

   const findTitleChildrens = (items, firstKeyWords) => {
      const titleIndexes = items?.filter((item) => item.type === 'title')?.map((fItem) => fItem.index);
      const childrenKeyWords = items
         ?.filter((item) => titleIndexes?.includes(item.parentIndex))
         ?.map((fItem) => fItem.keyWord);
      setKeyWords([...firstKeyWords, ...(childrenKeyWords || []), ...['']]);
   };

   useEffect(() => {
      const firstKeyWords = form?.documentForm
         ?.filter((item) => item.parentIndex === null)
         ?.map((fItem) => fItem.keyWord)
         ?.filter(Boolean);
      if (incomeKeyWords?.length > 0) {
         const allKeyWords = [...firstKeyWords, ...incomeKeyWords];
         const unDup = allKeyWords.filter((item, index) => allKeyWords.indexOf(item) === index);
         findTitleChildrens(form?.documentForm || [], unDup || []);
      } else {
         findTitleChildrens(form?.documentForm || [], firstKeyWords || []);
      }
      const parentKeys = form?.documentForm?.filter((item) => item.isHead)?.map((fItem) => fItem.keyWord);
      if (isCheck) {
         const unionSet = new Set([...(parentKeys || []), ...(formOptionIds || [])]);
         const unionArray = Array.from(unionSet);
         if (unionArray.length > 0) isDisabledButton(false);
         else isDisabledButton(true);
      } else {
         isDisabledButton(false);
      }
      const data = convertTree(form?.documentForm || []);
      setTreeData(data);
   }, [form]);

   return treeData?.map(renderHTML);
};
export default NewFormRender;
