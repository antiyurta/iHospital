//Сувилагчийн тэмдэглэл
import React from "react";
import { Table } from "antd";

export default function NurseNote() {
  const columns = [
    {
      title: "Огноо/цаг/",
      dataIndex: "date",
      key: "date",
      className: "bg-white",
    },
    {
      title: "Систол",
      dataIndex: "systole",
      key: "systole",
      className: "bg-white",
    },
    {
      title: "Диастол",
      dataIndex: "diastole",
      key: "diastole",
      className: "bg-white",
    },
    {
      title: "Жин",
      dataIndex: "weight",
      key: "weight",
      className: "bg-white",
    },
    {
      title: "Өндөр",
      dataIndex: "height",
      key: "height",
      className: "bg-white",
    },
    {
      title: "Халуун",
      dataIndex: "heat",
      key: "heat",
      className: "bg-white",
    },
    {
      title: "Амьсгал",
      dataIndex: "breath",
      key: "breath",
      className: "bg-white",
    },
    {
      title: "SpO'2",
      dataIndex: "spo",
      key: "spo",
      className: "bg-white",
    },
    {
      title: "Пульс",
      dataIndex: "pulse",
      key: "pulse",
      className: "bg-white",
    },
    {
      title: "Ухаан санаа",
      dataIndex: "wisdom",
      key: "wisdom",
      className: "bg-white",
    },
    {
      title: "Сувилагч",
      dataIndex: "nurse",
      key: "nurse",
      className: "bg-white",
    },
  ];
  const data = [
    {
      key: "1",
      date: "2022-10-11 18:02:35",
      systole: "1",
      diastole: "1",
      weight: "1",
      height: "1",
      heat: "1",
      breath: "1",
      spo: "1",
      pulse: "1",
      wisdom: "V,P,U",
      nurse: "Б.Намуунцэлмэг",
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      sticky={false}
      size="small"
    />
  );
}
