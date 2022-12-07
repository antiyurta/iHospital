import { Tabs } from "antd";
import TreatmentSchedule from '../Nurse/TreatmentSchedule';
import DoctorSchedule from '../Doctor/DoctorSchedule';

function Schedule() {
    const tabs = [
        { label: 'Эмчийн хуваарь', key: 1, children: < DoctorSchedule /> },
        { label: 'Эмчилгээний хуваарь', key: 2, children: <TreatmentSchedule /> },
    ];
    return (
        <Tabs type="card" items={tabs} />
    )
}
export default Schedule;