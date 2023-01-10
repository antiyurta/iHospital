//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Харшил
import React from "react";
import { Col, Radio, Row, Divider, Input, Form } from "antd";

export default function Step5() {
  const { TextArea } = Input;

  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Харшил
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Ямар нэг зүйлд харшилдаг уу"
            name={["allergy", "isAllergy"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            labelCol={{
              span: 10,
            }}
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
            label="Хоол хүнс"
            name={["allergy", "food"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            labelCol={{ span: 6 }}
          >
            <TextArea rows={2} style={{ padding: 2 }} placeholder="Хүнс" />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Эмийн бодис"
            name={["allergy", "medicine"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            labelCol={{ span: 6 }}
          >
            <TextArea rows={2} style={{ padding: 2 }} placeholder="Эм" />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Бусад"
            name={["allergy", "other"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            labelCol={{ span: 6 }}
          >
            <TextArea
              rows={2}
              style={{ padding: 2 }}
              placeholder="Бусад бодис"
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}
