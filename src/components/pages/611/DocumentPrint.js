import React, { useEffect, useRef, useState } from 'react';
import { Button, Divider, Modal, Table } from 'antd';

import DocumentsFormPatientSerice from '../../../services/organization/document';
import PmsPatientServices from '../../../services/pms/patient.api';
import { ReturnById, ReturnByIdToCode } from './Document/Index';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalName } from '../../../features/authReducer';
import ReactToPrint from 'react-to-print';
import moment from 'moment';

function DocumentPrint(props) {
   const { usageType, patientId } = props;
   const elementsRef = useRef([]);
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
            setResult(result);
         }
      });
   };
   const getPatientInfo = async () => {
      await PmsPatientServices.getById(patientId).then((response) => {
         setPatientData(response.data.response);
      });
   };
   useEffect(() => {
      getPatientInfo();
   }, [selectedDocument]);
   useEffect(() => {
      isOpenHistory && getDocumentsHistory();
   }, [isOpenHistory]);

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
                        rowKey={'_id'}
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

               <div
                  style={{
                     height: 800,
                     overflow: 'auto'
                  }}
                  className="sm:w-full md:w-3/4 lg:w-3/4 bg-gray-50"
               >
                  {selectedDocument ? (
                     <>
                        {selectedDocument.data?.map((data, index) => {
                           return (
                              <div key={index} className="flex flex-column gap-3 p-3">
                                 <div
                                    style={{
                                       display: 'flex',
                                       flexDirection: 'row',
                                       gap: 12
                                    }}
                                 >
                                    <ReactToPrint
                                       trigger={() => {
                                          return <Button type="primary">Хэвлэх</Button>;
                                       }}
                                       content={() => elementsRef.current[index]}
                                    />
                                    <p
                                       style={{
                                          fontWeight: 500
                                       }}
                                    >
                                       {moment(data.createdAt).format('YYYY/MM/DD HH:mm')}
                                    </p>
                                 </div>
                                 <div className="rounded bg-white p-3">
                                    <div
                                       ref={(ref) => {
                                          elementsRef.current[index] = ref;
                                       }}
                                    >
                                       <ReturnById
                                          type={usageType}
                                          id={selectedDocument.documentId}
                                          appointmentId={selectedDocument.appointmentId}
                                          data={{
                                             // formData: selectedDocument.data,
                                             formData: data,
                                             patientData: patientData
                                          }}
                                          hospitalName={hospitalName}
                                       />
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </>
                  ) : null}
               </div>
            </div>
         </Modal>
      </>
   );
}
export default DocumentPrint;
