import { Button, InputNumber, Select, Modal, Table, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { Get, Post } from "../../../comman";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { DeleteOutlined } from "@ant-design/icons";

function Acting({ PatientData, ListId, DepartmentId }) {
  const token = useSelector(selectCurrentToken);
  const [spinner, setSpinner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materialList, setMaterialList] = useState("");
  const [usedMaterials, setUsedMaterials] = useState([{}]);

  const { Option } = Select;
  const config = {
    headers: {},
    params: {},
  };

  const showModal = () => {
    setIsModalOpen(true);
    setUsedMaterials([{}]);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setUsedMaterials([{}]);
  };

  const handleChange = (idx, e, type) => {
    const rows = [...usedMaterials];
    if (type === "material") {
      rows[idx] = {
        ...rows[idx],
        ["materialId"]: parseInt(e),
      };
    } else if (type === "quantity") {
      rows[idx] = {
        ...rows[idx],
        ["count"]: parseInt(e),
      };
    }
    setUsedMaterials(rows);
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
      getMaterials();
    }
  };

  const columns = [
    {
      title: "№",
      dataIndex: "id",
      render: (_, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Материал",
      dataIndex: "m_name",
    },
    {
      title: "Тоо ширхэг",
      dataIndex: "countC2",
    },
  ];

  const getMaterials = async () => {
    setSpinner(true);
    const conf = {
      headers: {},
      params: {},
    };
    const response = await Get(
      `finance/department-material/${DepartmentId}`,
      token,
      conf
    );
    // console.log("RES", response);
    setMaterialList(response);
    setSpinner(false);
  };
  useEffect(() => {
    getMaterials();
  }, []);
  return (
    <>
      <Row gutter={16} className="mb-2">
        <Col span={4}>
          <Button className="mr-2" onClick={() => showModal()}>
            Зарлагадах
          </Button>
        </Col>
      </Row>
      <div className="w-full p-1">
        <Table
          bordered
          rowKey={(record) => record.id}
          className="whitespace-pre-wrap"
          locale={{ emptyText: "Мэдээлэл байхгүй" }}
          loading={spinner}
          columns={columns}
          dataSource={materialList}
        />
        <Modal
          title="Шилжүүлэх"
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
                              handleChange(idx, e, "material");
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
                            {materialList &&
                              materialList?.map((el, index) => {
                                return (
                                  <Option value={el.m_id} key={index}>
                                    {el.m_name}
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
                            onChange={(e) => handleChange(idx, e, "quantity")}
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
      </div>
    </>
  );
}

export default Acting;
