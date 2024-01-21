import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InternalOrder from './NewOrder/InternalOrder';
import PartnerOrder from './NewOrder/PartnerOrder';
//
function Order({ isPackage, selectedPatient, usageType, categories, save }) {
   const [activeKey, setActiveKey] = useState(0);
   const IncomeAppointmentId = useLocation()?.state?.appointmentId;
   const components = [
      <InternalOrder
         isPackage={isPackage}
         usageType={usageType}
         selectedPatient={selectedPatient}
         categories={categories}
         IncomeAppointmentId={IncomeAppointmentId}
         save={save}
      />,
      <PartnerOrder />
   ];

   return (
      <div className="hospital-order">
         <div className="header">
            <p className={activeKey === 0 ? 'active' : ''} onClick={() => setActiveKey(0)}>
               Дотоод захиалга
            </p>
            <p className={activeKey === 1 ? 'active' : ''} onClick={() => setActiveKey(1)}>
               Партнер эмнэлэг
            </p>
         </div>
         {components[activeKey]}
      </div>
   );
}
export default Order;
