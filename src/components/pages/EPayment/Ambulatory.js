import { Card, Col, Row, Space, Button, Modal, Checkbox } from "antd";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post, ScrollRef } from "../../comman";
import PatientInformation from "../PatientInformation";
import Order from '../Order/Order';
import EbarimtPrint from "./EbarimtPrint";

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
    //
    const [ebarimtModal, setEbarimtModal] = useState(false);
    //

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
            var stateIsCito = false;
            value.map((item) => {
                if (item.isCito != 0) {
                    stateIsCito = true;
                }
            });
            const response = await Post('service-request', token, config, {
                patientId: selectedPatient.id,
                requestDate: new Date(),
                isCito: stateIsCito ? 1 : 0,
                usageType: "OUT",
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
    ];

    const showQrModal = () => {
        setEbarimtModal(true);
    };

    const ebarimtData = {
        "id": 32,
        "discountPercentId": null,
        "paidAmount": null,
        "insuranceAmount": null,
        "totalAmount": 30123,
        "isEbarimt": false,
        "billId": "000000000038000221125000001054288",
        "macAddress": "0242AC130002",
        "lottery": "RC DEMO4464",
        "internalCode": "594308302A5161DB0A92705F8BF338C6B1677591AB586C252A2D9A14",
        "qrData": "1036085107201742813068723018911994378071759418786399744378450196400318209496400131422887925326556353485048362161416210248411648159210128425925549867120599897473733415388123382250423456213126139973457306586149541604841783141336377452825497126776144729313326106399498060869992314997494069494837472224024569268939994451",
        "merchantId": "0000038",
        "patientType": null,
        "isReturn": false,
        "createdBy": 4,
        "updatedBy": null,
        "patientId": 15,
        "createdAt": "2022-11-25T07:04:48.453Z",
        "updatedAt": "2022-11-25T07:04:48.898Z",
        "deletedAt": null,
        "patient": {
            "id": 15,
            "cardNumber": "324721",
            "familyName": "Гэлэн",
            "lastName": "Гантуяа",
            "firstName": "Өлзийхутаг",
            "registerNumber": "КИ90042111",
            "phoneNo": "88506997",
            "homePhoneNo": "89721559",
            "jobPosition": "Программист",
            "organization": "Гүрэн софт",
            "isChild": false,
            "email": null,
            "address": null,
            "insuranceNo": null,
            "genderType": "MAN",
            "isInsuranceType": false,
            "createdBy": 5,
            "type": 3,
            "socialStatusType": 1,
            "educationType": 2,
            "serviceScopeStatusType": 1,
            "imageId": null,
            "age": 0,
            "birthDay": "2022-11-22T09:20:32.540Z",
            "contacts": null,
            "countryId": null,
            "aimagId": null,
            "soumId": null,
            "createdAt": "2022-11-22T09:20:32.540Z",
            "updatedAt": "2022-11-22T09:20:32.540Z",
            "deletedAt": null
        },
        "invoices": [
            {
                "id": 91,
                "patientId": 15,
                "paymentId": 32,
                "amount": 10000,
                "type": 0,
                "typeId": 2,
                "createdBy": 4,
                "updatedBy": null,
                "createdAt": "2022-11-25T07:04:39.172Z",
                "updatedAt": "2022-11-25T07:04:48.476Z",
                "deletedAt": null,
                "name": "TEST1"
            },
            {
                "id": 89,
                "patientId": 15,
                "paymentId": 32,
                "amount": 123,
                "type": 0,
                "typeId": 3,
                "createdBy": 4,
                "updatedBy": null,
                "createdAt": "2022-11-25T07:04:38.532Z",
                "updatedAt": "2022-11-25T07:04:48.479Z",
                "deletedAt": null,
                "name": "TEST"
            },
            {
                "id": 90,
                "patientId": 15,
                "paymentId": 32,
                "amount": 20000,
                "type": 0,
                "typeId": 1,
                "createdBy": 4,
                "updatedBy": null,
                "createdAt": "2022-11-25T07:04:39.156Z",
                "updatedAt": "2022-11-25T07:04:48.481Z",
                "deletedAt": null,
                "name": "Шээсний шинжилгээ"
            }
        ]
    };

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
            <Button onClick={() => { showQrModal() }}>EBARIMT</Button>
            <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)}>
                <EbarimtPrint props={ebarimtData} />
            </Modal>
        </div >
    )
}
export default Ambulatory;