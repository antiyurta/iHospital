import React, { useEffect, useState } from 'react';
import { Empty, Table } from 'antd';
import apiAppointmentService from '../../../../services/appointment/api-appointment-service';
import { AppointmentStatus } from '../appointment-enum';
import moment from 'moment';
function InspectionHistory({ patientId }) {
   const [statusHistories, setStatusHistories] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const getAllStatusHistories = async () => {
      setSpinner(true);
      await apiAppointmentService
         .getAllStatusHistories({ patientId })
         .then(({ data }) => {
            if (data.success) {
               setStatusHistories(data.response);
            }
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const columns = [
      {
         title: 'Огноо',
         dataIndex: 'createdAt',
         width: 110,
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Кабинет',
         dataIndex: ['appointment', 'cabinet', 'name'],
         className: 'whitespace-normal text-black',
         render: (text) => {
            return <p className="whitespace-normal text-black">{text}</p>;
         }
      },
      {
         title: 'Эмч',
         dataIndex: ['appointment', 'employee', 'firstName'],
         className: 'whitespace-normal text-black',
         render: (text) => {
            return <p className="whitespace-normal text-black">{text}</p>;
         }
      },
      // {
      //    title: 'Тайлбар',
      //    dataIndex: 'description',
      //    className: 'whitespace-normal text-black',
      //    render: (text) => {
      //       return <p className="whitespace-normal text-black">{text}</p>;
      //    }
      // },
      {
         title: 'Төлөв',
         dataIndex: 'status',
         className: 'whitespace-normal',
         render: (value) => {
            if (value == AppointmentStatus.Booked) {
               return 'Цаг захиалсан';
            } else if (value == AppointmentStatus.Revalide) {
               return 'Цаг солисон';
            } else if (value == AppointmentStatus.SystemRefund) {
               return 'Цаг цуцалсан';
            } else if (value == AppointmentStatus.Inspecting) {
               return 'Үзлэг хийсэн';
            } else {
               return '';
            }
         }
      }
   ];
   useEffect(() => {
      patientId && getAllStatusHistories();
   }, []);
   return (
      <>
         <Table
            rowKey={'id'}
            bordered
            loading={{
               spinning: spinner,
               tip: 'Уншиж байна...'
            }}
            scroll={{
               y: 100
            }}
            locale={{ emptyText: <Empty description={'Үзлэгийн түүх хоосон байна.'} /> }}
            columns={columns}
            dataSource={statusHistories}
            pagination={false}
         />
      </>
   );
}
export default InspectionHistory;
