//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Тархвар зүйн асуумж
import React from "react";
import { Col, Radio, Row, Divider, Input, Form } from "antd";

export default function Step7() {
  const { TextArea } = Input;
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Аялал
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Сүүлийн 3-6 сарын дотор гадны улсад зорчсон уу"
            name={["epidemicQuestion", "isTravel"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            labelCol={{ span: 14 }}
          >
            <Radio.Group>
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label=""
            name={["epidemicQuestion", "travelDesc"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
          >
            <TextArea
              rows={2}
              style={{ padding: 2 }}
              placeholder="Ямар зорилгоор"
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Цус цусан бүтээгдэхүүн ба эрхтэн шилжүүлэг
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Сүүлийн 3-6 сарын дотор цус цусан бүтээгдэхүүн сэлбүүлсэн үү"
            name={["epidemicQuestion", "isUseBlood"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            labelCol={{ span: 14 }}
          >
            <Radio.Group>
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}
