import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";

import UTable from "../../UTable";

function Bed() {
  const [rooms, setRooms] = useState([]); //Хэвтэн өрөөнүүд
  const config = {
    headers: {},
    params: {},
  };
  const token = useSelector(selectCurrentToken);
  const getRooms = async () => {
    config.params.isInpatient = true;
    const response = await Get("organization/room", token, config);
    if (response.data?.length > 0) {
      setRooms(response.data);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  const column = [
    {
      index: "bedNumber",
      label: "Ор дугаар",
      isView: true,
      input: "inputNumber",
      col: 24,
    },
    {
      index: "roomId",
      label: "Өрөөны дугаар",
      isView: true,
      input: "select",
      inputData: rooms,
      relIndex: "roomNumber",
      col: 24,
    },
  ];

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <UTable
          title={"Ор"}
          url={"organization/bed"}
          column={column}
          width="30%"
          isCreate={true}
          isRead={true}
          isUpdate={true}
          isDelete={true}
        />
      </div>
    </div>
  );
}
export default Bed;
