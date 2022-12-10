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
    const response = await Get("organization/floor", token, config);
    setRoomData(response.data);
  };
  const getStructures = async () => {
    config.params.type = 2;
    const response = await Get("organization/structure", token, config);
    setStructures(response.data);
  };

  useEffect(() => {
    getStructures();
    getBlocks();
    getFloor();
  }, []);

  const genderData = [
    { value: "WOMAN", label: "Эм" },
    { value: "MAN", label: "Эр" },
    { value: "TRANS", label: "Эр эм холилдсон" },
  ];
  const column = [
    {
      index: "structureId",
      label: "Тасаг",
      isView: true,
      input: "select",
      inputData: structures,
      relIndex: "name",
      col: 12,
    },
    {
      index: "roomNumber",
      label: "Өрөөны дугаар",
      isView: true,
      input: "input",
      col: 12,
      isDepend: false,
    },
    {
      index: "blockId",
      label: "Блок",
      isView: true,
      input: "select",
      inputData: blocks,
      relIndex: "name",
      col: 12,
    },
    {
      index: "floorId",
      label: "Давхар",
      isView: true,
      input: "select",
      inputData: roomData,
      relIndex: "name",
      col: 12,
    },
    {
      index: "isInpatient",
      label: "Хэвтэн эсэх",
      isView: true,
      input: "switch",
      col: 12,
      isDepend: true,
    },
    {
      index: "genderType",
      label: "Хүйс",
      isView: true,
      input: "select",
      inputData: genderData,
      relIndex: "label",
      col: 12,
      isDepend: true,
    },
    {
      index: "price",
      label: "Өрөөны үнэ",
      isView: true,
      input: "inputNumber",
      col: 12,
      isDepend: true,
    },
    {
      index: "roomType",
      label: "Өрөөний төрөл",
      isView: true,
      input: "select",
      inputData: roomTypes,
      relIndex: "label",
      col: 12,
      isDepend: true,
    },
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
          dependCol="isInpatient" //Аль талбараас хамаарч hide/show хийгдэх
          dependVal={true} //Хамааралтай талбарын утга
        />
      </div>
    </div>
  );
}
export default Room;
