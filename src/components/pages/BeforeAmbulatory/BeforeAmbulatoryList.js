//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React from "react";
import { Tabs } from "antd";
//
import Ambulatory from "./Lists/Ambulatory";
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
      label: "Suwilagch",
      key: "2",
      children: <Nurse />,
    },
    {
      label: "Хэвтэн",
      key: "3",
      children: <PatientList />,
    },
  ];

  return <Tabs type="card" items={items} />;
}
