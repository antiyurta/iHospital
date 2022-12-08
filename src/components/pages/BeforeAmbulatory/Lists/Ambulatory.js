import { MinusOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Alert, Button, Card, DatePicker, Input, Pagination } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { list } from "postcss";
import { useEffect, useRef, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken, selectCurrentUserId } from "../../../../features/authReducer";
import { Get, openNofi, ScrollRef } from "../../../comman";

const { RangePicker } = DatePicker;

function Ambulatory() {
    const scrollRef = useRef();
    const token = useSelector(selectCurrentToken);
    const employeeId = useSelector(selectCurrentUserId);
    const navigate = useNavigate();
    const config = {
        headers: {},
        params: {}
    };
    const [appointments, setAppointments] = useState([]);
    const [meta, setMeta] = useState({});
    const [spinner, setSpinner] = useState(false);
    const getAppointment = async (page, pageSize) => {
        setSpinner(false);
        config.params.doctorId = employeeId;
        config.params.page = page;
        config.params.limit = pageSize;
        const response = await Get('appointment', token, config);
        setAppointments(response.data);
        setMeta(response.meta);
        config.params.employeeId = null;
        config.params.page = null;
        config.params.limit = null;
        setSpinner(true);
    }
    const getEMR = (listId, id, cabinetId, inspectionType, isPayment) => {
        // status heregteii anhan dawtan 
        // tolbor shalgah
        if (isPayment === false) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй')
        } else {
            navigate(`/emr`,
                {
                    state:
                    {
                        appointmentId: listId,
                        patientId: id,
                        cabinetId: cabinetId,
                        inspection: inspectionType
                    }
                });
        }
    }
    const getTypeInfo = (type, begin, end) => {
        //1 yaralta shuud
        //2 shuud
        //3 urdcilsan
        //4 uridcilsan sergiileh
        if (type === 1) {
            return (<td className="bg-red-500 text-white">Яаралтай</td>)
        } else if (type === 2) {
            return "sadasd"
        } else if (type === 3) {
            const beginTime = begin.split(':');
            const endTime = end.split(':');
            return (<td className="bg-[#5cb85c] text-white">{beginTime[0] + ":" + beginTime[1] + "-" + endTime[0] + ":" + endTime[1]}</td>)
        } else {
            return (<td className="bg-[#5bc0de]">{begin + "->" + end}</td>)
        }

    };
    const getPaymentInfo = (isPayment) => {
        if (isPayment) {
            return (<td><PlusOutlined style={{ color: '#00adef', fontSize: "20px" }} /></td>)
        } else {
            return (<td><MinusOutlined style={{ color: "red", fontSize: "20px" }} /></td>)
        }
    };
    const getGenderInfo = (gender) => {
        if (gender === 'MAN') {
            return (<td>Эр</td>)
        } else {
            return (<td>Эмэгтэй</td>)
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
    }
    const getInspectionInfo = (inspectionType) => {
        if (inspectionType === 1) {
            return (<td>Анхан</td>)
        } else if (inspectionType === 2) {
            return (<td>Давтан</td>)
        } else if (inspectionType === 3) {
            return (<td>Урьдчилан сэргийлэх</td>)
        } else if (inspectionType === 4) {
            return (<td>Гэрийн эргэлт</td>)
        } else if (inspectionType === 5) {
            return (<td>Идэвхтэй хяналт</td>)
        } else {
            return (<td>Дуудлагаар</td>)
        }
    };
    const filterAppointment = async (dates) => {
        if (dates) {
            config.params.startDate = moment(dates[0]).hour(0).minute(0).format('YYYY-MM-DD HH:mm');
            config.params.endDate = moment(dates[1]).hour(23).minute(59).format('YYYY-MM-DD HH:mm');
            const response = await Get('appointment', token, config);
            setAppointments(response.data);
        }
    }

    useEffect(() => {
        getAppointment(1, 10);
        ScrollRef(scrollRef);
    }, [])

    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <Card bordered={false} className="header-solid max-h-max rounded-md">
                    <div className="flex flex-wrap">
                        <div className="basis-1/3">
                            <RangePicker onChange={filterAppointment} locale={mnMN} />
                        </div>
                        <div className="w-full py-2">
                            <div className="flex float-left">
                                <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                    <span className="font-medium mx-1">Яаралтай</span>
                                </div>
                                <div className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                    <span className="font-medium mx-1">Шууд</span>
                                </div>
                                <div className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                    <span className="font-medium mx-1">Урьдчилсан захиалга</span>
                                </div>
                            </div>
                            <div className="float-right">
                                <Button title="Сэргээх" type="primary" onClick={() => getAppointment(1, 10)}>
                                    <ReloadOutlined spin={!spinner} />
                                </Button>
                            </div>
                        </div>
                        <div className="w-full py-2">
                            <div className='table-responsive' id='style-8' ref={scrollRef}>
                                <Table bordered className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead bg-slate-200'>
                                        <tr>
                                            <th>Он сар</th>
                                            <th>Үзлэгийн цаг</th>
                                            <th>Үзлэг</th>
                                            <th>Овог</th>
                                            <th>Нэр</th>
                                            <th>Регистр №</th>
                                            <th>Нас</th>
                                            <th>Хүйс</th>
                                            <th>Захиалсан огноо</th>
                                            <th>Эхэлсэн цаг</th>
                                            <th>Дууссан цаг</th>
                                            <th>Төлөв</th>
                                            <th>Даатгал</th>
                                            <th>Төлбөр</th>
                                            <th>Үзлэг</th>
                                            <th>Тайлбар</th>
                                        </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody p-0'>
                                        {spinner ?
                                            (
                                                appointments.map((appointment, index) => {
                                                    return (
                                                        <tr key={index} onDoubleClick={() => getEMR(appointment?.id, appointment?.patientId, appointment?.cabinetId, appointment?.inspectionType, appointment?.isPayment)} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                            <td>{appointment?.slots?.schedule?.workDate}</td>
                                                            {getTypeInfo(appointment?.type, appointment?.slots.startTime, appointment?.slots.endTime)}
                                                            {getInspectionInfo(appointment?.inspectionType)}
                                                            <td>{appointment?.patient?.lastName}</td>
                                                            <td>{appointment?.patient?.firstName}</td>
                                                            <td>{appointment?.patient?.registerNumber}</td>
                                                            <td>{getAge(appointment?.patient?.registerNumber)}</td>
                                                            {getGenderInfo(appointment?.patient?.genderType)}
                                                            <td>{moment(appointment?.createdAt).format('YYYY-MM-DD')}</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            {getPaymentInfo(appointment.isPayment)}
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    )
                                                })
                                            )
                                            :
                                            (
                                                <tr>
                                                    <td
                                                        colSpan={16}
                                                        size="lg"
                                                        style={{ backgroundColor: "white", textAlign: "center" }}
                                                    >
                                                        <Spinner animation="grow" style={{ color: "#1890ff" }} />
                                                    </td>
                                                </tr>
                                            )

                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <Pagination
                                    className="pagination"
                                    pageSize={10}
                                    total={meta.itemCount}
                                    onChange={getAppointment}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default Ambulatory;