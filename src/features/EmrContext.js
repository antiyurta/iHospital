import React, { createContext, useState } from 'react';

const EmrContext = createContext();

export const EmrContextProvider = ({ children }) => {
   const [selectedAppoitmentId, setSelectedAppointmentId] = useState(null); // onosh delgerngu
   const [expandedKeys, setExpandedKeys] = useState(null); // onosh songogdson ued
   const [countOfDocument, setCountOfDocument] = useState(0); // hewten maygtin too
   const [countOfDraft, setCountOfDraft] = useState(0); // hewten draft iin too
   const [isReloadDocumentHistory, setIsReloadDocumentHistory] = useState(false); // oorcloltin dara maygt tatah
   const setId = (id) => {
      setSelectedAppointmentId(id);
   };
   const setKeys = (keys) => {
      setExpandedKeys(keys);
   };
   const setDocumentCount = (count) => {
      setCountOfDocument(count);
   };
   const setDocumentDraft = (count) => {
      setCountOfDraft(count);
   };
   return (
      <EmrContext.Provider
         value={{
            selectedAppoitmentId,
            setId,
            expandedKeys,
            setKeys,
            countOfDocument,
            setDocumentCount,
            countOfDraft,
            setDocumentDraft,
            isReloadDocumentHistory,
            setIsReloadDocumentHistory
         }}
      >
         {children}
      </EmrContext.Provider>
   );
};
export default EmrContext;
