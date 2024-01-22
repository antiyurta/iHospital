import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData, selectCurrentSelectedPatient } from '../../../../../features/emrReducer';

import Document from './document';
import GroupDocument from './groupDocument';

import DocumentsFormPatientService from '../../../../../services/organization/document';
import serviceService from '../../../../../services/service/service';
import { Each } from '../../../../../features/Each';
import EmrContext from '../../../../../features/EmrContext';

const DocumentHistory = () => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { isReloadDocumentHistory, setIsReloadDocumentHistory } = useContext(EmrContext);
   const { usageType } = incomeEmrData;
   const [isLoading, setIsLoading] = useState(false);
   const [documentsOut, setDocuments] = useState([]);
   const [documentsIn, setDocumentsIn] = useState([]);
   const groupedByAppointmentId = (documents) => {
      // hewtengiin maygtuud angilah
      return documents.reduce((apps, document) => {
         const { appointmentId } = document;
         if (!apps[appointmentId]) {
            apps[appointmentId] = [];
         }
         apps[appointmentId].push(document);
         return apps;
      }, {});
   };
   const groupByDocumentValueIn = (groupedDocuments) => {
      var result = {};
      Object?.entries(groupedDocuments)?.map(([key, value]) => {
         result[key] = [];
         value?.map((document, index) => {
            const { formType, documentId } = document;
            if (formType != 1) {
               result[key].push({
                  unikey: index,
                  isExpand: false,
                  ...document
               });
            } else {
               const isInclude = !!result[key]?.find((res) => res.documentId === documentId);
               if (isInclude) {
                  const index = result[key].findIndex((res) => res.documentId === documentId);
                  result[key][index].children.push(document);
               } else {
                  result[key].push({
                     unikey: index,
                     isExpand: true,
                     documentId: documentId,
                     children: [document]
                  });
               }
            }
         });
      });
      return result;
   };
   const getDocumentsHistory = async () => {
      setIsLoading(true);
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
            setIsLoading(false);
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

         {/* <Modal
            width={'21cm'}
            title="Маягт харах"
            open={isOpenModalView}
            onCancel={() => setIsOpenModalView(false)}
            bodyStyle={{
               width: '19cm',
               margin: 'auto'
            }}
         >
            {selectedDocuments.length > 1 ? (
               <ReactToPrint
                  trigger={() => {
                     return <Button type="primary">Хэвлэх</Button>;
                  }}
                  content={() => currentRef.current}
               />
            ) : null}
            <div ref={currentRef} className="new-form">
               {selectedDocuments?.map((document, index) => {
                  return (
                     <div key={index}>
                        {selectedDocuments.length === 1 ? (
                           <ReactToPrint
                              trigger={() => {
                                 return <Button type="primary">Хэвлэх</Button>;
                              }}
                              content={() => elementsRef.current[index]}
                           />
                        ) : null}
                        <div
                           key={index}
                           ref={(ref) => {
                              elementsRef.current[index] = ref;
                           }}
                        >
                           <ReturnById
                              type={usageType}
                              id={document.documentId}
                              appointmentId={incomeEmrData.inpatientRequestId || incomeEmrData.appointmentId}
                              data={{
                                 formData: document.isExpand ? document.children?.map((dD) => dD.data) : document.data,
                                 patientData: {}
                              }}
                              hospitalName={'hospitalName'}
                           />
                        </div>
                     </div>
                  );
               })}
            </div>
         </Modal> */}
      </div>
   );
};
export default DocumentHistory;
