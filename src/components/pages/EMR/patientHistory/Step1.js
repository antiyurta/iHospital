//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Төрөлт, өсөлт бойжилт
import React, { useState } from "react";
import {
  Col,
  Radio,
  Row,
  Divider,
  Input,
  DatePicker,
  InputNumber,
  Button,
  Form,
} from "antd";
import { INPUT_HEIGHT } from "../../../../constant";
import { blue } from "@ant-design/colors";

export default function Step1(props) {
  const { TextArea } = Input;
  const [validStep1, setValidStep1] = useState(false);

  const onChangeBirthDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeWeek = (value) => {
    console.log("changed", value);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    setValidStep1(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setValidStep1(false);
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelAlign="left"
      scrollToFirstError
    >
      <Divider orientation="left" className="text-sm my-2">
        Төрөлт
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Хэдэн онд"
            name="birthDate"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
          >
            <DatePicker
              onChange={onChangeBirthDate}
              placeholder="1999-01-01"
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
              }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Хаана"
            name="location"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
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
      <Row align="middle" className="my-2">
        <Col span={16}>
          <Form.Item
            label="Яаж төрсөн"
            name="born"
            rules={[{ required: true, message: "Заавал сонгоно уу" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
          >
            <Radio.Group>
              <Radio value={1}>Төрөх замаар</Radio>
              <Radio value={2}>Кесар хагалгаагаар</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left">
          <Form.Item
            label="Хугацаандаа"
            name="onTime"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
          >
            <DatePicker
              onChange={onChangeBirthDate}
              placeholder="1999-01-01"
              style={{
                minHeight: INPUT_HEIGHT,
                padding: 5,
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Хэдэн долоо хоног"
            name="weeks"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
          >
            <InputNumber
              min={1}
              max={10}
              onChange={onChangeWeek}
              style={{
                minHeight: INPUT_HEIGHT,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Бага насны өсөлт
      </Divider>
      <Row align="middle" className="my-2">
        <Col span={16} className="text-left">
          <Form.Item
            label="Бага насны өсөлт, бойжилт"
            name="growth"
            rules={[{ required: true, message: "Заавал сонгоно уу" }]}
            className="mb-0"
            labelAlign="left"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
            labelCol={{
              span: 10,
            }}
          >
            <Radio.Group
            // style={{ borderColor: "red", borderWidth: 1, borderRadius: 2 }}
            >
              <Radio value={1}>Хэвийн</Radio>
              <Radio value={2}>Хэвийн бус</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="my-2">
        <Col span={16} className="text-left">
          <Form.Item
            label="Цэцэрлэгт явсан эсэх"
            name="kinder"
            rules={[{ required: true, message: "Заавал сонгоно уу" }]}
            className="mb-0"
            labelAlign="left"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
            labelCol={{
              span: 10,
            }}
          >
            <Radio.Group>
              <Radio value={1}>Тийм</Radio>
              <Radio value={2}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="my-2">
        <Col span={16} className="text-left">
          <Form.Item
            label="Сургуульд сурсан эсэх"
            name="school"
            rules={[{ required: true, message: "Заавал сонгоно уу" }]}
            className="mb-0"
            labelAlign="left"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
            labelCol={{
              span: 10,
            }}
          >
            <Radio.Group>
              <Radio value={1}>Тийм</Radio>
              <Radio value={2}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Дархлаажуулалт
      </Divider>
      <Row align="middle" className="my-2">
        <Col span={20} className="text-left">
          <Form.Item
            label="Товлолын дагуу вакцинууддаа хамрагдсан эсэх"
            name="vaccine"
            rules={[{ required: true, message: "Заавал сонгоно уу" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
          >
            <Radio.Group>
              <Radio value={1}>Хэвийн</Radio>
              <Radio value={2}>Хэвийн бус</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Багадаа өвдсөн өвчин
      </Divider>
      <Row align="middle" className="my-2">
        <Col span={24} className="text-left">
          <Form.Item
            label=""
            name="child"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
          >
            <TextArea rows={2} style={{ padding: 2 }} />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Биеийн хэмжигдэхүүн
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left">
          <Form.Item
            label="Биеийн өндөр (см)"
            name="height"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 12,
            }}
            labelCol={{
              span: 10,
            }}
          >
            <InputNumber
              min={1}
              max={10}
              onChange={onChangeWeek}
              style={{
                minHeight: INPUT_HEIGHT,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
        <Col span={12} className="text-center">
          <Form.Item
            label="Биеийн жин (кг)"
            name="weight"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 12,
            }}
            labelCol={{
              span: 10,
            }}
          >
            <InputNumber
              min={1}
              max={10}
              onChange={onChangeWeek}
              style={{
                minHeight: INPUT_HEIGHT,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        БЖИ
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-center">
          <Form.Item
            label="Систол даралт"
            name="daralt1"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 12,
            }}
            labelCol={{
              span: 10,
            }}
          >
            <InputNumber
              min={1}
              max={10}
              onChange={onChangeWeek}
              style={{
                minHeight: INPUT_HEIGHT,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
        <Col span={12} className="text-center">
          <Form.Item
            label="Диастол даралт"
            name="daralt2"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 12,
            }}
            labelCol={{
              span: 10,
            }}
          >
            <InputNumber
              min={1}
              max={10}
              onChange={onChangeWeek}
              style={{
                minHeight: INPUT_HEIGHT,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row className="mt-2">
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              validStep1 && props.nextBtn();
            }}
            style={{ backgroundColor: blue.primary }}
          >
            Дараах
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}
