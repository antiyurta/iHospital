import React, { createContext, useState } from 'react';

const EmrContext = createContext();

export const EmrContextProvider = ({ children }) => {
   const [selectedPatient, setSelectedPatient] = useState({}); // songogdson owtoni medelel
   const [selectedAppoitmentId, setSelectedAppointmentId] = useState({
      key: null,
      id: null
   }); // onosh delgerngu
   const [activeKey, setActiveKey] = useState(null);
   const [expandedKeys, setExpandedKeys] = useState(null); // onosh songogdson ued
   const [countOfDocument, setCountOfDocument] = useState(0); // hewten maygtin too
   const [countOfDraft, setCountOfDraft] = useState(0); // hewten draft iin too
   const [draftedDocuments, setDraftedDocuments] = useState(null);
   const [isReloadDocumentHistory, setIsReloadDocumentHistory] = useState(false); // oorcloltin dara maygt tatah
   // OTS start
   const [countOfPublicSetOrder, setCountOfPublicSetOrder] = useState(0);
   const [countOfPrivateSetOrder, setCountOfPrivateSetOrder] = useState(0);
   // OTS end
   // Document Start
   const [isViewDocument, setIsViewDocument] = useState(false);
   const [documentType, setDocumentType] = useState('one'); // one | many
   const [selectedDocument, setSelectedDocument] = useState(false);
   const [documentTrigger, setDocumentTrigger] = useState([]);
   // Document End
   const setPatient = (patient) => {
      setSelectedPatient(patient);
   };
   //
   const setId = (id, type) => {
      // setSelectedAppointmentId({
      //    key: 'item-1',
      //    id: null
      // });
      setSelectedAppointmentId({
         key: type,
         id: id
      });
   };
   const setKeys = (keys) => {
      setExpandedKeys(keys);
   };
   const setDocumentCount = (count) => {
      setCountOfDocument(count);
   };
   const setDocumentDraft = (documents) => {
      setCountOfDraft(documents?.length);
      setDraftedDocuments(documents);
   };
   // OTS Function start
   const setPublicSetOrderCount = (count) => {
      setCountOfPublicSetOrder(count);
   };
   const setPrivateSetOrderCount = (count) => {
      setCountOfPrivateSetOrder(count);
   };
   // OTS Function end
   // DocumentViewer functuin start
   const setDocumentView = (state, document, type) => {
      setDocumentType(type);
      setSelectedDocument(document);
      setIsViewDocument(state);
   };
   const setActiveKeyId = (id) => {
      setActiveKey(id);
   };
   // DocumentViewer functuin end
   return (
      <EmrContext.Provider
         value={{
            selectedPatient,
            setPatient,
            selectedAppoitmentId,
            setId,
            expandedKeys,
            setKeys,
            activeKey,
            setActiveKeyId,
            countOfDocument,
            setDocumentCount,
            countOfDraft,
            draftedDocuments,
            setDocumentDraft,
            isReloadDocumentHistory,
            setIsReloadDocumentHistory,
            countOfPublicSetOrder,
            setPublicSetOrderCount,
            countOfPrivateSetOrder,
            setPrivateSetOrderCount,
            isViewDocument,
            selectedDocument,
            documentType,
            setDocumentView,
            documentTrigger,
            setDocumentTrigger
         }}
      >
         {children}
      </EmrContext.Provider>
   );
};
export default EmrContext;
