import {
  Alert,
  Button,
  Card,
  Collapse,
  DatePicker,
  Descriptions,
  Form,
  Modal,
  Select,
  Space,
} from "antd";
import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, openNofi, Patch, Post, ScrollRef } from "../../../comman";
import mn from "antd/es/calendar/locale/mn_MN";
import { useRef } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { ClockCircleOutlined, SearchOutlined } from "@ant-design/icons";
const { Option } = Select;
const { Panel } = Collapse;
function Appointment({ selectedPatient, type, treatmentData, handleClick }) {
  const [today] = useState(moment(new Date()));
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {},
  };
  const scrollRef = useRef();
  const [cardLoading, setCardLoading] = useState(false);
  const [filterForm] = Form.useForm();
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [selectedDep, setSelectedDep] = useState();
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [structures, setStructures] = useState([]);
  const [slots, setSlots] = useState([]);
  const [qwe, setQwe] = useState({});
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  //

  const orderAppointment = async (type, desc, value) => {
    if (type) {
      setQwe(desc);
      setIsUrgent(false);
      if (selectedPatient.length === 0) {
        openNofi("error", "Анхааруулга", "Өвчтөн сонгоогүй байна");
      } else if (!selectedDoctor) {
        openNofi("error", "Анхааруулга", "Эмч сонгоогүй байна");
      } else {
        setData(value);
        setAppointmentModal(true);
      }
    } else {
      console.log("2");
      setQwe(desc);
      setIsUrgent(true);
      if (selectedPatient.length === 0) {
        openNofi("error", "Анхааруулга", "Өвчтөн сонгоогүй байна");
      } else {
        setData(value);
        setAppointmentModal(true);
      }
    }
  };
  const getDoctor = async (value) => {
    setSelectedDep(structures.filter((e) => e["id"] === value));
    config.params.depId = value;
    config.params.registerNumber = null;
    config.params.type = null;
    const response = await Get("organization/employee", token, config);
    if (response.data.length != 0) {
      setDoctors(response.data);
    } else {
      setDoctors([]);
    }
  };
  const selectDoctor = (value) => {
    const selectedDoctor = doctors.filter(e => e.id === value);
    setSelectedDoctor(selectedDoctor[0]);
  };
  const changeDate = async (value) => {
    setDate(value);
    if (value) {
      const date = moment(value).format("YYYY-MM-DD");
      config.params.findOneDate = date;
      config.params.type = type;
      const response = await Get("schedule", token, config);
      //   console.log("RES ==========>", response);
      setSchedules(response.data);
    }
  };
  const onChangePanel = (key) => {
    setSelectedSchedule(key);
  };
  const getStructures = async () => {
    config.params.type = 2;
    const response = await Get("organization/structure", token, config);
    if (response.data.length != 0) {
      setStructures(response.data);
    }
  };
  const getSlots = async () => {
    setSlots([]);
    config.params.scheduleId = selectedSchedule;
    if (selectedSchedule) {
      const response = await Get("slot", token, config);
      setSlots(response.data);
    }
  };
  const getdd = async () => {
    console.log("getdd", data);
    if (type === 2) {
      data.type = treatmentData.type;
      const response = await Patch('service-request/' + treatmentData.invoiceId, token, config, data);
      if (response === 200) {
        setAppointmentModal(false);
        handleClick(true, treatmentData.invoiceId);
        getSlots();
      }
    } else {
      data.type = 3;
      data.status = 1;
      config.params = {};
      const response = await Post("appointment", token, config, data);
      if (response === 201) {
        setAppointmentModal(false);
        changeDate(date);
        getSlots();
      }
    }
  };
  const urgentRequest = async () => {
    data.type = 1;
    data.status = 1;
    config.params = {};
    const response = await Post("appointment", token, config, data);
    if (response === 201) {
      setAppointmentModal(false);
    }
  };
  const onFinish = () => {
    filterForm.validateFields()
      .then(async (values) => {
        const date = moment(values.date).format("YYYY-MM-DD");
        config.params.findOneDate = date;
        config.params.structureId = values.structureId;
        config.params.doctorId = values.doctorId;
        const response = await Get("schedule", token, config);
        //   console.log("RES ==========>", response);
        setSchedules(response.data);
      }).catch((err) => { })
  };
  useEffect(() => {
    ScrollRef(scrollRef);
    getStructures();
  }, [selectedPatient]);
  useEffect(() => {
    selectedSchedule && getSlots(0);
  }, [selectedSchedule]);
  return (
    <>
      <Modal
        open={appointmentModal}
        onOk={() => {
          isUrgent ? urgentRequest() : getdd();
        }}
        onCancel={() => {
          setAppointmentModal(false);
        }}
        confirmLoading={isConfirmLoading}
        cancelText="Болих"
        okText="Хадгалах"
      >
        <Descriptions title="Цаг захиалах" layout="vertical">
          <Descriptions.Item label="Кабинет">{qwe.structure}</Descriptions.Item>
          <Descriptions.Item label="Эмч">
            {qwe.doctor?.firstName}
          </Descriptions.Item>
          <Descriptions.Item label="Үйлчүүлэгч">
            {selectedPatient.lastName + " " + selectedPatient.firstName}
          </Descriptions.Item>
          <Descriptions.Item label="Цаг">
            <div className="inline-flex flex-row items-center">
              <span>{qwe.time?.start?.substr(0, 5)}</span>
              <ClockCircleOutlined className="mx-1.5" />
              <span>{qwe.time?.end?.substr(0, 5)}</span>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Өрөөнийн дугаар">
            {qwe.roomNumber}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
      <Card
        bordered={false}
        title={<h6 className="font-semibold m-0">Цаг захиалга</h6>}
        className="header-solid max-h-max rounded-md"
        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
        loading={cardLoading}
        extra={
          <Space align="start">
            <Button
              className="bg-red-500"
              type="danger"
              onClick={() =>
                orderAppointment(
                  false,
                  {
                    roomNumber: "",
                    structure: selectedDep[0]?.name,
                    doctor: selectedDoctor,
                    time: {
                      start: moment(today).format("HH:mm"),
                      end: moment(today).format("HH:mm"),
                    },
                  },
                  {
                    slotId: null,
                    patientId: selectedPatient.id,
                    doctorId: selectedDoctor.id,
                    cabinetId: selectedDep[0]?.id,
                  }
                )
              }
            >
              Яаралтай
            </Button>
            <Alert
              className="h-6"
              message={`Өнөөдөр: ${today?.format("YYYY-MM-DD")}`}
              type="success"
            />
            <Form form={filterForm} layout="inline" style={{ height: '30px' }}>
              <Form.Item
                label="Тасаг"
                name="structureId"
                rules={[
                  {
                    required: true,
                    message: "Заавал"
                  }
                ]}
              >
                <Select
                  allowClear
                  className="w-52"
                  onChange={getDoctor}
                  placeholder="Тасаг сонгох"
                >
                  {structures.map((structure, index) => {
                    return (
                      <Option key={index} value={structure.id}>
                        {structure.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="Эмч"
                name="doctorId"
                rules={[
                  {
                    required: true,
                    message: "Заавал"
                  }
                ]}
              >
                <Select
                  allowClear
                  className="w-52"
                  onChange={selectDoctor}
                  placeholder="Эмч сонгох"
                >
                  {doctors.map((doctor, index) => {
                    return (
                      <Option key={index} value={doctor.id}>
                        {doctor.firstName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="Өдөр"
                name="date"
              >
                <DatePicker
                  onChange={changeDate}
                  locale={mn}
                  format={"YYYY/MM/DD"}
                />
              </Form.Item>
              <Button type="primary" icon={<SearchOutlined />} onClick={() => onFinish()}>Шүүх</Button>
            </Form>
          </Space>
        }
      >
        <div className="mt-2">
          <Collapse onChange={onChangePanel} accordion>
            {schedules?.map((schedule) => {
              return (
                <Panel
                  key={schedule.id}
                  header={
                    <div>
                      <b>Өрөө:</b> {schedule.room?.roomNumber}
                      <b className="ml-2">Тасаг:</b> {schedule.structure?.name}
                      <b className="ml-2">Кабинет:</b> {schedule.cabinet?.name}
                      <b className="ml-2">Эмч:</b> {schedule.doctor?.firstName}
                    </div>
                  }
                >
                  <div className="table-responsive" id="style-8" ref={scrollRef}>
                    <Table className="ant-border-space" style={{ width: "100%" }}>
                      <thead className="ant-table-thead">
                        <tr>
                          <th>Цаг</th>
                          <th>Овог</th>
                          <th>Нас </th>
                          <th>Хүйс</th>
                          <th>Регистрийн №</th>
                          <th>Статус</th>
                          <th>Утас</th>
                          <th>Захиалсан огноо</th>
                          <th>Ирсэн цаг</th>
                          <th>Бүртгэсэн</th>
                        </tr>
                      </thead>
                      <tbody className="ant-table-tbody">
                        {slots.map((slot, idx) => {
                          return (
                            <tr key={idx}>
                              <td>
                                <div className="inline-flex flex-row items-center">
                                  <span>{slot.startTime?.substr(0, 5)}</span>
                                  <ClockCircleOutlined className="mx-1.5" />
                                  <span>{slot.endTime?.substr(0, 5)}</span>
                                </div>
                              </td>
                              {slot.isActive ? (
                                <td colSpan={9} className="text-center">
                                  <Button
                                    className="bg-green-500 text-white"
                                    onClick={() =>
                                      orderAppointment(
                                        true,
                                        {
                                          roomNumber: schedule.room.roomNumber,
                                          structure: schedule.structure.name,
                                          doctor: schedule.doctor,
                                          time: {
                                            start: slot.startTime,
                                            end: slot.endTime,
                                          },
                                        },
                                        {
                                          slotId: slot.id,
                                          patientId: selectedPatient.id,
                                          doctorId: schedule.doctorId,
                                          cabinetId: schedule.cabinetId,
                                        }
                                      )
                                    }
                                  >
                                    Цаг захиалах
                                  </Button>
                                </td>
                              ) : (
                                <>
                                  <td className="text-center">
                                    {slot.patient?.lastName}
                                  </td>
                                  <td className="text-center">
                                    {slot.patient?.firstName}
                                  </td>
                                  <td className="text-center">
                                    {slot.patient?.age}
                                  </td>
                                  <td className="text-center">
                                    {slot.patient?.registerNumber}
                                  </td>
                                  <td className="text-center"></td>
                                  <td className="text-center">
                                    {slot.patient?.phoneNo}
                                  </td>
                                  <td>
                                    {moment(slot.updatedAt).format(
                                      "YYYY-MM-DD HH:mm"
                                    )}
                                  </td>
                                  <td></td>
                                  <td></td>
                                </>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </Card>
    </>
  );
}
export default Appointment;
