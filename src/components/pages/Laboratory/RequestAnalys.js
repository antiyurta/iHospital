import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import { Col, Row, Table, Input, Empty, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import usageType from "./usageType.json";
import examinationProcess from "./examinationProcess.json";
import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";

function RequestAnalys() {
  const token = useSelector(selectCurrentToken);
  const [patientReqList, setPatientReqList] = useState([]);
  const [patientReqDtl, setPatientReqDtl] = useState([]);
  const [selectedReqData, setSelectedReqData] = useState("");
  const [selectedDtlData, setSelectedDtlData] = useState("");
  const [selectedRowKey, setSelectedRowKey] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [barCodeValue, setBarCodeValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [loadingSpin, setLoadingSpin] = useState(false);
  const componentRef = useRef();

  const config = {
    headers: {},
    params: {},
  };

  const getERequest = async () => {
    setLoader(true);
    setPatientReqList([]);
    const response = await Get(`service/erequest`, token, config);
    if (response.data.length !== 0) {
      console.log("response get ERequest ====>", response);
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
          },
        ]);
      });
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  const getRequestDtl = async () => {
    setPatientReqDtl([]);
    config.params.examinationRequestId = selectedRowKey[0];
    const response = await Get(
      `service/examinationRequestDetial`,
      token,
      config
    );
    console.log("response get  RequestDtl ====>", response);
    if (response.data.length !== 0) {
      response.data.map((el, index) => {
        setPatientReqDtl((patientReqDtl) => [
          ...patientReqDtl,
          {
            key: index,
            examination: el.examinations?.name,
            barcode: el.barCode,
            status: examinationProcess.map((item) => {
              if (item.value === el.examinationProcess) {
                return item.label;
              }
            }),
            device: el.examinations?.types?.name,
          },
        ]);
      });
      setLoader(false);
    }
  };

  useEffect(() => {
    getERequest();
  }, []);

  useEffect(() => {
    selectedRowKey !== "" && getRequestDtl();
  }, [selectedRowKey]);

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
    },
    {
      title: "Баркод",
      dataIndex: "barcode",
      key: "barcode",
    },
    {
      title: "Төлөв",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Төхөөрөмж",
      dataIndex: "device",
      key: "device",
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
  });
  useEffect(() => {
    barCodeValue !== "" && selectedDtlData !== "" && handlePrint();
  }, [barCodeValue]);

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
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Table
            locale={locale}
            loading={loader}
            columns={columns}
            dataSource={patientReqList?.filter(
              (obj) =>
                obj.requestId.toString().includes(searchValue) ||
                obj.lastName.includes(searchValue) ||
                obj.firstName.includes(searchValue) ||
                obj.registerNumber.includes(searchValue)
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
          />
        </Col>
        <Col span={12}>
          <Table
            locale={locale}
            columns={columnsTabl2}
            dataSource={patientReqDtl}
            bordered
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  setLoadingSpin(true);
                  setBarCodeValue(record.barcode);
                  setSelectedDtlData(record);
                },
              };
            }}
          />
        </Col>
      </Row>
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          <p>{selectedDtlData.device}</p>
          <p>{selectedReqData.registerNumber}</p>
          <p>
            {selectedReqData.lastName} {selectedReqData.firstName}
          </p>
          <Barcode value={barCodeValue} />
        </div>
      </div>
    </Spin>
  );
}

export default RequestAnalys;
