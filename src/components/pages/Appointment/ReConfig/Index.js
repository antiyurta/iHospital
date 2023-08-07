import React, { useEffect, useState } from 'react';
import { Button, Collapse, Empty, Form, Input, Tabs } from 'antd';
import mn from 'antd/es/calendar/locale/mn_MN';
import { ClockCircleOutlined, DeleteOutlined, PlusOutlined, SearchOutlined, SwapOutlined } from '@ant-design/icons';
import moment from 'moment';
// components uud
import NewCard from '../../../Card/Card';
import {
   NewDatePicker,
   NewInput,
   NewOption,
   NewRadio,
   NewRadioGroup,
   NewSelect,
   NewTextArea
} from '../../../Input/Input';
// Services uud
import OrganizationStructureService from '../../../../services/organization/structure';
import OrganizationEmployeeService from '../../../../services/organization/employee';
import ScheduleService from '../../../../services/schedule';
import { NewColumn, NewColumnGroup, NewTable } from '../../../Table/Table';
import { getAge, getGender, openNofi } from '../../../comman';
import NewModal from '../../../Modal/Modal';

const { Panel } = Collapse;

function List({ type }) {
   const [filterForm] = Form.useForm();
   const [cancelForm] = Form.useForm();
   const [changeForm] = Form.useForm();
   const [structures, setStructures] = useState([]);
   const [doctors, setDoctors] = useState([]);
   const [schedules, setSchedules] = useState([]);
   const [filteredSchedules, setFilteredSchedules] = useState([]);
   const [filteredScheduleId, setFilteredScheduleId] = useState(Number);
   const [selectedSchedule, setSelectedSchedule] = useState('');
   const [slots, setSlots] = useState([]);
   const [filteredSlots, setFilteredSlots] = useState([]);
   const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
   const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);
   const [selectedSlotId, setSelectedSlotId] = useState(Number);
   //
   const getStructures = async () => {
      await OrganizationStructureService.get({
         params: {
            type: 2
         }
      }).then((response) => {
         setStructures(response.data.response.data);
      });
   };
   const getDoctor = async (value) => {
      await OrganizationEmployeeService.getEmployee({
         params: {
            depId: value
         }
      }).then((response) => {
         setDoctors(response.data.response.data);
      });
   };
   const selectDoctor = (value) => {
      console.log(value);
   };
   const getScheduleOnChange = async (date) => {
      await ScheduleService.get({
         params: {
            findOneDate: moment(date).format('YYYY-MM-DD'),
            structureId: filterForm.getFieldValue('structureId'),
            doctorId: filterForm.getFieldValue('doctorId'),
            type: type
         }
      }).then((response) => {
         if (response.data.response.data?.length === 0) {
            openNofi('info', 'Анхааруулга', 'Энэ өдөр, энэ эмч дээр цагийн хуваарь оруулаагүй байна');
         } else {
            setFilteredSchedules(response.data.response.data);
         }
      });
   };
   const getSlotById = async (e) => {
      setFilteredScheduleId(e);
      getSlots(e.target.value, 1);
   };
   const onChangePanel = (key) => {
      setSelectedSchedule(key);
   };
   const onFinish = async (values) => {
      await ScheduleService.get({
         params: {
            findOneDate: moment(values.date).format('YYYY-MM-DD'),
            structureId: values.structureId,
            doctorId: values.doctorId,
            type: type
         }
      }).then((response) => {
         setSchedules(response.data.response.data);
      });
   };
   const onFInishChangeSlot = async (values) => {
      console.log('=======>', values);
   };
   const onFinishCancelSlot = async (values) => {
      await ScheduleService.postReturnSlot({
         description: values.desc,
         slotId: selectedSlotId
      }).then((response) => {
         if (response.status === 201) {
            setIsOpenCancelModal(false);
            getSlots();
         }
      });
   };
   const getSlots = async (scheduleId, state) => {
      // 0 bol huwiar setleh
      // 1 bol tsag solih ued huwiar setleh
      if (state === 0) {
         setSlots([]);
      } else {
         setFilteredSlots([]);
      }
      const params = {
         scheduleId: scheduleId
      };
      if (selectedSchedule) {
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
         } else {
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
   const changeSlot = (id) => {
      changeForm.resetFields();
      setSelectedSlotId(id);
      setIsOpenChangeModal(true);
   };
   const cancelSlot = (id) => {
      cancelForm.resetFields();
      setSelectedSlotId(id);
      setIsOpenCancelModal(true);
   };
   //
   useEffect(() => {
      getStructures();
   }, [type]);
   useEffect(() => {
      selectedSchedule && getSlots(selectedSchedule, 0);
   }, [selectedSchedule]);
   return (
      <>
         <div className="flex flex-col gap-4">
            <NewCard title="Цагийн хуваарь">
               <Form form={filterForm}>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
                     <Form.Item
                        label="Тасаг"
                        name="structureId"
                        className="mb-0"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <NewSelect allowClear onChange={getDoctor} className="w-full" placeholder="Тасаг сонгох">
                           {structures.map((structure, index) => {
                              return (
                                 <NewOption key={index} value={structure.id}>
                                    {structure.name}
                                 </NewOption>
                              );
                           })}
                        </NewSelect>
                     </Form.Item>
                     <Form.Item
                        label="Эмч"
                        name="doctorId"
                        className="mb-0"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <NewSelect allowClear className="w-full" onChange={selectDoctor} placeholder="Эмч сонгох">
                           {doctors.map((doctor, index) => {
                              return (
                                 <NewOption key={index} value={doctor.id}>
                                    {doctor.firstName}
                                 </NewOption>
                              );
                           })}
                        </NewSelect>
                     </Form.Item>
                     <Form.Item
                        className="mb-0"
                        label="Өдөр"
                        name="date"
                        rules={[
                           {
                              required: true,
                              message: 'Заавал'
                           }
                        ]}
                     >
                        <NewDatePicker style={{ minHeight: 32 }} locale={mn} format={'YYYY/MM/DD'} />
                     </Form.Item>
                     <Button
                        style={{
                           minHeight: 32
                        }}
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={() => filterForm.validateFields().then((values) => onFinish(values))}
                     >
                        Шүүх
                     </Button>
                  </div>
               </Form>
            </NewCard>
            <NewCard title="">
               <div className="pt-[10px]">
                  {schedules?.length > 0 ? (
                     <Collapse onChange={onChangePanel} accordion>
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
                                    <NewColumn title="Статус" />
                                    <NewColumn
                                       title="Захиалсан огноо"
                                       dataIndex={'updatedAt'}
                                       render={(text, row) => {
                                          if (!row.isActive) {
                                             return moment(text).format('YYYY/MM/DD HH:mm');
                                          }
                                       }}
                                    />
                                    <NewColumn title="Ирсэн цаг" />
                                    <NewColumn
                                       title="Бүртгэсэн"
                                       render={(_, row) => {
                                          if (!row.isActive) {
                                             return row.createdLastName?.substring(0, 1) + '.' + row.createdFirstName;
                                          }
                                       }}
                                    />
                                    <NewColumnGroup title="Үйлдэл">
                                       <NewColumn
                                          title="Цаг захиалах"
                                          dataIndex={'isActive'}
                                          render={(text) => {
                                             if (text) {
                                                return (
                                                   <Button
                                                      icon={<PlusOutlined />}
                                                      className="bg-green-500 text-white"
                                                   />
                                                );
                                             }
                                          }}
                                       />
                                       <NewColumn
                                          title="Цаг солих"
                                          dataIndex={'isActive'}
                                          render={(text, row) => {
                                             if (!text) {
                                                return (
                                                   <Button
                                                      onClick={() => changeSlot(row.id)}
                                                      icon={<SwapOutlined />}
                                                      className="bg-yellow-500 text-black"
                                                   />
                                                );
                                             }
                                          }}
                                       />
                                       <NewColumn
                                          title="Цаг\n устгах"
                                          dataIndex={'isActive'}
                                          render={(text, row) => {
                                             if (!text) {
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
         </div>
         <NewModal
            title="Цуцлах болсон шалтгаан"
            open={isOpenCancelModal}
            onCancel={() => setIsOpenCancelModal(false)}
            onOk={() =>
               cancelForm.validateFields().then((values) => {
                  onFinishCancelSlot(values);
               })
            }
         >
            <Form form={cancelForm}>
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
                  onFInishChangeSlot(values);
               })
            }
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
                  <NewRadioGroup onChange={(e) => getSlotById(e)}>
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

function Index() {
   const items = [
      {
         key: 1,
         label: `Эмчийн хуваарь`,
         children: <List type={1} />
      },
      {
         key: 2,
         label: `Эмчилгээний хуваарь`,
         children: <List type={2} />
      },
      {
         key: 3,
         label: `Оношилгооны хуваарь`,
         children: <List type={3} />
      }
   ];
   return <Tabs type="card" destroyInactiveTabPane={true} items={items} />;
}
export default Index;
