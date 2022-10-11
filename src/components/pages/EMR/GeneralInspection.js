//EMR -> Явцын үзлэг -> Ерөнхий үзлэг
import React, { useState } from "react";
import {
  Col,
  Radio,
  Row,
  Divider,
  Typography,
  Input,
  Button,
  Form,
} from "antd";
import { INPUT_HEIGHT } from "../../../constant";
import { blue } from "@ant-design/colors";

export default function GeneralInspection(props) {
  const { TextArea } = Input;
  const { Text } = Typography;
  const [validStep2, setValidStep2] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    setValidStep2(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setValidStep2(false);
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
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Биеийн ерөнхий байдал"
            name="val1"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
            labelCol={{
              span: 6,
            }}
          >
            <Radio.Group>
              <Radio value={1}>Дунд</Radio>
              <Radio value={2}>Хүндэвтэр</Radio>
              <Radio value={3}>Хүнд</Radio>
              <Radio value={4}>Маш хүнд</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Ухаан санаа"
            name="val2"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
            labelCol={{
              span: 6,
            }}
          >
            <Radio.Group>
              <Radio value={1}>Саруул</Radio>
              <Radio value={2}>Бүдгэрсэн</Radio>
              <Radio value={3}>Ухаангүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={24} className="text-left">
          <Form.Item
            label="Арьс салст"
            name="val3"
            rules={[{ required: true, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
            labelCol={{
              span: 6,
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
        Амьсгалын эрхтэн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Амьсгал 1 минутанд</Text>
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
        <Col span={6} className="text-left">
          <Text>Чагналтаар</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Уушги цулцангийн</Radio>
            <Radio value={2}>Гуурсан хоолойн</Radio>
            <Radio value={3}>Хэржигнүүртэй</Radio>
            <Radio value={4}>Амьсгал сулавтар</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Цусны эргэлтийн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Судасны цохилт 1 минутанд</Text>
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
          <Text>Хүчдэл дүүрэлт</Text>
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
        <Col span={6} className="text-left">
          <Text>Тогшилтоор /Зүрхний хил/</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Хэвийн</Radio>
            <Radio value={2}>Томорсон</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Чагналтаар /Зүрхний авиа/</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Тод</Radio>
            <Radio value={2}>Бүдэг</Radio>
            <Radio value={3}>Бүдгэвтэр</Radio>
            <Radio value={4}>Хэм жигд</Radio>
            <Radio value={5}>Жигд бус</Radio>
            <Radio value={6}>Хэм алдалттай</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>АД баруун талд</Text>
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
          <Text>Зүүн талд</Text>
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
      <Divider orientation="left" className="text-sm my-2">
        Хоол шингээх эрхтэн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Хэл</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Ердийн</Radio>
            <Radio value={2}>Хуурай</Radio>
            <Radio value={3}>Өнгөргүй</Radio>
            <Radio value={4}>Өнгөртэй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Хэвлийн үзлэг</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Өнгөц тэмтрэлтээр</Radio>
            <Radio value={2}>Гүн тэмтрэлтээр</Radio>
            <Radio value={3}>Эмзэглэлтэй </Radio>
            <Radio value={4}>Ердийн</Radio>
            <Radio value={5}>Зөөлөн гялтан цочрол үгүй</Radio>
            <Radio value={6}>Гялтан цочролтын шинж илэрсэн</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Мэдрэлийн тогтолцоо
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Сонсох чадвар</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Хэвийн</Radio>
            <Radio value={2}>Буурсан</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Рефлексүүд</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Хадгалагдана</Radio>
            <Radio value={2}>Хадгалагдахгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <TextArea
        rows={2}
        style={{ padding: 5, marginBottom: 5 }}
        placeholder="Бусад"
      />
      <TextArea
        rows={2}
        style={{ padding: 5 }}
        placeholder="Сэтгэцийн байдал"
      />
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Row className="mt-2">
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => validStep2 && console.log("SAVED TAB 2")}
            style={{ backgroundColor: blue.primary }}
          >
            Хадгалах
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
}
