import { Table } from 'react-bootstrap';
import Index from '../ClinicalDiagnosis/Index';
import React from 'react';
function Page3() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document mb-0">
               <thead>
                  <tr>
                     <th className="text-center">ЭМЧЛҮҮЛЭГЧИЙН АНАМНЕЗ</th>
                  </tr>
                  <tr>
                     <td>
                        <p>
                           Өвчин эхэлсэн хугацаа: ____ он ____ сар _____ өдөр
                        </p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Нүдний эмчилгээ хийлгэж байсан эсэх:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <p>Нүдний мэс засал хийлгэж байсан эсэх:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr className="border-b-0">
                     <td>
                        <p>Удамшлын анамнез:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
               </thead>
            </Table>
            <Index />
         </div>
      </div>
   );
}
export default Page3;
