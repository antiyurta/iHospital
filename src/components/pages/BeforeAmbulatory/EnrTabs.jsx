import React, { useContext, useEffect, useMemo, useState } from 'react';
//slider
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
//comp
import Cardex from './BeforeInPatientTabs/Cardex';
import Acting from './BeforeInPatientTabs/Acting';
import OtherCustomized from './OtherCustomized/Index';
import MedicineRequests from './BeforeInPatientTabs/MedicineRequests';
//context
import EmrContext from '@Features/EmrContext';
//redux
import { useSelector } from 'react-redux';
import { selectCurrentAppId } from '@Features/authReducer';
//common
import { openNofi } from '@Comman/common';
//api
import DocumentRoleApi from '@ApiServices/organization/documentRole';

const EnrTabs = ({ incomeENRData }) => {
   const { setDocumentView } = useContext(EmrContext);
   const [activeKey, setActiveKey] = useState(0);
   const [documents, setDocuments] = useState([]);
   const AppIds = useSelector(selectCurrentAppId);
   const [selectedDocument, setSelectedDocument] = useState(Number);

   const getDocuments = async () => {
      await DocumentRoleApi.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: [incomeENRData.departmentId],
            usageType: incomeENRData.usageType,
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
         return (
            <OtherCustomized
               document={selectedDocument}
               extraData={{
                  appointmentType: incomeENRData.type,
                  reasonComming: incomeENRData.reasonComming
               }}
            />
         );
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
            <Splide
               style={{
                  width: '100%'
               }}
               options={{
                  pagination: false,
                  autoWidth: true,
                  autoHeight: true,
                  gap: 10,
                  padding: 28
               }}
            >
               {documents?.map((item, index) => (
                  <SplideSlide key={index}>
                     <button
                        onClick={() => {
                           setActiveKey(index + 3);
                           setDocumentView(false, {}, 'one');
                           setSelectedDocument(item);
                        }}
                        className={activeKey === index + 3 ? 'active' : ''}
                        key={index}
                     >
                        {item.docName}
                     </button>
                  </SplideSlide>
               ))}
            </Splide>
         </div>
         {Render}
      </div>
   );
};
export default EnrTabs;
