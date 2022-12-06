import { SearchOutlined } from "@ant-design/icons";
import { Table, Col, Row, Tag, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get } from "../../../comman";
import orderType from "../../Bed/orderType.json";

function PatientList() {
  const token = useSelector(selectCurrentToken);
  const [listData, setListData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const { Search } = Input;
  const { CheckableTag } = Tag;

  const config = {
    headers: {},
    params: {},
  };

  const getPatientList = async () => {
    setListData([]);
    config.params.process = selectedTags.toString(); //Хэвтэх захиалгатай = 0, Хэвтэх зөвшөөрөлтэй өвтөн = 1
    const response = await Get(`service/inpatient-request`, token, config);
    console.log("response", response);
    if (response.data.length > 0) {
      setListData(response.data);
    }
    setLoadingData(false);
  };

  useEffect(() => {
    getPatientList();
  }, []);
  useEffect(() => {
    setLoadingData(true);
    selectedTags && getPatientList();
  }, [selectedTags]);

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
      title: "Хүйс",
      key: "gender",
      render: (_, record, index) => (
        <span key={index}>
          {record.patient?.genderType === "WOMAN" ? "Эм" : "Эр"}
        </span>
      ),
    },
    {
      title: "Хэвтэх өдөр",
      key: "startDate",
      render: (_, record, index) => (
        <span key={index}>{record.startDate?.substr(0, 10)}</span>
      ),
    },
    {
      title: "Гарах өдөр",
      key: "endDate",
      render: (_, record, index) => (
        <span key={index}>{record.endDate?.substr(0, 10)}</span>
      ),
    },
    {
      title: "Захиалгын төрөл",
      key: "type",
      render: (_, record, index) => (
        <div key={index}>
          {orderType.map((item, index) => {
            if (item.value === record.process) {
              return (
                <img
                  src={require(`../../../../assets/bed/${
                    orderType[item.value].img
                  }`)}
                  width="20"
                  className="inline-block"
                  key={index}
                />
              );
            }
          })}
        </div>
      ),
    },
  ];

  const handleChangeTag = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="p-6">
      <Row>
        <Col span={6}>
          <Input
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={2} className="contents">
          {orderType.map((tag) => {
            return (
              <div
                key={tag.value}
                className="border-blue-400 rounded-sm border mr-2 mb-2"
              >
                <CheckableTag
                  checked={selectedTags.includes(tag.value)}
                  onChange={(checked) => {
                    handleChangeTag(tag.value, checked);
                  }}
                  style={{
                    display: "flex",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <div
                    className="mr-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={require(`../../../../assets/bed/${tag.img}`)}
                      width="20"
                    />
                  </div>
                  {tag.label}
                </CheckableTag>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row gutter={[24, 6]} className="mt-4">
        <Col className="gutter-row" span={24}>
          <Table
            loading={loadingData}
            columns={columns}
            dataSource={listData?.filter(
              (obj) =>
                obj.patient?.roomNumber?.toString()?.includes(searchValue) ||
                obj.patient?.lastName?.toLowerCase()?.includes(searchValue) ||
                obj.patient?.firstName?.toLowerCase()?.includes(searchValue) ||
                obj.patient?.registerNumber
                  ?.toLowerCase()
                  ?.includes(searchValue)
            )}
            bordered
            rowKey={(record) => record.id}
          />
        </Col>
      </Row>
    </div>
  );
}

export default PatientList;
