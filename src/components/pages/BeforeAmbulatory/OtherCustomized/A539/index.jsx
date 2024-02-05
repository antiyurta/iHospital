import React from 'react';
import Attachment3 from './attachment3';
export const A539Index = ({ document }) => {
   if (document.value === 97) {
      return <Attachment3 document={document} />;
   }
   return <div>...</div>;
};
