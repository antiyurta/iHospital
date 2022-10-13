import { Card, Col, Row } from "antd";
import React from "react";
import male from "../../../assets/images/maleAvatar.svg";
import BeforeAmbulatoryTabs from "./BeforeAmbulatoryTabs";

export default function BeforeAmbulatoryDetail() {
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={14}>
          <Card
            bordered={false}
            title={
              <h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>
            }
            className="header-solid max-h-max"
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
            }}
          >
            <Row gutter={[8, 8]}>
              <Col span={8} className="text-center">
                <img className="h-48" src={male} alt="avatar" />
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
            title={<h6 className="font-semibold m-0">Өвчтөний түүх</h6>}
            className="header-solid h-full"
          ></Card>
        </Col>
        <Col span={24}>
          <Card
            bordered={false}
            title=""
            className="header-solid h-full"
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
              minHeight: 400,
              maxHeight: 600,
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <BeforeAmbulatoryTabs />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
