//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React, { useEffect } from 'react';
import { Button, Tabs } from 'antd';
import Ambulatory from './Lists/Ambulatory';
import PatientList from './Lists/PatientList';
import PreOrder from './Lists/PreOrder';
import { SnippetsOutlined } from '@ant-design/icons';

export default function BeforeAmbulatoryList() {
   const documents = (
      <Button type="primary" icon={<SnippetsOutlined />}>
         Маягт
      </Button>
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
      }
   ];
   return (
      <>
         <Tabs type="card" tabBarExtraContent={documents} items={items} />
      </>
   );
}
