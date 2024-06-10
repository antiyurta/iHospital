import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Appointment from '../Appointment/Index';
import reInspectionIcon from './NewOrder/reinspectionIcon.svg';
//redux
import { selectCurrentOtsData, setOtsData } from '@Features/emrReducer';
import moment from 'moment';

function Reinspection({ selectedPatient, appointmentId, hicsSealId }) {
   const dispatch = useDispatch();
   const incomeOtsData = useSelector(selectCurrentOtsData);
   const [isOpenMOdal, setIsOpenModal] = useState(false);
   const setOTS = async (info, _doctor, res) => {
      const data = {
         description: undefined,
         isCito: false,
         name: info?.structureName,
         oPrice: 0,
         price: 0,
         requestDate: moment().format('YYYY-MM-DD'),
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
               invoiceData={{
                  isCheckInsurance: false,
                  hicsSealId: hicsSealId
               }}
               type={1}
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
