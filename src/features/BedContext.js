import React, { createContext, useState } from 'react';

const BedManagementContext = createContext();

export const BedManagementProvider = ({ children }) => {
   const [activeKey, setActiveKey] = useState('1');
   const [bedStatus, setBedStatus] = useState(0);
   return (
      <BedManagementContext.Provider
         value={{
            activeKey,
            setActiveKey,
            bedStatus,
            setBedStatus
         }}
      >
         {children}
      </BedManagementContext.Provider>
   );
};
export default BedManagementContext;
