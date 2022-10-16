import React, { useState } from "react";
import { Collapse, Row, Button, Form } from "antd";
import { blue } from "@ant-design/colors";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step1 from "./Step1";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";

export default function HistoryTab() {
  const { Panel } = Collapse;
  const token = useSelector(selectCurrentToken);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const [validHistory, setValidHistory] = useState(false);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setValidHistory(false);
  };

  const saveHistory = (values) => {
    console.log("save History values Success: ", values);
    values["patientId"] = 43;
    axios({
      method: "post",
      url: `${DEV_URL}emr/patient-history`,
      params: {
        patientId: 43,
      },
      data: values,
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("response error", error.response);
      });
  };

  return (
    <Form
      name="basic"
      onFinish={saveHistory}
      initialValues={{ remember: true }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelAlign="left"
      scrollToFirstError
    >
      <Row className="mt-2">
        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => validHistory && saveHistory()}
            style={{ backgroundColor: blue.primary }}
          >
            EMR Хадгалах
          </Button>
        </Form.Item>
      </Row>
      <Collapse accordion defaultActiveKey={["1"]}>
        <Panel header="Төрөлт, өсөлт бойжилт" key="1">
          <Step1 />
        </Panel>
        <Panel header="Өвчний түүх" key="2">
          <Step2 />
        </Panel>
        <Panel header="Амьдралын хэв маяг" key="3">
          <Step3 />
        </Panel>
        <Panel header="Амьдралын нөхцөл" key="14">
          <Step4 />
        </Panel>
        <Panel header="Харшил" key="5">
          <Step5 />
        </Panel>
        <Panel header="Эмийн хэрэглээ" key="6">
          <Step6 />
        </Panel>
        <Panel header="Тархвар зүйн асуумж" key="7">
          <Step7 />
        </Panel>
        <Panel header="Удамшлын асуумж" key="8">
          <Step8 />
        </Panel>
      </Collapse>
    </Form>
  );
}
