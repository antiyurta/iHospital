import React from 'react';
import { Button, Card, Modal, Result, Segmented, Tabs } from 'antd';
import { useState } from 'react';
import InspectionHistory from './InspectionHistory';
import PaymentHistory from './PaymentHistory';
import InsuranceHistory from './InsuranceHistory';
import { FullscreenExitOutlined, FullscreenOutlined, OrderedListOutlined } from '@ant-design/icons';
function Index({ PatientId, RegisterNumber }) {
   const [filter, setFilter] = useState(Number);
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
         children: <PaymentHistory patientId={PatientId} />
      },
      {
         key: 2,
         label: 'Төлбөрийн мэдээлэл',
         children: <InspectionHistory patientId={PatientId} />
      }
   ];
   const FullScreen = () => (
      <Button
         title={isFull ? 'Жижигрүүлэх' : 'Томруулах'}
         onClick={() => setIsFull(!isFull)}
         icon={isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      />
   );
   const Segment = () => (
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
   );
   const Render = () => (
      <Card
         bordered={false}
         bodyStyle={{
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            minHeight: 300,
            maxHeight: 300,
            overflowY: 'auto'
         }}
      >
         <Tabs type="card" items={items} tabBarExtraContent={<FullScreen />} />
      </Card>
   );
   if (PatientId && RegisterNumber) {
      return (
         <>
            <Render />
            <Modal title={'Мэдээлэл'} open={isFull} onCancel={() => setIsFull(false)} width={'60%'} footer={null}>
               <Render />
            </Modal>
            {/* <Card
               bordered={false}
               className="header-solid max-h-max rounded-md"
               title={<FullScreen />}
               bodyStyle={{
                  paddingTop: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 10
               }}
               extra={<Segment />}
            >
               {PatientId ? <Render /> : <div>Өвчтөн сонгогдоогүй</div>}
            </Card>
            <Modal title={'Мэдээлэл'} open={isFull} onCancel={() => setIsFull(false)} width={'60%'} footer={null}>
               <Card
                  bordered={false}
                  className="header-solid max-h-max rounded-md"
                  title={<FullScreen />}
                  bodyStyle={{
                     paddingTop: 0,
                     paddingLeft: 10,
                     paddingRight: 10,
                     paddingBottom: 10
                  }}
                  extra={<Segment />}
               ></Card>
            </Modal> */}
         </>
      );
   }
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
         <Result title="Тун удахгүй" />
      </Card>
   );
}
export default Index;
