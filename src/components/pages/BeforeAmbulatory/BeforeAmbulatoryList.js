//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React from "react";
import { Tabs } from "antd";
//
import Ambulatory from "./Lists/Ambulatory";
import PreOrder from "./Lists/PreOrder";
import Nurse from "./Lists/Nurse";
import PatientList from "./Lists/PatientList";
//
export default function BeforeAmbulatoryList() {
  const items = [
    {
      label: "Амбултори",
      key: "1",
      children: <Ambulatory />,
    },
    {
      label: "Урьдчилан сэргийлэх",
      key: '2',
      children: <PreOrder />,
    },
    {
      label: "Suwilagch",
      key: "3",
      children: <Nurse />,
    },
    {
      label: "Хэвтэн",
      key: "4",
      children: <PatientList />,
    },
  ];

  return <Tabs type="card" items={items} />;
}
