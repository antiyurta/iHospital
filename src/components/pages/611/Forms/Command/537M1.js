import React from 'react';
import { Table } from 'antd';

function C537M1({ isOpen }) {
   console.log(isOpen);
   const columns = [
      {
         title: 'Сар/Өдөр',
         className: 'whitespace-normal'
      },
      {
         title: 'Мэс заслын дараах хоног',
         className: 'whitespace-normal'
      },
      {
         title: 'Цаг',
         className: 'whitespace-normal'
      },
      {
         title: 'Өвдөлтийн байрлал',
         className: 'whitespace-normal'
      },
      {
         title: 'Өвдөлтийн хүч*',
         className: 'whitespace-normal',
         children: [
            {
               title: '1'
            },
            {
               title: '2'
            },
            {
               title: '3'
            },
            ,
            {
               title: '4'
            },
            {
               title: '5'
            },
            {
               title: '6'
            },
            {
               title: '7'
            },
            {
               title: '8'
            },
            {
               title: '9'
            },
            {
               title: '10'
            }
         ]
      },
      {
         title: 'Ямар өвдөлт байгаа вэ? /Жишээ нь чинэрч өвдөх, хатгаж өвдөх/',
         className: 'whitespace-normal'
      },
      {
         title: 'Өвдөлтийн давтамж',
         className: 'whitespace-normal',
         children: [
            {
               title: 'Босч явах үед',
               className: 'whitespace-normal'
            },
            {
               title: 'Дандаа'
            },
            {
               title: 'Өвдөөд унтаж чадахгүй',
               className: 'whitespace-normal'
            }
         ]
      },
      {
         title: 'Өвдөлт, үйл ажиллагааны байршлаар',
         className: 'whitespace-normal',
         children: [
            {
               title: 'Хооллоход',
               className: 'whitespace-normal'
            },
            {
               title: 'Ялгаруулалтын үед',
               className: 'whitespace-normal'
            },
            {
               title: 'Сууж/босоход',
               className: 'whitespace-normal'
            },
            {
               title: 'Бусад хөдөлгөөн хийхэд',
               className: 'whitespace-normal'
            }
         ]
      },
      {
         title: 'Эмийн бус аргууд',
         className: 'whitespace-normal',
         children: [
            {
               title: 'Халуун жин',
               className: 'whitespace-normal'
            },
            {
               title: 'Хүйтэн жин',
               className: 'whitespace-normal'
            },
            {
               title: 'Зүү',
               className: 'whitespace-normal'
            },
            {
               title: 'Дасгал',
               className: 'whitespace-normal'
            },
            {
               title: 'Массаж',
               className: 'whitespace-normal'
            },
            {
               title: 'Физик эмчилгээ',
               className: 'whitespace-normal'
            },
            {
               title: 'Бусад',
               className: 'whitespace-normal'
            }
         ]
      }
   ];
   return (
      <div>
         <Table
            rowKey={'id'}
            bordered
            scroll={{
               x: 1400
            }}
            columns={columns}
            dataSource={[]}
         />
      </div>
   );
}
export default C537M1;
