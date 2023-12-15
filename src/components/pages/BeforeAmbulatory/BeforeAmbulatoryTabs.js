//Амбулаторийн үзлэгийн өмнөх жагсаалтын доор байрлах TAB ууд
import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import EarlyWarning from './EarlyWarning';
import OtherCustomized from './OtherCustomized/Index';

export default function BeforeAmbulatoryTabs({ patientId, patientData, type, structureId, listId, reasonComming }) {
   var items = [
      {
         label: 'Эрт сэрэмжлүүлэх үнэлгээ',
         key: 'item-1',
         children: (
            <EarlyWarning
               PatientId={patientId}
               StructureId={structureId}
               PatientData={patientData}
               ListId={listId}
               UsageType={'OUT'}
            />
         )
      }
      // {
      //   label: "Эмчилгээ",
      //   key: "item-2",
      //   // children: <EarlyWarning PatientId={patientId} listId={listId} />,
      // }
      // {
      //   label: "Өвчтөний түүх",
      //   key: "item-2",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Лаборатори",
      //   key: "item-3",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Тэмдэглэл хөтлөх",
      //   key: "item-4",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Суурь үнэлгээ",
      //   key: "item-5",
      //   children: <EarlyWarning />,
      // },
   ];
   useEffect(() => {
      if (reasonComming) {
         items.push({
            label: 'Яаралтай үнэлэх',
            key: 'EMERGENCY',
            children: <OtherCustomized documentValue={'EMERGENCY'} />
         });
      }
   }, [reasonComming]);
   return (
      <>
         <Tabs size="small" items={items} destroyInactiveTabPane={true} />
      </>
   );
}
