//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React, { useState } from 'react';
import { Tabs } from 'antd';
import DocumentShow from '../611/DocumentShow';
import { useLocation } from 'react-router-dom';
import Index from '../BeforeAmbulatory/Lists/Index/Index';

export default function BeforeAmbulatoryList() {
   const {
      state: { activeKey }
   } = useLocation();
   const documents = (
      <>
         <DocumentShow
            props={{
               appIds: null,
               departmentId: null,
               appointmentId: null,
               usageType: 'OUT',
               documentType: 1,
               patientId: null
            }}
         />
      </>
   );
   const items = [
      {
         label: 'Амбулатори',
         key: '1',
         children: <Index type={0} isDoctor={true} isSurgeyBoss={false} />
      },
      {
         label: 'Урьдчилсан сэргийлэх',
         key: '2',
         children: <Index type={1} isDoctor={true} isSurgeyBoss={false} />
      },
      {
         label: 'Хэвтэн',
         key: '3',
         children: <Index type={2} isDoctor={true} isSurgeyBoss={false} />
      }
   ];
   const [currentActiveKey, setActiveKey] = useState(activeKey);
   return (
      <div className="p-3 w-full h-full bg-[#f5f6f7]">
         <Tabs
            type="card"
            activeKey={currentActiveKey}
            onChange={(key) => setActiveKey(key)}
            tabBarExtraContent={documents}
            items={items}
            destroyInactiveTabPane={true}
         />
      </div>
   );
}
