import React from 'react';
import { Tabs } from 'antd';
import Invoice from './Invoice';

function Payments() {
   const tabs = [{ label: 'Амбулатори', key: 1, children: <Invoice /> }];
   return <Tabs type="card" items={tabs} />;
}
export default Payments;
