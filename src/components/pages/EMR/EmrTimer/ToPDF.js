import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DoctorNote from './DoctorNote.jsx';
//
import XrayNote from './XrayNote.jsx';

import DocumentApi from '@ApiServices/organization/document';
import LocalFileApi from '@ApiServices/file/local-file/local-file.api';
//emchin uzleg pdf hiih
export const DoctorNoteToPDF = async (patient, hospitalName, structure, note) => {
   const element = React.createElement(DoctorNote, { patient, hospitalName, structure, note });
   const html = ReactDOMServer.renderToString(element);
   return await DocumentApi.generatePDF({
      pages: [
         {
            body: `<!DOCTYPE html>
                     <html>
                     <head>
                       <style>
                  /* paragraph style */
                  .document-paragraph {
                     font-size: 12pt;
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
                     display: block;
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
                        ${html}
                     </body>
                     </html>
                     `,
            format: 'a4',
            landscape: false
         }
      ]
   }).then(async ({ data: { response, success } }) => {
      console.log('response', response);
      console.log('success', success);
      if (success) {
         return response.fileName;
      }
      return null;
   });
};
//xray dugnelt
export const XrayNoteToPDF = async (patient, hospitalName, structure, note) => {
   const element = React.createElement(XrayNote, { patient, hospitalName, structure, note });
   const html = ReactDOMServer.renderToString(element);
   return await DocumentApi.generatePDF({
      pages: [
         {
            body: `<!DOCTYPE html>
                     <html>
                     <head>
                       <style>
                  /* paragraph style */
                  .document-paragraph {
                     font-size: 12pt;
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
                     display: block;
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
                        ${html}
                     </body>
                     </html>
                     `,
            format: 'a4',
            landscape: false
         }
      ]
   }).then(async ({ data: { response, success } }) => {
      console.log('response', response);
      console.log('success', success);
      if (success) {
         return response.fileName;
      }
      return null;
   });
};
