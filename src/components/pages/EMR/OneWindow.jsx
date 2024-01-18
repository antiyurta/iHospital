import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import ListOfIssues from './ListOfIssues';
import OrderHistory from './OrderHistory';
import DocumentHistroy from '../EMR/NewEmrSupport/history/DocumentHistory';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';

const Icon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
         d="M14 4.66666V11.3333C14 13.3333 13 14.6667 10.6667 14.6667H5.33333C3 14.6667 2 13.3333 2 11.3333V4.66666C2 2.66666 3 1.33333 5.33333 1.33333H10.6667C13 1.33333 14 2.66666 14 4.66666Z"
         stroke="#2D8CFF"
         stroke-width="1.5"
         stroke-miterlimit="10"
         stroke-linecap="round"
         stroke-linejoin="round"
      />
      <path
         d="M9.6665 3V4.33333C9.6665 5.06667 10.2665 5.66667 10.9998 5.66667H12.3332"
         stroke="#2D8CFF"
         stroke-width="1.5"
         stroke-miterlimit="10"
         stroke-linecap="round"
         stroke-linejoin="round"
      />
      <path
         d="M4.9866 10.3266C4.7666 9.63998 5.02658 8.79334 5.73991 8.56C6.11991 8.44 6.58658 8.53998 6.84658 8.90664C7.09325 8.52664 7.57992 8.44 7.95325 8.56C8.67325 8.79334 8.92659 9.63998 8.71326 10.3266C8.37326 11.4133 7.17991 11.98 6.84658 11.98C6.51991 11.9733 5.33993 11.42 4.9866 10.3266Z"
         stroke="#2D8CFF"
         stroke-width="1.5"
         stroke-linecap="round"
         stroke-linejoin="round"
      />
   </svg>
);

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
                     <Icon />
                     <p onClick={() => setActiveKey(0)}>Асуудлын жагсаалт</p>
                  </div>
                  <div className={activeKey === 1 ? 'section active' : 'section'}>
                     <Icon />
                     <p onClick={() => setActiveKey(1)}>Захиалгийн түүх</p>
                  </div>
                  <div className={activeKey === 2 ? 'section active' : 'section'}>
                     <Icon />
                     <p onClick={() => setActiveKey(2)}>Маягт</p>
                  </div>
               </>
            ) : (
               <div className={activeKey === 2 ? 'section active' : 'section'}>
                  <Icon />
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
