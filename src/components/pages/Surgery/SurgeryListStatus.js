import React from 'react';
import Index from '../BeforeAmbulatory/Lists/Index/Index';

function SurgeryListStatus() {
   return (
      <div className="p-3 w-full h-full bg-[#f5f6f7]">
         <Index type={3} isDoctor={false} isSurgeyBoss={true} />
      </div>
   );
}
export default SurgeryListStatus;
