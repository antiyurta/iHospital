import { Card, Col, Row, Space, Button, Modal, Checkbox, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import {
  DefaultPost,
  Get,
  openNofi,
  Post,
  ScrollRef,
  numberToCurrency,
} from "../../comman";
import PatientInformation from "../PatientInformation";
import Order from "../Order/Order";
import EbarimtPrint from "./EbarimtPrint";

const { Option } = Select;

function Ambulatory() {
  const token = useSelector(selectCurrentToken);
  const [cardLoading, setCardLoading] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [patientsList, setPatientsList] = useState([]);
  const [notPatientsList, setNotPatientsList] = useState([]);
  //
  const [payment, setPayment] = useState([]);
  const [paymentConfirmLoading, setPaymentConfirmLoading] = useState(false);
  //
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [patientId, setPatientId] = useState(0);
  const [invoiceRequest, setInvoiceRequest] = useState([]);
  const [discountPercentRequest, setDiscountPercentRequest] = useState(null);
  const scrollRef = useRef();
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [discounts, setDiscounts] = useState([]);
  const [isDiscount, setIsDiscount] = useState(false);
  //
  const [ebarimtModal, setEbarimtModal] = useState(false);
  const [ebarimtData, setEbarimtData] = useState({});
  //

  const config = {
    headers: {},
    params: {},
  };
  const onSearch = async (value) => {
    config.params.registerNumber = value;
    const response = await Get("payment/patient", token, config);
    setPatientsList(response);
  };

  const onSearchPayment = async (value) => {
    config.params.registerNumber = value;
    const response = await Get("pms/patient", token, config);
    setNotPatientsList(response.data);
  };

  const getPayment = async (id) => {
    setPatientId(id);
    config.params.patientId = id;
    const response = await Get("payment/invoice", token, config);
    setTotalAmount(response.data.reduce((a, v) => (a = a + v.amount), 0));
    setPayment(response.data);
    setPaymentModal(true);
  };

  const selectPatientNot = (patient) => {
    setSelectedPatient(patient);
  };

  const check = (e) => {
    setInvoiceRequest(e);
  };

  const dd = (value, e) => {
    if (e.target.checked) {
      setSelectedAmount(selectedAmount + value.amount);
    } else {
      setSelectedAmount(selectedAmount - value.amount);
    }
  };

  const PaymentRequest = async () => {
    setPaymentConfirmLoading(true);
    const response = await DefaultPost("payment/payment", token, config, {
      invoiceIds: invoiceRequest,
      patientId: patientId,
      discountPercentId: discountPercentRequest,
    });
    if (response) {
      console.log(response);
      setPaymentModal(false);
      setEbarimtData(response);
      setEbarimtModal(true);
      setPaymentConfirmLoading(false);
    }
  };

  const saveOrder = async (value) => {
    // console.log(value);
    if (selectedPatient.length === 0) {
      openNofi("error", "Анхааруулга", "Өвчтөн сонгоогүй байна");
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
      openNofi("error", "Анхааруулга", "Өвчтөн сонгоогүй байна");
    }
  };
  const getDiscounts = async () => {
    const response = await Get("payment/discount", token, config);
    setDiscounts(response.data);
  };

  useEffect(() => {
    ScrollRef(scrollRef);
    getDiscounts();
  }, []);

  const categories = [
    {
      //shinejilgee
      name: "Examination",
      label: "Шинжилгээ",
    },
    {
      //onshilgoo
      name: "Xray",
      label: "Оношилгоо",
    },
    {
      //emchilgee
      name: "Treatment",
      label: "Эмчилгээ",
    },
    {
      //hagalgaa mes
      name: "Surgery",
      label: "Мэс засал",
    },
    {
      //duran
      name: "Endo",
      label: "Дуран",
    },
    {
      //bagts
      name: "Package",
      label: "Багц",
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
            title={<h6 className="font-semibold m-0">Туслах цэс</h6>}
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
                  Оношилгоо шинжилгээ захиалах
                </Button>
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
                    <th>Картын №</th>
                    <th>Овог</th>
                    <th>Нэр</th>
                    <th>Регистрийн дугаар</th>
                    <th>Үзлэг</th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody">
                  {patientsList.map((patient, index) => {
                    return (
                      <tr key={index}>
                        <td>{patient.cardNumber}</td>
                        <td>{patient.firstName}</td>
                        <td>{patient.lastName}</td>
                        <td>{patient.registerNumber}</td>
                        <td>
                          <Button
                            type="primary"
                            onClick={() => getPayment(patient.id)}
                          >
                            Төлбөр авах
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
        title={"Оношилгоо шинжилгээ захиалах"}
        open={orderModal}
        maskClosable={true}
        onCancel={() => setOrderModal(false)}
        footer={null}
        confirmLoading={isConfirmLoading}
        width="90%"
        cancelText="Болих"
        okText="Хадгалах"
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
                <h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>
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
                        Картын №
                      </th>
                      <th className="font-bold text-sm align-middle">Овог</th>
                      <th className="font-bold text-sm align-middle">Нэр</th>
                      <th className="font-bold text-sm align-middle">
                        Регистрийн дугаар
                      </th>
                    </tr>
                  </thead>
                  <tbody className="ant-table-tbody">
                    {notPatientsList.map((patient, index) => {
                      return (
                        <tr
                          className="hover:cursor-pointer ant-table-row ant-table-row-level-0"
                          key={index}
                          onDoubleClick={() => selectPatientNot(patient)}
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
              <h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>
            }
            className="header-solid max-h-max rounded-md"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <Order
              isDoctor={false}
              selectedPatient={selectedPatient}
              categories={categories}
              save={saveOrder}
            />
          </Card>
        </div>
      </Modal>
      <Modal
        title={
          <div className="h-6">
            <p className="float-left">Төлбөр авах</p>
            <p className="float-right font-extrabold">
              Нийт төлбөр: {numberToCurrency(totalAmount)}
            </p>
          </div>
        }
        confirmLoading={paymentConfirmLoading}
        closable={false}
        open={paymentModal}
        width={"50%"}
        onOk={PaymentRequest}
        onCancel={() => setPaymentModal(false)}
        okText={"Хадгалах"}
        cancelText={"Болих"}
      >
        <div className="flex flex-wrap">
          <div className="w-full p-1">
            <Checkbox
              onChange={(e) => {
                setIsDiscount(e.target.checked);
                if (!e.target.checked) {
                  setDiscountPercentRequest(null);
                }
              }}
            >
              Хөнгөлөлтэй эсэх
            </Checkbox>
            <p className="float-right font-bold">
              Сонгосон төлбөр: {numberToCurrency(selectedAmount)}
            </p>
          </div>
          {isDiscount && (
            <div className="w-full p-1">
              <label>Хөнгөлөх хувь</label>
              <Select
                style={{ width: "100%" }}
                onChange={(e) => setDiscountPercentRequest(e)}
              >
                {discounts.map((discount, index) => {
                  return (
                    <Option key={index} value={discount.id}>
                      {discount.name}
                    </Option>
                  );
                })}
              </Select>
            </div>
          )}
          <div className="w-full p-1">
            <label className="font-extrabold">Захиалсан:</label>
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={check}
            >
              <Row>
                {payment.map((element, index) => {
                  return (
                    <Col key={index} span={12}>
                      <Checkbox
                        onChange={(e) => dd(element, e)}
                        value={element.id}
                      >
                        {element.name +
                          "-->" +
                          numberToCurrency(element.amount)}
                      </Checkbox>
                    </Col>
                  );
                })}
              </Row>
            </Checkbox.Group>
          </div>
        </div>
      </Modal>
      <Modal
        open={ebarimtModal}
        onCancel={() => setEbarimtModal(false)}
        footer={null}
        width="360px"
      >
        <EbarimtPrint props={ebarimtData} />
      </Modal>
    </div>
  );
}
export default Ambulatory;
