import React from 'react';
import { Tabs } from 'antd';
import Index from './Lists/Index/Index';

function BeforeAmbulatoryListEnr() {
   return (
      <div className="p-3 w-full bg-[#f5f6f7]">
         <Tabs
            type="card"
            items={[
               {
                  label: 'Амбулатори',
                  key: '1',
                  children: <Index type={0} isDoctor={false} />
               },
               {
                  label: 'Хэвтэн',
                  key: '2',
                  children: <Index type={2} isDoctor={false} />
               }
            ]}
         />
      </div>
   );
}
export default BeforeAmbulatoryListEnr;
