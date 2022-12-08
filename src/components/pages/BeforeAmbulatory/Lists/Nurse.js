import {
  ClockCircleOutlined,
  MinusOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Card, DatePicker, Row, Col, Select, Input } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, openNofi, ScrollRef } from "../../../comman";
import examinationType from "../examinationType.json";

const { RangePicker } = DatePicker;
const { Option } = Select;

function Nurse() {
  const scrollRef = useRef();
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const config = {
    headers: {},
    params: {},
  };
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [deps, setDeps] = useState([]);
  const [selectedDep, setSelectedDep] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const getDoctors = async () => {
    const response = await Get("organization/employee", token, config);
    setDoctors(response.data);
  };
  const getDeps = async () => {
    config.params.type = 2;
    const response = await Get("organization/structure", token, config);
    setDeps(response.data);
  };
  const getAppointment = async () => {
    config.params.doctorId = selectedDoctor;
    config.params.cabinetId = selectedDep;
    const response = await Get("appointment", token, config);
    setAppointments(response.data);
  };
  const getEMR = (listId, id, cabinetId, inspectionType, isPayment, regNum) => {
    // status heregteii anhan dawtan
    // tolbor shalgah
    if (isPayment === false) {
      openNofi("warning", "ТӨЛБӨР", "Төлбөр төлөгдөөгүй");
    } else {
      navigate(`/ambulatoryDetail`, {
        state: {
          appointmentId: listId,
          patientId: id,
          cabinetId,
          inspection: inspectionType,
          regNum,
        },
      });
    }
  };
  const getTypeInfo = (type, begin, end) => {
    //1 yaralta shuud
    //2 shuud
    //3 urdcilsan
    //4 uridcilsan sergiileh
    if (type === 1) {
      return <td className="bg-red-500 text-white">Яаралтай</td>;
    } else if (type === 2) {
      return "sadasd";
    } else if (type === 3) {
      const beginTime = begin.split(":");
      const endTime = end.split(":");
      return (
        <td className="bg-[#5cb85c] text-white">
          <div className="inline-flex flex-row items-center">
            <span>{beginTime[0] + ":" + beginTime[1]}</span>
            {<ClockCircleOutlined className="mx-2" />}
            <span>{endTime[0] + ":" + endTime[1]}</span>
          </div>
        </td>
      );
    } else {
      return <td className="bg-[#5bc0de]">{begin + "->" + end}</td>;
    }
  };
  const getPaymentInfo = (isPayment) => {
    if (isPayment) {
      return (
        <td>
          <PlusOutlined style={{ color: "#00adef", fontSize: "20px" }} />
        </td>
      );
    } else {
      return (
        <td>
          <MinusOutlined style={{ color: "red", fontSize: "20px" }} />
        </td>
      );
    }
  };
  const getGenderInfo = (gender) => {
    if (gender === "MAN") {
      return <td>Эр</td>;
    } else {
      return <td>Эмэгтэй</td>;
    }
  };
  const getAge = (registerNumber) => {
    if (registerNumber != undefined) {
      const date = new Date();
      let year = parseInt(registerNumber.substring(2, 4));
      let month = parseInt(registerNumber.substring(4, 6));
      if (month > 20 && month < 33) {
        year += 2000;
        month -= 20;
      } else {
        year += 1900;
      }
      const currentYear = date.getFullYear();
      const age = currentYear - year;
      return age;
    } else {
      return null;
    }
  };
  const getInspectionInfo = (inspectionType) => {
    if (inspectionType === 1) {
      return <td>Анхан</td>;
    } else if (inspectionType === 2) {
      return <td>Давтан</td>;
    } else if (inspectionType === 3) {
      return <td>Урьдчилан сэргийлэх</td>;
    } else if (inspectionType === 4) {
      return <td>Гэрийн эргэлт</td>;
    } else if (inspectionType === 5) {
      return <td>Идэвхтэй хяналт</td>;
    } else {
      return <td>Дуудлагаар</td>;
    }
  };
  const getDiagnose = (diagnose) => {
    return (
      <td>
        {diagnose?.map((el, index) => {
          var parsed = JSON.parse(el.diagnose);
          return (
            <div key={index} className="grid">
              {parsed?.map((data, indexParse) => {
                return <span key={indexParse}>{data.code}</span>;
              })}
            </div>
          );
        })}
      </td>
    );
  };
  const filterAppointment = async (dates) => {
    if (dates) {
      config.params.startDate = moment(dates[0])
        .hour(0)
        .minute(0)
        .format("YYYY-MM-DD HH:mm");
      config.params.endDate = moment(dates[1])
        .hour(23)
        .minute(59)
        .format("YYYY-MM-DD HH:mm");
      const response = await Get("appointment", token, config);
      setAppointments(response.data);
    }
  };

  useEffect(() => {
    getAppointment();
    getDoctors();
    getDeps();
    ScrollRef(scrollRef);
  }, []);

  useEffect(() => {
    getAppointment();
    ScrollRef(scrollRef);
  }, [selectedDep, selectedDoctor]);

  return (
    <>
      <Row>
        <div className="w-full">
          <Card bordered={false} className="header-solid max-h-max rounded-md">
            <Row gutter={12}>
              <Col span={6} className="text-center">
                <RangePicker onChange={filterAppointment} locale={mnMN} />
              </Col>
              <Col span={4} className="text-center">
                <Select
                  allowClear
                  value={selectedDep || undefined}
                  onChange={(e) => {
                    setSelectedDep(e);
                  }}
                  showSearch
                  style={{
                    minWidth: 200,
                  }}
                  size="small"
                  placeholder="Кабинет"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {deps?.map((el, index) => {
                    return (
                      <Option value={el.id} key={index}>
                        {el.name}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
              <Col span={4} className="text-center">
                <Select
                  allowClear
                  value={selectedDoctor || undefined}
                  onChange={(e) => {
                    setSelectedDoctor(e);
                  }}
                  showSearch
                  style={{
                    width: 200,
                  }}
                  size="small"
                  placeholder="Эмч"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {doctors?.map((el, index) => {
                    return (
                      <Option value={el.id} key={index}>{`${el.lastName?.substr(
                        0,
                        1
                      )}. ${el.firstName}`}</Option>
                    );
                  })}
                </Select>
              </Col>
              <Col span={4} className="text-center">
                <Input
                  size="small"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Овог, Нэр, РД"
                  prefix={<SearchOutlined />}
                />
              </Col>
            </Row>
            <div className="table-responsive mt-3" id="style-8" ref={scrollRef}>
              <Table
                bordered
                className="ant-border-space"
                style={{ width: "100%" }}
              >
                <thead className="ant-table-thead bg-slate-200">
                  <tr>
                    <th>№</th>
                    <th>Он сар</th>
                    <th>Үзлэгийн цаг</th>
                    <th>Эмч</th>
                    <th>Картын №</th>
                    <th>Үзлэг</th>
                    <th>Овог</th>
                    <th>Нэр</th>
                    <th>Регистр №</th>
                    <th>Нас</th>
                    <th>Хүйс</th>
                    <th>Тасаг</th>
                    <th>Онош</th>
                    <th>Захиалсан огноо</th>
                    <th>Төлбөр</th>
                    <th>ЭСҮ оноо</th>
                    <th>Үзлэгийн төрөл</th>
                    <th>Үзлэгт орсон эсэх</th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody p-0">
                  {appointments
                    ?.filter(
                      (obj) =>
                        obj?.patient?.cardNumber
                          ?.toString()
                          ?.includes(searchValue) ||
                        obj?.patient?.lastName
                          ?.toLowerCase()
                          ?.includes(searchValue) ||
                        obj?.patient?.firstName
                          ?.toLowerCase()
                          ?.includes(searchValue) ||
                        obj?.patient?.registerNumber
                          ?.toLowerCase()
                          ?.includes(searchValue)
                    )
                    .map((appointment, index) => {
                      return (
                        <tr
                          key={index}
                          onDoubleClick={() =>
                            getEMR(
                              appointment?.id,
                              appointment?.patientId,
                              appointment?.cabinetId,
                              appointment?.inspectionType,
                              appointment?.isPayment,
                              appointment?.patient?.registerNumber
                            )
                          }
                          className="ant-table-row ant-table-row-level-0 hover:cursor-pointer"
                        >
                          <td>{index + 1}</td>
                          <td>{appointment?.slots?.schedule?.workDate}</td>
                          {getTypeInfo(
                            appointment?.type,
                            appointment?.slots.startTime,
                            appointment?.slots.endTime
                          )}
                          <td>{`${appointment?.employee?.lastName?.substr(
                            0,
                            1
                          )}. ${appointment?.employee?.firstName}`}</td>
                          <td>{appointment?.patient?.cardNumber}</td>
                          {getInspectionInfo(appointment?.inspectionType)}
                          <td>{appointment?.patient?.lastName}</td>
                          <td>{appointment?.patient?.firstName}</td>
                          <td>{appointment?.patient?.registerNumber}</td>
                          <td>
                            {getAge(appointment?.patient?.registerNumber)}
                          </td>
                          {getGenderInfo(appointment?.patient?.genderType)}
                          <td>{appointment?.structures?.name}</td>
                          {getDiagnose(appointment?.inspectionNotes)}
                          <td>
                            {moment(appointment?.createdAt).format(
                              "YYYY-MM-DD"
                            )}
                          </td>
                          {getPaymentInfo(appointment.isPayment)}
                          <td
                            style={{
                              backgroundColor:
                                appointment?.assesments[0]?.colorTotal,
                            }}
                          >
                            {appointment?.assesments[0]?.totalEWS}
                          </td>
                          <td>
                            {examinationType.map((item) => {
                              if (item.value === appointment.type) {
                                return item.label;
                              }
                            })}
                          </td>
                          <td>Тийм</td>
                        </tr>
                      );
                    })}
                  <tr></tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </div>
      </Row>
    </>
  );
}
export default Nurse;
