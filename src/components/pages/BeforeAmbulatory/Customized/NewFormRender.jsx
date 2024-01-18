import { Checkbox, DatePicker, Form, Input, InputNumber, Radio, Table } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import NewFormTable from './NewFormTable';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import DiagnoseWindow from '../../service/DiagnoseWindow';
import moment from 'moment';
const NewFormRender = (props) => {
   const { useForm, form, formOptionIds, isCheck, formName } = props;
   const message = 'Тань бөглөх эрх байхгүй';
   const [indexes, setIndexes] = useState([]);

   const configNames = (name) => {
      if (!isCheck) {
         return [formName, name];
      }
      return name;
   };

   const convertTree = (data) => {
      let root = [];
      const cloneData = data.map((item) => ({
         ...item
      }));
      const idMapping = cloneData.reduce((acc, el, i) => {
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
   const findChildrensIds = (parentIndexes) => {
      var childrenIds = [];
      parentIndexes?.map((parentIndex) => {
         form.documentForm?.map((form) => {
            if (form.parentIndex === parentIndex) {
               childrenIds.push(form.index);
            }
         });
      });
      return childrenIds;
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
      console.log(keyWords, options, currentIndex);
   };
   const handleChangeRadio = (keyWord, options, currentIndex) => {
      if (options?.length > 0) {
         const selectedIndexes = options
            .map((option) => {
               if (option.keyWord === keyWord) {
                  return option.index;
               }
            })
            .filter(Boolean);
         const selectedIndexChildrenIds = findChildrensIds(selectedIndexes);
         const unSelectedIndex = options
            .map((option) => {
               if (option.keyWord != keyWord) {
                  return option.index;
               }
            })
            .filter(Boolean);
         const unSelectedIndexChildrenIds = findChildrensIds(unSelectedIndex);
         const resetKeyWords = form?.documentForm
            .filter((form) => unSelectedIndexChildrenIds.includes(form.index))
            .map((filtred) => filtred.keyWord);
         useForm.resetFields(resetKeyWords);
         var newIndexes = indexes.filter((index) => !unSelectedIndexChildrenIds.includes(index));
         newIndexes = [...newIndexes, ...selectedIndexChildrenIds];
         const unDup = newIndexes.filter((item, index) => newIndexes.indexOf(item) === index);
         setIndexes(unDup);
      } else {
         const findIndex = form.documentForm.find((form) => form.keyWord === keyWord)?.index;
         const childrenIds = findChildrensIds([findIndex]);
         setIndexes([...indexes, currentIndex, ...childrenIds]);
      }
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
      const { item } = RFITProps;
      var state = true;
      // if (isCheck) {
      //    state = formOptionIds?.some((id) => id === item.keyWord);
      // }
      if (item.type === 'radio') {
         const options = form.documentForm.filter((form) => form.parentIndex === item.index);
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
                     <Radio.Group
                        disabled={!state}
                        onChange={(e) => {
                           handleChangeRadio(e.target.value, item?.options, item?.index);
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
         );
      } else if (item.type === 'checkbox') {
         const options = form.documentForm.filter((form) => form.parentIndex === item.index);
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
                     <Input disabled={!state} placeholder={item.question || 'Бичих'} />
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
                     <TextArea disabled={!state} placeholder={item.question} />
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
            <p
               style={{
                  paddingTop: 12,
                  fontSize: 15,
                  fontWeight: 'bold'
               }}
            >
               {item.question}
            </p>
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
      }
   };
   const renderHTML = (item) => {
      if (!item.options) {
         return item.isHead ? <RenderFormInType key={item.index} item={item} /> : null;
      }
      return (
         <div key={item.index}>
            {item.isHead ? <RenderFormInType key={item.index} item={item} /> : null}
            {item.options.map(renderHTML)}
         </div>
      );
   };
   const findIndexes = (indexes) => {
      var cloneIndexes = [];
      indexes?.map((index) => {
         form.documentForm.filter((form) => {
            if (form.index === index || form.parentIndex === index) {
               cloneIndexes.push(form.index);
            }
         });
      });
      return cloneIndexes;
   };
   const tree = useMemo(() => {
      if (indexes) {
         const currentIndex = findIndexes(indexes);
         const unDup = currentIndex.filter((item, index) => currentIndex.indexOf(item) === index);
         const newItems = unDup?.map((index) => {
            return form.documentForm.find((form) => form.index === index);
         });
         return convertTree(newItems);
      }
   }, [indexes]);

   useEffect(() => {
      const firstIndexes = form?.documentForm?.filter((item) => item.parentIndex === null)?.map((fItem) => fItem.index);
      setIndexes(firstIndexes);
   }, [form]);

   return tree?.map(renderHTML);
};
export default NewFormRender;
