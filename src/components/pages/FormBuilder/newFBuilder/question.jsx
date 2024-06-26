import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, Popconfirm, Select } from 'antd';
import React, { useEffect, useState } from 'react';

const Question = (props) => {
   const { item, handleClick, handleClickMiddle, handleClickTitle, handleRemove, handleChange } = props;
   const [type, setType] = useState(item.type);
   const [keyWord, setKeyWord] = useState(item.keyWord);
   const [question, setQuestion] = useState(item.question);
   const [isInteger, setIsInteger] = useState(item.isInteger);
   const [isOther, setIsOther] = useState(item.isOther);
   useEffect(() => {
      handleChange({
         type: type,
         keyWord: keyWord,
         question: question,
         isInteger: isInteger,
         isOther: isOther
      });
   }, [type, keyWord, question, isInteger, isOther]);
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            alignItems: 'end',
            justifyContent: 'space-around'
         }}
      >
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
                     label: 'ZugerTitle',
                     value: 'title'
                  },
                  {
                     label: 'Input',
                     value: 'input'
                  },
                  {
                     label: 'InputNumber',
                     value: 'inputNumber'
                  },
                  {
                     label: 'Radio',
                     value: 'radio'
                  },
                  {
                     label: 'Checkbox',
                     value: 'checkbox'
                  },
                  {
                     label: 'Table',
                     value: 'table'
                  },
                  {
                     label: 'Text',
                     value: 'textarea'
                  },
                  {
                     label: 'Only Time',
                     value: 'timepicker'
                  },
                  {
                     label: 'Date',
                     value: 'datepicker'
                  },
                  {
                     label: 'DateTime',
                     value: 'dateTime'
                  },
                  {
                     label: 'diagnose',
                     value: 'diagnose'
                  },
                  {
                     label: 'diagnoseMNName',
                     value: 'diagnoseMNName'
                  },
                  {
                     label: 'Human Body',
                     value: 'humanbody'
                  },
                  {
                     label: 'Human Head',
                     value: 'humanhead'
                  },
                  {
                     label: 'Human ct-32a',
                     value: 'human32a'
                  }
               ]}
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
               disabled={type === 'title' ? true : false}
               value={keyWord}
               onChange={(e) => {
                  setKeyWord(e.target.value);
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
            <strong>Асуулт</strong>
            <Input
               value={question}
               onChange={(e) => {
                  setQuestion(e.target.value);
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
            <strong>Тоо эсэх?</strong>
            <Checkbox
               disabled={type === 'title' ? true : false}
               checked={isInteger}
               value={isInteger}
               onChange={(e) => {
                  setIsInteger(e.target.checked);
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
            <strong>Бусад?</strong>
            <Checkbox
               disabled={type === 'title' ? true : false}
               checked={isOther}
               value={isOther}
               onChange={(e) => {
                  setIsOther(e.target.checked);
               }}
            />
         </div>
         <Button onClick={() => handleClickMiddle(item)}>Яг доор нэмэх</Button>
         {type === 'radio' || type === 'table' || type === 'checkbox' ? (
            <Button
               onClick={() => {
                  handleClick(item.index);
               }}
               icon={<PlusOutlined />}
            />
         ) : null}
         {type === 'title' ? (
            <Button
               onClick={() => {
                  handleClickTitle(item.index);
               }}
               icon={<PlusOutlined />}
            />
         ) : null}
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
export default Question;
