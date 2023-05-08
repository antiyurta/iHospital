import React from 'react';
import { Card, Radio, Segmented, Tabs } from 'antd';
import { useState } from 'react';
import InspectionHistory from './InspectionHistory';
import PaymentHistory from './PaymentHistory';
import InsuranceHistory from './InsuranceHistory';
import { OrderedListOutlined } from '@ant-design/icons';
function Index({ PatientId }) {
   const [filter, setFilter] = useState(Number);
   // return <Tabs type="card" items={supportMenu} />
   const items = [
      {
         children: <InsuranceHistory patientId={PatientId} />
      },
      {
         children: <PaymentHistory patientId={PatientId} />
      },
      {
         children: <InspectionHistory patientId={PatientId} />
      }
   ];
   const Render = () => {
      return items[filter].children;
   };

   return (
      <Card
         bordered={false}
         className="header-solid max-h-max rounded-md"
         bodyStyle={{
            paddingTop: 0,
            paddingLeft: 1,
            paddingRight: 1,
            paddingBottom: 16,
            maxHeight: 150,
            minHeight: 150,
            height: 150
         }}
         extra={
            <>
               <Segmented
                  className="department-bed-segment"
                  size="small"
                  options={[
                     {
                        label: 'Даатгал',
                        value: 0,
                        icon: <OrderedListOutlined />
                     },
                     {
                        label: 'Үзлэгийн түүх',
                        value: 1,
                        icon: <OrderedListOutlined />
                     },
                     {
                        label: 'Төлбөрийн мэдээлэл',
                        value: 2,
                        icon: <OrderedListOutlined />
                     }
                  ]}
                  value={filter}
                  onChange={(e) => setFilter(e)}
               />
            </>
         }
      >
         {PatientId ? <Render /> : <div>Өвчтөн сонгогдоогүй</div>}
      </Card>
   );
}
export default Index;
