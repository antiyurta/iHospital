import { useEffect, useState, useRef } from "react";
import {
  Button,
  Input,
  InputNumber,
  Modal,
  Collapse,
  Col,
  Row,
  Radio,
  Divider,
  TimePicker,
  Spin,
  DatePicker,
  Select,
} from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, Post } from "../../../comman";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
const { RangePicker } = DatePicker;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function BST() {
  const token = useSelector(selectCurrentToken);
  const [unitList, setUnitList] = useState([]);

  const filterAppointment = async (value, dateString) => {};
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "BTS -ын диаграмм",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 2",
        data: [1, 2, 3, 4, 4, 54, 664, 64, 5, 45, 45, 4],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const getUnitList = async () => {
    setUnitList([]);
    // conf.params.patientId = PatientId;
    // const response = await Get("inpatient/pain-assesment", token, conf);
    // console.log("Res", response);
    // if (response.data.length != 0) {
    // setUnitList(response.data);
    // }
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full p-1">
          <div className="float-left">
            <RangePicker onChange={filterAppointment} locale={mnMN} />
          </div>
        </div>
        <div className="w-full p-1">
          <Row className="mt-2">
            <Col span={12}>
              <Line options={options} data={data} />
            </Col>
            <Col span={12}>
              <table
                style={{
                  borderWidth: "1px",
                  borderColor: "#aaaaaa",
                  borderStyle: "solid",
                  width: "100%",
                }}
                className="border-collapse border border-slate-300"
              >
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-1">Огноо</td>
                    <td className="border border-slate-300 p-1">Хэмжсэн цаг</td>
                    <td className="border border-slate-300 p-1">
                      Сахарын хэмжээ
                    </td>
                    <td className="border border-slate-300 p-1">Нэгж</td>
                    <td className="border border-slate-300 p-1">
                      Хэзээ / хоолны
                    </td>
                    <td className="border border-slate-300 p-1">Суваг</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-1">DATA</td>
                    <td className="border border-slate-300 p-1">DATA</td>
                    <td className="border border-slate-300 p-1">DATA</td>
                    <td className="border border-slate-300 p-1">
                      {/* <Select
                                allowClear
                                style={{
                                  width: 200,
                                }}
                                onChange={handleChangeTransfer}
                                value={selectedDep || undefined}
                                options={department}
                                placeholder="Сонгох"
                              /> */}
                    </td>
                    <td className="border border-slate-300 p-1">DATA</td>
                    <td className="border border-slate-300 p-1">DATA</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BST;
