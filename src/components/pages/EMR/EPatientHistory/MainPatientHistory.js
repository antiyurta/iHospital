import React, { useCallback, useState, useEffect } from "react";
import { Tabs, Row, Button, Form, Divider, Select, Table, Modal, Result } from "antd";
import GeneralInspection from "../GeneralInspection";
import { useSelector } from "react-redux";
import { selectCurrentDepId, selectCurrentToken, selectCurrentUserId } from "../../../../features/authReducer";
import { blue } from "@ant-design/colors";
import DynamicFormInspection from "../../DynamicFormInspection";
import HistoryTab from "./HistoryTab";
import { Get, openNofi, Patch, Post } from "../../../comman";
import Diagnose from "../../service/Diagnose";
// import { Table } from "react-bootstrap";
import { CloseOutlined } from "@ant-design/icons";
const { Option } = Select;
function MainPatientHistory({ AppointmentId, XrayRequestId, PatientId, CabinetId, Inspection, handleClick }) {
  const [form] = Form.useForm();
  const [tabs, setTabs] = useState([]);
  const [validStep, setValidStep] = useState(false);
  const token = useSelector(selectCurrentToken);
  const depId = useSelector(selectCurrentDepId);
  const userId = useSelector(selectCurrentUserId);
  const config = {
    headers: {},
    params: {}
  }
  const patientId = PatientId;
  const inspection = Inspection;
  const cabinetId = CabinetId;
  const appointmentId = AppointmentId;
  const xrayRequestId = XrayRequestId;
  const [confirmModal, setConfirmModal] = useState(false);

  const DiagnoseHandleClick = (diagnoses) => {
    form.setFieldValue('diagnose', diagnoses);
  };
  const Tab1Content = useCallback(() => {
    return <HistoryTab patientId={patientId} inspection={inspection} />;
  }, []);
  const Tab2Content = useCallback(() => {
    return <GeneralInspection patientId={patientId} inspection={inspection} />;
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
        className="overflow-auto"
        layout="vertical"
        form={form}
      >
        {"pain" in props.data && props.data.pain.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Зовиур
            </Divider>
            {
              props.data['pain'].map((pain, index) => {
                return (
                  <div key={index}>
                    {
                      inspection === 1 && <div>
                        <p className="mt-2 font-semibold">{pain.label}</p>
                        <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                      </div>
                    }
                    <div>
                      <DynamicFormInspection data={pain.options} forkey={pain.label} unikey={pain.inspectionType} />
                    </div>
                  </div>
                )
              })
            }
          </>
        ) : null
        }
        {"inspection" in props.data && props.data.inspection.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Бодит үзлэг
            </Divider>
            {
              props.data['inspection'].map((inspection, index) => {
                return (
                  <div key={index}>
                    {
                      inspection === 1 && <div>
                        <p className="mt-2 font-semibold">{inspection.label}</p>
                        <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                      </div>
                    }
                    <div>
                      <DynamicFormInspection data={inspection.options} forkey={inspection.label} unikey={inspection.inspectionType} />
                    </div>
                  </div>
                )
              })
            }
          </>
        ) : null}
        {"question" in props.data && props.data.question.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Асуумж
            </Divider>
            {
              props.data['question'].map((question, index) => {
                return (
                  <div key={index}>
                    {
                      inspection === 1 && <div>
                        <p className="mt-2 font-semibold">{question.label}</p>
                        <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                      </div>
                    }
                    <div>
                      <DynamicFormInspection data={question.options} forkey={question.label} unikey={question.inspectionType} />
                    </div>
                  </div>
                )
              })
            }
          </>
        ) : null}
        {"plan" in props.data && props.data.plan.length > 0 ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Төлөвлөгөө
            </Divider>
            {
              props.data['plan'].map((plan, index) => {
                return (
                  <div key={index}>
                    {
                      inspection === 1 && <div>
                        <p className="mt-2 font-semibold">{plan.label}</p>
                        <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                      </div>
                    }
                    <div>
                      <DynamicFormInspection data={plan.options} forkey={plan.label} unikey={plan.inspectionType} />
                    </div>
                  </div>
                )
              })
            }
          </>
        ) : null}
        {"conclusion" in props.data && props.data.conclusion.length > 0 ? (
          <>
            {
              props.data['conclusion'].map((conclusion, index) => {
                return (
                  <div key={index}>
                    {
                      inspection === 1 && <div>
                        <p className="mt-2 font-semibold">{conclusion.label}</p>
                        <hr className="m-2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
                      </div>
                    }
                    <div>
                      <DynamicFormInspection data={conclusion.options} forkey={conclusion.label} unikey={conclusion.inspectionType} />
                    </div>
                  </div>
                )
              })
            }
          </>
        ) : null}
        {props.data ? (
          <>
            <Divider orientation="left" className="text-sm my-2">
              Онош
            </Divider>
            <Diagnose handleClick={DiagnoseHandleClick} />
          </>
        ) : null}
        < Form.Item
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
              EMR хадгалах
            </Button>
          </Row>
        </Form.Item >
      </Form >
    );
  }, []);

  const saveDynamicTab = async (values) => {
    const data = {
      cabinetId: cabinetId,
      patientId: patientId,
      doctorId: userId,
      diagnose: JSON.stringify(values['diagnose']),
    }
    if (inspection === 11) {
      data['xrayRequestId'] = xrayRequestId;
      data['conclusion'] = JSON.stringify(values['conclusion']);
    } else {
      data['appointmentId'] = appointmentId;
      data['pain'] = JSON.stringify(values["pain"]);
      data['question'] = JSON.stringify(values["question"]);
      data['inspection'] = JSON.stringify(values["inspection"]);
      data['plan'] = JSON.stringify(values["plan"]);
    }
    const response = await Post('emr/inspectionNote', token, config, data);
    if (response === 201) {
      if (inspection === 11) {
        Patch('service/xrayRequest/' + XrayRequestId, token, config, { xrayProcess: 2 })
      } else {
        setConfirmModal(true);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setValidStep(false);
  };
  const [items, setItems] = useState([
    {
      label: "Амьдралын түүх",
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
      response?.data?.map((el) => {
        setItems((items) => [
          ...items,
          {
            label: el.name,
            key: `item-${el.id}`,
            children: <DynamicTabContent data={el.formItem} />,
          },
        ]);
      });
    }
    config.params.cabinetId = null;
  };
  const defualtForm = {
    pain: [
      {
        label: "Зовиур",
        options: [
          {
            type: "textarea",
            value: "Зовиур"
          }
        ],
        inspectionType: "pain"
      }
    ],
    question: [
      {
        label: "Бодит үзлэг",
        options: [
          {
            type: "textarea",
            value: "Бодит үзлэг"
          }
        ],
        inspectionType: "question"
      }
    ],
    inspection: [
      {
        label: "Асуумж",
        options: [
          {
            type: "textarea",
            value: "Асуумж"
          }
        ],
        inspectionType: "inspection"
      }
    ],
    plan: [
      {
        label: "Төлөвлөгөө",
        options: [
          {
            type: "textarea",
            value: "Төлөвлөгөө"
          }
        ],
        inspectionType: "Төлөвлөгөө"
      }
    ],
  };
  const xrayDefualtForm = {
    conclusion: [
      {
        label: "Дүгнэлт",
        options: [
          {
            type: "textarea",
            value: "Дүгнэлт"
          }
        ],
        inspectionType: "conclusion"
      }
    ],
  };
  const getDefualtTab = () => {
    setItems([{
      label: "Асуумж",
      key: `item-second`,
      children: <DynamicTabContent data={defualtForm} />,
    }]);
  };
  const getXrayDefualtTab = () => {
    setItems([{
      label: "Дүгнэлт",
      key: `item-xray`,
      children: <DynamicTabContent data={xrayDefualtForm} />,
    }]);
  };
  useEffect(() => {
    if (inspection === 1) {
      getInspectionTabs();
    } else if (inspection === 2) {
      getDefualtTab();
    } else if (inspection === 11) {
      getXrayDefualtTab();
    }
  }, []);
  return (
    <>
      <Tabs type="card" items={items} />
      <Modal
        open={confirmModal}
        onCancel={() => setConfirmModal(false)}
        footer={null}
      >
        <Result
          status="success"
          title="EMR амжилттай хадгалагдлаа та ОCS руу шилжих үү"
          // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console" onClick={() => handleClick({ target: { value: 'OCS' } })}>Тийм</Button>,
            <Button onClick={() => setConfirmModal(false)}>Үгүй</Button>,
          ]}
        />
      </Modal>
    </>
  );
}
export default MainPatientHistory;