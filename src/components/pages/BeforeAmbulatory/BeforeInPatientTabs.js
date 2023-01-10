import { Button } from "antd";
import { useState } from "react";
import BodyConditionSheet from "./BeforeInPatientTabs/BodyConditionSheet";
import NursingNote from "./BeforeInPatientTabs/NursingNote";
import PainAssessment from "./BeforeInPatientTabs/PainAssessment";
import VitalSign from "./BeforeInPatientTabs/VitalSign";
import BST from "./BeforeInPatientTabs/BST";
import Cardex from "./BeforeInPatientTabs/Cardex";
import MedicineRequests from "./BeforeInPatientTabs/MedicineRequests";

function BeforeInPatientTabs({ patientId, listId }) {
  const [pageId, setPageId] = useState(Number);
  return (
    <div className="flex flex-wrap">
      <div className="w-full p-1">
        <Button type="primary" onClick={() => { setPageId(1); }} className="mr-2">Cardex</Button>
        <Button type="primary" onClick={() => { setPageId(2); }} className="mr-2">Захиалга</Button>
        <Button type="primary" onClick={() => { setPageId(3); }} className="mr-2">VS</Button>
        <Button type="primary" onClick={() => { setPageId(4); }} className="mr-2">BST</Button>
        <Button type="primary" onClick={() => { setPageId(5); }} className="mr-2">Өвдөлтийн үнэлгээ</Button>
        <Button type="primary" onClick={() => { setPageId(6); }} className="mr-2">Биеийн байдлыг үнэлэх хуудас</Button>
        <Button type="primary" onClick={() => { setPageId(7); }} className="mr-2">Тэмдэглэл</Button>
      </div>
      <div className="w-full p-1">
        {pageId === 1 && <Cardex PatientId={patientId} ListId={listId} />}
        {pageId === 2 && <MedicineRequests PatientId={patientId} ListId={listId} />}
        {pageId === 3 && <VitalSign PatientId={patientId} ListId={listId} />}
        {pageId === 4 && <BST PatientId={patientId} ListId={listId} />}
        {pageId === 5 && <PainAssessment PatientId={patientId} ListId={listId} />}
        {pageId === 6 && <BodyConditionSheet PatientId={patientId} />}
        {pageId === 7 && <NursingNote PatientId={patientId} />}
      </div>
    </div>
  );
}
export default BeforeInPatientTabs;
