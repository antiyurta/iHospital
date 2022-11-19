import React, { useState, useEffect } from "react";
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
import { Spinner } from "react-bootstrap";

const DepartmentBed = (props) => {
  console.log("props DepartmentBed", props);
  const [filter, setFilter] = useState("all"); //['Сул өрөө', 'Дүүрсэн өрөө', .....]
  const [searchValue, setSearchValue] = useState("");
  const [selectedRoomBeds, setSelectedRoomBeds] = useState(""); //Сонгогдсон өрөөний орнууд
  const [selectedBed, setSelectedBed] = useState(""); //Сонгогдсон ор
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { Panel } = Collapse;

  const statusList = [
    { id: 0, label: "Дүүрсэн" },
    { id: 1, label: "Цэвэрлэх" },
    { id: 2, label: "Засвартай" },
    { id: 3, label: "Сул" },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setSelectedRoomBeds(""); //Өрөөний мэдээлэл хаахад дата хоослох
    setIsModalOpen(false);
  };
  const selectRoom = (data) => {
    setSelectedRoomBeds(data); //Өрөөний мэдээлэл state -д хадгалах
  };
  const selectBed = (data) => {
    setSelectedBed(data); //Орны мэдээлэл state -д хадгалах
  };

  useEffect(() => {
    console.log("selected RoomBeds", selectedRoomBeds);
    selectedRoomBeds != "" && showModal(); //Өрөөний мэдээлэл SET хийгдсэний дараа MODAL дуудах
  }, [selectedRoomBeds]);

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
      {props.data?.rooms != "" ? (
        <Row gutter={[16, 16]} className="mt-4">
          {props.data?.rooms?.map((el, index) => {
            return (
              <Col className="gutter-row" span={8} key={index}>
                <Card
                  style={styles.cardStyle}
                  className="rounded-xl cursor-pointer"
                  bodyStyle={styles.cardBodyStyle}
                  onClick={() => selectRoom(el)}
                >
                  <div style={{ width: "10%" }}>
                    <SnippetsOutlined style={styles.iconStyle} />
                  </div>
                  <div style={{ width: "90%" }}>
                    <div style={styles.cardRowContainer} className="mb-6">
                      <p style={styles.total}>
                        {el.roomNumber} -{" "}
                        {el.isVip ? "VIP өрөө" : "Энгийн өрөө"}
                      </p>
                      <p>Орны тоо: {el.beds.length}</p>
                    </div>
                    <div style={styles.statusRowContainer}>
                      <Tag color="success" className="rounded-xl">
                        Сул:{" "}
                        <span>
                          {el.beds?.reduce((sum, val) => {
                            if (val.status === 1) {
                              sum += 1;
                            }
                            return sum;
                          }, 0)}
                        </span>
                      </Tag>
                      <Tag color="error" className="rounded-xl">
                        Засвартай:{" "}
                        <span>
                          {el.beds?.reduce((sum, val) => {
                            if (val.status === 2) {
                              sum += 1;
                            }
                            return sum;
                          }, 0)}
                        </span>
                      </Tag>
                      <Tag color="warning" className="rounded-xl">
                        Дүүрсэн:{" "}
                        <span>
                          {el.beds?.reduce((sum, val) => {
                            if (val.status === 0) {
                              sum += 1;
                            }
                            return sum;
                          }, 0)}
                        </span>
                      </Tag>
                      <Tag color="processing" className="rounded-xl">
                        Цэвэрлэх:{" "}
                        <span>
                          {el.beds?.reduce((sum, val) => {
                            if (val.status === 1) {
                              sum += 1;
                            }
                            return sum;
                          }, 0)}
                        </span>
                      </Tag>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <div className="text-center">
          <Spinner animation="grow" style={{ color: "#1890ff" }} />
        </div>
      )}
      <Modal
        title={
          <div className="grid">
            <span>Өрөөний мэдээлэл</span>
            <span className="text-xs">
              Тасаг: {props.data?.name} <LineOutlined /> Өрөө:{" "}
              {selectedRoomBeds?.roomNumber} <LineOutlined /> Орны тоо:{" "}
              {selectedRoomBeds?.beds?.length}
            </span>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        width={600}
        footer={null}
      >
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {selectedRoomBeds != "" && selectedRoomBeds.beds != "" ? (
            <>
              {selectedRoomBeds.beds.map((el, index) => {
                return (
                  <Col
                    className="gutter-row mb-4 text-center"
                    span={6}
                    key={index}
                  >
                    <div
                      style={{
                        ...styles.bedContainer,
                        ...{
                          backgroundColor: "rgb(188 218 230 / 40%)",
                        },
                      }}
                      onClick={() => selectBed(el)}
                    >
                      <img
                        src={
                          el.status === 0
                            ? require("../../../assets/bed/hunte.png")
                            : el.status === 1
                            ? require("../../../assets/bed/tsewerleh.png")
                            : el.status === 2
                            ? require("../../../assets/bed/zaswartai.png")
                            : el.status === 3
                            ? require("../../../assets/bed/sul.png")
                            : require("../../../assets/bed/sul.png")
                        }
                        style={{ zIndex: 1 }}
                        draggable="false"
                      />
                    </div>
                    <span style={styles.bedText}>
                      {el.bedNumber} -{" "}
                      {statusList.map((i) => {
                        return i.id === el.status ? i.label : "";
                      })}
                    </span>
                  </Col>
                );
              })}
            </>
          ) : selectedRoomBeds.beds?.length === 0 ? (
            <div className="text-center w-100">
              <p>Бүртгэлтэй ор байхгүй байна.</p>
            </div>
          ) : (
            <div className="text-center">
              <Spinner animation="grow" style={{ color: "#1890ff" }} />
            </div>
          )}
        </Row>
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
                      borderColor: "#1890ff",
                    },
                  }}
                  className="rounded-xl cursor-pointer"
                >
                  <div className="w-3/12 pl-4">Б. Бат - Эрдэнэ</div>
                  <div className="w-2/12 text-xs">АА99999999</div>
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
  statusRowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
