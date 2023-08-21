import React from 'react';
import { Tabs } from 'antd';
import Ambulatory from './Ambulatory';

function Payments() {
   const tabs = [{ label: 'Амбулатори', key: 1, children: <Ambulatory /> }];
   return <Tabs type="card" items={tabs} />;
}
export default Payments;
