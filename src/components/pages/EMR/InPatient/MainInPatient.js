import { Tabs } from "antd";

function MainInPatient() {
    const items = [
        {
            label: "Аннамез",
            key: "item-1",
            // children: <ProgressNotes Appointments={appointments} />,
        },
    ]
    return <Tabs type="card" size="small" items={items} />;
}
export default MainInPatient;