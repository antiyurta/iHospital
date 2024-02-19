//Амбулаторийн үзлэгийн өмнөх жагсаалтын доор байрлах TAB ууд
import React, { useEffect, useMemo, useState } from 'react';
import OtherCustomized from './OtherCustomized/Index';

import OrganizationDocumentRoleServices from '../../../services/organization/documentRole';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentDepId } from '../../../features/authReducer';
import { openNofi } from '../../comman';

export default function BeforeAmbulatoryTabs({ reasonComming }) {
   const AppIds = useSelector(selectCurrentAppId);
   const DepIds = useSelector(selectCurrentDepId);
   const [documents, setDocuments] = useState([]);
   const [activeKey, setActiveKey] = useState(Number);
   const [selectedDocument, setSelectedDocument] = useState(Number);

   const getDocuments = async () => {
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: DepIds,
            usageType: 'OUT',
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
      if (activeKey > 0) {
         return <OtherCustomized document={selectedDocument} />;
      }
      return;
   }, [activeKey]);

   useEffect(() => {
      console.log('reasonComming', reasonComming);
      if (reasonComming) {
         setDocuments([
            {
               docName: 'Яаралтай үнэлэх',
               formId: null,
               formType: 1,
               label: 'CT-1,2 Хавсралт 12',
               value: 90
            }
         ]);
      } else {
         getDocuments();
      }
   }, [reasonComming]);

   return (
      <div className="ambo-enr">
         <div className="ambo-enr-list">
            {documents?.map((item, index) => (
               <button
                  onClick={() => {
                     setActiveKey(index + 1);
                     setSelectedDocument(item);
                  }}
                  className={activeKey === index + 1 ? 'active' : ''}
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
