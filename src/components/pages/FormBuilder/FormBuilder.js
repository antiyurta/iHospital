import { Col, Row, List, Card, Button, Input } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { blue } from "@ant-design/colors";
import FormModal from "./FormModal";
import MainContext from "../../../contexts/MainContext";
import { Get } from "../../comman";

export default function FormBuilder() {
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const context_state = useContext(MainContext);
  const [searchField, setSearchField] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [callForms, setCallForms] = useState(false); //Зүгээр л Хадгалах дарсан эсэхийг мэдэх
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState("");
  const [forms, setForms] = useState([]);
  const showModal = (type, data) => {
    type === "add" && context_state.resetFields();
    console.log("type", type);
    console.log("data", data);
    setModalType(type);
    setModalData(data);
    //Form -г засах үед*************************
    if (data !== null) {
      context_state.setPainData(data?.formItem["pain"]);
      context_state.setInspectionData(data?.formItem["inspection"]);
      context_state.setQuestionData(data?.formItem["question"]);
      context_state.setPlanData(data?.formItem["plan"]);
    }
    //Form -г засах үед*************************
    setIsModalOpen(true);
  };

  useEffect(() => {
    getHistory();
  }, [callForms]);
  const getHistory = async () => {
    const response = await Get('emr/inspection-form', token, config);
    setForms(response.data);
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
      {isModalOpen ? (
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
            plan: context_state.setPlanData,
          }}
          callForm={[callForms, setCallForms]}
        />
      ) : null}
    </>
  );
}
