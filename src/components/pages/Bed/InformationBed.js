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
  notification,
  Empty,
  Select,
} from "antd";
import { blue } from "@ant-design/colors";
import {
  LineOutlined,
  SearchOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Patch } from "../../comman";
import Spinner from "react-bootstrap/Spinner";
import orderType from "./orderType.json";
import { useLocation } from "react-router-dom";

const InformationBed = (props) => {
  const token = useSelector(selectCurrentToken);
  const [searchValue, setSearchValue] = useState("");
  const [selectedBed, setSelectedBed] = useState(""); //Сонгогдсон ор
  const [selectedRoomBeds, setSelectedRoomBeds] = useState(""); //Сонгогдсон өрөөний орнууд
  const [rooms, setRooms] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomWithStatus, setRoomWithStatus] = useState({});
  const [department, setDepartment] = useState(""); //Тасаг
  const [genderSearchValue, setGenderSearchValue] = useState("all");
  const [orderedPatientList, setOrderedPatientList] = useState(""); //Эмнэлэгт хэвтэхээр захиалга өгсөн өвчтөний жагсаалт
  const [data, setData] = useState({});
  const [patientInfoOfBed, setPatientInfoOfBed] = useState(""); //Оронд хэвтэж буй өвчтөний мэдээлэл
  const [isTransfer, setIsTransfer] = useState(false);
  const [beds, setBeds] = useState([]); //ор
  const [selectedDep, setSelectedDep] = useState(""); //Сонгогдсон Тасаг
  const [selectedRoom, setSelectedRoom] = useState(""); //Сонгогдсон Өрөө
  const [selectedNewBed, setSelectedNewBed] = useState(""); //Сонгогдсон Ор
  const [roomsOfDef, setRoomsOfDef] = useState("");
  let location = useLocation();

  const config = {
    headers: {},
    params: {},
  };

  const statusList = [
    { id: 0, label: "Дүүрсэн" },
    { id: 1, label: "Цэвэрлэх" },
    { id: 2, label: "Засвартай" },
    { id: 3, label: "Сул" },
  ];
  const { Panel } = Collapse;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const selectBed = (data) => {
    if (data.id === selectedBed.id) {
      setSelectedBed(""); //Орны мэдээлэл state -д хадгалах
    } else {
      setSelectedBed(data);
      data.status === 0 && getPatientInformationOfBed(data);
    }
  };

  //Орон дээр хэвтэж буй өвчтөний мэдээлэл
  const getPatientInformationOfBed = async (bed_data) => {
    const response = await Get(
      `service/inpatient-request/bedPatient/${bed_data.id}`,
      token,
      config
    );
    if (response) {
      setPatientInfoOfBed(response);
    } else {
      setPatientInfoOfBed("");
    }
    // console.log("response get Ordered Patient ====>", response);
  };
  //Эмнэлэгт хэвтэхээр захиалга өгсөн өвчтөний жагсаалт авах
  const getOrderedPatient = async () => {
    config.params.process = "0,1"; //Хэвтэх захиалгатай = 0, Хэвтэх зөвшөөрөлтэй өвтөн = 1
    const response = await Get("service/inpatient-request", token, config);
    if (response.data.length !== 0) {
      // console.log("response get Ordered Patient ====>", response.data);
      setOrderedPatientList(response.data);
    }
  };

  //Өвчтөнг орноос гаргах
  const outPatientBed = async (inpatient_request_id) => {
    data.isOut = true;
    data.process = 2;
    data.bedId = selectedBed.id;
    const response = await Patch(
      `service/inpatient-request/bed/${inpatient_request_id}`,
      token,
      config,
      data
    );
    if (response === 200) {
      getOrderedPatient();
      setSelectedRoomBeds(selectedRoomBeds);
      setSelectedBed("");
      selectRoom(selectedBed.roomId);
    }
    // console.log("response set PatientBed ====>", response);
  };
  const getDepartment = async () => {
    config.params.type = 2;
    config.params.startDate = null;
    config.params.endDate = null;
    const response = await Get("organization/structure", token, config);
    // console.log("response", response);
    if (response.data.length != 0) {
      response.data.map((el, index) => {
        setDepartment((department) => [
          ...department,
          { label: el.name, value: el.id },
        ]);
      });
    }
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

  const getRoomsOfDep = async () => {
    config.params.structureId = selectedDep;
    const response = await Get("organization/room", token, config);
    // console.log("response InformationBed", response);
    if (response.data.length != 0) {
      response.data.map((el, index) => {
        setRoomsOfDef((roomsOfDef) => [
          ...roomsOfDef,
          { label: el.roomNumber, value: el.id, beds: el.beds },
        ]);
      });
    }
  };
  useEffect(() => {
    getRooms();
  }, []);

  const handleChangeTransfer = (value) => {
    setRoomsOfDef([]);
    setSelectedDep(value);
  };
  const handleChangeRoom = (value) => {
    setBeds([]);
    setSelectedRoom(value);
  };
  const handleChangeBed = (value) => {
    setSelectedNewBed(value);
  };
  const selectFilter = (data) => {
    props.setStatus(data);
  };

  //Оронд хуваарилж хэвтүүлэх
  const setPatientBed = async (inpatient_request_id) => {
    if (selectedBed === "" || selectedBed.status !== 3) {
      notification["warning"]({
        message: `Өвчтөн хэвтүүлэх ор сонгоно уу.`,
        description: ``,
        duration: 2,
      });
    } else {
      data.roomId = selectedBed.roomId;
      data.bedId = selectedBed.id;
      data.isOut = false;
      data.process = 0;
      const response = await Patch(
        `service/inpatient-request/bed/${inpatient_request_id}`,
        token,
        config,
        data
      );
      if (response === 200) {
        getOrderedPatient();
        setSelectedRoomBeds(selectedRoomBeds);
        setSelectedBed("");
        selectRoom(selectedBed.roomId);
      }
      // console.log("response set PatientBed ====>", response);
    }
  };
  const selectRoom = async (room_id) => {
    const response = await Get(`organization/room/${room_id}`, token, config);
    if (response) {
      // console.log("response get Ordered Patient ====>", response);
      setSelectedRoomBeds(response); //Өрөөний мэдээлэл state -д хадгалах
    }
  };

  useEffect(() => {
    department === "" && getDepartment();
    if (selectedRoomBeds !== "") {
      showModal(); //Өрөөний мэдээлэл SET хийгдсэний дараа MODAL дуудах
      getOrderedPatient();
    }
  }, [selectedRoomBeds]);
  useEffect(() => {
    setRoomsOfDef([]);
    setSelectedRoom("");
    setSelectedNewBed("");
    getRoomsOfDep();
  }, [selectedDep]);
  useEffect(() => {
    setSelectedNewBed("");
    roomsOfDef &&
      roomsOfDef?.map((el) => {
        if (el.value === selectedRoom) {
          el.beds.map((el, bedIndex) => {
            setBeds((beds) => [...beds, { label: el.bedNumber, value: el.id }]);
          });
        }
      });
  }, [selectedRoom]);

  const transferPatient = async (inpatient_request_id) => {
    //Өвчтөн шилжүүлэх
    data.departmentId = selectedDep;
    data.roomId = selectedRoom;
    data.bedOutId = selectedBed.id;
    data.bedInId = selectedNewBed;
    data.process = 2;
    const response = await Patch(
      `service/inpatient-request/switch/${inpatient_request_id}`,
      token,
      config,
      data
    );
    if (response === 200) {
      getOrderedPatient();
      setSelectedRoomBeds(selectedRoomBeds);
      setSelectedBed("");
      selectRoom(selectedBed.roomId);
      setSelectedDep("");
      setSelectedRoom("");
      setSelectedNewBed("");
      getRooms();
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
            ?.filter((obj) => obj.roomNumber?.includes(searchValue))
            ?.filter((obj) => {
              if (props.status === "all") {
                return obj;
              } else if (props.status === "3") {
                return roomWithStatus["empty"]?.includes(obj.id);
              } else if (props.status === "2") {
                return roomWithStatus["repair"]?.includes(obj.id);
              } else if (props.status === "0") {
                return roomWithStatus["used"]?.includes(obj.id);
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
                        <div>
                          <p
                            style={{
                              ...styles.total,
                              ...{
                                color: "#2d8cff",
                              },
                            }}
                          >
                            {el.structures?.name}
                          </p>
                          <p style={styles.total}>
                            {el.roomNumber} -{" "}
                            {el.isVip ? "VIP өрөө" : "Энгийн өрөө"}
                          </p>
                        </div>
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
              <b>Тасаг</b>: {props.data?.name} <LineOutlined /> <b>Өрөө:</b>{" "}
              {selectedRoomBeds?.roomNumber} <LineOutlined /> <b>Орны тоо:</b>{" "}
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
          {selectedRoomBeds !== "" && selectedRoomBeds.beds !== "" ? (
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
                          borderColor:
                            selectedBed.status === 3 && selectedBed.id === el.id
                              ? blue.primary
                              : null,
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
        <Divider
          orientation="left"
          className="text-sm my-2"
          style={{ color: "#2d8cff" }}
        >
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
            <div className="w-2/12 font-bold">Картын дугаар</div>
            <div className="w-1/12 font-bold">Хүйс</div>
            <div className="w-3/12 font-bold">Захиалга</div>
          </Card>
        </Col>
        <Col className="gutter-row mt-2" span={24}>
          {selectedBed.status === 0
            ? patientInfoOfBed && (
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
                          ...{},
                        }}
                        className="rounded-xl cursor-pointer"
                      >
                        <div className="w-3/12 pl-4">
                          {patientInfoOfBed.patient?.lastName?.substr(0, 1)}.{" "}
                          {patientInfoOfBed.patient?.firstName}
                        </div>
                        <div className="w-2/12 text-xs">
                          {patientInfoOfBed.patient?.registerNumber}
                        </div>
                        <div className="w-2/12">
                          {patientInfoOfBed.patient?.cardNumber}
                        </div>
                        <div className="w-1/12">
                          {patientInfoOfBed.patient?.genderType === "MAN"
                            ? "Эр"
                            : "Эм"}
                        </div>
                        <div className="w-3/12">
                          {orderType.map((item, index) => {
                            if (item.value === patientInfoOfBed.process) {
                              return (
                                <div key={index}>
                                  <img
                                    src={require(`../../../assets/bed/${item.img}`)}
                                    width="20"
                                    className="inline-block"
                                    key={index}
                                  />
                                  <span>{item.label}</span>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    }
                    key="1"
                  >
                    <div>
                      <div className="text-right">
                        <Button
                          className="mr-3"
                          onClick={() => setIsTransfer(!isTransfer)}
                        >
                          Шилжүүлэх
                        </Button>
                        <Button
                          type="primary"
                          className="custom-primary-btn"
                          onClick={() => outPatientBed(patientInfoOfBed.id)}
                        >
                          Гаргах
                        </Button>
                      </div>
                      {isTransfer ? (
                        <div className="border-solid border p-4 rounded-xl mt-2">
                          <Row>
                            <Col span={4}>Тасаг</Col>
                            <Col span={12}>
                              <Select
                                allowClear
                                style={{
                                  width: 200,
                                }}
                                onChange={handleChangeTransfer}
                                value={selectedDep || undefined}
                                options={department}
                                placeholder="Сонгох"
                              />
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col span={4}>Өрөө</Col>
                            <Col span={12}>
                              <Select
                                allowClear
                                style={{
                                  width: 200,
                                }}
                                onChange={handleChangeRoom}
                                value={selectedRoom || undefined}
                                options={roomsOfDef}
                                placeholder="Сонгох"
                              />
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col span={4}>Ор</Col>
                            <Col span={12}>
                              <Select
                                allowClear
                                style={{
                                  width: 200,
                                }}
                                onChange={handleChangeBed}
                                value={selectedNewBed || undefined}
                                options={beds}
                                placeholder="Сонгох"
                              />
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col span={4}></Col>
                            <Col span={12}>
                              <Button
                                style={{
                                  width: 200,
                                }}
                                type="primary"
                                className="custom-primary-btn"
                                onClick={() =>
                                  transferPatient(patientInfoOfBed.id)
                                }
                              >
                                Хадгалах
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      ) : null}
                    </div>
                  </Panel>
                </Collapse>
              )
            : orderedPatientList &&
              orderedPatientList.map((el, index) => {
                return (
                  <Collapse
                    accordion
                    expandIconPosition="end"
                    ghost
                    className="bed-collapse"
                    key={index}
                  >
                    <Panel
                      header={
                        <div
                          style={{
                            ...styles.cardBodyStyleList,
                            ...{},
                          }}
                          className="rounded-xl cursor-pointer"
                        >
                          <div className="w-3/12 pl-4">
                            {el.patient?.lastName?.substr(0, 1)}.{" "}
                            {el.patient?.firstName}
                          </div>
                          <div className="w-2/12 text-xs">
                            {el.patient?.registerNumber}
                          </div>
                          <div className="w-2/12">{el.patient?.cardNumber}</div>
                          <div className="w-1/12">
                            {el.patient?.genderType === "MAN" ? "Эр" : "Эм"}
                          </div>
                          <div className="w-3/12">
                            {orderType.map((item, index) => {
                              if (item.value === el.process) {
                                return (
                                  <div key={index}>
                                    <img
                                      src={require(`../../../assets/bed/${item.img}`)}
                                      width="20"
                                      className="inline-block"
                                      key={index}
                                    />
                                    <span>{item.label}</span>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                      }
                      key="1"
                    >
                      <div>
                        <div className="text-right">
                          <Button
                            type="primary"
                            className="custom-primary-btn"
                            onClick={() => setPatientBed(el.id)}
                          >
                            Хэвтүүлэх
                          </Button>
                        </div>
                      </div>
                    </Panel>
                  </Collapse>
                );
              })}
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
