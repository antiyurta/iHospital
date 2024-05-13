import React from 'react';
import { Modal } from 'antd';
import inpatientIcon from './NewOrder/inpatientIcon.svg';
import { openNofi } from '../../common';

function InpatientRequest({ selectedPatient, handleClick }) {
   const getConfirm = () => {
      Modal.confirm({
         title: 'Хэвтүүлэх хүсэлт',
         content: (
            <div>
               <p>Та хэвтүүлэх хүсэлт илгээх гэж байна</p>
            </div>
         ),
         cancelText: 'Болих',
         okText: 'Захиалах',
         async onOk() {
            handleClick({
               patientId: selectedPatient.id
            });
         }
      });
   };

   return (
      <>
         <button
            className="yellow-order"
            onClick={() => {
               if (!selectedPatient.hasOwnProperty('id')) {
                  openNofi('error', 'Алдаа', 'Өвчтөн сонгогдоогүй байна');
               } else {
                  getConfirm();
               }
            }}
         >
            <img src={inpatientIcon} />
            Хэвтүүлэх
         </button>
      </>
   );
}
export default InpatientRequest;
