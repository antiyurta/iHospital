//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Өвчний түүх
import React from "react";
import { Col, Row, Checkbox, Input, Button } from "antd";
import { INPUT_HEIGHT } from "../../../../constant";
import { blue } from "@ant-design/colors";

export default function Step2(props) {
  const { TextArea } = Input;
  const onChangeCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Халдварт өвчин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Ужиг өвчин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Осол гэмтэл</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Зүрхний архаг өвчин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>
            Артерийн даралт ихсэлт
          </Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Уушгины өвчин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Бөөрний өвчин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Элэгний өвчин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Чихрийн шижин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Цусны өвчин</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Сүрьеэ</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Мэдрэл</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Мэс засал</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Хавдар</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Удамшил</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Checkbox onChange={onChangeCheckbox}>Бусад</Checkbox>
        </Col>
        <Col span={12}>
          <TextArea rows={1} style={{ minHeight: INPUT_HEIGHT, padding: 2 }} />
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
