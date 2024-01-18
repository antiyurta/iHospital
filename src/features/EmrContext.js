import React, { createContext, useState } from 'react';

const EmrContext = createContext();

export const EmrContextProvider = ({ children }) => {
   const [selectedAppoitmentId, setSelectedAppointmentId] = useState(null);
   const [expandedKeys, setExpandedKeys] = useState(null);
   const setId = (id) => {
      setSelectedAppointmentId(id);
   };
   const setKeys = (keys) => {
      setExpandedKeys(keys);
   };
   return (
      <EmrContext.Provider value={{ selectedAppoitmentId, setId, expandedKeys, setKeys }}>
         {children}
      </EmrContext.Provider>
   );
};
export default EmrContext;
