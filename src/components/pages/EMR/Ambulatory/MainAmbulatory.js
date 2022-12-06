import React from "react";
import { Tabs } from "antd";
import ProgressNotes from "./ProgressNotes";
import NurseNote from "../NurseNote";
import ProgressCheck from "./ProgressCheck";

export default function MainAmbulatory({ patientId, appointments }) {
  const items = [
    {
      label: "Явцын тэмдэглэл",
      key: "item-1",
      children: <ProgressNotes Appointments={appointments} />,
    },
    {
      label: "Явцын үзлэг",
      key: "item-7",
      children: <ProgressCheck PatientId={patientId} />
    },
    {
      label: "Сувилагчийн тэмдэглэл",
      key: "item-6",
      children: <NurseNote PatientId={patientId} />,
    },
    {
      label: "Оношилгоо",
      key: "item-2",
      // children: <ProgressNotes />,
    },
    {
      label: "Эмийн эмчилгээ",
      key: "item-3",
      // children: <ProgressNotes />,
    },
    {
      label: "Шинжилгээний хариу",
      key: "item-4",
      // children: <ProgressNotes />,
    },
    {
      label: "Эмийн бус эмчилгээ",
      key: "item-5",
      // children: <ProgressNotes />,
    },
  ];
  return <Tabs size="small" items={items} />;
}
