import {
  Card,
  Col,
  InputNumber,
  Radio,
  Row,
  Typography,
  Collapse,
} from "antd";
import React, { useState, useEffect } from "react";
import { INPUT_HEIGHT } from "../../../constant";
import Ocs from "../OCS/Ocs";
import MainAmbulatory from "./Ambulatory/MainAmbulatory";
import MainPatientHistory from "./PatientHistory/MainPatientHistory";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import Birth from "./Problems/Birth";
import HealthRecord from "./Problems/HealthRecord";
import LifeStyle from "./Problems/LifeStyle";
import LifeCondition from "./Problems/LifeCondition";
import Allergy from "./Problems/Allergy";
import UsuallyMedicine from "./Problems/UsuallyMedicine";
import EpidemicQuestion from "./Problems/EpidemicQuestion";
import GeneticQuestion from "./Problems/GeneticQuestion";
import PatientInformation from "../PatientInformation";
import { Get, openNofi } from "../../comman";
import { useLocation } from "react-router-dom";
const config = {
  headers: {},
  params: {}
};
function EMR() {
  const IncomePatientId = useLocation().state.patientId;
  const [cardLoading, setCardLoading] = useState(false);
  const [problems, setProblems] = useState("");
  const token = useSelector(selectCurrentToken);
  const [type, setType] = useState("EMR"); // ['OCS', 'EMR']
  const { Text } = Typography;
  const { Panel } = Collapse;

  //
  const [selectedPatient, setSelectedPatient] = useState([]);
  //


  const handleTypeChange = ({ target: { value } }) => {
    setType(value);
  };
  const getHistory = async (PatientId) => {
    config.params.registerNumber = null;
    console.log("====>", PatientId);
    config.params.patientId = PatientId;
    const response = await Get('emr/patient-history', token, config);
    if (response.data.length != 0) {
      setProblems(response.data.slice(-1)[0]);
    }
  };

  const getByIdPatient = async (id) => {
    config.params.patientId = null;
    const response = await Get('pms/patient/' + id, token, config);
    console.log(response);
    if (response) {
      setSelectedPatient(response);
      getHistory(response.id);
    }
  }

  const handleSearch = async (value) => {
    config.params.registerNumber = value;
    const response = await Get('pms/patient', token, config);
    if (response.data.length != 0) {
      setSelectedPatient(response.data[0]);
      getHistory(response.data[0].id);
    } else {
      openNofi('error', 'Өвчтөн', 'Өвчтөн олдохгүй байна');
    }
  }
  useEffect(() => {
    getByIdPatient(IncomePatientId);
  }, []);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-full xl:w-1/2">
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/5 p-1">
            <PatientInformation patient={selectedPatient} handlesearch={handleSearch} handleTypeChange={handleTypeChange} OCS={true} />
          </div>
          <div className="w-full md:w-2/5 p-1">
            <Card
              bordered={false}
              title={
                <div className="flex font-semibold m-0 justify-between">
                  <h6>Гол асуудлууд</h6>
                  <p>
                    {problems?.createdAt?.replace(/T/, " ").replace(/\..+/, "")}
                  </p>
                </div>
              }
              className="header-solid max-h-max rounded-md"
              loading={cardLoading}
              bodyStyle={{
                padding: 0,
                paddingBottom: 16,
                minHeight: 200,
                maxHeight: 200,
                overflowX: "hidden",
                overflowY: "scroll",
              }}
            >
              {problems != "" ? (
                <Collapse accordion ghost>
                  {problems?.hasOwnProperty("birth") ? (
                    <Panel header="Төрөлт, өсөлт бойжилт" key="1">
                      <Birth data={problems["birth"]} />
                    </Panel>
                  ) : null}
                  {problems?.hasOwnProperty("healthRecord") ? (
                    <Panel header="Өвчний түүх" key="2">
                      <HealthRecord data={problems["healthRecord"]} />
                    </Panel>
                  ) : null}
                  {problems?.hasOwnProperty("lifeStyle") ? (
                    <Panel header="Амьдралын хэв маяг" key="3">
                      <LifeStyle data={problems["lifeStyle"]} />
                    </Panel>
                  ) : null}
                  {problems?.hasOwnProperty("lifeCondition") ? (
                    <Panel header="Амьдралын нөхцөл" key="14">
                      <LifeCondition data={problems["lifeCondition"]} />
                    </Panel>
                  ) : null}
                  {problems?.hasOwnProperty("allergy") ? (
                    <Panel header="Харшил" key="5">
                      <Allergy data={problems["allergy"]} />
                    </Panel>
                  ) : null}
                  {problems?.hasOwnProperty("usuallyMedicine") ? (
                    <Panel header="Эмийн хэрэглээ" key="6">
                      <UsuallyMedicine data={problems["usuallyMedicine"]} />
                    </Panel>
                  ) : null}
                  {problems?.hasOwnProperty("epidemicQuestion") ? (
                    <Panel header="Тархвар зүйн асуумж" key="7">
                      <EpidemicQuestion data={problems["epidemicQuestion"]} />
                    </Panel>
                  ) : null}
                  {problems?.hasOwnProperty("geneticQuestion") ? (
                    <Panel header="Удамшлын асуумж" key="8">
                      <GeneticQuestion data={problems["geneticQuestion"]} />
                    </Panel>
                  ) : null}
                </Collapse>
              ) : null}
            </Card>
          </div>
          <div className="w-full">
            <div className="p-1">
              <Card
                bordered={false}
                title={<h6 className="font-semibold m-0">Амбулатори</h6>}
                className="header-solid max-h-max rounded-md"
                loading={cardLoading}
                bodyStyle={{
                  paddingTop: 0,
                  paddingBottom: 16,
                  minHeight: 400,
                  maxHeight: 600,
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                <MainAmbulatory patientId={selectedPatient.id} />
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-full xl:w-1/2">
        <div className="p-1">
          {type == "EMR" ? (
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Явцын үзлэг</h6>}
              className="header-solid max-h-max rounded-md"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingBottom: 16,
              }}
              extra={
                <>
                  <Radio.Group>
                    <Radio value={1}>Анхан</Radio>
                    <Radio value={2}>Давтан</Radio>
                  </Radio.Group>
                </>
              }
            >
              <MainPatientHistory PatientId={selectedPatient.id} />
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
              <Ocs />
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EMR;
