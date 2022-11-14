import React from "react";
import { Col, Row, Card } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";

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
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};
const iconStyle = {
  backgroundColor: blue.primary,
  padding: 15,
  borderRadius: 12,
  fontSize: 20,
  color: "#fff",
};
const total = {
  fontSize: 20,
  fontWeight: "bold",
};
const RoomtDtl = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
          >
            <div style={{ width: "70%" }}>
              <p>Сул орны тоо</p>
              <p style={total}>Нийт: 7</p>
            </div>
            <div>
              <UserAddOutlined style={iconStyle} />
            </div>
          </Card>
        </Col>
        <Col span={16}></Col>
        <Card
          style={cardStyle}
          className="rounded-xl cursor-pointer"
          bodyStyle={cardBodyStyle}
        >
          <div style={{ width: "70%" }}>
            <p>Сул орны тоо</p>
            <p style={total}>Нийт: 7</p>
          </div>
          <div>
            <UserAddOutlined style={iconStyle} />
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default RoomtDtl;
