//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Удамшлын асуумж
import React from "react";
import { Col, Row, Divider, Typography, Input, Button } from "antd";
import { INPUT_HEIGHT } from "../../../../constant";
import { blue } from "@ant-design/colors";

export default function Step8(props) {
  const { Text } = Typography;

  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Удамшлын асуумж
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={16} className="text-left">
          <Text>Удамд ижил өвчтэй хүн байсан уу</Text>
        </Col>
        <Col span={6}>
          <Input
            size="small"
            style={{
              minHeight: INPUT_HEIGHT,
              padding: 5,
              height: INPUT_HEIGHT,
            }}
          />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={16} className="text-left">
          <Text>Гэр бүл, хамаатан саданд удамшлын өвчтэй хүн байгаа эсэх</Text>
        </Col>
        <Col span={6}>
          <Input
            size="small"
            style={{
              minHeight: INPUT_HEIGHT,
              padding: 5,
              height: INPUT_HEIGHT,
            }}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Button className="mr-4" onClick={() => props.backBtn()}>
          Буцах
        </Button>
        <Button
          type="primary"
          onClick={() => props.nextBtn()}
          style={{ backgroundColor: blue.primary }}
        >
          Хадгалах
        </Button>
      </Row>
    </div>
  );
}
