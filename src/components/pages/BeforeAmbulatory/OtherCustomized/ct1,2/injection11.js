import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../../comman';

const Slash = () => (
   <span role="img" className="flex justify-center">
      <svg width="13px" height="13px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
   </span>
);

const GreenCheck = () => (
   <CheckOutlined
      style={{
         color: 'green'
      }}
   />
);

const returnCell = (q, key, count) => {
   if (q === key) {
      return {
         colSpan: count
      };
   }
   return;
};

export const columns1 = [
   {
      title: 'Огноо',
      dataIndex: 'createdAt',
      render: (createdAt) => {
         return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
      }
   },
   {
      title: 'Амьсгал',
      children: [
         {
            title: 'Жигд',
            dataIndex: ['data', 'q1'],
            render: (q) => {
               if (q === 'q1-1') {
                  return <GreenCheck />;
               } else if (q === 'q1-2') {
                  return <CloseOutlined />;
               } else if (q === 'q1-3') {
                  return <Slash />;
               }
            }
         },
         {
            title: 'Жигд бус',
            children: [
               {
                  title: 'Өнгөц',
                  dataIndex: ['data', 'q1-2-1'],
                  render: (q, row) => {
                     if (row.data?.q1 === 'q1-3') return <Slash />;
                     else if (q === 'q1-2-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Гүн',
                  dataIndex: ['data', 'q1-2-1'],
                  render: (q, row) => {
                     if (row.data?.q1 === 'q1-3') return <Slash />;
                     else if (q === 'q1-2-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Тоо олширсон',
                  dataIndex: ['data', 'q1-2-1'],
                  render: (q, row) => {
                     if (row.data?.q1 === 'q1-3') return <Slash />;
                     else if (q === 'q1-2-1-3') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Тоо цөөрсөн',
                  dataIndex: ['data', 'q1-2-1'],
                  render: (q, row) => {
                     if (row.data?.q1 === 'q1-3') return <Slash />;
                     else if (q === 'q1-2-1-4') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         }
      ]
   },
   {
      title: 'Чимээ',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q2'],
            render: (q) => {
               if (q === 'q2-1') {
                  return <GreenCheck />;
               } else if (q === 'q2-3') {
                  return <Slash />;
               } else {
                  return <CloseOutlined />;
               }
            }
         },
         {
            title: 'Хэвийн бус',
            children: [
               {
                  title: 'Сул',
                  dataIndex: ['data', 'q2-2-1'],
                  render: (q, row) => {
                     if (row.data?.q2 === 'q2-3') return <Slash />;
                     else if (q === 'q2-2-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Тод',
                  dataIndex: ['data', 'q2-2-1'],
                  render: (q, row) => {
                     if (row.data?.q2 === 'q2-3') return <Slash />;
                     else if (q === 'q2-2-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         }
      ]
   },
   {
      title: 'Ханиалгалт',
      children: [
         {
            title: 'Үгүй',
            dataIndex: ['data', 'q3'],
            render: (q, row) => {
               if (row.data?.q3 === 'q3-4') return <Slash />;
               else if (q === 'q3-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Цэргүй',
            dataIndex: ['data', 'q3'],
            render: (q, row) => {
               if (row.data?.q3 === 'q3-4') return <Slash />;
               else if (q === 'q3-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Цэртэй',
            dataIndex: ['data', 'q3'],
            render: (q, row) => {
               if (row.data?.q3 === 'q3-4') return <Slash />;
               else if (q === 'q3-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Хаван',
      children: [
         {
            title: 'Хавангүй',
            dataIndex: ['data', 'q4'],
            render: (q) => {
               if (q === 'q4-1') {
                  return <GreenCheck />;
               } else if (q === 'q4-3') {
                  return <Slash />;
               } else {
                  return <CloseOutlined />;
               }
            }
         },
         {
            title: 'Хавантай',
            children: [
               {
                  title: 'Бүх биеэр',
                  dataIndex: ['data', 'q4-2-1'],
                  render: (q, row) => {
                     if (row.data?.q4 === 'q4-3') return <Slash />;
                     else if (q === 'q4-2-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Нүүрэнд',
                  dataIndex: ['data', 'q4-2-1'],
                  render: (q, row) => {
                     if (row.data?.q4 === 'q4-3') return <Slash />;
                     else if (q === 'q4-2-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Зовхинд',
                  dataIndex: ['data', 'q4-2-1'],
                  render: (q, row) => {
                     if (row.data?.q4 === 'q4-3') return <Slash />;
                     else if (q === 'q4-2-1-3') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Хэвлийд',
                  dataIndex: ['data', 'q4-2-1'],
                  render: (q, row) => {
                     if (row.data?.q4 === 'q4-3') return <Slash />;
                     else if (q === 'q4-2-1-4') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Шилбэнд',
                  dataIndex: ['data', 'q4-2-1'],
                  render: (q, row) => {
                     if (row.data?.q4 === 'q4-3') return <Slash />;
                     else if (q === 'q4-2-1-5') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         }
      ]
   },
   {
      title: 'Хялгасан судасны дахин дүүрэлт',
      children: [
         {
            title: '2 секундээс бага',
            dataIndex: ['data', 'q5'],
            render: (q) => {
               if (q === 'q5-3') return <Slash />;
               else if (q === 'q5-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: '2 секундээс удаан',
            dataIndex: ['data', 'q5'],
            render: (q) => {
               if (q === 'q5-3') return <Slash />;
               else if (q === 'q5-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Зүрхний хэм',
      children: [
         {
            title: 'Жигд',
            dataIndex: ['data', 'q6'],
            render: (q) => {
               if (q === 'q6-3') return <Slash />;
               else if (q === 'q6-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хэм алдагдсан',
            dataIndex: ['data', 'q6'],
            render: (q) => {
               if (q === 'q6-3') return <Slash />;
               else if (q === 'q6-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Сувилагч',
      dataIndex: 'createdBy',
      render: (text) => {
         return formatNameForDoc(text.lastName, text.firstName);
      }
   }
];

export const columns2 = [
   {
      title: 'Огноо',
      dataIndex: 'createdAt',
      render: (createdAt) => {
         return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
      }
   },
   {
      title: 'Хооллолт',
      children: [
         {
            title: 'Амаар',
            dataIndex: ['data', 'q7'],
            render: (q) => {
               if (q === 'q7-4') return <Slash />;
               else if (q === 'q7-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Гуурсаар',
            dataIndex: ['data', 'q7'],
            render: (q) => {
               if (q === 'q7-4') return <Slash />;
               else if (q === 'q7-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Бусад замаар (судсаар...)',
            dataIndex: ['data', 'q7'],
            render: (q) => {
               if (q === 'q7-4') return <Slash />;
               else if (q === 'q7-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Хоолны дэглэм',
      children: [
         {
            title: 'Хоол хориогүй',
            dataIndex: ['data', 'q8'],
            render: (q) => {
               if (q === 'q8-3') return <Slash />;
               else if (q === 'q8-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хоол хориотой',
            dataIndex: ['data', 'q8'],
            render: (q) => {
               if (q === 'q8-3') return <Slash />;
               else if (q === 'q8-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Хоолны дуршил',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q9'],
            render: (q) => {
               if (q === 'q9-5') return <Slash />;
               else if (q === 'q9-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Өөрчлөлттэй',
            dataIndex: ['data', 'q9'],
            render: (q) => {
               if (q === 'q9-5') return <Slash />;
               else if (q === 'q9-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Огиулалттай',
            dataIndex: ['data', 'q9'],
            render: (q) => {
               if (q === 'q9-5') return <Slash />;
               else if (q === 'q9-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Бөөлжүүлнэ',
            dataIndex: ['data', 'q9'],
            render: (q) => {
               if (q === 'q9-5') return <Slash />;
               else if (q === 'q9-4') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Хэвлий',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q10'],
            render: (q) => {
               if (q === 'q10-4') return <Slash />;
               else if (q === 'q10-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Цэрдийсэн',
            dataIndex: ['data', 'q10'],
            render: (q) => {
               if (q === 'q10-4') return <Slash />;
               else if (q === 'q10-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хонхойж татагдсан',
            dataIndex: ['data', 'q10'],
            render: (q) => {
               if (q === 'q10-4') return <Slash />;
               else if (q === 'q10-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Өтгөн',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q11'],
            render: (q) => {
               if (q === 'q11-5') return <Slash />;
               else if (q === 'q11-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хатуу',
            dataIndex: ['data', 'q11'],
            render: (q) => {
               if (q === 'q11-5') return <Slash />;
               else if (q === 'q11-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Шингэн',
            dataIndex: ['data', 'q11'],
            render: (q) => {
               if (q === 'q11-5') return <Slash />;
               else if (q === 'q11-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Өнгө өөрчлөгдсөн',
            dataIndex: ['data', 'q11'],
            render: (q) => {
               if (q === 'q11-5') return <Slash />;
               else if (q === 'q11-4') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Сувилагч',
      dataIndex: 'createdBy',
      render: (text) => {
         return formatNameForDoc(text.lastName, text.firstName);
      }
   }
];

export const columns3 = [
   {
      title: 'Огноо',
      dataIndex: 'createdAt',
      render: (createdAt) => {
         return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
      }
   },
   {
      title: 'Шээс',
      children: [
         {
            title: 'Шээсний гарц',
            children: [
               {
                  title: 'Хэвийн',
                  dataIndex: ['data', 'q12'],
                  render: (q) => {
                     if (q === 'q12-4') return <Slash />;
                     else if (q === 'q12-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Ихэссэн',
                  dataIndex: ['data', 'q12'],
                  render: (q) => {
                     if (q === 'q12-4') return <Slash />;
                     else if (q === 'q12-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Багассан',
                  dataIndex: ['data', 'q12'],
                  render: (q) => {
                     if (q === 'q12-4') return <Slash />;
                     else if (q === 'q12-3') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         },
         {
            title: 'Зовиур',
            children: [
               {
                  title: 'Өвдөлттэй*',
                  dataIndex: ['data', 'q13'],
                  render: (q) => {
                     if (q === 'q13-5') return <Slash />;
                     else if (q === 'q13-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Дүлэлттэй',
                  dataIndex: ['data', 'q13'],
                  render: (q) => {
                     if (q === 'q13-5') return <Slash />;
                     else if (q === 'q13-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Тасалдсан',
                  dataIndex: ['data', 'q13'],
                  render: (q) => {
                     if (q === 'q13-5') return <Slash />;
                     else if (q === 'q13-3') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Задгайрсан',
                  dataIndex: ['data', 'q13'],
                  render: (q) => {
                     if (q === 'q13-5') return <Slash />;
                     else if (q === 'q13-4') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         },
         {
            title: 'Өнгө, үнэр',
            children: [
               {
                  title: 'Өөрчлөлтгүй',
                  dataIndex: ['data', 'q14'],
                  render: (q) => {
                     if (q === 'q14-3') return <Slash />;
                     else if (q === 'q14-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Өөрчлөлттэй',
                  dataIndex: ['data', 'q14'],
                  render: (q) => {
                     if (q === 'q14-3') return <Slash />;
                     else if (q === 'q14-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         },
         {
            title: 'Шээлгүүргүй',
            dataIndex: ['data', 'q15'],
            render: (q) => {
               if (q === 'q15-3') return <Slash />;
               else if (q === 'q15-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Шээлгүүртэй',
            dataIndex: ['data', 'q15'],
            render: (q) => {
               if (q === 'q15-3') return <Slash />;
               else if (q === 'q15-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Сувилагч',
      dataIndex: 'createdBy',
      render: (text) => {
         return formatNameForDoc(text.lastName, text.firstName);
      }
   }
];

export const columns4 = [
   {
      title: 'Огноо',
      dataIndex: 'createdAt',
      render: (createdAt) => {
         return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
      }
   },
   {
      title: 'Арьсны байдал',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q16'],
            render: (q) => {
               if (q === 'q16-3') return <Slash />;
               else if (q === 'q16-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Өөрчлөлттэй*',
            children: [
               {
                  title: 'Улайсан',
                  dataIndex: ['data', 'q16-2-1'],
                  render: (q, row) => {
                     if (row.data?.q16 === 'q16-3') return <Slash />;
                     else if (q === 'q16-2-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Хавдсан',
                  dataIndex: ['data', 'q16-2-1'],
                  render: (q, row) => {
                     if (row.data?.q16 === 'q16-3') return <Slash />;
                     else if (q === 'q16-2-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Зүсэгдсэн',
                  dataIndex: ['data', 'q16-2-1'],
                  render: (q, row) => {
                     if (row.data?.q16 === 'q16-3') return <Slash />;
                     else if (q === 'q16-2-1-3') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Шүүс гарсан',
                  dataIndex: ['data', 'q16-2-1'],
                  render: (q, row) => {
                     if (row.data?.q16 === 'q16-3') return <Slash />;
                     else if (q === 'q16-2-1-4') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Идээлсэн',
                  dataIndex: ['data', 'q16-2-1'],
                  render: (q, row) => {
                     if (row.data?.q16 === 'q16-3') return <Slash />;
                     else if (q === 'q16-2-1-5') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Тууралттай',
                  dataIndex: ['data', 'q16-2-1'],
                  render: (q, row) => {
                     if (row.data?.q16 === 'q16-3') return <Slash />;
                     else if (q === 'q16-2-1-6') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Цооролттой',
                  dataIndex: ['data', 'q16-2-1'],
                  render: (q, row) => {
                     if (row.data?.q16 === 'q16-3') return <Slash />;
                     else if (q === 'q16-2-1-7') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         }
      ]
   },
   {
      title: 'Арьсны эрүүл ахуй',
      children: [
         {
            title: 'Бүх биеийн угаалга хийх',
            children: [
               {
                  title: 'Шаардлагагүй',
                  dataIndex: ['data', 'q17-1-1'],
                  render: (q, row) => {
                     if (row.data?.q17 === 'q17-4') return <Slash />;
                     else if (q === 'q17-1-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Шаардлагатай',
                  dataIndex: ['data', 'q17-1-1'],
                  render: (q, row) => {
                     if (row.data?.q17 === 'q17-4') return <Slash />;
                     else if (q === 'q17-1-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         },
         {
            title: 'Хэсэгчилсэн угаалга хийх',
            children: [
               {
                  title: 'Шаардлагагүй',
                  dataIndex: ['data', 'q17-2-1'],
                  render: (q, row) => {
                     if (row.data?.q17 === 'q17-4') return <Slash />;
                     else if (q === 'q17-2-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Шаардлагатай',
                  dataIndex: ['data', 'q17-2-1'],
                  render: (q, row) => {
                     if (row.data?.q17 === 'q17-4') return <Slash />;
                     else if (q === 'q17-2-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         },
         {
            title: 'Ор цэвэрлэх',
            children: [
               {
                  title: 'Шаардлагагүй',
                  dataIndex: ['data', 'q17-3-1'],
                  render: (q, row) => {
                     if (row.data?.q17 === 'q17-4') return <Slash />;
                     else if (q === 'q17-3-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Шаардлагатай',
                  dataIndex: ['data', 'q17-3-1'],
                  render: (q, row) => {
                     if (row.data?.q17 === 'q17-4') return <Slash />;
                     else if (q === 'q17-3-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         }
      ]
   },
   {
      title: 'Мэс заслын шарх',
      children: [
         {
            title: 'Боолт',
            children: [
               {
                  title: 'Цэвэр',
                  dataIndex: ['data', 'q18-1-1'],
                  render: (q, row) => {
                     if (row.data?.q18 === 'q18-3') return <Slash />;
                     else if (q === 'q18-1-1-1') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               },
               {
                  title: 'Бохир',
                  dataIndex: ['data', 'q18-1-1'],
                  render: (q, row) => {
                     if (row.data?.q18 === 'q18-3') return <Slash />;
                     else if (q === 'q18-1-1-2') return <GreenCheck />;
                     else return <CloseOutlined />;
                  }
               }
            ]
         },
         {
            title: 'Гуурстай',
            dataIndex: ['data', 'q18'],
            render: (q) => {
               if (q === 'q18-3') return <Slash />;
               else if (q === 'q18-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Уян зүү тавьсан хэсэг',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q19'],
            render: (q) => {
               if (q === 'q19-4') return <Slash />;
               else if (q === 'q19-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Улайсан',
            dataIndex: ['data', 'q19'],
            render: (q) => {
               if (q === 'q19-4') return <Slash />;
               else if (q === 'q19-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хавдсан',
            dataIndex: ['data', 'q19'],
            render: (q) => {
               if (q === 'q19-4') return <Slash />;
               else if (q === 'q19-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Сувилагч',
      dataIndex: 'createdBy',
      render: (text) => {
         return formatNameForDoc(text.lastName, text.firstName);
      }
   }
];

export const columns5 = [
   {
      title: 'Огноо',
      dataIndex: 'createdAt',
      render: (createdAt) => {
         return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
      }
   },
   {
      title: 'Ухаан санааны байдал',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q20'],
            render: (q) => {
               if (q === 'q20-5') return <Slash />;
               else if (q === 'q20-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Сэтгэл хөөрлийн байдалтай',
            dataIndex: ['data', 'q20'],
            render: (q) => {
               if (q === 'q20-5') return <Slash />;
               else if (q === 'q20-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Сэтгэл түгшсэн байдалтай',
            dataIndex: ['data', 'q20'],
            render: (q) => {
               if (q === 'q20-5') return <Slash />;
               else if (q === 'q20-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Ухаангүй',
            dataIndex: ['data', 'q20'],
            render: (q) => {
               if (q === 'q20-5') return <Slash />;
               else if (q === 'q20-4') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Орчиндоо (бусадтай)',
      children: [
         {
            title: 'Харьцаатай',
            dataIndex: ['data', 'q21'],
            render: (q) => {
               if (q === 'q21-4') return <Slash />;
               else if (q === 'q21-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Сул',
            dataIndex: ['data', 'q21'],
            render: (q) => {
               if (q === 'q21-4') return <Slash />;
               else if (q === 'q21-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Харьцаагүй',
            dataIndex: ['data', 'q21'],
            render: (q) => {
               if (q === 'q21-4') return <Slash />;
               else if (q === 'q21-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Өвдөлт',
      children: [
         {
            title: 'Өвдөлтгүй',
            dataIndex: ['data', 'q22'],
            render: (q) => {
               if (q === 'q22-3') return <Slash />;
               else if (q === 'q22-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Өвдөлттэй*',
            dataIndex: ['data', 'q22'],
            render: (q) => {
               if (q === 'q22-3') return <Slash />;
               else if (q === 'q22-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Үе мөчний хөдөлгөөн',
      children: [
         {
            title: 'Хэвийн',
            dataIndex: ['data', 'q23'],
            render: (q) => {
               if (q === 'q23-4') return <Slash />;
               else if (q === 'q23-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хязгаардлагдмал',
            dataIndex: ['data', 'q23'],
            render: (q) => {
               if (q === 'q23-4') return <Slash />;
               else if (q === 'q23-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Үений хавдалттай',
            dataIndex: ['data', 'q23'],
            render: (q) => {
               if (q === 'q23-4') return <Slash />;
               else if (q === 'q23-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Сувилагч',
      dataIndex: 'createdBy',
      render: (text) => {
         return formatNameForDoc(text.lastName, text.firstName);
      }
   }
];

export const columns6 = [
   {
      title: 'Огноо',
      dataIndex: 'createdAt',
      render: (createdAt) => {
         return dayjs(createdAt).format('YYYY/MM/DD HH:mm');
      }
   },
   {
      title: 'Уян зүү',
      children: [
         {
            title: 'Тавьсан/сольсон',
            dataIndex: ['data', 'q24'],
            render: (q) => {
               if (q === 'q24-3') return <Slash />;
               else if (q === 'q24-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Бэхэлгээ хийсэн',
            dataIndex: ['data', 'q24'],
            render: (q) => {
               if (q === 'q24-3') return <Slash />;
               else if (q === 'q24-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Гуурсны арчилгаа',
      children: [
         {
            title: 'Хийх шаардлагагүй',
            dataIndex: ['data', 'q25'],
            render: (q) => {
               if (q === 'q25-3') return <Slash />;
               else if (q === 'q25-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хийгдсэн',
            dataIndex: ['data', 'q25'],
            render: (q) => {
               if (q === 'q25-3') return <Slash />;
               else if (q === 'q25-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Бургуй хийсэн',
      children: [
         {
            title: 'Цэвэрлэх бургуй/ тосон',
            dataIndex: ['data', 'q26'],
            render: (q) => {
               if (q === 'q26-4') return <Slash />;
               else if (q === 'q26-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Эмчилгээний бургуй',
            dataIndex: ['data', 'q26'],
            render: (q) => {
               if (q === 'q26-4') return <Slash />;
               else if (q === 'q26-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хий гаргах гуурс',
            dataIndex: ['data', 'q26'],
            render: (q) => {
               if (q === 'q26-4') return <Slash />;
               else if (q === 'q26-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Хэсэгчилсэн асаргаа',
      children: [
         {
            title: 'Халуун жин тавьсан',
            dataIndex: ['data', 'q27'],
            render: (q) => {
               if (q === 'q27-7') return <Slash />;
               else if (q === 'q27-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хүйтэн жин тавьсан',
            dataIndex: ['data', 'q27'],
            render: (q) => {
               if (q === 'q27-7') return <Slash />;
               else if (q === 'q27-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Халуун бигнүүр тавьсан',
            dataIndex: ['data', 'q27'],
            render: (q) => {
               if (q === 'q27-7') return <Slash />;
               else if (q === 'q27-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Хүйтэн бигнүүр тавьсан',
            dataIndex: ['data', 'q27'],
            render: (q) => {
               if (q === 'q27-7') return <Slash />;
               else if (q === 'q27-4') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Гич тавьсан',
            dataIndex: ['data', 'q27'],
            render: (q) => {
               if (q === 'q27-7') return <Slash />;
               else if (q === 'q27-5') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Бумба тавьсан',
            dataIndex: ['data', 'q27'],
            render: (q) => {
               if (q === 'q27-7') return <Slash />;
               else if (q === 'q27-6') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'ЭМБ/Зөвлөгөө өгөх',
      children: [
         {
            title: 'Өөрт нь зөвлөгөө өгсөн',
            dataIndex: ['data', 'q28'],
            render: (q) => {
               if (q === 'q28-3') return <Slash />;
               else if (q === 'q28-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Гэр бүлд нь зөвлөгөө өгсөн',
            dataIndex: ['data', 'q28'],
            render: (q) => {
               if (q === 'q28-3') return <Slash />;
               else if (q === 'q28-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Нөхөн сэргээх',
      children: [
         {
            title: 'Дасгал хөдөлгөөн хийлгэсэн',
            dataIndex: ['data', 'q29'],
            render: (q) => {
               if (q === 'q29-3') return <Slash />;
               else if (q === 'q29-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Иллэг массаж хийсэн',
            dataIndex: ['data', 'q29'],
            render: (q) => {
               if (q === 'q29-3') return <Slash />;
               else if (q === 'q29-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Байрлал',
      children: [
         {
            title: 'Сольсон /цаг/',
            dataIndex: ['data', 'q30'],
            render: (q) => {
               if (q === 'q30-3') return <Slash />;
               else if (q === 'q30-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Солих шаардлагагүй',
            dataIndex: ['data', 'q30'],
            render: (q) => {
               if (q === 'q30-3') return <Slash />;
               else if (q === 'q30-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Ариун цэвэр',
      children: [
         {
            title: 'Цагаан хэрэглэл сольсон',
            dataIndex: ['data', 'q31'],
            render: (q) => {
               if (q === 'q31-4') return <Slash />;
               else if (q === 'q31-1') return 'СУ';
               else if (q === 'q31-2') return 'Ө';
               else if (q === 'q31-3') return 'СА';
            }
         },
         {
            title: 'Үс угаасан',
            dataIndex: ['data', 'q32'],
            render: (q) => {
               if (q === 'q32-4') return <Slash />;
               else if (q === 'q32-1') return 'СУ';
               else if (q === 'q32-2') return 'Ө';
               else if (q === 'q32-3') return 'СА';
            }
         },
         {
            title: 'Үс самнасан',
            dataIndex: ['data', 'q33'],
            render: (q) => {
               if (q === 'q33-4') return <Slash />;
               else if (q === 'q33-1') return 'СУ';
               else if (q === 'q33-2') return 'Ө';
               else if (q === 'q33-3') return 'СА';
            }
         },
         {
            title: 'Сахал хуссан',
            dataIndex: ['data', 'q34'],
            render: (q) => {
               if (q === 'q34-4') return <Slash />;
               else if (q === 'q34-1') return 'СУ';
               else if (q === 'q34-2') return 'Ө';
               else if (q === 'q34-3') return 'СА';
            }
         },
         {
            title: 'Хувцас сольсон',
            dataIndex: ['data', 'q35'],
            render: (q) => {
               if (q === 'q35-4') return <Slash />;
               else if (q === 'q35-1') return 'СУ';
               else if (q === 'q35-2') return 'Ө';
               else if (q === 'q35-3') return 'СА';
            }
         },
         {
            title: 'Хөл гарын хумс авсан',
            dataIndex: ['data', 'q36'],
            render: (q) => {
               if (q === 'q36-4') return <Slash />;
               else if (q === 'q36-1') return 'СУ';
               else if (q === 'q36-2') return 'Ө';
               else if (q === 'q36-3') return 'СА';
            }
         },
         {
            title: 'Амны хөндий, шүд угаасан',
            dataIndex: ['data', 'q37'],
            render: (q) => {
               if (q === 'q37-4') return <Slash />;
               else if (q === 'q37-1') return 'СУ';
               else if (q === 'q37-2') return 'Ө';
               else if (q === 'q37-3') return 'СА';
            }
         }
      ]
   },
   {
      title: 'Хооллосон',
      dataIndex: ['data', 'q38'],
      render: (q) => {
         if (q === 'q38-4') return <Slash />;
         else if (q === 'q38-1') return 'СУ';
         else if (q === 'q38-2') return 'Ө';
         else if (q === 'q38-3') return 'СА';
      }
   },
   {
      title: 'Аюулгүй байдал',
      children: [
         {
            title: 'Онцгой анхаарах тэмдэг',
            dataIndex: ['data', 'q39'],
            render: (q) => {
               if (q === 'q39-5') return <Slash />;
               else if (q === 'q39-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Унаж бэртэхээс сэргийлэх',
            dataIndex: ['data', 'q39'],
            render: (q) => {
               if (q === 'q39-5') return <Slash />;
               else if (q === 'q39-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Орны хашлага',
            dataIndex: ['data', 'q39'],
            render: (q) => {
               if (q === 'q39-5') return <Slash />;
               else if (q === 'q39-3') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Тэргэнцэр, таяг',
            dataIndex: ['data', 'q39'],
            render: (q) => {
               if (q === 'q39-5') return <Slash />;
               else if (q === 'q39-4') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         }
      ]
   },
   {
      title: 'Нэмэлт',
      children: [
         {
            title: 'Шинжилгээнд авч явсан',
            dataIndex: ['data', 'q40'],
            render: (q) => {
               if (q === 'q40-3') return <Slash />;
               else if (q === 'q40-1') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Өрөө тасаг, шилжүүлсэн',
            dataIndex: ['data', 'q40'],
            render: (q) => {
               if (q === 'q40-3') return <Slash />;
               else if (q === 'q40-2') return <GreenCheck />;
               else return <CloseOutlined />;
            }
         },
         {
            title: 'Нэмэлт-1',
            dataIndex: ['data', 'q41']
         },
         {
            title: 'Нэмэлт-2',
            dataIndex: ['data', 'q42']
         },
         {
            title: 'Нэмэлт-3',
            dataIndex: ['data', 'q43']
         }
      ]
   },
   {
      title: 'Тусгай тэмдэглэл:',
      dataIndex: ['data', 'q44']
   },
   {
      title: 'Сувилагч',
      dataIndex: 'createdBy',
      render: (text) => {
         return formatNameForDoc(text.lastName, text.firstName);
      }
   }
];
