import React from 'react';
import { Tabs } from 'antd';
import ProgressNotes from './ProgressNotes';
import NurseNote from '../NurseNote';
import ProgressCheck from './ProgressCheck';
import Xray from '../Xray';

//
import Assesments from './Nurse/Assesments';
import SentService from '../Insurance/sent-service';
//

export default function MainAmbulatory({ patientId }) {
   const items = [
      {
         label: 'Явцын тэмдэглэл',
         key: 'item-1',
         children: <ProgressNotes />
      },
      {
         label: 'Амьдралын түүх',
         key: 'item-2',
         children: <ProgressCheck PatientId={patientId} />
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
         label: 'Оношилгоо',
         key: 'item-4',
         children: <Xray PatientId={patientId} />
      },
      {
         label: 'ЭМД',
         key: 'item-5',
         children: <SentService PatientId={patientId} />
      }
      // {
      //   label: "Эмийн эмчилгээ",
      //   key: "item-3",
      //   // children: <ProgressNotes />,
      // },
      // {
      //   label: "Шинжилгээний хариу",
      //   key: "item-4",
      //   // children: <ProgressNotes />,
      // },
      // {
      //   label: "Эмийн бус эмчилгээ",
      //   key: "item-5",
      //   // children: <ProgressNotes />,
      // },
   ];
   return <Tabs size="small" items={items} />;
}
