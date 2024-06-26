import React, { useContext, useEffect, useState } from 'react';
import { Badge, Modal, Table, Tabs } from 'antd';
import { useSelector } from 'react-redux';
//common
import { openNofi } from '@Comman/common';
//context
import EmrContext from '@Features/EmrContext';
//redux
import { selectCurrentEmrData, selectCurrentHicsSeal } from '@Features/emrReducer';
import { selectCurrentAppId, selectCurrentDepId } from '@Features/authReducer';
//api
import DocumentRoleApi from '@ApiServices/organization/documentRole';
import DocumentFormPatientApi from '@ApiServices/organization/document';
//comp
import DocumentDraft from './DocumentDraft';
import Customized from '@Pages/BeforeAmbulatory/Customized/Index';
//
import ArrowIcon from '../../EMR/NewEmrSupport/document/arrow.svg';
const MonitorType = {
   List: 'list',
   Document: 'document'
};

function MainInpatientHistory({ newUsageType }) {
   const AppIds = useSelector(selectCurrentAppId);
   const DepIds = useSelector(selectCurrentDepId);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const { countOfDocument, countOfDraft, setDocumentCount, draftedDocuments, setIsReloadDocumentHistory } =
      useContext(EmrContext);
   const [isLoading, setIsLoading] = useState(false);
   const [currentMonitor, setCurrentMonitor] = useState(MonitorType.List);
   const [selectedDocument, setSelectedDocument] = useState();
   const [documents, setDocuments] = useState([]);
   const [tabActiveKey, setTabActiveKey] = useState('1');

   const OurDocuments = () => (
      <div
         style={{
            height: 'calc(100vh - 365px)',
            overflow: 'auto',
            paddingRight: 12
         }}
      >
         <Table
            rowKey="value"
            bordered
            loading={isLoading}
            columns={[
               {
                  title: '№',
                  render: (_, _record, index) => index + 1,
                  width: 40
               },
               {
                  title: 'Нэр',
                  dataIndex: 'docName',
                  render: (label, record, index) => <p className="text-black">{label}</p>
               },
               {
                  title: 'Дугаар',
                  dataIndex: 'label',
                  render: (label) => <p className="text-black">{label}</p>
               },
               {
                  title: ' ',
                  width: 50,
                  render: (_, row) => (
                     <img
                        className="hover: cursor-pointer"
                        onClick={() => {
                           middleware(row);
                        }}
                        src={ArrowIcon}
                        alt="ArrowIcon"
                     />
                  )
               }
            ]}
            dataSource={documents}
            pagination={false}
         />
      </div>
   );
   const [tabItems, setTabItems] = useState([
      {
         key: '1',
         label: (
            <div className="flex flex-row gap-2 items-end">
               <p>Маягтууд</p>
               <Badge showZero count={countOfDocument || 0} color="#2D8CFF" />
            </div>
         ),
         children: <OurDocuments />
      },
      {
         key: '2',
         forceRender: true,
         label: (
            <div className="flex flex-row gap-2 items-end">
               <p>Ноорог</p>
               <Badge showZero count={countOfDraft || 0} color="#2D8CFF" />
            </div>
         ),
         children: <DocumentDraft usageType={newUsageType} />
      }
   ]);

   const getDocuments = async () => {
      await DocumentRoleApi.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: DepIds,
            usageType: newUsageType,
            documentType: 0
         }
      }).then(({ data: { response } }) => {
         if (response?.length === 0) {
            openNofi('info', 'Анхааруулга', 'Таньд маягт алга');
         } else {
            var data = [];
            response?.map((item) =>
               item?.documents?.map((document) => {
                  data.push(document);
               })
            );
            const sortedArray = data.slice().sort((a, b) => a.value - b.value);
            setDocumentCount(sortedArray?.length);
            setDocuments(sortedArray);
         }
      });
   };

   const middleware = async (document) => {
      const isDrafted = draftedDocuments?.some((dD) => dD.documentId === document.value) || false;
      if (isDrafted) {
         Modal.info({
            content: (
               <p>
                  <span className="font-bold">{document.docName}</span>
                  <br />
                  маягт Ноорог дотор байнa ноороглуу шилжих эсэх
               </p>
            ),
            cancelText: 'Үгүй',
            okText: 'Шилжих',
            onOk: () => {
               setTabActiveKey(2);
            }
         });
      } else {
         setIsLoading(true);
         await DocumentFormPatientApi.getByDocument(incomeEmrData.patientId, {
            type: 'FORM',
            usageType: newUsageType,
            saveType: 'Save'
         }).then((response) => {
            if (response.status === 200) {
               setIsLoading(false);
               var state = false;
               const data = response.data?.response?.response;
               const currentDocument = data?.find(
                  (item) =>
                     (item.documentId === document.value && item.appointmentId === incomeEmrData.inpatientRequestId) ||
                     (item.documentId === document.value && item.appointmentId === incomeEmrData.appointmentId)
               );
               if (currentDocument) {
                  if (currentDocument.formType === 1) {
                     state = false;
                  } else {
                     state = true;
                  }
               }
               if (state) {
                  Modal.info({
                     content: (
                        <p>
                           Та <span className="font-bold">{document.docName}</span> маягт бөглөсөн байна
                        </p>
                     )
                  });
               } else {
                  Modal.confirm({
                     content: (
                        <p>
                           Та <span className="font-bold">{document.docName}</span> маягт бөглөх гэж байна! Итгэлтэй
                           байна уу?
                        </p>
                     ),
                     cancelText: 'Үгүй',
                     okText: 'Тийм',
                     onOk: () => {
                        setCurrentMonitor(MonitorType.Document);
                        setSelectedDocument(document);
                     }
                  });
               }
            }
         });
      }
   };

   useEffect(() => {
      getDocuments();
   }, []);
   return (
      <>
         {currentMonitor === MonitorType.List ? (
            <Tabs type="card" activeKey={tabActiveKey} onChange={(key) => setTabActiveKey(key)} items={tabItems} />
         ) : (
            <div className="flex flex-col gap-1">
               <p className="text-center font-semibold">{selectedDocument?.docName}</p>
               <Customized
                  propsUsageType={newUsageType}
                  isEdit={false}
                  editId={null}
                  document={selectedDocument}
                  documentValue={selectedDocument.value}
                  documentType={0}
                  onOk={(state) => {
                     if (!state) {
                        setCurrentMonitor(MonitorType.List);
                        setIsReloadDocumentHistory(true);
                     }
                  }}
                  isBackButton={true}
                  handleBackButton={(state) => {
                     if (state) {
                        setCurrentMonitor(MonitorType.List);
                     }
                  }}
               />
            </div>
         )}
      </>
   );
}
export default MainInpatientHistory;
