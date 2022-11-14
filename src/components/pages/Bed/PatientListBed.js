import {
  Segmented,
  Col,
  Row,
  Card,
  Input,
  Select,
  Button,
  Tag,
  Modal,
} from "antd";
import React, { useState } from "react";
import { blue } from "@ant-design/colors";
import {
  SearchOutlined,
  BarsOutlined,
  AppstoreOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const cardStyle = {
  borderColor: blue.primary,
};
const containerCardBodyStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: 5,
  alignItems: "center",
  width: "100%",
};
const cardBodyStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: 12,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
const cardBodyStyleList = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: 12,
  alignItems: "center",
  width: "100%",
};
const iconStyle = {
  backgroundColor: blue.primary,
  padding: 15,
  borderRadius: 12,
  fontSize: 20,
  color: "#fff",
};

function PatientListBed() {
  const [viewType, setViewType] = useState("list"); //['list', 'card']
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

  var DATA = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "disabled",
      disabled: true,
      label: "Disabled",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="p-6">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Input
            size="small"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Өвчтөн хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={18} className="text-right">
          <Button
            type="primary"
            htmlType="submit"
            onClick={showModal}
            style={{ backgroundColor: blue.primary }}
          >
            Өвчтөн нэмэх
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-4">
        <Col span={2}>
          <Segmented
            className="department-bed-segment"
            options={[
              {
                label: "",
                value: "list",
                icon: <BarsOutlined />,
              },
              {
                label: "",
                value: "grid",
                icon: <AppstoreOutlined />,
              },
            ]}
            value={viewType}
            onChange={setViewType}
          />
        </Col>
        <Col
          span={22}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
              marginRight: 10,
            }}
            onChange={handleChange}
            options={DATA}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
              marginRight: 10,
            }}
            onChange={handleChange}
            options={DATA}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
              marginRight: 10,
            }}
            onChange={handleChange}
            options={DATA}
          />
        </Col>
      </Row>
      <Row gutter={[24, 6]} className="mt-4">
        {viewType == "grid" ? (
          <>
            <Col className="gutter-row" span={6}>
              <Card
                style={cardStyle}
                className="rounded-xl cursor-pointer"
                bodyStyle={cardBodyStyle}
              >
                <div>
                  <UserAddOutlined style={iconStyle} />
                </div>
                <div>
                  <div className="text-center mt-2 font-bold">
                    Б. Бат - Эрдэнэ
                  </div>
                  <div className="text-center text-xs">РД: АА99999999</div>
                  <div className="text-center mt-2">#123456</div>
                  <div className="text-center">Эрэгтэй</div>
                  <div className="text-center mt-4">
                    <Tag color="success" className="rounded-xl mr-0">
                      2022/11/11
                    </Tag>
                  </div>
                </div>
              </Card>
            </Col>
          </>
        ) : (
          <>
            <Col className="gutter-row" span={24}>
              <Card
                style={cardStyle}
                className="rounded-xl"
                bodyStyle={containerCardBodyStyle}
              >
                <div className="w-3/12 pl-4 font-bold">Нэр</div>
                <div className="w-2/12 font-bold">Регистр</div>
                <div className="w-2/12 font-bold">#ID</div>
                <div className="w-2/12 font-bold">Хүйс</div>
                <div className="w-2/12 font-bold">Огноо</div>
              </Card>
            </Col>
            <Col className="gutter-row" span={24}>
              <Card
                style={cardStyle}
                className="rounded-xl cursor-pointer"
                bodyStyle={cardBodyStyleList}
              >
                <div className="w-3/12 pl-4">Б. Бат - Эрдэнэ</div>
                <div className="w-2/12 text-xs">РД: АА99999999</div>
                <div className="w-2/12">#123456</div>
                <div className="w-2/12">Эрэгтэй</div>
                <div className="w-2/12">
                  <Tag color="success" className="rounded-xl mr-0">
                    2022/11/11
                  </Tag>
                </div>
              </Card>
            </Col>
          </>
        )}
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
}

export default PatientListBed;
