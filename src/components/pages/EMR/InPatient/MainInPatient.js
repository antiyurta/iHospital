import React, { useState } from 'react';
import ComingSoon from './ComingSoon';
import NursingStats from './NursingStats';

function MainInPatient() {
   const [activeKey, setActiveKey] = useState(1);
   const buttonItems = [
      {
         label: 'Шинжилгээний хариу',
         key: 1,
         children: <ComingSoon />
      },
      {
         label: 'Дүрс оношилгоо',
         key: 2,
         children: <ComingSoon />
      },
      {
         label: 'Эмийн эмчилгээ',
         key: 3,
         children: <ComingSoon />
      },
      {
         label: 'Эмийн бус эмчилгээ',
         key: 4,
         children: <ComingSoon />
      },
      {
         label: 'Мэс засал',
         key: 5,
         children: <ComingSoon />
      },
      {
         label: 'Мэдээгүйжүүлэг',
         key: 6,
         children: <ComingSoon />
      },
      {
         label: 'Эмчийн тэмдэглэл',
         key: 7,
         children: <ComingSoon />
      },
      {
         label: 'Сувилгааны тэмдэглэл',
         key: 8,
         children: <ComingSoon />
      }
   ];
   return (
      <div className="inpatient-history-filter">
         <div className="filters">
            {buttonItems?.map((buttonItem) => (
               <button
                  key={buttonItem.key}
                  className={activeKey === buttonItem.key ? 'active' : ''}
                  onClick={() => {
                     setActiveKey(buttonItem.key);
                  }}
               >
                  {buttonItem.label}
               </button>
            ))}
         </div>
         <div>{buttonItems[activeKey - 1].children}</div>
      </div>
   );
}
export default MainInPatient;
