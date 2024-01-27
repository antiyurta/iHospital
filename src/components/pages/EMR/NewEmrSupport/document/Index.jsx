import { Badge, Modal, Tabs } from 'antd';
import React, { useState } from 'react';

import DocumentIndex from './DocumentIndex';
import DocumentDraft from '../../EPatientHistory/DocumentDraft';

const Index = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [countOfAm, setCountOfAm] = useState(0);
   const [countOfDraft, setCountOfDraft] = useState(0);
   const items = [
      {
         key: '1',
         label: (
            <div className="flex flex-row gap-2 items-end">
               <p>Амбулатори</p>
               <Badge showZero count={countOfAm || 0} color="#2D8CFF" />
            </div>
         ),
         children: <DocumentIndex usageType="OUT" handleCount={(count) => setCountOfAm(count)} />
      },
      {
         key: '2',
         label: (
            <div className="flex flex-row gap-2 items-end">
               <p>Ноорог</p>
               <Badge showZero count={countOfDraft || 0} color="#2D8CFF" />
            </div>
         ),
         children: <DocumentDraft usageType="OUT" handleCount={(count) => setCountOfDraft(count)} />
      }
   ];
   return (
      <>
         <button onClick={() => setIsOpen(true)}>611 маягт</button>
         <Modal
            title="611 маягтууд"
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            cancelText="Болих"
            okButtonProps={{ style: { display: 'none' } }}
         >
            <Tabs destroyInactiveTabPane type="card" items={items} />
         </Modal>
      </>
   );
};
export default Index;
