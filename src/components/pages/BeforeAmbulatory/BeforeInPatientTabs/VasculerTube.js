import React from 'react';
import { Tabs } from 'antd';
import Index from './VasculerTube/Index';

function VasculerTube({ PatientData, ListId }) {
   return (
      <Tabs
         type="card"
         items={[
            {
               label: 'Уян зүү',
               key: 0,
               children: <Index type={0} PatientData={PatientData} ListId={ListId} />
            },
            {
               label: 'Төвийн веннийн гуурс',
               key: 1,
               children: <Index type={1} PatientData={PatientData} ListId={ListId} />
            }
         ]}
      />
   );
}
export default VasculerTube;
