import React from 'react';
const Footer = () => {
   return (
      <div className="lab-footer">
         <div className="flex flex-col gap-1">
            <p className="text-[11pt]">
               <span className="font-bold">{`Санамж: `}</span>
               <span>Энэхүү шинжилгээний хариу зөвхөн тухайн өдрийн сорьцонд хүчинтэй болно.</span>
            </p>
         </div>
         <div className="border border-black" />
         <p className="text-[11pt]">
            <span className="font-bold">{`Хаяг: `}</span>
            <span>
               Улаанбаатар хот, Баянгол дүүрэг, 11 дүгээр хороолол, Л.Энэбишийн өргөн чөлөө 22, Универсал мед эмнэлэг
            </span>
         </p>
         <p className="text-[11pt]">
            <span className="font-bold">{`Утас: `}</span>
            <span>77739999</span>
         </p>
      </div>
   );
};
export default Footer;
