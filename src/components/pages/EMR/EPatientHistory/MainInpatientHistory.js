import { Badge, Modal, Table, Tabs } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentDepId } from '../../../../features/authReducer';
import { openNofi } from '../../../comman';
//
import Anamnesis from './MainInpatient/Anamnesis';
import ClinicalDiagnoeMain from './MainInpatient/ClinicalDiagnoseMain';
import Epicrisis from './MainInpatient/Epicrisis';
import SentService from '../Insurance/sent-service';
//
//services
import OrganizationDocumentRoleServices from '../../../../services/organization/documentRole';
//
import Customized from '../../BeforeAmbulatory/Customized/Index';
//
import ArrowIcon from '../../EMR/NewEmrSupport/document/arrow.svg';
import DocumentDraft from './DocumentDraft';
import EmrContext from '../../../../features/EmrContext';

const MonitorType = {
   List: 'list',
   Document: 'document'
};

function MainInpatientHistory({ patientId, inpatientRequestId, deparmentId, serviceId }) {
   const AppIds = useSelector(selectCurrentAppId);
   const DepIds = useSelector(selectCurrentDepId);
   const { countOfDocument, countOfDraft, setDocumentCount } = useContext(EmrContext);
   const [currentMonitor, setCurrentMonitor] = useState(MonitorType.List);
   const [selectedDocument, setSelectedDocument] = useState();
   const [documents, setDocuments] = useState([]);
   /** @description insurance connection start => */
   const [isInsuranceModal, setIsInsuranceModal] = useState(false);
   const testItems = [
      {
         key: '1',
         label: 'Эмчлүүлэгчийн аннамез',
         children: <Anamnesis PatientId={patientId} InpatientRequestId={inpatientRequestId} />
      },
      { key: '2', label: 'Ерөнхий үзлэг', children: <div>Ерөнхий үзлэг</div> },
      {
         key: '3',
         label: 'Эмчийн үзлэг',
         children: <div>Ерөнхий үзлэг</div>
      },
      {
         key: '4',
         label: 'КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ',
         children: <div>Ерөнхий үзлэг</div>
      },
      {
         key: '5',
         label: 'КЛИНИКИЙН ОНОШИЙН ҮНДЭСЛЭЛ',
         children: (
            <ClinicalDiagnoeMain PatientId={patientId} InpatientRequestId={inpatientRequestId} ServiceId={serviceId} />
         )
      },
      {
         key: '6',
         label: 'Үзлэгийн тэмдэглэл',
         children: <div>Ерөнхий үзлэг</div>
      },
      {
         key: '7',
         label: 'Гарах үеийн эпекриз',
         children: (
            <Epicrisis PatientId={patientId} InpatientRequestId={inpatientRequestId} InsuranceServiceId={serviceId} />
         )
      }
   ];

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
   useEffect(() => {
      getDocuments();
   }, []);
   return (
      <>
         {currentMonitor === MonitorType.List ? (
            <Tabs
               type="card"
               fo
               items={[
                  {
                     key: 1,
                     label: (
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gap: 8,
                              alignItems: 'flex-end'
                           }}
                        >
                           <p>Маягтууд</p>
                           <Badge showZero count={countOfDocument || 0} color="#2D8CFF" />
                        </div>
                     ),
                     children: (
                        <Table
                           rowKey="value"
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
                                    <div
                                       className="hover: cursor-pointer"
                                       onClick={() => {
                                          setCurrentMonitor(MonitorType.Document);
                                          setSelectedDocument(row);
                                       }}
                                    >
                                       <img src={ArrowIcon} alt="sda" />
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
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gap: 8,
                              alignItems: 'flex-end'
                           }}
                        >
                           <p>Ноорог</p>
                           <Badge showZero count={countOfDraft || 0} color="#2D8CFF" />
                        </div>
                     ),
                     children: <DocumentDraft />
                  }
               ]}
            />
         ) : (
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
                  }
               }}
               isBackButton={true}
               handleBackButton={(state) => {
                  if (state) {
                     setCurrentMonitor(MonitorType.List);
                  }
               }}
            />
         )}
         <Modal
            title="Даатгалын сервисүүд"
            width={1000}
            open={isInsuranceModal}
            onCancel={() => setIsInsuranceModal(false)}
         >
            <SentService />
         </Modal>
      </>
   );
}
export default MainInpatientHistory;
