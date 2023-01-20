import { Tabs } from 'antd';
import TreatmentSchedule from '../Nurse/TreatmentSchedule';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DeviceSchedule from '../Device/DeviceSchedule';

function Schedule() {
   const tabs = [
      { label: 'Эмчийн хуваарь', key: 1, children: <DoctorSchedule /> },
      { label: 'Эмчилгээний хуваарь', key: 2, children: <TreatmentSchedule /> },
      { label: 'Оношилгооны хуваарь', key: 3, children: <DeviceSchedule /> }
   ];
   return <Tabs type="card" items={tabs} />;
}
export default Schedule;
