//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Харшил
import React from "react";
import { Col, Radio, Row, Divider, Typography, Input, Button } from "antd";
import { blue } from "@ant-design/colors";

export default function Step5(props) {
  const { Text } = Typography;
  const { TextArea } = Input;

  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Харшил
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={8} className="text-left">
          <Text>Ямар нэг зүйлд харшилдаг уу</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Text>Хүнс</Text>
        <TextArea rows={2} style={{ padding: 2 }} />
      </Row>
      <Row align="middle" className="mb-1">
        <Text>Эм</Text>
        <TextArea rows={2} style={{ padding: 2 }} />
      </Row>
      <Row align="middle" className="mb-1">
        <Text>Бусад бодис</Text>
        <TextArea rows={2} style={{ padding: 2 }} />
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
