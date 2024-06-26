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
import { formatNameForDoc, getAge, openNofi } from '@Comman/common';
const { Panel } = Collapse;
const { TextArea } = Input;
//Utils
import { getGender } from '@Utils/config/xypField';
import { AppointmentStatus } from './appointment-enum';
//service uud
import requestApi from '@ApiServices/service/service';
import ScheduleService from '../../../services/schedule';
import appointmentApi from '@ApiServices/appointment/api-appointment-service';

const columnName = {
   1: 'appointment',
   2: 'treatmentRequests',
   3: 'xrayRequest'
};

const apiMapGet = {
   1: ScheduleService.getDoctorSlot,
   2: ScheduleService.getTreatmentSlot,
   3: ScheduleService.getDeviceSlot
};

const apiMapPatch = {
   1: appointmentApi.patchAppointment,
   2: requestApi.patchTreatmentRequest,
   3: requestApi.patchXrayRequest
};

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
   const [isLoadingSlot, setLoadingSlot] = useState(false);
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
      try {
         const selectedApi = apiMapPatch[type];
         if (!selectedApi) throw new Error('Unknown service type');
         await selectedApi(selectedSlot?.[columnName[type]].id, {
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
      } catch (error) {
         message.error(error.message || 'An error occurred');
      }
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
      try {
         const selectedApi = apiMapPatch[type];
         if (!selectedApi) throw new Error('Unknown service type');
         await selectedApi(selectedSlot?.[columnName[type]].id, {
            status: AppointmentStatus.SystemRefund,
            slotId: null,
            description: values.description
         })
            .then((response) => {
               if (response.status === 200) {
                  message.success('Амжилттай цаг устгалаа.');
               } else {
                  message.warn('Алдаатай хүсэлт');
               }
            })
            .finally(() => {
               setIsOpenCancelModal(false);
               getSlots(selectedScheduleId, 0);
               setIsLoadingCancelLoading(false);
            });
      } catch (error) {
         message.error(error.message || 'An error occurred');
      }
   };
   // solih schedule awcirah
   const getScheduleOnChange = async (date) => {
      if (date) {
         await ScheduleService.get({
            params: {
               findOneDate: dayjs(date).format('YYYY-MM-DD'),
               doctorId: selectedSlot?.[columnName[type]].doctorId,
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
   /** slot awcirah */
   const getSlots = async (scheduleId, state) => {
      // 0 bol huwiar setleh
      // 1 bol tsag solih ued huwiar setleh
      setLoadingSlot(true);
      if (state === 0) {
         setSlots([]); // engiin tsag shuurdeh
      } else {
         setFilteredSlots([]); // tsag solih ued second desktop iin tsag shuurdeh
      }
      if (scheduleId) {
         try {
            const selectedApi = apiMapGet[type];
            if (!selectedApi) throw new Error('Unknown service type');
            await selectedApi({
               params: {
                  scheduleId
               }
            }).then(({ data: { response } }) => {
               if (state === 0) {
                  setSlots(response.data);
               } else {
                  setFilteredSlots(response.data);
               }
            });
            setLoadingSlot(false);
         } catch (error) {
            message.error(error.message || 'An error occurred');
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
            styles={{
               body: {
                  padding: 10,
                  overflow: 'auto',
                  height: 'calc(100vh - 360px)'
               }
            }}
         >
            {Object.entries(dd)?.length > 0 ? (
               <>
                  {Object.entries(dd)?.map(([key, value], index) => (
                     <div key={index}>
                        <Divider orientation="left">{key}</Divider>
                        {value?.length > 0 ? (
                           <Collapse
                              accordion
                              onChange={(key) => {
                                 console.log(key);
                                 if (key?.length > 0) {
                                    setSelectedScheduleId(Number(key[0]));
                                 }
                              }}
                              items={value?.map((schedule) => ({
                                 key: schedule.id,
                                 label: (
                                    <div className="flex flex-row gap-2">
                                       <b>Өрөө:</b> {schedule.room?.roomNumber}
                                       <b>Тасаг:</b> {schedule.structure?.name}
                                       <b>Кабинет:</b> {schedule.cabinet?.name}
                                       <b>Эмч:</b> {schedule.doctor?.firstName}
                                    </div>
                                 ),
                                 children: (
                                    <Table
                                       rowKey="id"
                                       bordered
                                       loading={isLoadingSlot}
                                       columns={[
                                          {
                                             title: 'Цаг',
                                             width: 50,
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
                                             dataIndex: [`${columnName[type]}`, 'patient'],
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
                                             dataIndex: [`${columnName[type]}`, 'patient', 'registerNumber'],
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
                                             dataIndex: [`${columnName[type]}`, 'patient', 'gender'],
                                             render: (gender) => {
                                                return getGender(gender);
                                             }
                                          },
                                          {
                                             title: 'Статус',
                                             dataIndex: 'slotStatus',
                                             render: (slotStatus, row) => {
                                                if (row?.[columnName[type]]) {
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
                                             dataIndex: [`${columnName[type]}`, 'createdAt'],
                                             render: (createdAt, row) => {
                                                if (row?.[columnName[type]]) {
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
                                                   render: (_, row) => {
                                                      if (isExtraGrud.isCreate && !row?.[columnName[type]]) {
                                                         return (
                                                            <Button
                                                               onClick={() => {
                                                                  if (selectedPatient.id) {
                                                                     orderAppointment(
                                                                        {
                                                                           isUrgent: false,
                                                                           roomNumber: schedule.room.roomNumber,
                                                                           structureName: schedule.structure.name,
                                                                           time: {
                                                                              start: row.startTime,
                                                                              end: row.endTime
                                                                           },
                                                                           slotId: row.id,
                                                                           cabinetId: schedule.cabinetId,
                                                                           appointmentWorkDate: key,
                                                                           schedule: schedule
                                                                        },
                                                                        false
                                                                     );
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
                                                   render: (_, row) => {
                                                      if (
                                                         isExtraGrud.isChange &&
                                                         row?.[columnName[type]] &&
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
                                                   render: (_, row) => {
                                                      if (
                                                         isExtraGrud.isDelete &&
                                                         row?.[columnName[type]] &&
                                                         row.slotStatus === 0
                                                      ) {
                                                         return (
                                                            <Button
                                                               danger
                                                               onClick={() => cancelSlot(row)}
                                                               icon={<DeleteOutlined />}
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
                                 )
                              }))}
                           />
                        ) : (
                           <Empty description="Цагийн хувиар ороогүй байна" />
                        )}
                     </div>
                  ))}
               </>
            ) : (
               <Empty description="Хуваарь байхгүй" />
            )}
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
                        ?.filter((slot) => !slot?.[columnName[type]])
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
