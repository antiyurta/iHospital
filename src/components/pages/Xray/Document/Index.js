// uni med
import React from 'react';
import * as universalMed from './universalMed/index';
import * as enerehui from './enerehui/index';
const UniversalmedReturnById = universalMed.ReturnById;
const EnerehuiReturnById = enerehui.ReturnById;

function ReturnAll(hospitalId) {
   if (hospitalId === 1) {
      return universalMed.ReturnAll();
   } else if (hospitalId === 2) {
      return enerehui.ReturnAll();
   }
   return;
}
function ReturnByIdToName(hospitalId, docId) {
   if (hospitalId === 1) {
      return universalMed.ReturnByIdToName(docId);
   } else if (hospitalId === 2) {
      return enerehui.ReturnByIdToName(docId);
   }
   return;
}
function ReturnById(props) {
   const { serviceName, hospitalId, document, patient, body } = props;
   if (hospitalId === 1) {
      return <UniversalmedReturnById document={document} patient={patient} />;
   } else if (hospitalId === 2) {
      return <EnerehuiReturnById serviceName={serviceName} document={document} patient={patient} body={body} />;
   }
   return;
}

export { ReturnAll, ReturnByIdToName, ReturnById };
