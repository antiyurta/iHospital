import {
  CheckOutlined,
  ClockCircleOutlined,
  MinusOutlined,
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Empty,
  Form,
  Modal,
  Upload,
  Select,
  InputNumber,
} from "antd";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Patch, ScrollRef, Post } from "../../comman";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
function BeforeXrayRequest() {
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {},
  };
  const { Option } = Select;
  const scrollRef = useRef();
  const [xrayLists, setXrayLists] = useState([]);
  const [meta, setMeta] = useState({});
  const [xrayModal, setXrayModal] = useState(false);
  const [form] = Form.useForm();
  const [photoIds, setPhotoIds] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [xRayMaterialList, setXRayMaterialList] = useState([]);
  const [usedMaterials, setUsedMaterials] = useState([{}]);

  const [id, setId] = useState(Number);
  const getXrayMaterials = async () => {
    config.params.serviceType = 1;
    const response = await Get("service/service-material", token, config);
    console.log("RES getXrayMaterials==============>", response);
    if (response.data.length > 0) {
      setXRayMaterialList(response.data);
    }
  };
  const getXrayRequest = async () => {
    config.params.xrayProcess = "0,1";
    const response = await Get("service/xrayRequest", token, config);
    if (response.data.length > 0) {
      setXrayLists(response.data);
      setMeta(response.meta);
    }
    config.params.xrayProcess = null;
  };
  const getGenderInfo = (gender) => {
    if (gender === "MAN") {
      return <td>Эр</td>;
    } else {
      return <td>Эмэгтэй</td>;
    }
  };
  const getAge = (registerNumber) => {
    if (registerNumber != undefined) {
      const date = new Date();
      let year = parseInt(registerNumber.substring(2, 4));
      let month = parseInt(registerNumber.substring(4, 6));
      if (month > 20 && month < 33) {
        year += 2000;
        month -= 20;
      } else {
        year += 1900;
      }
      const currentYear = date.getFullYear();
      const age = currentYear - year;
      return age;
    } else {
      return null;
    }
  };
  const headers = {
    Authorization: `Bearer ${token}`,
    "x-api-key": API_KEY,
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      // setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      console.log(info.file.response.response.id);
      setPhotoIds([...photoIds, info.file.response.response.id]);
      // Get this url from response in real world.
      // setPhotoId(info.file.response.response.id);
      // getBase64(info.file.originFileObj, (url) => {
      //     setLoading(false);
      //     setImageUrl(url);
      // });
    }
  };
  const handleRemove = (info) => {
    console.log(info.response.response.id);
  };
  const newModal = (id) => {
    setId(id);
    setEditMode(true);
    setPhotoIds([]);
    setXrayModal(true);
  };
  const onFinish = async (values) => {
    const response = await Patch(
      "service/xrayRequest/" + id,
      token,
      config,
      values
    );
    if (response === 200) {
      setXrayModal(false);
      getXrayRequest();
    }
  };
  const checkType = (process) => {
    if (process === 0) {
      return (
        <td style={{ color: "red" }}>
          <MinusOutlined />
        </td>
      );
    } else if (process === 1) {
      return (
        <td style={{ color: "blue" }}>
          <PlusOutlined />
        </td>
      );
    } else {
      return (
        <td style={{ color: "green" }}>
          <CheckOutlined />
        </td>
      );
    }
  };
  const getPaymentInfo = (isPayment) => {
    if (isPayment) {
      return (
        <td>
          <PlusOutlined style={{ color: "#00adef", fontSize: "20px" }} />
        </td>
      );
    } else {
      return (
        <td>
          <MinusOutlined style={{ color: "red", fontSize: "20px" }} />
        </td>
      );
    }
  };
  useEffect(() => {
    getXrayRequest();
    getXrayMaterials();
    ScrollRef(scrollRef);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
    setUsedMaterials([{}]);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setUsedMaterials([{}]);
  };
  const handleChangeMaterial = (idx, e, type) => {
    const rows = [...usedMaterials];
    if (type === "material") {
      rows[idx] = {
        ...rows[idx],
        ["materialId"]: e,
      };
    } else if (type === "quantity") {
      rows[idx] = {
        ...rows[idx],
        ["count"]: e,
      };
    }
    setUsedMaterials(rows);
  };
  const saveUsedMaterials = async () => {
    const response = await Post(
      `finance/create-expenses`,
      token,
      config,
      usedMaterials
    );
    if (response === 201) {
      setIsModalOpen(false);
      setUsedMaterials([{}]);
    }
  };
  const handleAddRow = () => {
    const item = {
      materialId: "",
      count: "",
    };
    setUsedMaterials((usedMaterials) => [...usedMaterials, item]);
  };
  const handleRemoveSpecificRow = (idx) => () => {
    const rows = [...usedMaterials];
    rows.splice(idx, 1);
    setUsedMaterials(rows);
  };
  return (
    <>
      <Card
        title="Оношилгооны өмнөх жагсаалт"
        bordered={false}
        className="header-solid max-h-max rounded-md"
      >
        <div>
          <div className="table-responsive" id="style-8" ref={scrollRef}>
            <Table
              bordered
              className="ant-border-space"
              style={{ width: "100%" }}
            >
              <thead className="ant-table-thead bg-slate-200">
                <tr>
                  <th>Үзлэг хийгдсэн эсэх</th>
                  <th>Орох цаг</th>
                  <th>Картын №</th>
                  <th>Овог</th>
                  <th>Нэр</th>
                  <th>Регистр №</th>
                  <th>Нас</th>
                  <th>Хүйс</th>
                  <th>Илгээсэн</th>
                  <th>Онош</th>
                  <th>Эмч</th>
                  <th>Төлбөр</th>
                  <th>Оношилгооны нэр</th>
                  <th>Зураг</th>
                  <th>Материал</th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody p-0">
                {xrayLists.length > 0 ? (
                  xrayLists.map((xray, index) => {
                    return (
                      <tr
                        className="ant-table-row ant-table-row-level-0 hover: cursor-pointer"
                        key={index}
                        onDoubleClick={() => newModal(xray.id)}
                      >
                        {checkType(xray.xrayProcess)}
                        <td>
                          <div className="inline-flex flex-row items-center">
                            <span>
                              {xray.deviceSlots?.startTime?.substr(0, 5)}
                            </span>
                            <ClockCircleOutlined className="mx-1.5" />
                            <span>
                              {xray.deviceSlots?.endTime?.substr(0, 5)}
                            </span>
                          </div>
                        </td>
                        <td>{xray.patients?.cardNumber}</td>
                        <td>{xray.patients?.lastName}</td>
                        <td>{xray.patients?.firstName}</td>
                        <td>{xray.patients?.registerNumber}</td>
                        <td>{getAge(xray?.patients?.registerNumber)}</td>
                        {getGenderInfo(xray?.patients?.genderType)}
                        <td>{xray?.createdBy}</td>
                        <td>Байхгүй</td>
                        <td>{xray?.schedule?.employees?.firstName}</td>
                        {getPaymentInfo(xray?.isPayment)}
                        <td>{xray?.xrays?.name}</td>
                        <td>
                          <ul className="list-disc list-inside">
                            {xray?.photos?.map((photo, index) => {
                              return <li key={index}>{photo.filename}</li>;
                            })}
                          </ul>
                        </td>
                        <td>
                          <Button onClick={showModal}>Зарлагадах</Button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={13}>
                      <Empty />
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </Card>
      <Modal
        title="Зураг оруулах"
        open={xrayModal}
        onCancel={() => setXrayModal(false)}
        onOk={() =>
          form.validateFields().then((values) => {
            values["photoIds"] = photoIds;
            onFinish(values);
          })
        }
      >
        <Form form={form}>
          <Form.Item valuePropName="fileList">
            <Upload
              multiple={true}
              headers={headers}
              action={`${DEV_URL}local-files/fileUpload`}
              onChange={handleChange}
              onRemove={handleRemove}
            >
              <Button icon={<UploadOutlined />}>Зураг оруулах</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Материал зарлагадах"
        open={isModalOpen}
        onOk={saveUsedMaterials}
        onCancel={handleCancel}
        okText="Хадгалах"
        cancelText="Хаах"
        width={800}
      >
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> # </th>
                    <th className="text-center"> Материал </th>
                    <th className="text-center"> Тоо ширхэг </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {usedMaterials.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td className="text-center">{idx + 1}</td>
                      <td className="text-center">
                        <Select
                          allowClear
                          value={usedMaterials[idx].materialId || undefined}
                          onChange={(e) => {
                            // setSelectedMaterial(e);
                            handleChangeMaterial(idx, e, "material");
                          }}
                          showSearch
                          style={{
                            minWidth: 200,
                          }}
                          size="small"
                          placeholder="Сонгох"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children.includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            optionA.children
                              .toLowerCase()
                              .localeCompare(optionB.children.toLowerCase())
                          }
                        >
                          {xRayMaterialList?.map((el, index) => {
                            return (
                              <Option value={el.materialId} key={index}>
                                {el.materialName}
                              </Option>
                            );
                          })}
                        </Select>
                      </td>
                      <td className="text-center">
                        <InputNumber
                          style={{
                            width: 200,
                          }}
                          value={usedMaterials[idx].count}
                          onChange={(e) =>
                            handleChangeMaterial(idx, e, "quantity")
                          }
                          className="width-200"
                        />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={handleRemoveSpecificRow(idx)}
                        >
                          <DeleteOutlined />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleAddRow} className="btn btn-primary">
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default BeforeXrayRequest;
