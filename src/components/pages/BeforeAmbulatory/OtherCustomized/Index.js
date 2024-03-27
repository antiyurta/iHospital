import React from 'react';
import { CT1and2Index } from './ct1,2/index';
import { A539Index } from './A539/index';
import EmergencySorter from './ct/EmergencySorter';
import CallAmbulance from './ct/CallAmbulance';

function Index({ document, extraData }) {
   if (
      document.value === 87 ||
      document.value === 91 ||
      document.value === 89 ||
      document.value === 90 ||
      document.value === 96
   ) {
      return <CT1and2Index document={document} />;
   } else if (document.value === 97) {
      return <A539Index document={document} />;
   } else if (document.value === 110) {
      return <EmergencySorter document={document} />;
   } else if (document.value === 'callEmergency') {
      return <CallAmbulance extraData={extraData} />;
   }
   return <div>...</div>;
}
export default Index;
