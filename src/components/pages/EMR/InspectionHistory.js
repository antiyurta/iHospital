import { Card, Radio } from 'antd';
import React from 'react';
import MainAmbulatory from './Ambulatory/MainAmbulatory';
import MainInPatient from './InPatient/MainInPatient';
function InspectionHistory(props) {
   const { isUsageType, setIsUsageType, appointments, patientId } = props;
   return (
      <Card
         bordered={false}
         title={
            <Radio.Group defaultValue={isUsageType} onChange={(e) => setIsUsageType(e.target.value)}>
               <Radio value={'OUT'}>Амбулатори</Radio>
               <Radio value={'IN'}>Хэвтэн</Radio>
            </Radio.Group>
         }
         className="header-solid max-h-max rounded-md scroll"
         style={{ height: '100%' }}
         bodyStyle={{
            paddingTop: 0,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            minHeight: 500,
            maxHeight: 500
         }}
      >
         {isUsageType === 'OUT' ? (
            <MainAmbulatory appointments={appointments} patientId={patientId} />
         ) : (
            <MainInPatient patientId={patientId} />
         )}
      </Card>
   );
}
export default InspectionHistory;
