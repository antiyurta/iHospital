import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import { Col, Row, Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function RequestAnalys() {
  const token = useSelector(selectCurrentToken);
  const [patientReqList, setPatientReqList] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState("");
  const [selectedRowKey, setSelectedRowKey] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const config = {
    headers: {},
    params: {},
  };

  const getERequest = async () => {
    setPatientReqList([]);
    const response = await Get(`service/erequest/patients`, token, config);
    if (response) {
      console.log("response get ERequest ====>", response);
      response.map((el, index) => {
        setPatientReqList((patientReqList) => [
          ...patientReqList,
          {
            key: index,
            cardNumber: el.cardNumber,
            lastName: el.lastName,
            firstName: el.firstName,
            registerNumber: el.registerNumber,
          },
        ]);
      });
    }
  };

  useEffect(() => {
    getERequest();
  }, []);

  const columns = [
    {
      title: "Дугаар",
      dataIndex: "cardNumber",
      key: "cardNumber",
    },
    {
      title: "Овог",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Нэр",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Регистр",
      dataIndex: "registerNumber",
      key: "registerNumber",
    },
  ];

  const columnsTabl2 = [
    {
      title: "Баркод",
      dataIndex: "barcode",
      key: "barcode",
    },
    {
      title: "Сорьц",
      dataIndex: "specimen",
      key: "specimen",
    },
    {
      title: "Хэмжээ",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Савлагаа",
      dataIndex: "package",
      key: "package",
    },
    {
      title: "Төхөөрөмж",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "Төлөв",
      dataIndex: "status",
      key: "status",
    },
  ];
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKey(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKey,
    onChange: onSelectChange,
  };

  return (
    <>
      <Row gutter={16} className="mb-2">
        <Col span={4}>
          <Input
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Table
            loading={patientReqList.length !== 0 ? false : true}
            columns={columns}
            dataSource={patientReqList?.filter(
              (obj) =>
                obj.cardNumber.includes(searchValue) ||
                obj.lastName.includes(searchValue) ||
                obj.firstName.includes(searchValue) ||
                obj.registerNumber.includes(searchValue)
            )}
            bordered
            rowSelection={{
              ...rowSelection,
              selectedRowKeys: selectedRowKey,
              hideSelectAll: true,
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  onSelectChange([record.key]);
                  setSelectedRowData(record);
                },
              };
            }}
          />
        </Col>
        <Col span={12}>
          <Table
            columns={columnsTabl2}
            //   dataSource={patientReqList}
            bordered
          />
          {JSON.stringify(selectedRowData)}
        </Col>
      </Row>
    </>
  );
}

export default RequestAnalys;
