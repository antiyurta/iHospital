import React, { useState } from 'react';
//comps
import Vaccine from './MainHicsHistory/Vaccine';
import PatientDataHistory from './MainHicsHistory/PatientDataHistory';
import PrescriptionHistory from './MainHicsHistory/PrescriptionHistory';

const MainHicsHistory = ({ patient }) => {
   const [activeKey, setActiveKey] = useState(0);
   const buttonItems = [
      {
         label: 'Түүх',
         key: 1,
         children: <PatientDataHistory registerNumber={patient.registerNumber} />
      },
      {
         label: 'Эмийн жор',
         key: 2,
         children: <PrescriptionHistory registerNumber={patient.registerNumber} />
      },
      {
         label: 'Дархлаажуулалт',
         key: 3,
         children: <Vaccine registerNumber={patient.registerNumber} />
      }
   ];
   return (
      <div className="inpatient-history-filter">
         <div className="filters">
            {buttonItems?.map((buttonItem) => (
               <button
                  key={buttonItem.key}
                  className={activeKey === buttonItem.key ? 'active' : ''}
                  onClick={() => {
                     setActiveKey(buttonItem.key);
                  }}
               >
                  {buttonItem.label}
               </button>
            ))}
         </div>
         {buttonItems[activeKey - 1]?.children}
      </div>
   );
};
export default MainHicsHistory;
