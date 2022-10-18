import {
  Card,
  Col,
  InputNumber,
  Radio,
  Row,
  Table,
  Typography,
  Collapse,
} from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import male from "../../../assets/images/maleAvatar.svg";
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

function EMR() {
  const [cardLoading, setCardLoading] = useState(false);
  const [problems, setProblems] = useState("");
  const token = useSelector(selectCurrentToken);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const [type, setType] = useState("EMR"); // ['OCS', 'EMR']
  const { Text } = Typography;
  const { Panel } = Collapse;

  useEffect(() => {}, []);

  const handleTypeChange = ({ target: { value } }) => {
    setType(value);
  };

  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = () => {
    axios({
      method: "get",
      url: `${DEV_URL}emr/patient-history`,
      params: {
        patientId: 43,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("response", response);
        setProblems(response.data.response.data.slice(-1)[0]);
      })
      .catch(function (error) {
        console.log("response error", error.response);
      });
  };

  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <Row gutter={[8, 8]}>
          <Col span={14}>
            <Card
              bordered={false}
              title={
                <h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>
              }
              className="header-solid max-h-max"
              loading={cardLoading}
              bodyStyle={{
                paddingTop: 0,
                paddingBottom: 16,
              }}
            >
              <Row gutter={[16, 16]}>
                <Col span={8} className="text-center">
                  <img className="max-h-full" src={male} alt="avatar" />
                  <Radio.Group
                    size="small"
                    value={type}
                    onChange={handleTypeChange}
                    optionType="button"
                    buttonStyle="solid"
                    className="small-radio-button mt-2"
                  >
                    <Radio.Button value="OCS">OCS</Radio.Button>
                    <Radio.Button value="EMR">EMR</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col span={16}>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Овог:</span>
                    <span className="font-bold ml-2">Ширчиндэмбэрэл</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Нэр:</span>
                    <span className="font-bold ml-2">Амарбат</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Хүйс:</span>
                    <span className="font-bold ml-2">Эр</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Нас:</span>
                    <span className="font-bold ml-2">25</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">РД:</span>
                    <span className="font-bold ml-2">ЙЮ97043019</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Утас:</span>
                    <span className="font-bold ml-2">86681325</span>
                  </label>
                  <label className="w-full flex mb-1">
                    <span className="w-1/6">Хаяг:</span>
                    <span className="font-bold ml-2">
                      Улаанбаатар, Баянзүрх, 8 Хороо, 68-50
                    </span>
                  </label>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={10}>
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
              className="header-solid h-full p-0"
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
          </Col>
          <Col span={24}>
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Амбулатори</h6>}
              className="header-solid h-full"
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
              <MainAmbulatory />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        {type == "EMR" ? (
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Явцын үзлэг</h6>}
            className="header-solid h-full"
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
            <MainPatientHistory />
          </Card>
        ) : null}
        {type == "OCS" ? (
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Шинэ захиалга</h6>}
            className="header-solid h-full"
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
      </Col>
    </Row>
  );
}

export default EMR;
