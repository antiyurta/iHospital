//Амбулаторийн үзлэгийн өмнөх жагсаалт -> Эрт сэрэмжлүүлэх үнэлгээ
import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Space, Table } from "antd";
import { blue } from "@ant-design/colors";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";

export default function EarlyWarning() {
  const [formValues, setFormValues] = useState([
    {
      date: new Date().toLocaleString(),
      systole: "",
      diastole: "",
      weight: "",
      height: "",
      heat: "",
      breath: "",
      spo: "",
      pulse: "",
      wisdom: "",
      nurese: "",
    },
  ]);
  const { Option } = Select;
  let handleChange = (i, e, p) => {
    console.log("I", i);
    console.log("e", e);
    console.log("p", p);
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        date: new Date().toLocaleString(),
        systole: "",
        diastole: "",
        weight: "",
        height: "",
        heat: "",
        breath: "",
        spo: "",
        pulse: "",
        wisdom: "",
        nurese: "",
      },
    ]);
    console.log(JSON.stringify(formValues));
  };
  const columns = [
    {
      title: "Огноо/цаг/",
      dataIndex: "date",
      key: "date",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Систол",
      dataIndex: "systole",
      key: "systole",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Диастол",
      dataIndex: "diastole",
      key: "diastole",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Жин",
      dataIndex: "weight",
      key: "weight",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Өндөр",
      dataIndex: "height",
      key: "height",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Халуун",
      dataIndex: "heat",
      key: "heat",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Амьсгал",
      dataIndex: "breath",
      key: "breath",
      className: "bg-white",
      align: "center",
    },
    {
      title: "SpO'2",
      dataIndex: "spo",
      key: "spo",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Пульс",
      dataIndex: "pulse",
      key: "pulse",
      className: "bg-white",
      align: "center",
    },
    {
      title: <div className="whitespace-normal">Ухаан санаа</div>,
      dataIndex: "wisdom",
      key: "wisdom",
      className: "bg-white",
      align: "center",
    },
    {
      title: "Сувилагч",
      dataIndex: "nurse",
      key: "nurse",
      className: "bg-white",
      align: "center",
    },
  ];
  const resultData = [
    {
      key: "1",
      date: "2022-10-11 18:02:35",
      systole: "1",
      diastole: "1",
      weight: "1",
      height: "1",
      heat: "1",
      breath: "1",
      spo: "1",
      pulse: "1",
      wisdom: "V,P,U",
      nurse: "Б.Намуунцэлмэг",
    },
  ];
  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <table>
          <tbody>
            <tr className="">
              <th className="font-medium text-xs text-black  text-center py-3.5">
                Огноо/цаг/
              </th>
              <th className="font-medium text-xs text-black text-center">
                Диастол
              </th>
              <th className="font-medium text-xs text-black text-center">
                Диастол
              </th>
              <th className="font-medium text-xs text-black text-center">
                Жин
              </th>
              <th className="font-medium text-xs text-black text-center">
                Өндөр
              </th>
              <th className="font-medium text-xs text-black text-center">
                Халуун
              </th>
              <th className="font-medium text-xs text-black text-center">
                Амьсгал
              </th>
              <th className="font-medium text-xs text-black text-center">
                SpO'2
              </th>
              <th className="font-medium text-xs text-black text-center">
                Пульс
              </th>
              <th className="font-medium text-xs text-black text-center">
                <div className="whitespace-normal">Ухаан санаа</div>
              </th>
            </tr>
            {formValues.map((element, index) => (
              <tr key={index} className="border">
                <td className="text-center">{element.date}</td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.systole || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.diastole || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.weight || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.height || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.heat || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.breath || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.spo || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Input
                    style={{ width: "60%" }}
                    value={element.pulse || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 h-7 rounded-md"
                  />
                </td>
                <td className="text-center">
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: 120,
                    }}
                    onChange={(e) => handleChange(index, e, "wisdom")}
                    value={element.wisdom}
                    className="p-1 h-7 inline-table"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => addFormFields()}
          style={{ backgroundColor: blue.primary }}
        >
          Дараах
        </Button>
      </Col>
      <Col span={12}>
        <Table
          columns={columns}
          dataSource={resultData}
          pagination={false}
          sticky={false}
          size="small"
        />
      </Col>
    </Row>
  );
}
