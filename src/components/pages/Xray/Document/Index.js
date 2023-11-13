import { useSelector } from 'react-redux';
import { selectCurrentHospitalId } from '../../../../features/authReducer';
import { useEffect } from 'react';

// uni med
import * as universalMed from './universalMed/index';

function ReturnAll(hospitalId) {
   if (hospitalId === 1) {
      return universalMed.ReturnAll();
   }
   return;
}
function ReturnByIdToName(hospitalId, docId) {
   if (hospitalId === 1) {
      return universalMed.ReturnByIdToName(docId);
   }
   return;
}
function ReturnById(hospitalId, document, patient) {
   if (hospitalId === 1) {
      return universalMed.ReturnById(document, patient);
   }
   return;
}

export { ReturnAll, ReturnByIdToName, ReturnById };
