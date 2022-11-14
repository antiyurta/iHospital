import React, { useState } from "react";
import { Segmented, Col, Row, Card, Input, Tag, Modal } from "antd";
import { blue } from "@ant-design/colors";
import { SearchOutlined, SnippetsOutlined } from "@ant-design/icons";
const cardStyle = {
  borderColor: blue.primary,
};
const cardBodyStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: 12,
  paddingRight: 10,
  paddingLeft: 10,
  width: "100%",
};
const iconStyle = {
  backgroundColor: blue.primary,
  padding: 5,
  borderRadius: 6,
  fontSize: 16,
  color: "#fff",
};
const total = {
  fontSize: 16,
  fontWeight: "bold",
};
const cardRowContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
const DepartmentBed = (props) => {
  console.log("rpops", props);
  const [viewType, setViewType] = useState("List"); //['list', 'card']
  const [filter, setFilter] = useState("all"); //['Сул өрөө', 'Дүүрсэн өрөө', .....]
  const [searchValue, setSearchValue] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-6">
      <Row>
        {/* <Col span={3}>
          <Segmented
            className="department-bed-segment"
            size="small"
            options={[
              {
                label: "List",
                value: "List",
                icon: <BarsOutlined />,
              },
              {
                label: "Grid",
                value: "Grid",
                icon: <AppstoreOutlined />,
              },
            ]}
            value={viewType}
            onChange={setViewType}
          />
        </Col> */}
        <Col span={8}>
          <Segmented
            className="department-bed-segment"
            size="small"
            options={[
              {
                label: "Бүгд",
                value: "all",
                icon: null,
              },
              {
                label: "Сул өрөө",
                value: "0",
                icon: null,
              },
              {
                label: "Дүүрсэн өрөө",
                value: "1",
                icon: null,
              },
              {
                label: "Засвартай өрөө",
                value: "2",
                icon: null,
              },
            ]}
            value={filter}
            onChange={setFilter}
          />
        </Col>
        <Col span={8} offset={8}>
          <Input
            size="small"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Өрөө хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-4">
        <Col className="gutter-row" span={8}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
            onClick={showModal}
          >
            <div style={{ width: "10%" }}>
              <SnippetsOutlined style={iconStyle} />
            </div>
            <div style={{ width: "90%" }}>
              <div style={cardRowContainer} className="mb-6">
                <p>#101 - Энгийн өрөө</p>
              </div>
              <div style={cardRowContainer}>
                <p style={total}>Орны тоо: 4 / 3</p>
                <Tag color="warning" className="rounded-xl">
                  1 ор засвартай
                </Tag>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
          >
            <div style={{ width: "10%" }}>
              <SnippetsOutlined style={iconStyle} />
            </div>
            <div style={{ width: "90%" }}>
              <div style={cardRowContainer} className="mb-6">
                <p>#102 - VIP өрөө</p>
              </div>
              <div style={cardRowContainer}>
                <p style={total}>Орны тоо: 4 / 4</p>
                <Tag color="error" className="rounded-xl">
                  Дүүрсэн
                </Tag>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Modal
        title="Өвчтөн нэмэх"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default DepartmentBed;
