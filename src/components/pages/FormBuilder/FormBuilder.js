import { Col, Row, List, Typography, Card, Button, Modal, Input } from "antd";
import Search from "antd/lib/transfer/search";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { blue } from "@ant-design/colors";
import FormModal from "./FormModal";
import MainContext from "../../../contexts/MainContext";
import { SearchOutlined } from "@ant-design/icons";

export default function FormBuilder() {
  const token = useSelector(selectCurrentToken);
  const context_state = useContext(MainContext);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const [searchField, setSearchField] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [callForms, setCallForms] = useState(false); //Зүгээр л Хадгалах дарсан эсэхийг мэдэх
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

  useEffect(() => {
    getHistory();
  }, [callForms]);
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

  const filteredForm = forms.filter((form) => {
    return form.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Row className="items-center">
            <Col span={4}>
              <Input
                placeholder="Хайх"
                allowClear
                onChange={(e) => setSearchField(e.target.value)}
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
                dataSource={filteredForm}
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
        formValue={{
          pain: [context_state.painData, "Зовиур"],
          inspection: [context_state.inspectionData, "Үзлэг"],
          question: [context_state.questionData, "Асуумж"],
          plan: [context_state.planData, "Төлөвлөгөө"],
        }}
        setFormValue={{
          pain: context_state.setPainData,
          inspection: context_state.setInspectionData,
          question: context_state.setQuestionData,
          plan: context_state.setPplanData,
        }}
        callForm={[callForms, setCallForms]}
      />
    </>
  );
}
