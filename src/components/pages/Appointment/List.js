import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import {
   Avatar,
   Button,
   Card,
   Collapse,
   DatePicker,
   Divider,
   Empty,
   Form,
   Input,
   Modal,
   Radio,
   Select,
   Table,
   message
} from 'antd';
import dayjs from 'dayjs';
import { ClockCircleOutlined, DeleteOutlined, PlusOutlined, SwapOutlined } from '@ant-design/icons';
import mn from 'antd/es/calendar/locale/mn_MN';
// components
import { formatNameForDoc, getAge, getGenderInType, openNofi } from '../../common';
import { AppointmentStatus } from './appointment-enum';
const { Panel } = Collapse;
const { TextArea } = Input;

//service uud
import ScheduleService from '../../../services/schedule';
import apiAppointmentService from '../../../services/appointment/api-appointment-service';

function List(props) {
   const { schedules, type, selectedPatient, orderAppointment, isGetSlots, isExtraGrud } = props;
   const [changeForm] = Form.useForm();
   const [cancalForm] = Form.useForm();
   const [slots, setSlots] = useState([]);
   const [filteredSchedules, setFilteredSchedules] = useState([]);
   const [filteredSlots, setFilteredSlots] = useState([]);
   const [selectedScheduleId, setSelectedScheduleId] = useState(Number);
   const [selectedSlot, setSelectedSlot] = useState();
   const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
   const [isLoadingChangeLoading, setIsLoadingChangeLoading] = useState(false);
   const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);
   const [isLoadingCancelLoading, setIsLoadingCancelLoading] = useState(false);
   /** Цагаа солих form нээх */
   const changeSlot = (row) => {
      changeForm.resetFields();
      setFilteredSchedules([]);
      setFilteredSlots([]);
      setSelectedSlot(row);
      setIsOpenChangeModal(true);
   };
   /** Цагаа солих */
   const onFinishChangeSlot = async (values) => {
      setIsLoadingChangeLoading(true);
      await apiAppointmentService
         .patchAppointment(selectedSlot.appointment.id, {
            status: AppointmentStatus.Revalide,
            slotId: values.newSlotId,
            description: `${selectedSlot.startTime} цагаас өөрчлөв.`
         })
         .then((response) => {
            if (response.status === 200) {
               message.success('Амжилттай цаг солилоо.');
            } else {
               message.warn('Алдаатай хүсэлт');
            }
         })
         .finally(() => {
            setIsOpenChangeModal(false);
            getSlots(selectedScheduleId, 0);
            setIsLoadingChangeLoading(false);
         });
   };
   /** Захиалсан цагаа устгах form нээх */
   const cancelSlot = (row) => {
      cancalForm.resetFields();
      setSelectedSlot(row);
      setIsOpenCancelModal(true);
   };
   /** Захиалсан цагаа устгах */
   const onFinishCancelSlot = async (values) => {
      setIsLoadingCancelLoading(true);
      await apiAppointmentService
         .patchAppointment(selectedSlot.appointment.id, {
            status: AppointmentStatus.SystemRefund,
            description: values.desc,
            slotId: null
         })
         .then((response) => {
            if (response.status === 200) {
               message.success('Амжилттай буцаалт хийлээ.');
            } else {
               message.warn('Алдаатай хүсэлт');
            }
         })
         .finally(() => {
            getSlots(selectedScheduleId, 0);
            setIsLoadingCancelLoading(false);
            setIsOpenCancelModal(false);
         });
   };
   // solih schedule awcirah
   const getScheduleOnChange = async (date) => {
      if (date) {
         await ScheduleService.get({
            params: {
               findOneDate: dayjs(date).format('YYYY-MM-DD'),
               doctorId: selectedSlot.appointment.doctorId,
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

   const dd = useMemo(() => {
      const sortedData = [...schedules].sort((a, b) => a.workDate.localeCompare(b.workDate));
      return sortedData?.reduce((result, schedule) => {
         const { workDate } = schedule;
         if (!result[workDate]) {
            result[workDate] = [];
         }
         result[workDate].push(schedule);
         return result;
      }, {});
   }, [schedules]);

   return (
      <>
         <Card
            title=""
            className="rounded-lg"
            bodyStyle={{
               padding: 10,
               overflow: 'auto',
               height: 'calc(100vh - 360px)'
            }}
         >
            {Object.entries(dd)?.map(([key, value], index) => (
               <div key={index}>
                  <Divider orientation="left">{key}</Divider>
                  {value?.length > 0 ? (
                     <Collapse onChange={(id) => setSelectedScheduleId(id)} accordion>
                        {value?.map((schedule) => {
                           return (
                              <Panel
                                 forceRender={false}
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
                                 <Table
                                    rowKey="id"
                                    bordered
                                    columns={[
                                       {
                                          title: 'Цаг',
                                          render: (_, row) => (
                                             <div className="inline-flex flex-row gap-1 items-center">
                                                <span>{row.startTime?.substr(0, 5)}</span>
                                                <ClockCircleOutlined />
                                                <span>{row.endTime?.substr(0, 5)}</span>
                                             </div>
                                          )
                                       },
                                       {
                                          title: 'Өвчтөн',
                                          dataIndex: ['appointment', 'patient'],
                                          render: (patient) => (
                                             <div className="ambo-list-user">
                                                <Avatar
                                                   style={{
                                                      minWidth: 32
                                                   }}
                                                />
                                                <div className="info">
                                                   <p className="name">
                                                      {formatNameForDoc(patient?.lastName, patient?.firstName)}
                                                   </p>
                                                   <p>{patient?.registerNumber}</p>
                                                </div>
                                             </div>
                                          )
                                       },
                                       {
                                          title: 'Нас',
                                          width: 100,
                                          dataIndex: ['appointment', 'patient', 'registerNumber'],
                                          render: (text) => (
                                             <span
                                                style={{
                                                   whiteSpace: 'normal'
                                                }}
                                             >
                                                {getAge(text)}
                                             </span>
                                          )
                                       },
                                       {
                                          title: 'Хүйс',
                                          width: 40,
                                          dataIndex: ['appointment', 'patient', 'genderType'],
                                          render: (genderType) => {
                                             return getGenderInType(genderType);
                                          }
                                       },
                                       {
                                          title: 'Статус',
                                          dataIndex: 'slotStatus',
                                          render: (slotStatus, row) => {
                                             if (!row.isActive) {
                                                if (slotStatus === 0) {
                                                   return 'Ирээгүй';
                                                } else if (slotStatus === 1) {
                                                   return 'Ирсэн';
                                                } else if (slotStatus === 2) {
                                                   return 'Үзлэгт орсон';
                                                }
                                             }
                                             return;
                                          }
                                       },
                                       {
                                          title: 'Захиалсан огноо',
                                          dataIndex: ['appointment', 'createdAt'],
                                          render: (createdAt, row) => {
                                             if (!row.isActive) {
                                                return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
                                             }
                                          }
                                       },
                                       {
                                          title: 'Бүртгэсэн',
                                          render: (_, row) =>
                                             formatNameForDoc(row.createdLastName, row.createdFirstName)
                                       },
                                       {
                                          title: 'Үйлдэл',
                                          children: [
                                             {
                                                title: 'Цаг захиалах',
                                                dataIndex: 'isActive',
                                                render: (isActive, row) => {
                                                   if (isExtraGrud.isCreate && isActive) {
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
                                                                     cabinetId: schedule.cabinetId,
                                                                     appointmentWorkDate: key
                                                                  });
                                                               } else {
                                                                  openNofi(
                                                                     'error',
                                                                     'Анхааруулга',
                                                                     'Өвчтөн сонгоогүй байна'
                                                                  );
                                                               }
                                                            }}
                                                            icon={<PlusOutlined />}
                                                            className="bg-green-500 text-white"
                                                         />
                                                      );
                                                   }
                                                   return;
                                                }
                                             },
                                             {
                                                title: 'Цаг солих',
                                                dataIndex: 'isActive',
                                                render: (isActive, row) => {
                                                   if (
                                                      isExtraGrud.isChange &&
                                                      !isActive &&
                                                      row.appointment &&
                                                      row.slotStatus === 0
                                                   ) {
                                                      return (
                                                         <Button
                                                            onClick={() => changeSlot(row)}
                                                            icon={<SwapOutlined />}
                                                            className="bg-yellow-500 text-black"
                                                         />
                                                      );
                                                   }
                                                   return;
                                                }
                                             },
                                             {
                                                title: 'Цаг устгах',
                                                dataIndex: 'isActive',
                                                render: (isActive, row) => {
                                                   if (
                                                      isExtraGrud.isDelete &&
                                                      !isActive &&
                                                      row.appointment &&
                                                      row.slotStatus === 0
                                                   ) {
                                                      return (
                                                         <Button
                                                            onClick={() => cancelSlot(row)}
                                                            icon={<DeleteOutlined />}
                                                            className="bg-red-500 text-white"
                                                         />
                                                      );
                                                   }
                                                   return;
                                                }
                                             }
                                          ]
                                       }
                                    ]}
                                    scroll={{
                                       x: 1000
                                    }}
                                    dataSource={slots}
                                    pagination={false}
                                 />
                              </Panel>
                           );
                        })}
                     </Collapse>
                  ) : (
                     <Empty description="Цагийн хувиар ороогүй байна" />
                  )}
               </div>
            ))}
         </Card>
         <Modal
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
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
         <Modal
            title="Цаг солих"
            open={isOpenChangeModal}
            onCancel={() => setIsOpenChangeModal(false)}
            onOk={() =>
               changeForm.validateFields().then((values) => {
                  onFinishChangeSlot(values);
               })
            }
            cancelText="Болих"
            okText="Цаг солих"
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
                  <DatePicker
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
                  <Radio.Group onChange={(e) => getSlots(e.target.value, 1)}>
                     {filteredSchedules?.map((schedule, index) => (
                        <Radio key={index} value={schedule.id}>
                           <span className="whitespace-pre-wrap">
                              <b>Өрөө:</b> {schedule.room?.roomNumber}
                              <b className="ml-2">Тасаг:</b> {schedule.structure?.name}
                              <b className="ml-2">Кабинет:</b> {schedule.cabinet?.name}
                              <b className="ml-2">Эмч:</b> {schedule.doctor?.firstName}
                           </span>
                        </Radio>
                     ))}
                  </Radio.Group>
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
                  <Select
                     className="w-full"
                     options={filteredSlots
                        ?.filter((slot) => slot.isActive)
                        ?.map((activeSlot) => ({
                           label: `${activeSlot.startTime} -> ${activeSlot.endTime}`,
                           value: activeSlot.id
                        }))}
                  />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
}
export default List;
