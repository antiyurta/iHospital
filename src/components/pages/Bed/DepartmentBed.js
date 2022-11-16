import React, { useState } from "react";
import {
  Segmented,
  Col,
  Row,
  Card,
  Input,
  Tag,
  Modal,
  Divider,
  Collapse,
  Button,
} from "antd";
import { blue } from "@ant-design/colors";
import {
  LineOutlined,
  SearchOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import bed from "../../../assets/bed/bed.png";
import bed_red from "../../../assets/bed/bed_red.png";
import bed_yellow from "../../../assets/bed/bed_yellow.png";

const DepartmentBed = (props) => {
  console.log("rpops", props);
  const [filter, setFilter] = useState("all"); //['Сул өрөө', 'Дүүрсэн өрөө', .....]
  const [searchValue, setSearchValue] = useState("");
  const [selectedBed, setSelectedBed] = useState(""); //Сонгогдсон ор

  const { Panel } = Collapse;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const selectBed = (data) => {
    setSelectedBed(data);
  };

  return (
    <div className="p-6">
      <Row>
        <Col span={8}>
          <Segmented
            className="department-bed-segment"
            size="small"
            options={[
              {
                label: "Бүгд",
                value: "all",
                icon: null,
              },
              {
                label: "Сул өрөө",
                value: "0",
                icon: null,
              },
              {
                label: "Дүүрсэн өрөө",
                value: "1",
                icon: null,
              },
              {
                label: "Засвартай өрөө",
                value: "2",
                icon: null,
              },
            ]}
            value={filter}
            onChange={setFilter}
          />
        </Col>
        <Col span={8} offset={8}>
          <Input
            size="small"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Өрөө хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-4">
        <Col className="gutter-row" span={8}>
          <Card
            style={styles.cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={styles.cardBodyStyle}
            onClick={showModal}
          >
            <div style={{ width: "10%" }}>
              <SnippetsOutlined style={styles.iconStyle} />
            </div>
            <div style={{ width: "90%" }}>
              <div style={styles.cardRowContainer} className="mb-6">
                <p>#101 - Энгийн өрөө</p>
              </div>
              <div style={styles.cardRowContainer}>
                <p style={styles.total}>Орны тоо: 4 / 3</p>
                <Tag color="warning" className="rounded-xl">
                  1 ор засвартай
                </Tag>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card
            style={styles.cardStyle}
            className="rounded-xl cursor-pointer"
            bodyStyle={styles.cardBodyStyle}
          >
            <div style={{ width: "10%" }}>
              <SnippetsOutlined style={styles.iconStyle} />
            </div>
            <div style={{ width: "90%" }}>
              <div style={styles.cardRowContainer} className="mb-6">
                <p>#102 - VIP өрөө</p>
              </div>
              <div style={styles.cardRowContainer}>
                <p style={styles.total}>Орны тоо: 4 / 4</p>
                <Tag color="error" className="rounded-xl">
                  Дүүрсэн
                </Tag>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Modal
        title={
          <div className="grid">
            <span>Өрөөний мэдээлэл</span>
            <span className="text-xs">
              Тасаг: Нүд <LineOutlined /> Өрөө: 101 <LineOutlined /> Орны тоо: 4
            </span>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        width={600}
        footer={null}
      >
        {/* default rgb(188 218 230 / 60%)
        red rgb(250 82 82 / 60%)
        yellow rgb(252 196 25 / 60%) */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              ...styles.bedContainer,
              ...{
                backgroundColor: "rgb(188 218 230 / 60%)",
              },
            }}
            onClick={() => selectBed("001")}
          >
            <img src={bed} style={{ zIndex: 1 }} draggable="false" />
            <span style={styles.bedText}>#001</span>
          </div>
          <div
            style={{
              ...styles.bedContainer,
              ...{
                backgroundColor: "rgb(188 218 230 / 60%)",
              },
            }}
          >
            <img src={bed} style={{ zIndex: 1 }} draggable="false" />
            <span style={styles.bedText}>#002</span>
          </div>
          <div
            style={{
              ...styles.bedContainer,
              ...{
                backgroundColor: "rgb(252 196 25 / 60%)",
              },
            }}
          >
            <img src={bed_yellow} draggable="false" />
            <span style={styles.bedText}>#003</span>
          </div>
          <div
            style={{
              ...styles.bedContainer,
              ...{
                backgroundColor: "rgb(250 82 82 / 60%)",
              },
            }}
          >
            <img src={bed_red} draggable="false" />
            <span style={styles.bedText}>#004</span>
          </div>
        </div>
        <Divider orientation="left" className="text-sm my-2">
          Өвчтөний мэдээлэл
        </Divider>
        <Col className="gutter-row" span={24}>
          <Card
            style={styles.cardStyle}
            className="rounded-xl"
            bodyStyle={styles.containerCardBodyStyle}
          >
            <div className="w-3/12 pl-4 font-bold">Нэр</div>
            <div className="w-2/12 font-bold">Регистр</div>
            <div className="w-2/12 font-bold">#ID</div>
            <div className="w-2/12 font-bold">Хүйс</div>
            <div className="w-2/12 font-bold">Огноо</div>
          </Card>
        </Col>
        <Col className="gutter-row mt-4" span={24}>
          <Collapse
            accordion
            expandIconPosition="end"
            ghost
            className="bed-collapse"
          >
            <Panel
              header={
                <div
                  style={{
                    ...styles.cardBodyStyleList,
                    ...{
                      borderColor: "red",
                    },
                  }}
                  className="rounded-xl cursor-pointer"
                >
                  <div className="w-3/12 pl-4">Б. Бат - Эрдэнэ</div>
                  <div className="w-2/12 text-xs">РД: АА99999999</div>
                  <div className="w-2/12">#123456</div>
                  <div className="w-2/12">Эрэгтэй</div>
                  <div className="w-2/12">
                    <Tag color="success" className="rounded-xl mr-0">
                      2022/11/11
                    </Tag>
                  </div>
                </div>
              }
              key="1"
            >
              <div>
                <p>AA</p>
                <div className="text-right">
                  <Button className="mr-2" danger>
                    Гаргах
                  </Button>
                  <Button type="primary" className="custom-primary-btn">
                    Шилжүүлэх
                  </Button>
                </div>
              </div>
            </Panel>
          </Collapse>
        </Col>
      </Modal>
    </div>
  );
};
const styles = {
  cardStyle: {},
  cardBodyStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 12,
    paddingRight: 10,
    paddingLeft: 10,
    width: "100%",
  },
  iconStyle: {
    backgroundColor: blue.primary,
    padding: 5,
    borderRadius: 6,
    fontSize: 16,
    color: "#fff",
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardRowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bedContainer: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    textAlign: "center",
    cursor: "pointer",
    pointerEvent: "none",
  },
  bedText: {
    fontWeight: "bold",
    color: "#fff",
  },
  modalHeader: {
    display: "grid",
  },
  containerCardBodyStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    width: "100%",
  },
  cardBodyStyleList: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 12,
    paddingLeft: 0,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
  },
  patientInformationContainer: {},
};
export default DepartmentBed;
