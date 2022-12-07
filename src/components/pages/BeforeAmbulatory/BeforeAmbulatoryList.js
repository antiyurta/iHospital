//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React from "react";
import { Tabs } from "antd";
//
import Ambulatory from "./Lists/Ambulatory";
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
      label: "Хэвтэн",
      key: "2",
      children: <PatientList />,
    },
  ];

  return <Tabs type="card" items={items} />;
}
