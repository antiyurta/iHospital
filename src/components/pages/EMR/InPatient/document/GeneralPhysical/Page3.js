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
                     <td>
                        <p>Бүсийн лимфийн булчирхайн байдал:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                     </td>
                  </tr>
                  <tr className="border-b-0">
                     <td>
                        <p>Дүрс оношилгоо:</p>
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
export default Page3;
