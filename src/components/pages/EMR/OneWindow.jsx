import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import ListOfIssues from './ListOfIssues';
import OrderHistory from './OrderHistory';
import DocumentHistory from './DocumentHistory';

const OneWindow = () => {
   const [activeKey, setActiveKey] = useState(0);
   const Render = useMemo(() => {
      if (activeKey === 0) {
         return ListOfIssues;
      } else if (activeKey === 1) {
         return OrderHistory;
      } else if (activeKey === 2) {
         return DocumentHistory;
      }
   }, [activeKey]);
   return (
      <div className="ambo-issuse-order">
         <div className="header">
            <p className={activeKey === 0 ? 'active' : ''} onClick={() => setActiveKey(0)}>
               Асуудлын жагсаалт
            </p>
            <p className={activeKey === 1 ? 'active' : ''} onClick={() => setActiveKey(1)}>
               Захиалгийн түүх
            </p>
            <p className={activeKey === 2 ? 'active' : ''} onClick={() => setActiveKey(2)}>
               Маягт
            </p>
         </div>
         <div className="content">
            <Render />
         </div>
      </div>
   );
};
export default OneWindow;
