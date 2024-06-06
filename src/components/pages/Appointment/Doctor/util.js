import React from 'react';
import dayjs from 'dayjs';
import { AppointmentStatus } from '../appointment-enum';
import moment from 'moment';
import { numberToCurrency } from '@Comman/common';

const renderText = (text) => <p className="whitespace-normal text-black pl-2">{text}</p>;

export const insuranceColumns = [
   {
      title: 'Огноо',
      dataIndex: 'createdDate',
      width: 100,
      render: (text) => dayjs(text).format('YYYY-MM-DD')
   },
   {
      title: 'Эмнэлэг',
      dataIndex: 'hospitalName',
      render: renderText
   },
   {
      title: 'Үйлчилгээний нэр',
      dataIndex: 'serviceName',
      render: renderText
   },
   {
      title: 'Төлөв',
      dataIndex: 'status',
      render: renderText
   }
];

export const inspectionColumns = [
   {
      title: 'Огноо',
      dataIndex: 'createdAt',
      width: 140,
      render: (text) => moment(text).format('YYYY-MM-DD HH:mm')
   },
   {
      title: 'Кабинет',
      dataIndex: ['appointment', 'cabinet', 'name'],
      className: 'whitespace-normal text-black',
      render: renderText
   },
   {
      title: 'Эмч',
      dataIndex: ['appointment', 'employee', 'firstName'],
      className: 'whitespace-normal text-black',
      render: renderText
   },
   {
      title: 'Төлөв',
      dataIndex: 'status',
      className: 'whitespace-normal',
      render: (value) => {
         switch (value) {
            case AppointmentStatus.Booked:
               return 'Цаг захиалсан';
            case AppointmentStatus.Revalide:
               return 'Цаг солисон';
            case AppointmentStatus.SystemRefund:
               return 'Цаг цуцалсан';
            case AppointmentStatus.Inspecting:
               return 'Үзлэг хийсэн';
            default:
               return '';
         }
      }
   }
];

export const paymentColumns = [
   {
      title: 'Огноо',
      dataIndex: 'updatedAt',
      width: 140,
      className: 'whitespace-normal',
      render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm')
   },
   {
      title: 'Үйлчилгээний нэр',
      dataIndex: 'name',
      className: 'whitespace-normal text-black',
      render: renderText
   },
   {
      title: 'Төлбөр',
      dataIndex: 'amount',
      className: 'whitespace-normal',
      render: (text) => numberToCurrency(text)
   }
];
