import {
  Button,
  Card,
  Col,
  Collapse,
  Input,
  Modal,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useState, useEffect } from "react";
import { blue, red } from "@ant-design/colors";
import { INPUT_HEIGHT } from "../../../constant";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import axios from "axios";
import { Get } from "../../comman";
const { TextArea } = Input;
export default function FormModal(props) {
  // console.log("prpops", props);
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const [formStructure, setFormStructure] = useState();
  const [formName, setFormName] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [saveError, setSaveError] = useState("");
  const [structures, setStructures] = useState([]);
  const { Option } = Select;
  const { Text } = Typography;
  const { Panel } = Collapse;
  useEffect(() => {
    //Form -г засах үед
    if (props.data !== null) {
      setFormStructure(props.data.id);
      setFormName(props.data.name);
      setFormTitle(props.data.title);
    } else {
      setFormStructure("");
      setFormName("");
      setFormTitle("");
    }
    getStructures();
  }, []);

  const getStructures = async () => {
    config.params.type = 2;
    const response = await Get('organization/structure', token, config);
    if (response.data.length != 0) {
      setStructures(response.data);
    }
  }

  const handleOk = () => {
    saveForm();
  };
  const handleCancel = () => {
    props.close(false);
  };

  const saveForm = () => {
    axios({
      method: props.type === "add" ? "post" : "patch", //Form -г засах үед
      url:
        props.type === "add"
          ? `${DEV_URL}emr/inspection-form`
          : `${DEV_URL}emr/inspection-form/${props.data?.id}`, //Form -г засах үед
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
      data: {
        ...(props.type === "edit" && { id: props.data?.id }), //Form -г засах үед
        structureId: formStructure,
        name: formName,
        title: formTitle,
        formItems: [
          ...props.formValue["pain"][0],
          ...props.formValue["inspection"][0],
          ...props.formValue["question"][0],
          ...props.formValue["plan"][0],
        ],
        // pains: props.formValue["pain"][0],
        // inspections: props.formValue["inspection"][0],
        // questions: props.formValue["question"][0],
        // plans: props.formValue["plan"][0],
      },
    })
      .then(async (response) => {
        console.log("response saveForm", response);
        props.callForm[1](!props.callForm[0]);
        props.close(false);
        setSaveError("");
      })
      .catch(function (error) {
        setSaveError("Бүрэн бөглөнө үү.");
        console.log("response error", error.response);
      });
  };

  // Хариулт нэмэх
  const addOption = (type, main_index) => {
    props.setFormValue[type](
      props.formValue[type][0]?.map((elem, index) => {
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
  const removeOption = (type, main_index, index) => {
    var arr = [...props.formValue[type][0][main_index].options];
    arr.splice(index, 1);
    props.setFormValue[type](
      props.formValue[type][0]?.map((elem, index) => {
        return index === main_index
          ? {
            ...elem,
            options: arr,
          }
          : elem;
      })
    );
  };

  // Хариулт onChange
  const updateState = (type, main_index, index) => (e) => {
    const arr = props.formValue[type][0]?.map((obj, i) => {
      if (i !== main_index) return obj;
      return {
        ...obj,
        options: obj.options?.map((opt, x) => {
          if (x !== index) return opt;
          return { ...opt, [e.target.name]: e.target.value };
        }),
      };
    });
    props.setFormValue[type](arr);
  };

  // Талбарын төрөл
  const handleChangeType = (type, param, index) => (e) => {
    var value = "";
    const tempArr = props.formValue[type][0]?.map((item, i) => {
      param === "type" ? (value = e) : (value = e.target.value); //Select үед зөвхөн e -д утга байгаа, Input бол e.target.value -д байгаа
      if (index === i) {
        return { ...item, [param]: value };
      } else {
        return item;
      }
    });
    props.setFormValue[type](tempArr);
  };

  // Талбар Нэмэх
  const addParam = (type) => {
    props.setFormValue[type]((items) => [
      ...items,
      {
        inspectionType: type,
        inspectionFormId: null,
        type: "",
        key: "",
        label: "",
        order: null,
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
  const removeParam = (type, index) => {
    var array = [...props.formValue[type][0]];
    array.splice(index, 1);
    props.setFormValue[type](array);
  };

  const deleteForm = (formId) => {
    axios({
      method: "delete",
      url: `${DEV_URL}emr/inspection-form/${props.data.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("response", response);
        props.close(false);
        props.callForm[1](!props.callForm[0]);
      })
      .catch(function (error) {
        console.log("response error", error.response);
      });
  };

  const inputType = [
    { code: "input", label: "input" },
    { code: "textarea", label: "textarea" },
    { code: "date", label: "date" },
    { code: "radio", label: "radio" },
    { code: "checkbox", label: "checkbox" },
    { code: "editor", label: "Editor" },
    { code: "dropdown", label: "dropdown" },
  ];
  return (
    <Modal
      title={props.type === "add" ? "Асуумж нэмэх" : "Асуумж засах"} //Form -г засах үед
      open={props.show}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      footer={[
        <Typography.Text
          key="error"
          color="error"
          className="p-1 text-danger mr-1"
        >
          {saveError}
        </Typography.Text>,
        <Button key="cancel" onClick={handleCancel}>
          Хаах
        </Button>,
        ...(props.data
          ? [
            <Button
              key="delete"
              type="danger"
              style={{ backgroundColor: red.primary }}
              onClick={() => deleteForm()}
            >
              Устгах
            </Button>,
          ]
          : []),
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
        <Col span={12}>
          <Row gutter={[8, 8]} className="items-center">
            <Col span={4}>
              <Text className="font-bold mr-2">Тасаг</Text>
            </Col>
            <Col span={20}>
              <Select
                style={{
                  width: '100%'
                }}
                value={formStructure}
                onChange={setFormStructure}
              >
                {
                  structures.map((structure, index) => {
                    return (
                      <Option key={index} value={structure.id}>{structure.name}</Option>
                    )
                  })
                }
              </Select>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={[8, 8]} className="items-center">
            <Col span={4}>
              <Text className="font-bold mr-2">Нэр</Text>
            </Col>
            <Col span={20}>
              <Input
                size="small"
                style={{
                  minHeight: INPUT_HEIGHT,
                  padding: 5,
                  height: INPUT_HEIGHT,
                }}
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]} className="items-center">
            <Col span={4}>
              <Text className="font-bold mr-2">Асуумж</Text>
            </Col>
            <Col span={20}>
              <TextArea value={formTitle} rows={4} onChange={(e) => setFormTitle(e.target.value)} />
            </Col>
          </Row>
        </Col>
      </Row>
      {Object.entries(props.formValue)?.map(([key, sectionValue], ident) => {
        return (
          <Collapse accordion className="mt-2" key={ident}>
            <Panel
              header={sectionValue[1]}
              key="1"
              size="small"
              className="p-0"
            >
              <Row>
                <Col span={24}>
                  <Button
                    key="save"
                    type="primary"
                    style={{ backgroundColor: blue.primary }}
                    onClick={() => addParam(key)}
                    size="small"
                  >
                    Талбар нэмэх
                  </Button>
                </Col>
              </Row>
              {sectionValue[0] &&
                sectionValue[0]?.map((main_element, data_index) => {
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
                                value={main_element.type}
                                onChange={handleChangeType(
                                  key,
                                  "type",
                                  data_index
                                )}
                              >
                                {inputType.map((input_type, index) => {
                                  return (
                                    <Option value={input_type.code} key={index}>
                                      {input_type.label}
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
                                value={main_element.label}
                                onChange={handleChangeType(
                                  key,
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
                              <Text className="mr-2">Түлхүүр</Text>
                            </Col>
                            <Col span={14}>
                              <Input
                                size="small"
                                style={{
                                  minHeight: INPUT_HEIGHT,
                                  padding: 5,
                                  height: INPUT_HEIGHT,
                                }}
                                value={main_element.key}
                                onChange={handleChangeType(
                                  key,
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
                                value={main_element.order}
                                onChange={handleChangeType(
                                  key,
                                  "order",
                                  data_index
                                )}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      {["radio", "checkbox", "dropdown"].includes(
                        sectionValue[0][data_index].type
                      ) ? (
                        <Card
                          style={{
                            width: "100%",
                            marginTop: 10,
                          }}
                          key={data_index}
                          bodyStyle={{ padding: 10 }}
                        >
                          {main_element?.options?.map((answer, index) => {
                            return (
                              <Row className="mt-2 items-center" key={index}>
                                <Col span={7}>
                                  <Row gutter={[8, 8]} className="items-center">
                                    <Col span={6}>
                                      <Text className="mr-2">Түлхүүр</Text>
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
                                        value={answer.value}
                                        onChange={updateState(
                                          key,
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
                                        value={answer.label}
                                        onChange={updateState(
                                          key,
                                          data_index,
                                          index
                                        )}
                                      />
                                    </Col>
                                  </Row>
                                </Col>
                                <Button
                                  shape="circle"
                                  size="small"
                                  className="grid items-center"
                                  onClick={() =>
                                    removeOption(key, data_index, index)
                                  }
                                >
                                  <DeleteOutlined />
                                </Button>
                              </Row>
                            );
                          })}
                          {["radio", "checkbox", "dropdown"].includes(
                            sectionValue[0][data_index].type
                          ) ? (
                            <Button
                              size="small"
                              className="grid items-center mt-2"
                              onClick={() => addOption(key, data_index)}
                              type="primary"
                              style={{ backgroundColor: blue.primary }}
                            >
                              Хариулт нэмэх
                            </Button>
                          ) : null}
                        </Card>
                      ) : null}
                      <Button
                        danger
                        size="small"
                        className="grid items-center float-right mt-2"
                        onClick={() => removeParam(key, data_index)}
                      >
                        Талбар устгах
                      </Button>
                    </Card>
                  );
                })}
            </Panel>
          </Collapse>
        );
      })}
    </Modal>
  );
}
