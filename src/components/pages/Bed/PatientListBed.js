import {
  Segmented,
  Col,
  Row,
  Card,
  Input,
  Select,
  Button,
  Tag,
  Modal,
} from "antd";
import React, { useState, useEffect } from "react";
import { blue } from "@ant-design/colors";
import {
  SearchOutlined,
  BarsOutlined,
  AppstoreOutlined,
  UserAddOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import Spinner from "react-bootstrap/Spinner";
import UTable from "../../UTable";

function PatientListBed() {
  const token = useSelector(selectCurrentToken);
  const [viewType, setViewType] = useState("list"); //['list', 'card']
  const [searchValue, setSearchValue] = useState("");
  const [patientList, setPatientList] = useState("");

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

  const getPatientList = async () => {
    config.params.startDate = null;
    config.params.endDate = null;
    const response = await Get("service/inpatient-request", token, config);
    console.log("response Patient List Bed", response);
    if (response.data != "") {
      setPatientList(response.data);
    }
  };

  useEffect(() => {
    getPatientList();
  }, []);

  var DATA = [
    {
      value: "jack",
      label: "Jack",
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const filterTypeList = [
    {
      label: "Хэвтэх захиалгатай",
      value: 0,
      icon: <BarsOutlined />,
    },
    {
      label: "Хэвтэх зөвшөөрөлтэй",
      value: 1,
      icon: <AppstoreOutlined />,
    },
  ];

  const column = [
    {
      index: "patient.firstName",
      label: "Овог, Нэр",
      isView: true,
      input: "input",
      col: 24,
      relation: true,
    },
    {
      index: "cardNumber",
      label: "Картын дугаар",
      isView: true,
      input: "select",
      col: 24,
    },
    {
      index: "roomId",
      label: "Өрөөний дугаар",
      isView: true,
      input: "select",
      col: 24,
    },
  ];
  return (
    <div className="p-6">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Input
            size="small"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Өвчтөн хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={18} className="text-right"></Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-4">
        <Col span={2}>
          <Segmented
            className="department-bed-segment"
            options={filterTypeList}
            value={viewType}
            onChange={setViewType}
          />
        </Col>
        <Col
          span={22}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
              marginRight: 10,
            }}
            onChange={handleChange}
            options={DATA}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
              marginRight: 10,
            }}
            onChange={handleChange}
            options={DATA}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
              marginRight: 10,
            }}
            onChange={handleChange}
            options={DATA}
          />
        </Col>
      </Row>
      <Row gutter={[24, 6]} className="mt-4">
        <Col className="gutter-row" span={24}>
          <Card
            style={styles.cardStyle}
            className="rounded-xl"
            bodyStyle={styles.containerCardBodyStyle}
          >
            <div className="w-1/5 pl-4" style={styles.titleStyle}>
              Овог, Нэр
            </div>
            <div className="w-2/12" style={styles.titleStyle}>
              Картын дугаар
            </div>
            <div className="w-2/12" style={styles.titleStyle}>
              Өрөөний дугаар
            </div>
            <div className="w-2/12" style={styles.titleStyle}>
              Регистр
            </div>
            <div className="w-1/12" style={styles.titleStyle}>
              Хүйс
            </div>
            <div className="w-1/12" style={styles.titleStyle}>
              Нас
            </div>
            <div className="w-2/12" style={styles.titleStyle}>
              Хэвтэх өдөр
            </div>
            <div className="w-2/12" style={styles.titleStyle}>
              Гарах өдөр
            </div>
            <div className="w-2/12" style={styles.titleStyle}>
              Захиалгын төрөл
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={24}>
          <UTable
            title={"Өвчтөний мэдээлэл"}
            url={"service/inpatient-request"}
            column={column}
            width="20%"
            isCreate={true}
            isRead={true}
            isUpdate={true}
            isDelete={true}
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

const styles = {
  cardStyle: {
    borderColor: blue.primary,
    marginBottom: 5,
  },
  containerCardBodyStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    width: "100%",
  },
  cardBodyStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardBodyStyleList: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    width: "100%",
  },
  iconStyle: {
    backgroundColor: blue.primary,
    padding: 15,
    borderRadius: 12,
    fontSize: 20,
    color: "#fff",
  },
  titleStyle: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
};
