import { Modal, Tabs } from 'antd';
import React, { useState } from 'react';

import DocumentIndex from './DocumentIndex';

const Index = () => {
   const [isOpen, setIsOpen] = useState(false);
   const items = [
      {
         key: '1',
         label: 'Амбулатори',
         children: <DocumentIndex usageType="OUT" />
      },
      {
         key: '2',
         label: 'Стоционари',
         children: <DocumentIndex usageType="IN" />
      }
   ];
   return (
      <>
         <button onClick={() => setIsOpen(true)}>611 маягт</button>
         <Modal title="611 маягтууд" open={isOpen} onCancel={() => setIsOpen(false)}>
            <Tabs destroyInactiveTabPane type="card" items={items} />
         </Modal>
      </>
   );
};
export default Index;
