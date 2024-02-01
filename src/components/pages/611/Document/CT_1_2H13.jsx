import React, { useEffect } from 'react';
const CT_1_2H13 = (props) => {
   const {
      data: { formData, patientData }
   } = props;
   useEffect(() => {
      console.log(formData);
   }, [formData]);
   return <div>1</div>;
};
export default CT_1_2H13;
