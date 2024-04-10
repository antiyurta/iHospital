//Амбулаторийн үзлэгийн өмнөх жагсаалтын доор байрлах TAB ууд
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
//comp
import OtherCustomized from './OtherCustomized/Index';
//api
import OrganizationDocumentRoleApi from '@ApiServices/organization/documentRole';
//common
import { openNofi } from '@Comman/common';
//redix
import { selectCurrentAppId } from '@Features/authReducer';
import { selectCurrentEmrData } from '@Features/emrReducer';

export default function BeforeAmbulatoryTabs({ appointmentType, reasonComming }) {
   const AppIds = useSelector(selectCurrentAppId);
   const incomeENRData = useSelector(selectCurrentEmrData);
   const [documents, setDocuments] = useState([]);
   const [activeKey, setActiveKey] = useState(Number);
   const [selectedDocument, setSelectedDocument] = useState(Number);

   const getDocuments = async () => {
      await OrganizationDocumentRoleApi.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: [incomeENRData.departmentId, incomeENRData.cabinetId],
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
               if (reasonComming === 2) {
                  setDocuments([
                     {
                        docName: 'Яаралтай дуудлага',
                        value: 'callEmergency'
                     },
                     ...data
                  ]);
               } else {
                  setDocuments(data);
               }
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const Render = useMemo(() => {
      if (activeKey > 0) {
         return (
            <OtherCustomized
               document={selectedDocument}
               extraData={{
                  appointmentType: appointmentType,
                  reasonComming: reasonComming
               }}
            />
         );
      }
      return;
   }, [activeKey]);
   useEffect(() => {
      getDocuments();
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
