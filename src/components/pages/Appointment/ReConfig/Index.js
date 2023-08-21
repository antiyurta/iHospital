import React from 'react';

import Appointment from '../Index';
import { Tabs } from 'antd';

function Index() {
   const List = ({ type, isExtraGrud }) => {
      return (
         <>
            <Appointment selectedPatient={null} type={type} prevAppointmentId={null} isExtraGrud={isExtraGrud} />
         </>
      );
   };
   const items = [
      {
         key: 1,
         label: `Эмчийн хуваарь`,
         children: (
            <List
               type={1}
               isExtraGrud={{
                  isCreate: false,
                  isChange: true,
                  isDelete: true
               }}
            />
         )
      },
      {
         key: 2,
         label: `Эмчилгээний хуваарь`,
         children: (
            <List
               type={2}
               isExtraGrud={{
                  isCreate: false,
                  isChange: true,
                  isDelete: false
               }}
            />
         )
      },
      {
         key: 3,
         label: `Оношилгооны хуваарь`,
         children: (
            <List
               type={3}
               isExtraGrud={{
                  isCreate: false,
                  isChange: true,
                  isDelete: false
               }}
            />
         )
      }
   ];
   return <Tabs type="card" destroyInactiveTabPane={true} items={items} />;
}
export default Index;
