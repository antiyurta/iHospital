import { Card, Col, Row, Space, Button, Modal, Checkbox } from "antd";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post, ScrollRef } from "../../comman";
import PatientInformation from "../PatientInformation";
import Order from '../Order/Order';

function Ambulatory() {
    const token = useSelector(selectCurrentToken);
    const [cardLoading, setCardLoading] = useState(false);
    const [orderModal, setOrderModal] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);
    const [isConfirmLoading, setIsConfirmLoading] = useState(false);
    const [patientsList, setPatientsList] = useState([]);
    const [notPatientsList, setNotPatientsList] = useState([]);
    const [patient, setPatient] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState([]);
    const [patientId, setPatientId] = useState(0);
    const [paymentRequest, setPaymentRequest] = useState([]);
    const scrollRef = useRef();
    const [totalAmount, setTotalAmount] = useState(0);
    const config = {
        headers: {},
        params: {}
    };
    const onSearch = async (value) => {
        config.params.registerNumber = value;
        const response = await Get('payment/patient', token, config);
        setPatientsList(response);
    };

    const onSearchPayment = async (value) => {
        config.params.registerNumber = value;
        const response = await Get('pms/patient', token, config);
        setNotPatientsList(response.data);
    };

    const selectPatient = async (id) => {
        setPatientId(id);
        config.params.patientId = id;
        const response = await Get('payment/invoice', token, config);
        setTotalAmount(response.data.reduce((a, v) => a = a + v.amount, 0));
        setPatient(response.data);
        setPaymentModal(true);
    }

    const selectPatientNot = (patient) => {
        setSelectedPatient(patient);
    }

    const check = (e) => {
        setPaymentRequest(e);
    }

    const PaymentRequst = async () => {
        const response = await Post('payment/payment', token, config, {
            "invoiceIds": paymentRequest,
            "patientId": patientId,
        });
        if (response === 201) {
            setPaymentModal(false);
        }
    }

    const saveOrder = async (value) => {
        // console.log(value);
        if (selectedPatient.length === 0) {
            openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
        }
        else if (value.length > 0) {
            const response = await Post('service-request', token, config, {
                patientId: selectedPatient.id,
                requestDate: new Date(),
                services: value,
            })
            if (response === 201) {
                setOrderModal(false);
            }
        } else {
            openNofi('error', 'Анхааруулга', 'Өвчтөн сонгоогүй байна');
        }
    }

    useEffect(() => {
        ScrollRef(scrollRef);
    }, []);

    const categories = [
        {
            //shinejilgee
            name: 'Examination',
        },
        {
            //onshilgoo
            name: 'Xray',
        },
        {
            //emchilgee
            name: 'Treatment',
        },
        {
            //hagalgaa mes
            name: 'Surgery',
        },
        {
            //duran
            name: 'Endo',
        },
        {
            //bagts
            name: 'package',
        },
    ]

    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-full xl:w-1/2 p-1">
                    <PatientInformation patient={selectedPatient} handlesearch={onSearch} />
                </div>
                <div className="w-full md:w-full xl:w-1/2 p-1">
                    <Card
                        bordered={false}
                        title={<h6 className="font-semibold m-0">Туслах цэс</h6>}
                        className="header-solid max-h-max rounded-md"
                        loading={cardLoading}
                        bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                    >
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/3 xl:1/3">
                                <Button className="bg-sky-700 w-full" type="primary" onClick={() => setOrderModal(true)}>Оношилгоо шинжилгээ захиалах</Button>
                            </div>
                            <div className="w-full md:w-1/3 xl:1/3">
                                <Button className="bg-sky-700 w-full" type="primary">Хэвтэн эмчлүүлэх</Button>
                            </div>
                            <div className="w-full md:w-1/3 xl:1/3">
                                <Button className="bg-sky-700 w-full" type="primary">Хэвтэн эмчлүүлэх цонх</Button>
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
                        <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                            <Table className='ant-border-space' style={{ width: '100%' }}>
                                <thead className='ant-table-thead'>
                                    <tr>
                                        <th>Картын №</th>
                                        <th>Овог</th>
                                        <th>Нэр</th>
                                        <th>Регистрийн дугаар</th>
                                        <th>Үзлэг</th>
                                    </tr>
                                </thead>
                                <tbody className='ant-table-tbody'>
                                    {
                                        patientsList.map((patient, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{patient.cardNumber}</td>
                                                    <td>{patient.firstName}</td>
                                                    <td>{patient.lastName}</td>
                                                    <td>{patient.registerNumber}</td>
                                                    <td><Button onClick={() => selectPatient(patient.id)} >Төлбөр авах</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                </div>
            </div>
            <Modal
                title={'Оношилгоо шинжилгээ захиалах'}
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
                    backgroundColor: "#f8fafc"
                }}
            >
                <div className="flex flex-wrap">
                    <div className='w-full md:w-1/2 p-1'>
                        <PatientInformation patient={selectedPatient} handlesearch={onSearchPayment} />
                    </div>
                    <div className="w-full md:w-1/2 p-1">
                        <Card
                            bordered={false}
                            title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>}
                            className="header-solid max-h-max rounded-md"
                            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                        >
                            <div className='table-responsive p-4' id='style-8' style={{ maxHeight: '180px' }}>
                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead'>
                                        <tr>
                                            <th>Картын №</th>
                                            <th>Овог</th>
                                            <th>Нэр</th>
                                            <th>Регистрийн дугаар</th>
                                        </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody'>
                                        {
                                            notPatientsList.map((patient, index) => {
                                                return (
                                                    <tr key={index} onDoubleClick={() => selectPatientNot(patient)}>
                                                        <td>{patient.cardNumber}</td>
                                                        <td>{patient.firstName}</td>
                                                        <td>{patient.lastName}</td>
                                                        <td>{patient.registerNumber}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="p-1">
                    <Card
                        bordered={false}
                        title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>}
                        className="header-solid max-h-max rounded-md"
                        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                    >
                        <Order
                            isDoctor={false}
                            categories={categories}
                            save={saveOrder}
                        />
                    </Card>
                </div>
            </Modal>
            <Modal
                // title={"Төлбөр авах" + "Нийт төлбөр" + totalAmount}
                title={
                    <div className="h-6">
                        <p className="float-left">
                            Төлбөр авах
                        </p>
                        <p className="float-right font-extrabold">
                            Нийт төлбөр: {totalAmount}
                        </p>
                    </div>
                }
                closable={false}
                open={paymentModal}
                width={"50%"}
                onOk={PaymentRequst}
                onCancel={() => setPaymentModal(false)}
            >
                <Checkbox.Group
                    style={{
                        width: "100%"
                    }}
                    onChange={check}
                >
                    <Row>
                        {
                            patient.map((element, index) => {
                                return (
                                    <Col key={index} span={12}>
                                        <Checkbox value={element.id}>{element.name + "-->" + element.amount + "₮"}</Checkbox>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Checkbox.Group>
            </Modal>
        </div >
    )
}
export default Ambulatory;