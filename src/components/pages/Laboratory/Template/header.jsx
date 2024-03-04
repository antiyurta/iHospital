import React from 'react';
const Header = ({ hospital, patientData }) => {
   return (
      <div className="lab-header">
         <div className="flex flex-row gap-3">
            <div className="min-w-[200px] bg-red-400">ICON</div>
            <div className="flex flex-col gap-3 w-full">
               <div className="flex flex-col items-end">
                  <p>ЭМСайдын 2019 оны 12 сарын 30-ны</p>
                  <p>өдрийн A/611 тоот тушаалаар батлав</p>
               </div>
               <p className="pl-8 text-2xl text-cyan-500">{hospital?.name}</p>
            </div>
         </div>
         <div className="patient">
            <div>1</div>
         </div>
      </div>
   );
};
export default Header;
