import React from 'react';

import Attachment2 from './attachment2';
import Attachment11 from './attachment11';
import Attachment12 from './attachment12';
import Attachment13 from './attachment13';
import Attachment14 from './attachment14';

export const CT1and2Index = ({ document }) => {
   if (document.value === 87) return <Attachment2 document={document} />;
   else if (document.value === 89) return <Attachment11 document={document} />;
   else if (document.value === 90) return <Attachment12 document={document} />;
   else if (document.value === 91) return <Attachment13 document={document} />;
   else if (document.value === 96) return <Attachment14 document={document} />;
};
