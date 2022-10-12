import { Card, Col, InputNumber, Radio, Row, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import male from "../../../assets/images/maleAvatar.svg";
import { INPUT_HEIGHT } from "../../../constant";
import Ocs from "../OCS/Ocs";
import MainAmbulatory from "./Ambulatory/MainAmbulatory";
import MainPatientHistory from "./PatientHistory/MainPatientHistory";

function EMR() {
  const [cardLoading, setCardLoading] = useState(false);
  const [type, setType] = useState("EMR"); // ['OCS', 'EMR']
  const { Text } = Typography;

  useEffect(() => {}, []);

  const handleTypeChange = ({ target: { value } }) => {
    setType(value);
  };
  const columns = [
    {
      title: "Огноо",
      dataIndex: "date",
      key: "date",
      className: "bg-white",
    },
    {
      title: "Асуудал",
      dataIndex: "problem",
      key: "problem",
      className: "bg-white",
    },
  ];
  const data = [
    {
      key: "1",
      date: "2022-10-01",
      problem: "Самарны харшилтай",
    },
    {
      key: "2",
      date: "2022-09-01",
      problem: "Тууралт",
    },
  ];

  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <Row gutter={[8, 8]}>
          <Col span={14}>
            <Card
              bordered={false}
              title={
                <h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>
              }
              className="header-solid max-h-max"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingBottom: 16,
              }}
            >
              <Row gutter={[16, 16]}>
                <Col span={8} className="text-center">
                  <img className="max-h-full" src={male} alt="avatar" />
                  <Radio.Group
                    size="small"
                    value={type}
                    onChange={handleTypeChange}
                    optionType="button"
                    buttonStyle="solid"
                    className="small-radio-button mt-2"
                  >
                    <Radio.Button value="OCS">OCS</Radio.Button>
                    <Radio.Button value="EMR">EMR</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col span={16}>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Овог:</span>
                    <span className="font-bold ml-2">Ширчиндэмбэрэл</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Нэр:</span>
                    <span className="font-bold ml-2">Амарбат</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Хүйс:</span>
                    <span className="font-bold ml-2">Эр</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Нас:</span>
                    <span className="font-bold ml-2">25</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">РД:</span>
                    <span className="font-bold ml-2">ЙЮ97043019</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Утас:</span>
                    <span className="font-bold ml-2">86681325</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Хаяг:</span>
                    <span className="font-bold ml-2">
                      Улаанбаатар, Баянзүрх, 8 Хороо, 68-50
                    </span>
                  </label>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={10}>
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Гол асуудлууд</h6>}
              className="header-solid h-full"
              loading={cardLoading}
            >
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                sticky={false}
                size="small"
              />
            </Card>
          </Col>
          <Col span={24}>
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Амбулатори</h6>}
              className="header-solid h-full"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingBottom: 16,
                minHeight: 400,
                maxHeight: 600,
                overflowX: "hidden",
                overflowY: "scroll",
              }}
            >
              <MainAmbulatory />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        {type == "EMR" ? (
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Явцын үзлэг</h6>}
            className="header-solid h-full"
            loading={cardLoading}
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
            }}
            extra={
              <>
                <Radio.Group>
                  <Radio value={1}>Анхан</Radio>
                  <Radio value={2}>Давтан</Radio>
                </Radio.Group>
              </>
            }
          >
            <MainPatientHistory />
          </Card>
        ) : null}
        {type == "OCS" ? (
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Шинэ захиалга</h6>}
            className="header-solid h-full"
            loading={cardLoading}
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
            }}
            extra={
              <Row className="items-center">
                <Col>
                  <Text className="mr-2">Нийт төлбөр</Text>
                </Col>
                <Col>
                  <InputNumber
                    min={1}
                    max={10}
                    style={{
                      minHeight: INPUT_HEIGHT,
                      height: INPUT_HEIGHT,
                    }}
                    disabled
                  />
                </Col>
              </Row>
            }
          >
            <Ocs />
          </Card>
        ) : null}
      </Col>
    </Row>
  );
}

export default EMR;
