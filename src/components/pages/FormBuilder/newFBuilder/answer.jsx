import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, Popconfirm, Select } from 'antd';
import React, { useEffect, useState } from 'react';
const Answer = (props) => {
   const { item, handleClick, handleRemove, handleChange, handleCheckParentType } = props;
   const [isAddType, setIsAddType] = useState(false);
   const [isExpand, setIsExpand] = useState(false);
   const [type, setType] = useState(item.type);
   const [question, setQuestion] = useState(item.question);
   const [keyWord, setKeyWord] = useState(item.keyWord);
   useEffect(() => {
      handleChange({
         type: type,
         question: question,
         keyWord: keyWord
      });
   }, [question, keyWord]);
   useEffect(() => {
      const parentType = handleCheckParentType(item.parentIndex);
      if (parentType === 'checkbox') {
         setIsExpand(true);
      } else if (parentType === 'table') {
         setIsAddType(true);
      } else {
         setIsExpand(true);
      }
   }, []);
   return (
      <div
         style={{
            borderRadius: 5,
            background: '#fafaff',
            padding: 3,
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            alignItems: 'end'
         }}
      >
         {isAddType ? (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3
               }}
            >
               <strong>Төрөл</strong>
               <Select
                  style={{
                     width: 160
                  }}
                  value={type}
                  onChange={(e) => setType(e)}
                  options={[
                     {
                        label: 'Input',
                        value: 'input'
                     },
                     {
                        label: 'Date',
                        value: 'datepicker'
                     }
                  ]}
               />
            </div>
         ) : null}
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 3
            }}
         >
            <strong>Хариулт</strong>
            <Input
               value={question}
               onChange={(e) => setQuestion(e.target.value)}
               style={{
                  background: 'white'
               }}
            />
         </div>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: 3
            }}
         >
            <strong>Түлхүүр</strong>
            <Input
               value={keyWord}
               onChange={(e) => setKeyWord(e.target.value)}
               style={{
                  background: 'white'
               }}
            />
         </div>
         {isExpand ? <Button title="Задрах" onClick={() => handleClick(item.index)} icon={<PlusOutlined />} /> : null}
         <Popconfirm
            title="Асуулт устгах?"
            description="Та устгахдаа итгэлтэй байна уу доторх бүр агууллага устана?"
            onConfirm={() => handleRemove(item.index)}
            okText="Тийм"
            cancelText="Үгүй"
         >
            <Button danger icon={<MinusOutlined />} />
         </Popconfirm>
      </div>
   );
};
export default Answer;
