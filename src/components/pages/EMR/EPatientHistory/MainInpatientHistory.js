import { Badge, Modal, Table, Tabs } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentDepId } from '../../../../features/authReducer';
import { openNofi } from '../../../common';
//services
import DocumentsFormPatientService from '../../../../services/organization/document';
import OrganizationDocumentRoleServices from '../../../../services/organization/documentRole';
//
import Customized from '../../BeforeAmbulatory/Customized/Index';
//
import ArrowIcon from '../../EMR/NewEmrSupport/document/arrow.svg';
import DocumentDraft from './DocumentDraft';
import EmrContext from '../../../../features/EmrContext';
import { selectCurrentEmrData } from '../../../../features/emrReducer';

const MonitorType = {
   List: 'list',
   Document: 'document'
};

function MainInpatientHistory() {
   const AppIds = useSelector(selectCurrentAppId);
   const DepIds = useSelector(selectCurrentDepId);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const { countOfDocument, countOfDraft, setDocumentCount, draftedDocuments, setIsReloadDocumentHistory } =
      useContext(EmrContext);
   const [isLoading, setIsLoading] = useState(false);
   const [currentMonitor, setCurrentMonitor] = useState(MonitorType.List);
   const [selectedDocument, setSelectedDocument] = useState();
   const [documents, setDocuments] = useState([]);
   const [tabActiveKey, setTabActiveKey] = useState(1);

   const getDocuments = async () => {
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: DepIds,
            usageType: 'IN',
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
               <>
                  <p>${document.docName} маягт Ноорог дотор байнa</p>
                  <p>Ноороглуу шилжих эсэх</p>
               </>
            ),
            cancelText: 'Үгүй',
            okText: 'Шилжих',
            onOk: () => {
               setTabActiveKey(2);
            }
         });
      } else {
         setIsLoading(true);
         await DocumentsFormPatientService.getByDocument(incomeEmrData.patientId, {
            type: 'FORM',
            usageType: 'IN',
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
                     content: `Та ${document.docName} маягт бөглөсөн байна`
                  });
               } else {
                  Modal.confirm({
                     content: `Та ${document.docName} маягт бөглөх гэж байна итгэлттэй байна уу`,
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
            <Tabs
               type="card"
               activeKey={tabActiveKey}
               onChange={(key) => setTabActiveKey(key)}
               items={[
                  {
                     key: 1,
                     label: (
                        <div className="flex flex-row gap-2 items-end">
                           <p>Маягтууд</p>
                           <Badge showZero count={countOfDocument || 0} color="#2D8CFF" />
                        </div>
                     ),
                     children: (
                        <Table
                           rowKey="value"
                           loading={isLoading}
                           columns={[
                              {
                                 title: '№',
                                 render: (_, _record, index) => index + 1,
                                 width: 40
                              },
                              {
                                 title: 'Нэр',
                                 dataIndex: 'docName'
                              },
                              {
                                 title: 'Дугаар',
                                 dataIndex: 'label'
                              },
                              {
                                 title: ' ',
                                 render: (_, row) => (
                                    <div className="hover: cursor-pointer" onClick={() => middleware(row)}>
                                       <img src={ArrowIcon} alt="ArrowIcon" />
                                    </div>
                                 )
                              }
                           ]}
                           dataSource={documents}
                           pagination={false}
                        />
                     )
                  },
                  {
                     key: 2,
                     forceRender: true,
                     label: (
                        <div className="flex flex-row gap-2 items-end">
                           <p>Ноорог</p>
                           <Badge showZero count={countOfDraft || 0} color="#2D8CFF" />
                        </div>
                     ),
                     children: <DocumentDraft usageType="IN" />
                  }
               ]}
            />
         ) : (
            <div className="flex flex-col gap-1">
               <p className="text-center font-semibold">{selectedDocument?.docName}</p>
               <Customized
                  propsUsageType="IN"
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
