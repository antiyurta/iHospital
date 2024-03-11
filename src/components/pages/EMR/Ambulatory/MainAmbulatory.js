import React, { useState } from 'react';
import ProgressNotes from './ProgressNotes';
import NurseNote from '../NurseNote';
import ProgressCheck from './ProgressCheck';
import Xray from '../Xray';
import ErequestList from './Erequest/ErequestList';

import Assesments from './Nurse/Assesments';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function MainAmbulatory({ patientId }) {
   const [activeKey, setActiveKey] = useState('item-1');
   const items = [
      {
         label: 'Явцын тэмдэглэл',
         key: 'item-1',
         children: <ProgressNotes />
      },
      {
         label: 'Амьдралын түүх',
         key: 'item-2',
         children: <ProgressCheck />
      },
      {
         label: 'Амин үзүүлэлт',
         key: 'item-3',
         children: <Assesments patientId={patientId} />
      },
      // {
      //    label: 'Сувилагчийн тэмдэглэл',
      //    key: 'item-6',
      //    children: <NurseNote PatientId={patientId} />
      // },
      {
         label: 'Шинжилгээний хариу',
         key: 'item-4',
         children: <ErequestList />
      },
      {
         label: 'Оношилгоо',
         key: 'item-5',
         children: <Xray PatientId={patientId} />
      }
      // {
      //   label: "Эмийн эмчилгээ",
      //   key: "item-3",
      //   // children: <ProgressNotes />,
      // },

      // {
      //   label: "Эмийн бус эмчилгээ",
      //   key: "item-5",
      //   // children: <ProgressNotes />,
      // },
   ];
   return (
      <>
         <div className="history-header">
            <Splide
               options={{
                  pagination: false,
                  autoWidth: true,
                  autoHeight: true,
                  gap: 20,
                  padding: 30
               }}
            >
               {items?.map((item) => (
                  <SplideSlide key={item.key}>
                     <div className={activeKey === item.key ? 'section active' : 'section'}>
                        <p onClick={() => setActiveKey(item.key)}>{item.label}</p>
                     </div>
                  </SplideSlide>
               ))}
            </Splide>
         </div>
         {items?.find((item) => item.key === activeKey)?.children}
      </>
   );
}
