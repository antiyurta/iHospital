import React from 'react';
import { Tabs } from 'antd';
import Index from './Index';

function Schedule() {
   const tabs = [
      { label: 'Эмчийн хуваарь', key: 1, children: <Index type={1} /> },
      { label: 'Эмчилгээний хуваарь', key: 2, children: <Index type={2} /> },
      { label: 'Оношилгооны хуваарь', key: 3, children: <Index type={3} /> }
   ];
   return (
      <div className="p-3 w-full bg-[#f5f6f7] h-screen">
         <Tabs type="card" items={tabs} />
      </div>
   );
}
export default Schedule;
