import React, { useCallback, useState, useEffect } from "react";
import { Tabs, Row, Button, Form, Divider } from "antd";
import GeneralInspection from "../GeneralInspection";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import axios from "axios";
import { blue } from "@ant-design/colors";
import DynamicFormInspection from "../../DynamicFormInspection";
import HistoryTab from "./HistoryTab";

export default function MainPatientHistory() {
  const [form] = Form.useForm();
  const [tabs, setTabs] = useState([]);
  const [validStep, setValidStep] = useState(false);

  const token = useSelector(selectCurrentToken);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  useEffect(() => {
    getInspectionTabs();
  }, []);

  const Tab1Content = useCallback(() => {
    return <HistoryTab />;
  }, []);
  const Tab2Content = useCallback(() => {
    return <GeneralInspection />;
  }, []);

  const DynamicTabContent = useCallback((props) => {
    return (
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={saveDynamicTab}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="left"
        scrollToFirstError
        form={form}
      >
        {"pain" in props.data && props.data.pain.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Зовиур
            </Divider>
            <DynamicFormInspection data={props.data["pain"]} />
          </>
        ) : null}
        {"inspection" in props.data && props.data.inspection.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Үзлэг
            </Divider>
            <DynamicFormInspection data={props.data["inspection"]} />
          </>
        ) : null}
        {"question" in props.data && props.data.question.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Асуумж
            </Divider>
            <DynamicFormInspection data={props.data["question"]} />
          </>
        ) : null}
        {"plan" in props.data && props.data.plan.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Төлөвлөгөө
            </Divider>
            <DynamicFormInspection data={props.data["plan"]} />
          </>
        ) : null}

        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Row className="mt-2">
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => validStep && saveDynamicTab()}
              style={{ backgroundColor: blue.primary }}
            >
              Хадгалах
            </Button>
          </Row>
        </Form.Item>
      </Form>
    );
  }, []);

  const saveDynamicTab = (values) => {
    console.log("saveDynamicTab values: ", values);
    axios({
      method: "post",
      url: `${DEV_URL}emr/inspectionNote`,
      data: {
        bookingId: 99,
        departmentId: 55,
        patientId: 43,
        pain: JSON.stringify(values["pain"]),
        question: JSON.stringify(values["question"]),
        inspection: JSON.stringify(values["inspection"]),
        plan: JSON.stringify(values["plan"]),
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("saveDynamicTab response", response);
      })
      .catch(function (error) {
        console.log("saveDynamicTab response error", error.response);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setValidStep(false);
  };
  const [items, setItems] = useState([
    {
      label: "Өвчтөний түүх",
      key: "item-history",
      children: <Tab1Content />,
    },
    {
      label: "Ерөнхий үзлэг",
      key: "item-general-inspection",
      children: <Tab2Content />,
    },
  ]);
  const getInspectionTabs = () => {
    //Тухайн эмчид харагдах TAB ууд
    axios({
      method: "get",
      url: `${DEV_URL}emr/inspection-form`,
      params: {
        structureId: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("res getInspectionTabs", response.data.response.data);
        setTabs(response.data.response.data);
      })
      .catch(function (error) {
        // console.log("response error", error.response);
      });
  };

  useEffect(() => {
    //Тухайн эмчид харагдах TAB уудыг харуулах
    tabs?.map((el) => {
      setItems((items) => [
        ...items,
        {
          label: el.name,
          key: `item-${el.id}`,
          children: <DynamicTabContent data={el.formItem} />,
        },
      ]);
    });
  }, [tabs]);

  return <Tabs items={items} />;
}
