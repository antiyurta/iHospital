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
  Form,
  Select,
} from "antd";
import { INPUT_HEIGHT } from "../../../../constant";

export default function Step1() {
  const { TextArea } = Input;
  const { Option } = Select;
  return (
    <div>
      <Divider orientation="left" className="text-sm my-2">
        Төрөлт
      </Divider>
      <Row align="middle" className="mb-1">
        <Col span={12}>
          <Form.Item
            label="Хэдэн онд"
            name={["birth", "birthDate"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 2,
              span: 12,
            }}
          >
            <DatePicker
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
            name={["birth", "locate"]}
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
      <Row align="middle" className="my-2">
        <Col span={16}>
          <Form.Item
            label="Яаж төрсөн"
            name={["birth", "whatBorn"]}
            rules={[{ required: false, message: "Заавал сонгоно уу" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
          >
            <Radio.Group>
              <Radio value="0">Төрөх замаар</Radio>
              <Radio value="1">Кесар хагалгаагаар</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="mb-1">
        <Col span={12} className="text-left">
          <Form.Item
            label="Хугацаандаа"
            name={["birth", "stateTime"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 8,
            }}
          >
            <Select className="p-1 h-7 inline-table">
              <Option value="choose">Сонгох</Option>
              <Option value="0">Хугацаандаа</Option>
              <Option value="1">Дутуу</Option>
              <Option value="2">Илүү</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Хэдэн долоо хоног"
            name={["birth", "fewWeeks"]}
            rules={[{ required: false, message: "" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 20,
            }}
          >
            <InputNumber
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
            name={["birth", "growthChildHood"]}
            rules={[{ required: false, message: "Заавал сонгоно уу" }]}
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
              <Radio value="NORMAL">Хэвийн</Radio>
              <Radio value="UNNORMAL">Хэвийн бус</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="my-2">
        <Col span={16} className="text-left">
          <Form.Item
            label="Цэцэрлэгт явсан эсэх"
            name={["birth", "isKindergarden"]}
            rules={[{ required: false, message: "Заавал сонгоно уу" }]}
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
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row align="middle" className="my-2">
        <Col span={16} className="text-left">
          <Form.Item
            label="Сургуульд сурсан эсэх"
            name={["birth", "isSchool"]}
            rules={[{ required: false, message: "Заавал сонгоно уу" }]}
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
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
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
            name={["birth", "isVaccination"]}
            rules={[{ required: false, message: "Заавал сонгоно уу" }]}
            className="mb-0"
            wrapperCol={{
              offset: 1,
              span: 20,
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
        Багадаа өвдсөн өвчин
      </Divider>
      <Row align="middle" className="my-2">
        <Col span={24} className="text-left">
          <Form.Item
            label=""
            name={["birth", "painChildhood"]}
            rules={[{ required: false, message: "" }]}
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
            name={["birth", "height"]}
            rules={[{ required: false, message: "" }]}
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
            name={["birth", "weight"]}
            rules={[{ required: false, message: "" }]}
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
            name={["birth", "systol"]}
            rules={[{ required: false, message: "" }]}
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
            name={["birth", "distol"]}
            rules={[{ required: false, message: "" }]}
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
              style={{
                minHeight: INPUT_HEIGHT,
                height: INPUT_HEIGHT,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}
