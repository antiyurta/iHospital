//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Тархвар зүйн асуумж
import React from "react";
import { Col, Radio, Row, Divider, Input, Typography, Button } from "antd";
import { blue } from "@ant-design/colors";

export default function Step7(props) {
  const { TextArea } = Input;
  const { Text } = Typography;
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Аялал
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={16} className="text-left">
          <Text>Сүүлийн 3-6 сарын дотор гадны улсад зорчсон уу</Text>
        </Col>
        <Col span={6}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Text>Ямар зорилгоор</Text>
        <TextArea rows={2} style={{ padding: 2 }} />
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Цус цусан бүтээгдэхүүн ба эрхтэн шилжүүлэг
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={16} className="text-left">
          <Text>
            Сүүлийн 3-6 сарын дотор цус цусан бүтээгдэхүүн сэлбүүлсэн үү
          </Text>
        </Col>
        <Col span={6}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
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
