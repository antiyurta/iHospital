import { Button, Card } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import BodyConditionSheet from './BeforeInPatientTabs/BodyConditionSheet';
import NursingNote from './BeforeInPatientTabs/NursingNote';
import PainAssessment from './BeforeInPatientTabs/PainAssessment';
import VitalSign from './BeforeInPatientTabs/VitalSign';
import BST from './BeforeInPatientTabs/BST';
import Cardex from './BeforeInPatientTabs/Cardex';
import MedicineRequests from './BeforeInPatientTabs/MedicineRequests';
import Epicriz from './Lists/Epicriz';
import InputOutput from './BeforeInPatientTabs/InputOutput';
import VasculerTube from './BeforeInPatientTabs/VasculerTube';
import Acting from './BeforeInPatientTabs/Acting';
import NursingLog from './BeforeInPatientTabs/NursingLog';
import { openNofi } from '../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentAppId } from '../../../features/authReducer';

import OtherCustomized from './OtherCustomized/Index';

///
import OrganizationDocumentRoleServices from '../../../services/organization/documentRole';
///
function BeforeInPatientTabs({ patientId, listId, patientData, departmentName, departmentId }) {
   const AppIds = useSelector(selectCurrentAppId);
   const [activeKey, setActiveKey] = useState(0);
   const [documents, setDocuments] = useState([]);
   const [pageId, setPageId] = useState(Number);
   const [selectedDocument, setSelectedDocument] = useState(Number);
   const getDocuments = async () => {
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: departmentId,
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
         <div className="flex flex-wrap">
            <div className="w-full pb-1">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  bodyStyle={{
                     padding: 7
                  }}
               >
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(1);
                     }}
                     className={pageId === 1 ? 'button-active m-1' : 'm-1'}
                  >
                     Cardex
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(2);
                     }}
                     className={pageId === 2 ? 'button-active m-1' : 'm-1'}
                  >
                     Захиалга
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(3);
                     }}
                     className={pageId === 3 ? 'button-active m-1' : 'm-1'}
                  >
                     VS
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(4);
                     }}
                     className={pageId === 4 ? 'button-active m-1' : 'm-1'}
                  >
                     I/O
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(5);
                     }}
                     className={pageId === 5 ? 'button-active m-1' : 'm-1'}
                  >
                     BST
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(6);
                     }}
                     className={pageId === 6 ? 'button-active m-1' : 'm-1'}
                  >
                     Өвдөлтийн үнэлгээ
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(7);
                     }}
                     className={pageId === 7 ? 'button-active m-1' : 'm-1'}
                  >
                     Биеийн байдлыг үнэлэх хуудас
                  </Button>
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(8);
                     }}
                     className={pageId === 8 ? 'button-active m-1' : 'm-1'}
                  >
                     Сувилгааны тэмдэглэл
                  </Button>
                  {/* <Button
                  type="primary"
                  onClick={() => {
                     setPageId(9);
                  }}
                  className={pageId === 9 ? 'button-active m-1' : 'm-1'}
               >
                  Гарах үеийн эпикриз
               </Button> */}
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(10);
                     }}
                     className={pageId === 10 ? 'button-active m-1' : 'm-1'}
                  >
                     Судасны гуурстай холбоотой тандалт
                  </Button>
                  {/* <Button
                  type="primary"
                  onClick={() => {
                     setPageId(11);
                  }}
                  className={pageId === 11 ? 'button-active m-1' : 'm-1'}
               >
                  Acting
               </Button> */}
                  <Button
                     type="primary"
                     onClick={() => {
                        setPageId(12);
                     }}
                     className={pageId === 12 ? 'button-active m-1' : 'm-1'}
                  >
                     Nursing Log
                  </Button>
               </Card>
            </div>
            <div className="w-full pt-1">
               {pageId === 4 && <InputOutput PatientId={patientId} ListId={listId} PatientData={patientData} />}
               {pageId === 8 && <NursingNote PatientId={patientId} ListId={listId} PatientData={patientData} />}
               {pageId === 10 && <VasculerTube PatientData={patientData} ListId={listId} />}
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  bodyStyle={{
                     padding: 7
                  }}
               >
                  {pageId === 1 && <Cardex PatientId={patientId} ListId={listId} />}
                  {pageId === 2 && <MedicineRequests PatientId={patientId} ListId={listId} />}
                  {pageId === 3 && <VitalSign PatientId={patientId} ListId={listId} PatientData={patientData} />}
                  {pageId === 5 && <BST PatientId={patientId} ListId={listId} />}
                  {pageId === 6 && <PainAssessment PatientId={patientId} ListId={listId} />}
                  {pageId === 7 && (
                     <BodyConditionSheet PatientId={patientId} ListId={listId} PatientData={patientData} />
                  )}

                  {/* {pageId === 9 && (
                  <Epicriz
                     PatientId={patientId}
                     ListId={listId}
                     PatientData={patientData}
                  />
               )} */}

                  {/* {pageId === 11 && (
                  <Acting
                     PatientData={patientData}
                     ListId={listId}
                     DepartmentId={departmentId}
                  />
               )} */}
                  {pageId === 12 && (
                     <NursingLog PatientData={patientData} ListId={listId} DepartmentId={departmentId} />
                  )}
               </Card>
            </div>
         </div>
      </div>
   );
}
export default BeforeInPatientTabs;
