import React from "react";
import {
  Card,
  Col,
  Radio,
  Row,
  Collapse,
  Tabs,
  Tag,
  Table,
  Typography,
} from "antd";
import ProgressNotes from "./ProgressNotes";

export default function MainAmbulatory() {
  const items = [
    {
      label: "Явцын тэмдэглэл",
      key: "item-1",
      children: <ProgressNotes />,
    },
    {
      label: "Оношилгоо",
      key: "item-2",
      children: <ProgressNotes />,
    },
    {
      label: "Эмийн эмчилгээ",
      key: "item-3",
      children: <ProgressNotes />,
    },
    {
      label: "Шинжилгээний хариу",
      key: "item-4",
      children: <ProgressNotes />,
    },
    {
      label: "Эмийн бус эмчилгээ",
      key: "item-5",
      children: <ProgressNotes />,
    },
    {
      label: "Сувилагчийн тэмдэглэл",
      key: "item-6",
      children: <ProgressNotes />,
    },
  ];
  return <Tabs size="small" items={items} />;
}
