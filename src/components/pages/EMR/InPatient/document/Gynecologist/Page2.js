import { Table } from 'react-bootstrap';
import Index from '../ClinicalDiagnosis/Index';
import React from 'react';
function Page2() {
   return (
      <div className="page">
         <div className="subpage">
            <Table bordered className="document mb-0">
               <thead>
                  <tr className="border-b-0">
                     <td>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>Тольны үзлэг: PV</p>
                        <p>:</p>
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
export default Page2;
