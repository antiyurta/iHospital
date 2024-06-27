import React, { useEffect, useState } from 'react';
import { Form, Select, Button, Slider, Card, Collapse, DatePicker, Row, Col, TimePicker } from 'antd';
import moment from 'moment';
import { formatNameForDoc, openNofi } from '@Comman/common';
import { Table } from 'react-bootstrap';
import { EditOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
//
import OrganizationEmployeeApi from '@ApiServices/organization/employee';
import OrganizationStructureApi from '@ApiServices/organization/structure';
import OrganizationRoomApi from '@ApiServices/organization/room';
import ReferenceSettingsApi from '@ApiServices/reference/settings';
import ReferenceDevicesApi from '@ApiServices/reference/devices';
import ScheduleApi from '@ApiServices/schedule';

const TimeFormat = 'HH:mm';
const Marks = {
   0: '0%',
   50: '50%',
   100: '100%'
};

function Index({ type }) {
   const [newScheduleDay, setNewScheduleDay] = useState(new Date());
   const [form] = Form.useForm();
   const [editMode, setEditMode] = useState(false);
   const [id, setId] = useState(Number);
   const [editWorkDate, setEditWorkDate] = useState([]);
   const [doctors, setDoctors] = useState([]);
   const [structures, setStructures] = useState([]);
   const [cabinets, setCabinets] = useState([]);
   const [inspectionTimes, setInspectionTimes] = useState([]);
   const [rooms, setRooms] = useState([]);
   const [deviceList, setDeviceList] = useState([]);

   const getDoctor = async (depId) => {
      await OrganizationEmployeeApi.getEmployee({
         params: {
            depId: depId
         }
      }).then(({ data: { response, success } }) => {
         if (success) {
            setDoctors(response.data);
         }
      });
   };
   const getStructures = async () => {
      await OrganizationStructureApi.get({
         params: {
            type: 2
         }
      }).then(({ data: { response, success } }) => {
         if (success) {
            setStructures(response.data);
         }
      });
   };
   const getCabinets = async (e) => {
      await OrganizationStructureApi.get({
         params: {
            type: 3,
            parentId: e
         }
      }).then(({ data: { response, success } }) => {
         if (success) {
            setCabinets(response.data);
         }
      });
   };
   const getInspectionTimes = async () => {
      await ReferenceSettingsApi.get({}).then(({ data: { response, success } }) => {
         if (success) {
            setInspectionTimes(response.data);
         }
      });
   };
   const getRooms = async () => {
      await OrganizationRoomApi.getByPageFilter({
         params: {
            isInpatient: false
         }
      }).then(({ data: { response, success } }) => {
         if (success) {
            setRooms(response.data);
         }
      });
   };
   const getDeviceList = async () => {
      await ReferenceDevicesApi.get({}).then(({ data: { response, success } }) => {
         if (success) {
            setDeviceList(response.data);
         }
      });
   };
   //
   const [days, setDays] = useState([]);
   const getFirstDayOfMonth = (year, month) => {
      return new Date(year, month, 1);
   };
   const getLastDayOfMonth = (year, month) => {
      return new Date(year, month + 1, 0);
   };
   const firstDayOfMonth = getFirstDayOfMonth(
      new Date(newScheduleDay).getFullYear(),
      new Date(newScheduleDay).getMonth()
   );
   const lastDayOfMonth = getLastDayOfMonth(
      new Date(newScheduleDay).getFullYear(),
      new Date(newScheduleDay).getMonth()
   );

   const getCurrentMonth = async (firstDayOfMonth, lastDayOfMonth) => {
      const year = firstDayOfMonth.getFullYear();
      const month = firstDayOfMonth.getMonth() + 1;
      const startDay = firstDayOfMonth.getDate();
      const endDay = lastDayOfMonth.getDate();
      await ScheduleApi.get({
         params: {
            type: type,
            startDate: moment(firstDayOfMonth).utcOffset('+0800').format('YYYY-MM-DD'),
            endDate: moment(lastDayOfMonth).utcOffset('+0800').format('YYYY-MM-DD')
         }
      }).then(({ data: { response, success } }) => {
         if (success) {
            const Ddays = [];
            for (let i = startDay; i <= endDay; i++) {
               const ddd = new Date(year + '-' + month + '-' + i);
               const data = getData(ddd, response.data);
               Ddays.push({
                  title: ddd,
                  schedule: data
               });
            }
            setDays(Ddays);
         }
      });
   };

   const getData = (value, data) => {
      return data.filter((item) => item.workDate.includes(moment(value).format('YYYY-MM-DD')));
   };

   const changeMonth = (value) => {
      const date = new Date(value);
      const dayd = getFirstDayOfMonth(date.getFullYear(), date.getMonth());
      setNewScheduleDay(dayd);
      const firstDayOfMonth = getFirstDayOfMonth(date.getFullYear(), date.getMonth());
      const lastDayOfMonth = getLastDayOfMonth(date.getFullYear(), date.getMonth());
      getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
   };

   const setSchedule = async (date, incomeValues) => {
      const newValues = {
         ...incomeValues,
         workDate: dayjs(date).format('YYYY-MM-DD HH:mm'),
         startTime: dayjs(incomeValues.startTime).format('HH:mm'),
         endTime: dayjs(incomeValues.endTime).format('HH:mm'),
         type: type
      };
      if (new Date(newValues.workDate).getDate() < new Date(newScheduleDay).getDate()) {
         openNofi('error', 'Амжилтгүй', 'Өнгөрсөн цаг дээр хувиар оруулах боломжгүй');
      } else {
         if (
            dayjs().isAfter(
               dayjs(newValues.workDate)
                  .set('hour', dayjs(newValues.startTime, 'hh:mm').get('hour'))
                  .set('minute', dayjs(newValues.startTime, 'hh:mm').get('minute'))
            )
         ) {
            openNofi('error', 'Амжилтгүй', 'Өнгөрсөн цаг дээр хувиар оруулах боломжгүй');
         } else {
            if (editMode) {
               await ScheduleApi.patchSchedule(id, newValues).then(({ data: { success } }) => {
                  if (success) {
                     openNofi('success', 'Цаг оруулах', 'Цаг оруулах амжилттай');
                     setEditMode(false);
                     getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
                     form.resetFields();
                  }
               });
            } else {
               await ScheduleApi.postSchedule(newValues).then(({ data: { success } }) => {
                  if (success) {
                     openNofi('success', 'Цаг оруулах', 'Цаг оруулах амжилттай');
                     getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
                  }
               });
            }
         }
      }
   };

   const editSchedule = (item) => {
      getDoctor();
      setEditWorkDate(item.workDate);
      setEditMode(true);
      setId(item.id);
      var arr = { ...item };
      const endTime = arr.endTime.split(':');
      const startTime = arr.startTime.split(':');
      arr.endTime = moment().set({
         hour: endTime[0],
         minute: endTime[1],
         second: endTime[2]
      });
      arr.startTime = moment().set({
         hour: startTime[0],
         minute: startTime[1],
         second: startTime[2]
      });
      form.setFieldsValue(arr);
   };

   useEffect(() => {
      getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
      getDeviceList();
      getStructures();
      getCabinets();
      getDoctor();
      getInspectionTimes();
      getRooms();
   }, [type]);

   return (
      <div className="flex flex-wrap">
         <div className="w-full md:w-full lg:w-2/5 p-1">
            <Card bordered={false} title={'Цаг оруулах'} className="criclebox tablespace mb-24">
               <Form layout="vertical" form={form} className="p-3">
                  <Row md={[15, 15]}>
                     {type === 3 && (
                        <Col span={24} className="p-1">
                           <Form.Item
                              label="Төхөөрөмж:"
                              name="deviceId"
                              rules={[
                                 {
                                    required: true,
                                    message: 'Заавал'
                                 }
                              ]}
                           >
                              <Select
                                 options={deviceList?.map((list) => ({
                                    label: list.name,
                                    value: list.id
                                 }))}
                              />
                           </Form.Item>
                        </Col>
                     )}
                     <Col span={12} className="p-1">
                        <Form.Item
                           label="Эхлэх цаг:"
                           name="startTime"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <TimePicker format={TimeFormat} />
                        </Form.Item>
                     </Col>
                     <Col span={12} className="p-1">
                        <Form.Item
                           label="Дуусах цаг:"
                           name="endTime"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <TimePicker format={TimeFormat} />
                        </Form.Item>
                     </Col>
                     <Col span={24} className="p-1">
                        <Form.Item
                           label="Тасаг:"
                           name="structureId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <Select
                              onChange={(e) => {
                                 form.setFieldValue('cabinetId', null);
                                 form.setFieldValue('doctorId', null);
                                 getCabinets(e);
                                 getDoctor(e);
                              }}
                              options={structures?.map((structure) => ({
                                 label: structure.name,
                                 value: structure.id
                              }))}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={24} className="p-1">
                        <Form.Item
                           label="Кабинет:"
                           name="cabinetId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <Select
                              options={cabinets?.map((cabinet) => ({
                                 label: cabinet.name,
                                 value: cabinet.id
                              }))}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={24} className="p-1">
                        <Form.Item
                           label={type === 2 ? 'Сувилагч сонгох:' : 'Эмч сонгох:'}
                           name="doctorId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <Select
                              options={doctors?.map((doctor) => ({
                                 label: formatNameForDoc(doctor?.lastName, doctor?.firstName),
                                 value: doctor.id
                              }))}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={12} className="p-1">
                        <Form.Item
                           label="Үзлэгийн цаг (Минут):"
                           name="settingsId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <Select
                              options={inspectionTimes?.map((time) => ({
                                 label: time.inspectionTime,
                                 value: time.id
                              }))}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={12} className="p-1">
                        <Form.Item
                           label="Өрөө:"
                           name="roomId"
                           rules={[
                              {
                                 required: true,
                                 message: 'Заавал'
                              }
                           ]}
                        >
                           <Select
                              options={rooms?.map((room) => ({
                                 label: room.roomNumber,
                                 value: room.id
                              }))}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={24} className="p-1">
                        <Form.Item label="Бүртгэлийн ажилтны бүртгэх хувь:" name="percent">
                           <Slider marks={Marks} />
                        </Form.Item>
                     </Col>
                     {editMode && (
                        <Col span={24} className="p-1">
                           <Button
                              type="primary"
                              icon={<EditOutlined />}
                              onClick={() => {
                                 form
                                    .validateFields()
                                    .then((values) => {
                                       console.log(values);
                                       setSchedule(editWorkDate, values);
                                    })
                                    .catch(() => {
                                       openNofi('warning', 'Цаг оруулах', 'Цаг оруулах хэсгийг бүрэн бөглөх');
                                    });
                              }}
                           >
                              Засах
                           </Button>
                        </Col>
                     )}
                  </Row>
               </Form>
            </Card>
         </div>
         <div
            className="w-full md:w-full lg:w-3/5 p-1"
            style={{
               height: 'calc(100vh - 100px)'
            }}
         >
            <Card bordered={false} className="criclebox tablespace mb-24">
               <div className="flex flex-wrap">
                  <div className="w-full m-2">
                     <DatePicker onChange={changeMonth} picker="month" />
                  </div>
                  <div
                     className="w-full overflow-auto"
                     style={{
                        height: 'calc(100vh - 150px)'
                     }}
                  >
                     <Collapse
                        accordion
                        collapsible="header"
                        className="m-2"
                        items={days?.map((day, index) => ({
                           key: index,
                           label: dayjs(day.title).format('YYYY-MM-DD'),
                           extra: (
                              <Button
                                 className="btn-add"
                                 onClick={() => {
                                    form.validateFields().then((values) => {
                                       setSchedule(day.title, values);
                                    });
                                 }}
                              >
                                 Нэмэх
                              </Button>
                           ),
                           children: (
                              <div className="table-responsive" id="style-8">
                                 <Table className="ant-border-space" style={{ width: '100%' }}>
                                    <thead className="ant-table-thead bg-slate-200">
                                       <tr>
                                          <th className="font-bold text-sm align-middle">Эхлэх цаг</th>
                                          <th className="font-bold text-sm align-middle">Дуусах цаг</th>
                                          <th className="font-bold text-sm align-middle">Тасаг</th>
                                          <th className="font-bold text-sm align-middle">Эмч</th>
                                          <th className="font-bold text-sm align-middle">Өрөө</th>
                                          <th className="font-bold text-sm align-middle">Бүртгэсэн</th>
                                          <th className="font-bold text-sm align-middle">Үйлдэл</th>
                                       </tr>
                                    </thead>
                                    <tbody className="ant-table-tbody p-0">
                                       {day.schedule?.map((item, index) => {
                                          return (
                                             <tr key={index} className="ant-table-row ant-table-row-level-0">
                                                <td className="ant-table-row-cell-break-word">{item?.startTime}</td>
                                                <td className="ant-table-row-cell-break-word">{item?.endTime}</td>
                                                <td className="ant-table-row-cell-break-word">
                                                   {item?.structure?.name}
                                                </td>
                                                <td className="ant-table-row-cell-break-word">
                                                   {item?.doctor?.firstName}
                                                </td>
                                                <td className="ant-table-row-cell-break-word">
                                                   {item?.room?.roomNumber}
                                                </td>
                                                <td className="ant-table-row-cell-break-word">{item?.authorId}</td>
                                                <td>
                                                   <EditOutlined
                                                      style={{
                                                         color: 'blue',
                                                         fontSize: '18px'
                                                      }}
                                                      onClick={() => editSchedule(item)}
                                                   />
                                                </td>
                                             </tr>
                                          );
                                       })}
                                    </tbody>
                                 </Table>
                              </div>
                           )
                        }))}
                     />
                  </div>
               </div>
            </Card>
         </div>
      </div>
   );
}
export default Index;
