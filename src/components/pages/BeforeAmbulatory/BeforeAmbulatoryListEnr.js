import React from 'react';
import { Tabs } from 'antd';
import Nurse from './Lists/Nurse';
import NurseInPatientList from './Lists/NurseInPatientList';

function BeforeAmbulatoryListEnr() {
   const items = [
      {
         label: 'Амбулатори',
         key: '1',
         children: <Nurse />
      },
      {
         label: 'Хэвтэн',
         key: '2',
         children: <NurseInPatientList />
      }
   ];
   return (
      <div className="p-3 w-full bg-[#f5f6f7]">
         <Tabs type="card" items={items} />
      </div>
   );
}
export default BeforeAmbulatoryListEnr;
