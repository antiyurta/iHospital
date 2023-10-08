import React from 'react';
import { TD, TH, TR, Table, TableHeader } from '@ag-media/react-pdf-table';
import { BlobProvider, Canvas, Document, Page } from '@react-pdf/renderer';

function Demo() {
   return (
      <BlobProvider
         document={
            <Document>
               <Page>
                  <Table>
                     <TR>
                        <TD children={<div>1</div>}>2</TD>
                     </TR>
                  </Table>
                  <Canvas
                     style={{
                        top: -10,
                        position: 'absolute'
                     }}
                     paint={
                        (painterObject) =>
                           painterObject
                              .save()
                              .moveTo(100, 100) //move to position 100,100
                              .lineTo(300, 100) //draw a line till 300, 100
                              .lineTo(300, 300) //draw another line till 300,300
                              .fill('red') //when the diagram is drawn, set the background color to pink
                     }
                  />
               </Page>
            </Document>
         }
      >
         {({ url }) => (
            <a className="button" href={url} target="_blank" rel="noopener noreferrer">
               Open in New Tab
            </a>
         )}
      </BlobProvider>
   );
}
export default Demo;
