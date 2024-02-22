import React, { useContext, useRef, useState } from 'react';
import { Button, PageHeader } from 'antd';
import EmrContext from '../../../features/EmrContext';
import { ReturnById } from '../611/Document/Index';
import { FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Each } from '../../../features/Each';

const DocumentViewer = () => {
   const { setDocumentView, documentType, selectedDocument } = useContext(EmrContext);
   const [printLoading, setPrintLoading] = useState(false);
   const currentRef = useRef();

   const handlePrint = useReactToPrint({
      onBeforeGetContent: () => setPrintLoading(true),
      onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => currentRef.current
   });
   const Body = ({ document }) => (
      <>
         {document?.isExpand ? (
            <div className="new-form print-remove-p">
               <ReturnById
                  type={document.children[0]?.usageType}
                  id={document.documentId}
                  appointmentId={document.children[0]?.appointmentId}
                  data={{
                     formData: document.children
                  }}
               />
            </div>
         ) : (
            <div className="new-form">
               <ReturnById
                  type={document.usageType}
                  id={document.documentId}
                  appointmentId={document.inpatientRequestId || document.appointmentId}
                  data={{
                     formData: document.data,
                     history: document.history,
                     createdAt: document.createdAt
                  }}
               />
            </div>
         )}
      </>
   );
   if (!selectedDocument) {
      return <div>...loading</div>;
   }
   return (
      <PageHeader
         ghost={true}
         onBack={() => {
            setDocumentView(false, {}, 'one');
         }}
         title="Маягт дэлгэрэнгүй"
      >
         <div className="grid grid-cols-5 gap-2">
            <div
               className="col-span-4 overflow-auto"
               style={{
                  maxHeight: 800,
                  background: 'gainsboro',
                  padding: 10
               }}
            >
               <div ref={currentRef}>
                  {documentType === 'one' ? <Body document={selectedDocument} /> : null}
                  {documentType === 'many' ? (
                     <Each of={selectedDocument} render={(document) => <Body document={document} />} />
                  ) : null}
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
