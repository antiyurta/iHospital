import React, { useState } from "react";
import { Button, Modal } from "antd";
import { blue } from "@ant-design/colors";
import UTable from "../../UTable";

export default function Examination(props) {
  const list = [
    {
      id: 1,
      code: "A11GA01",
      name_eng: "Sol. Ascorbinic acid",
      name_mn: "Аскорбины хүчил 5%/2мл",
    },
    {
      id: 2,
      code: "A11GA02",
      name_eng: "Sol.Pyridoxine hydrochlorid",
      name_mn: "Витамин В6 5%/1мл",
    },
    {
      id: 3,
      code: "A11GA03",
      name_eng: "Sol.Cyanocobalamin",
      name_mn: "Витамин В12 500мкг/1мл",
    },
    {
      id: 4,
      code: "A11GA04",
      name_eng: "Sol. Aloes extractum",
      name_mn: "Алоэ 1 мл",
    },
    {
      id: 5,
      code: "A11GA05",
      name_eng: "Sol. Dexamethasone",
      name_mn: "Дексаметазон 4мг/мл-1мл",
    },
  ];
  const columns = [
    {
      index: "name",
      label: "Байгууллага",
      isView: true,
    },
  ];
  return (
    <Modal
      title="Шинжилгээ сонгох"
      open={props.open}
      onCancel={props.handleCancel}
      width={1000}
      footer={[
        <Button
          key="choose"
          type="primary"
          onClick={props.handleOk}
          style={{ backgroundColor: blue.primary }}
        >
          Сонгох
        </Button>,
      ]}
    >
      <UTable
        title={"asdas"}
        url={"service/examination"}
        column={columns}
        width="30%"
      />
    </Modal>
  );
}
