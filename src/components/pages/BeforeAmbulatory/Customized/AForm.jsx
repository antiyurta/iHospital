import React from 'react';
const AForm = ({ children }) => {
   return (
      <div className="document-form">
         <div className="form-left" />
         <div className="form-inputs">{children}</div>
      </div>
   );
};
export default AForm;
