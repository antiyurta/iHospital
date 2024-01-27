import React, { useContext, useRef, useState } from 'react';
import { Button, PageHeader } from 'antd';
import EmrContext from '../../../features/EmrContext';
import { ReturnById } from '../611/Document/Index';
import { FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Each } from '../../../features/Each';
const DocumentViewer = () => {
   const { setDocumentView, selectedDocument } = useContext(EmrContext);
   const [printLoading, setPrintLoading] = useState(false);
   const currentRef = useRef();
   const handlePrint = useReactToPrint({
      onBeforeGetContent: () => setPrintLoading(true),
      onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => currentRef.current
   });
   return (
      <PageHeader
         ghost={true}
         onBack={() => {
            setDocumentView(false, {});
         }}
         title="Маягт дэлгэрэнгүй"
      >
         <div className="grid grid-cols-5 gap-2">
            <div
               className="col-span-4 overflow-auto"
               style={{
                  maxHeight: 800
               }}
            >
               <div className="w-[21cm] m-auto">
                  {selectedDocument?.length > 0 ? (
                     <div ref={currentRef} className="new-form print-remove-p">
                        <Each
                           of={selectedDocument}
                           render={(document, index) => {
                              return (
                                 <ReturnById
                                    key={index}
                                    type={document.usageType}
                                    id={document.documentId}
                                    appointmentId={document.appointmentId}
                                    data={{
                                       formData: document.isExpand
                                          ? document.children?.map((dD) => dD.data)
                                          : document.data,
                                       patientData: {}
                                    }}
                                    hospitalName={'hospitalName'}
                                 />
                              );
                           }}
                        />
                     </div>
                  ) : (
                     <div ref={currentRef} className="new-form">
                        <ReturnById
                           type={selectedDocument.usageType}
                           id={selectedDocument.documentId}
                           appointmentId={selectedDocument.inpatientRequestId || selectedDocument.appointmentId}
                           data={{
                              formData: selectedDocument.data,
                              createdAt: selectedDocument.createdAt,
                              patientData: {}
                           }}
                           hospitalName={'hospitalName'}
                        />
                     </div>
                  )}
               </div>
            </div>
            <div className="col-span-1 bg-white rounded-xl flex flex-col gap-2 p-2">
               <Button loading={printLoading} icon={<PrinterOutlined />} onClick={() => handlePrint()}>
                  Хэвлэх
               </Button>
               <Button
                  disabled
                  icon={
                     <FilePdfOutlined
                        style={{
                           color: 'red'
                        }}
                     />
                  }
               >
                  PDF Татах
               </Button>
            </div>
         </div>
      </PageHeader>
   );
};
export default DocumentViewer;
