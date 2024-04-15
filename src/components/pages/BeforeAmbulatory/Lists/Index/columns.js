import React from 'react';
import { Tooltip } from 'antd';
import { ListPatientInfo, TypeInfo } from '@Comman/ListInjection';
import { getAge, getGenderInType } from '@Comman/common';
import MonitorCriteria from '@Comman/pages/Insurance/MonitorCriteria';
import dayjs from 'dayjs';
import orderType from './orderType.js';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const getInPatientType = (type) => {
   if (type === 'EMERGENCY') {
      return <TypeInfo bgColor="#ef4444" textColor="white" text={'Яаралтай'} />;
   }
   return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Төлөвлөгөөт'} />;
};

const getPaymentInfo = (state) => {
   if (state) {
      return <TypeInfo bgColor="#5cb85c" textColor="white" text={'Төлсөн'} />;
   }
   return <TypeInfo bgColor="#ef4444" textColor="white" text={'Төлөгдөөгүй'} />;
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
   } else if (inspectionType === 6) {
      return 'Дуудлагаа';
   } else if (inspectionType === 99) {
      return 'Шийдвэрлэсэн';
   }
   return;
};

const getTypeInfoSurgury = (id) => {
   if (id === 2) {
      return <TypeInfo bgColor="#007bff" textColor="#fff" text={'Захиалсан'} />;
   } else if (id === 3) {
      return <TypeInfo bgColor="#ffc107" textColor="#000" text={'Төлөвлөсөн'} />;
   } else if (id === 4) {
      return <TypeInfo bgColor="#28a745" textColor="#fff" text={'Батлагдсан'} />;
   } else if (id === 5) {
      return <TypeInfo bgColor="#6c757d" textColor="#fff" text={'Мэс заслын өрөөнд орсон'} />;
   } else if (id === 6) {
      return <TypeInfo bgColor="#6610f2" textColor="#fff" text={'Үргэлжилж байгаа'} />;
   } else if (id === 7) {
      return <TypeInfo bgColor="#dc3545" textColor="#fff" text={'Дууссан'} />;
   }
};

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

export const outDoctorColumns = [
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
      width: 120,
      render: (slot, row) => getTypeInfo(row.type, slot?.startTime, slot?.endTime)
   },
   {
      title: 'ЭСҮ',
      dataIndex: 'emergencySorter',
      // dataIndex: 'assesment',
      // яаралтай байвал эсвэл энгийн
      // dataIndex: 'assesment',
      width: 100,
      render: (emergencySorter) => (
         <TypeInfo bgColor={emergencySorter?.color} textColor={'black'} text={emergencySorter?.supportTime} />
      )
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
      width: 50,
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
         } else if (status === 5) {
            return <div className="text-start">Шийдвэрлэсэн</div>;
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
   }
];
export const outNurseColumns = [
   {
      title: 'Эмч',
      dataIndex: 'employee',
      width: 170,
      render: (employee) => <ListPatientInfo patientData={employee} />
   },
   {
      title: 'Он сар',
      width: 100,
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
      width: 100,
      render: (slot, row) => getTypeInfo(row.type, slot?.startTime, slot?.endTime)
   },
   {
      title: 'Үзлэг',
      dataIndex: 'inspectionType',
      width: 80,
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
      width: 60,
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
      width: 110,
      dataIndex: 'isPayment',
      render: (isPayment) => getPaymentInfo(isPayment)
   },
   {
      title: 'Даатгал',
      width: 110,
      dataIndex: 'isInsurance',
      render: (isInsurance) => getPaymentInfo(isInsurance)
   },
   {
      title: 'ЭСҮ',
      width: 100,
      dataIndex: 'emergencySorter',
      render: (emergencySorter) => (
         <TypeInfo bgColor={emergencySorter?.color} textColor={'black'} text={emergencySorter?.supportTime} />
      )
   }
];
export const inColumns = [
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
      dataIndex: 'process',
      width: 60,
      render: (process) => (
         <Tooltip title={orderType[process].label}>
            <img
               src={require(`../../../../../assets/bed/${orderType[process].img}`)}
               width="25"
               className="inline-block"
            />
         </Tooltip>
      )
   }
];
export const surguryColumns = [
   {
      title: 'Захиалсан Огноо',
      dataIndex: 'createdAt',
      width: 120,
      render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm')
   },
   {
      title: 'Төрөл',
      dataIndex: 'taskType',
      width: 110,
      render: (text) => {
         if (text === 1) {
            return <TypeInfo bgColor="#13baed" textColor="black" text={'Төлөвлөгөөт'} />;
         } else {
            return <TypeInfo bgColor="#e33d3d" textColor="white" text={'Яаралтай'} />;
         }
      }
   },
   {
      title: 'Хаанаас',
      dataIndex: 'usageType',
      width: 110,
      render: (text) => {
         return text === 'IN' ? (
            <TypeInfo bgColor="#5cb85c" textColor="black" text={'Хэвтэн'} />
         ) : (
            <TypeInfo bgColor="#5cb85c" textColor="white" text={'Амбулатори'} />
         );
      }
   },
   {
      title: 'Захиалсан тасаг',
      dataIndex: ['authorDep', 'name'],
      render: (name) => <p className="text-black mx-3">{name}</p>
   },
   {
      title: 'Эмч',
      dataIndex: 'doctor',
      render: (doctor) => <ListPatientInfo patientData={doctor} />
   },
   {
      title: 'Өвчтөн',
      dataIndex: 'patient',
      width: 170,
      render: (patient) => <ListPatientInfo patientData={patient} />
   },
   {
      title: 'Мэс засал',
      dataIndex: ['taskWorkers', 'surgery', 'name']
   },
   {
      title: 'Онош',
      dataIndex: 'icdCode'
   },
   {
      title: 'Хугацаа',
      dataIndex: 'durationTime',
      render: (text) => {
         if (text) return text;
         return '?';
      }
   },
   {
      title: 'Өрөө',
      dataIndex: ['room', 'roomNumber']
   },
   {
      title: 'Төлөв',
      width: 100,
      dataIndex: ['currentColumn', 'column', 'id'],
      render: (id) => getTypeInfoSurgury(id)
   }
];
