import { Card, Button, Modal, Select, Pagination } from "antd";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { DefaultPost, Get, openNofi, Post, ScrollRef } from "../../comman";
import PatientInformation from "../PatientInformation";
import Order from "../Order/Order";
import Schedule from "../OCS/Schedule";
import moment from "moment";

const { Option } = Select;

function Ambulatory() {
  const token = useSelector(selectCurrentToken);
  const [cardLoading, setCardLoading] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [patientsList, setPatientsList] = useState([]);
  const [notPatientsList, setNotPatientsList] = useState([]);
  const [notPatientsMeta, setNotPatientsMeta] = useState({
    page: 1,
    limit: 10,
  });
  const [notPatientsValue, setNotPatientsValue] = useState("");
  //
  const [payments, setPayments] = useState([]);

  //
  const [selectedPatient, setSelectedPatient] = useState([]);
  const scrollRef = useRef();
  const config = {
    headers: {},
    params: {},
  };
  const onSearch = async (page, pageSize, value) => {
    config.params.registerNumber = value;
    const response = await Get("payment/patient", token, config);
    setPatientsList(response);
  };
  const onSearchPayment = async (page, pageSize, value) => {
    if (value != undefined) {
      setNotPatientsValue(value);
    }
    const conf = {
      headers: {},
      params: {
        registerNumber: value,
        page: page,
        limit: pageSize,
      },
    };
    const response = await Get("pms/patient", token, conf);
    setNotPatientsMeta(response.meta);
    setNotPatientsList(response.data);
  };
  const getPayment = async (id) => {
    setIsOpen(true);
    const conf = {
      headers: {},
      params: {
        patientId: id,
      },
    };
    const response = await Get("payment/invoice", token, conf);
    getPatient(id);
    setPayments(response.data);
  };
  const getPatient = async (id) => {
    const patient = await Get("pms/patient/" + id, token, config);
    setSelectedPatient(patient);
  };
  const saveOrder = async (value) => {
    // console.log(value);
    if (selectedPatient && selectedPatient.length === 0) {
      openNofi("error", "??????????????????????", "???????????? ?????????????????? ??????????");
    } else if (value.length > 0) {
      var stateIsCito = false;
      value.map((item) => {
        if (!item.isCito) {
          stateIsCito = true;
        }
      });
      const response = await Post("service-request", token, config, {
        patientId: selectedPatient.id,
        requestDate: new Date(),
        isCito: stateIsCito ? true : false,
        usageType: "OUT",
        services: value,
      });
      if (response === 201) {
        setOrderModal(false);
      }
    } else {
      openNofi("error", "??????????????????????", "???????????? ?????????????????? ??????????");
    }
  };

  const checkAPI = async () => {
    const conf = {
      headers: {},
      params: {}
    };
    const response = await Get('ebarimt/checkApi', token, conf);
    if (!response.database.success) {
      Get('ebarimt/sendData', token, config);
    }
  };

  useEffect(() => {
    ScrollRef(scrollRef);
  }, []);

  const categories = [
    {
      //shinejilgee
      name: "Examination",
      label: "????????????????????",
    },
    {
      //onshilgoo
      name: "Xray",
      label: "??????????????????",
    },
    {
      //emchilgee
      name: "Treatment",
      label: "????????????????",
    },
    {
      //hagalgaa mes
      name: "Surgery",
      label: "?????? ??????????",
    },
    {
      //duran
      name: "Endo",
      label: "??????????",
    },
    {
      //bagts
      name: "Package",
      label: "????????",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-full xl:w-1/2 p-1">
          <PatientInformation
            patient={selectedPatient}
            handlesearch={onSearch}
          />
        </div>
        <div className="w-full md:w-full xl:w-1/2 p-1">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">???????????? ??????</h6>}
            className="header-solid max-h-max rounded-md"
            loading={cardLoading}
            bodyStyle={{
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
              minHeight: 150,
              maxHeight: 150,
            }}
          >
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 xl:1/3">
                <Button
                  className="bg-[#2d8cff]"
                  type="primary"
                  onClick={() => setOrderModal(true)}
                >
                  ?????????????????? ?????????????????? ????????????????
                </Button>
              </div>
              <div>
                <Button onClick={() => checkAPI()}>CheckAPI</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full p-1">
          <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            loading={cardLoading}
          >
            <div className="table-responsive p-4" id="style-8" ref={scrollRef}>
              <Table className="ant-border-space" style={{ width: "100%" }}>
                <thead className="ant-table-thead">
                  <tr>
                    <th>???????????? ???</th>
                    <th>????????</th>
                    <th>??????</th>
                    <th>???????????????????? ????????????</th>
                    <th>?????????????????? ??????????</th>
                    <th>??????????</th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody">
                  {patientsList.map((patient, index) => {
                    return (
                      <tr key={index}>
                        <td>{patient.cardNumber}</td>
                        <td>{patient.lastName}</td>
                        <td>{patient.firstName}</td>
                        <td>{patient.registerNumber}</td>
                        <td>
                          {moment(patient.createdAt).format("YYYY-MM-DD")}
                        </td>
                        <td>
                          <Button
                            type="primary"
                            onClick={() => getPayment(patient.id)}
                          >
                            ???????????? ????????
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
      <Modal
        title={"?????????????????? ?????????????????? ????????????????"}
        open={orderModal}
        maskClosable={true}
        onCancel={() => setOrderModal(false)}
        footer={null}
        confirmLoading={isConfirmLoading}
        width="90%"
        cancelText="??????????"
        okText="????????????????"
        className="bg-slat-50"
        bodyStyle={{
          backgroundColor: "#f8fafc",
        }}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-1">
            <PatientInformation
              patient={selectedPatient}
              handlesearch={onSearchPayment}
            />
          </div>
          <div className="w-full md:w-1/2 p-1">
            <Card
              bordered={false}
              title={
                <h6 className="font-semibold m-0">???????????????????????????? ????????????????</h6>
              }
              className="header-solid max-h-max rounded-md"
              bodyStyle={{
                paddingTop: 0,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                minHeight: 150,
                maxHeight: 150,
              }}
              extra={
                <>
                  <Pagination
                    simple
                    current={notPatientsMeta.page}
                    pageSize={notPatientsMeta.limit}
                    total={notPatientsMeta.itemCount}
                    onChange={(page, pageSize) =>
                      onSearchPayment(page, pageSize, notPatientsValue)
                    }
                  />
                </>
              }
            >
              <div
                className="table-responsive"
                id="style-8"
                style={{ maxHeight: "150px" }}
              >
                <Table className="ant-border-space" style={{ width: "100%" }}>
                  <thead className="ant-table-thead bg-slate-200">
                    <tr>
                      <th className="font-bold text-sm align-middle">
                        ???????????? ???
                      </th>
                      <th className="font-bold text-sm align-middle">????????</th>
                      <th className="font-bold text-sm align-middle">??????</th>
                      <th className="font-bold text-sm align-middle">
                        ???????????????????? ????????????
                      </th>
                    </tr>
                  </thead>
                  <tbody className="ant-table-tbody">
                    {notPatientsList.map((patient, index) => {
                      return (
                        <tr
                          className="hover:cursor-pointer ant-table-row ant-table-row-level-0"
                          key={index}
                          onDoubleClick={() => setSelectedPatient(patient)}
                        >
                          <td>{patient.cardNumber}</td>
                          <td>{patient.lastName}</td>
                          <td>{patient.firstName}</td>
                          <td>{patient.registerNumber}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
        <div className="p-1">
          <Card
            bordered={false}
            title={
              <h6 className="font-semibold m-0">???????????????????????????? ????????????????</h6>
            }
            className="header-solid max-h-max rounded-md"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <Order
              isDoctor={false}
              selectedPatient={selectedPatient}
              usageType="OUT"
              categories={categories}
              save={saveOrder}
            />
          </Card>
        </div>
      </Modal>
      <Schedule
        isOpen={isOpen}
        isOCS={false}
        incomeData={payments}
        selectedPatient={selectedPatient}
        isClose={() => setIsOpen(false)}
      />
    </div>
  );
}
export default Ambulatory;
