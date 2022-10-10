import { Card, Col, Radio, Row, Table } from "antd";
import React, { useState, useEffect } from "react";
import male from "../../../assets/images/maleAvatar.svg";
import MainAmbulatory from "./Ambulatory/MainAmbulatory";
import MainPatientHistory from "./PatientHistory/MainPatientHistory";

function EMR() {
  const [cardLoading, setCardLoading] = useState(false);

  useEffect(() => {}, []);

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
                <Col span={8}>
                  <img className="max-h-full" src={male} alt="avatar" />
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
                size="small"
                sticky={false}
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
      </Col>
    </Row>
  );
}

export default EMR;
