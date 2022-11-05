import { Card, DatePicker } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, ScrollRef } from "../../../comman";

const { RangePicker } = DatePicker;

function Ambulatory() {
    const scrollRef = useRef();
    const token = useSelector(selectCurrentToken);
    const navigate = useNavigate();
    const config = {
        headers: {},
        params: {}
    };
    const [appointments, setAppointments] = useState([]);
    const getAppointment = async () => {
        const response = await Get('appointment', token, config);
        setAppointments(response.data);
    }
    const getEMR = (id) => {
        navigate(`/emr`, { state: { patientId: id } });
    }
    const getTypeInfo = (type, begin, end) => {
        if (type === 1) {
            return (<td className="bg-red-500 text-white">Яаралтай</td>)
        } else if (type === 2) {
            return "sadasd"
        } else if (type === 3) {
            const beginTime = begin.split(':');
            const endTime = end.split(':');
            return (<td className="bg-green-500 text-white">{beginTime[0] + ":" + beginTime[1] + "-" + endTime[0] + ":" + endTime[1]}</td>)
        } else {
            return (<td className="bg-green-500">{begin + "->" + end}</td>)
        }

    }

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
            <div className="w-full pb-1">
                <Card bordered={false} className="header-solid max-h-max rounded-md">
                    <div className="basis-1/3">
                        <RangePicker onChange={filterAppointment} locale={mnMN} />
                    </div>
                </Card>
            </div>
            <div className="w-full pt-1">
                <Card
                    bordered={false}
                    className="header-solid max-h-max rounded-md"
                >
                    <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                        <Table className='ant-border-space' style={{ width: '100%' }}>
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
                                            <tr key={index} onDoubleClick={() => getEMR(appointment?.patientId)} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                <td>{appointment?.slots?.schedule?.workDate}</td>
                                                {getTypeInfo(appointment?.type, appointment?.slots.startTime, appointment?.slots.endTime)}
                                                <td>АНХАН</td>
                                                <td>{appointment?.patient?.lastName}</td>
                                                <td>{appointment?.patient?.firstName}</td>
                                                <td>{appointment?.patient?.registerNumber}</td>
                                                <td>{appointment?.patient?.age}</td>
                                                <td>{appointment?.patient?.genderType}</td>
                                                <td>ОНОШ</td>
                                                <td>{moment(appointment?.createdAt).format('YYYY-MM-DD')}</td>
                                                <td></td>
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