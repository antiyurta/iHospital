import React from 'react';
import { Tabs } from 'antd';

import DocumentUpload from '../611/Document/DocumentUpload';

const Index = () => {
   const items = [
      {
         key: 0,
         label: '611',
         children: <DocumentUpload type="FORM" />
      },
      {
         key: 1,
         label: 'Оношилгоо',
         children: <DocumentUpload type="XRAY" />
      }
   ];
   return <Tabs type="card" destroyInactiveTabPane items={items} />;
};
export default Index;
