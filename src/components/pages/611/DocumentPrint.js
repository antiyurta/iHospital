import React, { useEffect, useRef, useState } from 'react';
import { Button, Divider, Modal, Table } from 'antd';

import DocumentsFormPatientSerice from '../../../services/organization/document';
import PmsPatientServices from '../../../services/pms/patient';
import { ReturnById, ReturnByIdToCode } from './Document/Index';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalName } from '../../../features/authReducer';
import { useReactToPrint } from 'react-to-print';
import moment from 'moment';

import Demo from './demo';

function DocumentPrint(props) {
   const { usageType, patientId } = props;
   const printRef = useRef();
   const hospitalName = useSelector(selectCurrentHospitalName);
   const [isOpenHistory, setIsOpenHistory] = useState(false);
   const [result, setResult] = useState({});
   const [selectedDocument, setSelectedDocument] = useState();
   const [patientData, setPatientData] = useState([]);
   const getDocumentsHistory = async () => {
      await DocumentsFormPatientSerice.getByDocument(patientId, {
         usageType: usageType
      }).then((response) => {
         if (response.status === 200) {
            const data = response.data.response.response;
            const result = data.reduce(function (r, a) {
               r[a.usageType] = r[a.usageType] || [];
               r[a.usageType].push(a);
               return r;
            }, Object.create(null));
            const OutDocuments = result['OUT'];
            console.log(OutDocuments);
            const groupByCategory = Object.groupBy(OutDocuments, (product) => {
               return product.documentId;
            });
            console.log('=========>', groupByCategory);
            setResult(result);
         }
      });
   };
   const getPatientInfo = async () => {
      await PmsPatientServices.getById(patientId).then((response) => {
         setPatientData(response.data.response);
      });
   };
   const handlePrint = useReactToPrint({
      // onBeforeGetContent: () => setPrintLoading(true),
      // onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });
   useEffect(() => {
      getPatientInfo();
   }, [selectedDocument]);
   useEffect(() => {
      isOpenHistory && getDocumentsHistory();
   }, [isOpenHistory]);
   //
   const MyDoc = () => (
      <Document>
         <Page size="A4">
            <View>
               <table
                  style={{
                     border: '1px solid black'
                  }}
               >
                  <thead>
                     <tr>
                        <th>asdas</th>
                     </tr>
                  </thead>
               </table>
            </View>
         </Page>
      </Document>
   );
   //
   return (
      <>
         <Button type="primary" onClick={() => setIsOpenHistory(true)}>
            Өвчний түүх
         </Button>
         <Modal title="Өвчний түүх" open={isOpenHistory} onCancel={() => setIsOpenHistory(false)} width={'70%'}>
            <div className="flex flex-wrap">
               <div
                  className="sm:w-full md:w-1/4 lg:w-1/4"
                  style={{
                     borderRight: '1px solid #f0f0f0'
                  }}
               >
                  <div className="px-2">
                     <Divider>Амбулатори</Divider>
                     <Table
                        rowKey={'_id'}
                        bordered
                        scroll={{
                           y: 200
                        }}
                        rowClassName="hover: cursor-pointer"
                        pagination={false}
                        dataSource={result?.['OUT']}
                        onRow={(record, rowIndex) => {
                           return {
                              onDoubleClick: (event) => {
                                 setSelectedDocument(record);
                              }
                           };
                        }}
                        columns={[
                           {
                              title: 'Нэр',
                              dataIndex: 'documentId',
                              render: (text) => {
                                 return <span className="whitespace-pre-wrap">{ReturnByIdToCode(text)}</span>;
                              }
                           },
                           {
                              title: 'Огноо',
                              dataIndex: 'createdAt',
                              render: (text) => {
                                 return moment(text).format('YYYY/MM/DD HH:mm');
                              }
                           }
                        ]}
                     />
                     <Divider>Хэвтэн</Divider>
                     <Table
                        rowClassName="hover: cursor-pointer"
                        pagination={false}
                        dataSource={result?.['IN']}
                        onRow={(record, rowIndex) => {
                           return {
                              onDoubleClick: (event) => {
                                 setSelectedDocument(record);
                              }
                           };
                        }}
                        columns={[
                           {
                              title: 'Нэр',
                              dataIndex: 'documentId',
                              render: (text) => {
                                 return ReturnByIdToCode(text);
                              }
                           },
                           {
                              title: 'Огноо',
                              dataIndex: 'createdAt',
                              render: (text) => {
                                 return moment(text).format('YYYY/MM/DD HH:mm');
                              }
                           }
                        ]}
                     />
                  </div>
               </div>
               <div className="sm:w-full md:w-3/4 lg:w-3/4 bg-gray-50">
                  {selectedDocument && (
                     <div className="flex flex-column gap-3 p-3">
                        <div>
                           <Button onClick={() => handlePrint()} type="primary">
                              Хэвлэх
                           </Button>
                           <Demo />
                        </div>
                        <div className="rounded bg-white p-3">
                           <div ref={printRef}>
                              <ReturnById
                                 type={usageType}
                                 id={selectedDocument.documentId}
                                 appointmentId={selectedDocument.appointmentId}
                                 data={{
                                    formData: { ...selectedDocument.data, createdAt: selectedDocument.createdAt },
                                    patientData: patientData
                                 }}
                                 hospitalName={hospitalName}
                              />
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </Modal>
      </>
   );
}
export default DocumentPrint;
