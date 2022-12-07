import {
  Alert,
  Button,
  Card,
  Col,
  DatePicker,
  Row,
  Select,
  Space,
  Collapse,
  Modal,
  Descriptions,
  Form,
} from "antd";
import Table from "react-bootstrap/Table";
import { Get, openNofi, Post, ScrollRef } from "../../comman";
import moment from "moment";
import "moment/locale/mn";
import mn from "antd/es/calendar/locale/mn_MN";
import React, { useEffect, useRef, useState } from "react";
import PatientInformation from "../PatientInformation";
import { selectCurrentToken } from "../../../features/authReducer";
import { useSelector } from "react-redux";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Panel } = Collapse;
const config = {
  headers: {},
  params: {},
};
function DoctorAppointment() {
  const token = useSelector(selectCurrentToken);
  const [form] = Form.useForm();
  const [today] = useState(moment(new Date()));
  const [data, setData] = useState({});
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);
  const scrollRef = useRef();
  const [schedules, setSchedules] = useState([]);
  const [slots, setSlots] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [structures, setStructures] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [selectedSchedule, setSelectedSchedule] = useState("");
  //
  const [qwe, setQwe] = useState({});
  const [date, setDate] = useState("");
  //

  const onSearch = async (value) => {
    config.params.registerNumber = value;
    const response = await Get("pms/patient", token, config);
    if (response.data.length != 0) {
      setSelectedPatient(response.data[0]);
    } else {
      openNofi("error", "Өвчтөн", "Өвчтөн олдохгүй байна");
    }
  };

  const orderAppointment = async (type, desc, value) => {
    if (type) {
      if (selectedPatient.length === 0) {
        openNofi("error", "Анхааруулга", "Өвчтөн сонгоогүй байна");
      } else if (!selectedDoctor) {
        openNofi("error", "Анхааруулга", "Эмч сонгоогүй байна");
      } else {
        setAppointmentModal(true);
      }
    } else {
      setQwe(desc);
      if (selectedPatient.length === 0) {
        openNofi("error", "Анхааруулга", "Өвчтөн сонгоогүй байна");
      } else {
        setData(value);
        setAppointmentModal(true);
      }
    }
  };

  const getStructures = async () => {
    config.params.type = 2;
    const response = await Get("organization/structure", token, config);
    if (response.data.length != 0) {
      setStructures(response.data);
    }
  };

  const getDoctor = async (value) => {
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
    setSelectedDoctor(doctors[value].firstName);
  };
  const onChangePanel = (key) => {
    setSelectedSchedule(key);
  };

  useEffect(() => {
    selectedSchedule && getSlots(0);
  }, [selectedSchedule]);

  const getSlots = async () => {
    setSlots([]);
    config.params.scheduleId = selectedSchedule;
    if (selectedSchedule) {
      const response = await Get("slot", token, config);
      setSlots(response.data);
    }
  };

  const changeDate = async (value) => {
    setDate(value);
    if (value) {
      const date = moment(value).format("YYYY-MM-DD");
      config.params.findOneDate = date;
      config.params.type = null;
      const response = await Get("schedule", token, config);
      setSchedules(response.data);
    }
  };

  const getdd = async () => {
    data.type = 3;
    data.status = 1;
    config.params = {};
    const response = await Post("appointment", token, config, data);
    if (response === 201) {
      setAppointmentModal(false);
      changeDate(date);
      getSlots();
    }
  };

  useEffect(() => {
    ScrollRef(scrollRef);
    getStructures();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 p-1">
          <PatientInformation
            patient={selectedPatient}
            handlesearch={onSearch}
          />
        </div>
        <div className="w-full md:w-4/12 p-1">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Үзлэгийн түүх</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
              maxHeight: 200,
              minHeight: 200,
              height: 200,
            }}
          >
            <div className="table-responsive" id="style-8" ref={scrollRef}>
              <Table className="ant-border-space">
                <thead className="ant-table-thead">
                  <tr>
                    <th>Огноо</th>
                    <th>Кабинет</th>
                    <th>Эмч</th>
                    <th>Төлбөр</th>
                    <th>Статус</th>
                  </tr>
                </thead>
              </Table>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-4/12 p-1">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Төлбөрийн мэдээлэл</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
              maxHeight: 200,
              minHeight: 200,
              height: 200,
            }}
          >
            <div className="table-responsive" id="style-8" ref={scrollRef}>
              <Table className="ant-border-space">
                <thead className="ant-table-thead">
                  <tr>
                    <th>Огноо</th>
                    <th>Төрөл</th>
                    <th>Төлбөр</th>
                    <th>Ажилтан</th>
                  </tr>
                </thead>
              </Table>
            </div>
          </Card>
        </div>
      </div>
      <div className="px-1">
        <Card
          bordered={false}
          title={<h6 className="font-semibold m-0">Цаг захиалга</h6>}
          className="header-solid max-h-max rounded-md"
          bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          loading={cardLoading}
          extra={
            <Space>
              <Button
                className="bg-red-500"
                type="danger"
                onClick={() => orderAppointment(true, {}, {})}
              >
                Яаралтай
              </Button>
              <Alert
                className="h-6"
                message={`Өнөөдөр: ${today?.format("YYYY-MM-DD")}`}
                type="success"
              />
              <Select
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
              <Select
                className="w-52"
                onChange={selectDoctor}
                placeholder="Эмч сонгох"
              >
                {doctors.map((doctor, index) => {
                  return (
                    <Option key={index} value={index}>
                      {doctor.firstName}
                    </Option>
                  );
                })}
              </Select>
              <DatePicker
                onChange={changeDate}
                locale={mn}
                format={"YYYY/MM/DD"}
              />
            </Space>
          }
        >
          <Collapse onChange={onChangePanel} accordion>
            {schedules?.map((schedule) => {
              return (
                <Panel
                  key={schedule.id}
                  header={
                    "Өрөө: " +
                    schedule.room?.roomNumber +
                    " " +
                    "Тасаг: " +
                    schedule.structure?.name +
                    " " +
                    "Кабинет: " +
                    schedule.cabinet?.name +
                    " " +
                    "Эмч: " +
                    schedule.doctor?.firstName
                  }
                >
                  <div
                    className="table-responsive"
                    id="style-8"
                    ref={scrollRef}
                  >
                    <Table
                      className="ant-border-space"
                      style={{ width: "100%" }}
                    >
                      <thead className="ant-table-thead">
                        <tr>
                          <th>Цаг</th>
                          <th>Овог</th>
                          <th>Нас </th>
                          <th>Хүйс</th>
                          <th>Регистерийн №</th>
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
                                        false,
                                        {
                                          roomNumber: schedule.room.roomNumber,
                                          structure: schedule.structure.name,
                                          doctor: schedule.doctor.firstName,
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
                                    {moment(slot.updateAt).format(
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
        </Card>
      </div>
      <Modal
        open={appointmentModal}
        onOk={() => {
          getdd();
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
          <Descriptions.Item label="Эмч">{qwe.doctor}</Descriptions.Item>
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
          <Descriptions.Item label="Өрөөийн дугаар">
            {qwe.roomNumber}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </div>
  );
}
export default DoctorAppointment;
