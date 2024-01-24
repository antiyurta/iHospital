import React, { useEffect, useState } from 'react';
const Soap = (props) => {
   const { soapKey, expandedKey, handleClick } = props;
   const [expand, setExpand] = useState(false);
   useEffect(() => {
      if (expandedKey === soapKey) {
         setExpand(true);
      } else {
         setExpand(false);
      }
   }, [expandedKey]);
   return (
      <div className="flex flex-col gap-2">
         <div className="flex flex-row gap-2 hover:cursor-pointer" onClick={() => handleClick(soapKey)}>
            <p className="text-[#4E5969] font-bold">{props.title}</p>
            <p className="text-[#A9AEB8] font-bold">{props.subTitle}</p>
         </div>
         {expand ? (
            <div
               className="flex flex-col gap-1"
               style={{
                  height: 205,
                  overflow: 'auto'
               }}
            >
               {props.children}
            </div>
         ) : (
            <div
               className="px-2 py-1 bg-white border-[#C9CDD4] border-1 rounded-lg hover:cursor-pointer"
               onClick={() => handleClick(soapKey)}
            >
               <p>--</p>
            </div>
         )}
      </div>
   );
};
export default Soap;
