import React, { useState } from 'react';
import { CheckOutlined, CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Form, Input, Modal, Select, Table, message } from 'antd';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentDepId, selectCurrentInsurance, selectCurrentUserId } from '../../../../../features/authReducer';
import { setEmrData } from '../../../../../features/emrReducer';
import { getAge, getGenderInType, openNofi } from '../../../../comman';
import orderType from './orderType.js';
import MonitorCriteria from '../../../Insurance/MonitorCriteria';
import { setPatient } from '../../../../../features/patientReducer';
//
import Finger from '../../../../../features/finger';
import AppointmentService from '../../../../../services/appointment/api-appointment-service';
import healthInsuranceService from '../../../../../services/healt-insurance/healtInsurance';
import apiInsuranceService from '../../../../../services/healt-insurance/insurance';
import ScheduleService from '../../../../../services/schedule';
import ServiceService from '../../../../../services/service/service';
import ScheduleTypeInfo from './scheduleTypeInfo';
import ListFilter from './listFilter';
import InpatientTypeInfo from './inpatientTypeInfo';
import { ListPatientInfo, TypeInfo } from '../../../../ListInjection.jsx';

function Index({ type, isDoctor }) {
   //type 0 bol ambultor
   //1 bol urdcilsan sergiileh
   //2 bol hewten
   //3 bol mes zasal
   const [startFormHics] = Form.useForm();
   const isInsurance = useSelector(selectCurrentInsurance);
   const employeeId = useSelector(selectCurrentUserId);
   const depIds = useSelector(selectCurrentDepId);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [appointments, setAppointments] = useState([]);
   const [meta, setMeta] = useState({
      page: 1,
      limit: 10
   });
   const [spinner, setSpinner] = useState(false);
   const [selectedTags, setSelectedTags] = useState(0);
   // suul newew 8.1
   const [selectedRow, setSelectedRow] = useState();
   const [isOpenModalStartService, setIsOpenModalStartService] = useState(false);
   const [hicsSupports, setHicsSupports] = useState([]);
   //
   const getAppointment = async (page, limit, start, end, process) => {
      setSpinner(true);
      if (type === 0) {
         await AppointmentService.getByPageFilter({
            params: {
               page: page,
               limit: limit,
               doctorId: isDoctor ? employeeId : null,
               startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
               endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
            }
         })
            .then(({ data: { response } }) => {
               setAppointments(response.data);
               setMeta(response.meta);
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
               setSpinner(false);
            });
      } else if (type === 1) {
         await AppointmentService.getPreOrder({
            params: {
               page: page,
               limit: limit,
               startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
               endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
            }
         })
            .then(({ data: { response } }) => {
               setAppointments(response.data);
               setMeta(response.meta);
            })
            .catch((error) => {
               if (error.response.status === 400) {
                  openNofi('error', 'Алдаа', 'Админаар орсон байна');
               }
            })
            .finally(() => {
               setSpinner(false);
            });
      } else if (type === 2) {
         await ServiceService.getInpatientRequest({
            params: {
               page: page,
               limit: limit,
               depIds: depIds?.toString(),
               // process: process ? process.toString() : 0,
               startDate: dayjs(start).format('YYYY-MM-DD HH:mm'),
               endDate: dayjs(end).format('YYYY-MM-DD HH:mm')
            }
         })
            .then(({ data: { response } }) => {
               setAppointments(response.data);
               setMeta(response.meta);
            })
            .finally(() => {
               setSpinner(false);
            });
      } else if (type === 3) {
         // response = await Get(`tasks`, token, conf);
      }
   };
   const getEMRorENR = async (row) => {
      // status heregteii anhan dawtan
      // tolbor shalgah
      setSelectedRow(row);
      if (row.process != 2 && row.process != undefined) {
         openNofi('warning', 'Хэвтэх', 'Эмнэлэгт хэвтээгүй байна');
      } else if (row.process === 2) {
         const data = {
            patientId: row.patientId,
            slotId: row.slotId
         };
         if (type === 2) {
            data['usageType'] = 'IN';
            data['inpatientRequestId'] = row.id;
            data['departmentId'] = row.inDepartmentId;
            data['serviceId'] = row.insuranceServiceId;
         }
         dispatch(setEmrData(data));
         if (isDoctor) {
            navigate(`/main/emr`, {
               state: data
            });
         } else {
            navigate(`/main/ambulatoryDetail`, {
               state: data
            });
         }
      } else {
         const payment = row.isPayment || row.isInsurance;
         if (!payment && row.type === 3) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
         } else {
            if (row.startDate === null && isDoctor) {
               if (row.isInsurance) {
                  await healthInsuranceService
                     .getHicsService()
                     .then(({ data }) =>
                        setHicsSupports(data.result.filter((hicsService) => hicsService.groupId == 201))
                     )
                     .catch(() => {
                        openNofi('error', 'Алдаа', 'Даатгалтай холбогдож чадсангүй та түр хүлээгээд дахин оролдоно уу');
                     });
                  setIsOpenModalStartService(true);
               } else {
                  hrefEMR(row);
               }
            } else {
               hrefEMR(row);
            }
         }
      }
   };
   // 8.1
   const hrefEMR = (sRow) => {
      var row;
      if (sRow) {
         row = sRow;
      } else {
         row = selectedRow;
      }
      const inspectionType = type === 2 ? 1 : row.inspectionType;
      const data = {
         patientId: row.patientId,
         inspection: inspectionType === undefined ? 1 : inspectionType,
         type: row.type,
         hicsSeal: row.hicsSeal,
         startDate: row.startDate || new Date(),
         endDate: row.endDate,
         appointmentType: type,
         inspectionNoteId: row.inspectionNoteId,
         slotId: row.slotId,
         reasonComming: row.reasonComming
      };
      if (type === 0) {
         data['usageType'] = 'OUT';
         data['appointmentId'] = row.id;
         data['cabinetId'] = row.cabinetId;
         data['departmentId'] = row.cabinet?.parentId;
      } else if (type === 1) {
         data['usageType'] = 'OUT';
         data['appointmentId'] = row.id;
         data['cabinetId'] = row.cabinetId;
         data['EWSColor'] = row.emergencySorter?.color;
      } else if (type === 2) {
         data['usageType'] = 'IN';
         data['inpatientRequestId'] = row.id;
         data['departmentId'] = row.inDepartmentId;
      }
      // uzleg ehleh tsag
      if (row.startDate === null && isDoctor && type === 1) {
         AppointmentService.patchPreOrder(row.id, {
            slotId: row.slotId,
            startDate: new Date()
         });
      }
      if (row.startDate === null && isDoctor && type === 0) {
         AppointmentService.patchAppointment(row.id, {
            startDate: new Date(),
            slotId: row.slotId
         });
      }
      // status // 0 , 1, 2  0 bol iregu 1 bol irsn 2 bol uzlegt orson
      if (type != 1 && row.slotId && isDoctor && row.slot?.incomeDate === null) {
         ScheduleService.patchSlot(row.slotId, {
            incomeDate: new Date(),
            slotStatus: 1
         });
      }
      dispatch(setEmrData(data));
      if (isDoctor) {
         navigate(`/main/emr`, {
            state: data
         });
      } else {
         navigate(`/main/ambulatoryDetail`, {
            state: data
         });
      }
      dispatch(setPatient(row.patient));
   };
   const startHics = async (values) => {
      await apiInsuranceService
         .hicsAmbulatoryStart(values.fingerprint, selectedRow.patientId, values.hicsServiceId)
         .then(async ({ data }) => {
            if (data.code === 400) {
               openNofi('error', 'Амжилтгүй', data.description);
            } else if (data.code === 200) {
               await apiInsuranceService
                  .createHicsSeal({
                     appointmentId: selectedRow.id,
                     patientId: selectedRow.patientId,
                     departmentId: selectedRow.cabinetId,
                     startAt: data.result.createdDate,
                     hicsAmbulatoryStartId: data.result.id,
                     hicsServiceId: data.result.hicsServiceId,
                     groupId: 201
                  })
                  .then((response) => {
                     if (response.status != 200) {
                        openNofi('error', 'Амжилтгүй', response);
                     }
                  });
               hrefEMR(null);
            }
         });
   };
   //

   const getTypeInfo = (type, begin, end) => {
      //1 yaralta shuud
      //2 shuud
      //3 urdcilsan
      //4 uridcilsan sergiileh
      if (type === 1) {
         return <TypeInfo bgColor="#ef4444" textColor="white" text={'Яаралтай'} />;
      } else if (type === 2) {
         return <TypeInfo bgColor="#eab308" textColor="black" text={'Шууд'} />;
      } else if (type === 3) {
         const beginTime = begin.substring(0, 5);
         const endTime = end.substring(0, 5);
         if (beginTime && endTime) {
            return <TypeInfo bgColor="#5cb85c" textColor="white" text={beginTime + '-' + endTime} />;
         }
         return;
      } else {
         return <TypeInfo bgColor="#5bc0de" textColor="white" text={'Урьдчилан сэргийлэх'} />;
      }
   };
   const getPaymentInfo = (state) => {
      if (state) {
         return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Төлсөн'} />;
      }
      return <TypeInfo bgColor="#ef4444" textColor="white" text={'Төлөгдөөгүй'} />;
   };
   const getInPatientType = (type) => {
      if (type === 'EMERGENCY') {
         return <TypeInfo bgColor="#ef4444" textColor="white" text={'Яаралтай'} />;
      }
      return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Төлөвлөгөөт'} />;
   };
   const getInspectionInfo = (inspectionType) => {
      if (inspectionType === 1) {
         return 'Анхан';
      } else if (inspectionType === 2) {
         return 'Давтан';
      } else if (inspectionType === 3) {
         return 'Урьдчилан сэргийлэх';
      } else if (inspectionType === 4) {
         return 'Гэрийн эргэлт';
      } else if (inspectionType === 5) {
         return 'Идэвхтэй хяналт';
      } else {
         return 'Дуудлагаа';
      }
   };

   const columns = [
      {
         title: '№',
         render: (_, _record, index) => meta.page * meta.limit - (meta.limit - index - 1),
         width: 40
      },
      {
         title: 'Эмч',
         dataIndex: 'employee',
         width: 150,
         render: (employee) => <ListPatientInfo patientData={employee} />
      },
      {
         title: 'Он сар',
         dataIndex: ['slot', 'schedule', 'workDate'],
         width: 90,
         render: (workDate, row) => dayjs(workDate || row.createdAt).format('YYYY/MM/DD')
      },
      {
         title: 'Үзлэгийн цаг',
         dataIndex: 'slot',
         width: type === 0 ? 90 : 150,
         render: (slot, row) => getTypeInfo(row.type, slot?.startTime, slot?.endTime)
      },
      {
         title: 'ЭСҮ',
         // dataIndex: 'emergencySorter',
         // dataIndex: 'assesment',
         // яаралтай байвал эсвэл энгийн
         dataIndex: 'assesment',
         width: 50,
         render: (assesment) => <TypeInfo bgColor={assesment?.color} textColor={'white'} text={assesment?.total} />
      },
      {
         title: 'Үзлэг',
         dataIndex: 'inspectionType',
         width: 70,
         render: (inspectionType) => getInspectionInfo(inspectionType)
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         width: 170,
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Нас',
         width: 100,
         dataIndex: ['patient', 'registerNumber'],
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
         dataIndex: ['patient', 'genderType'],
         render: (text) => getGenderInType(text)
      },
      {
         title: 'Захиалгийн огноо',
         dataIndex: 'createdAt',
         width: 150,
         render: (createdAt) => dayjs(createdAt).format('YYYY/MM/DD HH:mm')
      },
      {
         title: 'Статус',
         dataIndex: 'status',
         width: 120,
         render: (status) => {
            if (status === 1) {
               return <div className="text-start">Цаг захиалсан</div>;
            } else if (status === 2) {
               return (
                  <div className="text-start">
                     <p className="text-black">Өдөр солисон</p>
                     <p className="text-black">цаг солисон</p>
                  </div>
               );
            } else if (status === 3) {
               return <div className="text-start">Цаг цуцалсан</div>;
            } else if (status === 4) {
               return <div className="text-start">Үзлэг дууссан</div>;
            }
         }
      },
      {
         title: 'Онош',
         dataIndex: 'patientDiagnosis',
         width: 100,
         render: (patientDiagnosis) => (
            <p className="whitespace-pre-wrap text-black">
               {patientDiagnosis?.map((diagnose) => diagnose.diagnose.code)?.join(',')}
            </p>
         )
      },
      {
         title: 'Хяналт',
         dataIndex: 'id',
         width: 60,
         render: (id) => <MonitorCriteria props={{ serviceId: id, serviceType: 5 }} />
      },
      {
         title: 'Даатгал',
         width: 100,
         dataIndex: 'isInsurance',
         render: (isInsurance) => getPaymentInfo(isInsurance)
      },
      {
         title: 'Төлбөр',
         width: 100,
         dataIndex: 'isPayment',
         render: (isPayment) => getPaymentInfo(isPayment)
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'endDate',
         width: 120,
         render: (text, row) => (
            <Button
               className="hover:border-[#2D8CFF]"
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  color: '#2D8CFF',
                  border: '1px solid #2D8CFF',
                  height: 'auto',
                  margin: 8,
                  width: '100%'
               }}
               onClick={() => {
                  getEMRorENR(row);
               }}
               icon={<PlusCircleOutlined />}
            >
               {text ? 'Тэмдэглэл засах' : 'Үзлэг хийх'}
            </Button>
         )
      }
   ];
   const InPatientColumns = [
      {
         title: '№',
         render: (_, _record, index) => meta.page * meta.limit - (meta.limit - index - 1),
         width: 40
      },
      {
         title: 'Төрөл',
         dataIndex: 'type',
         width: 100,
         render: (type) => getInPatientType(type)
      },
      {
         title: 'Тасаг',
         width: 160,
         dataIndex: ['structure', 'name'],
         render: (name) => <span className="whitespace-break-spaces">{name}</span>
      },
      {
         title: 'Өрөө',
         width: 60,
         dataIndex: ['room', 'roomNumber']
      },
      {
         title: 'Эмч',
         dataIndex: 'doctor',
         width: 170,
         render: (doctor) => <ListPatientInfo patientData={doctor} />
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         width: 170,
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Нас',
         width: 100,
         dataIndex: ['patient', 'registerNumber'],
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
         dataIndex: ['patient', 'genderType'],
         render: (genderType) => getGenderInType(genderType)
      },
      {
         title: 'Хэвтэх өдөр',
         dataIndex: 'startDate',
         width: 100,
         render: (text) => {
            if (text) {
               return dayjs(text).format('YYYY/MM/DD');
            }
            return;
         }
      },
      {
         title: 'Гарах өдөр',
         dataIndex: 'endDate',
         width: 100,
         render: (text) => {
            if (text) {
               return dayjs(text).format('YYYY/MM/DD');
            }
            return;
         }
      },
      {
         title: 'Гарсан өдөр',
         dataIndex: 'outDate',
         width: 100,
         render: (text) => {
            if (text) {
               return dayjs(text).format('YYYY/MM/DD');
            }
            return;
         }
      },
      {
         title: 'Даатгал',
         dataIndex: 'isInsurance',
         width: 100,
         render: (text) => {
            if (text) {
               return (
                  <CheckOutlined
                     style={{
                        color: 'green'
                     }}
                  />
               );
            }
            return (
               <CloseOutlined
                  style={{
                     color: 'red'
                  }}
               />
            );
         }
      },
      {
         title: 'Захиалгын төрөл',
         key: 'type',
         width: 60,
         render: (_, record, index) => {
            return (
               <div key={index}>
                  {orderType.map((item, index) => {
                     if (item.value === record.process) {
                        return (
                           <img
                              src={require(`../../../../../assets/bed/${orderType[item.value].img}`)}
                              width="20"
                              className="inline-block"
                              key={index}
                           />
                        );
                     }
                  })}
               </div>
            );
         }
      },
      {
         title: 'Үйлдэл',
         width: 120,
         render: (_text, row) => {
            return (
               <Button
                  className="hover:border-[#2D8CFF]"
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     backgroundColor: 'white',
                     color: '#2D8CFF',
                     border: '1px solid #2D8CFF'
                  }}
                  onClick={() => {
                     getEMRorENR(row);
                  }}
                  icon={<PlusCircleOutlined />}
               >
                  Үзлэг хийх
               </Button>
            );
         }
      }
   ];
   const nurseColumns = [
      {
         title: '№',
         width: 40,
         render: (_, record, index) => meta.page * meta.limit - (meta.limit - index - 1)
      },
      {
         title: 'Эмч',
         dataIndex: 'employee',
         render: (employee) => <ListPatientInfo patientData={employee} />
      },
      {
         title: 'Он сар',
         dataIndex: ['slot', 'schedule', 'workDate'],
         render: (workDate, row) => {
            if (workDate != null) {
               return dayjs(workDate).format('YYYY-MM-DD');
            } else {
               return dayjs(row.createdAt).format('YYYY-MM-DD');
            }
         }
      },
      {
         title: 'Үзлэгийн цаг',
         dataIndex: 'slot',
         render: (slot, row) => getTypeInfo(row.type, slot?.startTime, slot?.endTime)
      },
      {
         title: 'Үзлэг',
         dataIndex: 'inspectionType',
         render: (inspectionType) => getInspectionInfo(inspectionType)
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         render: (patient) => <ListPatientInfo patientData={patient} />
      },
      {
         title: 'Нас',
         width: 100,
         dataIndex: ['patient', 'registerNumber'],
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
         dataIndex: ['patient', 'genderType'],
         render: (genderType) => getGenderInType(genderType)
      },
      {
         title: 'Захиалсан огноо',
         dataIndex: 'createdAt',
         render: (createdAt) => dayjs(createdAt).format('YYYY-MM-DD HH:mm')
      },
      {
         title: 'Төлбөр',
         width: 100,
         dataIndex: 'isPayment',
         render: (isPayment) => getPaymentInfo(isPayment)
      },
      {
         title: 'Даатгал',
         width: 100,
         dataIndex: 'isInsurance',
         render: (isInsurance) => getPaymentInfo(isInsurance)
      },
      {
         title: 'ЭСҮ',
         dataIndex: 'assesment',
         render: (assesment) => <TypeInfo bgColor={assesment?.color} textColor={'white'} text={assesment?.total} />
      },
      {
         title: 'Үйлдэл',
         render: (_text, row) => {
            return (
               <Button
                  className="hover:border-[#2D8CFF]"
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     backgroundColor: 'white',
                     color: '#2D8CFF',
                     border: '1px solid #2D8CFF'
                  }}
                  onClick={() => {
                     getEMRorENR(row);
                  }}
                  icon={<PlusCircleOutlined />}
               >
                  Үзлэг хийх
               </Button>
            );
         }
      }
   ];
   // mes zaslin menu
   const SurgeryColumns = [
      {
         title: 'sdad'
      }
   ];
   // mes zaslin menu
   // column configure
   const CurrentColumn = () => {
      if (type === 0 || type === 1) {
         if (isDoctor) {
            return columns;
         } else {
            return nurseColumns;
         }
      } else if (type === 2) {
         return InPatientColumns;
      } else if (type === 3) {
         if (isDoctor) {
            return SurgeryColumns;
         } else {
            return;
         }
      }
   };

   return (
      <div className="w-full">
         <div className="flex flex-col gap-3">
            <ScheduleTypeInfo />
            {type === 2 ? <InpatientTypeInfo /> : null}
            <ListFilter
               meta={meta}
               appointmentsLength={appointments?.length || 0}
               selectedTags={selectedTags}
               getList={getAppointment}
            />
            <Card
               bordered={false}
               className="header-solid rounded-md"
               bodyStyle={{
                  padding: 8
               }}
            >
               <Table
                  className="emr-index-list"
                  rowKey={'id'}
                  rowClassName="hover: cursor-pointer"
                  locale={{
                     emptyText: <Empty description={'Хоосон'} />
                  }}
                  loading={{
                     spinning: spinner,
                     tip: 'Уншиж байна....'
                  }}
                  columns={CurrentColumn()}
                  dataSource={appointments}
                  scroll={{
                     y: 665
                  }}
                  pagination={false}
               />
            </Card>
         </div>
         <Modal
            title="Тусламж үйлчилгээг эхлүүлэх"
            open={isOpenModalStartService}
            onCancel={() => setIsOpenModalStartService(false)}
            onOk={() =>
               startFormHics
                  .validateFields()
                  .then((values) => {
                     startHics(values);
                  })
                  .catch(({ errorFields }) => {
                     errorFields?.map((error) => message.error(error.errors[0]));
                  })
            }
         >
            <Form form={startFormHics} layout="vertical">
               <div
                  style={{
                     width: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     gap: 12
                  }}
               >
                  <Finger
                     text="Иргэний хурууний хээ"
                     isFinger={true}
                     steps={[
                        {
                           title: 'Өвтний',
                           path: 'fingerprint'
                        }
                     ]}
                     isPatientSheet={false}
                     handleClick={(values) => {
                        startFormHics.setFieldsValue({
                           fingerprint: values.fingerprint
                        });
                     }}
                  />
                  <div className="hidden">
                     <Form.Item
                        rules={[
                           {
                              required: true,
                              message: 'Иргэний хурууны хээ заавал'
                           }
                        ]}
                        name="fingerprint"
                     >
                        <Input />
                     </Form.Item>
                  </div>
                  <Form.Item
                     label="Т.Ү-ний дугаар"
                     name="hicsServiceId"
                     rules={[{ required: true, message: 'Үйлчилгээний төрөл заавал сонгох' }]}
                     style={{
                        width: '100%'
                     }}
                     className="mb-0"
                  >
                     <Select
                        placeholder="Үйлчилгээний төрөл сонгох"
                        options={hicsSupports.map((hicsSupport) => ({
                           label: hicsSupport.name,
                           value: hicsSupport.id
                        }))}
                     />
                  </Form.Item>
               </div>
            </Form>
         </Modal>
      </div>
   );
}
export default Index;
