import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
const Body = ({ request }) => {
   console.log(request);

   return (
      <div className="laboratory">
         <Header hospital={request?.examinationResult?.hospital} patientData={request.patient} />
         <Footer />
         <table>
            <thead>
               <tr>
                  <td>
                     <div className="lab-header-space"></div>
                  </td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <div className="lab-page"></div>
                  </td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td>
                     <div className="lab-footer-space"></div>
                  </td>
               </tr>
            </tfoot>
         </table>
      </div>
   );
};
export default Body;
