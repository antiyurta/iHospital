import { Button } from "antd";
import { useState } from "react";
import BodyConditionSheet from "./BeforeInPatientTabs/BodyConditionSheet";
import NursingNote from "./BeforeInPatientTabs/NursingNote";
import VitalSign from "./BeforeInPatientTabs/VitalSign";

function BeforeInPatientTabs({ patientId, listId }) {
    const [pageId, setPageId] = useState(Number);
    return (
        <div className="flex flex-wrap">
            <div className="w-full p-1">
                <Button onClick={() => { setPageId(1) }}>Биеийн байдлыг үнэлэх хуудас</Button>
                <Button onClick={() => { setPageId(2) }}>VS</Button>
                <Button onClick={() => { setPageId(3) }}>Тэмдэглэл</Button>
            </div>
            <div className="w-full p-1">
                {
                    pageId === 1 && <BodyConditionSheet PatientId={patientId} />
                }
                {
                    pageId === 2 && <VitalSign PatientId={patientId} ListId={listId} />
                }
                {
                    pageId === 3 && <NursingNote PatientId={patientId} />
                }
            </div>
        </div>
    )
}
export default BeforeInPatientTabs;