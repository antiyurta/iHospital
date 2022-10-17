import {
  Button,
  Card,
  Col,
  Collapse,
  Divider,
  Input,
  Modal,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { blue } from "@ant-design/colors";
import { INPUT_HEIGHT } from "../../../constant";
import TextArea from "antd/lib/input/TextArea";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

export default function FormModal(props) {
  const [validForm, setValidForm] = useState(false);
  const { Option } = Select;
  const { Text } = Typography;
  const { Panel } = Collapse;
  const handleOk = () => {
    console.log("OK");
    props.close(false);
  };
  const handleCancel = () => {
    console.log("CANCEL");
    props.close(false);
  };

  const [painData, setPainData] = useState([
    {
      inspectionType: "",
      inspectionFormId: 1,
      type: "",
      key: "",
      label: "",
      order: 3,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);
  const [inspectionData, setInspectionData] = useState([
    {
      inspectionType: "",
      inspectionFormId: 1,
      type: "",
      key: "",
      label: "",
      order: 3,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);
  const [questionData, setQuestionData] = useState([
    {
      inspectionType: "",
      inspectionFormId: 1,
      type: "",
      key: "",
      label: "",
      order: 3,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);
  const [planData, setPplanData] = useState([
    {
      inspectionType: "",
      inspectionFormId: 1,
      type: "",
      key: "",
      label: "",
      order: 3,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);

  // Хариулт нэмэх
  const addOption = (type, main_index) => {
    setPainData(
      painData.map((elem, index) => {
        return index === main_index
          ? {
              ...elem,
              options: [
                ...elem.options,
                {
                  value: "",
                  label: "",
                },
              ],
            }
          : elem;
      })
    );
  };

  // Хариулт устгах
  const removeOption = (type, data, main_index, index) => {
    // type==pain, inspec, plan
    console.log("REMOVE", type, data, main_index, index);
    var array = [...painData]; // make a separate copy of the array
    array.options.splice(index, 1);
    // setOptions(array);
  };

  // Хариулт onChange
  const updateState = (type, index) => (e) => {
    const newArray = painData[index].options.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    // setOptions(newArray);
  };

  // Талбарын төрөл
  const handleChangeType = (type, param, index) => (e) => {
    var value = "";
    const newArray = painData.map((item, i) => {
      param === "type" ? (value = e) : (value = e.target.value); //Select үед зөвхөн e -д утга байгаа, Input бол e.target.value -д байгаа
      if (index === i) {
        return { ...item, [param]: value };
      } else {
        return item;
      }
    });
    setPainData(newArray);
  };

  useEffect(() => {
    console.log("painData", painData);
  }, [painData]);

  // Талбар Нэмэх
  const addParam = (type) => {
    setPainData((items) => [
      ...items,
      {
        inspectionType: "",
        inspectionFormId: 1,
        type: "",
        key: "",
        label: "",
        order: 3,
        options: [
          {
            value: "",
            label: "",
          },
        ],
      },
    ]);
  };
  // Талбар устгах
  const removeParam = (type, data, index) => {
    // type==pain, inspec, plan
    console.log("REMOVE", type, data, index);
    var array = [...painData]; // make a separate copy of the array
    array.splice(index, 1);
    setPainData(array);
  };
  const inputType = [
    { code: "input", label: "input" },
    { code: "textarea", label: "textarea" },
    { code: "date", label: "date" },
    { code: "radio", label: "radio" },
    { code: "checkbox", label: "checkbox" },
    { code: "editor", label: "editor" },
    { code: "dropdown", label: "dropdown" },
  ];
  const groupType = [
    { code: "pain", label: "Зовиур" },
    { code: "inspection", label: "Үзлэг" },
    { code: "question", label: "Асуумж" },
    { code: "plan", label: "Төлөвлөгөө" },
  ];
  return (
    <Modal
      title={props.type === "add" ? "Форм нэмэх" : "Форм засах"}
      open={props.show}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Хаах
        </Button>,
        <Button
          key="save"
          type="primary"
          onClick={handleOk}
          style={{ backgroundColor: blue.primary }}
        >
          Хадгалах
        </Button>,
      ]}
    >
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Row gutter={[8, 8]} className="items-center">
            <Col span={6}>
              <Text className="mr-2">Structure</Text>
            </Col>
            <Col span={8}>
              <Select
                defaultValue="lucy"
                style={{
                  width: 200,
                }}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[8, 8]} className="items-center">
            <Col span={4}>
              <Text className="mr-2">Нэр</Text>
            </Col>
            <Col span={16}>
              <Input
                size="small"
                style={{
                  minHeight: INPUT_HEIGHT,
                  padding: 5,
                  height: INPUT_HEIGHT,
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Collapse accordion className="mt-2">
        <Panel header="Зовиур" key="1">
          <Row>
            <Col span={24}>
              <Button
                key="save"
                type="primary"
                style={{ backgroundColor: blue.primary }}
                onClick={() => addParam("pain")}
              >
                Нэмэх
              </Button>
            </Col>
          </Row>
          {painData &&
            painData?.map((el, data_index) => {
              return (
                <Card
                  style={{
                    width: "100%",
                    marginTop: 10,
                  }}
                  key={data_index}
                  bodyStyle={{ padding: 10 }}
                >
                  <Row className="items-center">
                    <Col span={7}>
                      <Row gutter={[8, 8]} className="items-center">
                        <Col span={6}>
                          <Text className="mr-2">Төрөл</Text>
                        </Col>
                        <Col span={14}>
                          <Select
                            style={{
                              width: 150,
                            }}
                            value={el.type}
                            onChange={handleChangeType(
                              "pain",
                              "type",
                              data_index
                            )}
                          >
                            {inputType.map((el, index) => {
                              return (
                                <Option value={el.code} key={index}>
                                  {el.label}
                                </Option>
                              );
                            })}
                          </Select>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={7}>
                      <Row gutter={[8, 8]} className="items-center">
                        <Col span={7}>
                          <Text className="mr-2">Асуулт</Text>
                        </Col>
                        <Col span={16}>
                          <Input
                            size="small"
                            style={{
                              minHeight: INPUT_HEIGHT,
                              padding: 5,
                              height: INPUT_HEIGHT,
                            }}
                            value={painData.label}
                            onChange={handleChangeType(
                              "pain",
                              "label",
                              data_index
                            )}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={7}>
                      <Row gutter={[8, 8]} className="items-center">
                        <Col span={6}>
                          <Text className="mr-2">Key</Text>
                        </Col>
                        <Col span={14}>
                          <Input
                            size="small"
                            style={{
                              minHeight: INPUT_HEIGHT,
                              padding: 5,
                              height: INPUT_HEIGHT,
                            }}
                            value={painData.key}
                            onChange={handleChangeType(
                              "pain",
                              "key",
                              data_index
                            )}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={3}>
                      <Row gutter={[8, 8]} className="items-center">
                        <Col span={14}>
                          <Text className="mr-2">Эрэмбэ</Text>
                        </Col>
                        <Col span={8}>
                          <Input
                            size="small"
                            style={{
                              minHeight: INPUT_HEIGHT,
                              padding: 5,
                              height: INPUT_HEIGHT,
                            }}
                            value={painData.order}
                            onChange={handleChangeType(
                              "pain",
                              "order",
                              data_index
                            )}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {["radio", "checkbox", "dropdown"].includes(
                    painData[data_index].type
                  ) &&
                    el?.options?.map((el, index) => {
                      return (
                        <Row className="mt-2" key={index}>
                          <Col span={7}>
                            <Row gutter={[8, 8]} className="items-center">
                              <Col span={6}>
                                <Text className="mr-2">Key</Text>
                              </Col>
                              <Col span={14}>
                                <Input
                                  size="small"
                                  style={{
                                    minHeight: INPUT_HEIGHT,
                                    padding: 5,
                                    height: INPUT_HEIGHT,
                                  }}
                                  name="value"
                                  value={el.value}
                                  onChange={updateState(
                                    "pain",
                                    data_index,
                                    index
                                  )}
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col span={8}>
                            <Row gutter={[8, 8]} className="items-center">
                              <Col span={6}>
                                <Text className="mr-2">Хариулт</Text>
                              </Col>
                              <Col span={14}>
                                <Input
                                  size="small"
                                  style={{
                                    minHeight: INPUT_HEIGHT,
                                    padding: 5,
                                    height: INPUT_HEIGHT,
                                  }}
                                  name="label"
                                  value={el.label}
                                  onChange={updateState(
                                    "pain",
                                    data_index,
                                    index
                                  )}
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col span={2}>
                            <Row gutter={[8, 8]} className="items-center">
                              <Button
                                shape="circle"
                                size="small"
                                className="grid items-center"
                                onClick={() =>
                                  removeOption("pain", el, data_index, index)
                                }
                              >
                                <DeleteOutlined />
                              </Button>
                            </Row>
                          </Col>
                        </Row>
                      );
                    })}
                  {["radio", "checkbox", "dropdown"].includes(
                    painData[data_index].type
                  ) ? (
                    <Button
                      size="small"
                      className="grid items-center mt-2"
                      onClick={() => addOption("pain", data_index)}
                      type="primary"
                      style={{ backgroundColor: blue.primary }}
                    >
                      Хариулт нэмэх
                    </Button>
                  ) : null}
                  <Button
                    danger
                    size="small"
                    className="grid items-center float-right mt-2"
                    onClick={() => removeParam("pain", el, data_index)}
                  >
                    Устгах
                  </Button>
                </Card>
              );
            })}
        </Panel>
      </Collapse>
    </Modal>
  );
}
