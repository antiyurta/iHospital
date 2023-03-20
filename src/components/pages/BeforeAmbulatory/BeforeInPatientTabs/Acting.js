import { Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentDepId } from '../../../../features/authReducer';
import Expenses from './ActingRef/Expenses';
import Orders from './ActingRef/Orders';
import Transfers from './ActingRef/Transfers';
function Acting() {
   const depIds = useSelector(selectCurrentDepId);
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
                  children: <Orders depIds={depIds} />
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
