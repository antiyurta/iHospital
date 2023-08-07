import React, { useRef } from 'react';
import { Button } from 'antd';
import { useReactToPrint } from 'react-to-print';
import QRCode from 'react-qr-code';
import moment from 'moment';
import { numberToCurrency, openNofi } from '../../comman';

import PaymentService from '../../../services/payment/payment';

function EbarimtPrint(props) {
   const printRef = useRef();
   const handleBack = async (id) => {
      await PaymentService.patchPayment(id, { isReturn: true }).then((response) => {
         openNofi('success', 'Амжилттай', 'Буцаалт Амжиллтай');
      });
   };
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   return (
      <div className="pt-6">
         <div ref={printRef} style={{ width: '80mm' }}>
            <div>
               <div className="flow-root">
                  <p className="float-right font-normal whitespace-pre-wrap">UNIVERSAL MED HOSPITAL</p>
               </div>
               <div>
                  <p className="text-center pt-2">ТӨЛБӨРИЙН БАРИМТ</p>
                  <p>Картын №:{props?.props?.patient?.cardNumber}</p>
               </div>
               <div className="flow-root">
                  <p className="float-left">Овог:{props?.props?.patient?.lastName}</p>
                  <p className="float-right">Нэр:{props?.props?.patient?.firstName}</p>
               </div>
               <p style={{ fontSize: 17, textAlign: 'center' }}>Жагсаалт</p>
               {props?.props?.invoices?.map((invoice, index) => {
                  return (
                     <div key={index} className="flex flex-wrap">
                        <div className="basis-1/2">
                           <p style={{ fontSize: 12, fontWeight: 'bold' }}>{invoice.name}</p>
                           <p
                              dangerouslySetInnerHTML={{
                                 __html: invoice.description
                              }}
                           ></p>
                        </div>
                        <div className="basis-1/2 text-center">
                           <p className="float-right" style={{ fontSize: 13, fontWeight: 'bold' }}>
                              {numberToCurrency(invoice.amount)}
                           </p>
                        </div>
                     </div>
                  );
               })}
               <p style={{ fontSize: 14, fontWeight: 'bold' }} className="text-end">
                  {/* Нийт үнэ: {numberToCurrency(total)} */}
                  Нийт үнэ: {numberToCurrency(props?.props?.plusAmount)}
               </p>
               <p style={{ fontSize: 14, fontWeight: 'bold' }} className="text-end">
                  Төлөх үнэ: {numberToCurrency(props?.props?.paidAmount)}
               </p>
               <p style={{ fontSize: 14, fontWeight: 'bold' }} className="text-end">
                  Даатгалаас: {numberToCurrency(props?.props?.insuranceAmount)}
               </p>
               <p style={{ fontSize: 14, fontWeight: 'bold' }}>Cугалааны дугаар: {props?.props?.lottery}</p>
               <p style={{ fontSize: 14, fontWeight: 'bold' }}>ДДТД:{props?.props?.billId}</p>
               <div
                  style={{
                     height: 'auto',
                     margin: '0 auto',
                     maxWidth: 150,
                     width: '100%'
                  }}
               >
                  <QRCode
                     style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                     value={props?.props?.qrData ? props?.props?.qrData : 0}
                     viewBox={`0 0 256 256`}
                  />
               </div>
               <p>
                  Захиалсан цаг:
                  {moment(props?.props?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
               </p>
               <p>Ажилтан: {props?.props?.createdEmployeeName} </p>
            </div>
         </div>
         {props?.isBackPayment ? (
            <Button className="w-full bg-red-600 text-white font-bold" onClick={() => handleBack(props?.props?.id)}>
               Буцаалт
            </Button>
         ) : (
            <Button className="w-full bg-green-500 text-white font-bold" onClick={handlePrint}>
               Хэвлэх
            </Button>
         )}
      </div>
   );
}
export default EbarimtPrint;
