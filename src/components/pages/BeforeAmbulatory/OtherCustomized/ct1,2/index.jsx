import React from 'react';

import Attachment2 from './attachment2';
import Attachment13 from './attachment13';

const CT1and2Index = ({ document }) => {
   if (document.value === 87) return <Attachment2 document={document} />;
   else if (document.value === 91) return <Attachment13 document={document} />;
};
export default CT1and2Index;
