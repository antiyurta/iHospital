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
import bed from "../../../assets/bed/bed.png";
import bed_red from "../../../assets/bed/bed_red.png";
import bed_yellow from "../../../assets/bed/bed_yellow.png";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import Spinner from "react-bootstrap/Spinner";

const InformationBed = (props) => {
  const token = useSelector(selectCurrentToken);
  const [searchValue, setSearchValue] = useState("");
  const [selectedBed, setSelectedBed] = useState(""); //Сонгогдсон ор
  const [selectedRoomBeds, setSelectedRoomBeds] = useState(""); //Сонгогдсон өрөөний орнууд
  const [rooms, setRooms] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomWithStatus, setRoomWithStatus] = useState({});

  const config = {
    headers: {},
    params: {},
  };

  const { Panel } = Collapse;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const selectBed = (data) => {
    setSelectedBed(data);
  };

  const getRooms = async () => {
    var emptyBeds = [];
    var usedBeds = [];
    var repairBeds = [];
    const response = await Get("organization/room", token, config);
    console.log("response InformationBed", response);
    if (response.data.length != 0) {
      response.data.map((el) => {
        if (el.beds.length > 0) {
          el.beds.map((bed) => {
            if (bed.status === 3) {
              !emptyBeds.includes(bed.roomId) && emptyBeds.push(bed.roomId);
              setRoomWithStatus((prevState) => ({
                ...prevState,
                empty: emptyBeds,
              }));
            } else if (bed.status === 2) {
              !repairBeds.includes(bed.roomId) && repairBeds.push(bed.roomId);
              setRoomWithStatus((prevState) => ({
                ...prevState,
                repair: repairBeds,
              }));
            } else if (bed.status === 0) {
              !usedBeds.includes(bed.roomId) && usedBeds.push(bed.roomId);
              setRoomWithStatus((prevState) => ({
                ...prevState,
                used: usedBeds,
              }));
            }
          });
        }
      });
      setRooms(response.data);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  const selectFilter = (data) => {
    props.setStatus(data);
  };

  const selectRoom = async (room_id) => {
    const response = await Get(`organization/room/${room_id}`, token, config);
    if (response) {
      console.log("response get Ordered Patient ====>", response);
      setSelectedRoomBeds(response); //Өрөөний мэдээлэл state -д хадгалах
    }
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
                value: "3",
                icon: null,
              },
              {
                label: "Засвартай өрөө",
                value: "2",
                icon: null,
              },
              {
                label: "Дүүрсэн өрөө",
                value: "0",
                icon: null,
              },
            ]}
            value={props.status}
            onChange={(e) => selectFilter(e)}
          />
        </Col>
        <Col span={8} offset={8}>
          <Input
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Өрөө хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>

      {rooms !== "" ? (
        <Row gutter={[16, 16]} className="mt-4">
          {rooms
            ?.filter((obj) => obj.roomNumber.includes(searchValue))
            ?.filter((obj) => {
              if (props.status === "all") {
                return obj;
              } else if (props.status === "3") {
                return roomWithStatus["empty"].includes(obj.id);
              } else if (props.status === "2") {
                return roomWithStatus["repair"].includes(obj.id);
              } else if (props.status === "0") {
                return roomWithStatus["used"].includes(obj.id);
              }
            })
            .map((el, index) => {
              return (
                <Col className="gutter-row" span={8} key={index}>
                  <Card
                    style={styles.cardStyle}
                    className="rounded-xl cursor-pointer"
                    bodyStyle={styles.cardBodyStyle}
                    onClick={() => selectRoom(el.id)}
                  >
                    <div style={{ width: "15%" }}>
                      {el.genderType === "WOMAN" ? (
                        <img
                          src={require("../../../assets/bed/female.png")}
                          style={styles.iconStyle}
                        />
                      ) : el.genderType === "MAN" ? (
                        <img
                          src={require("../../../assets/bed/male.png")}
                          style={styles.iconStyle}
                        />
                      ) : (
                        <img
                          src={require("../../../assets/bed/empty_room.png")}
                          style={styles.iconStyle}
                        />
                      )}
                    </div>
                    <div style={{ width: "85%" }}>
                      <div style={styles.cardRowContainer} className="mb-6">
                        <p style={styles.total}>
                          {el.roomNumber} -{" "}
                          {el.isVip ? "VIP өрөө" : "Энгийн өрөө"}
                        </p>
                        <p style={styles.total}>Орны тоо: {el.beds.length}</p>
                      </div>
                      <div style={styles.statusRowContainer}>
                        <Tag color="success" className="rounded-xl">
                          Сул:{" "}
                          <span>
                            {el.beds?.reduce((sum, val) => {
                              if (val.status === 3) {
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
              Тасаг: Нүд <LineOutlined /> Өрөө: 101 <LineOutlined /> Орны тоо: 4
            </span>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        width={600}
        footer={null}
      >
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
    borderRadius: 6,
    fontSize: 16,
    color: "#fff",
    width: "80%",
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
    borderWidth: 2,
    backgroundColor: "rgb(188 218 230 / 40%)",
  },
  bedText: {
    fontWeight: "bold",
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
    padding: 5,
    paddingLeft: 0,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    marginTop: 5,
  },
  patientInformationContainer: {},
};
export default InformationBed;
