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
} from "antd";
import { blue } from "@ant-design/colors";
import { LineOutlined, SearchOutlined } from "@ant-design/icons";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Patch } from "../../comman";
import orderType from "./orderType.json";
import { useLocation } from "react-router-dom";

const DepartmentBed = (props) => {
  const token = useSelector(selectCurrentToken);
  const [searchValue, setSearchValue] = useState("");
  const [genderSearchValue, setGenderSearchValue] = useState("all");
  const [selectedRoomBeds, setSelectedRoomBeds] = useState(""); //Сонгогдсон өрөөний орнууд
  const [selectedBed, setSelectedBed] = useState(""); //Сонгогдсон ор
  const [orderedPatientList, setOrderedPatientList] = useState(""); //Эмнэлэгт хэвтэхээр захиалга өгсөн өвчтөний жагсаалт
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({});
  const [patientInfoOfBed, setPatientInfoOfBed] = useState(""); //Оронд хэвтэж буй өвчтөний мэдээлэл
  let location = useLocation();

  const { Panel } = Collapse;

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

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setSelectedRoomBeds(""); //Өрөөний мэдээлэл хаахад дата хоослох
    setIsModalOpen(false);
    setSelectedBed("");
  };
  const selectRoom = async (room_id) => {
    const response = await Get(`organization/room/${room_id}`, token, config);
    if (response) {
      console.log("response get Ordered Patient ====>", response);
      setSelectedRoomBeds(response); //Өрөөний мэдээлэл state -д хадгалах
    }
  };
  const selectBed = (data) => {
    // console.log("DATA", data);
    if (data.id === selectedBed.id) {
      setSelectedBed(""); //Орны мэдээлэл state -д хадгалах
    } else {
      setSelectedBed(data);
      data.status === 0 && getPatientInformationOfBed(data);
    }
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
    console.log("response get Ordered Patient ====>", response);
  };

  useEffect(() => {
    if (selectedRoomBeds !== "") {
      showModal(); //Өрөөний мэдээлэл SET хийгдсэний дараа MODAL дуудах
      getOrderedPatient();
    }
  }, [selectedRoomBeds]);

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
        props.callFn(location?.pathname?.split("/").pop()); // Тасагийн ID current route -с авах
        setSelectedRoomBeds(selectedRoomBeds);
        setSelectedBed("");
        selectRoom(selectedBed.roomId);
      }
      console.log("response set PatientBed ====>", response);
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
      props.callFn(location?.pathname?.split("/").pop()); // Тасагийн ID current route -с авах
      setSelectedRoomBeds(selectedRoomBeds);
      setSelectedBed("");
      selectRoom(selectedBed.roomId);
    }
    // console.log("response set PatientBed ====>", response);
  };
  return (
    <div className="p-6">
      <Row className="justify-between">
        <Col span={3}>
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
                label: "Эр",
                value: "MAN",
                icon: null,
              },
              {
                label: "Эм",
                value: "WOMAN",
                icon: null,
              },
            ]}
            value={genderSearchValue}
            onChange={(e) => setGenderSearchValue(e)}
          />
        </Col>
        <Col span={8}>
          <Input
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Өрөө хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      {props.data?.rooms?.length > 0 ? (
        <Row gutter={[16, 16]} className="mt-4">
          {props.data?.rooms
            ?.filter((obj) => obj.roomNumber.includes(searchValue))
            ?.filter((obj) =>
              genderSearchValue === "all"
                ? obj
                : obj.genderType && obj.genderType === genderSearchValue
            ) //Өрөөний дугаараар хайх
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
        <Empty description="Өрөөний мэдээлэл оруулаагүй байна." />
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
                          type="primary"
                          className="custom-primary-btn"
                          onClick={() => outPatientBed(patientInfoOfBed.id)}
                        >
                          Гаргах
                        </Button>
                      </div>
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
    padding: 5,
    paddingLeft: 0,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    marginTop: 5,
  },
  patientInformationContainer: {},
};
export default DepartmentBed;
