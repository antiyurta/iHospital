//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын хэв маяг
import React from "react";
import { Col, Radio, Row, Divider, Typography, Input, Button } from "antd";
import { INPUT_HEIGHT } from "../../../../constant";
import { blue } from "@ant-design/colors";

export default function Step3(props) {
  const { Text } = Typography;
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Архи
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Архи хэрэглэдэг эсэх</Text>
        </Col>
        <Col span={6}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
        <Col span={6} className="text-center">
          <Text>Хэр удаан</Text>
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
          <Text>Ямар архи</Text>
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
          <Text>Нэг удаа хэрэглэх хэмжээ</Text>
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
        Тамхи
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Тамхи хэрэглэдэг эсэх</Text>
        </Col>
        <Col span={6}>
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
        <Col span={6} className="text-center">
          <Text>Хэзээнээс</Text>
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
          <Text>Ямар тамхи</Text>
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
          <Text>Өдөрт татдаг хэмжээ</Text>
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
        Донтолт
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={16} className="text-left">
          <Text>
            Ямар нэг мансууруулах бодис, эм, химийн бодис хэрэглэдэг үү /
            донтдог уу
          </Text>
        </Col>
        <Col span={8} className="text-right">
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={16} className="text-left">
          <Text>Хэрэглэхгүй удвал түүнийгээ үгүйлдэг үү/ нэхдэг үү</Text>
        </Col>
        <Col span={8} className="text-right">
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Хоол
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Ямар хоолтон</Text>
        </Col>
        <Col span={6} className="text-right">
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
        <Col span={6} className="text-center">
          <Text>Өдөрт хэд хооллодог</Text>
        </Col>
        <Col span={6} className="text-right">
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
          <Text>Ямар төрлийн хоол голдуу хэрэглэдэг</Text>
        </Col>
        <Col span={6} className="text-right">
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
        <Col span={6} className="text-center">
          <Text>Ихэвчлэн хаана хооллодог</Text>
        </Col>
        <Col span={6} className="text-right">
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Дасгал хөдөлгөөн
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={8} className="text-left">
          <Text>Дасгал хөдөлгөөн тогтмол хийдэг үү</Text>
        </Col>
        <Col span={6} className="text-right">
          <Radio.Group>
            <Radio value={1}>Тийм</Radio>
            <Radio value={2}>Үгүй</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={6} className="text-left">
          <Text>Нэг удаад ямар хугацаанд</Text>
        </Col>
        <Col span={6} className="text-right">
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
          <Text>Долоо хоногт хэдэн удаа</Text>
        </Col>
        <Col span={6} className="text-right">
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
