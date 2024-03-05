import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio, TimePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import NewFormTable from './NewFormTable';
import TextArea from 'antd/lib/input/TextArea';
import HumanParts from './human-parts';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import DiagnoseWindow from '../../service/DiagnoseWindow';
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons';
const NewFormRender = (props) => {
   const { useForm, form, formOptionIds, isCheck, formName, incomeKeyWords, checkProgress } = props;
   const [treeData, setTreeData] = useState();
   const message = 'Тань бөглөх эрх байхгүй';
   const [keyWords, setKeyWords] = useState([]);

   const configNames = (name) => {
      if (!isCheck) {
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

   const handleChangeInput = (value, question) => {
      let pattern = /\.{1,}/g;
      const text = question.replace(pattern, value);
      // const getCurrentContent = () => editorState.getCurrentContent();
      // const addHelloText = () => {
      //    const currentContent = getCurrentContent();
      //    const contentStateWithHello = ContentState.createFromText(text);
      //    const newContentState = ContentState.createFromBlockArray(
      //       currentContent.getBlockMap().toArray().concat(contentStateWithHello.getBlockMap().toArray())
      //    );
      //    return EditorState.push(editorState, newContentState, 'insert-characters');
      // };
      // const newEditorState = addHelloText();
      // setEditorState(newEditorState);
   };
   const handleChangeCheckbox = (keyWords, options, currentIndex) => {
      // console.log(keyWords, options, currentIndex);
   };
   const findKeyWords = (parentKey, option) => {
      if (!option.options) {
         return [option.keyWord, parentKey];
      }
      return option.options?.flatMap((fOption) => findKeyWords(option.keyWord, fOption));
   };
   const handleChangeRadio = (keyWord, options, currentIndex) => {
      var newKeyWords = [...keyWords];
      if (keyWord != null) {
         const selectedOption = options?.find((option) => option.keyWord === keyWord);
         const unSelectedOption = options?.find((option) => option.keyWord != keyWord);
         var unDup = [];
         if (selectedOption?.options?.length > 0) {
            const keyWords = selectedOption.options.map((option) => option.keyWord);
            const allKeyWords = [...newKeyWords, ...keyWords];
            unDup = allKeyWords.filter((item, index) => allKeyWords.indexOf(item) === index);
            newKeyWords = unDup;
         }
         if (unSelectedOption?.options?.length > 0) {
            const unSelectedKeyWords = unSelectedOption?.options?.flatMap((fOption) =>
               findKeyWords(unSelectedOption.keyWord, fOption)
            );
            unSelectedKeyWords?.map((keyWord) => {
               const index = newKeyWords.indexOf(keyWord);
               if (index > 0) {
                  newKeyWords.splice(index, 1);
                  useForm.resetFields([keyWord]);
               }
            });
         }
      } else {
         const unSelectedOption = {
            options: options
         };
         if (unSelectedOption?.options?.length > 0) {
            const unSelectedKeyWords = unSelectedOption?.options?.flatMap((fOption) =>
               findKeyWords(unSelectedOption.keyWord, fOption)
            );
            unSelectedKeyWords?.map((keyWord) => {
               const index = newKeyWords.indexOf(keyWord);
               if (index > 0) {
                  newKeyWords.splice(index, 1);
                  useForm.resetFields([keyWord]);
               }
            });
         }
         useForm.resetFields([currentIndex]);
      }
      checkProgress(newKeyWords);
      setKeyWords(newKeyWords);

      // if (options?.length > 0) {
      //    const selectedIndexes = options
      //       .map((option) => {
      //          if (option.keyWord === keyWord) {
      //             return option.index;
      //          }
      //       })
      //       .filter(Boolean);
      //    const selectedIndexChildrenIds = findChildrensIds(selectedIndexes);
      //    const unSelectedIndex = options
      //       .map((option) => {
      //          if (option.keyWord != keyWord) {
      //             return option.index;
      //          }
      //       })
      //       .filter(Boolean);
      //    const unSelectedIndexChildrenIds = findChildrensIds(unSelectedIndex);
      //    const resetKeyWords = form?.documentForm
      //       .filter((form) => unSelectedIndexChildrenIds.includes(form.index))
      //       .map((filtred) => filtred.keyWord);
      //    useForm.resetFields(resetKeyWords);
      //    var newIndexes = indexes.filter((index) => !unSelectedIndexChildrenIds.includes(index));
      //    newIndexes = [...newIndexes, ...selectedIndexChildrenIds];
      //    const unDup = newIndexes.filter((item, index) => newIndexes.indexOf(item) === index);
      //    setIndexes(unDup);
      // } else {
      //    const findIndex = form.documentForm.find((form) => form.keyWord === keyWord)?.index;
      //    const childrenIds = findChildrensIds([findIndex]);
      //    setIndexes([...indexes, currentIndex, ...childrenIds]);
      // }
   };
   const CheckIsOther = (CIOProps) => {
      const { item } = CIOProps;
      if (item.isOther) {
         return (
            <Form.Item className="mb-0 pl-3" label={'Бусад'} name={`${item.keyWord}Other`}>
               <Input />
            </Form.Item>
         );
      }
   };
   const RenderFormInType = (RFITProps) => {
      const { item, children } = RFITProps;
      var state = true;
      if (keyWords.includes(item.keyWord)) {
         if (item.type === 'radio') {
            const options = form.documentForm.filter((form) => form.parentIndex === item.index);
            return (
               <div key={item.index} className="document-forms">
                  <div className="document-form">
                     <div className="form-left" />
                     <div className="form-inputs">
                        <div className="flex flex-row gap-1 justify-between items-end">
                           <p className="font-bold">{item.question}</p>
                           <Button
                              danger
                              icon={<CloseOutlined />}
                              onClick={() => {
                                 handleChangeRadio(null, item?.options, configNames(item.keyWord));
                              }}
                           >
                              Хариу арилгах
                           </Button>
                        </div>
                        <Form.Item
                           tooltip={!state ? message : null}
                           className="mb-0"
                           labelCol={{
                              style: {
                                 width: '100%'
                              }
                           }}
                           name={configNames(item.keyWord)}
                        >
                           <Radio.Group
                              onChange={(e) => {
                                 handleChangeRadio(e.target.value, item?.options, configNames(item.keyWord));
                              }}
                              style={{
                                 padding: 2,
                                 background: '#fafafa',
                                 width: '100%',
                                 display: 'flex',
                                 flexDirection: 'column'
                              }}
                           >
                              {options.map((option, index) => (
                                 <Radio key={index} value={option.keyWord}>
                                    {option.question}
                                 </Radio>
                              ))}
                           </Radio.Group>
                        </Form.Item>
                        <CheckIsOther item={item} />
                     </div>
                  </div>
                  {children?.map((child, index) => (
                     <div key={index} className="form-child">
                        {child}
                     </div>
                  ))}
               </div>
            );
         } else if (item.type === 'checkbox') {
            const options = form.documentForm.filter((form) => form.parentIndex === item.index);
            return (
               <div key={item.index}>
                  <div className="document-form">
                     <div className="form-left" />
                     <div className="form-inputs">
                        <Form.Item
                           tooltip={!state ? message : null}
                           className="mb-0"
                           label={item.question}
                           name={configNames(item.keyWord)}
                        >
                           <Checkbox.Group
                              onChange={(e) => {
                                 handleChangeCheckbox(e, item?.options, item?.index);
                              }}
                              disabled={!state}
                              className="bg-transparent"
                              style={{
                                 padding: 2,
                                 width: '100%',
                                 display: 'flex',
                                 flexDirection: 'column'
                              }}
                           >
                              {options.map((option, index) => (
                                 <Checkbox className="ml-0" key={index} value={option.keyWord}>
                                    {option.question}
                                 </Checkbox>
                              ))}
                           </Checkbox.Group>
                        </Form.Item>
                        <CheckIsOther item={item} />
                     </div>
                  </div>
                  {children?.map((child, index) => (
                     <div key={index} className="pl-2">
                        {child}
                     </div>
                  ))}
               </div>
            );
         } else if (item.type === 'input') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <Form.Item
                        className="mb-0"
                        label={item.question}
                        name={configNames(item.keyWord)}
                        tooltip={!state ? message : null}
                     >
                        <Input
                           placeholder={item.question || 'Бичих'}
                           onChange={() => {
                              checkProgress(keyWords);
                           }}
                        />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (item.type === 'inputNumber') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <Form.Item
                        className="mb-0"
                        label={item.question}
                        name={configNames(item.keyWord)}
                        tooltip={!state ? message : null}
                     >
                        <InputNumber disabled={!state} placeholder={item.question || 'Бичих'} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (item.type === 'textarea') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <Form.Item
                        tooltip={!state ? message : null}
                        className="mb-0"
                        label={item.question}
                        name={configNames(item.keyWord)}
                     >
                        <TextArea rows={7} disabled={!state} placeholder={item.question || 'Энд бичнэ үү'} />
                     </Form.Item>
                  </div>
               </div>
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
         } else if (item.type === 'diagnoseMNName') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <div className="flex flex-row gap-2 justify-between">
                        <Form.Item
                           tooltip={!state ? message : null}
                           className="mb-0"
                           label={item.question}
                           name={configNames(item.keyWord)}
                        >
                           <Input disabled placeholder={item.question} />
                        </Form.Item>
                        <DiagnoseWindow
                           handleClick={(diagnose) => {
                              useForm.setFieldValue(configNames(item.keyWord), `${diagnose.code}-${diagnose.nameMn}`);
                              useForm.setFieldValue(`${item.keyWord}CreatedAt`, new Date());
                           }}
                           disabled={!state}
                        />
                        <Form.Item className="hidden" label="sada" name={`${item.keyWord}CreatedAt`}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
            );
         } else if (item.type === 'diagnose') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <div className="flex flex-row gap-2 justify-between">
                        <Form.Item
                           tooltip={!state ? message : null}
                           className="mb-0"
                           label={item.question}
                           name={configNames(item.keyWord)}
                        >
                           <Input disabled placeholder={item.question} />
                        </Form.Item>
                        <DiagnoseWindow
                           handleClick={(diagnose) => {
                              useForm.setFieldValue(configNames(item.keyWord), diagnose.code);
                              useForm.setFieldValue(`${item.keyWord}CreatedAt`, new Date());
                           }}
                           disabled={!state}
                        />
                        <Form.Item className="hidden" label="sada" name={`${item.keyWord}CreatedAt`}>
                           <Input />
                        </Form.Item>
                     </div>
                  </div>
               </div>
            );
         } else if (item.type === 'title') {
            return (
               <>
                  <p
                     style={{
                        paddingTop: 12,
                        fontSize: 15,
                        fontWeight: 'bold'
                     }}
                  >
                     {item.question}
                  </p>
                  {children?.map((child, index) => (
                     <div key={index} className="pl-2">
                        {child}
                     </div>
                  ))}
               </>
            );
         } else if (item.type === 'timepicker') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <Form.Item
                        tooltip={!state ? message : null}
                        className="mb-0"
                        label={item.question}
                        name={configNames(item.keyWord)}
                        getValueProps={(i) => {
                           if (i) {
                              return { value: moment(i) };
                           } else {
                              return;
                           }
                        }}
                     >
                        <TimePicker locale={mnMN} disabled={!state} placeholder={item.question} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (item.type === 'datepicker') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <Form.Item
                        tooltip={!state ? message : null}
                        className="mb-0"
                        label={item.question}
                        name={configNames(item.keyWord)}
                        getValueProps={(i) => {
                           if (i) {
                              return { value: moment(i) };
                           } else {
                              return;
                           }
                        }}
                     >
                        <DatePicker locale={mnMN} format={'YYYY/MM/DD'} disabled={!state} placeholder={item.question} />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (item.type === 'dateTime') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
                     <Form.Item
                        tooltip={!state ? message : null}
                        className="mb-0"
                        label={item.question}
                        name={configNames(item.keyWord)}
                        getValueProps={(i) => {
                           if (i) {
                              return { value: moment(i) };
                           } else {
                              return;
                           }
                        }}
                     >
                        <DatePicker
                           showTime
                           locale={mnMN}
                           format={'YYYY/MM/DD HH:mm'}
                           disabled={!state}
                           placeholder={item.question}
                        />
                     </Form.Item>
                  </div>
               </div>
            );
         } else if (item.type === 'humanhead') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
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
                              part="head"
                              name={configNames(item.keyWord)}
                              currentData={useForm.getFieldValue(configNames(item.keyWord))}
                              handleClick={(data) => {
                                 useForm.setFieldValue(configNames(item.keyWord), data[`${configNames(item.keyWord)}`]);
                              }}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            );
         } else if (item.type === 'humanbody') {
            return (
               <div key={item.index} className="document-form">
                  <div className="form-left" />
                  <div className="form-inputs">
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
                              part="body"
                              name={configNames(item.keyWord)}
                              currentData={useForm.getFieldValue(configNames(item.keyWord))}
                              handleClick={(data) => {
                                 useForm.setFieldValue(configNames(item.keyWord), data[`${configNames(item.keyWord)}`]);
                              }}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            );
         }
      }
      return;
   };
   const renderHTML = (item, indx) => {
      var children;
      if (item.type === 'radio') {
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
      if (incomeKeyWords?.length > 0) {
         findTitleChildrens(form.documentForm, incomeKeyWords || []);
      } else {
         const firstKeyWords = form?.documentForm
            ?.filter((item) => item.parentIndex === null)
            ?.map((fItem) => fItem.keyWord)
            ?.filter(Boolean);
         findTitleChildrens(form.documentForm, firstKeyWords || []);
      }
      const data = convertTree(form.documentForm);
      setTreeData(data);
   }, [form.documentForm]);

   return treeData?.map(renderHTML);
};
export default NewFormRender;
