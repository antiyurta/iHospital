//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React from 'react';
import { Tabs } from 'antd';
//
import Ambulatory from './Lists/Ambulatory';
import PatientList from './Lists/PatientList';
import PreOrder from './Lists/PreOrder';
//
export default function BeforeAmbulatoryList() {
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
      }
   ];

   return <Tabs type="card" items={items} />;
}
