import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Template = (props) => {
   const { patient, createdAt, children, serviceName } = props;
   return (
      <div className="font-times exo flex flex-col gap-1">
         <Header patient={patient} createdAt={createdAt} />
         <table>
            <thead>
               <tr>
                  <td>
                     <div className="exo-header-space"></div>
                  </td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <div className="exo-page">
                        <p className="text-center text-base font-bold ">{serviceName.toUpperCase()}</p>
                        {children}
                     </div>
                  </td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td>
                     <div className="exo-footer-space"></div>
                  </td>
               </tr>
            </tfoot>
         </table>
         <Footer />
      </div>
   );
};
export default Template;
