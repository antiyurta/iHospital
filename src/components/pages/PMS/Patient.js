import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  InputNumber,
  Space,
  Col,
  Form,
  Input,
  Modal,
  Row,
  message,
  Upload,
  Typography,
  Switch,
  Select,
  Card,
  Descriptions,
  Pagination,
  DatePicker,
  Table,
} from "antd";
import {
  LoadingOutlined,
  UserOutlined,
  PlusOutlined,
  MinusCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
// import json
import ContactPerson from "./ContactPerson.json";
import SocialStatus from "./socialStatus.json";
import ChildStatus from "./childStatus.json";
import serviceScopeStatus from "./serviceScopeStatus.json";
//
import { Delete, Get, openNofi, Patch, ScrollRef } from "../../comman";
import axios from "axios";
import "moment/locale/mn";
import mn from "antd/es/calendar/locale/mn_MN";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import moment from "moment";

const { Search } = Input;
const { Option } = Select;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("JPEG or PNG");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("SMALLER 2MB !");
  }

  return isJpgOrPng && isLt2M;
};

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Patient() {
  const token = useSelector(selectCurrentToken);
  const [isGlobalDb, setIsGlobalDb] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [spinner, setSpinner] = useState(false);
  const [editMode, setEditMode] = useState(false);
  //
  const [isChild, setIsChild] = useState(true);
  //
  const [id, setId] = useState([]);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState([]);
  const [view, setView] = useState([]);
  //
  const [citizens, setCitizens] = useState([]);
  const [provices, setProvices] = useState([]);
  const [towns, setTowns] = useState([]);
  //
  const [form] = Form.useForm();
  const { Title } = Typography;
  const { Option } = Select;
  const scrollRef = useRef();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": API_KEY,
    },
    params: {
      page: 1,
      limit: 5,
    },
  };
  const onSearch = (value, index) => {
    config.params[index] = value;
    getData(1);
  };
  const handleChange = (info) => {
    console.log(info);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <UserOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        ?????????? ??????????????
      </div>
    </div>
  );
  const getData = async (page, pageSize, value, index) => {
    setSpinner(true);
    const conf = {
      headers: {},
      params: {
        page: page,
        limit: pageSize,
      }
    };
    if (value, index) {
      conf.params[index] = value;
    }
    const response = await Get('pms/patient', token, conf);
    setData(response.data);
    setMeta(response.meta);
    setSpinner(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
    form.resetFields();
    setEditMode(false);
  };
  const viewModal = async (id) => {
    await axios
      .get(DEV_URL + "pms/patient/" + id, config)
      .then((response) => {
        setView(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsViewModalVisible(true);
  };
  const editModal = async (id) => {
    await axios
      .get(DEV_URL + "pms/patient/" + id, config)
      .then((response) => {
        response.data.response["birthDay"] = moment(
          response.data.response["birthDay"]
        );
        filterTowns(response.data.response.aimagId);
        form.setFieldsValue(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
    setId(id);
    setEditMode(true);
    setIsModalVisible(true);
  };
  const deleteModal = (id) => {
    Modal.error({
      title: "????????????",
      okText: "????????????",
      closable: true,
      content: <div>???????????????? ???????????????????? ?????????? ?????????????????? ??????????</div>,
      async onOk() {
        await Delete("pms/patient/" + id, token, config);
        getData(1);
      },
    });
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (data) => {
    setIsConfirmLoading(true);
    if (isGlobalDb) {
      data.isGlobalDb = true;
    } else {
      data.isGlobalDb = false;
    }
    editMode
      ? await axios
        .patch(DEV_URL + "pms/patient/" + id, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-api-key": API_KEY,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            openNofi("success", "??????????????????", "?????????????????? ????????????????????????");
            getData(1);
            setIsConfirmLoading(false);
            setIsModalVisible(false);
          } else {
            openNofi("error", "adsads", "asdas");
            setIsConfirmLoading(false);
          }
        })
        .catch(() => {
          openNofi(
            "error",
            "?????????????????? ??????????",
            "???????????????? ?????????????????? ?????????????? ?????????? ???????????????? ????"
          );
        })
      : await axios
        .post(DEV_URL + "pms/patient", data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-api-key": API_KEY,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            openNofi("success", "??????????????????", "?????????????????? ????????????????????????");
            getData(1);
            setIsConfirmLoading(false);
            setIsModalVisible(false);
          } else {
            openNofi("error", "adsads", "asdas");
            setIsConfirmLoading(false);
          }
        })
        .catch(() => {
          setIsConfirmLoading(false);
          openNofi(
            "error",
            "?????????????????? ??????????",
            "???????????????? ?????????????????? ?????????????? ?????????? ???????????????? ????"
          );
        });
  };
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const getCitizens = async () => {
    config.params.type = 1;
    config.params.limit = null;
    config.params.page = null;
    await axios
      .get(DEV_URL + "reference/country", config)
      .then((response) => {
        setCitizens(response.data.response.data);
      })
      .catch(() => {
        console.log("dasd");
      });
  };
  const getProvices = async () => {
    config.params.type = 2;
    config.params.limit = null;
    config.params.page = null;
    await axios
      .get(DEV_URL + "reference/country", config)
      .then((response) => {
        setProvices(response.data.response.data);
      })
      .catch(() => {
        console.log("dasd");
      });
  };
  const getTowns = async () => {
    const conf = {
      headers: {},
      params: {
        type: 3
      }
    };
    const response = await Get('reference/country', token, conf);
    setTowns(response.data);
  }
  const filterTowns = async (value) => {
    config.params.type = 3;
    config.params.parentId = value;
    config.params.limit = null;
    config.params.page = null;
    await axios
      .get(DEV_URL + "reference/country", config)
      .then((response) => {
        setTowns(response.data.response.data);
      })
      .catch(() => {
        console.log("dasd");
      });
  };
  const checkNumber = (event) => {
    var charCode = event.charCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
    } else {
      return true;
    }
  };
  const checkIsChild = (value) => {
    if (value === 6) {
      setIsChild(false);
    } else {
      setIsChild(true);
    }
  };
  const dada = async (v) => {
    if (v.length === 10) {
      config.params.registerNumber = v;
      const response = await Get("pms/patient/check/regno", token, config);
      if (response) {
        response["birthDay"] = moment(response["birthDay"]);
        filterTowns(response.aimagId);
        form.setFieldsValue(response);
        setIsGlobalDb(true);
      }
    }
  };
  const ddcitizen = (id) => {
    const citizen = citizens.filter(citizen => citizen.id === id);
    if (citizen.length > 0) {
      return citizen[0].name;
    } else {
      return "??????????????"
    }
  };
  const ddprovices = (id) => {
    const provice = provices.filter(provice => provice.id === id);
    if (provice.length > 0) {
      return provice[0].name;
    } else {
      return "??????????????"
    }
  };
  const ddtowns = (id) => {
    const town = towns.filter(town => town.id === id);
    if (town.length > 0) {
      return town[0].name;
    } else {
      return "??????????????"
    }
  };
  //
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ }) => (
      <div style={{ padding: 8 }}>
        <Search
          placeholder={`???????????? ??? ????????`}
          allowClear
          onSearch={(e) => getData(1, 20, e, dataIndex)}
          enterButton={"????????"}
        />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{ color: '#2d8cff' }}
      />
    ),
  })
  const colums = [
    {
      title: "???",
      render: (_, record, index) => {
        return meta.page * meta.limit - (meta.limit - index - 1)
      }
    },
    {
      title: "???????????? ???",
      dataIndex: "cardNumber",
      ...getColumnSearchProps('cardNumber')
    },
    {
      title: "????????",
      dataIndex: "lastName",
      ...getColumnSearchProps('lastName')
    },
    {
      title: "??????",
      dataIndex: "firstName",
      ...getColumnSearchProps('firstName')
    },
    {
      title: "?????????????? ???",
      dataIndex: "registerNumber",
      ...getColumnSearchProps('registerNumber')
    },
    {
      title: "????????",
      dataIndex: "phoneNo",
      ...getColumnSearchProps('phoneNo')
    },
    {
      title: "???????????? ????????",
      colSpan: 4,
      dataIndex: "countryId",
      render: (text) => {
        if (text != null) {
          return ddcitizen(text);
        }
      }
    },
    {
      colSpan: 0,
      dataIndex: "aimagId",
      render: (text) => {
        if (text != null) {
          return ddprovices(text);
        } else {
          return "??????????????"
        }
      }
    },
    {
      colSpan: 0,
      dataIndex: "soumId",
      render: (text) => {
        if (text != null) {
          return ddtowns(text);
        } else {
          return "??????????????"
        }
      }
    },
    {
      colSpan: 0,
      dataIndex: "address"
    },
    {
      title: "???????? ?????????????????? ??????????",
      dataIndex: "createdAt",
      render: (text) => {
        return moment(text).format("YYYY-MM-DD")
      }
    },
    {
      title: "????????????",
      dataIndex: "id",
      render: (text) => {
        return (
          <Space>
            <Button
              type="link"
              onClick={() => viewModal(text)}
              title="??????????"
              style={{ paddingRight: 5 }}
            >
              <EyeOutlined />
            </Button>
            <Button
              type="link"
              onClick={() => editModal(text)}
              title="??????????"
              style={{ paddingRight: 5, paddingLeft: 5 }}
            >
              <EditOutlined />
            </Button>
          </Space>
        )
      }
    }
  ];
  //
  useEffect(() => {
    getData(1, 20);
    getCitizens();
    getProvices();
    getTowns();
    ScrollRef(scrollRef);
  }, []);
  return (
    <>
      <Card
        bordered={false}
        className="header-solid max-h-max rounded-md"
        title="????????????"
        extra={
          <Button
            type="primary"
            onClick={showModal}
          >
            ??????????
          </Button>
        }
      >
        <Table
          rowKey={"id"}
          bordered
          columns={colums}
          dataSource={data}
          scroll={{
            x: 1500
          }}
          loading={spinner}
          pagination={{
            simple: true,
            pageSize: 20,
            total: meta.itemCount,
            current: meta.page,
            onChange: (page, pageSize) => getData(page, pageSize)
          }}
        />
      </Card>
      <Modal
        title="???????????? ??????????????"
        open={isModalVisible}
        okText="????????????????"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onFinish(values);
            })
            .catch((error) => {
              onFinishFailed(error);
            });
        }}
        cancelText="??????????"
        onCancel={handleCancel}
        width="90%"
      >
        <Form form={form} layout="vertical">
          <Row gutter={[8, 8]}>
            <Col md={24} lg={8}>
              <fieldset className="scheduler-border">
                <legend className="scheduler-border">?????????????? ??????????????</legend>
                <Row gutter={{ md: 35, lg: 15 }}>
                  <Col span={12}>
                    <Form.Item>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="http://192.168.0.106:8000/local-files/fileUpload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                              width: "100%",
                            }}
                          />
                        ) : (
                          uploadButton
                        )}
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Title level={5}>
                      ???????????? ????????????:{form.getFieldValue("cardNumber")}
                    </Title>
                    <Title level={5}>
                      ??????: {form.getFieldValue("age")} / ????????:
                      {form.getFieldValue("gender") ? "????" : "????"}
                    </Title>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="familyName"
                      label="???????????? ????????:"
                      rules={[
                        {
                          required: true,
                          message: "????????????",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="????????:"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "????????????",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="??????:"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "????????????",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="????????????????:"
                      name="countryId"
                      rules={[
                        {
                          required: true,
                          message: "????????????",
                        },
                      ]}
                      initialValue={43}
                    >
                      <Select
                        // defaultValue={43}
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                      >
                        {/* ???????????????? ID === 43 */}
                        {citizens.map((citizen, index) => {
                          return (
                            <Option key={index} value={citizen.id}>
                              {citizen.name}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="?????????????? ????????????:"
                      name="registerNumber"
                      onChange={(v) => {
                        dada(v.target.value);
                      }}
                      rules={[
                        {
                          required: true,
                          message: "?????????????? ???????????? ?????????????? ????",
                        },
                        {
                          validator: async (_, registerNumber) => {
                            if (registerNumber.length < 10) {
                              return Promise.reject(
                                new Error("?????????????? ?????????????? 10 ????????")
                              );
                            }
                          },
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="???????????? ??????????"
                      name="birthDay"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: '???????????? ?????????? ?????????????? ????',
                    //     }
                    // ]}
                    >
                      <DatePicker format={"YYYY-MM-DD HH:mm"} locale={mn} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="????????"
                      name="phoneNo"
                      rules={[
                        {
                          required: true,
                          message: "Zaawal",
                        },
                        // {
                        //     validator: async (_, phoneNumber) => {
                        //         if (phoneNumber < 10000000 || phoneNumber > 100000000) {
                        //             return Promise.reject(new Error('???????????? ????????????????'));
                        //         }
                        //     }
                        // }
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="???????????? ????????" name="homePhoneNo">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="??-????????"
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "??-???????? ???????????? ??????????",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </fieldset>
            </Col>
            <Col md={24} lg={16}>
              <Col span={24}>
                <fieldset className="scheduler-border">
                  <legend className="scheduler-border">???????????? ????????????????</legend>
                  <Row gutter={{ md: 35, lg: 15 }}>
                    <Col md={8} lg={6}>
                      <Form.Item
                        label="???????????????? ????????????:"
                        name="socialStatusType"
                      >
                        <Select onChange={checkIsChild}>
                          {SocialStatus.map((status, index) => {
                            return (
                              <Option key={index} value={status.value}>
                                {status.label}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={8} lg={6}>
                      <Form.Item label="?????????? ???????????? ??????:" name="type">
                        <Select disabled={isChild}>
                          {ChildStatus.map((child, index) => {
                            return (
                              <Option key={index} value={child.value}>
                                {child.label}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={8} lg={6}>
                      <Form.Item label="??????????????????:" name="educationType">
                        <Select>
                          <Option value={0}>????????????????????????</Option>
                          <Option value={1}>????????</Option>
                          <Option value={2}>???????????????????? ?????????? ??????????????????</Option>
                          <Option value={3}>????????????????</Option>
                          <Option value={4}>????????????????</Option>
                          <Option value={5}>??????????????</Option>
                          <Option value={6}>????????????</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={8} lg={6}>
                      <Form.Item
                        label="?????????????? ??????????:"
                        name="serviceScopeStatusType"
                      >
                        <Select>
                          {serviceScopeStatus.map((scope, index) => {
                            return (
                              <Option key={index} value={scope.value}>
                                {scope.label}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={8} lg={6}>
                      <Form.Item label="?????????? ??????????:" name="organization">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={8} lg={6}>
                      <Form.Item label="?????????? ????????????:" name="jobPosition">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </fieldset>
              </Col>
              <Col span={24}>
                <Row gutter={{ md: 35, lg: 15 }}>
                  <Col md={24} lg={12}>
                    <fieldset className="scheduler-border">
                      <legend className="scheduler-border">
                        ?????????? ???????????? ????????
                      </legend>
                      <Row gutter={{ md: 35, lg: 15 }}>
                        <Col md={8} lg={12}>
                          <Form.Item label="??????????/??????:" name={"aimagId"}>
                            <Select onChange={filterTowns}>
                              {provices.map((provice, index) => {
                                return (
                                  <Option key={index} value={provice.id}>
                                    {provice.name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col md={8} lg={12}>
                          <Form.Item label="??????/????????????:" name="soumId">
                            <Select>
                              {towns.map((town, index) => {
                                return (
                                  <Option key={index} value={town.id}>
                                    {town.name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col md={8} lg={24}>
                          <Form.Item label="????????:" name="address">
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                    </fieldset>
                  </Col>
                  <Col span={12}>
                    <fieldset className="scheduler-border">
                      <legend className="scheduler-border">
                        ?????????????????? ??????????????????
                      </legend>
                      <Row gutter={[8, 8]}>
                        <Col span={12}>
                          <Form.Item
                            label="?????????????????? ????????????:"
                            name="isInsuranceType"
                            valuePropName="checked"
                          >
                            <Switch
                              className="bg-sky-700"
                              checkedChildren="????????"
                              unCheckedChildren="??????"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            label="?????????????????? ????????????"
                            name="insuranceNo"
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                    </fieldset>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col span={12}>
              <fieldset className="scheduler-border">
                <legend className="scheduler-border">
                  ???????????? ?????????? ?????????? ????????????????
                </legend>
                <Form.List name="contacts">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Row gutter={[8, 8]} key={key}>
                          <Col span={11}>
                            <Form.Item
                              {...restField}
                              label="????????"
                              name={[name, "contactPhoneNo"]}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={11}>
                            <Form.Item
                              {...restField}
                              label="????????????????"
                              name={[name, "contactPersonStatusType"]}
                            >
                              <Select>
                                {ContactPerson.map((person, index) => {
                                  return (
                                    <Option key={index} value={person.value}>
                                      {person.label}
                                    </Option>
                                  );
                                })}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={2} className="self-center">
                            <MinusCircleOutlined onClick={() => remove(name)} />
                          </Col>
                        </Row>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          style={{
                            width: "100%",
                          }}
                          icon={<PlusOutlined />}
                        >
                          ??????????
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </fieldset>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Modal
        title="????????????"
        width="80%"
        open={isViewModalVisible}
        footer={null}
        onCancel={() => {
          setIsViewModalVisible(false);
        }}
      >
        <Descriptions bordered>
          <Descriptions.Item label="???????????? ????????????">
            {view.cardNumber}
          </Descriptions.Item>
          <Descriptions.Item label="???????????? ????????">
            {view.familyName}
          </Descriptions.Item>
          <Descriptions.Item label="????????">{view.lastName}</Descriptions.Item>
          <Descriptions.Item label="??????">{view.firstName}</Descriptions.Item>
          <Descriptions.Item label="????????????????">{ }</Descriptions.Item>
          <Descriptions.Item label="?????????????? ????????????">
            {view.registerNumber}
          </Descriptions.Item>
          <Descriptions.Item label="???????????? ??????????">{ }</Descriptions.Item>
          <Descriptions.Item label="????????">{view.phoneNo}</Descriptions.Item>
          <Descriptions.Item label="???????????? ????????">
            {view.homePhoneNo}
          </Descriptions.Item>
          <Descriptions.Item label="??-????????">{view.email}</Descriptions.Item>
          <Descriptions.Item label="??????????/????????????">
            {view.countries?.name}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}
export default Patient;
