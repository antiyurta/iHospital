import React, { useRef, useState } from "react";
import { Button, Modal, Radio, Table } from "antd";
import { blue } from "@ant-design/colors";
import UTable from "../../UTable";

export default function Pharma(props) {
  const columns = [
    {
      title: "name_eng",
      dataIndex: "name_eng",
      key: "name_eng",
    },
    {
      title: "name_mn",
      dataIndex: "name_mn",
      key: "name_mn",
    },
    {
      title: "code",
      dataIndex: "code",
      key: "code",
    },
  ];

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
  return (
    <Modal
      title="Эм сонгох"
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
      <Radio.Group>
        <Radio value={1}>HIS систем</Radio>
        <Radio value={2}>Эрүүл мэндийн даатгалын систем</Radio>
      </Radio.Group>
      <UTable
        title={""}
        url={"organization/bed"}
        column={columns}
        width="30%"
      />
    </Modal>
  );
}
