import React, { useCallback, useState, useEffect } from "react";
import { Tabs, Row, Button, Form, Divider, Select, Table, Modal } from "antd";
import GeneralInspection from "../GeneralInspection";
import { useSelector } from "react-redux";
import { selectCurrentDepId, selectCurrentToken, selectCurrentUserId } from "../../../../features/authReducer";
import { blue } from "@ant-design/colors";
import DynamicFormInspection from "../../DynamicFormInspection";
import HistoryTab from "./HistoryTab";
import { Get, openNofi, Post } from "../../../comman";
const { Option } = Select;
function MainPatientHistory({ PatientId, CabinetId, Inspection }) {
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
  const inspection = Inspection;
  const cabinetId = CabinetId;

  useEffect(() => {
    getInspectionTabs();
  }, []);

  const Tab1Content = useCallback(() => {
    return <HistoryTab patientId={id} inspection={inspection} />;
  }, []);
  const Tab2Content = useCallback(() => {
    return <GeneralInspection patientId={id} inspection={inspection} />;
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
        layout="vertical"
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
              Бодит үзлэг
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
        {props.data ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Онош
            </Divider>
            <DynamicFormInspection data={[{ type: 'diagnose', label: 'diagnose', inspectionType: "diagnose" }]} />
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
      diagnose: JSON.stringify(values['diagnose']),
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
    config.params.cabinetId = cabinetId;
    const response = await Get('emr/inspection-form', token, config);
    if (response.data.length > 0) {
      setTabs(response.data);
    }
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