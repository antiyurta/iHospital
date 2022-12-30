import { Tabs } from "antd";
import Nurse from "./Lists/Nurse";
import NurseInPatientList from "./Lists/NurseInPatientList";

function BeforeAmbulatoryListEnr() {
    const items = [
        {
            label: "Амбулатори",
            key: "1",
            children: <Nurse />,
        },
        {
            label: "Хэвтэн",
            key: "2",
            children: <NurseInPatientList />,
        },
    ];
    return <Tabs type="card" items={items} />
}
export default BeforeAmbulatoryListEnr;