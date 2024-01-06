//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React, { useEffect } from 'react';
import { Button, Tabs } from 'antd';
import Ambulatory from './Lists/Ambulatory';
import PatientList from './Lists/PatientList';
import PreOrder from './Lists/PreOrder';
import Surgery from './Lists/Surgery';
import { SnippetsOutlined } from '@ant-design/icons';
import DocumentShow from '../611/DocumentShow';

export default function BeforeAmbulatoryList() {
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
         children: <Ambulatory />
      },
      {
         label: 'Урьдчилсан сэргийлэх',
         key: '2',
         children: <PreOrder />
      },
      {
         label: 'Хэвтэн',
         key: '3',
         children: <PatientList />
      },
      {
         label: 'Мэс засал',
         key: 4,
         children: <Surgery />
      }
   ];
   return (
      <div className="p-3 bg-[#f5f6f7]">
         <Tabs type="card" tabBarExtraContent={documents} items={items} destroyInactiveTabPane={true} />
      </div>
   );
}
