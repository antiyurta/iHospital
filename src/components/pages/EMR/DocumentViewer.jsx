import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Button, PageHeader } from 'antd';
import EmrContext from '../../../features/EmrContext';
import { ReturnById } from '../611/Document/Index';
import { FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Each } from '../../../features/Each';
//api
import DApi from '@ApiServices/organization/document';
import documentViewerInjection from './DocumentViewer/injection';

const DocumentViewer = () => {
   const [pdfUrl, setPdfUrl] = useState('');
   const { setDocumentView, documentType, selectedDocument } = useContext(EmrContext);
   const [printLoading, setPrintLoading] = useState(false);
   const currentRef = useRef();

   const htmlToPDF = async () => {
      try {
         // setPrintLoading(true);
         const currentContent = currentRef.current.innerHTML;
         const result = documentViewerInjection(currentContent);
         if (result?.length > 0) {
            const response = await DApi.generatePDF({
               pages: result?.map((rslt) => ({
                  body: `<!DOCTYPE html>
                  <html>
                  <head>
                  <style>
                  /* paragraph style */
                  .document-paragraph {
                     font-size: 10pt;
                  }
                  .bold {
                     font-weight: bold;
                  }
                  .upper {
                     text-transform: uppercase;
                  }
                  .center {
                     text-align: center;
                  }
                  .end {
                     text-align: end;
                  }
                  .start {
                     text-align: flex-start;
                  }
                  .document-box {
                     padding: 0px 6px;
                     border: 1px solid black;
                  }
                  .checkbox {
                     width: 10px;
                     min-width: 10px;
                     height: 10px;
                     border: 1px solid #000;
                     display: inline-block;
                  }
                  .checkbox.checked:after {
                     content: '';
                     display: block;
                     width: 4px;
                     height: 7px;
                     position: relative;
                     top: 0px;
                     left: 2px;
                     border: solid #000;
                     border-width: 0 2px 2px 0;
                     transform: rotate(45deg);
                  }
                  .page {
                     width: 100%;
                  }
                  .subpage {
                     padding: 1cm;
                  }
                  </style>
                  </head>
                  <body>
                     ${rslt.body}
                  </body>
                  </html>
                  `,
                  format: rslt.format,
                  landscape: rslt.landscape
               }))
            });
            if (!response.data.success) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const uint8Array = new Uint8Array(response.data.response.data);
            const blob = new Blob([uint8Array], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            setPdfUrl(url);
            // const newWindow = window.open(url, '_blank');
            setPrintLoading(false);
            // if (newWindow) {
            //    newWindow.focus();
            // } else {
            //    console.error('Failed to open PDF in a new window');
            // }
            // window.URL.revokeObjectURL(url);
         }
      } catch (error) {
         console.error('Error fetching PDF:', error);
         // Handle error as needed
      }
   };
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
               <iframe src={pdfUrl} width="100%" height="600px" title="PDF Viewer"></iframe>
               <div ref={currentRef} className="print-remove-p">
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
                  onClick={() => {
                     htmlToPDF();
                  }}
                  loading={printLoading}
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
