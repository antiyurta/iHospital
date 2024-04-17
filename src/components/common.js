import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
import mnMn from 'antd/es/locale/mn_MN';
import mnMnn from 'antd/es/calendar/locale/mn_MN';
import DiagnoseTypes from './pages/service/DiagnoseTypes.js';
import moment from 'moment';
import { NumericFormat } from 'react-number-format';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

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

export function newMoment(date) {
   return moment(date).format('YYYY-MM-DD');
}

export async function Get(url, token, config) {
   config.headers['Authorization'] = `Bearer ${token}`;
   config.headers['x-api-key'] = API_KEY;
   return new Promise((resolve, reject) => {
      axios
         .get(DEV_URL + url, config)
         .then((response) => {
            if (response.status === 200) {
               resolve(response.data.response);
            } else if (response.status === 401) {
               console.log('NEWTER COMMAN JS');
            }
         })
         .catch((error) => {
            if (error.response?.status === 401) {
               resolve({ data: [], meta: {}, status: 401 });
            } else if (
               (error?.response?.status === 400 && error?.response?.data?.status === 409) ||
               (error?.response?.status === 400 && error?.response?.data?.name === 'HttpException') ||
               (error?.response?.status === 400 && error?.response?.data?.statusCode === 400)
            ) {
               const err = error.response?.data?.message;
               if (typeof err === 'object') {
                  err.map((er) => {
                     openNofi('error', 'Алдаа', `${er}`);
                  });
               } else {
                  const message = err.replaceAll('HttpException:', '');
                  openNofi('error', 'Алдаа', message);
               }
            } else {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
               reject({ data: [], meta: {} });
            }

            resolve(400);
         });
   });
}

export async function DefualtGet(url, token, config) {
   config.headers['Authorization'] = `Bearer ${token}`;
   config.headers['x-api-key'] = API_KEY;
   return new Promise((resolve, reject) => {
      axios
         .get(DEV_URL + url, config)
         .then((response) => {
            if (response.status === 200) {
               resolve(response.data);
            } else if (response.status === 401) {
               console.log('NEWTER COMMAN JS');
            }
         })
         .catch((error) => {
            if (error.response.status === 401) {
               resolve({ data: [], meta: {}, status: 401 });
            } else if (
               (error?.response?.status === 400 && error?.response?.data?.status === 409) ||
               (error?.response?.status === 400 && error?.response?.data?.name === 'HttpException') ||
               (error?.response?.status === 400 && error?.response?.data?.statusCode === 400)
            ) {
               const err = error.response?.data?.message;
               if (typeof err === 'object') {
                  err.map((er) => {
                     openNofi('error', 'Алдаа', `${er}`);
                  });
               } else {
                  const message = err.replaceAll('HttpException:', '');
                  openNofi('error', 'Алдаа', message);
               }
            } else {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
               reject({ data: [], meta: {} });
            }

            resolve(400);
         });
   });
}

export async function Post(url, token, config, data) {
   config.headers['Authorization'] = `Bearer ${token}`;
   config.headers['x-api-key'] = API_KEY;
   return new Promise((resolve, reject) => {
      axios
         .post(DEV_URL + url, data, config)
         .then((response) => {
            if (response.status === 201) {
               openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
               resolve(201);
            } else if (response.status === 401) {
               console.log('NEWTER COMMAN JS');
            } else {
               resolve(201);
            }
         })
         .catch((error) => {
            console.log(error);
            if (
               (error?.response?.status === 400 && error?.response?.data?.status === 409) ||
               (error?.response?.status === 400 && error?.response?.data?.name === 'HttpException') ||
               (error?.response?.status === 400 && error?.response?.data?.statusCode === 400)
            ) {
               const err = error.response?.data?.message;
               if (typeof err === 'object') {
                  err.map((er) => {
                     openNofi('error', 'Алдаа', `${er}`);
                  });
               } else {
                  const message = err.replaceAll('HttpException:', '');
                  openNofi('error', 'Алдаа', message);
               }
            } else {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
            }
            resolve(400);
         });
   });
}

export async function DefaultPost(url, token, config, data) {
   config.headers['Authorization'] = `Bearer ${token}`;
   config.headers['x-api-key'] = API_KEY;
   return new Promise((resolve, reject) => {
      axios
         .post(DEV_URL + url, data, config)
         .then((response) => {
            if (response.status === 201) {
               openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
               resolve(response.data.response);
            } else if (response.status === 401) {
               console.log('NEWTER COMMAN JS');
            } else {
               resolve(201);
            }
         })
         .catch((error) => {
            if (error.response.status === 400) {
               openNofi('error', 'Алдаа', error.response.data.response);
            } else {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
            }
            resolve(400);
         });
   });
}

export async function Patch(url, token, config, data) {
   config.headers['Authorization'] = `Bearer ${token}`;
   config.headers['x-api-key'] = API_KEY;
   return new Promise((resolve, reject) => {
      axios
         .patch(DEV_URL + url, data, config)
         .then((response) => {
            if (response.status === 200) {
               openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
               resolve(200);
            } else if (response.status === 401) {
               console.log('NEWTER COMMAN JS');
            }
         })
         .catch((error) => {
            console.log(error);
            if (error.response.status === 400) {
               const message = error.response?.data?.message?.replaceAll('HttpException:', '');
               openNofi('error', 'Алдаа', message);
            } else {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
            }
            resolve(400);
         });
   });
}
export async function DefaultPatch(url, token, config, data) {
   config.headers['Authorization'] = `Bearer ${token}`;
   config.headers['x-api-key'] = API_KEY;
   return new Promise((resolve, reject) => {
      axios
         .patch(DEV_URL + url, data, config)
         .then((response) => {
            if (response.status === 200) {
               openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
               resolve(response.data.response);
            } else if (response.status === 401) {
               console.log('NEWTER COMMAN JS');
            } else {
               resolve(201);
            }
         })
         .catch((error) => {
            if (error.response.status === 400) {
               openNofi('error', 'Алдаа', error.response.data.response);
            } else {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
            }
            resolve(400);
         });
   });
}

export async function Delete(url, token, config) {
   config.headers['Authorization'] = `Bearer ${token}`;
   config.headers['x-api-key'] = API_KEY;
   return new Promise((resolve, reject) => {
      axios
         .delete(DEV_URL + url, config)
         .then((response) => {
            if (response.status === 200) {
               openNofi('success', 'Амжилттай', 'Амжиллтай устгагдасан');
               resolve(200);
            } else if (response.status === 401) {
               console.log('NEWTER COMMAN JS');
            }
         })
         .catch((error) => {
            if (error.response.status === 400) {
               openNofi('error', 'Алдаа', 'Устгах боложгүй');
               resolve(400);
            } else {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
               resolve(400);
            }
         });
   });
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
      message: `${message}`,
      description: `${description}`
   });
};

export const numberToCurrency = (amount) => {
   return (
      <NumericFormat
         value={amount?.toFixed(2)}
         displayType={'text'}
         thousandSeparator={true}
         fixedDecimalScale={true}
         suffix={' ₮'}
      />
   );
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
export const dataToTree = (data) => {
   let treeData = [];
   data?.map((element, idx) => {
      let date = new Date(element.createdAt);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (treeData.length > 0) {
         treeData.map((tree, index) => {
            if (tree.title === year) {
               if (!!tree.children.find((e) => e.title === `${month}-${day}`)) {
                  const index = tree.children.findIndex((e) => e.title === `${month}-${day}`);
                  tree.children[index].children.push({
                     title: element.xray.name,
                     key: element.id,
                     isLeaf: true
                  });
               } else {
                  tree.children.push({
                     title: `${month}-${day}`,
                     key: `${idx}-${index}`,
                     children: [
                        {
                           title: element.xray.name,
                           key: element.id,
                           isLeaf: true
                        }
                     ]
                  });
               }
            }
         });
      } else {
         treeData.push({
            title: year,
            key: `${idx}`,
            children: [
               {
                  title: `${month}-${day}`,
                  key: `${idx}-${idx}`,
                  children: [
                     {
                        title: element.xray.name,
                        key: element.id,
                        isLeaf: true
                     }
                  ]
               }
            ]
         });
      }
   });
   return treeData;
};
export const dateReduceTree = (data) => {
   const date = '2023-04-30';
   let i = 4;
   function rec(index) {
      if (index + i <= 10) {
         var result = data.reduce(function (r, a) {
            r[a.createdAt.substring(index, index + i)] = r[a.createdAt.substring(index, index + i)] || [];
            r[a.createdAt.substring(index, index + i)].push(a);
            return r;
         }, Object.create(null));
         console.log('======>', date.substring(index, index + i));
         i = i + 1;
         return rec(index + i);
      } else {
         return 1;
      }
   }
   if (data?.length > 0) {
      console.log(rec(0));
   }
};
export const isObjectEmpty = (object) => {
   return Object.keys(object).length === 0;
};
export const inspectionTOJSON = (inspectionNote) => {
   var data = {};
   if (inspectionNote.inspection) {
      data['inspection'] = JSON.parse(inspectionNote.inspection);
   }
   if (inspectionNote.pain) {
      data['pain'] = JSON.parse(inspectionNote.pain);
   }
   if (inspectionNote.plan) {
      data['plan'] = JSON.parse(inspectionNote.plan);
   }
   if (inspectionNote.question) {
      data['question'] = JSON.parse(inspectionNote.question);
   }
   if (inspectionNote.advice) {
      data['advice'] = JSON.parse(inspectionNote.advice);
   }
   if (inspectionNote.conclusion) {
      data['conclusion'] = JSON.parse(inspectionNote.conclusion);
   }
   return data;
};

export const diagnoseTypeInfo = (diagnoseTypeId) => {
   return DiagnoseTypes.find((e) => e.value === diagnoseTypeId)?.label;
};
