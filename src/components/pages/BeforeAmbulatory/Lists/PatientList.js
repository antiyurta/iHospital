import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import orderType from "../../Bed/orderType.json";

function PatientList() {
  const token = useSelector(selectCurrentToken);
  const [listData, setListData] = useState();

  const config = {
    headers: {},
    params: {},
  };

  const getPatientList = async () => {
    config.params.process = "0,1"; //Хэвтэх захиалгатай = 0, Хэвтэх зөвшөөрөлтэй өвтөн = 1
    const response = await Get(`service/inpatient-request`, token, config);
    console.log("response", response);
    if (response.data.length > 0) {
      setListData(response.data);
    }
  };

  useEffect(() => {
    getPatientList();
  }, []);

  const columns = [
    {
      title: "Дугаар",
      dataIndex: ["patient", "cardNumber"],
      key: "requestId",
    },
    {
      title: "Овог",
      dataIndex: ["patient", "lastName"],
      key: "lastName",
    },
    {
      title: "Нэр",
      dataIndex: ["patient", "firstName"],
      key: "firstName",
    },
    {
      title: "Регистр",
      dataIndex: ["patient", "registerNumber"],
      key: "registerNumber",
    },
    {
      title: "Нас",
      dataIndex: ["patient", "age"],
      key: "age",
    },
    {
      title: "Нас",
      key: "age",
      render: (_, record) => (
        <span>{record.patient?.genderType === "WOMAN" ? "Эм" : "Эр"}</span>
      ),
    },
    {
      title: "Хэвтэх өдөр",
      key: "startDate",
      render: (_, record) => <span>{record.startDate?.substr(0, 10)}</span>,
    },
    {
      title: "Гарах өдөр",
      key: "endDate",
      render: (_, record) => <span>{record.endDate?.substr(0, 10)}</span>,
    },
    {
      title: "Захиалгын төрөл",
      key: "type",
      render: (_, record) => (
        <>
          {orderType.map((item, index) => {
            if (item.value === record.process) {
              return <div key={index}>{item.label}</div>;
            }
          })}
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={listData} bordered />;
}

export default PatientList;
