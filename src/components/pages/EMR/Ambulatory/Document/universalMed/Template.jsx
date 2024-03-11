import React from 'react';
import universalmedLogo from '../../../../../../assets/logo/universal.png';

const Template = ({ children }) => {
   return (
      <div className="inspection flex flex-col gap-1">
         <div className="inspection-header">
            <img src={universalmedLogo} alt="logo" />
         </div>
         <table>
            <thead>
               <tr>
                  <td>
                     <div className="inspection-header-space"></div>
                  </td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <div className="inspection-page">{children}</div>
                  </td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td>
                     <div className="inspection-footer-space"></div>
                  </td>
               </tr>
            </tfoot>
         </table>
         <div className="inspection-footer"></div>
      </div>
   );
};
export default Template;
