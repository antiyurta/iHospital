import { Modal, Tabs } from 'antd';
import React, { useState } from 'react';

import DocumentHistory from './DocumentHistory';

const Index = () => {
   const [isOpen, setIsOpen] = useState(false);
   const items = [
      {
         key: '1',
         label: 'Амбулатори',
         children: <DocumentHistory usageType="OUT" />
      },
      {
         key: '2',
         label: 'Стоционари',
         children: <DocumentHistory usageType="IN" />
      }
   ];
   return (
      <>
         <button onClick={() => setIsOpen(true)}>Маягтын түүх</button>
         <Modal title="Маягтын түүхүүд" open={isOpen} onCancel={() => setIsOpen(false)} footer={false}>
            <Tabs destroyInactiveTabPane type="card" items={items} />
         </Modal>
      </>
   );
};
export default Index;
