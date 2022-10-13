//Амбулаторийн үзлэгийн өмнөх жагсаалт
import React from "react";
import { DatePicker, Select, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";

export default function BeforeAmbulatoryList() {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  return (
    <div>
      <Row gutter={16}>
        <Col span={6} className="text-center">
          <RangePicker placeholder={["Эхлэх огноо", "Дуусах огноо"]} />
        </Col>
        <Col span={4} className="text-center">
          <Select
            showSearch
            style={{
              minWidth: 200,
            }}
            size="small"
            placeholder="Кабинет"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
        </Col>
        <Col span={4} className="text-center">
          <Select
            showSearch
            style={{
              width: 200,
            }}
            size="small"
            placeholder="Эмч"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
        </Col>
        <Col span={4} className="text-center">
          <Input
            placeholder="Овог, Нэр, РД"
            size="small"
            className="h-7 rounded-md"
          />
        </Col>
        <Col span={4} className="text-center">
          <Select
            showSearch
            style={{
              width: 200,
            }}
            size="small"
            placeholder="Үзлэг"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">Not Identified</Option>
            <Option value="2">Closed</Option>
            <Option value="3">Communicated</Option>
            <Option value="4">Identified</Option>
            <Option value="5">Resolved</Option>
            <Option value="6">Cancelled</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Link to="/ambulatoryDetail" className="btn btn-primary btn-sm m-2">
          Энд жагсаалт харагдана тэгээд дархаар өөр хуудасруу шилжинэ
        </Link>
      </Row>
    </div>
  );
}
