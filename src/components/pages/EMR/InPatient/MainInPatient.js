import { Button, Tabs, Tag } from 'antd';
import React, { useState } from 'react';
import Anemiz from './Anemiz';
import InPatient from './InPatient';
import InPatientNotes from './InPatientNotes';
import NursingStats from './NursingStats';
const { CheckableTag } = Tag;
function MainInPatient({ appointments, patientId }) {
   const items = [
      {
         label: 'Аннамез',
         key: 1,
         children: <Anemiz />
      },
      {
         label: 'Хэвтэх үед',
         key: 2,
         children: <InPatient />
      },
      {
         label: 'Өдрийн тэмдэглэл',
         key: 3,
         children: <InPatientNotes Appointments={appointments} />
      },
      {
         label: 'Жижүүр эмчийн тэмдэглэл',
         key: 4
      },
      {
         label: 'Гарах, шилжих үеийн тэмдэглэл',
         key: 5
      },
      {
         label: 'Мэс засал',
         key: 6
      },
      {
         label: 'Дүрс оношилгоо',
         key: 7
      },
      {
         label: 'Эмийн эмчилгээ',
         key: 8
      },
      {
         label: 'Мэдээгүйжүүлэг',
         key: 9
      },
      {
         label: 'Шинжилгээний хариу',
         key: 10
      },
      {
         label: 'Эмийн бус эмчилгээ',
         key: 11
      },
      {
         label: 'Сувилгааны тэмдэглэл',
         key: 12,
         children: <NursingStats />
      }
   ];
   // return <Tabs type="card" size="small" items={items} />;
   const [dd, setDd] = useState(Number);
   const onChange = (key) => {
      setDd(key);
   };
   const Render = () => {
      if (dd != 0) {
         return <div className="p-2">{items[dd - 1].children}</div>;
      }
   };
   return (
      <div>
         <div className="bg-[#1890ff] checkTag">
            {items.map((item, index) => {
               return (
                  <CheckableTag
                     key={index}
                     checked={dd === item.key}
                     onChange={() => {
                        onChange(item.key);
                     }}
                     className="text-white m-1"
                  >
                     {item.label}
                  </CheckableTag>
               );
            })}
         </div>
         <div className="pt-1">
            <Render />
         </div>
      </div>
   );
}
export default MainInPatient;
