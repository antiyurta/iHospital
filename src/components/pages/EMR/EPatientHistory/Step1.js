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
      <div className="flex flex-wrap">
        <div className="w-full basis-1/2 p-1 pr-4">
          <Form.Item
            label="Хэдэн онд"
            name={["birth", "birthDate"]}
          >
            <DatePicker />
          </Form.Item>
        </div>
        <div className="w-full basis-1/2 p-1 pr-4">
          <Form.Item
            label="Хаана"
            name={["birth", "locate"]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="w-full basis-1/2 p-1 pr-4">
          <Form.Item
            label="Яаж төрсөн"
            name={["birth", "whatBorn"]}
          >
            <Radio.Group>
              <Radio value="0">Төрөх замаар</Radio>
              <Radio value="1">Кесар хагалгаагаар</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="w-full basis-1/2 p-1 pr-4">
          <Form.Item
            label="Хугацаандаа"
            name={["birth", "stateTime"]}
          >
            <Select className="p-1 h-7 inline-table">
              <Option value="choose">Сонгох</Option>
              <Option value="0">Хугацаандаа</Option>
              <Option value="1">Дутуу</Option>
              <Option value="2">Илүү</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="w-full basis-1/2 p-1 pr-4">
          <Form.Item
            label="Хэдэн 7 хоног"
            name={["birth", "fewWeeks"]}
          >
            <InputNumber />
          </Form.Item>
        </div>
      </div>
      <Divider orientation="left" className="text-sm my-2">
        Бага насны өсөлт
      </Divider>
      <div className="flex flex-wrap">
        <div className="w-full p-1 pr-4">
          <Form.Item
            label="Бага насны өсөлт, бойжилт"
            name={["birth", "growthChildHood"]}
          >
            <Radio.Group>
              <Radio value="NORMAL">Хэвийн</Radio>
              <Radio value="UNNORMAL">Хэвийн бус</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="w-full p-1 pr-4">
          <Form.Item
            label="Цэцэрлэгт явсан эсэх"
            name={["birth", "isKindergarden"]}
          >
            <Radio.Group>
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="w-full p-1 pr-4">
          <Form.Item
            label="Сургуульд сурсан эсэх"
            name={["birth", "isSchool"]}
          >
            <Radio.Group>
              <Radio value={true}>Тийм</Radio>
              <Radio value={false}>Үгүй</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
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
    </div >
  );
}
