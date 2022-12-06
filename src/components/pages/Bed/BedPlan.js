import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import { Col, Row, Table, Input, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import orderType from "./orderType.json";
import CheckableTag from "antd/lib/tag/CheckableTag";

function BedPlan() {
  const token = useSelector(selectCurrentToken);
  const [patientReqList, setPatientReqList] = useState([]);
  const [patientOrderedList, setPatientOrderedList] = useState([]);
  const [selectedRowKey, setSelectedRowKey] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchValueOrdered, setSearchValueOrdered] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const { CheckableTag } = Tag;
  const config = {
    headers: {},
    params: {},
  };

  const columns = [
    {
      title: "Дугаар",
      dataIndex: "cardNumber",
      key: "cardNumber",
    },
    {
      title: "Овог, Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Хүйс",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Регистр",
      dataIndex: "registerNumber",
      key: "registerNumber",
    },
    {
      title: "Хэвтэх өдөр",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Захиалгын төрөл",
      dataIndex: "process",
      key: "process",
    },
  ];

  const columnsOrdered = [
    {
      title: "Дугаар",
      dataIndex: "cardNumber",
      key: "cardNumber",
    },
    {
      title: "Овог, Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Хүйс",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Регистр",
      dataIndex: "registerNumber",
      key: "registerNumber",
    },
    {
      title: "Өрөө",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Захиалгын төрөл",
      dataIndex: "process",
      key: "process",
    },
  ];

  const handleChangeTag = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  const getPatientList = async () => {
    setPatientReqList([]);
    config.params.process = "0,1";
    const response = await Get(`service/inpatient-request`, token, config);
    if (response) {
      //   console.log("response get ERequest ====>", response);
      response.data?.map((el, index) => {
        setPatientReqList((patientReqList) => [
          ...patientReqList,
          {
            key: index,
            cardNumber: el.patient?.cardNumber,
            name: `${el.patient?.lastName?.substr(0, 1)}. ${
              el.patient?.firstName
            }`,
            gender: el.patient?.genderType === "MAN" ? "Эр" : "Эм",
            registerNumber: el.patient?.registerNumber,
            startDate: el.startDate?.substr(0, 10),
            process: orderType.map((item, index) => {
              if (item.value === el.process) {
                return (
                  <div key={index}>
                    <img
                      src={require(`../../../assets/bed/${item.img}`)}
                      width="20"
                      className="inline-block"
                      key={index}
                    />
                  </div>
                );
              }
            }),
          },
        ]);
      });
    }
  };
  const getOrderedList = async () => {
    setPatientOrderedList([]);
    // config.params.process = "2,3,4"; //Хэвтэж байгаа, Гарах захиалгатай, Гарах зөвшөөрөлтэй
    const response = await Get(`service/inpatient-request`, token, config);
    if (response) {
      console.log("response get OrderedList ====>", response);
      response.data?.map((el, index) => {
        setPatientOrderedList((patientOrderedList) => [
          ...patientOrderedList,
          {
            key: index,
            cardNumber: el.patient?.cardNumber,
            name: `${el.patient?.lastName?.substr(0, 1)}. ${
              el.patient?.firstName
            }`,
            gender: el.patient?.genderType === "MAN" ? "Эр" : "Эм",
            registerNumber: el.patient?.registerNumber,
            room: el.rooms?.roomNumber,
            process: orderType.map((item, index) => {
              if (item.value === el.process) {
                return (
                  <div key={index}>
                    <img
                      src={require(`../../../assets/bed/${item.img}`)}
                      width="20"
                      className="inline-block"
                      key={index}
                    />
                  </div>
                );
              }
            }),
          },
        ]);
      });
    }
  };

  useEffect(() => {
    getPatientList();
    getOrderedList();
  }, []);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKey(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKey,
    onChange: onSelectChange,
  };

  return (
    <div className="p-6">
      <Row gutter={16}>
        <Col span={12}>
          <Row gutter={16}>
            <Col span={8}>
              <Input
                size="small"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Хайх"
                prefix={<SearchOutlined />}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col span={2} className="contents">
              {orderType
                .filter((obj) => obj.value === 0 || obj.value === 1)
                .map((tag) => {
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
                            src={require(`../../../assets/bed/${tag.img}`)}
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
          <Table
            // loading={patientReqList.length !== 0 ? false : true}
            columns={columns}
            dataSource={patientReqList?.filter(
              (obj) =>
                (obj.cardNumber && obj.cardNumber.includes(searchValue)) ||
                obj.name?.toLowerCase()?.includes(searchValue) ||
                obj.registerNumber?.toLowerCase()?.includes(searchValue)
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
                },
              };
            }}
          />
        </Col>
        <Col span={12}>
          <Row gutter={16}>
            <Col span={8}>
              <Input
                size="small"
                value={searchValueOrdered}
                onChange={(e) => setSearchValueOrdered(e.target.value)}
                placeholder="Хайх"
                prefix={<SearchOutlined />}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col span={2} className="contents">
              {orderType
                .filter(
                  (obj) => obj.value === 2 || obj.value === 3 || obj.value === 4
                )
                .map((tag) => {
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
                            src={require(`../../../assets/bed/${tag.img}`)}
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
          <Table
            // loading={patientOrderedList.length !== 0 ? false : true}
            columns={columnsOrdered}
            dataSource={patientOrderedList?.filter(
              (obj) =>
                (obj.cardNumber &&
                  obj.cardNumber.includes(searchValueOrdered)) ||
                obj.name.includes(searchValueOrdered) ||
                obj.registerNumber.includes(searchValueOrdered)
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
                },
              };
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default BedPlan;
