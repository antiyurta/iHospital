import { MinusOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Pagination, Table, Tag } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { createPath, useNavigate } from "react-router-dom";
import { selectCurrentToken, selectCurrentUserId } from "../../../../../features/authReducer";
import { Get, openNofi, ScrollRef } from "../../../../comman";
import orderType from './orderType.json';

const { RangePicker } = DatePicker;
const { CheckableTag } = Tag;

function Index({ type, isDoctor }) {
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
    //
    const [selectedTags, setSelectedTags] = useState([]);
    //
    const getAppointment = async (page, pageSize, start, end, process) => {
        setSpinner(true);
        start = moment(start).set({ hour: 0, minute: 0, second: 0 });
        end = moment(end).set({ hour: 23, minute: 59, second: 59 });
        const conf = {
            headers: {},
            params: {
                doctorId: isDoctor ? employeeId : null,
                process: process ? process.toString() : null,
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
            // conf.params.process = 2;
            response = await Get(`service/inpatient-request`, token, conf);
            conf.params.process = null;
        }
        setAppointments(response.data);
        setMeta(response.meta);
        config.params.employeeId = null;
        config.params.page = null;
        config.params.limit = null;
        setSpinner(false);
    }
    const getEMR = (listId, id, cabinetId, inspectionType, isPayment, process) => {
        // status heregteii anhan dawtan 
        // tolbor shalgah
        if (process != 2 && process != undefined) {
            openNofi('warning', '????????????', '???????????????? ?????????????????? ??????????')
        } else {
            if (isPayment === false) {
                openNofi('warning', '????????????', '???????????? ??????????????????????')
            } else {
                navigate(`/emr`,
                    {
                        state:
                        {
                            usageType: type === 0 && "OUT" || type === 2 && "IN",
                            appointmentId: listId,
                            patientId: id,
                            cabinetId: cabinetId,
                            inspection: inspectionType === undefined ? 1 : inspectionType
                        }
                    });
            }
        }
    };
    const getENR = (listId, id, cabinetId, inspectionType, isPayment, regNum) => {
        // status heregteii anhan dawtan
        // tolbor shalgah
        if (isPayment === false) {
            openNofi("warning", "????????????", "???????????? ??????????????????????");
        } else {
            navigate(`/ambulatoryDetail`, {
                state: {
                    appointmentId: listId,
                    patientId: id,
                    cabinetId,
                    inspection: inspectionType,
                    regNum,
                    type: type,
                },
            });
        }
    };
    const getTypeInfo = (type, begin, end) => {
        //1 yaralta shuud
        //2 shuud
        //3 urdcilsan
        //4 uridcilsan sergiileh
        if (type === 1) {
            return <p className="bg-red-500 text-white">????????????????</p>
        } else if (type === 2) {
            return "sadasd"
        } else if (type === 3) {
            const beginTime = begin.split(':');
            const endTime = end.split(':');
            return (<p className="bg-[#5cb85c] text-white">{beginTime[0] + ":" + beginTime[1] + "-" + endTime[0] + ":" + endTime[1]}</p>)
        } else {
            return (<p className="bg-[#5bc0de] text-white">?????????????????? ??????????????????</p>)
        }

    };
    const getEWSInfo = (color, totalEWS) => {
        return <p style={{ backgroundColor: color }}>{totalEWS}</p>
    }
    const getPaymentInfo = (isPayment) => {
        if (isPayment) {
            return (<p><PlusOutlined style={{ color: '#00adef', fontSize: "20px" }} /></p>)
        } else {
            return (<p><MinusOutlined style={{ color: "red", fontSize: "20px" }} /></p>)
        }
    };
    const getInPatientType = (type) => {
        if (type === "EMERGENCY") {
            return (<p className="bg-red-500 text-white">????????????????</p>)
        } else {
            return (<p className="bg-green-500 text-white">??????????????????????</p>)
        }
    }
    const getGenderInfo = (gender) => {
        if (gender === 'MAN') {
            return "????"
        } else {
            return "??????????????"
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
            return "??????????"
        } else if (inspectionType === 2) {
            return "????????????"
        } else if (inspectionType === 3) {
            return "?????????????????? ??????????????????"
        } else if (inspectionType === 4) {
            return "???????????? ????????????"
        } else if (inspectionType === 5) {
            return "???????????????? ????????????"
        } else {
            return "??????????????????"
        }
    };
    //
    const handleChangeTag = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
        getAppointment(1, 20, today, today, nextSelectedTags);
    };
    //
    const columns = [
        {
            title: "???",
            render: (_, record, index) => {
                return meta.page * meta.limit - (meta.limit - index - 1)
            }
        },
        {
            title: '???? ??????',
            dataIndex: ['slots', 'schedule', 'workDate'],
            render: (text) => {
                return moment(text).format("YYYY-MM-DD")
            }
        },
        {
            title: "???????????????? ??????",
            render: (_, row) => {
                return getTypeInfo(row.type, row.slots?.startTime, row.slots?.endTime)
            }
        },
        {
            title: "??????????",
            render: (_, row) => {
                return getInspectionInfo(row.inspectionType)
            }
        },
        {
            title: "????????",
            dataIndex: ['patient', 'lastName']
        },
        {
            title: "??????",
            dataIndex: ['patient', 'firstName']
        },
        {
            title: "?????????????? ???",
            dataIndex: ['patient', 'registerNumber']
        },
        {
            title: "??????",
            dataIndex: ['patient', 'registerNumber'],
            render: (text) => {
                return getAge(text)
            }
        },
        {
            title: "????????",
            dataIndex: ['patient', 'genderType'],
            render: (text) => {
                return getGenderInfo(text)
            }
        },
        {
            title: "?????????????????? ??????????",
            dataIndex: ['createdAt'],
            render: (text) => {
                return moment(text).format("YYYY-MM-DD HH:mm")
            }
        },
        {
            title: "?????????????? ??????",
        },
        {
            title: "?????????????? ??????",
            dataIndex: 'endDate',
            render: (text) => {
                if (text) {
                    return moment(text).format("YYYY-MM-DD HH:mm")
                }
            }
        },
        {
            title: "??????????",
        },
        {
            title: "??????????????",
        },
        {
            title: "????????????",
            dataIndex: ['isPayment'],
            render: (text) => {
                return getPaymentInfo(text);
            }
        },
        {
            title: "??????????",
        },
        {
            title: "??????????????",
        }
    ];
    const InPatientColumns = [
        {
            title: "???",
            render: (_, record, index) => {
                return meta.page * meta.limit - (meta.limit - index - 1)
            }
        },
        {
            title: "??????????",
            dataIndex: 'type',
            render: (text) => {
                return getInPatientType(text);
            }
        },
        {
            title: "????????????",
            dataIndex: ["patient", "cardNumber"],
            key: "requestId",
        },
        {
            title: "????????",
            dataIndex: ["patient", "lastName"],
            key: "lastName",
        },
        {
            title: "??????",
            dataIndex: ["patient", "firstName"],
            key: "firstName",
        },
        {
            title: "??????????????",
            dataIndex: ["patient", "registerNumber"],
            key: "registerNumber",
        },
        {
            title: "??????",
            dataIndex: ["patient", "registerNumber"],
            render: (text) => {
                return getAge(text)
            }
        },
        {
            title: "????????",
            key: "gender",
            render: (_, record, index) => (
                <span key={index}>
                    {record.patient?.genderType === "WOMAN" ? "????" : "????"}
                </span>
            ),
        },
        {
            title: "???????????? ????????",
            key: "startDate",
            render: (_, record, index) => (
                <span key={index}>{record.startDate?.substr(0, 10)}</span>
            ),
        },
        {
            title: "?????????? ????????",
            key: "endDate",
            render: (_, record, index) => (
                <span key={index}>{record.endDate?.substr(0, 10)}</span>
            ),
        },
        {
            title: "???????????? ????????",
            key: "outDate",
            render: (_, record, index) => {
                // return moment(text).format('YYYY-MM-DD')
                return <span key={index}>{record.outDate?.substr(0, 10)}</span>
            }
        },
        {
            title: "?????????????????? ??????????",
            key: "type",
            render: (_, record, index) => {
                return (
                    <div key={index}>
                        {orderType.map((item, index) => {
                            if (item.value === record.process) {
                                return (
                                    <img
                                        src={require(`../../../../../assets/bed/${orderType[item.value].img}`)}
                                        width="20"
                                        className="inline-block"
                                        key={index}
                                    />
                                );
                            }
                        })}
                    </div>
                )
            },
        },
    ];
    const nurseColumns = [
        {
            title: "???",
            render: (_, record, index) => {
                return meta.page * meta.limit - (meta.limit - index - 1)
            }
        },
        {
            title: '???? ??????',
            dataIndex: ['slots', 'schedule', 'workDate'],
            render: (text) => {
                return moment(text).format("YYYY-MM-DD")
            }
        },
        {
            title: "???????????????? ??????",
            render: (_, row) => {
                return getTypeInfo(row.type, row.slots?.startTime, row.slots?.endTime)
            }
        },
        {
            title: "??????????",
            render: (_, row) => {
                return getInspectionInfo(row.inspectionType)
            }
        },
        {
            title: "??????",
            render: (_, row) => {
                return `${row.employee?.lastName?.substr(0, 1)}.${row.employee?.firstName}`
            }
        },
        {
            title: "????????",
            dataIndex: ['patient', 'lastName']
        },
        {
            title: "??????",
            dataIndex: ['patient', 'firstName']
        },
        {
            title: "?????????????? ???",
            dataIndex: ['patient', 'registerNumber']
        },
        {
            title: "??????",
            dataIndex: ['patient', 'registerNumber'],
            render: (text) => {
                return getAge(text)
            }
        },
        {
            title: "????????",
            dataIndex: ['patient', 'genderType'],
            render: (text) => {
                return getGenderInfo(text)
            }
        },
        {
            title: "?????????????????? ??????????",
            dataIndex: ['createdAt'],
            render: (text) => {
                return moment(text).format("YYYY-MM-DD HH:mm")
            }
        },
        {
            title: "????????????",
            dataIndex: ['isPayment'],
            render: (text) => {
                return getPaymentInfo(text);
            }
        },
        {
            title: "?????? ????????",
            render: (_, row) => {
                // return getEWSInfo(row?.assesments[0]?.colorTotal, row?.assesments[0]?.totalEWS)
            }
        },
    ];

    useEffect(() => {
        getAppointment(1, 20, today, today);
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
                                    getAppointment(1, 20, e[0], e[1])
                                }
                            }} locale={mnMN} />
                        </div>
                        <div className="w-full py-2">
                            {
                                type != 2 ?
                                    type === 0 ?
                                        <div className="flex float-left">
                                            <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                                <span className="font-medium mx-1">????????????????</span>
                                            </div>
                                            <div className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                                <span className="font-medium mx-1">????????</span>
                                            </div>
                                            <div className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                                <span className="font-medium mx-1">???????????????????? ????????????????</span>
                                            </div>
                                        </div>
                                        :
                                        <div className="flex float-left">
                                            <div className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                                <span className="font-medium mx-1">?????????????????? ??????????????????</span>
                                            </div>
                                        </div>
                                    :
                                    <>
                                        <div className="flex float-left">
                                            {orderType.map((tag) => {
                                                return (
                                                    <div
                                                        key={tag.value}
                                                        className="border-blue-400 rounded-sm border mr-2 mb-2"
                                                    >
                                                        <CheckableTag
                                                            checked={selectedTags.includes(tag.value)}
                                                            onChange={(checked) => {
                                                                handleChangeTag(tag.value, checked);
                                                            }}
                                                            style={{
                                                                display: "flex",
                                                                fontSize: 14,
                                                                width: "100%",
                                                            }}
                                                        >
                                                            <div
                                                                className="mr-2"
                                                                style={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                }}
                                                            >
                                                                <img
                                                                    src={require(`../../../../../assets/bed/${tag.img}`)}
                                                                    width="20"
                                                                />
                                                            </div>
                                                            {tag.label}
                                                        </CheckableTag>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                            }
                            <div className="float-right">
                                <Button title="??????????????" type="primary" onClick={() => getAppointment(1, 20, start, end)}>
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
                                        onDoubleClick: () => {
                                            isDoctor ?
                                                getEMR(
                                                    row.id,
                                                    row.patientId,
                                                    type === 2 ? row.departmentId : row.cabinetId,
                                                    // row.cabinetId,
                                                    // row.inspectionType,
                                                    type === 2 ? 1 : row.inspectionType,
                                                    row.isPayment,
                                                    row.process
                                                )
                                                :
                                                getENR(
                                                    row.id,
                                                    row.patientId,
                                                    row.cabinetId,
                                                    row.inspectionType,
                                                    row.isPayment,
                                                    row.patient?.registerNumber,
                                                )
                                        }
                                    }
                                }}
                                locale={{ emptyText: "???????????????? ??????????????" }}
                                bordered
                                // columns={isDoctor ?
                                //     type === 2 ? InPatientColumns : columns
                                //     :
                                //     nurseColumns}
                                columns={type === 2 ?
                                    InPatientColumns
                                    :
                                    isDoctor ? columns
                                        :
                                        nurseColumns
                                }
                                dataSource={appointments}
                                scroll={{
                                    x: 1500
                                }}
                                loading={spinner}
                                pagination={{
                                    simple: true,
                                    pageSize: 20,
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