import React from 'react';

import Appointment from '../Index';
import { Tabs } from 'antd';

function Index() {
   const List = ({ type }) => {
      return (
         <>
            <Appointment
               selectedPatient={null}
               type={type}
               prevAppointmentId={null}
               isExtraGrud={{
                  isCreate: false,
                  isChange: true,
                  isDelete: true
               }}
            />
         </>
      );
   };
   const items = [
      {
         key: 1,
         label: `Эмчийн хуваарь`,
         children: <List type={1} />
      },
      {
         key: 2,
         label: `Эмчилгээний хуваарь`,
         children: <List type={2} />
      },
      {
         key: 3,
         label: `Оношилгооны хуваарь`,
         children: <List type={3} />
      }
   ];
   return <Tabs type="card" destroyInactiveTabPane={true} items={items} />;
}
export default Index;
