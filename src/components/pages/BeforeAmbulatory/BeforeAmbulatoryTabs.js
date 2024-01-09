//Амбулаторийн үзлэгийн өмнөх жагсаалтын доор байрлах TAB ууд
import React, { useEffect, useMemo, useState } from 'react';
import EarlyWarning from './EarlyWarning';
import OtherCustomized from './OtherCustomized/Index';

import OrganizationDocumentRoleServices from '../../../services/organization/documentRole';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentDepId } from '../../../features/authReducer';
import { openNofi } from '../../comman';

export default function BeforeAmbulatoryTabs({ patientId, patientData, type, structureId, listId, reasonComming }) {
   var items = [
      {
         label: 'Эрт сэрэмжлүүлэх үнэлгээ',
         key: 'item-1',
         children: (
            <EarlyWarning
               PatientId={patientId}
               StructureId={structureId}
               PatientData={patientData}
               ListId={listId}
               UsageType={'OUT'}
            />
         )
      }
      // {
      //   label: "Эмчилгээ",
      //   key: "item-2",
      //   // children: <EarlyWarning PatientId={patientId} listId={listId} />,
      // }
      // {
      //   label: "Өвчтөний түүх",
      //   key: "item-2",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Лаборатори",
      //   key: "item-3",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Тэмдэглэл хөтлөх",
      //   key: "item-4",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Суурь үнэлгээ",
      //   key: "item-5",
      //   children: <EarlyWarning />,
      // },
   ];
   useEffect(() => {
      if (reasonComming) {
         items.push({
            label: 'Яаралтай үнэлэх',
            key: 'EMERGENCY',
            children: <OtherCustomized documentValue={'EMERGENCY'} />
         });
      }
   }, [reasonComming]);

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
      getDocuments();
   }, []);
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
