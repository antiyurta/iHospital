import React, { useCallback, useState, useEffect } from "react";
import { Tabs, Row, Button, Form, Divider, Col } from "antd";
import GeneralInspection from "../GeneralInspection";
import { useSelector } from "react-redux";
import { selectCurrentDepId, selectCurrentToken, selectCurrentUserId } from "../../../../features/authReducer";
import axios from "axios";
import { blue } from "@ant-design/colors";
import DynamicFormInspection from "../../DynamicFormInspection";
import HistoryTab from "./HistoryTab";
import { openNofi, Post } from "../../../comman";
import TextArea from "antd/lib/input/TextArea";
function MainPatientHistory({ PatientId }) {
  const [form] = Form.useForm();
  const [tabs, setTabs] = useState([]);
  const [validStep, setValidStep] = useState(false);
  const token = useSelector(selectCurrentToken);
  const depId = useSelector(selectCurrentDepId);
  const userId = useSelector(selectCurrentUserId)
  const config = {
    headers: {},
    params: {}
  }
  const id = PatientId;
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
        {
          <>
            <Divider orientation="left" className="text-sm my-2">
              Онош
            </Divider>
            <Row align="middle" className="mb-1">
              <Col span={24} className="text-left">
                <Form.Item
                  label=""
                  name={["diagnose", "sadsad", "ASdsad"]}
                  rules={[{ required: false, message: "" }]}
                  className="mb-0"
                  wrapperCol={{
                    span: 24,
                  }}
                  labelCol={{
                    span: 8,
                  }}
                >
                  <TextArea
                    rows={2}
                    style={{ padding: 5, marginBottom: 5 }}
                    placeholder={"asda"}
                  />
                </Form.Item>
              </Col>
            </Row>
          </>
        }
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

  const saveDynamicTab = async (values) => {
    console.log(values);
    const data = {
      bookingId: 1,
      departmentId: depId,
      patientId: id,
      doctorId: userId,
      pain: JSON.stringify(values["pain"]),
      question: JSON.stringify(values["question"]),
      inspection: JSON.stringify(values["inspection"]),
      plan: JSON.stringify(values["plan"]),
    }
    console.log(data);
    await Post('emr/inspectionNote', token, config, data);
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
  const getInspectionTabs = async () => {
    //Тухайн эмчид харагдах TAB ууд
    await axios({
      method: "get",
      url: `${DEV_URL}emr/inspection-form`,
      params: {
        structureId: depId,
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
export default MainPatientHistory;