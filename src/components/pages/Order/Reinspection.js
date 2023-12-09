import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Appointment from '../Appointment/Index';

import reInspectionIcon from './NewOrder/reinspectionIcon.svg';

function Reinspection({ selectedPatient, appointmentId }) {
   const [isOpenMOdal, setIsOpenModal] = useState(false);
   return (
      <>
         <button
            className="gray-order"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            <img src={reInspectionIcon} />
            Давтан үзлэг
         </button>
         <Modal
            title="Давтан үзлэгын цаг"
            width={'80%'}
            open={isOpenMOdal}
            onCancel={() => setIsOpenModal(false)}
            onOk={() => {
               setIsOpenModal(false);
            }}
            bodyStyle={{
               background: '#F3F4F6'
            }}
            footer={null}
            okText={'Хадгалах'}
            cancelText={'Болих'}
         >
            <Appointment
               selectedPatient={selectedPatient}
               type={1}
               prevAppointmentId={appointmentId}
               isExtraGrud={{
                  isCreate: true,
                  isChange: true,
                  isDelete: true
               }}
            />
         </Modal>
      </>
   );
}
export default Reinspection;
