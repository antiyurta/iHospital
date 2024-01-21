import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import ListOfIssues from './ListOfIssues';
import OrderHistory from './OrderHistory';
import DocumentHistroy from '../EMR/NewEmrSupport/history/DocumentHistory';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
import Icon from './docIcon.svg';

const OneWindow = () => {
   const { usageType } = useSelector(selectCurrentEmrData);
   const [activeKey, setActiveKey] = useState(usageType === 'OUT' ? 0 : 2);
   const Render = useMemo(() => {
      if (activeKey === 0) {
         return ListOfIssues;
      } else if (activeKey === 1) {
         return OrderHistory;
      } else if (activeKey === 2) {
         return DocumentHistroy;
      }
   }, [activeKey]);
   return (
      <div className="ambo-issuse-order">
         <div className="header">
            {usageType === 'OUT' ? (
               <>
                  <div className={activeKey === 0 ? 'section active' : 'section'}>
                     <img src={Icon} alt="icon" />
                     <p onClick={() => setActiveKey(0)}>Асуудлын жагсаалт</p>
                  </div>
                  <div className={activeKey === 1 ? 'section active' : 'section'}>
                     <img src={Icon} alt="icon" />
                     <p onClick={() => setActiveKey(1)}>Захиалгийн түүх</p>
                  </div>
                  <div className={activeKey === 2 ? 'section active' : 'section'}>
                     <img src={Icon} alt="icon" />
                     <p onClick={() => setActiveKey(2)}>Маягт</p>
                  </div>
               </>
            ) : (
               <div className={activeKey === 2 ? 'section active' : 'section'}>
                  <img src={Icon} alt="icon" />
                  <p onClick={() => setActiveKey(2)}>Маягт</p>
               </div>
            )}
         </div>
         <div className="content">
            <Render />
         </div>
      </div>
   );
};
export default OneWindow;
