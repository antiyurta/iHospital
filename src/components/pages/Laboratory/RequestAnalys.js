import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Patch, Post } from "../../comman";
import {
  Col,
  Row,
  Table,
  Input,
  Empty,
  Spin,
  Segmented,
  Button,
  Space,
  Tag,
  Modal,
  Select,
  InputNumber,
} from "antd";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import usageType from "./usageType.json";
import examinationProcess from "./examinationProcess.json";
import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import universal from "../../../assets/logo/universal.png";

function RequestAnalys() {
  const token = useSelector(selectCurrentToken);
  const [patientReqList, setPatientReqList] = useState([]); //Нийт хүсэлт
  const [patientReqDtl, setPatientReqDtl] = useState([]); //Сонгосон хүсэлтийн шижилгээнүүд
  const [selectedReqData, setSelectedReqData] = useState(""); //Сонгосон хүсэлт
  const [selectedRowKey, setSelectedRowKey] = useState(""); //Сонгосон хүсэлт мөрийн дугаар (AntD -н TABLE -д ашиглах)
  const [selectedExaminations, setSelectedExaminations] = useState([]); //Сонгогдсон шинжилгээнүүд
  const [selectedExaminationKeys, setSelectedExaminationKeys] = useState([]); //Сонгогдсон шинжилгээнүүдийн мөрийн дугаар (AntD -н TABLE -д ашиглах)
  const [searchValue, setSearchValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [checkPrintClosed, setCheckPrintClosed] = useState(false); // Хэвлэх цонх хаагдсан эсэхийг мэдэх
  const [loaderDtl, setLoaderDtl] = useState(false);
  const [loadingSpin, setLoadingSpin] = useState(false);
  const [statusFilter, setStatusFilter] = useState(0);
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [examinationList, setExaminationList] = useState([]);
  const [usedMaterials, setUsedMaterials] = useState([{}]);
  const [selectedRowData, setSelectedRowData] = useState("");
  const componentRef = useRef();
  const componentResultPrint = useRef();
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [examinationResult, setExaminationResult] = useState([]);

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
  const showResultModal = () => {
    setIsResultModalOpen(true);
  };
  const handleResultOk = () => {
    // setIsResultModalOpen(false);
  };
  const handleResultCancel = () => {
    setIsResultModalOpen(false);
  };
  const getERequest = async () => {
    setLoader(true);
    setSelectedReqData([]);
    setPatientReqList([]);
    setPatientReqDtl([]);
    const response = await Get(`service/erequest`, token, config);
    if (response.data.length !== 0) {
      // console.log("response get ERequest ====>", response);
      response.data.map((el, index) => {
        setPatientReqList((patientReqList) => [
          ...patientReqList,
          {
            key: el.id,
            requestId: el.id,
            lastName: el.patient?.lastName,
            firstName: el.patient?.firstName,
            registerNumber: el.patient?.registerNumber,
            requestDate: el.requestDate?.substr(0, 10),
            usageType: usageType.map((item) => {
              if (item.value === el.usageType) {
                return item.label;
              }
            }),
            dtlData: el.examinationRequestDetials,
            cardNumber: el.patient?.cardNumber,
            age: el.patient?.age,
            genderType:
              el.patient?.genderType === "WOMAN" ? "Эмэгтэй" : "Эрэгтэй",
          },
        ]);
      });
      setLoader(false);
      setLoaderDtl(false);
    } else {
      setLoader(false);
      setLoaderDtl(false);
    }
  };

  const getExamniationMaterial = async () => {
    config.params.serviceType = 0;
    const response = await Get("service/service-material", token, config);
    // console.log("RES getExamniationMaterial==============>", response);
    if (response.data.length > 0) {
      setExaminationList(response.data);
    }
  };
  const getRequestDtl = async () => {
    setPatientReqDtl([]);
    config.params.examinationRequestId = selectedRowKey[0];
    // config.params.isPayment = true;
    const response = await Get(
      `service/examinationRequestDetial`,
      token,
      config
    );
    // console.log("response get  RequestDtl ====>", response);
    if (response.data.length !== 0) {
      response.data.map((el, index) => {
        setPatientReqDtl((patientReqDtl) => [
          ...patientReqDtl,
          {
            key: el.id,
            examination: el.examinations?.name,
            barcode: el.barCode,
            statusId: el.examinationProcess,
            status: examinationProcess.map((item) => {
              if (item.value === el.examinationProcess) {
                return item.label;
              }
            }),
            device: el.examinations?.types?.name,
            request_id: el.id,
          },
        ]);
      });
    }
    setLoaderDtl(false);
  };

  useEffect(() => {
    getERequest();
    getExaminationResult();
  }, []);

  useEffect(() => {
    setLoaderDtl(true);
    getExamniationMaterial();
    selectedRowKey !== "" && getRequestDtl();
  }, [selectedRowKey]);

  useEffect(() => {
    //PRINT цонх хаагдсан эсвэл BARCODE хэвлэгдсэн бол дараагийн BARCODE -г хэвлэх цонх харуулах
    if (selectedExaminations.length > 0) {
      handlePrint();
    }
  }, [checkPrintClosed]);
  const columns = [
    {
      title: "Дугаар",
      dataIndex: "requestId",
      key: "requestId",
    },
    {
      title: "Овог",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Нэр",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Регистр",
      dataIndex: "registerNumber",
      key: "registerNumber",
    },
    {
      title: "Огноо",
      dataIndex: "requestDate",
      key: "requestDate",
    },
    {
      title: "#",
      dataIndex: "usageType",
      key: "usageType",
    },
  ];
  let locale = {
    emptyText: (
      <div className="p-4">
        <Empty description={false} />
      </div>
    ),
  };
  const columnsTabl2 = [
    {
      title: "Шинжилгээ",
      dataIndex: "examination",
      key: "examination",
      className: "whitespace-pre-line",
    },
    {
      title: "Баркод",
      dataIndex: "barcode",
      key: "barcode",
    },
    {
      title: "Төлөв",
      key: "status",
      render: (_, record) => {
        if (record.statusId === 0) {
          return <Tag color="magenta">{record.status}</Tag>;
        } else if (record.statusId === 1) {
          return <Tag color="purple">{record.status}</Tag>;
        } else if (record.statusId === 2) {
          return <Tag color="green">{record.status}</Tag>;
        } else if (record.statusId === 3) {
          return <Tag color="volcano">{record.status}</Tag>;
        } else if (record.statusId === 4) {
          return <Tag color="cyan">{record.status}</Tag>;
        }
      },
    },
    {
      title: "Төхөөрөмж",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "Үйлдэл",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <Tag
            color="processing"
            onClick={() => {
              statusChange(record);
            }}
            className="cursor-pointer"
          >
            Шилжүүлэх
          </Tag>
          <Tag
            color="processing"
            onClick={() => {
              returnChange(record);
            }}
            className="cursor-pointer"
          >
            Буцаах
          </Tag>
        </Space>
      ),
    },
  ];
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKey(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKey,
    onChange: onSelectChange,
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => {
      setLoadingSpin(false);
    },
    onAfterPrint: () => {
      //PRINT цонх хаагдсан эсвэл BARCODE хэвлэгдсэн бол эхний BARCODE -г UNCHECK болгоод
      //Дараагийн BARCODE -г хэвлэхэд бэлдэх
      var arr = [...selectedExaminations];
      var newArrayKeys = [...selectedExaminationKeys];

      var theRemovedElement = arr.slice(1);
      setSelectedExaminations(theRemovedElement);
      setCheckPrintClosed(!checkPrintClosed);
      Promise.all(
        patientReqDtl.map((data) => {
          if (data.barcode === selectedExaminations[0].barcode) {
            newArrayKeys = newArrayKeys.filter((e) => e !== data.key);
          }
          return false;
        })
      ).then(() => {
        setSelectedExaminationKeys(newArrayKeys);
      });
    },
  });
  const handleResultPrint = useReactToPrint({
    content: () => componentResultPrint.current,
    onBeforePrint: () => {},
    onAfterPrint: () => {},
  });

  const rowSelectionExamination = {
    selectedExaminationKeys,
    onSelect: (record, selected, selectedRows) => {
      if (!selected) {
        //Сонгогдсон ижил BARCODE той шинжилгээнүүдийг UNCHECK болгох
        var newArrayKeys = [...selectedExaminationKeys];
        var newArray = [...selectedExaminations];

        Promise.all(
          patientReqDtl.map((data) => {
            if (data.barcode === record.barcode) {
              newArrayKeys = newArrayKeys.filter((e) => e !== data.key);
              newArray = newArray.filter((e) => e.barcode !== data.barcode);
            }
            return false;
          })
        ).then(() => {
          setSelectedExaminationKeys(newArrayKeys);
          setSelectedExaminations(newArray);
        });
      } else {
        //Ижил BARCODE той шинжилгээнүүдийг CHECK хийх
        patientReqDtl.map((el) => {
          if (el.barcode === record.barcode) {
            setSelectedExaminationKeys((selectedExaminationKeys) => [
              ...selectedExaminationKeys,
              el.key,
            ]);
          }
        });
        setSelectedExaminations((selectedExaminations) => [
          ...selectedExaminations,
          record,
        ]);
      }
    },
  };

  //Шинжилгээний төлөв солих
  const statusChange = async (exData) => {
    setSelectedRowData(exData);
    if (exData.statusId === 0) {
      showModal();
    } else {
      statusChangeResult(exData);
    }
  };
  const saveUsedMaterials = async () => {
    const response = await Post(
      `finance/create-expenses`,
      token,
      config,
      usedMaterials
    );
    if (response === 201) {
      statusChangeResult(selectedRowData);
      setIsModalOpen(false);
      setUsedMaterials([{}]);
    }
  };
  const statusChangeResult = async (exData) => {
    if (exData.statusId >= 0 && exData.statusId < 4) {
      data.examinationProcess = exData.statusId + 1;
      const response = await Patch(
        `service/examinationRequestDetial/${exData.request_id}`,
        token,
        config,
        data
      );
      if (response === 200) {
        getERequest();
        getRequestDtl();
      }
    }
  };
  //Шинжилгээний төлөв Буцаах
  const returnChange = async (exData) => {
    if (exData.statusId >= 1 && exData.statusId <= 4) {
      data.examinationProcess = exData.statusId - 1;
      const response = await Patch(
        `service/examinationRequestDetial/${exData.request_id}`,
        token,
        config,
        data
      );
      if (response === 200) {
        getERequest();
        getRequestDtl();
      }
    }
  };
  const handleChange = (idx, e, type) => {
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

  const getExaminationResult = () => {
    axios
      .get("http://192.168.1.232:8001/laboratory")
      .then((response) => {
        console.log("res========>", response.data.response.data);
        if (response.status === 200) {
          setExaminationResult(response.data.response.data);
        } else if (response.status === 401) {
          console.log("NEWTER COMMAN JS");
        }
      })
      .catch((error) => {
        console.log("========>", error);
        if (error.response.status === 401) {
        } else if (error.response.status === 400) {
        } else {
        }
      });
  };

  return (
    <Spin spinning={loadingSpin}>
      <Row gutter={16} className="mb-2">
        <Col span={4}>
          <Input
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Хайх"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={8}>
          <Segmented
            className="department-bed-segment"
            size="small"
            options={examinationProcess.map((el, index) => {
              return {
                label: el.label,
                value: el.value,
                icon: null,
              };
            })}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Table
            locale={locale}
            loading={loader}
            columns={columns}
            dataSource={patientReqList
              ?.filter(
                (obj) =>
                  obj.requestId?.toString()?.includes(searchValue) ||
                  obj.lastName?.toLowerCase()?.includes(searchValue) ||
                  obj.firstName?.toLowerCase()?.includes(searchValue) ||
                  obj.registerNumber?.toLowerCase()?.includes(searchValue)
              )
              ?.filter((d) =>
                d.dtlData?.some((c) => c.examinationProcess === statusFilter)
              )}
            bordered
            rowSelection={{
              type: "radio",
              ...rowSelection,
              selectedRowKeys: selectedRowKey,
              hideSelectAll: true,
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  setSelectedReqData(record);
                  onSelectChange([record.key]);
                },
              };
            }}
            footer={() => {
              return (
                // Зөвхөн Хариу гарсан төлөвт харуулах
                <>
                  {selectedReqData &&
                  selectedReqData.dtlData?.some(
                    (c) => c.examinationProcess === 3
                  ) ? (
                    <Button className="mr-2" onClick={() => showResultModal()}>
                      Хариу харах
                    </Button>
                  ) : null}
                  {selectedReqData &&
                  selectedReqData.dtlData?.some(
                    (c) => c.examinationProcess === 4
                  ) ? (
                    <Button
                      className="mr-2"
                      onClick={() => handleResultPrint()}
                    >
                      Хэвлэх
                    </Button>
                  ) : null}
                </>
              );
            }}
          />
        </Col>
        <Col span={12}>
          <Table
            locale={locale}
            loading={loaderDtl}
            columns={columnsTabl2}
            dataSource={patientReqDtl}
            bordered
            rowSelection={{
              ...rowSelectionExamination,
              selectedRowKeys: selectedExaminationKeys,
              hideSelectAll: true,
            }}
            footer={() => {
              return (
                // Зөвхөн Захиалга өгсөн төлөвт хэвлэх
                <>
                  {selectedExaminations.length > 0 &&
                  selectedExaminations[0].statusId === 0 ? (
                    <Button className="mr-2" onClick={() => handlePrint()}>
                      Хэвлэх
                    </Button>
                  ) : null}
                </>
              );
            }}
          />
        </Col>
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
                            {examinationList?.map((el, index) => {
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
        <Modal
          title="Шинжилгээний хариу"
          open={isResultModalOpen}
          onOk={handleResultOk}
          onCancel={handleResultCancel}
          width={800}
          okText="Хэвлэх"
          cancelText="Хаах"
        >
          <p>Төхөөрөмжийн нэр: {examinationResult[1]?.deviceName}</p>
          <p>
            Баркод: {examinationResult[1]?.patientIdentification?.patientId}
          </p>
          <table className="ant-border-space" style={{ width: "100%" }}>
            <thead className="ant-table-thead">
              <tr>
                <th>Үзүүлэлт</th>
                <th>Хариу</th>
                <th>Нэгж</th>
                <th>Лавлах хэмжээ</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {examinationResult &&
                examinationResult[27]?.observations?.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-left">{el.observationSubId}</td>
                      <td>{el.observationValue}</td>
                      <td>{el.units}</td>
                      <td>-</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Modal>
      </Row>
      {selectedExaminations.length > 0 && (
        //Энд сонгогдсон шинжилгээнүүдийн зөвхөн эхнийхийг хэвлэхээр тохируулж байгаа.
        <div style={{ display: "none" }}>
          <div ref={componentRef} className="mt-4">
            <p>{selectedExaminations[0].device}</p>
            <p>{selectedReqData.registerNumber}</p>
            <p>
              {selectedReqData.lastName} {selectedReqData.firstName}
            </p>
            <Barcode value={selectedExaminations[0].barcode} height={50} />
          </div>
        </div>
      )}
      <div style={{ display: "none" }}>
        <div ref={componentResultPrint} className="p-4">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              src={require("../../../assets/logo/universal.png")}
              style={{ width: 200 }}
            />
            <span
              style={{ color: "#2d8cff", fontSize: 28, fontWeight: "bold" }}
            >
              Universal Med Эмнэлэг
            </span>
          </div>
          <span
            style={{
              width: 250,
              position: "absolute",
              top: 0,
              right: 10,
              fontSize: 12,
            }}
          >
            ЭМСайдын 2019 оны 12 сарын 30-ны өдрийн A/611 тоот тушаалаар батлав.
          </span>
          <div
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#2d8cff",
              marginTop: 5,
            }}
          ></div>
          <div className="p-2">
            <Row gutter={[8, 8]}>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Эцэг/Эхийн нэр:
              </Col>
              <Col span={6}>{selectedReqData.firstName}</Col>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Дугаар:
              </Col>
              <Col span={6}>{selectedReqData.cardNumber}</Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Нэр:
              </Col>
              <Col span={6}>{selectedReqData.lastName}</Col>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Нас:
              </Col>
              <Col span={6}>{selectedReqData.age}</Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Регистр:
              </Col>
              <Col span={6}>{selectedReqData.registerNumber}</Col>
              <Col span={6} style={{ fontWeight: "bold" }}>
                Хүйс:
              </Col>
              <Col span={6}>{selectedReqData.genderType}</Col>
            </Row>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#2d8cff",
              marginBottom: 5,
            }}
          ></div>
          <span>Төхөөрөмжийн нэр: {examinationResult[1]?.deviceName}</span>
          <div>
            <span>
              Баркод: {examinationResult[1]?.patientIdentification?.patientId}
            </span>
          </div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className="text-center">Үзүүлэлт</th>
                <th className="text-center">Хариу</th>
                <th className="text-center">Нэгж</th>
                <th className="text-center">Лавлах хэмжээ</th>
              </tr>
            </thead>
            <tbody>
              {examinationResult &&
                examinationResult[27]?.observations?.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-left">{el.observationSubId}</td>
                      <td>{el.observationValue}</td>
                      <td>{el.units}</td>
                      <td>-</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Spin>
  );
}

export default RequestAnalys;
