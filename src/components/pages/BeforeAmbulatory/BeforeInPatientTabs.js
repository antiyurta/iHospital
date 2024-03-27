import React, { useContext, useEffect, useMemo, useState } from 'react';
import BST from './BeforeInPatientTabs/BST';
import Cardex from './BeforeInPatientTabs/Cardex';
import MedicineRequests from './BeforeInPatientTabs/MedicineRequests';
import Acting from './BeforeInPatientTabs/Acting';
import NursingLog from './BeforeInPatientTabs/NursingLog';
import { openNofi } from '../../common';
import { useSelector } from 'react-redux';
import { selectCurrentAppId } from '../../../features/authReducer';

import OtherCustomized from './OtherCustomized/Index';

///
import OrganizationDocumentRoleServices from '../../../services/organization/documentRole';
import EmrContext from '../../../features/EmrContext';
///
function BeforeInPatientTabs({ departmentId }) {
   const { setDocumentView } = useContext(EmrContext);
   const AppIds = useSelector(selectCurrentAppId);
   const [activeKey, setActiveKey] = useState(0);
   const [documents, setDocuments] = useState([]);
   const [selectedDocument, setSelectedDocument] = useState(Number);
   const getDocuments = async () => {
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: [departmentId],
            usageType: 'IN',
            documentType: 0
         }
      })
         .then(({ data: { response } }) => {
            if (response?.length === 0) {
               openNofi('info', 'Анхааруулга', 'Таньд маягт алга');
            } else {
               var data = [];
               response?.map((item) =>
                  item?.documents?.map((document) => {
                     data.push(document);
                  })
               );
               setDocuments(data);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const Render = useMemo(() => {
      if (activeKey === 0) {
         return <Cardex />;
      } else if (activeKey === 1) {
         return <MedicineRequests />;
      } else if (activeKey === 2) {
         return <Acting />;
      } else if (activeKey > 2) {
         return <OtherCustomized document={selectedDocument} />;
      }
      return;
   }, [activeKey]);

   useEffect(() => {
      getDocuments();
   }, []);
   return (
      <div className="ambo-enr">
         <div className="ambo-enr-list">
            <button onClick={() => setActiveKey(0)} className={activeKey === 0 ? 'active' : ''}>
               Cardex
            </button>
            <button onClick={() => setActiveKey(1)} className={activeKey === 1 ? 'active' : ''}>
               Захиалга
            </button>
            <button onClick={() => setActiveKey(2)} className={activeKey === 2 ? 'active' : ''}>
               Acting
            </button>
            <div className="line" />
            {documents?.map((item, index) => (
               <button
                  onClick={() => {
                     setActiveKey(index + 3);

                     console.log(item);
                     setDocumentView(false, {}, 'one');
                     setSelectedDocument(item);
                  }}
                  className={activeKey === index + 3 ? 'active' : ''}
                  key={index}
               >
                  {item.docName}
               </button>
            ))}
         </div>
         {Render}
      </div>
   );
}
export default BeforeInPatientTabs;
