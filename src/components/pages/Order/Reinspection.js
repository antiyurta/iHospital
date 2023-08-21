import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Appointment from '../Appointment/Index';

function Reinspection({ selectedPatient, appointmentId }) {
   const [isOpenMOdal, setIsOpenModal] = useState(false);
   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            Давтан үзлэг
         </Button>
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
            <Appointment selectedPatient={selectedPatient} type={1} prevAppointmentId={appointmentId} />
         </Modal>
      </>
   );
}
export default Reinspection;
