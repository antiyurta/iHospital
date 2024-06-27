import React from 'react';
import { notification } from '@Features/AppGlobal.js';
import mnMn from 'antd/es/locale/mn_MN';
import mnMnn from 'antd/es/calendar/locale/mn_MN';
import DiagnoseTypes from './pages/service/DiagnoseTypes.js';
import { NumericFormat } from 'react-number-format';

export function capitalizeFirstLetter(str) {
   if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
   }
   return;
}

export function regToDate(registerNumber) {
   if (registerNumber) {
      const date = new Date();
      let year = Number(registerNumber.substring(2, 4));
      let month = Number(registerNumber.substring(4, 6));
      const day = Number(registerNumber.substring(6, 8));
      if (month > 20 && month < 33) {
         year = year + 2000;
         month = month - 20;
      } else {
         year = year + 1900;
      }
      date.setFullYear(year);
      date.setMonth(month - 1);
      date.setDate(day);
      return date;
   }
   return;
}

export function formatNameForDoc(lastName, firstName) {
   if (lastName && firstName) {
      return `${lastName.substring(0, 1).toUpperCase()}.${firstName}`;
   } else if (lastName) {
      return lastName;
   } else if (firstName) {
      return firstName.substring(0, 1);
   } else {
      return;
   }
}

export function localMn() {
   return mnMn;
}
export function localMnC() {
   return mnMnn;
}

export const ScrollRef = (scrollRef) => {
   const el = scrollRef.current;
   if (el) {
      const wheelListener = (e) => {
         e.preventDefault();
         el.scrollTo({
            left: el.scrollLeft + e.deltaY * 100,
            behavior: 'smooth'
         });
      };
      el.addEventListener('wheel', wheelListener);
      return () => el.removeEventListener('wheel', wheelListener);
   }
};

export const openNofi = (type, message, description) => {
   notification[type]({
      message: message,
      description: description
   });
};

export const numberToCurrency = (amount) => (
   <NumericFormat
      value={amount?.toFixed(2)}
      displayType={'text'}
      thousandSeparator={true}
      fixedDecimalScale={true}
      suffix={' ₮'}
   />
);
export const getAgeYear = (registerNumber) => {
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
      return '';
   }
};
export const getAge = (registerNumber) => {
   if (registerNumber != undefined) {
      let year = parseInt(registerNumber.substring(2, 4));
      let month = parseInt(registerNumber.substring(4, 6));
      let day = parseInt(registerNumber.substring(6, 8));
      if (month > 20 && month < 33) {
         year += 2000;
         month -= 20;
      } else {
         year += 1900;
      }
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
      if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
         years--;
         months += 12;
      }
      if (days < 0) {
         months--;
         days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      return `${years} жил, ${months} сар, ${days} өдөр`;
   } else {
      return '';
   }
};
export const getGenderInType = (type) => {
   if (type === 'WOMAN') {
      return 'Эмэгтэй';
   } else if (type === 'MAN') {
      return 'Эрэгтэй';
   }
};
export const getGender = (registerNumber) => {
   if (registerNumber != undefined) {
      if (registerNumber[registerNumber.length - 2] % 2 === 1) {
         return 'Эр';
      } else {
         return 'Эм';
      }
   } else {
      return null;
   }
};

export const getGenderFullName = (registerNumber) => {
   if (registerNumber != undefined) {
      if (registerNumber[registerNumber.length - 2] % 2 === 1) {
         return 'Эрэгтэй';
      } else {
         return 'Эмэгтэй';
      }
   } else {
      return '';
   }
};

export const checkNumber = (event) => {
   var charCode = event.charCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
   } else {
      return true;
   }
};
export const isObjectEmpty = (object) => {
   return Object.keys(object).length === 0;
};
export const inspectionTOJSON = (inspectionNote) => {
   var data = {};
   if (inspectionNote?.inspection) {
      data['inspection'] = JSON.parse(inspectionNote.inspection || null);
   }
   if (inspectionNote?.pain) {
      data['pain'] = JSON.parse(inspectionNote.pain || null);
   }
   if (inspectionNote?.plan) {
      data['plan'] = JSON.parse(inspectionNote.plan || null);
   }
   if (inspectionNote?.question) {
      data['question'] = JSON.parse(inspectionNote.question || null);
   }
   if (inspectionNote?.advice) {
      data['advice'] = JSON.parse(inspectionNote.advice || null);
   }
   if (inspectionNote?.conclusion) {
      data['conclusion'] = JSON.parse(inspectionNote.conclusion || null);
   }
   return data;
};

export const diagnoseTypeInfo = (diagnoseTypeId) => {
   return DiagnoseTypes.find((e) => e.value === diagnoseTypeId)?.label;
};
