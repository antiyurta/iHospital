import React from 'react';
import {
   CheckOutlined,
   CloseOutlined,
   EditOutlined,
   ExclamationOutlined,
   MinusOutlined,
   PlusCircleOutlined,
   PlusOutlined
} from '@ant-design/icons';
import { Alert, Avatar, Button, Card, Empty, Form, Input, Modal, Select, Table, message } from 'antd';
import 'moment/locale/mn';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentDepId, selectCurrentUserId } from '../../../../../features/authReducer';
import { setEmrData } from '../../../../../features/emrReducer';
import { formatNameForDoc, getAge, getGender, inspectionTOJSON, openNofi } from '../../../../comman';
import orderType from './orderType.json';
import DynamicContent from '../../../EMR/EPatientHistory/DynamicContent';
import MonitorCriteria from '../../../Insurance/MonitorCriteria';
import Marquee from 'react-fast-marquee';
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
   const [usageType, setUsageType] = useState('OUT');
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
            .finally(() => {
               setSpinner(false);
               setUsageType('OUT');
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
               setUsageType('IN');
               setSpinner(false);
            });
      } else if (type === 3) {
         // response = await Get(`tasks`, token, conf);
      }
   };
   const getEMR = async (row) => {
      // status heregteii anhan dawtan
      // tolbor shalgah
      setSelectedRow(row);
      if (row.process != 2 && row.process != undefined) {
         openNofi('warning', 'Хэвтэх', 'Эмнэлэгт хэвтээгүй байна');
      } else if (row.process === 2) {
         const data = {
            patientId: row.patientId
         };
         if (type === 2) {
            data['usageType'] = 'IN';
            data['inpatientRequestId'] = row.id;
            data['departmentId'] = row.inDepartmentId;
            data['serviceId'] = row.insuranceServiceId;
         }
         if (row.startDate === null) {
            data['startDate'] = new Date();
            AppointmentService.patchPreOrder(row.id, {
               startDate: new Date()
            });
         }
         dispatch(setEmrData(data));
         navigate(`/main/emr`, {
            state: data
         });
      } else {
         const payment = row.isPayment || row.isInsurance;
         if (!payment && row.type != 4) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
         } else {
            if (row.startDate === null) {
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
         startDate: row.startDate
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
      if (row.startDate === null) {
         data['startDate'] = new Date();
         AppointmentService.patchAppointment(row.id, {
            startDate: new Date()
         });
      }
      // status // 0 , 1, 2  0 bol iregu 1 bol irsn 2 bol uzlegt orson
      if (type != 1 && row.slot.id) {
         ScheduleService.patchSlot(row.slot.id, {
            incomeDate: new Date(),
            slotStatus: 1
         });
      }
      dispatch(
         setNote({
            inspectionNotes: row.inspectionNotes,
            diagnosis: row.patientDiagnosis
         })
      );
      dispatch(setEmrData(data));
      navigate('/main/emr', {
         state: data
      });
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

   const getENR = (row) => {
      // status heregteii anhan dawtan
      // tolbor shalgah
      if (usageType === 'IN') {
         if (row.roomId === null) {
            openNofi('warning', 'Алдаа', 'Өрөөнд хэвтээгүй байна');
         } else {
            console.log(row);
            navigate('/main/ambulatoryDetail', {
               state: {
                  selectedPatient: row.patient,
                  usageType: usageType,
                  structureId: row.inDepartmentId,
                  appointmentId: row.id
               }
            });
         }
      } else if (usageType === 'OUT') {
         if (row.isPayment || row.isInsurance || row.type === 1) {
            navigate('/main/ambulatoryDetail', {
               state: {
                  selectedPatient: row.patient,
                  usageType: usageType,
                  structureId: row.cabinet.parentId,
                  appointmentId: row.id,
                  reasonComming: row.reasonComming
               }
            });
         } else {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
         }
      }

      // if (row.roomId === null) {
      //    openNofi('warning', 'Алдаа', 'Өрөөнд хэвтээгүй байна');
      // } else {
      //    navigate(`/ambulatoryDetail`, {
      //       state: {
      //          appointmentId: row.appointmentId,
      //          patientId: row.patientId,
      //          structureId: row.orderDepartmentId,
      //          dapartmentId: row.inDepartmentId,
      //          roomNumber: row.rooms.roomNumber,
      //          departmentName: row.structure.name,
      //          reasonComming: row.reasonComming
      //       }
      //    });
      // }
      // console.log('=========>,', row);
      // const payment = isPayment || isInsurance;
      // if (payment) {
      //    navigate(`/ambulatoryDetail`, {
      //       state: {
      //          appointmentId: listId,
      //          patientId: id,
      //          structureId: structureId,
      //          dapartmentId: departmentId,
      //          inspection: inspectionType,
      //          regNum: regNum,
      //          type: type,
      //          appointmentType: 'PLAN',
      //          roomNumber: roomNumber,
      //          departmentName: departmentName,
      //          reasonComming: row.reasonComming
      //       }
      //    });
      // }
   };
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
                     padding: '4px 8px',
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
   const getEWSInfo = (color, totalEWS) => {
      return <p style={{ backgroundColor: color }}>{totalEWS}</p>;
   };
   const getPaymentInfo = (isPayment) => {
      if (isPayment) {
         return (
            <p>
               <PlusOutlined style={{ color: '#00adef', fontSize: '20px' }} />
            </p>
         );
      } else {
         return (
            <p>
               <MinusOutlined style={{ color: 'red', fontSize: '20px' }} />
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
   const checkInspection = (inspectionNotes) => {
      if (inspectionNotes?.length === 0) {
         return (
            <p>
               <CloseOutlined style={{ color: 'red', fontSize: '20px' }} />
            </p>
         );
      } else {
         var state = true;
         inspectionNotes?.map((inspectionNote) => {
            const data = inspectionTOJSON(inspectionNote);
            if (data != null) {
               Object.values(data)?.map((note) => {
                  Object.values(note)?.map((item) => {
                     if ((typeof item === 'object' && item?.length === 0) || (typeof item === 'string' && !item)) {
                        state = false;
                     }
                  });
               });
            }
         });
         if (state) {
            return (
               <p>
                  <CheckOutlined style={{ color: 'green', fontSize: '20px' }} />
               </p>
            );
         } else {
            return (
               <p>
                  <ExclamationOutlined style={{ color: 'yellowgreen', fontSize: '20px' }} />
               </p>
            );
         }
      }
   };
   // uzleg zasah ued uzleg er bhgu bol depId gar inspection awchrah uzleg baiwal formId gar formAwcirah
   const getInspectionFormDesc = async (inspectionNotes, patientId) => {
      // magadgu type aas hamaarch 0 element esvel bugdin
      // ghde odoo 0 element
      if (inspectionNotes?.length > 0) {
         const data = inspectionTOJSON(inspectionNotes[0]);
         data['formId'] = inspectionNotes[0].formId;
         console.log(data);
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
      if (formData.formId !== undefined) {
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
         render: (_, record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         },
         width: 40
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
         title: 'ЭСҮ Өнгө',
         dataIndex: 'emergencySorter',
         render: (text) => {
            return (
               <p
                  style={{
                     backgroundColor: text?.color,
                     color: 'black'
                  }}
               >
                  {text?.supportTime}
               </p>
            );
         }
      },
      {
         title: 'Үзлэг',
         render: (_, row) => {
            return getInspectionInfo(row.inspectionType);
         }
      },
      {
         title: 'Овог, Нэр',
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
            return getGender(text);
         }
      },
      {
         title: 'Захиалгийн огноо',
         dataIndex: ['createdAt'],
         render: (text) => {
            return dayjs(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Статус',
         dataIndex: 'status',
         render: (text) => {
            if (text === 1) {
               return <div className="text-start">Цаг захиалсан</div>;
            } else if (text === 2) {
               return (
                  <div className="text-start">
                     <p className="text-black">Өдөр солисон</p>
                     <p className="text-black">цаг солисон</p>
                  </div>
               );
            } else if (text === 3) {
               return <div className="text-start">Цаг цуцалсан</div>;
            }
         }
      },
      // {
      //    title: 'Эхэлсэн цаг',
      //    dataIndex: 'startDate',
      //    render: (text) => {
      //       if (text) {
      //          return dayjs(text).format('YYYY-MM-DD HH:mm');
      //       }
      //    }
      // },
      // {
      //    title: 'Дууссан цаг',
      //    dataIndex: 'endDate',
      //    render: (text) => {
      //       if (text) {
      //          return dayjs(text).format('YYYY-MM-DD HH:mm');
      //       }
      //    }
      // },
      // {
      //    title: 'Онош',
      //    dataIndex: 'patientDiagnosis',
      //    render: (text) => {
      //       if (text?.length > 0) {
      //          var string = '';
      //          text.map((item) => {
      //             string += item.diagnose?.code + '|';
      //          });
      //          return string;
      //       }
      //       return;
      //    }
      // },
      // {
      //    title: 'Хяналт',
      //    width: 60,
      //    render: (_text, row) => {
      //       return <MonitorCriteria props={{ serviceId: row.id, serviceType: 5 }} />;
      //    }
      // },
      // {
      //    title: 'Даатгал',
      //    width: 60,
      //    dataIndex: 'isInsurance',
      //    render: (text) => {
      //       return getPaymentInfo(text);
      //    }
      // },
      // {
      //    title: 'Төлбөр',
      //    width: 60,
      //    dataIndex: ['isPayment'],
      //    render: (text) => {
      //       return getPaymentInfo(text);
      //    }
      // },
      // {
      //    title: 'Үзлэг',
      //    width: 60,
      //    dataIndex: 'inspectionNotes',
      //    render: (text) => {
      //       return checkInspection(text);
      //    }
      // },
      {
         title: 'Үйлдэл',
         dataIndex: 'endDate',
         render: (text, row) => {
            if (text) {
               return (
                  <Button
                     onClick={() => getInspectionFormDesc(row.inspectionNotes, row.patientId)}
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
                        border: '1px solid #2D8CFF'
                     }}
                     onClick={() => {
                        isDoctor ? getEMR(row) : getENR(row);
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
         render: (_, record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         },
         width: 40
      },
      {
         title: 'Төрөл',
         dataIndex: 'type',
         render: (text) => {
            return getInPatientType(text);
         }
      },
      {
         title: 'Тасаг',
         dataIndex: ['structure', 'name'],
         render: (text) => {
            return <span className="whitespace-break-spaces">{text}</span>;
         }
      },
      {
         title: 'Өрөө',
         dataIndex: ['rooms', 'roomNumber']
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
         title: 'Овог, Нэр',
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
            return getGender(text);
         }
      },
      {
         title: 'Хэвтэх өдөр',
         dataIndex: 'startDate',
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
                     isDoctor ? getEMR(row) : getENR(row);
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
         title: 'Овог, Нэр',
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
            return getGender(text);
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
         title: 'ЭСҮ Оноо',
         render: (_, row) => {
            // return getEWSInfo(row?.assesments[0]?.colorTotal, row?.assesments[0]?.totalEWS)
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
                     isDoctor ? getEMR(row) : getENR(row);
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
      <>
         <div className="flex flex-wrap gap-4">
            <ScheduleTypeInfo />
            {type === 2 ? <InpatientTypeInfo /> : null}
            <ListFilter
               meta={meta}
               appointmentsLength={appointments?.length || 0}
               selectedTags={selectedTags}
               getList={getAppointment}
            />
            <div className="w-full">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  bodyStyle={{
                     padding: 8
                  }}
               >
                  <Table
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
                        x: 1000
                     }}
                     pagination={false}
                  />
               </Card>
            </div>
         </div>
         <Modal
            title="Тэмдэглэл засах хэсэг"
            open={isOpenEditForm}
            onCancel={() => setIsOpenEditForm(false)}
            footer={false}
         >
            <Alert
               banner
               message={
                  <Marquee pauseOnHover gradient={false}>
                     Баруун дээд буланд амжилттай хадаглалаа гэсэн анхууралгын дараа Тэмдэглэл засах хэсгийг хааж болно.
                  </Marquee>
               }
            />
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
               editForOUT={false}
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
      </>
   );
}
export default Index;
