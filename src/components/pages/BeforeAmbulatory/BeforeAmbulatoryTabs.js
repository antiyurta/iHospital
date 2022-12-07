//Амбулаторийн үзлэгийн өмнөх жагсаалтын доор байрлах TAB ууд
import React from "react";
import { Tabs } from "antd";
import EarlyWarning from "./EarlyWarning";

export default function BeforeAmbulatoryTabs({ patientId, listId }) {
  const items = [
    {
      label: "Эрт сэрэмжлүүлэх үнэлгээ",
      key: "item-1",
      children: <EarlyWarning PatientId={patientId} listId={listId} />,
    },
    {
      label: "Өвчтөний түүх",
      key: "item-2",
      children: <EarlyWarning />,
    },
    {
      label: "Лаборатори",
      key: "item-3",
      children: <EarlyWarning />,
    },
    {
      label: "Тэмдэглэл хөтлөх",
      key: "item-4",
      children: <EarlyWarning />,
    },
    {
      label: "Суурь үнэлгээ",
      key: "item-5",
      children: <EarlyWarning />,
    },
  ];
  return <Tabs size="small" items={items} />;
}
