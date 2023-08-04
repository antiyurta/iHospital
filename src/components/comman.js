import axios from 'axios';
import { notification } from 'antd';
import mnMn from 'antd/es/locale/mn_MN';
import mnMnn from 'antd/es/calendar/locale/mn_MN';
import DiagnoseTypes from '../components/pages/service/DiagnoseTypes.json';
import moment from 'moment';
import { NumericFormat } from 'react-number-format';

import EbarimtService from '../services/ebarimt/ebarimt';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

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
         value={amount.toFixed(2)}
         displayType={'text'}
         thousandSeparator={true}
         fixedDecimalScale={true}
         prefix={'₮ '}
      />
   );
};

export const getAge = (registerNumber) => {
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
               console.log('asdasdasd', !!tree.children.find((e) => e.title === `${month}-${day}`));
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

export const expiredDateEbarimt = async () => {
   return await EbarimtService.getInformation().then(async (response) => {
      const data = response.data.response.result?.extraInfo;
      const date1 = new Date(data.lastSentdate);
      const date2 = new Date();
      var delta = Math.abs(date2 - date1) / 1000;
      var days = Math.floor(delta / 86400);
      delta -= days * 86400;
      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;
      var minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;
      if ((71 < days * 24 + hours && days * 24 + hours <= 72) || data.countBill === data.countLottery) {
         return await EbarimtService.sendData().then((response) => {
            if (response.data.response.result.errorCode === 0) {
               return true;
            } else {
               openNofi('info', 'Анхааруулга', response.data.response.result.message);
               return false;
            }
         });
      }
      return true;
   });
};
