import React from 'react';
import {
   Alert,
   Button,
   Card,
   Collapse,
   ConfigProvider,
   DatePicker,
   Descriptions,
   Empty,
   Form,
   Modal,
   Radio,
   Result,
   Select,
   Space,
   Steps,
   Switch
} from 'antd';
import AntTable from 'antd/es/table';
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentInsurance, selectCurrentToken } from '../../../../features/authReducer';
import { DefaultPost, DefualtGet, Get, localMn, openNofi, Patch, Post, ScrollRef } from '../../../comman';
import mn from 'antd/es/calendar/locale/mn_MN';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { ClockCircleOutlined, CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
//
import Finger from '../../../../features/finger';
//
const { Option, OptGroup } = Select;
const { Panel } = Collapse;
const { Step } = Steps;
function Appointment({ selectedPatient, type, invoiceData, handleClick, prevAppointmentId }) {
   const [today] = useState(moment(new Date()));
   const token = useSelector(selectCurrentToken);
   const isInsurance = useSelector(selectCurrentInsurance);
   console.log('=====================>asdasd', isInsurance);
   const config = {
      headers: {},
      params: {}
   };
   const scrollRef = useRef();
   const [cardLoading, setCardLoading] = useState(false);
   const [filterForm] = Form.useForm();
   const [selectedDoctor, setSelectedDoctor] = useState();
   const [selectedDep, setSelectedDep] = useState();
   const [appointmentModal, setAppointmentModal] = useState(false);
   const [doctors, setDoctors] = useState([]);
   const [structures, setStructures] = useState([]);
   const [slots, setSlots] = useState([]);
   const [qwe, setQwe] = useState({});
   const [data, setData] = useState({});
   const [date, setDate] = useState('');
   const [schedules, setSchedules] = useState([]);
   const [selectedSchedule, setSelectedSchedule] = useState('');
   const [isUrgent, setIsUrgent] = useState(false);
   const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   //
   const [isLoadingCheckPatientInsurance, setIsLoadingCheckPatientInsurance] = useState(false);
   const [stateInsurance, setStateInsurance] = useState(Boolean);
   const [insuranceService, setInsuranceService] = useState([]);
   const [isSent, setIsSent] = useState(false);
   const [notInsuranceInfo, setNotInsuranceInfo] = useState([]);
   const [reasonComming, setReasonComming] = useState(null);
   //
   const orderAppointment = async (type, desc, value) => {
      setIsSent(false);
      if (type) {
         setQwe(desc);
         setIsUrgent(false);
         if (selectedPatient.length === 0) {
            openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
         } else if (!selectedDoctor) {
            openNofi('error', 'Анхааруулга', 'Эмч сонгоогүй байна');
         } else {
            setData(value);
            setAppointmentModal(true);
         }
      } else {
         setQwe(desc);
         setIsUrgent(true);
         if (selectedPatient.length === 0) {
            openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
         } else {
            setData(value);
            setAppointmentModal(true);
         }
      }
   };
   const getDoctor = async (value) => {
      setSelectedDep(structures.filter((e) => e['id'] === value));
      config.params.depId = value;
      config.params.registerNumber = null;
      config.params.type = null;
      const response = await Get('organization/employee', token, config);
      if (response.data.length != 0) {
         setDoctors(response.data);
      } else {
         setDoctors([]);
      }
   };
   const selectDoctor = (value) => {
      const selectedDoctor = doctors.filter((e) => e.id === value);
      setSelectedDoctor(selectedDoctor[0]);
   };
   const changeDate = async (value) => {
      setDate(value);
      if (value) {
         const date = moment(value).format('YYYY-MM-DD');
         config.params.findOneDate = date;
         config.params.type = type;
         const response = await Get('schedule', token, config);
         setSchedules(response.data);
      }
   };
   const onChangePanel = (key) => {
      setSelectedSchedule(key);
   };
   const getStructures = async () => {
      config.params.type = 2;
      const response = await Get('organization/structure', token, config);
      if (response.data.length != 0) {
         setStructures(response.data);
      }
   };
   const getSlots = async () => {
      setSlots([]);
      config.params.scheduleId = selectedSchedule;
      if (selectedSchedule) {
         if (type === 3) {
            const response = await Get('device/slot', token, config);
            setSlots(response.data);
         } else if (type === 2) {
            const response = await Get('treatment/slot', token, config);
            setSlots(response.data);
         } else {
            const response = await Get('slot', token, config);
            setSlots(response.data);
         }
      }
   };
   const getdd = async () => {
      setIsConfirmLoading(true);
      if (type === 2 || type === 3) {
         data.type = invoiceData.type;
         const response = await Patch('service-request/' + invoiceData.invoiceId, token, config, data);
         if (response === 200) {
            setAppointmentModal(false);
            handleClick(true, invoiceData.invoiceId);
            getSlots();
         }
      } else {
         data.type = 3;
         data.status = 1;
         data.isInsurance = stateInsurance;
         data.appointmentWorkDate = filterForm.getFieldValue('date');
         data.appointmentId = prevAppointmentId;
         config.params = {};
         const response = await Post('appointment', token, config, data);
         if (response === 201) {
            setAppointmentModal(false);
            changeDate(date);
            getSlots();
         }
      }
      setIsConfirmLoading(false);
   };
   const urgentRequest = async () => {
      if (reasonComming != null) {
         setIsConfirmLoading(true);
         config.params = {};
         data.type = 1;
         data.status = 1;
         data.isInsurance = stateInsurance;
         data.appointmentWorkDate = new Date();
         data.reasonComming = reasonComming;
         const response = await Post('appointment', token, config, data);
         if (response === 201) {
            setAppointmentModal(false);
         }
         setIsConfirmLoading(false);
      } else {
         openNofi('warning', 'Анхааруулга', 'Хэрхэн ирсэн бөглөх');
      }
   };
   const onFinish = () => {
      filterForm
         .validateFields()
         .then(async (values) => {
            const date = moment(values.date).format('YYYY-MM-DD');
            config.params.findOneDate = date;
            config.params.structureId = values.structureId;
            config.params.doctorId = values.doctorId;
            config.params.type = type;
            const response = await Get('schedule', token, config);
            setSchedules(response.data);
         })
         .catch((err) => {});
   };
   const getInsuranceService = async () => {
      const conf = {
         headers: {},
         params: {
            usageType: 'OUT'
         }
      };
      const response = await DefualtGet('insurance/hics-service-group', token, conf);
      setInsuranceService(response.data);
   };
   const checkPatientInsurance = async (values) => {
      setIsLoadingCheckPatientInsurance(true);
      console.log(values);
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         regNo: selectedPatient.registerNumber,
         isChild: selectedPatient.isChild,
         fingerPrint: values.fingerPrint
      };
      console.log(data);
      await axios
         .post(process.env.REACT_APP_DEV_URL + 'health-insurance/citizen-info', data, {
            headers: {
               'X-API-KEY': process.env.REACT_APP_API_KEY,
               Authorization: `Bearer ${token}`
            }
         })
         .then((res) => {
            if (res.data?.isChance) {
               openNofi('success', 'Амжилттай', 'Үйлчүүлэгч даатгалтай байна');
               setIsSent(false);
            } else {
               setNotInsuranceInfo(res.data?.notInsuranceInfo);
               setIsSent(true);
               openNofi('warning', 'Анхааруулга', 'Үйлчүүлэгч даатгалгүй байна');
            }
            // setStateInsurance(res.data?.isChance);
         })
         .catch((err) => {
            console.log(err);
         })
         .finally(() => {
            setIsLoadingCheckPatientInsurance(false);
         });
   };
   useEffect(() => {
      ScrollRef(scrollRef);
      getStructures();
      if (isInsurance) {
         getInsuranceService();
      }
   }, [selectedPatient]);
   useEffect(() => {
      selectedSchedule && getSlots(0);
   }, [selectedSchedule]);
   return (
      <>
         <Modal
            title="Цаг захиалах"
            open={appointmentModal}
            okButtonProps={{
               disabled: isSent
            }}
            onOk={() => {
               isUrgent ? urgentRequest() : getdd();
            }}
            onCancel={() => {
               setAppointmentModal(false);
               setStateInsurance(false);
            }}
            confirmLoading={isConfirmLoading}
            cancelText="Болих"
            okText="Хадгалах"
            width={'40%'}
         >
            <div className="flex flex-col gap-3">
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <Descriptions layout="vertical">
                        <Descriptions.Item label="Кабинет">{qwe.structure}</Descriptions.Item>
                        <Descriptions.Item label="Эмч">{qwe.doctor?.firstName}</Descriptions.Item>
                        <Descriptions.Item label="Үйлчүүлэгч">
                           {selectedPatient.lastName + ' ' + selectedPatient.firstName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Цаг">
                           <div className="inline-flex flex-row items-center">
                              <span>{qwe.time?.start?.substr(0, 5)}</span>
                              <ClockCircleOutlined className="mx-1.5" />
                              <span>{qwe.time?.end?.substr(0, 5)}</span>
                           </div>
                        </Descriptions.Item>
                        <Descriptions.Item label="Өрөөнийн дугаар">{qwe.roomNumber}</Descriptions.Item>
                     </Descriptions>
                  </div>
               </div>
               {isUrgent ? (
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flow-root">
                           <div className="float-left">
                              <p
                                 style={{
                                    fontWeight: 600
                                 }}
                              >
                                 Яаж ирсэн
                              </p>
                           </div>
                           <div className="float-right">
                              <Radio.Group value={reasonComming} onChange={(e) => setReasonComming(e.target.value)}>
                                 <Radio value={1}>Өөрөө</Radio>
                                 <Radio value={2}>Түргэн тусламжаар</Radio>
                                 <Radio value={3}>Бусад</Radio>
                              </Radio.Group>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : null}
               {isInsurance ? (
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <div className="flow-root">
                           <div className="float-left">
                              <p
                                 style={{
                                    fontWeight: 600
                                 }}
                              >
                                 Үйлчүүлэгч даатгалтай эсэх
                              </p>
                           </div>
                           <div className="float-right">
                              <Switch
                                 className="bg-[#4a7fc1]"
                                 checkedChildren="Тийм"
                                 unCheckedChildren="Үгүй"
                                 defaultChecked={false}
                                 checked={stateInsurance}
                                 onChange={(e) => {
                                    setStateInsurance(e);
                                    setIsSent(e);
                                    setNotInsuranceInfo([]);
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : null}
               {stateInsurance && (
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <ConfigProvider locale={localMn()}>
                           <AntTable
                              size="small"
                              rowKey={'id'}
                              bordered
                              loading={isLoadingCheckPatientInsurance}
                              locale={{
                                 emptyText: <Result title="Даатгалын төлөлтын мэдээлэл" />
                              }}
                              columns={[
                                 {
                                    title: 'Он',
                                    dataIndex: 'pyear'
                                 },
                                 {
                                    title: 'Сар',
                                    dataIndex: 'pmonth'
                                 },
                                 {
                                    title: 'Төлсөн эсэх',
                                    render: () => {
                                       return (
                                          <CloseCircleOutlined
                                             style={{
                                                color: 'red'
                                             }}
                                          />
                                       );
                                    }
                                 }
                              ]}
                              dataSource={notInsuranceInfo}
                           />
                        </ConfigProvider>
                        <div className="flow-root">
                           <div className="pt-3 float-right">
                              {/* <Button
                                 loading={isLoadingCheckPatientInsurance}
                                 type="primary"
                                 // onClick={() => checkPatientInsurance('daad')}
                              >
                                 Даатгал шалгах
                              </Button> */}
                              <Finger
                                 text="Даатгал шалгах"
                                 isDanger={false}
                                 isFinger={true}
                                 steps={[
                                    {
                                       title: 'Өвтний',
                                       path: 'fingerPrint'
                                    }
                                 ]}
                                 isPatientSheet={false}
                                 handleClick={checkPatientInsurance}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </Modal>
         <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Цаг захиалга</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
               paddingTop: 0,
               paddingLeft: 10,
               paddingRight: 10,
               paddingBottom: 10,
               display: 'flex',
               flexDirection: 'column',
               gap: '12px'
            }}
            loading={cardLoading}
            extra={
               <div className="flex flex-row gap-3">
                  {type != 2 && type != 3 && (
                     <Button
                        className="bg-red-500"
                        type="danger"
                        onClick={() => {
                           filterForm
                              .validateFields()
                              .then((values) => {
                                 orderAppointment(
                                    false,
                                    {
                                       roomNumber: '',
                                       structure: selectedDep[0]?.name,
                                       doctor: selectedDoctor,
                                       time: {
                                          start: moment(today).format('HH:mm'),
                                          end: moment(today).format('HH:mm')
                                       }
                                    },
                                    {
                                       slotId: null,
                                       patientId: selectedPatient.id,
                                       doctorId: selectedDoctor.id,
                                       cabinetId: selectedDep[0]?.id
                                    }
                                 );
                              })
                              .catch((err) => {
                                 openNofi('warning', 'Алдаа', 'Яаралтай үед тасаг эмч сонгох');
                              });
                        }}
                     >
                        Яаралтай
                     </Button>
                  )}
                  <Alert className="h-6" message={`Өнөөдөр: ${today?.format('YYYY-MM-DD')}`} type="success" />
               </div>
            }
         >
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
                     <Select allowClear className="w-full" onChange={getDoctor} placeholder="Тасаг сонгох">
                        {structures.map((structure, index) => {
                           return (
                              <Option key={index} value={structure.id}>
                                 {structure.name}
                              </Option>
                           );
                        })}
                     </Select>
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
                     <Select allowClear className="w-full" onChange={selectDoctor} placeholder="Эмч сонгох">
                        {doctors.map((doctor, index) => {
                           return (
                              <Option key={index} value={doctor.id}>
                                 {doctor.firstName}
                              </Option>
                           );
                        })}
                     </Select>
                  </Form.Item>
                  <Form.Item className="mb-0" label="Өдөр" name="date">
                     <DatePicker style={{ minHeight: 32 }} onChange={changeDate} locale={mn} format={'YYYY/MM/DD'} />
                  </Form.Item>
                  <Button
                     style={{
                        minHeight: 32
                     }}
                     type="primary"
                     icon={<SearchOutlined />}
                     onClick={() => onFinish()}
                  >
                     Шүүх
                  </Button>
               </div>
            </Form>
            <div className="mt-2">
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
                              <div className="table-responsive" id="style-8" ref={scrollRef}>
                                 <Table className="ant-border-space" style={{ width: '100%' }}>
                                    <thead className="ant-table-thead">
                                       <tr>
                                          <th>Цаг</th>
                                          <th>Овог</th>
                                          <th>Нас </th>
                                          <th>Хүйс</th>
                                          <th>Регистрийн №</th>
                                          <th>Статус</th>
                                          <th>Утас</th>
                                          <th>Захиалсан огноо</th>
                                          <th>Ирсэн цаг</th>
                                          <th>Бүртгэсэн</th>
                                       </tr>
                                    </thead>
                                    <tbody className="ant-table-tbody">
                                       {slots.map((slot, idx) => {
                                          return (
                                             <tr key={idx}>
                                                <td>
                                                   <div className="inline-flex flex-row items-center">
                                                      <span>{slot.startTime?.substr(0, 5)}</span>
                                                      <ClockCircleOutlined className="mx-1.5" />
                                                      <span>{slot.endTime?.substr(0, 5)}</span>
                                                   </div>
                                                </td>
                                                {slot.isActive ? (
                                                   <td colSpan={9} className="text-center">
                                                      <Button
                                                         className="bg-green-500 text-white"
                                                         onClick={() =>
                                                            orderAppointment(
                                                               true,
                                                               {
                                                                  roomNumber: schedule.room.roomNumber,
                                                                  structure: schedule.structure.name,
                                                                  doctor: schedule.doctor,
                                                                  time: {
                                                                     start: slot.startTime,
                                                                     end: slot.endTime
                                                                  }
                                                               },
                                                               {
                                                                  slotId: slot.id,
                                                                  patientId: selectedPatient.id,
                                                                  doctorId: schedule.doctorId,
                                                                  cabinetId: schedule.cabinetId
                                                               }
                                                            )
                                                         }
                                                      >
                                                         Цаг захиалах
                                                      </Button>
                                                   </td>
                                                ) : (
                                                   <>
                                                      <td className="text-center">{slot.patient?.lastName}</td>
                                                      <td className="text-center">{slot.patient?.firstName}</td>
                                                      <td className="text-center">{slot.patient?.age}</td>
                                                      <td className="text-center">{slot.patient?.registerNumber}</td>
                                                      <td className="text-center"></td>
                                                      <td className="text-center">{slot.patient?.phoneNo}</td>
                                                      <td>{moment(slot.updatedAt).format('YYYY-MM-DD HH:mm')}</td>
                                                      <td></td>
                                                      <td></td>
                                                   </>
                                                )}
                                             </tr>
                                          );
                                       })}
                                    </tbody>
                                 </Table>
                              </div>
                           </Panel>
                        );
                     })}
                  </Collapse>
               ) : (
                  <Empty description="Цагийн хувиар ороогүй байна" />
               )}
            </div>
         </Card>
      </>
   );
}
export default Appointment;
