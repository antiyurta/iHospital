import React from 'react';

import * as universalMed from './universalMed/index';
// import * as enerehui from './enerehui/index';
const UniversalmedReturnById = universalMed.ReturnById;
// const EnerehuiReturnById = enerehui.ReturnById;

function ReturnById({ hospitalId, body }) {
   if (hospitalId === 1) {
      return <UniversalmedReturnById body={body} />;
   } else if (hospitalId === 2) {
      // return <EnerehuiReturnById serviceName={serviceName} document={document} patient={patient} body={body} />;
   }
   return;
}
export { ReturnById };
