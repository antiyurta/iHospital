import { ClockCircleFilled, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Divider, Empty, Modal, Select } from "antd";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { DefaultPost, Get, numberToCurrency, openNofi, Patch } from "../../comman";
import Appointment from "../Appointment/Schedule/Appointment";
import EbarimtPrint from "../EPayment/EbarimtPrint";
import mnMN from "antd/es/calendar/locale/mn_MN";
const { Option } = Select;
const { RangePicker } = DatePicker;
function Schedule({ isOpen, isOCS, incomeData, selectedPatient, isClose }) {
    // isOCS = true bol emch OSC false bol burgel tolbor awah ued
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const [noTimeRequirePayments, setNoTimeRequirePayments] = useState([]);
    const [timeRequirePayments, setTimeRequirePayments] = useState([]);
    const [isOpenTreatmentAppointment, setIsOpenTreatmentAppointment] = useState(false);
    const [treatmentData, setTreatmentData] = useState({});
    const [invoiceRequest, setInvoiceRequest] = useState([]);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [paymentConfirmLoading, setPaymentConfirmLoading] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isDiscount, setIsDiscount] = useState(false);
    const [discountPercentRequest, setDiscountPercentRequest] = useState(null);
    const [discounts, setDiscounts] = useState([]);
    const [ebarimtModal, setEbarimtModal] = useState(false);
    const [ebarimtData, setEbarimtData] = useState({});
    //
    const [xrayDeviceId, setXrayDeviceId] = useState(Number);
    const [xrayInvoiceId, setXrayInvoiceId] = useState(Number);
    const [xrayRequestId, setXrayRequestId] = useState(Number);
    const [xrayDeviceSchedules, setXrayDeviceSchedules] = useState([]);
    const [isOpenXrayModal, setIsOpenXrayModal] = useState(false);
    //
    const getDiscounts = async () => {
        const response = await Get('payment/discount', token, config);
        setDiscounts(response.data);
    };
    const getFilterPayments = (payments) => {
        setTotalAmount(payments.reduce((a, v) => a = a + v.amount, 0));
        var noTime = [];
        var time = [];
        payments?.map((payment) => {
            if (payment.type === 2 && payment.treatmentRequest?.slotId === null) {
                time.push(payment);
            } else if (payment.type === 1 && payment.xrayRequest.scheduleId === null) {
                time.push(payment);
            } else {
                noTime.push(payment);
            }
        });
        setNoTimeRequirePayments(noTime);
        setTimeRequirePayments(time);
    };
    const getXraySchedule = async (dates) => {
        if (dates) {
            const startDate = moment(dates[0]).format('YYYY-MM-DD');
            const endDate = moment(dates[1]).format('YYYY-MM-DD');
            config.params.deviceId = xrayDeviceId;
            config.params.startDate = startDate;
            config.params.endDate = endDate;
            const response = await Get('device-booking/schedule', token, config);
            setXrayDeviceSchedules(response.data);
        }
    };
    const onClick = (element) => {
        console.log(element);
        if (element.type === 2) {
            setIsOpenTreatmentAppointment(true);
            setTreatmentData({ invoiceId: element.id, type: element.type });
        } else if (element.type === 1) {
            console.log(element);
            setXrayDeviceId(element.xray?.deviceId);
            setXrayInvoiceId(element.xrayRequest?.invoiceId);
            setXrayRequestId(element.xrayRequest?.id);
            setXrayDeviceSchedules([]);
            setIsOpenXrayModal(true);
        }
    };
    const transfer = (id) => {
        var arr = [...timeRequirePayments];
        const filtered = arr.find(e => e.id === id);
        setNoTimeRequirePayments([...noTimeRequirePayments, filtered]);
        arr.splice(arr.findIndex(e => e.id === id), 1);
        setTimeRequirePayments(arr);
    }
    const treatmentClick = (state, id) => {
        if (state) {
            setIsOpenTreatmentAppointment(false);
            transfer(id);
        }
    };
    const handleClickXray = async (id) => {
        const conf = {
            headers: {},
            params: {}
        };
        const response = await Patch('service/xrayRequest/' + xrayRequestId, token, conf, { scheduleId: id });
        if (response === 200) {
            transfer(xrayInvoiceId);
            setIsOpenXrayModal(false);
        } else {
            openNofi('warning', 'цаг chadagu', 'cadagu')
        }
    };
    const check = (e) => {
        console.log(e);
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
        if (invoiceRequest.length > 0) {
            const response = await DefaultPost('payment/payment', token, config, {
                "invoiceIds": invoiceRequest,
                "patientId": selectedPatient.id,
                "discountPercentId": discountPercentRequest
            });
            if (response) {
                isClose(false);
                setPaymentModal(false);
                setEbarimtData(response);
                setEbarimtModal(true);
            }
        } else {
            openNofi('warning', 'Сонгох', 'Аль нэг сонгох');
        }
        setPaymentConfirmLoading(false);
    }
    const xrayDateCalculator = (date, hour, minute) => {
        const cDate = moment(date).set({ hour: hour, minute: minute }).format('YYYY-MM-DD HH:mm');
        return cDate;
    };
    useEffect(() => {
        getFilterPayments(incomeData);
        getDiscounts();
    }, [incomeData])

    useEffect(() => {
        if (isOpen) {
            setPaymentModal(isOpen);
        }
    }, [isOpen])
    return (
        <>
            <Modal
                title={
                    <>
                        <div className="h-6">
                            <p className="float-left">
                                Төлбөр авах
                            </p>
                            <p className="float-right font-extrabold">
                                Нийт төлбөр: {numberToCurrency(totalAmount)}
                            </p>
                        </div>
                    </>
                }
                confirmLoading={paymentConfirmLoading}
                closable={false}
                open={paymentModal}
                width={"50%"}
                onOk={() => { !isOCS ? PaymentRequest() : setPaymentModal(false) }}
                onCancel={() => { setPaymentModal(false); isClose(false) }}
                okText={"Хадгалах"}
                cancelText={"Болих"}
            >
                <div className="flex flex-wrap">
                    <div className="w-full p-1">
                        <Checkbox onChange={(e) => {
                            setIsDiscount(e.target.checked);
                            if (!e.target.checked) {
                                setDiscountPercentRequest(null);
                            }
                        }}
                        >
                            Хөнгөлөлтэй эсэх
                        </Checkbox>
                        <p className="float-right font-bold">Сонгосон төлбөр: {numberToCurrency(selectedAmount)}</p>
                    </div>
                    {isDiscount &&
                        <div className="w-full p-1">
                            <label>Хөнгөлөх хувь</label>
                            <Select style={{ width: '100%' }} onChange={(e) => setDiscountPercentRequest(e)}>
                                {
                                    discounts.map((discount, index) => {
                                        return (
                                            <Option key={index} value={discount.id}>{discount.name}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                    }
                    <div className="w-full p-1">
                        <Divider>Захиалсан</Divider>
                        <div className="flex flex-row">
                            <div className={isOCS ? "w-full" : "basis-1/2"}>
                                {
                                    timeRequirePayments.map((element, index) => {
                                        return (
                                            <div key={index} className="flow-root">
                                                <a onClick={() => { onClick(element) }} className="float-left" style={{ color: 'green' }}>
                                                    <ClockCircleOutlined />
                                                    {element.name}
                                                </a>
                                                <p className="float-right">{numberToCurrency(element.amount)}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Divider style={{ height: "auto" }} type="vertical" />
                            {
                                !isOCS &&
                                <div className="basis-1/2">
                                    <Checkbox.Group
                                        className="w-full"
                                        onChange={check}
                                    >
                                        {
                                            noTimeRequirePayments?.map((element, index) => {
                                                return (
                                                    <div key={index} className="flex flex-wrap">
                                                        <div className="basis-1/2">
                                                            <Checkbox
                                                                className="pl-1 ml-0 w-full"
                                                                onChange={(e) => dd(element, e)} value={element.id}
                                                            >
                                                                <p>{element.name}</p>
                                                            </Checkbox>
                                                        </div>
                                                        <div className="basis-1/2">
                                                            <p className="float-right">{numberToCurrency(element.amount)}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Checkbox.Group>
                                </div>
                            }
                        </div>
                    </div>
                </div >
            </Modal>
            <Modal
                title="Цаг захиалга"
                width={"100%"}
                open={isOpenTreatmentAppointment}
                onCancel={() => setIsOpenTreatmentAppointment(false)}
                footer={null}
            >
                <Appointment selectedPatient={selectedPatient} type={2} treatmentData={treatmentData} handleClick={treatmentClick} />
            </Modal>
            <Modal
                title='Оношилгоо цаг сонгох'
                open={isOpenXrayModal}
                onCancel={() => setIsOpenXrayModal(false)}
                footer={null}
            >
                <div className="p-2">
                    <RangePicker locale={mnMN} onChange={getXraySchedule} />
                </div>
                {
                    xrayDeviceSchedules.length > 0 ?
                        xrayDeviceSchedules.map((schedule, index) => {
                            return (
                                <Button
                                    key={index}
                                    type="primary"
                                    className="m-2"
                                    onClick={() => handleClickXray(schedule.id)}
                                >
                                    {xrayDateCalculator(schedule.examDate, schedule.startHour, schedule.startMinute)}
                                </Button>
                            )
                        })
                        :
                        <div className="p-1">
                            <Empty description={"Цаг оруулаагүй"} />
                        </div>
                }
            </Modal>
            <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)} footer={null} width="360px">
                <EbarimtPrint props={ebarimtData} />
            </Modal>
        </>
    )
}
export default Schedule;