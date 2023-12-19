import { Button } from 'antd';
import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';

import Question from './question';
import Answer from './answer';

const Index = (props) => {
   const { form, data } = props;
   const [items, setItems] = useState([]);

   useEffect(() => {
      console.log(data);
      if (data != undefined) {
         setItems(data);
      } else {
         setItems([]);
      }
   }, [data]);

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
         parentEl.options = [...(parentEl.options || []), el];
      });
      return root;
   };

   const tree = useMemo(() => {
      if (items) {
         form.setFieldsValue({
            documentForm: items
         });
         return convertTree(items);
      }
   }, [items]);

   const addQuestion = (parentIndex) => {
      const clone = [...items];
      clone.push({
         isHead: true,
         index: clone.length + 1,
         parentIndex: parentIndex,
         type: '',
         keyWord: '',
         question: '',
         isNumber: false,
         isOther: false
      });
      setItems(clone);
   };

   const addAnswer = (parentIndex) => {
      const clone = [...items];
      clone.push({
         isHead: false,
         index: clone.length + 1,
         parentIndex: parentIndex,
         keyWord: '',
         question: ''
      });
      setItems(clone);
   };

   const removeAny = (indx) => {
      function getChildrenIds(parentIndex, nodes) {
         const childrenIds = [];
         for (const node of nodes) {
            if (node.parentIndex === parentIndex) {
               const nodeChildrenIds = getChildrenIds(node.index, nodes);
               childrenIds.push(node.index, ...nodeChildrenIds);
            }
         }
         return childrenIds;
      }

      var test = getChildrenIds(indx, items);
      test.push(indx);
      if (test.length > 0) {
         const dd = items.filter((item) => !test.includes(item.index));
         setItems(dd);
      }
   };

   const setChangesQuestion = (values, index) => {
      const clone = [...items];
      var currentIndex = clone.findIndex((cl) => cl.index === index);
      if (currentIndex > -1) {
         clone[currentIndex].type = values.type;
         clone[currentIndex].keyWord = values.keyWord;
         clone[currentIndex].question = values.question;
         clone[currentIndex].isInteger = values.isInteger;
         clone[currentIndex].isOther = values.isOther;
         setItems(clone);
      }
   };

   const setChangesAnswer = (values, index) => {
      const clone = [...items];
      var currentIndex = clone.findIndex((cl) => cl.index === index);
      if (currentIndex > -1) {
         clone[currentIndex].type = values.type;
         clone[currentIndex].question = values.question;
         clone[currentIndex].keyWord = values.keyWord;
         setItems(clone);
      }
   };

   const getCheckParentType = (parentIndex) => {
      const item = items.find((item) => item.index === parentIndex);
      if (item && item.type === 'table') {
         return true;
      }
      return false;
   };

   const renderHTML = (item) => {
      if (!item.options) {
         if (item.isHead) {
            return (
               <Question
                  key={item.index}
                  item={item}
                  handleClick={addAnswer}
                  handleClickTitle={addQuestion}
                  handleRemove={removeAny}
                  handleChange={(values) => {
                     setChangesQuestion(values, item.index);
                  }}
               />
            );
         } else {
            return (
               <Answer
                  key={item.index}
                  item={item}
                  handleClick={addQuestion}
                  handleRemove={removeAny}
                  handleChange={(values) => {
                     setChangesAnswer(values, item.index);
                  }}
                  handleCheckParentType={getCheckParentType}
               />
            );
         }
      }

      return (
         <div
            key={item.index}
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 3,
               border: '1px dashed black',
               borderRadius: 5,
               padding: 10
            }}
         >
            {item.isHead ? (
               <Question
                  key={item.index}
                  item={item}
                  handleClick={addAnswer}
                  handleClickTitle={addQuestion}
                  handleRemove={removeAny}
                  handleChange={(values) => {
                     setChangesQuestion(values, item.index);
                  }}
               />
            ) : (
               <Answer
                  key={item.index}
                  item={item}
                  handleClick={addQuestion}
                  handleRemove={removeAny}
                  handleChange={(values) => {
                     setChangesAnswer(values, item.index);
                  }}
                  handleCheckParentType={getCheckParentType}
               />
            )}
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  paddingLeft: 8
               }}
            >
               {item.options.map(renderHTML)}
            </div>
         </div>
      );
   };

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            padding: 3
         }}
      >
         <div
            style={{
               border: '1px dashed black',
               display: 'flex',
               flexDirection: 'column',
               borderRadius: 5,
               padding: 10,
               gap: 8
            }}
         >
            {tree.map(renderHTML)}
         </div>
         <Button onClick={() => addQuestion(null)}>Нэмэх</Button>
         <Button onClick={() => console.log('=====>', items)}>Хэвлэх</Button>
      </div>
   );
};
export default Index;
