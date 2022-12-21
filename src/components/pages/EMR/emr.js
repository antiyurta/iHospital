import { Card, Col, Empty, InputNumber, Modal, Radio, Row, Select, Typography } from "antd";
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
import Schedule from "../OCS/Schedule";
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
  const XrayRequestId = useLocation().state.xrayRequestId;
  const [cardLoading, setCardLoading] = useState(false);
  const token = useSelector(selectCurrentToken);
  const employeeId = useSelector(selectCurrentUserId);
  const [type, setType] = useState("EMR"); // ['OCS', 'EMR']
  const [appointments, setAppointments] = useState([]);
  const [problems, setProblems] = useState([]);
  //
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [payments, setPayments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  //

  const handleTypeChange = ({ target: { value } }) => {
    setType(value);
  };

  const getByIdPatient = async (id) => {
    config.params.patientId = null;
    const response = await Get("pms/patient/" + id, token, config);
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
    if (value?.length > 0 || value) {
      var stateIsCito = false;
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
        const conf = {
          headers: {},
          params: {
            patientId: selectedPatient.id,
          }
        };
        const response = await Get('payment/invoice', token, conf);
        setPayments(response.data);
        setIsOpen(true);
      }
    } else {
      openNofi("warning", 'sadsad', 'sadsa');
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
    <>
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
                  OCS={AppointmentId ? true : false}
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
                    minHeight: 150,
                    maxHeight: 150,
                  }}
                >
                  <div className="scroll" style={{ maxHeight: 150 }}>
                    {
                      problems.length > 0 ?
                        problems.map((problem, idx) => {
                          return (
                            <div key={idx} className="inline-flex">
                              <p>{problem.doctorId}</p>
                              <ul className="list-disc list-inside" style={{ width: 600, paddingLeft: 10 }}>
                                {problem?.diagnose?.map((diagnose, index) => {
                                  return (
                                    <li key={index}>
                                      {diagnose.code + " " + diagnose.nameEn}
                                    </li>
                                  );
                                })}
                              </ul>
                              <p>
                                {moment(problem.inspectionDate).format(
                                  "YYYY-MM-DD"
                                )}
                              </p>
                            </div>
                          );
                        })
                        :
                        <Empty description="Байхгүй" />
                    }
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
                  minHeight: 300,
                  maxHeight: 300,
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                <MainAmbulatory
                  appointments={appointments}
                  patientId={IncomePatientId}
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
                className="header-solid max-h-max rounded-md scroll"
                loading={cardLoading}
                bodyStyle={{
                  paddingTop: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  minHeight: 724,
                  maxHeight: 724,
                }}
                extra={
                  <>
                    <Select defaultValue={Inspection} disabled={Inspection === 11 ? true : false} style={{ width: 200 }}>
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
                      <Option value={11} disabled={true}>xray</Option>
                      <Option value={12} disabled={true}>exo</Option>
                    </Select>
                  </>
                }
              >
                <MainPatientHistory
                  AppointmentId={AppointmentId}
                  XrayRequestId={XrayRequestId}
                  PatientId={IncomePatientId}
                  CabinetId={IncomeCabinetId}
                  Inspection={Inspection}
                  handleClick={handleTypeChange}
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
              >
                <Ocs selectedPatient={selectedPatient} handleClick={handleClick} />
              </Card>
            ) : null}
          </div>
        </div>
      </div>
      <Schedule isOpen={isOpen} isOCS={true} incomeData={payments} selectedPatient={selectedPatient} isClose={() => setIsOpen(false)} />
    </>
  );
}

export default EMR;
