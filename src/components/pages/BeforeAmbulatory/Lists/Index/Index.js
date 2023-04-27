import React from 'react';
import {
   CheckOutlined,
   CloseOutlined,
   EditOutlined,
   ExclamationOutlined,
   MinusOutlined,
   PlusCircleOutlined,
   PlusOutlined,
   ReloadOutlined
} from '@ant-design/icons';
import {
   Button,
   Card,
   ConfigProvider,
   DatePicker,
   Empty,
   Form,
   Input,
   Modal,
   Table,
   Tag,
   Typography
} from 'antd';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
   selectCurrentDepId,
   selectCurrentToken,
   selectCurrentUserId
} from '../../../../../features/authReducer';
import { setEmrData } from '../../../../../features/emrReducer';
import {
   Get,
   localMn,
   localMnC,
   openNofi,
   Patch,
   ScrollRef
} from '../../../../comman';
import orderType from './orderType.json';
import DynamicContent from '../../../EMR/EPatientHistory/DynamicContent';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { CheckableTag } = Tag;

function Index({ type, isDoctor }) {
   //type 0 bol ambultor
   //1 bol urdcilsan sergiileh
   //2 bol hewten
   //3 bol emiin bus emchilgee
   const scrollRef = useRef();
   const today = new Date();
   const [editFormDesc] = Form.useForm();
   const token = useSelector(selectCurrentToken);
   const employeeId = useSelector(selectCurrentUserId);
   const depIds = useSelector(selectCurrentDepId);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const config = {
      headers: {},
      params: {}
   };
   const [appointments, setAppointments] = useState([]);
   const [meta, setMeta] = useState({});
   const [spinner, setSpinner] = useState(false);
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [isOpenEditForm, setIsOpenEditForm] = useState(false); // uzleg zasah ued
   const [isOpenEditFormDesc, setIsOpenEditFormDesc] = useState(false); // uzleg zasagdhin omnoh desc
   const [formStyle, setFormStyle] = useState({});
   const [formData, setFormData] = useState({});
   //
   const [selectedRowCabinetId, setSelectRowCabinetId] = useState(Number);
   const [selectedTags, setSelectedTags] = useState(0);
   //
   const getAppointment = async (page, pageSize, start, end, process) => {
      setSpinner(true);
      start = moment(start).set({ hour: 0, minute: 0, second: 0 });
      end = moment(end).set({ hour: 23, minute: 59, second: 59 });
      const conf = {
         headers: {},
         params: {
            doctorId: isDoctor ? employeeId : null,
            process: process ? process : null,
            page: page,
            limit: pageSize,
            startDate: moment(start).format('YYYY-MM-DD HH:mm'),
            endDate: moment(end).format('YYYY-MM-DD HH:mm')
         }
      };
      setStart(start);
      setEnd(end);
      var response = [];
      if (type === 0) {
         response = await Get('appointment', token, conf);
      } else if (type === 1) {
         conf.params.doctorId = null;
         response = await Get('appointment/pre-order', token, conf);
      } else {
         conf.params.doctorId = null;
         conf.params.depIds = depIds?.toString();
         conf.params.process = process ? process.toString() : 0;
         response = await Get(`service/inpatient-request`, token, conf);
         conf.params.process = null;
      }
      setAppointments(response.data);
      setMeta(response.meta);
      config.params.employeeId = null;
      config.params.page = null;
      config.params.limit = null;
      setSpinner(false);
   };
   const getEMR = (
      listId,
      id,
      cabinetId,
      inspectionType,
      isPayment,
      process,
      startDate,
      insuranceServiceId
   ) => {
      // status heregteii anhan dawtan
      // tolbor shalgah
      console.log(isPayment);
      if (process != 2 && process != undefined) {
         openNofi('warning', 'Хэвтэх', 'Эмнэлэгт хэвтээгүй байна');
      } else {
         if (isPayment === false) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
         } else {
            const data = {
               patientId: id,
               inspection: inspectionType === undefined ? 1 : inspectionType,
               insuranceServiceId: insuranceServiceId
            };
            if (startDate === null) {
               const conf = {
                  headers: {},
                  params: {}
               };
               Patch('appointment/' + listId, token, conf, {
                  startDate: new Date()
               });
            }
            if (type === 0) {
               data['usageType'] = 'OUT';
               data['appointmentId'] = listId;
               data['cabinetId'] = cabinetId;
            } else if (type === 1) {
               data['usageType'] = 'OUT';
               data['appointmentId'] = listId;
               data['cabinetId'] = cabinetId;
            } else if (type === 2) {
               data['usageType'] = 'IN';
               data['inpatientRequestId'] = listId;
               data['dapartmentId'] = cabinetId;
            }
            dispatch(setEmrData(data));
            navigate(`/emr`, {
               state: data
            });
         }
      }
   };
   const getENR = (
      listId,
      id,
      departmentId,
      inspectionType,
      isPayment,
      regNum,
      roomNumber,
      departmentName
   ) => {
      // status heregteii anhan dawtan
      // tolbor shalgah
      if (isPayment === false) {
         openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
      } else {
         navigate(`/ambulatoryDetail`, {
            state: {
               appointmentId: listId,
               patientId: id,
               dapartmentId: departmentId,
               inspection: inspectionType,
               regNum,
               type: type,
               roomNumber: roomNumber,
               departmentName: departmentName
            }
         });
      }
   };
   const getTypeInfo = (type, begin, end) => {
      //1 yaralta shuud
      //2 shuud
      //3 urdcilsan
      //4 uridcilsan sergiileh
      if (type === 1) {
         return <p className="bg-red-500 text-white">Яаралтай</p>;
      } else if (type === 2) {
         return 'sadasd';
      } else if (type === 3) {
         const beginTime = begin.split(':');
         const endTime = end.split(':');
         return (
            <p className="bg-[#5cb85c] text-white">
               {beginTime[0] +
                  ':' +
                  beginTime[1] +
                  '-' +
                  endTime[0] +
                  ':' +
                  endTime[1]}
            </p>
         );
      } else {
         return <p className="bg-[#5bc0de] text-white">Урьдчилан сэргийлэх</p>;
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
         return <p className="bg-red-500 text-white">Яаралтай</p>;
      } else {
         return <p className="bg-green-500 text-white">Төлөвлөгөөт</p>;
      }
   };
   const getGenderInfo = (gender) => {
      if (gender === 'MAN') {
         return 'Эр';
      } else {
         return 'Эм';
      }
   };
   const getAge = (registerNumber) => {
      if (registerNumber != undefined) {
         const date = new Date();
         let year = parseInt(registerNumber.substring(2, 4));
         let month = parseInt(registerNumber.substring(4, 6));
         if (month > 20 && month < 33) {
            year += 2000;
            month -= 20;
         } else {
            year += 1900;
         }
         const currentYear = date.getFullYear();
         const age = currentYear - year;
         return age;
      } else {
         return null;
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
   const checkInspection = (inspectionNote) => {
      if (inspectionNote === null || inspectionNote === undefined) {
         return (
            <p>
               <CloseOutlined style={{ color: 'red', fontSize: '20px' }} />
            </p>
         );
      } else {
         var state = true;
         console.log(inspectionNote);
         const clonedInspectionNote = [];
         clonedInspectionNote.push(JSON.parse(inspectionNote?.inspection));
         clonedInspectionNote.push(JSON.parse(inspectionNote?.pain));
         clonedInspectionNote.push(JSON.parse(inspectionNote?.plan));
         clonedInspectionNote.push(JSON.parse(inspectionNote?.question));
         clonedInspectionNote?.map((notes) => {
            if (notes != null) {
               Object.values(notes)?.map((note) => {
                  Object.values(note)?.map((item) => {
                     if (
                        (typeof item === 'object' && item?.length === 0) ||
                        (typeof item === 'string' && !item)
                     ) {
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
                  <ExclamationOutlined
                     style={{ color: 'yellowgreen', fontSize: '20px' }}
                  />
               </p>
            );
         }
      }
   };
   useEffect(() => {
      getAppointment(1, 20, today, today, selectedTags);
   }, [selectedTags]);
   //
   // uzleg zasah ued uzleg er bhgu bol depId gar inspection awchrah uzleg baiwal formId gar formAwcirah
   const getInspectionFormDesc = async (inspectionNote, cabinetId) => {
      setSelectRowCabinetId(cabinetId);
      if (inspectionNote) {
         const data = {};
         inspectionNote.diagnose?.map((diagnose, index) => {
            data['diagnose'][index] = diagnose.diagnose;
         });
         data['inspection'] = JSON.parse(inspectionNote.inspection);
         data['pain'] = JSON.parse(inspectionNote.pain);
         data['plan'] = JSON.parse(inspectionNote.plan);
         data['question'] = JSON.parse(inspectionNote.question);
         setFormData(data);
      } else {
         setFormData(null);
      }
      editFormDesc.resetFields();
      setIsOpenEditFormDesc(true);
   };
   const createDescription = async (values) => {
      setIsOpenEditFormDesc(false);
      const conf = {
         headers: {},
         params: {
            cabinetId: selectedRowCabinetId,
            usageType: 'OUT'
         }
      };
      const response = await Get('emr/inspection-form', token, conf);
      if (formData === null) {
         setFormData({
            description: values.description
         });
      } else {
         formData['description'] = values.description;
      }
      setFormStyle(response.data[0]);
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
         title: 'Он сар',
         dataIndex: ['slots', 'schedule', 'workDate'],
         render: (text, row) => {
            if (text != null) {
               return moment(text).format('YYYY-MM-DD');
            } else {
               return moment(row.createdAt).format('YYYY-MM-DD');
            }
         }
      },
      {
         title: 'Үзлэгийн цаг',
         render: (_, row) => {
            return getTypeInfo(
               row.type,
               row.slots?.startTime,
               row.slots?.endTime
            );
         }
      },
      {
         title: 'Эмч',
         children: [
            {
               title: 'Овог',
               dataIndex: ['employee', 'lastName']
            },
            {
               title: 'Нэр',
               dataIndex: ['employee', 'firstName']
            }
         ]
      },
      {
         title: 'Үзлэг',
         render: (_, row) => {
            return getInspectionInfo(row.inspectionType);
         }
      },
      {
         title: 'Овог',
         dataIndex: ['patient', 'lastName']
      },
      {
         title: 'Нэр',
         dataIndex: ['patient', 'firstName']
      },
      {
         title: 'Регистр №',
         dataIndex: ['patient', 'registerNumber']
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
            return getGenderInfo(text);
         }
      },
      {
         title: 'Захиалсан огноо',
         dataIndex: ['createdAt'],
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Эхэлсэн цаг',
         dataIndex: 'startDate',
         render: (text) => {
            if (text) {
               return moment(text).format('YYYY-MM-DD HH:mm');
            }
         }
      },
      {
         title: 'Дууссан цаг',
         dataIndex: 'endDate',
         render: (text) => {
            if (text) {
               return moment(text).format('YYYY-MM-DD HH:mm');
            }
         }
      },
      {
         title: 'Онош',
         dataIndex: 'patientDiagnosis',
         render: (text) => {
            var dDiagnose = '';
            text?.map((diagnose) => {
               dDiagnose += `${diagnose.diagnose?.code},`;
            });
            return dDiagnose;
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
         title: 'Төлбөр',
         width: 60,
         dataIndex: ['isPayment'],
         render: (text) => {
            return getPaymentInfo(text);
         }
      },
      {
         title: 'Үзлэг',
         width: 60,
         dataIndex: 'inspectionNote',
         render: (text) => {
            return checkInspection(text);
         }
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'endDate',
         fixed: 'right',
         width: 170,
         render: (text, row) => {
            if (text) {
               return (
                  <Button
                     onClick={() =>
                        getInspectionFormDesc(row.inspectionNote, row.cabinetId)
                     }
                     icon={<EditOutlined />}
                  >
                     Тэмдэглэл засах
                  </Button>
               );
            } else {
               return (
                  <Button
                     className="hover:border-[#5cb85c]"
                     style={{
                        backgroundColor: '#5cb85c',
                        color: 'white'
                     }}
                     onClick={() => {
                        isDoctor
                           ? getEMR(
                                row.id,
                                row.patientId,
                                type === 2 ? row.inDepartmentId : row.cabinetId,
                                type === 2 ? 1 : row.inspectionType,
                                row.isPayment || row.isInsurance,
                                row.process,
                                row.startDate,
                                row.insuranceServiceId
                             )
                           : getENR(
                                row.id,
                                row.patientId,
                                row.inDepartmentId,
                                row.inspectionType,
                                row.isPayment,
                                row.patient?.registerNumber,
                                row.rooms?.roomNumber,
                                row.structure?.name
                             );
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
         }
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
         dataIndex: ['structure', 'name']
      },
      {
         title: 'Өрөө',
         dataIndex: ['rooms', 'roomNumber']
      },
      {
         title: 'Эмч',
         children: [
            {
               title: 'Овог',
               dataIndex: ['employee', 'lastName']
            },
            {
               title: 'Нэр',
               dataIndex: ['employee', 'firstName']
            }
         ]
      },
      {
         title: 'Дугаар',
         dataIndex: ['patient', 'cardNumber'],
         key: 'requestId'
      },
      {
         title: 'Овог',
         dataIndex: ['patient', 'lastName'],
         key: 'lastName'
      },
      {
         title: 'Нэр',
         dataIndex: ['patient', 'firstName'],
         key: 'firstName'
      },
      {
         title: 'Регистр',
         dataIndex: ['patient', 'registerNumber'],
         key: 'registerNumber'
      },
      {
         title: 'Нас',
         dataIndex: ['patient', 'registerNumber'],
         render: (text) => {
            return getAge(text);
         }
      },
      {
         title: 'Хүйс',
         key: 'gender',
         render: (_, record, index) => (
            <span key={index}>
               {record.patient?.genderType === 'WOMAN' ? 'Эм' : 'Эр'}
            </span>
         )
      },
      {
         title: 'Хэвтэх өдөр',
         key: 'startDate',
         render: (_, record, index) => (
            <span key={index}>{record.startDate?.substr(0, 10)}</span>
         )
      },
      {
         title: 'Гарах өдөр',
         key: 'endDate',
         render: (_, record, index) => (
            <span key={index}>{record.endDate?.substr(0, 10)}</span>
         )
      },
      {
         title: 'Гарсан өдөр',
         key: 'outDate',
         render: (_, record, index) => {
            // return moment(text).format('YYYY-MM-DD')
            return <span key={index}>{record.outDate?.substr(0, 10)}</span>;
         }
      },
      {
         title: 'Захиалгын төрөл',
         key: 'type',
         render: (_, record, index) => {
            return (
               <div key={index}>
                  {orderType.map((item, index) => {
                     if (item.value === record.process) {
                        return (
                           <img
                              src={require(`../../../../../assets/bed/${
                                 orderType[item.value].img
                              }`)}
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
         fixed: 'right',
         width: 170,
         render: (_text, row) => {
            return (
               <Button
                  className="hover:border-[#5cb85c]"
                  style={{
                     backgroundColor: '#5cb85c',
                     color: 'white'
                  }}
                  onClick={() => {
                     isDoctor
                        ? getEMR(
                             row.id,
                             row.patientId,
                             type === 2 ? row.inDepartmentId : row.cabinetId,
                             // row.cabinetId,
                             // row.inspectionType,
                             type === 2 ? 1 : row.inspectionType,
                             row.isPayment || row.isInsurance,
                             row.process,
                             row.startDate,
                             row.insuranceServiceId
                          )
                        : getENR(
                             row.id,
                             row.patientId,
                             row.inDepartmentId,
                             row.inspectionType,
                             row.isPayment,
                             row.patient?.registerNumber,
                             row.rooms?.roomNumber,
                             row.structure?.name
                          );
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
         render: (_, record, index) => {
            return meta.page * meta.limit - (meta.limit - index - 1);
         }
      },
      {
         title: 'Он сар',
         dataIndex: ['slots', 'schedule', 'workDate'],
         render: (text) => {
            return moment(text).format('YYYY-MM-DD');
         }
      },
      {
         title: 'Үзлэгийн цаг',
         render: (_, row) => {
            return getTypeInfo(
               row.type,
               row.slots?.startTime,
               row.slots?.endTime
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
         title: 'Эмч',
         render: (_, row) => {
            return `${row.employee?.lastName?.substr(0, 1)}.${
               row.employee?.firstName
            }`;
         }
      },
      {
         title: 'Овог',
         dataIndex: ['patient', 'lastName']
      },
      {
         title: 'Нэр',
         dataIndex: ['patient', 'firstName']
      },
      {
         title: 'Регистр №',
         dataIndex: ['patient', 'registerNumber']
      },
      {
         title: 'Нас',
         dataIndex: ['patient', 'registerNumber'],
         render: (text) => {
            return getAge(text);
         }
      },
      {
         title: 'Хүйс',
         dataIndex: ['patient', 'genderType'],
         render: (text) => {
            return getGenderInfo(text);
         }
      },
      {
         title: 'Захиалсан огноо',
         dataIndex: ['createdAt'],
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Төлбөр',
         dataIndex: ['isPayment'],
         render: (text) => {
            return getPaymentInfo(text);
         }
      },
      {
         title: 'ЭСҮ Оноо',
         render: (_, row) => {
            // return getEWSInfo(row?.assesments[0]?.colorTotal, row?.assesments[0]?.totalEWS)
         }
      }
   ];

   useEffect(() => {
      getAppointment(1, 20, today, today);
      ScrollRef(scrollRef);
   }, [type]);

   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full">
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
               >
                  <div className="flex flex-wrap">
                     <div className="w-full">
                        <div className="flex justify-between">
                           <div>
                              <ConfigProvider locale={localMnC()}>
                                 <RangePicker
                                    style={{
                                       width: 500
                                    }}
                                    onChange={(e) => {
                                       if (e != null) {
                                          getAppointment(
                                             1,
                                             20,
                                             e[0],
                                             e[1],
                                             selectedTags
                                          );
                                       }
                                    }}
                                    locale={mnMN}
                                 />
                              </ConfigProvider>
                           </div>
                           <div>
                              <Button
                                 title="Сэргээх"
                                 type="primary"
                                 onClick={() =>
                                    getAppointment(
                                       1,
                                       20,
                                       start,
                                       end,
                                       selectedTags
                                    )
                                 }
                              >
                                 <ReloadOutlined spin={spinner} />
                              </Button>
                           </div>
                        </div>
                     </div>
                     <div className="w-full py-2">
                        {type != 2 ? (
                           type === 0 ? (
                              <div className="flex float-left">
                                 <div
                                    className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                                    role="alert"
                                 >
                                    <span className="font-medium mx-1">
                                       Яаралтай
                                    </span>
                                 </div>
                                 <div
                                    className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                                    role="alert"
                                 >
                                    <span className="font-medium mx-1">
                                       Шууд
                                    </span>
                                 </div>
                                 <div
                                    className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                                    role="alert"
                                 >
                                    <span className="font-medium mx-1">
                                       Урьдчилсан захиалга
                                    </span>
                                 </div>
                              </div>
                           ) : (
                              <div className="flex float-left">
                                 <div
                                    className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800"
                                    role="alert"
                                 >
                                    <span className="font-medium mx-1">
                                       Урьдчилан сэргийлэх
                                    </span>
                                 </div>
                              </div>
                           )
                        ) : (
                           <>
                              <div className="w-full">
                                 <div className="bg-[#1890ff] checkTag">
                                    {orderType.map((tag, index) => {
                                       return (
                                          <CheckableTag
                                             key={index}
                                             checked={
                                                selectedTags === tag.value
                                             }
                                             onChange={() => {
                                                setSelectedTags(tag.value);
                                             }}
                                             className="text-white m-1"
                                          >
                                             <div className="flex">
                                                <img
                                                   src={require(`../../../../../assets/bed/${tag.img}`)}
                                                   width="20"
                                                />
                                                {tag.label}
                                             </div>
                                          </CheckableTag>
                                       );
                                    })}
                                 </div>
                              </div>
                           </>
                        )}
                     </div>
                     <div className="w-full py-2">
                        <ConfigProvider locale={localMn()}>
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
                              bordered
                              columns={
                                 type === 2
                                    ? InPatientColumns
                                    : isDoctor
                                    ? columns
                                    : nurseColumns
                              }
                              dataSource={appointments}
                              scroll={{
                                 x: 1500
                              }}
                              pagination={{
                                 position: ['topCenter', 'bottomCenter'],
                                 size: 'small',
                                 current: meta.page,
                                 total: meta.itemCount,
                                 showTotal: (total, range) =>
                                    `${range[0]}-ээс ${range[1]}, Нийт ${total}`,
                                 pageSize: meta.limit,
                                 showSizeChanger: true,
                                 pageSizeOptions: ['5', '10', '20', '50'],
                                 showQuickJumper: true,
                                 onChange: (page, pageSize) =>
                                    getAppointment(
                                       page,
                                       pageSize,
                                       start,
                                       end,
                                       selectedTags
                                    )
                              }}
                           />
                        </ConfigProvider>
                     </div>
                  </div>
               </Card>
            </div>
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
                  formKey:
                     formData?.formId != null ? formData?.formId : formData?.id,
                  formName: formData?.name
               }}
               incomeData={{
                  usageType: 'OUT'
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
      </>
   );
}
export default Index;
