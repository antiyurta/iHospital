import { Col, Row, List, Typography, Card, Button, Modal } from "antd";
import Search from "antd/lib/transfer/search";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { blue } from "@ant-design/colors";
import FormModal from "./FormModal";

export default function FormBuilder() {
  const token = useSelector(selectCurrentToken);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState("");
  const [forms, setForms] = useState([]);
  const showModal = (type, data) => {
    console.log("type", type);
    console.log("data", data);
    setModalType(type);
    setModalData(data);
    setIsModalOpen(true);
  };

  const onSearch = (value) => console.log(value);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = () => {
    axios({
      method: "get",
      url: `${DEV_URL}emr/inspection-form`,
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("response", response);
        setForms(response.data.response.data);
      })
      .catch(function (error) {
        console.log("response error", error.response);
      });
  };

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Row className="items-center">
            <Col span={4}>
              <Search
                placeholder="Хайх"
                allowClear
                onSearch={onSearch}
                className="w-48"
              />
            </Col>
            <Col span={2} className="ml-4">
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => showModal("add", null)}
                style={{ backgroundColor: blue.primary }}
              >
                Нэмэх
              </Button>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col span={24}>
              <List
                grid={{
                  gutter: 8,
                  column: 5,
                }}
                dataSource={forms}
                renderItem={(item) => (
                  <List.Item>
                    <Card
                      hoverable
                      className="custom-card"
                      title={item.name}
                      size="small"
                      onClick={() => showModal("edit", item)}
                    >
                      {item.structureId} - structure ЭНД ХАРАГДАНА
                    </Card>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <FormModal
        show={isModalOpen}
        close={setIsModalOpen}
        type={modalType}
        data={modalData}
      />
    </>
  );
}
