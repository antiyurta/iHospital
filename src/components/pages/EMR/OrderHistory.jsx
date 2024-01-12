import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
import dayjs from 'dayjs';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
//
import arrowNext from './ListOfIssues/arrowNext.svg';
//api
import ServiceRequestApi from '../../../services/serviceRequest';

const OrderHistory = () => {
   const IncomeEMRData = useSelector(selectCurrentEmrData);
   const [orders, setOrders] = useState([]);
   const getPatientRequests = async () => {
      await ServiceRequestApi.getPatientOts(IncomeEMRData.patientId).then(({ data: { response } }) => {
         setOrders(response);
      });
   };
   const getName = (order) => {
      if (order.treatment) {
         return order.treatment.name;
      } else if (order.xray) {
         return order.xray.name;
      } else if (order.details) {
      }
   };
   useEffect(() => {
      getPatientRequests();
   }, []);
   return (
      <div className="list-of-issues">
         {orders?.map((order, index) => (
            <div key={index} className="order">
               <div className="header">
                  <p>{`${index + 1}.`}</p>
                  <p className="name">{getName(order)}</p>
               </div>
               <div className="description">
                  <p>
                     <CalendarOutlined />
                     {dayjs(order.createdAt).format('YYYY/MM/DD')}
                  </p>
                  <p>
                     <FieldTimeOutlined />
                     {dayjs(order.createdAt).format('HH:mm:ss')}
                  </p>
               </div>
               <div className="extra">
                  <button>Захиалах</button>
                  <button>
                     Дэлгэрэнгүй <img src={arrowNext} alt="arr" />
                  </button>
               </div>
               <div
                  style={{
                     paddingTop: 2,
                     height: 1,
                     width: '100%',
                     background: '#C9CDD4'
                  }}
               />
            </div>
         ))}
      </div>
   );
};
export default OrderHistory;
