import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal, Radio } from 'antd';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData, selectCurrentHicsService } from '../../../features/emrReducer';
import { selectCurrentInsurance, selectCurrentUserId } from '../../../features/authReducer';

//
import AppointmentService from '../../../services/appointment/api-appointment-service';
import insuranceServices from '../../../services/healt-insurance/insurance';
import { openNofi } from '../../common';
import { useLocation, useNavigate } from 'react-router-dom';
//
//comp
import Finger from '@Comman/Finger/Finger';
import Clock from './Clock';

const EmrTimer = (props) => {
   const navigate = useNavigate();
   const location = useLocation();
   const { startDate, endDate, inspection } = props;
   const [form] = Form.useForm();
   const emrHicsService = useSelector(selectCurrentHicsService);
   const { hicsServiceId, appointmentId, appointmentType } = useSelector(selectCurrentEmrData);
   const userId = useSelector(selectCurrentUserId);
   const isInsurance = useSelector(selectCurrentInsurance);
   const [isOpenModal, setIsOpenModal] = useState(false);

   // uzleg duusgah
   const endInspection = async (values) => {
      // if (isInsurance && hicsServiceId) {
      //    values['doctorFinger'] = 'test';
      //    values['patientFinger'] = 'test2';
      //    values['appointmentId'] = appointmentId;
      // }
      if (isInsurance && hicsServiceId) {
         // await insuranceServices
         //    .appointmentSeal(values)
         //    .post('insurance/appointment-seal', values)
         //    .then((response) => {
         //       if (response.data.code === 400) {
         //          openNofi('error', 'Алдаа', response.data.description);
         //       } else {
         //          openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
         //          navigate('/ambulatoryList', {
         //             state: {
         //                isRead: true
         //             }
         //          });
         //       }
         //    })
         //    .catch((error) => {
         //       if (error.response.status === 400) {
         //          const message = error.response.data.message.replaceAll('HttpException:', '');
         //          openNofi('error', 'Алдаа', message);
         //       }
         //    });
      } else {
         var newResponse;
         if (appointmentType === 0) {
            newResponse = await AppointmentService.patchAppointment(appointmentId, {
               slotId: location?.state?.slotId,
               endDate: new Date(),
               status: values?.conclusion?.includes('confirmed') ? 5 : 4
            }).then(({ data: { success } }) => success);
         } else if (appointmentType === 1) {
            newResponse = await AppointmentService.patchPreOrder(appointmentId, {
               endDate: new Date(),
               doctorId: userId,
               status: values?.conclusion?.includes('confirmed') ? 5 : 4
            }).then(({ data: { success } }) => success);
         }
         if (newResponse) {
            setIsOpenModal(false);
            openNofi('success', 'Амжиллтай', 'Үзлэг амжиллтай хадгалагдлаа ');
            navigate('/main/ambulatoryList', {
               state: {
                  isRead: true
               }
            });
         }
      }
   };

   return (
      <>
         <div className="emr-timer">
            <p>Үзлэгийн хугацаа</p>
            <Clock startDate={props.startDate} endDate={props.endDate} />
            <p>{`${dayjs(startDate).format('YYYY/MM/DD hh:mm')} эхэлсэн`}</p>
            {endDate ? <p>{`${dayjs(endDate).format('YYYY/MM/DD hh:mm')} дууссан`}</p> : null}
            <Button
               disabled={endDate ? true : false}
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
         </div>
         <Modal
            title="Үзлэгийн төрөл"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
            footer={null}
            destroyOnClose
         >
            <Form
               form={form}
               onFinish={endInspection}
               initialValues={{
                  inspection: inspection,
                  finger: ''
               }}
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
                           <Form.Item name="conclusion" noStyle>
                              <Checkbox.Group className="flex flex-col">
                                 <Checkbox value={'confirmed'}>Баталгаажуулах</Checkbox>
                                 <Checkbox value={'print'} className="ml-0">
                                    Хэвлэх
                                 </Checkbox>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                        <div className="bg-[#F2F3F5] h-full p-2 rounded-lg flex flex-col gap-1">
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
                           <Form.Item
                              name="inspection"
                              noStyle
                              rules={[{ required: true, message: 'Үзлэгийн төрөл сонгох' }]}
                           >
                              <Radio.Group disabled={inspection ? true : false} className="flex flex-col">
                                 <Radio value={1}>Анхан</Radio>
                                 <Radio value={2}>Давтан</Radio>
                                 <Radio value={3}>Урьдчилсан үзлэг</Radio>
                                 <Radio value={4}>Дуудлагаар</Radio>
                                 <Radio value={5}>Диспансер хяналт</Radio>
                                 <Radio value={6}>Гэрийн үзлэг</Radio>
                              </Radio.Group>
                           </Form.Item>
                        </div>
                     </div>
                     <div className="bg-[#F2F3F5] p-2 rounded-lg w-full flex flex-col gap-1">
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
                        <Finger form={form} insurance={isInsurance} noStyle name="finger">
                           <Input />
                        </Finger>
                     </div>
                  </div>
                  <div className="flex flex-row justify-end">
                     <Button type="primary" htmlType="submit">
                        Хадгалах
                     </Button>
                  </div>
               </div>
            </Form>
         </Modal>
      </>
   );
};
export default EmrTimer;
