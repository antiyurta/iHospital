import Table from "react-bootstrap/Table";
import {
  Card,
  Modal,
  Input,
  Form,
  Row,
  Col,
  Switch,
  Button,
  Select,
  Descriptions,
  DatePicker,
  InputNumber,
  Pagination,
  Popconfirm,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Get, Post, Patch, Delete, ScrollRef } from "./comman";
import TextArea from "antd/lib/input/TextArea";
import mn from "antd/es/calendar/locale/mn_MN";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/authReducer";
import moment from "moment";

const { Search } = Input;
const { Option } = Select;

function UTable(props) {
  const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState([]);
  const [view, setView] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [id, setId] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isSubModalVisible, setIsSubModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [form] = Form.useForm();
  const [AddSubForm] = Form.useForm();
  const scrollRef = useRef();
  //
  const [type, setType] = useState();
  const [typesData, setTypesData] = useState([]);
  //
  const config = {
    headers: {},
    params: {
      page: 1,
      limit: 10,
    },
  };
  const onSearch = (value, index) => {
    config.params[index] = value;
    onStart(1);
  };
  const showModal = () => {
    setEditMode(false);
    form.resetFields();
    setIsModalVisible(true);
  };
  const viewModal = async (id) => {
    const response = await Get(props.url + "/" + id, token, config);
    if (response.length != 0) {
      setView(response);
      setIsViewModalVisible(true);
    }
  };
  const editModal = async (id) => {
    setEditMode(true);
    setId(id);
    const response = await Get(props.url + "/" + id, token, config);
    props.column.map((element) => {
      if (element.input === "date") {
        response[`${element.index}`] = moment(response[`${element.index}`]);
      }
    });
    if (response.length != 0) {
      form.setFieldsValue(response);
      setIsModalVisible(true);
    }
  };
  const deleteModal = (id) => {
    Modal.error({
      title: "Устгах",
      okText: "Устгах",
      closable: true,
      content: <div>Устгасан дохиолдолд дахин сэргэхгүй болно</div>,
      async onOk() {
        await Delete(props.url + "/" + id, token, config);
        onStart(1);
      },
    });
  };
  const onStart = async (page) => {
    setSpinner(false);
    config.params.page = page;
    if (props.params) {
      config.params = { ...config.params, ...props.params.params };
    }
    const response = await Get(props.url, token, config);
    console.log("UTBALE response", response);
    if (response.status === 401) {
      navigate("/login");
    } else {
      if (response.data.length != 0) {
        setData(response.data);
        setMeta(response.meta);
      } else {
        setData([]);
        setMeta({});
      }
    }
    setSpinner(true);
  };
  const onFinish = async (data) => {
    setIsConfirmLoading(true);
    var response = null;
    if (editMode) {
      response = await Patch(props.url + "/" + id, token, config, data);
      if (response === 200) {
        setIsModalVisible(false);
        onStart(1);
        setSpinner(true);
      }
    } else {
      response = await Post(props.url, token, config, data);
      if (response === 201) {
        setIsConfirmLoading(false);
        setIsModalVisible(false);
        onStart(1);
        setSpinner(true);
      }
    }
    setIsConfirmLoading(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const inputChecker = (index, row) => {
    console.log("index", index, "----", "row", row);
    if (props.column[index].input === "select") {
      return props.column[index].inputData?.map((data) => {
        if (data.id === row) return data[`${props.column[index].relIndex}`];
      });
    } else if (props.column[index].input === "switch") {
      return row ? (
        <CheckOutlined className="text-green-600" />
      ) : (
        <CloseOutlined className="text-red-600" />
      );
    }
    return row;
  };
  const checkNumber = (event) => {
    var charCode = event.charCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
    } else {
      return true;
    }
  };
  const getTypesDatas = async (type) => {
    setType(type);
    config.params.type = type;
    const response = await Get("service/type", token, config);
    setTypesData(response.data);
  };
  useEffect(() => {
    onStart(1);
    ScrollRef(scrollRef);
  }, []);
  return (
    <>
      <Card
        bordered={false}
        className="header-solid max-h-max rounded-md"
        title={props.title}
        extra={
          props.isCreate && (
            <Button
              onClick={showModal}
              className="bg-sky-700 rounded-md text-white"
            >
              Нэмэх
            </Button>
          )
        }
      >
        <div className="table-responsive p-4" id="style-8" ref={scrollRef}>
          <Table className="ant-border-space" style={{ width: "100%" }}>
            <thead className="ant-table-thead bg-slate-200">
              <tr>
                <th className="font-bold text-sm align-middle" rowSpan={2}>
                  №
                </th>
                {props.column.map((element, index) => {
                  return (
                    element.isView && (
                      <th
                        key={index}
                        rowSpan={element.isSearch ? 1 : 2}
                        className="font-bold text-sm align-middle"
                      >
                        {element.label}
                      </th>
                    )
                  );
                })}
                <th className="w-3 font-bold text-sm align-middle" rowSpan={2}>
                  Үйлдэл
                </th>
              </tr>
              <tr>
                {props.column.map((element, index) => {
                  return (
                    element.isView &&
                    element.isSearch && (
                      <td key={index}>
                        <Search
                          placeholder={element.label + " Хайх"}
                          allowClear
                          onSearch={(e) => onSearch(e, element.index)}
                          enterButton={"Хайх"}
                        />
                      </td>
                    )
                  );
                })}
              </tr>
            </thead>
            <tbody className="ant-table-tbody p-0">
              {spinner ? (
                data.map((row, index) => {
                  return (
                    <tr
                      key={index}
                      className="ant-table-row ant-table-row-level-0"
                    >
                      <td className="ant-table-row-cell-break-word">
                        {meta.page * meta.limit - (meta.limit - index - 1)}
                      </td>
                      {props.column.map((column, index) => {
                        console.log("COLUMN", column);
                        return column.relation ? (
                          <td key={index}>
                            {inputChecker(
                              index,
                              row[`${column.index[0]}`][`${column.index[1]}`]
                            )}
                          </td>
                        ) : (
                          column.isView && (
                            <td key={index}>
                              {inputChecker(index, row[`${column.index}`])}
                            </td>
                          )
                        );
                      })}
                      <td className="ant-table-row-cell-break-word">
                        {props.isRead && (
                          <Button
                            type="link"
                            onClick={() => viewModal(row.id)}
                            title="Харах"
                            style={{ paddingRight: 5 }}
                          >
                            <EyeOutlined />
                          </Button>
                        )}
                        {props.isUpdate && (
                          <Button
                            type="link"
                            onClick={() => editModal(row.id)}
                            title="Засах"
                            style={{ paddingRight: 5, paddingLeft: 5 }}
                          >
                            <EditOutlined />
                          </Button>
                        )}
                        {props.isDelete && (
                          <Button
                            type="link"
                            onClick={() => deleteModal(row.id)}
                            title="Устгах"
                            style={{ paddingLeft: 5 }}
                          >
                            <DeleteOutlined style={{ color: "red" }} />
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={props.column.length + 2}
                    size="lg"
                    style={{ backgroundColor: "white", textAlign: "center" }}
                  >
                    <Spinner animation="grow" style={{ color: "#1890ff" }} />
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        <div>
          <Pagination
            className="pagination"
            pageSize={10}
            total={meta.itemCount}
            onChange={onStart}
          />
        </div>
      </Card>
      <Modal
        title={props.title}
        width={props.width}
        open={isViewModalVisible}
        footer={null}
        onCancel={() => {
          setIsViewModalVisible(false);
        }}
      >
        <Descriptions bordered>
          {props.column.map((element, index) => {
            return (
              <Descriptions.Item key={index} label={element.label}>
                {inputChecker(index, view[`${element.index}`])}
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      </Modal>
      <Modal
        title={editMode ? props.title + " засах" : props.title + " нэмэх"}
        open={isModalVisible}
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
        onCancel={() => {
          setIsModalVisible(false);
        }}
        confirmLoading={isConfirmLoading}
        width={props.width}
        cancelText="Болих"
        okText="Хадгалах"
      >
        <Form form={form}>
          <Row gutter={[8, 8]}>
            {props.column.map((element, index) => {
              return (
                <Col span={element.col} key={index}>
                  {element.isAdd && !editMode && (
                    <Button
                      type="link"
                      title="Төрөл нэмэх"
                      onClick={() => {
                        setIsSubModalVisible(true);
                        getTypesDatas(element.type);
                      }}
                    >
                      <PlusOutlined
                        style={{
                          fontSize: "20px",
                          color: "green",
                          textAlign: "center",
                        }}
                      />
                    </Button>
                  )}
                  {element.input === "select" && (
                    <Form.Item
                      label={element.label}
                      name={element.index}
                      rules={element.rules}
                    >
                      <Select allowClear placeholder={element.label}>
                        {element.inputData?.map((data, index) => {
                          return (
                            <Option key={index} value={data.id}>
                              {data[`${element.relIndex}`]}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  )}
                  {element.input === "switch" && (
                    <Form.Item
                      label={element.label}
                      name={element.index}
                      rules={element.rules}
                      valuePropName="checked"
                    >
                      <Switch
                        className="bg-sky-700"
                        checkedChildren="Тийм"
                        unCheckedChildren="Үгүй"
                      />
                    </Form.Item>
                  )}
                  {element.input === "input" && (
                    <Form.Item
                      label={element.label}
                      name={element.index}
                      rules={element.rules}
                    >
                      <Input placeholder={element.label} />
                    </Form.Item>
                  )}
                  {element.input === "inputNumber" && (
                    <Form.Item
                      label={element.label}
                      name={element.index}
                      rules={element.rules}
                    >
                      <InputNumber
                        placeholder={element.label}
                        onKeyPress={checkNumber}
                      />
                    </Form.Item>
                  )}
                  {element.input === "textarea" && (
                    <Form.Item
                      label={element.label}
                      name={element.index}
                      rules={element.rules}
                    >
                      <TextArea />
                    </Form.Item>
                  )}
                  {element.input === "date" && (
                    <Form.Item
                      label={element.label}
                      name={element.index}
                      rules={element.rules}
                    >
                      <DatePicker locale={mn} />
                    </Form.Item>
                  )}
                </Col>
              );
            })}
          </Row>
        </Form>
      </Modal>
      <Modal
        title={props.title + " төрөл нэмэх"}
        open={isSubModalVisible}
        onOk={() => {
          AddSubForm.validateFields()
            .then(async (values) => {
              let type;
              props.column.map((item) => {
                if (item.isAdd) {
                  type = item.type;
                }
              });
              values.type = type;
              const response = await Post(
                "service/type",
                token,
                config,
                values
              );
              if (response.length != 0) {
                props.refresh();
                setIsSubModalVisible(false);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        cancelText="Болих"
        okText="Хадгалах"
        onCancel={() => {
          setIsSubModalVisible(false);
          props.refresh();
        }}
      >
        <Form form={AddSubForm}>
          {props.column.map((element, index) => {
            return (
              <Col span={24} key={index}>
                {element.isAdd && element.subInput === "input" && (
                  <Form.Item
                    label={element.label}
                    name={element.index}
                    rules={element.rules}
                  >
                    <Input placeholder={element.label} />
                  </Form.Item>
                )}
              </Col>
            );
          })}
        </Form>
        <div className="table-responsive p-4" id="style-8" ref={scrollRef}>
          <Table className="ant-border-space" style={{ width: "100%" }}>
            <thead className="ant-table-thead bg-slate-200">
              <tr>
                <th className="font-bold text-sm align-middle">Нэр</th>
                <th className="font-bold text-sm align-middle">Үйлдэл</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody p-0">
              {typesData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>
                      <Popconfirm
                        title="Устгасан дохиолдолд сэргээх боломжгүй"
                        onConfirm={async () => {
                          const response = await Delete(
                            "service/type/" + data.id,
                            token,
                            config
                          );
                          if (response === 200) {
                            getTypesDatas(data.type);
                          }
                        }}
                        okText="Тийм"
                        cancelText="Үгүй"
                      >
                        <DeleteOutlined style={{ color: "red" }} />
                      </Popconfirm>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Modal>
    </>
  );
}
export default UTable;
