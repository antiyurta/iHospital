import { Tabs } from 'antd';
import InPatientNotes from './InPatientNotes';

function MainInPatient({ appointments, patientId }) {
   const items = [
      {
         label: 'Аннамез',
         key: 'item-1'
         // children: <ProgressNotes Appointments={appointments} />,
      },
      {
         label: 'Хэвтэх үед',
         key: 'item-2',
         children: <InPatientNotes Appointments={appointments} />
      }
   ];
   return <Tabs type="card" size="small" items={items} />;
}
export default MainInPatient;
