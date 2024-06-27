import React from 'react';
import DocumentApi from '@ApiServices/organization/document';
import LocalFileApi from '@ApiServices/file/local-file/local-file.api';
//emchin uzleg pdf hiih
export const DoctorNoteToPDF = async (note) => {
   return await DocumentApi.generatePDF({
      pages: [
         {
            body: `<!DOCTYPE html>
                  <html>
                  <head>
                    <p>asdsad</p>
                  </head>
                  <body>
                     AMARA TEST
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
