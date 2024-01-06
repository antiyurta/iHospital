import { ClockCircleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Modal, Radio } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData, selectCurrentHicsService } from '../../../features/emrReducer';
import { selectCurrentInsurance } from '../../../features/authReducer';
import Finger from '../../../features/finger';

//
import AppointmentService from '../../../services/appointment/api-appointment-service';
import insuranceServices from '../../../services/healt-insurance/insurance';
import { openNofi } from '../../comman';
import { useLocation, useNavigate } from 'react-router-dom';
//

const EmrTimer = (props) => {
   const navigate = useNavigate();
   const {
      state: { slotId }
   } = useLocation();
   const { startDate } = props;
   const emrHicsService = useSelector(selectCurrentHicsService);
   const { hicsServiceId, appointmentId, listIndexType } = useSelector(selectCurrentEmrData);
   const isInsurance = useSelector(selectCurrentInsurance);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [count, setCount] = useState(0);
   const [time, setTime] = useState('00:00');
   const showTimer = (ms) => {
      const second = Math.floor((ms / 1000) % 60)
         .toString()
         .padStart(2, '0');
      const minute = Math.floor((ms / 1000 / 60) % 60)
         .toString()
         .padStart(2, '0');
      setTime(minute + ':' + second);
   };

   // uzleg duusgah
   const endInspection = async (values) => {
      if (isInsurance && hicsServiceId) {
         values['doctorFinger'] = 'test';
         values['patientFinger'] = 'test2';
         values['appointmentId'] = appointmentId;
      }
      var data = {
         appointmentId: appointmentId
      };
      if (isInsurance && hicsServiceId) {
         await insuranceServices
            .appointmentSeal(values)
            .post('insurance/appointment-seal', values)
            .then((response) => {
               console.log(response);
               if (response.data.code === 400) {
                  openNofi('error', 'Алдаа', response.data.description);
               } else {
                  openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
                  navigate('/ambulatoryList', {
                     state: {
                        isRead: true
                     }
                  });
               }
            })
            .catch((error) => {
               if (error.response.status === 400) {
                  const message = error.response.data.message.replaceAll('HttpException:', '');
                  openNofi('error', 'Алдаа', message);
               }
               console.log(error);
            });
      } else {
         if (listIndexType === 0) {
            await AppointmentService.patchAppointment(appointmentId, {
               slotId: slotId,
               endDate: new Date()
            }).then((response) => {
               console.log(response);
               setIsOpenModal(false);
               openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
               navigate('/main/ambulatoryList', {
                  state: {
                     isRead: true
                  }
               });
            });
         }
      }
   };
   //
   //
   useEffect(() => {
      var id = setInterval(() => {
         var left = count + (new Date() - new Date(startDate));
         setCount(left);
         showTimer(left);
         if (left <= 0) {
            setTime('00:00');
            clearInterval(id);
         }
      }, 1);
      return () => clearInterval(id);
   }, []);
   return (
      <>
         <div className="emr-timer">
            <p>Үзлэгийн хугацаа</p>
            <p className="timer">{time}</p>
            <p>{`${dayjs(startDate).format('YYYY/MM/DD hh:mm')} эхэлсэн`}</p>
            <Button
               danger
               onClick={() => {
                  setIsOpenModal(true);
               }}
               icon={
                  <ClockCircleOutlined
                     style={{
                        fontWeight: 700
                     }}
                  />
               }
            >
               Үзлэг дуусах
            </Button>
            {/* {isInsurance && hicsServiceId ? (
               <Finger
                  text={'Үзлэг дуусгах'}
                  isDanger={true}
                  isFinger={emrHicsService?.isFinger}
                  steps={[
                     {
                        title: 'Эмчийн',
                        path: 'doctorFinger'
                     },
                     {
                        title: 'Өвтний',
                        path: 'patientFinger'
                     }
                  ]}
                  isPatientSheet={emrHicsService?.isPatientSheet}
                  handleClick={endInspection}
               />
            ) : (
               <Button
                  danger
                  onClick={() => {
                     endInspection();
                  }}
                  icon={
                     <ClockCircleOutlined
                        style={{
                           fontWeight: 700
                        }}
                     />
                  }
               >
                  Үзлэг дуусах
               </Button>
            )} */}
         </div>
         <Modal
            title="Үзлэгийн төрөл"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            footer={null}
         >
            <div className="flex flex-col gap-3 p-4">
               <div className="flex flex-row gap-3">
                  <div className="flex flex-col gap-3 w-[200px] min-w-[200px]">
                     <div className="bg-[#F2F3F5] p-2 rounded-lg flex flex-col gap-1">
                        <p
                           style={{
                              color: '#272E3B',
                              fontSize: 14,
                              fontWeight: 700
                           }}
                        >
                           Дүгнэлт
                        </p>
                        <div className="h-[1px] w-full bg-[#C9CDD4]" />
                        <Checkbox.Group className="flex flex-col">
                           <Checkbox>Баталгаажуулах</Checkbox>
                           <Checkbox className="ml-0">Хэвлэх</Checkbox>
                        </Checkbox.Group>
                     </div>
                     <div className="bg-[#F2F3F5] p-2 rounded-lg flex flex-col gap-1">
                        <p
                           style={{
                              color: '#272E3B',
                              fontSize: 14,
                              fontWeight: 700
                           }}
                        >
                           Төрөл
                        </p>
                        <div className="h-[1px] w-full bg-[#C9CDD4]" />
                        <Radio.Group className="flex flex-col">
                           <Radio value={1}>Анхан</Radio>
                           <Radio value={2}>Давтан</Radio>
                           <Radio value={3}>Урьдчилсан үзлэг</Radio>
                           <Radio value={4}>Дуудлагаар</Radio>
                           <Radio value={5}>Диспансер хяналт</Radio>
                           <Radio value={6}>Гэрийн үзлэг</Radio>
                        </Radio.Group>
                     </div>
                  </div>
                  <div className="bg-[#F2F3F5] p-2 rounded-lg w-full">
                     <p
                        style={{
                           color: '#272E3B',
                           fontSize: 14,
                           fontWeight: 700
                        }}
                     >
                        Үйлчлүүлэгчийн хурууны хээ
                     </p>
                     <div className="h-[1px] w-full bg-[#C9CDD4]" />
                  </div>
               </div>
               <div className="flex flex-row justify-end">
                  <Button type="primary" onClick={() => endInspection()}>
                     Хадгалах
                  </Button>
               </div>
            </div>
         </Modal>
      </>
   );
};
export default EmrTimer;
