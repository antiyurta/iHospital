import React, { useEffect, useState } from 'react';
import moment from 'moment';
import mn from 'antd/es/calendar/locale/mn_MN';
import { Alert, Button, Descriptions, Form, Switch } from 'antd';
import { ClockCircleOutlined, CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectCurrentInsurance } from '../../../features/authReducer';

// components
import List from './List';
import NewCard from '../../Card/Card';
import { NewDatePicker, NewOption, NewRadio, NewRadioGroup, NewSelect } from '../../Input/Input';
import { openNofi } from '../../comman';
import NewModal from '../../Modal/Modal';
import { NewColumn, NewTable } from '../../Table/Table';
import Finger from '../../../features/finger';

//service
import OrganizationEmployeeService from '../../../services/organization/employee';
import OrganizationStructureService from '../../../services/organization/structure';
import ScheduleService from '../../../services/schedule';
import HealtInsuranceService from '../../../services/healt-insurance/healtInsurance';
import AppointmentService from '../../../services/appointment/api-appointment-service';
import serviceRequest from '../../../services/serviceRequest';

function Index(props) {
   const { selectedPatient, type, invoiceData, handleClick, prevAppointmentId, isExtraGrud } = props;
   const isInsurance = useSelector(selectCurrentInsurance);
   const today = new Date();
   const [selectedDate, setSelectedDate] = useState('');
   const [filterForm] = Form.useForm();
   const [structures, setStructures] = useState([]);
   const [doctors, setDoctors] = useState([]);
   const [selectedDoctor, setSelectedDoctor] = useState({});
   const [schedules, setSchedules] = useState([]);
   const [isUrgent, setIsUrgent] = useState(false);
   const [selectedInfo, setSelectedInfo] = useState({});
   const [appointmentModal, setAppointmentModal] = useState(false);
   const [isConfirmLoading, setIsConfirmLoading] = useState(false);
   const [selectedDep, setSelectedDep] = useState(Number);
   const [getIsSlot, setGetIsSlot] = useState({
      state: false,
      slotType: 0
   });
   // daatgaltai hamaraaltai
   const [isLoadingCheckPatientInsurance, setIsLoadingCheckPatientInsurance] = useState(false);
   const [reasonComming, setReasonComming] = useState(null);
   const [stateInsurance, setStateInsurance] = useState(Boolean);
   const [isSent, setIsSent] = useState(false);
   const [notInsuranceInfo, setNotInsuranceInfo] = useState([]);
   // tsahialga hiih uildel
   const orderAppointment = (info) => {
      setIsSent(false);
      setIsUrgent(info.isUrgent);
      setSelectedInfo(info);
      setAppointmentModal(true);
   };
   // tasagt hamaaraltai emch awchirah
   const getDoctor = async (value) => {
      setSelectedDep(structures.find((e) => e['id'] === value));
      console.log(structures.find((e) => e['id'] === value));
      await OrganizationEmployeeService.getEmployee({
         params: {
            depId: value
         }
      }).then((response) => {
         setDoctors(response.data.response.data);
      });
   };
   // buh tasag awcirah
   const getStructures = async () => {
      await OrganizationStructureService.get({
         params: {
            type: 2
         }
      }).then((response) => {
         setStructures(response.data.response.data);
      });
   };
   // emch songoh
   const selectDoctor = (doctorId) => {
      setSelectedDoctor(doctors.find((e) => e.id === doctorId));
      console.log(doctors.find((e) => e.id === doctorId));
   };
   // filter engiin ued schedule awcirah
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
   // irgen deer daatgal shalgah
   const checkPatientInsurance = async (values) => {
      setIsLoadingCheckPatientInsurance(true);
      await HealtInsuranceService.postCitizenInfo({
         regNo: selectedPatient.registerNumber,
         isChild: selectedPatient.isChild,
         // fingerPrint: values.fingerPrint
         fingerPrint: 'test'
      })
         .then((response) => {
            if (response.data?.isChance) {
               openNofi('success', 'Амжилттай', 'Үйлчүүлэгч даатгалтай байна');
               setIsSent(false);
            } else {
               setNotInsuranceInfo(response.data?.notInsuranceInfo);
               setIsSent(true);
               openNofi('warning', 'Анхааруулга', 'Үйлчүүлэгч даатгалгүй байна');
            }
         })
         .finally(() => {
            setIsLoadingCheckPatientInsurance(false);
         });
   };
   // yaraltai tsag zahialga
   const urgentRequest = async () => {
      if (reasonComming != null) {
         setIsConfirmLoading(true);
         await AppointmentService.postAppointment({
            ...selectedInfo,
            doctorId: selectedDoctor.id,
            patientId: selectedPatient.id,
            type: 1,
            status: 1,
            isInsurance: stateInsurance,
            appointmentWorkDate: new Date(),
            reasonComming: reasonComming
         })
            .then((response) => {
               if (response.status === 201) {
                  setAppointmentModal(false);
               }
            })
            .finally(() => {
               setIsConfirmLoading(false);
            });
      } else {
         openNofi('warning', 'Анхааруулга', 'Хэрхэн ирсэн бөглөх');
      }
   };
   // engin tsag zahialga
   const createAppointment = async () => {
      setIsConfirmLoading(true);
      setGetIsSlot({ state: false, slotType: 0 });
      if (type === 2 || type === 3) {
         await serviceRequest
            .patch(invoiceData.invoiceId, {
               ...selectedInfo,
               doctorId: selectedDoctor.id,
               patientId: selectedPatient.id,
               type: invoiceData.type
            })
            .then((response) => {
               console.log(response);
               if (response.status === 200) {
                  setAppointmentModal(false);
                  handleClick(true, invoiceData.invoiceId);
                  setGetIsSlot({ state: true, slotType: 0 });
               }
            });
      } else {
         await AppointmentService.postAppointment({
            ...selectedInfo,
            doctorId: selectedDoctor.id,
            patientId: selectedPatient.id,
            type: 3,
            status: 1,
            isInsurance: stateInsurance,
            appointmentWorkDate: filterForm.getFieldValue('date'),
            appointmentId: prevAppointmentId
         }).then(async (response) => {
            if (response.status === 201) {
               setAppointmentModal(false);
               await onFinish({
                  date: selectedDate,
                  structureId: selectedDep.id,
                  doctorId: selectedDoctor.id,
                  type: type
               });
               setGetIsSlot({ state: true, slotType: 0 });
            }
         });
      }
      setIsConfirmLoading(false);
   };
   // uffect
   useEffect(() => {
      getStructures();
   }, [type]);
   return (
      <>
         <div className="flex flex-col gap-4">
            <NewCard
               title="Цаг захиалга"
               extra={
                  <div className="flex flex-row gap-3">
                     {type === 1 ? (
                        <Button
                           className="bg-red-500"
                           type="danger"
                           onClick={() => {
                              filterForm
                                 .validateFields()
                                 .then((_values) => {
                                    if (selectedPatient.id) {
                                       orderAppointment({
                                          isUrgent: true,
                                          roomNumber: '',
                                          structureName: 'TEST',
                                          time: {
                                             start: moment(today).format('HH:mm'),
                                             end: moment(today).format('HH:mm')
                                          },
                                          slotId: null,
                                          cabinetId: selectedDep.id
                                       });
                                    } else {
                                       openNofi('warning', 'Алдаа', 'Яаралтай үед өвчтөн сонгох');
                                    }
                                 })
                                 .catch((err) => {
                                    openNofi('warning', 'Алдаа', 'Яаралтай үед тасаг эмч сонгох');
                                 });
                           }}
                        >
                           Яаралтай
                        </Button>
                     ) : null}
                     <Alert className="h-6" message={`Өнөөдөр: ${moment(today).format('YYYY-MM-DD')}`} type="success" />
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
                        <NewDatePicker
                           style={{ minHeight: 32 }}
                           onChange={(date) => setSelectedDate(date)}
                           locale={mn}
                           format={'YYYY/MM/DD'}
                        />
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
            <List
               schedules={schedules}
               type={type}
               selectedPatient={selectedPatient}
               orderAppointment={orderAppointment}
               isGetSlots={getIsSlot}
               isExtraGrud={isExtraGrud}
            />
         </div>
         <NewModal
            title="Цаг захиалах"
            open={appointmentModal}
            okButtonProps={{
               disabled: isSent
            }}
            onOk={() => {
               isUrgent ? urgentRequest() : createAppointment();
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
                        <Descriptions.Item label="Кабинет">{selectedInfo?.structureName}</Descriptions.Item>
                        <Descriptions.Item label="Эмч">{selectedDoctor?.firstName}</Descriptions.Item>
                        <Descriptions.Item label="Үйлчүүлэгч">
                           {selectedPatient?.lastName + ' ' + selectedPatient?.firstName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Цаг">
                           <div className="inline-flex flex-row items-center">
                              <span>{selectedInfo?.time?.start?.substr(0, 5)}</span>
                              <ClockCircleOutlined className="mx-1.5" />
                              <span>{selectedInfo?.time?.end?.substr(0, 5)}</span>
                           </div>
                        </Descriptions.Item>
                        <Descriptions.Item label="Өрөөнийн дугаар">{selectedInfo?.roomNumber}</Descriptions.Item>
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
                              <NewRadioGroup value={reasonComming} onChange={(e) => setReasonComming(e.target.value)}>
                                 <NewRadio value={1}>Өөрөө</NewRadio>
                                 <NewRadio value={2}>Түргэн тусламжаар</NewRadio>
                                 <NewRadio value={3}>Бусад</NewRadio>
                              </NewRadioGroup>
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
                        <NewTable
                           prop={{
                              size: 'small',
                              rowKey: 'id',
                              bordered: true,
                              dataSource: notInsuranceInfo
                           }}
                           meta={{
                              page: 1,
                              limit: notInsuranceInfo.length
                           }}
                           isLoading={isLoadingCheckPatientInsurance}
                           isPagination={false}
                        >
                           <NewColumn title="Он" dataIndex="pyear" />
                           <NewColumn title="Сар" dataIndex="pmonth" />
                           <NewColumn
                              title="Төлсөн эсэх"
                              render={() => {
                                 return (
                                    <CloseCircleOutlined
                                       style={{
                                          color: 'red'
                                       }}
                                    />
                                 );
                              }}
                           />
                        </NewTable>
                        <div className="flow-root">
                           <div className="pt-3 float-right">
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
         </NewModal>
      </>
   );
}
export default Index;
