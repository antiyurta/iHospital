import { Button } from "antd";
import { useState } from "react";
import BodyConditionSheet from "./BeforeInPatientTabs/BodyConditionSheet";
import NursingNote from "./BeforeInPatientTabs/NursingNote";
import PainAssessment from "./BeforeInPatientTabs/PainAssessment";
import VitalSign from "./BeforeInPatientTabs/VitalSign";

function BeforeInPatientTabs({ patientId, listId }) {
  const [pageId, setPageId] = useState(Number);
  return (
    <div className="flex flex-wrap">
      <div className="w-full p-1">
        <Button
          onClick={() => {
            setPageId(1);
          }}
          className="mr-2"
        >
          Биеийн байдлыг үнэлэх хуудас
        </Button>
        <Button
          onClick={() => {
            setPageId(2);
          }}
          className="mr-2"
        >
          VS
        </Button>
        <Button
          onClick={() => {
            setPageId(3);
          }}
          className="mr-2"
        >
          Тэмдэглэл
        </Button>
        <Button
          onClick={() => {
            setPageId(4);
          }}
          className="mr-2"
        >
          Өвдөлтийн үнэлгээ
        </Button>
      </div>
      <div className="w-full p-1">
        {pageId === 1 && <BodyConditionSheet PatientId={patientId} />}
        {pageId === 2 && <VitalSign PatientId={patientId} ListId={listId} />}
        {pageId === 3 && <NursingNote PatientId={patientId} />}
        {pageId === 4 && (
          <PainAssessment PatientId={patientId} ListId={listId} />
        )}
      </div>
    </div>
  );
}
export default BeforeInPatientTabs;
