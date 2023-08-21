import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Button, Collapse, Empty, Form } from 'antd';
import { ClockCircleOutlined, DeleteOutlined, PlusOutlined, SwapOutlined } from '@ant-design/icons';
import mn from 'antd/es/calendar/locale/mn_MN';
// components
import NewCard from '../../Card/Card';
import NewModal from '../../Modal/Modal';
import { NewDatePicker, NewOption, NewRadio, NewRadioGroup, NewSelect, NewTextArea } from '../../Input/Input';
import { NewColumn, NewColumnGroup, NewTable } from '../../Table/Table';
import { getAge, getGender, openNofi } from '../../comman';
const { Panel } = Collapse;

//service uud
import ScheduleService from '../../../services/schedule';

function List(props) {
   const { schedules, type, selectedPatient, orderAppointment, isGetSlots, isExtraGrud } = props;
   const [changeForm] = Form.useForm();
   const [selectedDoctorId, setSelectedDoctorId] = useState(Number);
   const [cancalForm] = Form.useForm();
   const [slots, setSlots] = useState([]);
   const [filteredSchedules, setFilteredSchedules] = useState([]);
   const [filteredSlots, setFilteredSlots] = useState([]);
   const [selectedScheduleId, setSelectedScheduleId] = useState(Number);
   const [selectedSlotId, setSelectedSlotId] = useState(Number);
   const [selectedAppointmentId, setSelectedAppointmentId] = useState(Number);
   const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
   const [isLoadingChangeLoading, setIsLoadingChangeLoading] = useState(false);
   const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);
   const [isLoadingCancelLoading, setIsLoadingCancelLoading] = useState(false);
   //
   // functions
   // slot change hiih button click
   const changeSlot = (id, appointmentId, doctorId) => {
      changeForm.resetFields();
      setFilteredSchedules([]);
      setFilteredSlots([]);
      setSelectedSlotId(id);
      setSelectedAppointmentId(appointmentId);
      setSelectedDoctorId(doctorId);
      setIsOpenChangeModal(true);
   };
   // slot cancel hiih button click
   const cancelSlot = (id) => {
      cancalForm.resetFields();
      setSelectedSlotId(id);
      setIsOpenCancelModal(true);
   };
   // slot solih uildel
   const onFinishChangeSlot = async (values) => {
      setIsLoadingChangeLoading(true);
      await ScheduleService.postChangeSlot({
         type: type,
         slotId: selectedSlotId,
         newSlotId: values.newSlotId,
         appointmentId: selectedAppointmentId,
         appointmentWorkDate: moment(values.date)
      }).then((response) => {
         if (response.status === 201) {
            setIsOpenChangeModal(false);
            getSlots(selectedScheduleId, 0);
            setIsLoadingChangeLoading(false);
         }
      });
   };
   //slot ustgah
   const onFinishCancelSlot = async (values) => {
      setIsLoadingCancelLoading(true);
      await ScheduleService.postReturnSlot({
         type: type,
         description: values.desc,
         slotId: selectedSlotId
      }).then((response) => {
         if (response.status === 201) {
            setIsOpenCancelModal(false);
            getSlots(selectedScheduleId, 0);
            setIsLoadingCancelLoading(false);
         }
      });
   };
   // solih schedule awcirah
   const getScheduleOnChange = async (date) => {
      if (date) {
         await ScheduleService.get({
            params: {
               findOneDate: moment(date).format('YYYY-MM-DD'),
               doctorId: selectedDoctorId,
               type: type
            }
         }).then((response) => {
            setFilteredSchedules([]);
            if (response.data.response.data?.length === 0) {
               openNofi('info', 'Анхааруулга', 'Энэ өдөр, энэ эмч дээр цагийн хуваарь оруулаагүй байна');
            } else {
               setFilteredSchedules(response.data.response.data);
            }
         });
      } else {
         setFilteredSchedules([]);
      }
   };
   // slot awcirah
   const getSlots = async (scheduleId, state) => {
      // 0 bol huwiar setleh
      // 1 bol tsag solih ued huwiar setleh
      if (state === 0) {
         setSlots([]); // engiin tsag shuurdeh
      } else {
         setFilteredSlots([]); // tsag solih ued second desktop iin tsag shuurdeh
      }
      const params = {
         scheduleId: scheduleId
      };
      if (scheduleId) {
         if (type === 3) {
            await ScheduleService.getDeviceSlot({ params: params }).then((response) => {
               if (state === 0) {
                  setSlots(response.data.response.data);
               } else {
                  setFilteredSlots(response.data.response.data);
               }
            });
         } else if (type === 2) {
            await ScheduleService.getTreatmentSlot({ params: params }).then((response) => {
               if (state === 0) {
                  setSlots(response.data.response.data);
               } else {
                  setFilteredSlots(response.data.response.data);
               }
            });
         } else if (type === 1) {
            await ScheduleService.getDoctorSlot({ params: params }).then((response) => {
               if (state === 0) {
                  setSlots(response.data.response.data);
               } else {
                  setFilteredSlots(response.data.response.data);
               }
            });
         }
      }
   };
   // effect schedule id oorclogdwol hamarah slot awcirna
   useEffect(() => {
      getSlots(selectedScheduleId, 0);
   }, [selectedScheduleId]);
   // effect slot reload hiih slotType ni
   useEffect(() => {
      if (isGetSlots.state) {
         getSlots(selectedScheduleId, isGetSlots.slotType);
      }
   }, [isGetSlots]);
   return (
      <>
         <NewCard title="">
            <div className="pt-[10px]">
               {schedules?.length > 0 ? (
                  <Collapse onChange={(id) => setSelectedScheduleId(id)} accordion>
                     {schedules?.map((schedule) => {
                        return (
                           <Panel
                              forceRender={true}
                              key={schedule.id}
                              header={
                                 <div>
                                    <b>Өрөө:</b> {schedule.room?.roomNumber}
                                    <b className="ml-2">Тасаг:</b> {schedule.structure?.name}
                                    <b className="ml-2">Кабинет:</b> {schedule.cabinet?.name}
                                    <b className="ml-2">Эмч:</b> {schedule.doctor?.firstName}
                                 </div>
                              }
                           >
                              <NewTable
                                 prop={{
                                    rowKey: 'id',
                                    bordered: true,
                                    dataSource: slots
                                 }}
                                 meta={{
                                    page: 1,
                                    limit: slots.length
                                 }}
                                 isLoading={false}
                                 isPagination={false}
                              >
                                 <NewColumn
                                    width={110}
                                    title="Цаг"
                                    render={(_, row) => {
                                       return (
                                          <div className="inline-flex flex-row items-center">
                                             <span>{row.startTime?.substr(0, 5)}</span>
                                             <ClockCircleOutlined className="mx-1.5" />
                                             <span>{row.endTime?.substr(0, 5)}</span>
                                          </div>
                                       );
                                    }}
                                 />
                                 <NewColumnGroup title="Үйлчлүүлэгчийн мэдээлэл">
                                    <NewColumn title="Овог" dataIndex={['patient', 'lastName']} />
                                    <NewColumn title="Нэр" dataIndex={['patient', 'firstName']} />
                                    <NewColumn
                                       title="Нас"
                                       dataIndex={['patient', 'registerNumber']}
                                       render={(text) => {
                                          return getAge(text);
                                       }}
                                    />
                                    <NewColumn
                                       title="Хүйс"
                                       dataIndex={['patient', 'registerNumber']}
                                       render={(text) => {
                                          return getGender(text);
                                       }}
                                    />
                                    <NewColumn title="Регистрийн №" dataIndex={['patient', 'registerNumber']} />
                                    <NewColumn title="Утас" dataIndex={['patient', 'phoneNo']} />
                                 </NewColumnGroup>
                                 <NewColumn
                                    title="Статус"
                                    dataIndex={'slotStatus'}
                                    render={(text, row) => {
                                       if (!row.isActive) {
                                          if (text === 0) {
                                             return 'Ирээгүй';
                                          } else if (text === 1) {
                                             return 'Ирсэн';
                                          } else if (text === 2) {
                                             return 'Үзлэгт орсон';
                                          }
                                       }
                                    }}
                                 />
                                 <NewColumn
                                    title="Захиалсан огноо"
                                    dataIndex={'updatedAt'}
                                    render={(text, row) => {
                                       if (!row.isActive) {
                                          return moment(text).format('YYYY/MM/DD HH:mm');
                                       }
                                    }}
                                 />
                                 <NewColumn
                                    title="Ирсэн цаг"
                                    dataIndex={'incomeDate'}
                                    render={(text) => {
                                       if (text) {
                                          return moment(text).format('YYYY/MM/DD HH:mm');
                                       }
                                    }}
                                 />
                                 <NewColumn
                                    title="Бүртгэсэн"
                                    render={(_, row) => {
                                       if (!row.isActive) {
                                          return row.createdLastName?.substring(0, 1) + '.' + row.createdFirstName;
                                       }
                                    }}
                                 />
                                 <NewColumnGroup title="Үйлдэл">
                                    {isExtraGrud.isCreate ? (
                                       <NewColumn
                                          title="Цаг захиалах"
                                          dataIndex={'isActive'}
                                          render={(text, row) => {
                                             if (text) {
                                                return (
                                                   <Button
                                                      onClick={() => {
                                                         if (selectedPatient.id) {
                                                            orderAppointment({
                                                               isUrgent: false,
                                                               roomNumber: schedule.room.roomNumber,
                                                               structureName: schedule.structure.name,
                                                               time: {
                                                                  start: row.startTime,
                                                                  end: row.endTime
                                                               },
                                                               slotId: row.id,
                                                               cabinetId: schedule.cabinetId
                                                            });
                                                         } else {
                                                            openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
                                                         }
                                                      }}
                                                      icon={<PlusOutlined />}
                                                      className="bg-green-500 text-white"
                                                   />
                                                );
                                             }
                                          }}
                                       />
                                    ) : null}
                                    {isExtraGrud.isChange ? (
                                       <NewColumn
                                          title="Цаг солих"
                                          dataIndex={'isActive'}
                                          render={(text, row) => {
                                             if (!text && row.slotStatus === 0) {
                                                return (
                                                   <Button
                                                      onClick={() =>
                                                         changeSlot(row.id, row.appointmentId, row.schedule.doctorId)
                                                      }
                                                      icon={<SwapOutlined />}
                                                      className="bg-yellow-500 text-black"
                                                   />
                                                );
                                             }
                                          }}
                                       />
                                    ) : null}
                                    {isExtraGrud.isDelete ? (
                                       <NewColumn
                                          title="Цаг\n устгах"
                                          dataIndex={'isActive'}
                                          render={(text, row) => {
                                             if (!text && row.slotStatus === 0) {
                                                return (
                                                   <Button
                                                      onClick={() => cancelSlot(row.id)}
                                                      icon={<DeleteOutlined />}
                                                      className="bg-red-500 text-white"
                                                   />
                                                );
                                             }
                                          }}
                                       />
                                    ) : null}
                                 </NewColumnGroup>
                              </NewTable>
                           </Panel>
                        );
                     })}
                  </Collapse>
               ) : (
                  <Empty description="Цагийн хувиар ороогүй байна" />
               )}
            </div>
         </NewCard>
         <NewModal
            title="Цуцлах болсон шалтгаан"
            open={isOpenCancelModal}
            onCancel={() => setIsOpenCancelModal(false)}
            onOk={() =>
               cancalForm.validateFields().then((values) => {
                  onFinishCancelSlot(values);
               })
            }
            confirmLoading={isLoadingCancelLoading}
         >
            <Form form={cancalForm} layout="vertical">
               <Form.Item
                  name="desc"
                  label="Шалтгаан"
                  rules={[
                     {
                        required: isOpenCancelModal,
                        message: 'Шалтгаан заавал'
                     }
                  ]}
               >
                  <NewTextArea />
               </Form.Item>
            </Form>
         </NewModal>
         <NewModal
            title="Цаг солих"
            open={isOpenChangeModal}
            onCancel={() => setIsOpenChangeModal(false)}
            onOk={() =>
               changeForm.validateFields().then((values) => {
                  onFinishChangeSlot(values);
               })
            }
            confirmLoading={isLoadingChangeLoading}
         >
            <Form form={changeForm} layout="vertical">
               <Form.Item
                  name="date"
                  label="Өдөр сонгох"
                  rules={[
                     {
                        required: isOpenChangeModal,
                        message: 'Өдөр сонгох заавал'
                     }
                  ]}
               >
                  <NewDatePicker
                     onChange={getScheduleOnChange}
                     style={{ minHeight: 32 }}
                     locale={mn}
                     format={'YYYY/MM/DD'}
                     disabledDate={(current) => {
                        return moment().add(-1, 'days') >= current || moment().add(1, 'month') <= current;
                     }}
                  />
               </Form.Item>
               <Form.Item
                  name="scheduleId"
                  label="Хуваарь"
                  rules={[
                     {
                        required: isOpenChangeModal,
                        message: 'Цаг сонгох заавал'
                     }
                  ]}
               >
                  <NewRadioGroup onChange={(e) => getSlots(e.target.value, 1)}>
                     {filteredSchedules?.map((schedule, index) => {
                        return (
                           <NewRadio key={index} value={schedule.id}>
                              <span className="whitespace-pre-wrap">
                                 <b>Өрөө:</b> {schedule.room?.roomNumber}
                                 <b className="ml-2">Тасаг:</b> {schedule.structure?.name}
                                 <b className="ml-2">Кабинет:</b> {schedule.cabinet?.name}
                                 <b className="ml-2">Эмч:</b> {schedule.doctor?.firstName}
                              </span>
                           </NewRadio>
                        );
                     })}
                  </NewRadioGroup>
               </Form.Item>
               <Form.Item
                  name="newSlotId"
                  label="Цаг сонгох"
                  rules={[
                     {
                        required: isOpenChangeModal,
                        message: 'Цаг сонгох заавал'
                     }
                  ]}
               >
                  <NewSelect className="w-full">
                     {filteredSlots?.map((slot, index) => {
                        return slot.isActive ? (
                           <NewOption key={index} value={slot.id}>
                              {slot.startTime + '->' + slot.endTime}
                           </NewOption>
                        ) : null;
                     })}
                  </NewSelect>
               </Form.Item>
            </Form>
         </NewModal>
      </>
   );
}
export default List;
