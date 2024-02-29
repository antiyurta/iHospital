import React, { useRef } from 'react';
import { Button } from 'antd';
import { useReactToPrint } from 'react-to-print';
import QRCode from 'react-qr-code';
import moment from 'moment';
import { numberToCurrency, openNofi } from '../../comman';
import PaymentService from '../../../services/payment/payment';
import EbarimtService from '../../../services/ebarimt/ebarimt';
import { useSelector } from 'react-redux';
import { selectCurrentHospitalName } from '../../../features/authReducer';

//
import buildingSvg from './building.svg';
import employeeSvg from './employee.svg';
import timeSvg from './time.svg';
import dayjs from 'dayjs';

function EbarimtPrint(props) {
   const printRef = useRef();
   const hospitalName = useSelector(selectCurrentHospitalName);
   const handleBack = async (id) => {
      await EbarimtService.ReturnBill(props?.props?.billId).then(async (response) => {
         if (response.data.response.result.errorCode === 0) {
            await PaymentService.patchPayment(id, { isReturn: true }).then((_response) => {
               openNofi('success', 'Амжилттай', 'Буцаалт Амжиллтай');
            });
         } else {
            openNofi('error', 'Алдаа И-Баримт буцаалт', response.data.response.result.message);
         }
      });
   };
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   return (
      <div className="pt-6">
         <div ref={printRef} className="px-[0.5cm] m-auto" style={{ width: '80mm' }}>
            <div className="ebarimt">
               <div className="flex flex-row gap-2 justify-end">
                  <img src={buildingSvg} alt="building" />
                  <p className="float-right font-bold">{hospitalName}</p>
               </div>
               <p className="text-center font-bold">ТӨЛБӨРИЙН БАРИМТ</p>
               <div className="flex flex-row gap-2">
                  <img src={employeeSvg} alt="employe" />
                  <p>{`Ажилтан: ${props?.props?.createdEmployeeName}`}</p>
               </div>
               <div className="flex flex-row gap-2">
                  <img src={timeSvg} alt="time" />
                  <p>
                     {`Огноо:
                  ${dayjs(props?.props?.createdAt).format('YYYY-MM-DD HH:mm:ss')}`}
                  </p>
               </div>
               <hr />
               <div>
                  <p>Картын №:{props?.props?.patient?.cardNumber}</p>
               </div>
               <div className="flex flex-row gap-1 justify-between">
                  <p>Овог: {props?.props?.patient?.lastName}</p>
                  <p>Нэр: {props?.props?.patient?.firstName}</p>
               </div>
               <table className="ebarimt-dashed-table">
                  <thead>
                     <tr>
                        <th>Үйлчилгээ</th>
                        <th>Үнэ</th>
                     </tr>
                  </thead>
                  <tbody>
                     {props?.props?.invoices?.map((invoice, index) => (
                        <tr key={index}>
                           <td>{invoice.name}</td>
                           {/* <td
                              dangerouslySetInnerHTML={{
                                 __html: invoice.description
                              }}
                           ></td> */}
                           <td>{numberToCurrency(invoice.amount)}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="flex flex-col gap-0">
                  <p style={{ fontWeight: 'bold' }} className="text-end">
                     Нийт үнэ: {numberToCurrency(props?.props?.plusAmount)}
                  </p>
                  <p style={{ fontWeight: 'bold' }} className="text-end">
                     Төлөх үнэ: {numberToCurrency(props?.props?.paidAmount)}
                  </p>
                  <p style={{ fontWeight: 'bold' }} className="text-end">
                     Даатгалаас: {numberToCurrency(props?.props?.insuranceAmount)}
                  </p>
               </div>
               <hr />
               <p>ДДТД:{props?.props?.billId}</p>
               <div className="grid grid-cols-2 gap-3">
                  <div
                     style={{
                        height: 'auto',
                        margin: '0 auto',
                        width: '100%'
                     }}
                  >
                     <QRCode
                        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                        value={props?.props?.qrData ? props?.props?.qrData : 0}
                        viewBox={`0 0 256 256`}
                     />
                  </div>
                  <div className="flex flex-col gap-1">
                     <p>Cугалааны дугаар</p>
                     <p>{props?.props?.lottery}</p>
                  </div>
               </div>
               <hr />
               <p className="text-center font-bold">Манайхаар үйлчлүүлсэнд баярлалаа</p>
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
