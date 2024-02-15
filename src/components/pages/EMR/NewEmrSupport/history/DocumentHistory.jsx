import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import Document from './document';
import GroupDocument from './groupDocument';
import DocumentsFormPatientService from '../../../../../services/organization/document';
import serviceService from '../../../../../services/service/service';
import { Each } from '../../../../../features/Each';
import EmrContext from '../../../../../features/EmrContext';
import { groupedByAppointmentId, groupByDocumentValueIn } from '../../../../documentInjection';

const DocumentHistory = () => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { isReloadDocumentHistory, setIsReloadDocumentHistory } = useContext(EmrContext);
   const { usageType } = incomeEmrData;
   const [documentsOut, setDocuments] = useState([]);
   const [documentsIn, setDocumentsIn] = useState([]);
   const getDocumentsHistory = async () => {
      await DocumentsFormPatientService.getByDocument(incomeEmrData.patientId, {
         type: 'FORM',
         usageType: usageType,
         saveType: 'Save'
      })
         .then(
            async ({
               data: {
                  response: { response }
               }
            }) => {
               if (response?.length > 0) {
                  if (usageType === 'OUT') {
                     const sortedResponse = response.sort((a, b) => a.createdAt - b.createdAt);
                     setDocuments(sortedResponse);
                  } else if (usageType === 'IN') {
                     const sortedResponse = response.sort((a, b) => a.position - b.position);
                     const groupedDocuments = groupedByAppointmentId(sortedResponse);
                     const grouped = groupByDocumentValueIn(groupedDocuments);
                     figureOut(grouped);
                  }
               } else {
                  figureOut({});
               }
            }
         )
         .finally(() => {
            if (isReloadDocumentHistory) {
               setIsReloadDocumentHistory(false);
            }
         });
   };
   const getInpatientRequest = async (id, index, value) => {
      return await serviceService.getInpatientRequestById(id).then(({ data: { response } }) => {
         return {
            index: index,
            structureName: response.structure?.name,
            date: {
               startDate: response.startDate,
               endDate: response.endDate
            },
            documents: value
         };
      });
   };
   const figureOut = async (groupedDocuments) => {
      const promises = Object?.entries(groupedDocuments)?.map(async ([key, value], index) => {
         return await getInpatientRequest(key, index, value);
      });
      const items = await Promise.all(promises);
      setDocumentsIn(items);
   };

   useEffect(() => {
      getDocumentsHistory();
   }, []);
   useEffect(() => {
      isReloadDocumentHistory && getDocumentsHistory();
   }, [isReloadDocumentHistory]);
   return (
      <div className="list-of-orders">
         {usageType === 'OUT' ? (
            documentsOut
               ?.filter((documentOut) => documentOut.documentId != 87)
               .map((fDocumentOut, index) => (
                  <Document key={index} document={fDocumentOut} index={index} incomeEmrData={incomeEmrData} />
               ))
         ) : (
            <div className="documents-in">
               <Each
                  of={documentsIn}
                  render={(documentIn, index) => <GroupDocument key={index} document={documentIn} />}
               />
            </div>
         )}
      </div>
   );
};
export default DocumentHistory;
