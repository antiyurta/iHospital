//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Өвчний түүх
import React from "react";
import { Col, Row, Input, Form } from "antd";
import { INPUT_HEIGHT } from "../../../../constant";

export default function Step2() {
  return (
    <div>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Халдварт өвчин"
            name={["healthRecord", "infection"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Ужиг өвчин"
            name={["healthRecord", "chronic"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Осол гэмтэл"
            name={["healthRecord", "peril"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Зүрхний архаг өвчин"
            name={["healthRecord", "heartDisease"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Артерийн даралт ихсэлт"
            name={["healthRecord", "arterialPressure"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Уушгины өвчин"
            name={["healthRecord", "pulmonary"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Бөөрний өвчин"
            name={["healthRecord", "kidnyDisease"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Элэгний өвчин"
            name={["healthRecord", "hepatopathy"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Чихрийн шижин"
            name={["healthRecord", "diabetes"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Цусны өвчин"
            name={["healthRecord", "bloodDisease"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Сүрьеэ"
            name={["healthRecord", "phthisis"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Мэдрэл"
            name={["healthRecord", "nerve"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Мэс засал"
            name={["healthRecord", "surgery"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Хавдар"
            name={["healthRecord", "turgidity"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Удамшил"
            name={["healthRecord", "inheritage"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        <Col span={24}>
          <Form.Item
            label="Бусад"
            name={["healthRecord", "other"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 12,
            }}
            labelCol={{
              span: 6,
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
