import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Alert, Card, DatePicker } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { list } from "postcss";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
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
    const getAppointment = async () => {
        config.params.doctorId = employeeId;
        const response = await Get('appointment', token, config);
        setAppointments(response.data);
        config.params.employeeId = null;
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
        getAppointment();
        ScrollRef(scrollRef);
    }, [])

    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <Card bordered={false} className="header-solid max-h-max rounded-md">
                    <div className="basis-1/3">
                        <RangePicker onChange={filterAppointment} locale={mnMN} />
                    </div>
                </Card>
            </div>
            <div className="w-full pt-1 pb-1">
                <Card
                    bordered={false}
                    className="header-solid max-h-max rounded-md"
                    bodyStyle={{
                        padding: 5,
                        paddingLeft: 21,
                        paddingRight: 21,
                    }}
                >
                    <div className="flex">
                        <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                            <span className="font-medium mx-1">Яаралтай</span>
                        </div>
                        <div className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                            <span className="font-medium mx-1">Шууд</span>
                        </div>
                        <div className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                            <span className="font-medium mx-1">Урьдчилсан захиалга</span>
                        </div>
                        <div className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                            <span className="font-medium mx-1">Урьдчилан сэргийлэх</span>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="w-full">
                <Card
                    bordered={false}
                    className="header-solid max-h-max rounded-md"
                >
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
                                    <th>Онош</th>
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
                                {
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
                                                <td>ОНОШ</td>
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
                                }
                                <tr>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default Ambulatory;