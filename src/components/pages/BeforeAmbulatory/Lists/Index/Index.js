import React from 'react';
import { CheckOutlined, CloseOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Empty, Form, Input, Modal, Select, Table, message } from 'antd';
import 'moment/locale/mn';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentDepId, selectCurrentInsurance, selectCurrentUserId } from '../../../../../features/authReducer';
import { setEmrData } from '../../../../../features/emrReducer';
import { formatNameForDoc, getAge, getGenderInType, inspectionTOJSON, openNofi } from '../../../../comman';
import orderType from './orderType.js';
import DynamicContent from '../../../EMR/EPatientHistory/DynamicContent';
import MonitorCriteria from '../../../Insurance/MonitorCriteria';
import { setNote } from '../../../../../features/noteReducer';
import jwtInterceopter from '../../../../jwtInterceopter';
import { defaultForm } from '../../../EMR/EPatientHistory/DefualtForms';
import { setPatient } from '../../../../../features/patientReducer';
//
import Finger from '../../../../../features/finger';
import AppointmentService from '../../../../../services/appointment/api-appointment-service';
import healthInsuranceService from '../../../../../services/healt-insurance/healtInsurance';
import apiInsuranceService from '../../../../../services/healt-insurance/insurance';
import ScheduleService from '../../../../../services/schedule';
import ServiceService from '../../../../../services/service/service';
import { NewInput } from '../../../../Input/Input';
import ScheduleTypeInfo from './scheduleTypeInfo';
import ListFilter from './listFilter';
import InpatientTypeInfo from './inpatientTypeInfo';
const { TextArea } = Input;

function Index({ type, isDoctor }) {
   //type 0 bol ambultor
   //1 bol urdcilsan sergiileh
   //2 bol hewten
   //3 bol mes zasal
   const [editFormDesc] = Form.useForm();
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
   const [isOpenEditForm, setIsOpenEditForm] = useState(false); // uzleg zasah ued
   const [isOpenEditFormDesc, setIsOpenEditFormDesc] = useState(false); // uzleg zasagdhin omnoh desc
   const [formStyle, setFormStyle] = useState({});
   const [formData, setFormData] = useState({});
   //
   const [selectedRowPatientId, setSelectedRowPatientId] = useState(Number);
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
         if (row.startDate === null && isDoctor && type === 0) {
            data['startDate'] = new Date();
            AppointmentService.patchPreOrder(row.id, {
               slotId: row.slotId,
               startDate: new Date()
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
      } else {
         const payment = row.isPayment || row.isInsurance;
         if (!payment && row.type != 1) {
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
         listIndexType: type,
         hicsSeal: row.hicsSeal,
         startDate: row.startDate,
         appointmentType: type,
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
      if (row.startDate === null && isDoctor) {
         data['startDate'] = new Date();
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
      dispatch(
         setNote({
            inspectionNote: row.inspectionNote,
            diagnosis: row.patientDiagnosis,
            services: [].concat(...row.serviceRequests?.map((request) => request.services))
         })
      );
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
         return (
            <p
               className="bg-red-500 text-white"
               style={{
                  padding: '4px 8px',
                  borderRadius: 15
               }}
            >
               Яаралтай
            </p>
         );
      } else if (type === 2) {
         return 'sadasd';
      } else if (type === 3) {
         const beginTime = begin?.split(':');
         const endTime = end?.split(':');
         if ((beginTime, endTime)) {
            return (
               <p
                  className="bg-[#5cb85c] text-white"
                  style={{
                     borderRadius: 15
                  }}
               >
                  {beginTime[0] + ':' + beginTime[1] + '-' + endTime[0] + ':' + endTime[1]}
               </p>
            );
         }
         return;
      } else {
         return (
            <p
               className="bg-[#5bc0de] text-white"
               style={{
                  padding: '4px 8px',
                  borderRadius: 15
               }}
            >
               Урьдчилан сэргийлэх
            </p>
         );
      }
   };
   const getEWSInfo = (assesment) => (
      <p
         style={{
            backgroundColor: assesment?.color,
            margin: '4px 8px',
            borderRadius: 15,
            color: 'white'
         }}
      >
         {assesment?.total}
      </p>
   );
   const getPaymentInfo = (isPayment) => {
      if (isPayment) {
         return (
            <p
               className="bg-[#5cb85c] text-white"
               style={{
                  borderRadius: 15
               }}
            >
               Төлсөн
            </p>
         );
      } else {
         return (
            <p
               className="bg-red-500 text-white"
               style={{
                  borderRadius: 15
               }}
            >
               Төлөгдөөгүй
            </p>
         );
      }
   };
   const getInPatientType = (type) => {
      if (type === 'EMERGENCY') {
         return (
            <p
               className="bg-red-500 text-white"
               style={{
                  padding: '4px 8px',
                  fontSize: 12,
                  borderRadius: 15
               }}
            >
               Яаралтай
            </p>
         );
      } else {
         return (
            <p
               className="bg-green-500 text-white"
               style={{
                  padding: '4px 8px',
                  fontSize: 12,
                  borderRadius: 15
               }}
            >
               Төлөвлөгөөт
            </p>
         );
      }
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

   // uzleg zasah ued uzleg er bhgu bol depId gar inspection awchrah uzleg baiwal formId gar formAwcirah
   const getInspectionFormDesc = async (inspectionNote, patientId) => {
      if (inspectionNote) {
         const data = inspectionTOJSON(inspectionNote);
         data['formId'] = inspectionNote.formId;
         data['id'] = inspectionNote.id;
         setFormData(data);
         setSelectedRowPatientId(patientId);
      } else {
         setFormData(null);
      }
      editFormDesc.resetFields();
      setIsOpenEditFormDesc(true);
   };
   const createDescription = async (values) => {
      setIsOpenEditFormDesc(false);
      if (formData.formId) {
         await jwtInterceopter.get('emr/inspection-form/' + formData.formId).then((response) => {
            setFormStyle(response.data.response);
         });
      } else {
         setFormStyle({
            formItem: defaultForm()
         });
      }
      formData['description'] = values.description;
      setIsOpenEditForm(true);
   };
   //
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
         render: (employee) => (
            <div className="ambo-list-user">
               <Avatar
                  style={{
                     minWidth: 32
                  }}
               />
               <div className="info">
                  <p className="name">{formatNameForDoc(employee?.lastName, employee?.firstName)}</p>
                  <p>{employee?.registerNumber}</p>
               </div>
            </div>
         )
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
         width: 90,
         render: (slot, row) => getTypeInfo(row.type, slot?.startTime, slot?.endTime)
      },
      {
         title: 'ЭСҮ',
         // dataIndex: 'emergencySorter',
         // dataIndex: 'assesment',
         // яаралтай байвал эсвэл энгийн
         dataIndex: 'assesment',
         width: 50,
         render: (assesment) => getEWSInfo(assesment)
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
         render: (patient) => (
            <div className="ambo-list-user">
               <Avatar
                  style={{
                     minWidth: 32
                  }}
               />
               <div className="info">
                  <p className="name">{formatNameForDoc(patient.lastName, patient.firstName)}</p>
                  <p>{patient?.registerNumber}</p>
               </div>
            </div>
         )
      },
      {
         title: 'Нас',
         width: 40,
         dataIndex: ['patient', 'registerNumber'],
         render: (text) => getAge(text)
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
            }
         }
      },
      {
         title: 'Онош',
         dataIndex: 'patientDiagnosis',
         width: 100,
         render: (patientDiagnosis) => patientDiagnosis?.map((diagnose) => diagnose.diagnose.code)?.join('|')
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
         width: 60,
         dataIndex: 'isPayment',
         render: (isPayment) => getPaymentInfo(isPayment)
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'endDate',
         width: 120,
         render: (text, row) => {
            if (text) {
               return (
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
                     onClick={() => getInspectionFormDesc(row.inspectionNote, row.patientId)}
                     icon={<EditOutlined />}
                  >
                     Тэмдэглэл засах
                  </Button>
               );
            } else {
               return (
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
                     Үзлэг хийх
                  </Button>
               );
            }
         }
      }
   ];
   const InPatientColumns = [
      {
         title: '№',
         render: (_, _record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         },
         width: 40
      },
      {
         title: 'Төрөл',
         dataIndex: 'type',
         width: 100,
         render: (text) => {
            return getInPatientType(text);
         }
      },
      {
         title: 'Тасаг',
         width: 160,
         dataIndex: ['structure', 'name'],
         render: (text) => {
            return <span className="whitespace-break-spaces">{text}</span>;
         }
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
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object?.lastName, object?.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         width: 170,
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object?.lastName, object?.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Нас',
         width: 40,
         dataIndex: ['patient', 'registerNumber'],
         render: (text) => {
            return getAge(text);
         }
      },
      {
         title: 'Хүйс',
         width: 40,
         dataIndex: ['patient', 'genderType'],
         render: (text) => {
            return getGenderInType(text);
         }
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
         render: (_, record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         }
      },
      {
         title: 'Эмч',
         dataIndex: 'employee',
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object?.lastName, object?.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Он сар',
         dataIndex: ['slot', 'schedule', 'workDate'],
         render: (text, row) => {
            if (text != null) {
               return dayjs(text).format('YYYY-MM-DD');
            } else {
               return dayjs(row.createdAt).format('YYYY-MM-DD');
            }
         }
      },
      {
         title: 'Үзлэгийн цаг',
         dataIndex: 'slot',
         render: (slot, row) => {
            return getTypeInfo(row.type, slot?.startTime, slot?.endTime);
         }
      },
      {
         title: 'Үзлэг',
         dataIndex: 'inspectionType',
         render: (inspectionType) => {
            return getInspectionInfo(inspectionType);
         }
      },
      {
         title: 'Өвчтөн',
         dataIndex: 'patient',
         render: (object) => {
            return (
               <div className="ambo-list-user">
                  <Avatar
                     style={{
                        minWidth: 32
                     }}
                  />
                  <div className="info">
                     <p className="name">{formatNameForDoc(object.lastName, object.firstName)}</p>
                     <p>{object?.registerNumber}</p>
                  </div>
               </div>
            );
         }
      },
      {
         title: 'Нас',
         width: 40,
         dataIndex: ['patient', 'registerNumber'],
         render: (text) => {
            return getAge(text);
         }
      },
      {
         title: 'Хүйс',
         width: 40,
         dataIndex: ['patient', 'genderType'],
         render: (text) => {
            return getGenderInType(text);
         }
      },
      {
         title: 'Захиалсан огноо',
         dataIndex: ['createdAt'],
         render: (text) => {
            return dayjs(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Төлбөр',
         width: 60,
         dataIndex: ['isPayment'],
         render: (text) => {
            return getPaymentInfo(text);
         }
      },
      {
         title: 'Даатгал',
         width: 60,
         dataIndex: 'isInsurance',
         render: (text) => {
            return getPaymentInfo(text);
         }
      },
      {
         title: 'ЭСҮ',
         dataIndex: 'assesment',
         render: (assesment) => {
            return getEWSInfo(assesment?.color, assesment?.total);
         }
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
            title="Тэмдэглэл засах хэсэг"
            open={isOpenEditForm}
            onCancel={() => setIsOpenEditForm(false)}
            footer={false}
         >
            <DynamicContent
               props={{
                  data: formStyle.formItem,
                  formKey: formData?.formId != null ? formData?.formId : formData?.id,
                  formName: formData?.name
               }}
               incomeData={{
                  usageType: 'OUT',
                  patientId: selectedRowPatientId
               }}
               editForm={formData}
               isEditFromList={true}
               triggerForModal={(state) => setIsOpenEditForm(state)}
            />
         </Modal>
         <Modal
            title="Засах болсон шалтгаан"
            open={isOpenEditFormDesc}
            onCancel={() => setIsOpenEditFormDesc(false)}
            onOk={() =>
               editFormDesc.validateFields().then((values) => {
                  createDescription(values);
               })
            }
            okText="Хадгалах"
            cancelText="Болих"
         >
            <Form form={editFormDesc} layout="vertical">
               <Form.Item
                  label="Тайлбар"
                  name={'description'}
                  rules={[
                     {
                        required: true,
                        message: 'Заавал'
                     }
                  ]}
               >
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
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
                        <NewInput />
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
