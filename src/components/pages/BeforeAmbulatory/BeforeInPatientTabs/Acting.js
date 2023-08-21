import { Tabs } from 'antd';
import React from 'react';
import Expenses from './ActingRef/Expenses';
import Orders from './ActingRef/Orders';
import Transfers from './ActingRef/Transfers';
function Acting() {
   return (
      <>
         <Tabs
            type="card"
            items={[
               {
                  label: 'Зарлага',
                  key: 1,
                  children: <Expenses />
               },
               {
                  label: 'Захиалга',
                  key: 2,
                  children: <Orders />
               },
               {
                  label: 'Дотоод гүйлгээ',
                  key: 3,
                  children: <Transfers />
               }
            ]}
         />
      </>
   );
}

export default Acting;
