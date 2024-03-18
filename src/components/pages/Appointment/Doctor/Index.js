import React from 'react';
import { Button, Card, Segmented } from 'antd';
import { useState } from 'react';
import InspectionHistory from './InspectionHistory';
import PaymentHistory from './PaymentHistory';
import InsuranceHistory from './InsuranceHistory';
import { FullscreenExitOutlined, FullscreenOutlined, OrderedListOutlined } from '@ant-design/icons';
function Index({ PatientId, RegisterNumber }) {
   const [filter, setFilter] = useState(0);
   const [isFull, setIsFull] = useState(false);
   const items = [
      {
         key: 0,
         label: 'Даатгал',
         children: <InsuranceHistory registerNumber={RegisterNumber} isFull={isFull} />
      },
      {
         key: 1,
         label: 'Үзлэгийн түүх',
         children: <InspectionHistory patientId={PatientId} />
      },
      {
         key: 2,
         label: 'Төлбөрийн мэдээлэл',
         children: <PaymentHistory patientId={PatientId} />
      }
   ];
   const FullScreen = () => (
      <Button
         title={isFull ? 'Жижигрүүлэх' : 'Томруулах'}
         onClick={() => setIsFull(!isFull)}
         icon={isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      />
   );
   return (
      <Card
         className="h-full"
         bordered={false}
         bodyStyle={{
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10
         }}
      >
         <div className="flex flex-col gap-2">
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
                     label: 'Төлбөрийн түүх',
                     value: 2,
                     icon: <OrderedListOutlined />
                  }
               ]}
               value={filter}
               onChange={setFilter}
            />
            {items[filter]?.children}
         </div>
      </Card>
   );
}
export default Index;
