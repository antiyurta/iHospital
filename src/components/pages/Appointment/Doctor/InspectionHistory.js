import React from 'react';
import { Card, Result } from 'antd';
function InspectionHistory({ patientId }) {
   return (
      <>
         <Card
            bordered={false}
            bodyStyle={{
               paddingTop: 0,
               paddingLeft: 1,
               paddingRight: 1,
               paddingBottom: 0,
               maxHeight: 150,
               minHeight: 150,
               height: 150
            }}
         >
            <Result style={{ height: 50 }} title="Тун удахгүй" />
         </Card>
      </>
   );
}
export default InspectionHistory;
