//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Удамшлын асуумж
import React from "react";
import { Col, Row, Divider, Input, Form } from "antd";
import { INPUT_HEIGHT } from "../../../../constant";

export default function Step8() {
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Удамшлын асуумж
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Удамд ижил өвчтэй хүн байсан уу"
            name={["geneticQuestion", "painDesc"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 10,
            }}
            labelCol={{
              span: 14,
            }}
          >
            <Input
              size="small"
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Гэр бүл, хамаатан саданд удамшлын өвчтэй хүн байгаа эсэх"
            name={["geneticQuestion", "geneticPainDesc"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 10,
            }}
            labelCol={{
              span: 14,
            }}
          >
            <Input
              size="small"
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}
