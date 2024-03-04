// uni med
import React from 'react';
import UniversalMed from './universalMed/index';

function ReturnById({ hospitalId, request }) {
   if (hospitalId === 1) {
      return <UniversalMed request={request} />;
   }
   return;
}

export { ReturnById };
