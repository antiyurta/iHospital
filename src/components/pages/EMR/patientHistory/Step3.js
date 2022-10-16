//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Амьдралын хэв маяг
import React from "react";
import { Col, Radio, Row, Divider, Input, Form } from "antd";
import { INPUT_HEIGHT } from "../../../../constant";

export default function Step3() {
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Архи
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Архи хэрэглэдэг эсэх"
            name={["lifeStyle", "alcohol", "isUse"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
          >
            <Radio.Group>
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Хэр удаан"
            name={["lifeStyle", "alcohol", "howLong"]}
            rules={[{ required: false, message: "" }]}
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
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Ямар архи"
            name={["lifeStyle", "alcohol", "whatAlc"]}
            rules={[{ required: false, message: "" }]}
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
        <Col span={12}>
          <Form.Item
            label="Нэг удаа хэрэглэх хэмжээ"
            name={["lifeStyle", "alcohol", "size"]}
            rules={[{ required: false, message: "" }]}
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
      <Divider orientation="left" className="text-sm my-2">
        Тамхи
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Тамхи хэрэглэдэг эсэх"
            name={["lifeStyle", "cigar", "isUse"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
          >
            <Radio.Group>
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Хэзээнээс"
            name={["lifeStyle", "cigar", "fromWhen"]}
            rules={[{ required: false, message: "" }]}
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
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Ямар тамхи"
            name={["lifeStyle", "cigar", "whatCigar"]}
            rules={[{ required: false, message: "" }]}
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
        <Col span={12}>
          <Form.Item
            label="Өдөрт татдаг хэмжээ"
            name={["lifeStyle", "cigar", "size"]}
            rules={[{ required: false, message: "" }]}
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
      <Divider orientation="left" className="text-sm my-2">
        Донтолт
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Ямар нэг мансууруулах бодис, эм, химийн бодис хэрэглэдэг үү /
            донтдог уу"
            name={["lifeStyle", "addicition", "isUse"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 8,
            }}
            labelCol={{
              span: 16,
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
            label="Хэрэглэхгүй удвал түүнийгээ үгүйлдэг үү/ нэхдэг үү"
            name={["lifeStyle", "addicition", "isLong"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 8,
            }}
            labelCol={{
              span: 16,
            }}
          >
            <Radio.Group>
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Хоол
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Ямар хоолтон"
            name={["lifeStyle", "food", "whatFoodie"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
          >
            <Radio.Group>
              <Radio value="0">Махан</Radio>
              <Radio value="1">Цагаан</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Өдөрт хэд хооллодог"
            name={["lifeStyle", "food", "dayEatCount"]}
            rules={[{ required: false, message: "" }]}
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
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Ямар төрлийн хоол голдуу хэрэглэдэг"
            name={["lifeStyle", "food", "eatFoodType"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
          >
            <Radio.Group>
              <Radio value="0">Хуурсан</Radio>
              <Radio value="1">Шөлтэй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Ихэвчлэн хаана хооллодог"
            name={["lifeStyle", "food", "usuallyEat"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
          >
            <Radio.Group>
              <Radio value="0">Гэртээ</Radio>
              <Radio value="1">Гадуур</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" className="text-sm my-2">
        Дасгал хөдөлгөөн
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={24}>
          <Form.Item
            label="Дасгал хөдөлгөөн тогтмол хийдэг үү"
            name={["lifeStyle", "exercise", "isUse"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              span: 8,
            }}
            labelCol={{
              span: 16,
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
        <Col span={12}>
          <Form.Item
            label="Нэг удаад ямар хугацаанд"
            name={["lifeStyle", "exercise", "oneTime"]}
            rules={[{ required: false, message: "" }]}
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
        <Col span={12}>
          <Form.Item
            label="Долоо хоногт хэдэн удаа"
            name={["lifeStyle", "exercise", "weeklyCount"]}
            rules={[{ required: false, message: "" }]}
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
    </div>
  );
}
