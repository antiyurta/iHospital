import React, { useState } from 'react';
import { Tag } from 'antd';
import orderType from './orderType';
const { CheckableTag } = Tag;
const InpatientFilter = ({ onChange }) => {
   const [checkedKey, setCheckedKey] = useState(0);
   return (
      <div className="w-full">
         <div className="bg-[#1890ff] checkTag">
            {orderType.map((tag, index) => (
               <CheckableTag
                  key={index}
                  checked={checkedKey === tag.value}
                  onChange={() => {
                     onChange(tag.value);
                     setCheckedKey(tag.value);
                  }}
                  className="text-white m-1"
               >
                  <div className="flex">
                     <img src={require(`@Assets/bed/${tag.img}`)} width="20" />
                     {tag.label}
                  </div>
               </CheckableTag>
            ))}
         </div>
      </div>
   );
};
export default InpatientFilter;
