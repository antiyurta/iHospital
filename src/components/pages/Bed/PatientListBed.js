import { Col, Row, Button, Tag, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { blue } from "@ant-design/colors";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import UTable from "../../UTable";

function PatientListBed() {
  const token = useSelector(selectCurrentToken);
  const [selectedTags, setSelectedTags] = useState([]);
  const [testParam, setTestParam] = useState(true);

  const { CheckableTag } = Tag;

  const config = {
    headers: {},
    params: {},
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const assignPatient = () => {
    setIsModalOpen(false);
  };

  const filterTypeList = [
    {
      label: "Хэвтэх захиалгатай",
      value: 0,
      img: "filter0.png",
    },
    {
      label: "Хэвтэх зөвшөөрөлтэй",
      value: 1,
      img: "filter1.png",
    },
    {
      label: "Хэвтэж байгаа",
      value: 2,
      img: "filter2.png",
    },
    {
      label: "Гарах захиалгатай",
      value: 3,
      img: "filter3.png",
    },
    {
      label: "Гарах зөвшөөрөлтэй",
      value: 4,
      img: "filter4.png",
    },
    {
      label: "Өрөө суллаагүй",
      value: 5,
      img: "filter5.png",
    },
    {
      label: "Эмнэлгээс гарсан",
      value: 6,
      img: "filter6.png",
    },
  ];

  const column = [
    {
      index: ["patient", "lastName"],
      label: "Овог",
      isView: true,
      input: "input",
      col: 24,
      relation: true,
    },
    {
      index: ["patient", "firstName"],
      label: "Нэр",
      isView: true,
      input: "input",
      col: 24,
      relation: true,
    },
    {
      index: "roomId",
      label: "Өрөөний дугаар",
      isView: true,
      input: "select",
      col: 24,
    },
    {
      index: ["patient", "cardNumber"],
      label: "Картын дугаар",
      isView: true,
      input: "input",
      col: 24,
      relation: true,
    },
    {
      index: ["patient", "registerNumber"],
      label: "Регистр",
      isSearch: true,
      isView: true,
      input: "input",
      col: 24,
      relation: true,
    },
    {
      index: ["patient", "genderType"],
      label: "Хүйс",
      isView: true,
      input: "input",
      col: 24,
      relation: true,
    },
    {
      index: ["patient", "age"],
      label: "Нас",
      isView: true,
      input: "input",
      col: 24,
      relation: true,
    },
    {
      index: "startDate",
      label: "Хэвтэх өдөр",
      isView: true,
      input: "date",
      col: 24,
    },
    {
      index: "endDate",
      label: "Гарах өдөр",
      isView: true,
      input: "date",
      col: 24,
    },
    {
      index: "process",
      label: "Захиалгын төрөл",
      isView: true,
      input: "input",
      staticData: (type) => {
        return (
          <img
            src={require(`../../../assets/bed/${filterTypeList[type].img}`)}
            width="20"
            className="inline-block"
          />
        );
      },
      col: 24,
    },
  ];

  const handleChangeTag = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  useEffect(() => {
    setTestParam(!testParam);
  }, [selectedTags]);

  return (
    <div className="p-6">
      <Row gutter={[16, 16]} className="mt-4">
        <Col span={2} className="contents">
          {filterTypeList.map((tag) => {
            return (
              <div
                key={tag.value}
                className="border-blue-400 rounded-sm border mr-2"
              >
                <CheckableTag
                  checked={selectedTags.includes(tag.value)}
                  onChange={(checked) => {
                    handleChangeTag(tag.value, checked);
                  }}
                  style={{
                    display: "flex",
                    fontSize: 14,
                    width: "100%",
                  }}
                >
                  <div
                    className="mr-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={require(`../../../assets/bed/${tag.img}`)}
                      width="20"
                    />
                  </div>
                  {tag.label}
                </CheckableTag>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row gutter={[24, 6]} className="mt-4">
        <Col className="gutter-row" span={24}>
          <UTable
            title={"Өвчтөний мэдээлэл"}
            url={"service/inpatient-request"}
            params={{ params: { process: selectedTags.toString() } }}
            column={column}
            width="60%"
            isCreate={false}
            isRead={true}
            isUpdate={false}
            isDelete={false}
            isRefresh={testParam}
          />
        </Col>
      </Row>
      <Modal
        title="Өвчтөн хуваарилах"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <div>
          <p>Харуулах мэдээлэл...</p>
          <div className="text-right">
            <Button
              type="primary"
              className="custom-primary-btn"
              onClick={assignPatient}
            >
              Хуваарилах
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PatientListBed;
