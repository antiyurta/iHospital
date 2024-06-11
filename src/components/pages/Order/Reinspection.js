import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Appointment from '../Appointment/Index';
import reInspectionIcon from './NewOrder/reinspectionIcon.svg';
//redux
import { selectCurrentOtsData, setOtsData } from '@Features/emrReducer';

function Reinspection({ isInsurance, selectedPatient, appointmentId, hicsSeal }) {
   const dispatch = useDispatch();
   const incomeOtsData = useSelector(selectCurrentOtsData);
   const [isOpenMOdal, setIsOpenModal] = useState(false);
   const setOTS = async (info, _doctor, res) => {
      let data = {
         description: undefined,
         isCito: false,
         name: info?.structureName,
         oPrice: 0,
         price: 0,
         requestDate: dayjs().format('YYYY-MM-DD'),
         specimen: undefined,
         type: 9,
         invoiceId: res.invoiceId,
         requestId: res.id,
         orderTime: `${info?.time?.start?.substr(0, 5)}->${info?.time?.end?.substr(0, 5)}`
      };
      dispatch(
         setOtsData({
            services: [...(incomeOtsData.services || []), data],
            total: incomeOtsData.total
         })
      );
   };
   return (
      <>
         <button
            className="yellow-order"
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
            destroyOnClose
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
               invoiceData={{
                  isCheckInsurance: !isInsurance,
                  hicsSealId: hicsSeal.id
               }}
               handleClick={setOTS}
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
