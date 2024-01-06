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
      },
      {
         key: 2,
         label: 'Үзлэг',
         children: <DocumentUpload type="INSPECTION" />
      }
   ];
   return (
      <div className="w-full bg-[#f5f6f7] p-3">
         <Tabs type="card" destroyInactiveTabPane items={items} />
      </div>
   );
};
export default Index;
