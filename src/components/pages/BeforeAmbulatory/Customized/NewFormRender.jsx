import { Checkbox, Form, Input, Radio, Table } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import NewFormTable from './NewFormTable';
import TextArea from 'antd/lib/input/TextArea';
import { ContentState, Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

const NewFormRender = (props) => {
   const { useForm, form, formOptionIds, isCheck } = props;
   const [test, setTest] = useState('');
   const [indexes, setIndexes] = useState([]);

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
      const getCurrentContent = () => editorState.getCurrentContent();
      const addHelloText = () => {
         const currentContent = getCurrentContent();
         const contentStateWithHello = ContentState.createFromText(text);
         const newContentState = ContentState.createFromBlockArray(
            currentContent.getBlockMap().toArray().concat(contentStateWithHello.getBlockMap().toArray())
         );
         return EditorState.push(editorState, newContentState, 'insert-characters');
      };
      const newEditorState = addHelloText();
      setEditorState(newEditorState);
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
      if (item.type === 'radio') {
         const options = form.documentForm.filter((form) => form.parentIndex === item.index);
         return (
            <>
               <Form.Item className="mb-0" label={item.question} name={item.keyWord}>
                  <Radio.Group
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
            </>
         );
      } else if (item.type === 'checkbox') {
         const options = form.documentForm.filter((form) => form.parentIndex === item.index);
         return (
            <>
               <Form.Item className="mb-0" label={item.question} name={item.keyWord}>
                  <Checkbox.Group
                     onChange={(e) => {
                        handleChangeCheckbox(e, item?.options, item?.index);
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
                        <Checkbox className="ml-0" key={index} value={option.keyWord}>
                           {option.question}
                        </Checkbox>
                     ))}
                  </Checkbox.Group>
               </Form.Item>
               <CheckIsOther item={item} />
            </>
         );
      } else if (item.type === 'input') {
         return (
            <div
               style={{
                  background: '#fafafa',
                  borderRadius: 6
               }}
            >
               <Form.Item className="mb-0" label={item.question} name={item.keyWord}>
                  <Input
                     // onChange={({ target: { value } }) => handleChangeInput(value, item.question)}
                     placeholder={item.question || 'Бичих'}
                  />
               </Form.Item>
            </div>
         );
      } else if (item.type === 'textarea') {
         return (
            <div
               style={{
                  background: '#fafafa',
                  borderRadius: 6
               }}
            >
               <Form.Item className="mb-0" label={item.question} name={item.keyWord}>
                  <TextArea placeholder={item.question} />
               </Form.Item>
            </div>
         );
      } else if (item.type === 'table') {
         return (
            <>
               <strong>{item.question}</strong>
               <Form.List name={item.keyWord}>
                  {(rows, { add, remove }) => {
                     return <NewFormTable data={rows} options={item.options} add={add} remove={remove} />;
                  }}
               </Form.List>
            </>
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
      }
   };
   const renderHTML = (item) => {
      if (!item.options) {
         return item.isHead ? <RenderFormInType key={item.index} item={item} /> : null;
      }
      return (
         <div
            key={item.index}
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 6,
               background: '#fafafa',
               borderRadius: 12
            }}
         >
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
      const firstIndexes = form?.documentForm
         ?.map((item) => {
            if (item.parentIndex === null) {
               return item.index;
            }
         })
         .filter(Boolean);
      setIndexes(firstIndexes);
   }, [form]);

   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
   return (
      <>
         {tree?.map(renderHTML)}
         {/* <div
            style={{
               top: 0,
               right: 0,
               position: 'absolute'
            }}
         ></div>
         <Editor
            editorState={editorState}
            onChange={(editorState) => {
               const contentState = editorState.getCurrentContent();
               console.log(JSON.stringify(convertToRaw(contentState).blocks));
               setEditorState(editorState);
            }}
         /> */}
      </>
   );
};
export default NewFormRender;
