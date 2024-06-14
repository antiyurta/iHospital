import React, { useRef, useState } from 'react';
import { Alert, Button, Input, Modal } from 'antd';
import { useReactToPrint } from 'react-to-print';
import QRCode from 'react-qr-code';
import { numberToCurrency, openNofi } from '../../common';
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
   const [isEasyModal, setIsEasyModal] = useState(false);
   const [consumerNo, setConsumerNo] = useState('');
   const { Search } = Input;
   const handleBack = async (id) => {
      await PaymentService.patchPayment(id, { isReturn: true }).then((_response) => {
         openNofi('success', 'Амжилттай', 'Буцаалт Амжиллтай');
      });
   };
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   const consumerByRegno = async (event) => {
      await EbarimtService.consumerByRegno(event).then((response) => {
         if (response.status === 200) {
            openNofi('success', 'Амжиллтай', `Ebarimt бүртгэлийн дугаар: ${response?.data?.response?.loginName}`);
            setConsumerNo(response?.data?.response?.loginName);
         } else {
            openNofi('error', 'Алдаа', 'Ebarimt бүртгэлийн дугаар олдсонгүй');
            setConsumerNo('');
         }
      });
   };
   const easyRegister = async (customerNo, qrData) => {
      await EbarimtService.easyRegister(customerNo, qrData).then((response) => {
         if (response.status === 201) {
            openNofi('success', 'Амжиллтай');
         } else {
            openNofi('error', 'Алдаа', response.data?.response?.msg);
         }
      });
   };
   return (
      <div className="pt-6">
         <div ref={printRef} className="px-[0.5cm] m-auto" style={{ maxWidth: '80mm' }}>
            <div className="ebarimt">
               <div className="flex flex-row gap-2 justify-end">
                  <img src={buildingSvg} alt="building" />
                  <p className="float-right font-bold">{hospitalName}</p>
               </div>
               <p className="text-center font-bold">ТӨЛБӨРИЙН БАРИМТ</p>
               <p>Борлуулагч:</p>
               <p>ТТД: {props?.props?.merchantTin}</p>
               <p>Нэр: {props?.props?.merchantName}</p>
               <p>Хаяг: {props?.props?.merchantAddress}</p>
               {props?.props?.type == 'B2B_RECEIPT' && (
                  <>
                     <p>Банкны нэр: {props?.props?.bankName}</p>
                     <p>Банкны дансны дугаар: {props?.props?.bankAccountNo}</p>
                     <p>Худалдан авагч:</p>
                     <p>ТТД: {props?.props?.customerTin}</p>
                     <p>Нэр: {props?.props?.customerName}</p>
                  </>
               )}
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
                     Нийт дүн: {numberToCurrency(props?.props?.plusAmount)}
                  </p>
                  <p style={{ fontWeight: 'bold' }} className="text-end">
                     Даатгалаас: {numberToCurrency(props?.props?.insuranceAmount)}
                  </p>
                  <p style={{ fontWeight: 'bold' }} className="text-end">
                     Төлөх дүн: {numberToCurrency(props?.props?.paidAmount)}
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
                        value={props?.props?.qrData ? props?.props?.qrData?.toString() : ''}
                        viewBox={`0 0 256 256`}
                     />
                  </div>
                  <div className="flex flex-col gap-1">
                     {props?.props?.lottery && (
                        <>
                           <p>Cугалааны дугаар:</p>
                           <p>{props?.props?.lottery}</p>
                        </>
                     )}
                     <p>EBarimt-ын дүн:</p>
                     <p>{props?.props?.totalAmount}</p>
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
            <div className="flex">
               <Button className="w-full bg-primary text-white font-bold" onClick={handlePrint}>
                  Хэвлэх
               </Button>
               {props?.props?.type == 'B2C_RECEIPT' && (
                  <Button className="w-full bg-green-500 text-white font-bold" onClick={() => setIsEasyModal(true)}>
                     Хялбар бүртгэл
                  </Button>
               )}
            </div>
         )}
         <Modal
            title={'E-баримтад бүртгүүлэх'}
            open={isEasyModal}
            onCancel={() => setIsEasyModal(false)}
            onOk={() => easyRegister(consumerNo, props?.props?.qrData)}
            okText="Хадгалах"
            cancelText="Болих"
            width={400}
         >
            <div className="w-full p-1">
               <p>Регистр</p>
               <Search
                  onSearch={consumerByRegno}
                  placeholder="Иргэний РД"
                  style={{
                     background: 'white',
                     width: '100%'
                  }}
               />
               {consumerNo !== '' && <Alert message={`Ebarimt бүртгэлийн дугаар: ${consumerNo}`} type="success" />}
            </div>
         </Modal>
      </div>
   );
}
export default EbarimtPrint;
