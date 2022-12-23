import { MinusOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Pagination, Table } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
// import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken, selectCurrentUserId } from "../../../../../features/authReducer";
import { Get, openNofi, ScrollRef } from "../../../../comman";

const { RangePicker } = DatePicker;

function Index({ type }) {
    //type 0 bol ambultor 1 bol urdcilsan sergiileh 2 bol hewten
    const scrollRef = useRef();
    const today = new Date();
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
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const getAppointment = async (page, pageSize, start, end) => {
        setSpinner(true);
        start = moment(start).set({ hour: 0, minute: 0, second: 0 });
        end = moment(end).set({ hour: 23, minute: 59, second: 59 });
        const conf = {
            headers: {},
            params: {
                doctorId: employeeId,
                page: page,
                limit: pageSize,
                startDate: moment(start).format("YYYY-MM-DD HH:mm"),
                endDate: moment(end).format("YYYY-MM-DD HH:mm")
            }
        }
        setStart(start);
        setEnd(end);
        var response = [];
        if (type === 0) {
            response = await Get('appointment', token, conf);
        } else if (type === 1) {
            response = await Get('appointment/pre-order', token, conf);
        } else {
            response = await Get(`service/inpatient-request`, token, conf);
        }
        setAppointments(response.data);
        setMeta(response.meta);
        config.params.employeeId = null;
        config.params.page = null;
        config.params.limit = null;
        setSpinner(false);
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
                        usageType: type === 0 && "OUT" || type === 2 && "IN",
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
            return <p className="bg-red-500 text-white">Яаралтай</p>
        } else if (type === 2) {
            return "sadasd"
        } else if (type === 3) {
            const beginTime = begin.split(':');
            const endTime = end.split(':');
            return (<p className="bg-[#5cb85c] text-white">{beginTime[0] + ":" + beginTime[1] + "-" + endTime[0] + ":" + endTime[1]}</p>)
        } else {
            return (<p className="bg-[#5bc0de] text-white">Урьдчилан сэргийлэх</p>)
        }

    };
    const getPaymentInfo = (isPayment) => {
        if (isPayment) {
            return (<p><PlusOutlined style={{ color: '#00adef', fontSize: "20px" }} /></p>)
        } else {
            return (<p><MinusOutlined style={{ color: "red", fontSize: "20px" }} /></p>)
        }
    };
    const getGenderInfo = (gender) => {
        if (gender === 'MAN') {
            return "Эр"
        } else {
            return "Эмэгтэй"
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
            return "Анхан"
        } else if (inspectionType === 2) {
            return "Давтан"
        } else if (inspectionType === 3) {
            return "Урьдчилан сэргийлэх"
        } else if (inspectionType === 4) {
            return "Гэрийн эргэлт"
        } else if (inspectionType === 5) {
            return "Идэвхтэй хяналт"
        } else {
            return "Дуудлагаа"
        }
    };
    const columns = [
        {
            title: 'Он сар',
            dataIndex: ['slots', 'schedule', 'workDate'],
            render: (text) => {
                return <p className="whitespace-pre-wrap">{text}</p>
            }
        },
        {
            title: "Үзлэгийн цаг",
            render: (_, row) => {
                return getTypeInfo(row.type, row.slots?.startTime, row.slots?.endTime)
            }
        },
        {
            title: "Үзлэг",
            render: (_, row) => {
                return getInspectionInfo(row.inspectionType)
            }
        },
        {
            title: "Овог",
            dataIndex: ['patient', 'lastName']
        },
        {
            title: "Нэр",
            dataIndex: ['patient', 'firstName']
        },
        {
            title: "Регистр №",
            dataIndex: ['patient', 'registerNumber']
        },
        {
            title: "Нас",
            dataIndex: ['patient', 'registerNumber'],
            render: (text) => {
                return getAge(text)
            }
        },
        {
            title: "Хүйс",
            dataIndex: ['patient', 'genderType'],
            render: (text) => {
                return getGenderInfo(text)
            }
        },
        {
            title: "Захиалсан огноо",
            dataIndex: ['createdAt'],
            render: (text) => {
                return moment(text).format("YYYY-MM-DD HH:mm")
            }
        },
        {
            title: "Эхэлсэн цаг",
        },
        {
            title: "Дууссан цаг",
        },
        {
            title: "Төлөв",
        },
        {
            title: "Даатгал",
        },
        {
            title: "Төлбөр",
            dataIndex: ['isPayment'],
            render: (text) => {
                return getPaymentInfo(text);
            }
        },
        {
            title: "Үзлэг",
        },
        {
            title: "Тайлбар",
        }
    ];

    useEffect(() => {
        getAppointment(1, 10, today, today);
        ScrollRef(scrollRef);
    }, [type])

    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <Card bordered={false} className="header-solid max-h-max rounded-md">
                    <div className="flex flex-wrap">
                        <div className="basis-1/3">
                            <RangePicker onChange={(e) => {
                                if (e != null) {
                                    getAppointment(1, 10, e[0], e[1])
                                }
                            }} locale={mnMN} />
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
                                <Button title="Сэргээх" type="primary" onClick={() => getAppointment(1, 10, start, end)}>
                                    <ReloadOutlined spin={spinner} />
                                </Button>
                            </div>
                        </div>
                        <div className="w-full py-2">
                            <Table
                                rowKey={"id"}
                                rowClassName="hover: cursor-pointer"
                                onRow={(row, rowIndex) => {
                                    return {
                                        onDoubleClick: () => getEMR(
                                            row.id,
                                            row.patientId,
                                            row.cabinetId,
                                            row.inspectionType,
                                            row.isPayment
                                        )
                                    }
                                }}
                                locale={{ emptyText: "Мэдээлэл байхгүй" }}
                                bordered
                                columns={columns}
                                dataSource={appointments}
                                scroll={{
                                    x: 1500
                                }}
                                loading={spinner}
                                pagination={{
                                    simple: true,
                                    pageSize: 10,
                                    total: meta.itemCount,
                                    current: meta.page,
                                    onChange: (page, pageSize) => getAppointment(page, pageSize, start, end)
                                }}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default Index;