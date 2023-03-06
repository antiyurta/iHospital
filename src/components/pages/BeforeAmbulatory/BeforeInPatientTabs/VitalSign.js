import React from 'react';
import EarlyWarning from '../EarlyWarning';

function VitalSign({ PatientId, ListId, PatientData }) {
   return (
      <EarlyWarning
         PatientId={PatientId}
         UsageType={'IN'}
         ListId={ListId}
         patientData={PatientData}
      />
   );
}
export default VitalSign;
