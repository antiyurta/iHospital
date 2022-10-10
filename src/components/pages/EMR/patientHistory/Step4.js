//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын нөхцөл
import React from "react";
import { Col, Radio, Row, Divider, Typography, Input, Button } from "antd";
import { INPUT_HEIGHT } from "../../../../constant";
import { blue } from "@ant-design/colors";

export default function Step4(props) {
  const { Text } = Typography;
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Ахуйн нөхцөл
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Хаана амьдардаг вэ</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Орон сууц</Radio>
            <Radio value={2}>Гэр хороолол</Radio>
            <Radio value={3}>Хувийн орон сууц</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Гэрлэлтийн байдал</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Гэрлэсэн</Radio>
            <Radio value={2}>Гэрлээгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Ажлын нөхцөл
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Ажлын нөхцөл</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Энгийн</Radio>
            <Radio value={2}>Хортой</Radio>
            <Radio value={3}>Хүнд</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Хаана ямар ажил эрхэлдэг</Text>
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
        <Col span={6} className="text-center">
          <Text>Ажлын цаг</Text>
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
          style={{ backgroundColor: blue.primary }}
          onClick={() => props.nextBtn()}
        >
          Дараах
        </Button>
      </Row>
    </div>
  );
}
