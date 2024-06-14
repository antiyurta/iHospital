import React, { useRef, useState } from 'react';
import { Alert, Button, Divider, Input, Modal, Tabs } from 'antd';
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

function EbarimtPrint({ props, isBackPayment }) {
   const printRef = useRef();
   const hospitalName = useSelector(selectCurrentHospitalName);
   const [isEasyModal, setIsEasyModal] = useState(false);
   const [consumerNo, setConsumerNo] = useState('');
   const [consumerFName, setConsumerFName] = useState('');
   const [consumerLName, setConsumerLName] = useState('');
   const [consumerEmail, setConsumerEmail] = useState('');
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
            setConsumerFName(response?.data?.response?.givenName);
            setConsumerLName(response?.data?.response?.familyName);
         } else {
            openNofi('error', 'Алдаа', 'Ebarimt бүртгэлийн дугаар олдсонгүй');
            setConsumerNo('');
         }
      });
   };
   const consumerByPhone = async (event) => {
      await EbarimtService.consumerByPhone(event).then((response) => {
         if (response.status === 200) {
            openNofi('success', 'Амжиллтай', `Ebarimt бүртгэлийн дугаар: ${response?.data?.response?.loginName}`);
            setConsumerNo(response?.data?.response?.loginName);
            setConsumerEmail(response?.data?.response?.email);
         } else {
            openNofi('error', 'Алдаа', 'Ebarimt бүртгэлийн дугаар олдсонгүй');
            setConsumerNo('');
            setConsumerEmail('');
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

   console.log({ props });

   const tabItems = [
      {
         key: '1',
         label: 'Утас',
         children: (
            <div className="w-full p-1">
               <p>Утас</p>
               <Search
                  onSearch={consumerByPhone}
                  placeholder="Утас"
                  style={{
                     background: 'white',
                     width: '100%'
                  }}
               />
               {consumerNo !== '' && (
                  <Alert
                     message={
                        <>
                           <p>Бүртгэлийн дугаар: {consumerNo}</p>
                           {consumerEmail !== '' && <p>Мэйл: {consumerEmail}</p>}
                        </>
                     }
                     type="success"
                  />
               )}
            </div>
         )
      },
      {
         key: '2',
         label: 'Регистр',
         children: (
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
               {consumerNo !== '' && (
                  <Alert
                     message={
                        <>
                           <p>Бүртгэлийн дугаар: {consumerNo}</p>
                           {consumerLName !== '' && <p>Овог: {consumerLName}</p>}
                           {consumerFName !== '' && <p>Нэр: {consumerFName}</p>}
                        </>
                     }
                     type="success"
                  />
               )}
            </div>
         )
      }
   ];
   return (
      <div className="pt-6">
         <div ref={printRef} className="w-[95%] mx-auto">
            <div className="ebarimt">
               <div className="flex flex-row gap-2 justify-end">
                  <img src={buildingSvg} alt="building" />
                  <p className="float-right font-bold">{hospitalName}</p>
               </div>
               <p className="text-center font-bold">ТӨЛБӨРИЙН БАРИМТ</p>
               <strong className="text-xs text-black">Борлуулагч:</strong>
               <p className="ml-2">
                  <strong>ТТД:</strong> {props?.merchantTin}
               </p>
               <p className="ml-2">
                  <strong>Нэр:</strong> {props?.merchantName}
               </p>
               {props?.merchantAddress && (
                  <p className="ml-2">
                     <strong>Хаяг:</strong> {props?.merchantAddress}
                  </p>
               )}

               {props?.type === 'B2B_RECEIPT' && (
                  <>
                     <p className="ml-2">
                        <strong>Банкны нэр:</strong> {props?.bankName}
                     </p>
                     <p className="ml-2">
                        <strong>Банкны дансны дугаар:</strong> {props?.bankAccountNo}
                     </p>
                     <Divider dashed className="my-0 border-black" />
                     <strong className="text-xs text-black">Худалдан авагч:</strong>
                     <p className="ml-2">
                        <strong>ТТД:</strong> {props?.customerTin}
                     </p>
                     <p className="ml-2">
                        <strong>Нэр:</strong> {props?.customerName}
                     </p>
                     <Divider dashed className="my-0 border-black" />
                  </>
               )}
               <div className="flex flex-row gap-1">
                  <img src={employeeSvg} alt="employe" />
                  <p>
                     <strong>Ажилтан:</strong> {`${props?.createdEmployeeName}`}
                  </p>
               </div>
               <div className="flex flex-row gap-1">
                  <img src={timeSvg} alt="time" />
                  <p>
                     <strong>Огноо:</strong>
                     {` ${dayjs(props?.createdAt).format('YYYY-MM-DD HH:mm:ss')}`}
                  </p>
               </div>
               {/* <Divider dashed className="my-0 border-black" /> */}
               <p className="w-full flex justify-between">
                  <strong>Картын №:</strong>
                  <span className="underline underline-offset-1">{props?.patient?.cardNumber}</span>
               </p>
               <div className="flex flex-row gap-1 justify-between">
                  <p>Овог: {props?.patient?.lastName}</p>
                  <p>Нэр: {props?.patient?.firstName}</p>
               </div>
               <table className="ebarimt-dashed-table">
                  <thead>
                     <tr>
                        <th>Үйлчилгээ</th>
                        <th>Үнэ</th>
                     </tr>
                  </thead>
                  <tbody>
                     {props?.invoices?.map((invoice, index) => (
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
                  <p style={{ fontWeight: 'bold' }} className="w-full flex justify-between text-end">
                     Нийт дүн: {numberToCurrency(props?.plusAmount)}
                  </p>
                  {props?.insuranceAmount > 0 && (
                     <p style={{ fontWeight: 'bold' }} className="w-full flex justify-between text-end">
                        Даатгалаас: {numberToCurrency(props?.insuranceAmount)}
                     </p>
                  )}
                  {props?.discountAmount > 0 && (
                     <p style={{ fontWeight: 'bold' }} className="w-full flex justify-between text-end">
                        Хөнгөлсөн дүн: {numberToCurrency(props?.discountAmount)}
                     </p>
                  )}
                  <p style={{ fontWeight: 'bold' }} className="w-full flex justify-between text-end">
                     Төлөх дүн: {numberToCurrency(props?.paidAmount)}
                  </p>
                  {props?.paidAmount > 0 && (
                     <>
                        <p style={{ fontWeight: 'bold' }} className="w-full flex justify-between text-end">
                           Төлбөрийн хэлбэр:
                        </p>
                        <p className="ml-2">{props?.paymentType?.name}</p>
                     </>
                  )}
               </div>
               <hr />
               <p className="w-full flex justify-between">
                  <strong>ДДТД:</strong>
                  {props?.billId}
               </p>
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
                        value={props?.qrData ? props?.qrData?.toString() : ''}
                        viewBox={`0 0 256 256`}
                     />
                  </div>
                  <div className="flex flex-col gap-1">
                     {props?.lottery && (
                        <>
                           <p>Cугалааны дугаар:</p>
                           <p>{props?.lottery}</p>
                        </>
                     )}
                     <p>EBarimt-ын дүн:</p>
                     <p>{numberToCurrency(props?.paidAmount)}</p>
                  </div>
               </div>
               <hr />
               <p className="text-center font-bold">Манайхаар үйлчлүүлсэнд баярлалаа</p>
            </div>
         </div>
         {isBackPayment ? (
            <Button className="w-full bg-red-600 text-white font-bold" onClick={() => handleBack(props?.id)}>
               Буцаалт
            </Button>
         ) : (
            <div className="flex">
               <Button className="w-full bg-primary text-white font-bold" onClick={handlePrint}>
                  Хэвлэх
               </Button>
               {props?.type == 'B2C_RECEIPT' && (
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
            onOk={() => easyRegister(consumerNo, props?.qrData)}
            okText="Хадгалах"
            cancelText="Болих"
            width={400}
         >
            <Tabs defaultActiveKey="1" items={tabItems} />
         </Modal>
      </div>
   );
}
export default EbarimtPrint;
