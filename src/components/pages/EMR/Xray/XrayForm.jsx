import React, { useRef } from 'react';
import { companyLogo } from '@Assets/index';
import { Button } from 'antd';
import { useReactToPrint } from 'react-to-print';
import { RenderNotesDetail } from './NewXray';
import { getGenderInType } from '@Comman/common';
function XrayForm({ printData }) {
   const printRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   return (
      <>
         <div ref={printRef}>
            <div className="m-4">
               <div className="flex flex-wrap">
                  <div className="basis-1/2">
                     <img src={companyLogo} />
                  </div>
               </div>
               <div className="flex flex-row">
                  <div className="basis-1/2 ml-6">
                     <div className="flex">
                        <p className="font-semibold mr-2">Эцэг эхийн нэр:</p>
                        <p className="pr-3">{printData?.patient?.lastName}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">РД:</p>
                        <p className="pr-3">{printData?.patient?.registerNumber}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Хүйс:</p>
                        <p className="pr-3">{getGenderInType(printData?.patient?.genderType)}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Тогтмол хаяг:</p>
                        <p className="pr-3">{printData?.patient?.address}</p>
                     </div>
                  </div>
                  <div className="basis-1/2 ml-6">
                     <div className="flex">
                        <p className="font-semibold mr-2">Нэр:</p>
                        <p className="pr-3">{printData?.patient?.firstName}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Нас:</p>
                        <p className="pr-3">{printData?.patient?.age}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Утас:</p>
                        <p className="pr-3">{printData?.patient?.phoneNo}</p>
                     </div>
                  </div>
               </div>
               <p className="text-center py-10" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                  {printData?.xrayName}
               </p>
               <RenderNotesDetail data={printData.inspectionNote?.conclusion} />
               <RenderNotesDetail data={printData.inspectionNote?.advice} />
               <p className="text-center" style={{ fontSize: '15px', fontWeight: 'bold' }}>
                  Дүгнэлт бичсэн эмч: {printData.employee}
               </p>
            </div>
         </div>
         <Button type="primary" onClick={handlePrint}>
            Хэвлэх
         </Button>
      </>
   );
}
export default XrayForm;
