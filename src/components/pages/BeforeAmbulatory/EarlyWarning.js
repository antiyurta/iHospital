//Амбулаторийн үзлэгийн өмнөх жагсаалт -> Эрт сэрэмжлүүлэх үнэлгээ
import React, { useState, useEffect } from "react";
import { Button, Col, Input, Row, Select, Modal } from "antd";
import { blue } from "@ant-design/colors";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Table } from "react-bootstrap";
import { Get, Post } from "../../comman";
//
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
//

export default function EarlyWarning({ PatientId, listId }) {
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {},
  };
  const { Option } = Select;
  const [formValues, setFormValues] = useState({
    patientId: null,
    highPressureRight: 0, //Систол
    lowPressureRight: 0, //Диастол
    weight: 0,
    height: 0,
    temp: 0, //Биеийн халуун
    respiratoryRate: 0, //Амьсгал
    spO2: 0, //SpO`2
    pulse: 0,
    mind: "choose", //Ухаан санаа
    nurse: null,
  });
  const [patientAssesments, setPatientAssesments] = useState([]); //Тухайн өвчтөн дээрх ЭМЧИЙН ТЭМДЭГЛЭЛҮҮД
  const [patientAssesmentsResult, setPatientAssesmentsResult] = useState([]); //Тухайн өвчтөн дээрх ЭМЧИЙН ТЭМДЭГЛЭЛҮҮД Ард харагдах нь
  //
  const [lineAssesmentsResult, setLineAssesmentsResult] = useState([]);
  const [lineLabels, setLineLabels] = useState([]);
  const [breathData, setBreathData] = useState([]);
  const [spo2Data, setSpo2Data] = useState([]);
  const [pulseData, setPulseData] = useState([]);
  const [HighPressureRightData, setHighPressureRightData] = useState([]);
  const [LowPressureRightData, setLowPressureRightData] = useState([]);
  const [tempData, setTempData] = useState([]);
  //
  useEffect(() => {
    if (PatientId) {
      getAssesment();
    }
  }, [PatientId]);
  let handleChange = (e, p) => {
    if (p === "mind") {
      //Зөвхөн SELECT үед
      setFormValues({ ...formValues, ["mind"]: e });
    } else {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: parseFloat(value) });
    }
  };
  let resetFormFields = () => {
    setFormValues({
      patientId: null,
      highPressureRight: null, //Систол
      lowPressureRight: null, //Диастол
      weight: null,
      height: null,
      temp: null, //Биеийн халуун
      respiratoryRate: null, //Амьсгал
      spO2: null, //SpO`2
      pulse: null,
      mind: null, //Ухаан санаа
      nurse: null,
    });
  };
  const getAssesment = async (type) => {
    //Тухайн өвчтөн дээрх ЭМЧИЙН ТЭМДЭГЛЭЛҮҮД авах
    config.params.patientId = PatientId;
    const response = await Get("assesment", token, config);
    if (response.data.length != 0) {
      setPatientAssesments(response.data);
      setPatientAssesmentsResult(response.data);
      if (response.data.length <= 7) {
        var demoLineLabels = [];
        var demoBreathData = [];
        var demoSpo2Data = [];
        var demoPulseData = [];
        response.data.map((data) => {
          demoLineLabels.push(moment(data.createdAt).format("YYYY-MM-DD HH:mm"));
          demoBreathData.push(data.respiratoryRate);
          demoSpo2Data.push(data.spO2);
          demoPulseData.push(data.pulse);
        })
        setLineLabels(demoLineLabels);
        setBreathData(demoBreathData);
        setSpo2Data(demoSpo2Data);
        setPulseData(demoPulseData);
      } else {
        var demoLineLabels = [];
        var demoBreathData = [];
        var demoSpo2Data = [];
        var demoPulseData = [];
        var demoHighPressureRight = [];
        var demoLowPressureRight = [];
        var demoTempData = [];
        for (let index = response.data.length - 7; index < response.data.length; index++) {
          demoLineLabels.push(moment(response.data[index].createdAt).format("YYYY-MM-DD HH:mm"));
          demoBreathData.push(response.data[index].respiratoryRate);
          demoSpo2Data.push(response.data[index].spO2);
          demoPulseData.push(response.data[index].pulse);
          demoHighPressureRight.push(response.data[index].highPressureRight);
          demoLowPressureRight.push(response.data[index].lowPressureRight);
          demoTempData.push(response.data[index].temp);
        }
        setLineLabels(demoLineLabels);
        setBreathData(demoBreathData);
        setSpo2Data(demoSpo2Data);
        setPulseData(demoPulseData);
        setHighPressureRightData(demoHighPressureRight);
        setLowPressureRightData(demoLowPressureRight);
        setTempData(demoTempData);
      }
    }
    if (type === "save") {
      Modal.warning({
        title: "Анхааруулга",
        content: response.data.slice(-1)[0].message, //Сүүлд хадгалагдсан тэмдэглэлийн message харуулах
      });
    }
  };
  const createAssesment = async () => {
    formValues.patientId = PatientId;
    formValues.appointmentId = listId;
    const response = await Post("assesment", token, config, formValues);
    resetFormFields();
    getAssesment("save");
  };
  //
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);
  const vsOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        position: "top",
        text: "VS - ын диаграмм"
      },
    },
  };
  const CDOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        position: "top",
        text: "Даралтын диаграмм"
      },
    },
  };
  const LineGraphVS = {
    labels: lineLabels,
    datasets: [
      {
        label: "Амьсгал",
        data: breathData,
        borderColor: ["#2596be"],
        backgroundColor: "#2596be",
        borderWidth: 1,
      },
      {
        label: "SPO2",
        data: spo2Data,
        borderColor: ["#21130d"],
        backgroundColor: "#21130d",
        borderWidth: 1,
      },
      {
        label: "Пульс",
        data: pulseData,
        borderColor: ["#ff0000"],
        backgroundColor: "#ff0000",
        borderWidth: 2,
      },
    ],
  };
  const LineGraphCD = {
    labels: lineLabels,
    datasets: [
      {
        label: "Дээд даралт",
        data: HighPressureRightData,
        borderColor: ["#c51ceb"],
        backgroundColor: "#c51ceb",
        borderWidth: 1,
      },
      {
        label: "Доод даралт",
        data: LowPressureRightData,
        borderColor: ["#2596be"],
        backgroundColor: "#2596be",
        borderWidth: 1,
      },
      {
        label: "Халуун",
        data: tempData,
        borderColor: ["#000000"],
        backgroundColor: "#000000",
        borderWidth: 2,
      },
    ],
  };
  //
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-full xl:w-1/2">
          <div className="p-4">
            <Line options={vsOptions} data={LineGraphVS} />
          </div>
        </div>
        <div className="w-full md:w-full xl:w-1/2">
          <div className="p-4">
            <Line options={CDOptions} data={LineGraphCD} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-full xl:w-1/2">
          <div className="table-responsive p-4" id="style-8">
            <Table className="ant-border-space" style={{ width: "100%" }}>
              <thead className="ant-table-thead bg-slate-200">
                <tr>
                  <th className="font-medium text-x">Систол</th>
                  <th className="font-medium text-x border-x">Диастол</th>
                  <th className="font-medium text-x border-x">Жин</th>
                  <th className="font-medium text-x border-x">Өндөр</th>
                  <th className="font-medium text-x border-x">Халуун</th>
                  <th className="font-medium text-x border-x">Амьсгал</th>
                  <th className="font-medium text-x border-x">SpO'2</th>
                  <th className="font-medium text-x border-x">Пульс</th>
                  <th className="font-medium text-x">
                    <div className="whitespace-normal">Ухаан санаа</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {patientAssesments &&
                  patientAssesments.map((element, index) => (
                    <tr key={index}>
                      <td className="text-center px-0">
                        <Input
                          value={element.highPressureRight || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="highPressureRight"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          value={element.lowPressureRight || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="lowPressureRight"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          value={element.weight || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="weight"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          value={element.height || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="height"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          value={element.temp || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="temp"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          value={element.respiratoryRate || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="respiratoryRate"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          value={element.spO2 || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="spO2"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Input
                          value={element.pulse || ""}
                          className="p-1 h-7 rounded-md text-center"
                          name="pulse"
                          disabled
                        />
                      </td>
                      <td className="text-center">
                        <Select
                          defaultValue="lucy"
                          style={{
                            width: 120,
                          }}
                          value={element.mind}
                          className="p-1 h-7 inline-table"
                          name="mind"
                          disabled
                        >
                          <Option value="A">A</Option>
                          <Option value="V,P,U">V,P,U</Option>
                        </Select>
                      </td>
                    </tr>
                  ))}
                <tr className="">
                  <td className="text-center">
                    <Input
                      value={formValues.highPressureRight || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="highPressureRight"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Input
                      value={formValues.lowPressureRight || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="lowPressureRight"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Input
                      value={formValues.weight || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="weight"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Input
                      value={formValues.height || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="height"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Input
                      value={formValues.temp || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="temp"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Input
                      value={formValues.respiratoryRate || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="respiratoryRate"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Input
                      value={formValues.spO2 || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="spO2"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Input
                      value={formValues.pulse || ""}
                      onChange={(e) => handleChange(e)}
                      className="p-1 h-7 rounded-md text-center"
                      name="pulse"
                      type="number"
                    />
                  </td>
                  <td className="text-center">
                    <Select
                      defaultValue="choose"
                      style={{
                        width: 120,
                      }}
                      onChange={(e) => handleChange(e, "mind")}
                      value={formValues.mind}
                      className="p-1 h-7 inline-table"
                      name="mind"
                    >
                      <Option value="choose">Сонгох</Option>
                      <Option value="A">A</Option>
                      <Option value="V,P,U">V,P,U</Option>
                    </Select>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="w-full md:w-full xl:w-1/2">
          <div className="table-responsive p-4" id="style-8">
            <Table className="ant-border-space" style={{ width: "100%" }}>
              <thead className="ant-table-thead bg-slate-200">
                <tr>
                  <th className="font-medium text-xs text-black text-center">
                    Огноо/цаг/
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">
                    Систол
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">
                    Халуун
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">
                    Амьсгал
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">
                    SpO'2
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">
                    Пульс
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">
                    <div className="whitespace-normal">Ухаан санаа</div>
                  </th>
                  <th className="font-medium text-xs text-black text-center border-x">
                    <div className="whitespace-normal">Нийт</div>
                  </th>
                  <th className="font-medium text-xs text-black text-center">
                    Сувилагч
                  </th>
                </tr>
              </thead>
              <tbody>
                {patientAssesmentsResult &&
                  patientAssesmentsResult.map((element, index) => (
                    <tr key={index} className="">
                      <td className="text-center ">
                        <p className="border rounded-md p-1 h-7">
                          {moment(element.createdAt).format("YYYY-MM-DD HH:mm")}
                        </p>
                      </td>
                      <td className="text-center ">
                        <p
                          className="border rounded-md p-1 h-7"
                          style={{
                            backgroundColor: element.colorSystolews ?? "#fff",
                          }}
                        >
                          {element.systolEWS}
                        </p>
                      </td>
                      <td className="text-center">
                        <p
                          className="border rounded-md p-1 h-7"
                          style={{
                            backgroundColor: element.colorTempews ?? "#fff",
                          }}
                        >
                          {element.temEWS}
                        </p>
                      </td>
                      <td className="text-center">
                        <p
                          className="border rounded-md p-1 h-7"
                          style={{
                            backgroundColor:
                              element.colorRespiratoryews ?? "#fff",
                          }}
                        >
                          {element.respiratoryEWS}
                        </p>
                      </td>
                      <td className="text-center">
                        <p
                          className="border rounded-md p-1 h-7"
                          style={{
                            backgroundColor: element.colorSpoews ?? "#fff",
                          }}
                        >
                          {element.spoEWS}
                        </p>
                      </td>
                      <td className="text-center">
                        <p
                          className="border rounded-md p-1 h-7"
                          style={{
                            backgroundColor: element.colorPulsews ?? "#fff",
                          }}
                        >
                          {element.pulsEWS}
                        </p>
                      </td>
                      <td className="text-center">
                        <p
                          className="border rounded-md p-1 h-7"
                          style={{
                            backgroundColor: element.colorMindews ?? "#fff",
                          }}
                        >
                          {element.mindEWS}
                        </p>
                      </td>
                      <td className="text-center">
                        <p
                          className="border rounded-md p-1 h-7"
                          style={{
                            backgroundColor: element.colorTotal ?? "#fff",
                          }}
                        >
                          {element.totalEWS}
                        </p>
                      </td>
                      <td className="text-center">
                        <p>Б.Намуунцэлмэг</p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Row gutter={[8, 8]}>
        <Col span={12} className="border-r-4">
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => createAssesment()}
            style={{ backgroundColor: blue.primary }}
            className="float-right mt-2"
          >
            Хадгалах
          </Button>
        </Col>
        <Col span={12}></Col>
      </Row>
    </>
  );
}
