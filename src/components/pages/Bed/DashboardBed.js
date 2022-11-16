import React from "react";
import { Col, Row, Card } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";
import { useNavigate } from "react-router-dom";

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
function DashboardBed(props) {
  let navigate = useNavigate();

  return (
    <div className="p-6">
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={6}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
            onClick={() => {
              props.setSelectedFn("rooms");
              navigate(`/bed_management/rooms`);
            }}
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
        <Col className="gutter-row" span={6}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
          >
            <div style={{ width: "70%" }}>
              <p>Засвартай өрөө</p>
              <p style={total}>Нийт: 5</p>
            </div>
            <div>
              <UserAddOutlined style={iconStyle} />
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
          >
            <div style={{ width: "70%" }}>
              <p>Нөөцөлсөн өрөө</p>
              <p style={total}>Нийт: 3</p>
            </div>
            <div>
              <UserAddOutlined style={iconStyle} />
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
          >
            <div style={{ width: "70%" }}>
              <p>Цэвэрлэх өрөө</p>
              <p style={total}>Нийт: 5</p>
            </div>
            <div>
              <UserAddOutlined style={iconStyle} />
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card
            style={cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={cardBodyStyle}
          >
            <div style={{ width: "70%" }}>
              <p>Дүүрсэн өрөө</p>
              <p style={total}>Нийт: 5</p>
            </div>
            <div>
              <UserAddOutlined style={iconStyle} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardBed;
