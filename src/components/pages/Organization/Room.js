import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import UTable from "../../UTable";
import roomTypes from "./roomTypes.json";

function Room() {
  const [blocks, setBlocks] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [structures, setStructures] = useState([]);
  const config = {
    headers: {},
    params: {},
  };
  const token = useSelector(selectCurrentToken);

  const getBlocks = async () => {
    const response = await Get("organization/block", token, config);
    setBlocks(response.data);
  };
  const getFloor = async () => {
    const response = await Get('organization/floor', token, config);
    setRoomData(response.data);
  };
  const getStructures = async () => {
    config.params.type = 2;
    const response = await Get('organization/structure', token, config);
    setStructures(response.data);
  };

  useEffect(() => {
    getStructures();
    getBlocks();
    getFloor();
  }, []);

  const column = [
    {
      index: "structureId",
      label: "Тасаг",
      isView: true,
      input: "select",
      inputData: structures,
      relIndex: "name",
      col: 24,
    },
    {
      index: "roomNumber",
      label: "Өрөөны дугаар",
      isView: true,
      input: "input",
      col: 24,
    },
    {
      index: "price",
      label: "Өрөөны үнэ",
      isView: true,
      input: "inputNumber",
      col: 24,
    },
    {
      index: "isInpatient",
      label: "Хэвтэн эсэх",
      isView: true,
      input: "switch",
      col: 24,
    },
    {
      index: "roomType",
      label: "Өрөөний төрөл",
      isView: true,
      input: "select",
      inputData: roomTypes,
      relIndex: "label",
      col: 24,
    },
    {
      index: "blockId",
      label: "Блок",
      isView: true,
      input: "select",
      inputData: blocks,
      relIndex: "name",
      col: 24,
    },
    {
      index: 'floorId',
      label: 'Давхар',
      isView: true,
      input: 'select',
      inputData: roomData,
      relIndex: 'name',
      col: 24
    }
  ];
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <UTable
          title={"Өрөө"}
          url={"organization/room"}
          column={column}
          isCreate={true}
          isRead={true}
          isUpdate={true}
          isDelete={true}
          width="30%"
        />
      </div>
    </div>
  );
}
export default Room;
