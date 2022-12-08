import { Card, Col, InputNumber, Radio, Row, Select, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { INPUT_HEIGHT } from "../../../constant";
import Ocs from "../OCS/Ocs";
import MainAmbulatory from "./Ambulatory/MainAmbulatory";
import MainPatientHistory from "./EPatientHistory/MainPatientHistory";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUserId,
} from "../../../features/authReducer";
import PatientInformation from "../PatientInformation";
import { Get, openNofi, Post } from "../../comman";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";
import moment from "moment";
const config = {
  headers: {},
  params: {},
};
const { Option } = Select;
const { Text } = Typography;
function EMR() {
  const IncomePatientId = useLocation().state.patientId;
  const IncomeCabinetId = useLocation().state.cabinetId;
  const Inspection = useLocation().state.inspection;
  const AppointmentId = useLocation().state.appointmentId;
  const [cardLoading, setCardLoading] = useState(false);
  const token = useSelector(selectCurrentToken);
  const employeeId = useSelector(selectCurrentUserId);
  const [type, setType] = useState("EMR"); // ['OCS', 'EMR']
  const [appointments, setAppointments] = useState([]);
  const [problems, setProblems] = useState([]);
  //
  const [selectedPatient, setSelectedPatient] = useState([]);
  //

  const handleTypeChange = ({ target: { value } }) => {
    setType(value);
  };

  const getByIdPatient = async (id) => {
    config.params.patientId = null;
    const response = await Get("pms/patient/" + id, token, config);
    console.log(response);
    if (response) {
      setSelectedPatient(response);
    }
  };

  const handleSearch = async (value) => {
    config.params.registerNumber = value;
    const response = await Get("pms/patient", token, config);
    if (response.data.length != 0) {
      setSelectedPatient(response.data[0]);
    } else {
      openNofi("error", "Өвчтөн", "Өвчтөн олдохгүй байна");
    }
  };

  const handleClick = async (value) => {
    var stateIsCito = false;
    console.log(value);
    value.map((item) => {
      if (!item.isCito) {
        stateIsCito = true;
      }
    });
    const response = await Post("service-request", token, config, {
      patientId: selectedPatient.id,
      appointmentId: AppointmentId,
      employeeId: employeeId,
      requestDate: new Date(),
      isCito: stateIsCito ? true : false,
      usageType: "OUT",
      services: value,
    });
    if (response === 201) {
      openNofi("success", "OCS", "Амжилттай захиалгадлаа");
    }
  };

  //
  const getInspectionNotes = async (PatientId) => {
    config.params.patientId = PatientId;
    const response = await Get("appointment", token, config);
    if (response.data.length > 0) {
      var result = response.data.reduce(function (r, a) {
        //Оноор бүлэглэх
        r[a.createdAt.substring(0, 4)] = r[a.createdAt.substring(0, 4)] || [];
        r[a.createdAt.substring(0, 4)].push(a);
        console.log("======a>", a);
        getProblems(a.id);
        return r;
      }, Object.create(null));
      console.log(result);
      setAppointments(result);
    } else {
      setAppointments([]);
    }
    config.params.patientId = null;
  };
  const getProblems = async (id) => {
    const response = await Get("appointment/show/" + id, token, config);
    if (response.inspectionNotes.length > 0) {
      var problem = [];
      response.inspectionNotes.map((note) => {
        problem.push({
          doctorId:
            note.employees.lastName.substring(0, 1) +
            "." +
            note.employees.firstName,
          diagnose: JSON.parse(note.diagnose),
          inspectionDate: note.createdAt,
        });
      });
      setProblems(problem);
    }
  };
  //

  useEffect(() => {
    getByIdPatient(IncomePatientId);
    getInspectionNotes(IncomePatientId);
  }, []);

  return (
    <div className="flex flex-wrap">
      <div
        className={
          type === "EMR"
            ? "w-full md:w-full xl:w-1/2"
            : "w-full md:w-full xl:w-full"
        }
      >
        <div className="flex flex-wrap">
          <div
            className={
              type === "EMR" ? "w-full md:w-full p-1" : "w-full md:w-3/5 p-1"
            }
          >
            <div className="pb-1">
              <PatientInformation
                patient={selectedPatient}
                handlesearch={handleSearch}
                handleTypeChange={handleTypeChange}
                OCS={true}
                type={type}
              />
            </div>
            <div className="pt-1">
              <Card
                bordered={false}
                title={<h6 className="font-semibold m-0">Гол асуудлууд</h6>}
                className="header-solid rounded-md"
                style={{ height: "100%" }}
                loading={cardLoading}
                bodyStyle={{
                  paddingTop: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  minHeight: 300,
                  maxHeight: 300,
                }}
              >
                <div className="table-responsive p-4 max-h-80" id="style-8">
                  <Table bordered className="ant-border-space">
                    <thead className="ant-table-thead bg-slate-200">
                      <tr>
                        <th>emch</th>
                        <th>diagnose</th>
                        <th>date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {problems?.map((problem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{problem.doctorId}</td>
                            <td>
                              <ul className="list-disc list-inside">
                                {problem?.diagnose?.map((diagnose, index) => {
                                  return (
                                    <li key={index}>
                                      {diagnose.code + " " + diagnose.nameEn}
                                    </li>
                                  );
                                })}
                              </ul>
                            </td>
                            <td>
                              {moment(problem.inspectionDate).format(
                                "YYYY-MM-DD"
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </Card>
            </div>
          </div>
          <div
            className={type === "EMR" ? "w-full p-1" : "w-full md:w-2/5 p-1"}
          >
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Амбулатори</h6>}
              className="header-solid rounded-md"
              loading={cardLoading}
              style={{ height: "100%" }}
              bodyStyle={{
                paddingTop: 0,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                minHeight: 518,
                maxHeight: 518,
                overflowX: "hidden",
                overflowY: "scroll",
              }}
            >
              <MainAmbulatory
                appointments={appointments}
                patientId={selectedPatient.id}
              />
            </Card>
          </div>
        </div>
      </div>
      <div className={type === "OCS" ? "w-full" : "w-full md:w-full xl:w-1/2"}>
        <div className="p-1">
          {type == "EMR" ? (
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Явцын үзлэг</h6>}
              className="header-solid max-h-max rounded-md"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                minHeight: 764,
                maxHeight: 764,
                overflowX: "hidden",
                overflowY: "scroll",
              }}
              extra={
                <>
                  <Select value={Inspection} style={{ width: 200 }}>
                    <Option value={1} disabled={true}>
                      Анхан
                    </Option>
                    <Option value={2} disabled={true}>
                      Давтан
                    </Option>
                    <Option value={3}>Урьдчилан сэргийлэх</Option>
                    <Option value={4}>Гэрийн эргэлт</Option>
                    <Option value={5}>Идэвхтэй хяналт</Option>
                    <Option value={6}>Дуудлагаар</Option>
                  </Select>
                </>
              }
            >
              <MainPatientHistory
                AppointmentId={AppointmentId}
                PatientId={IncomePatientId}
                CabinetId={IncomeCabinetId}
                Inspection={Inspection}
              />
            </Card>
          ) : null}
          {type == "OCS" ? (
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Шинэ захиалга</h6>}
              className="header-solid max-h-max rounded-md"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingBottom: 16,
              }}
              extra={
                <Row className="items-center">
                  <Col>
                    <Text className="mr-2">Нийт төлбөр</Text>
                  </Col>
                  <Col>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{
                        minHeight: INPUT_HEIGHT,
                        height: INPUT_HEIGHT,
                      }}
                      disabled
                    />
                  </Col>
                </Row>
              }
            >
              <Ocs handleClick={handleClick} />
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EMR;
