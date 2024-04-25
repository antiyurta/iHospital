import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';
import dayjs from 'dayjs';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
//
import arrowNext from './ListOfIssues/arrowNext.svg';
//api
import ServiceRequestApi from '../../../services/serviceRequest';
//context
import EmrContext from '@Features/EmrContext';

const OrderHistory = () => {
   const IncomeEMRData = useSelector(selectCurrentEmrData);
   const { setId } = useContext(EmrContext);
   const [orders, setOrders] = useState([]);
   const getPatientRequests = async () => {
      await ServiceRequestApi.get({
         params: {
            patientId: IncomeEMRData.patientId
         }
      }).then(({ data: { response } }) => {
         var newOrders = [];
         response.data?.map((data) => {
            data.services?.map((service) => {
               newOrders.push({
                  id: service.id,
                  key: service.requestid,
                  name: service.name,
                  type: service.type,
                  typeId: service.typeId,
                  createdAt: data.createdAt
               });
            });
         });
         setOrders(newOrders);
      });
   };
   const setAppointmentIdForContext = (id) => {
      setId(id, 'item-5');
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
                  <p className="name">{order.name}</p>
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
               {order.key ? (
                  <div className="extra">
                     <div />
                     <button
                        onClick={() => {
                           setAppointmentIdForContext(order.key);
                        }}
                     >
                        Дэлгэрэнгүй <img src={arrowNext} alt="arr" />
                     </button>
                  </div>
               ) : null}
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
