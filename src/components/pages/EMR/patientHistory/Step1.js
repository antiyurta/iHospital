//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Төрөлт, өсөлт бойжилт
import React from "react";
import {
  Col,
  Radio,
  Row,
  Divider,
  Input,
  DatePicker,
  InputNumber,
  Typography,
  Button,
} from "antd";
import { INPUT_HEIGHT } from "../../../../constant";
import { blue } from "@ant-design/colors";

export default function Step1(props) {
  const { TextArea } = Input;
  const { Text } = Typography;

  const onChangeBirthDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeWeek = (value) => {
    console.log("changed", value);
  };
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Төрөлт
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={4} className="text-left">
          <Text>Хэдэн онд</Text>
        </Col>
        <Col span={8}>
          <DatePicker
            onChange={onChangeBirthDate}
            placeholder="1999-01-01"
            style={{
              minHeight: INPUT_HEIGHT,
              padding: 5,
            }}
          />
        </Col>
        <Col span={6} className="text-center">
          <Text>Хаана</Text>
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
      <Row align="middle" className="my-2">
        <Col span={4} className="text-left">
          <Text>Яаж төрсөн</Text>
        </Col>
        <Col span={20}>
          <Radio.Group>
            <Radio value={1}>Төрөх замаар</Radio>
            <Radio value={2}>Кесар хагалгаагаар</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={4} className="text-left">
          <Text>Хугацаандаа</Text>
        </Col>
        <Col span={8}>
          <DatePicker
            onChange={onChangeBirthDate}
            placeholder="1999-01-01"
            style={{
              minHeight: INPUT_HEIGHT,
              padding: 5,
            }}
          />
        </Col>
        <Col span={6} className="text-center">
          <Text>Хэдэн долоо хоног</Text>
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={onChangeWeek}
            style={{
              minHeight: INPUT_HEIGHT,
              height: INPUT_HEIGHT,
            }}
          />
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Бага насны өсөлт
      </Divider>
      <Row align="middle" className="my-2">
        <Col span={8} className="text-left">
          <Text>Бага насны өсөлт, бойжилт</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Хэвийн</Radio>
            <Radio value={2}>Хэвийн бус</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="my-2">
        <Col span={8} className="text-left">
          <Text>Цэцэрлэгт явсан эсэх</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="my-2">
        <Col span={8} className="text-left">
          <Text>Сургуульд сурсан эсэх</Text>
        </Col>
        <Col span={16}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Дархлаажуулалт
      </Divider>
      <Row align="middle" className="my-2">
        <Col span={12} className="text-left">
          <Text>Товлолын дагуу вакцинууддаа хамрагдсан эсэх</Text>
        </Col>
        <Col span={12}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Багадаа өвдсөн өвчин
      </Divider>
      <Row align="middle" className="my-2">
        <Col span={24} className="text-left">
          <TextArea rows={2} style={{ padding: 2 }} />
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Биеийн хэмжигдэхүүн
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Биеийн өндөр (см)</Text>
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={onChangeWeek}
            style={{
              minHeight: INPUT_HEIGHT,
              height: INPUT_HEIGHT,
            }}
          />
        </Col>
        <Col span={6} className="text-center">
          <Text>Биеийн жин (кг)</Text>
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={onChangeWeek}
            style={{
              minHeight: INPUT_HEIGHT,
              height: INPUT_HEIGHT,
            }}
          />
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        БЖИ
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Систол даралт</Text>
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={onChangeWeek}
            style={{
              minHeight: INPUT_HEIGHT,
              height: INPUT_HEIGHT,
            }}
          />
        </Col>
        <Col span={6} className="text-center">
          <Text>Диастол даралт</Text>
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={onChangeWeek}
            style={{
              minHeight: INPUT_HEIGHT,
              height: INPUT_HEIGHT,
            }}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Button
          type="primary"
          onClick={() => props.nextBtn()}
          style={{ backgroundColor: blue.primary }}
        >
          Дараах
        </Button>
      </Row>
    </div>
  );
}
