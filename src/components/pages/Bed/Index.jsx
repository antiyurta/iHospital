import React from 'react';
import { BedManagementProvider } from '../../../features/BedContext';
import MainBed from './MainBed';
const Index = () => {
   return (
      <BedManagementProvider>
         <MainBed />
      </BedManagementProvider>
   );
};
export default Index;
