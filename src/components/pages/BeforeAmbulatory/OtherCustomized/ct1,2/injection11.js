import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { formatNameForDoc } from '../../../../comman';

const other = {
   onCell: (row) => {
      const { state } = returnIcon(row.data?.['q1-2-1'], 'q1-2-1-1');
      return {
         colSpan: state ? 1 : 0
      };
   },
   render: (q) => {
      const { icon } = returnIcon(q, 'q1-2-1-1');
      return icon;
   }
};

const returnIcon = (q, key) => {
   if (q === key) {
      return {
         state: true,
         icon: <CheckOutlined />
      };
   } else if (q) {
      return {
         state: true,
         icon: <CloseOutlined />
      };
   }
   return {
      state: false,
      icon: null
   };
};

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
            onCell: (row) => returnCell(row.data?.q1, 'q1-3', 5),
            render: (q) => {
               if (q === 'q1-1') {
                  return <CheckOutlined />;
               } else if (q === 'q1-2') {
                  return <CloseOutlined />;
               } else if (q === 'q1-3') {
                  return '/';
               }
            }
         },
         {
            title: 'Жигд бус',
            children: [
               {
                  title: 'Өнгөц',
                  dataIndex: ['data', 'q1-2-1'],
                  ...other
               },
               {
                  title: 'Гүн',
                  dataIndex: ['data', 'q1-2-1'],
                  ...other
               },
               {
                  title: 'Тоо олширсон',
                  dataIndex: ['data', 'q1-2-1'],
                  ...other
               },
               {
                  title: 'Тоо цөөрсөн',
                  dataIndex: ['data', 'q1-2-1'],
                  ...other
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
            onCell: (row) => returnCell(row.data?.q2, 'q2-3', 3),
            render: (q) => {
               if (q === 'q2-1') {
                  return <CheckOutlined />;
               } else if (q === 'q2-2') {
                  return <CloseOutlined />;
               } else if (q === 'q2-3') {
                  return '/';
               }
            }
         },
         {
            title: 'Хэвийн бус',
            children: [
               {
                  title: 'Сул',
                  dataIndex: ['data', 'q2-2-1'],
                  onCell: (row) => returnCell(row.data?.q2, 'q2-2-1-1', 0),
                  render: (q) => returnIcon(q, 'q2-2-1-1')
               },
               {
                  title: 'Тод',
                  dataIndex: ['data', 'q2-2-1'],
                  onCell: (row) => returnCell(row.data?.q2, 'q2-2-1-2', 0),
                  render: (q) => returnIcon(q, 'q2-2-1-2')
               }
            ]
         }
      ]
   },
   {
      title: 'Ханиалгалт',
      children: [
         {
            title: 'Үгүй'
         },
         {
            title: 'Цэргүй'
         },
         {
            title: 'Цэртэй'
         }
      ]
   },
   {
      title: 'Хаван',
      children: [
         {
            title: 'Хавангүй'
         },
         {
            title: 'Хавантай',
            children: [
               {
                  title: 'Бүх биеэр'
               },
               {
                  title: 'Нүүрэнд'
               },
               {
                  title: 'Зовхинд'
               },
               {
                  title: 'Хэвлийд'
               },
               {
                  title: 'Шилбэнд'
               }
            ]
         }
      ]
   },
   {
      title: 'Хялгасан судасны дахин дүүрэлт',
      children: [
         {
            title: '2 секундээс бага'
         },
         {
            title: '2 секундээс удаан'
         }
      ]
   },
   {
      title: 'Зүрхний хэм',
      children: [
         {
            title: 'Жигд'
         },
         {
            title: 'Хэм алдагдсан'
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
