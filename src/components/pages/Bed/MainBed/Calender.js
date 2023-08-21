import React from 'react';
import { Card, ConfigProvider, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/mn';
import mnMN from 'antd/es/locale/mn_MN';
function Calender() {
   const getListByWeek = (e) => {
      console.log(moment(e).format('YYYY-MM-DD'));
   };
   return (
      <>
         <ConfigProvider locale={mnMN}>
            <Card title={<DatePicker onChange={(e) => getListByWeek(e)} picker="week" />}></Card>
         </ConfigProvider>
      </>
   );
}
export default Calender;
