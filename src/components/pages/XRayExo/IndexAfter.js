import { CheckOutlined, ClockCircleOutlined, MinusOutlined, PlusOutlined, ReloadOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Empty, Form, Modal, Pagination, Table, Upload } from "antd";
import { useRef, useState } from "react";
import { useEffect } from "react";
// import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Patch, ScrollRef } from "../../comman";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const { RangePicker } = DatePicker;
function IndexAfter({ type, params }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const today = new Date();
    const scrollRef = useRef();
    const [xrayLists, setXrayLists] = useState([]);
    const [meta, setMeta] = useState({});
    const [xrayModal, setXrayModal] = useState(false);
    const [form] = Form.useForm();
    const [photoIds, setPhotoIds] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(Number);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false);
    const getXrayRequest = async (page, pageSize, start, end) => {
        setSpinner(true);
        start = moment(start).set({ hour: 0, minute: 0, second: 0 });
        end = moment(end).set({ hour: 23, minute: 59, second: 59 });
        const conf = {
            headers: {},
            params: {
                xrayProcess: params,
                page: page,
                limit: pageSize,
                deviceType: type,
                startDate: moment(start).format("YYYY-MM-DD HH:mm"),
                endDate: moment(end).format("YYYY-MM-DD HH:mm")
            }
        };
        setStart(start);
        setEnd(end);
        const response = await Get("service/xrayRequest", token, conf);
        setXrayLists(response.data);
        setMeta(response.meta);
        setSpinner(false);
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
    };
    const headers = {
        'Authorization': `Bearer ${token}`,
        "x-api-key": API_KEY
    };
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            // setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            console.log(info.file.response.response.id);
            setPhotoIds([...photoIds, info.file.response.response.id]);
            // Get this url from response in real world.
            // setPhotoId(info.file.response.response.id);
            // getBase64(info.file.originFileObj, (url) => {
            //     setLoading(false);
            //     setImageUrl(url);
            // });
        }
    };
    const handleRemove = (info) => {
        console.log(info.response.response.id);
    };
    const getPaymentInfo = (isPayment) => {
        if (isPayment) {
            return <PlusOutlined style={{ color: '#00adef', fontSize: "20px" }} />
        } else {
            return <MinusOutlined style={{ color: "red", fontSize: "20px" }} />
        }
    };
    const onFinish = async (values) => {
        const response = await Patch('service/xrayRequest/' + id, token, config, values);
        if (response === 200) {
            setXrayModal(false);
            getXrayRequest();
        }
    };
    const checkType = (process) => {
        if (process === 0) {
            return <MinusOutlined style={{ color: 'red' }} />
        } else if (process === 1) {
            return <PlusOutlined style={{ color: "blue" }} />
        } else {
            return <CheckOutlined style={{ color: "green" }} />
        }
    };
    const getEMR = (listId, id, cabinetId, inspectionType, xrayProcess, deviceType, isPayment) => {
        // status heregteii anhan dawtan 
        // tolbor shalgah
        if (xrayProcess === 0 && deviceType === 0) {
            openNofi('warning', 'Зураг', 'Зураг оруулагүй')
        } else if (!isPayment) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй');
        } else {
            console.log(listId, id, cabinetId, inspectionType);
            navigate(`/emr`,
                {
                    state:
                    {
                        usageType: 'OUT',
                        xrayRequestId: listId,
                        patientId: id,
                        cabinetId: cabinetId,
                        inspection: inspectionType
                    }
                });
        }
    }
    const getTypeInfo = (begin, end) => {
        if (begin === undefined && end === undefined) {
            return <p className="bg-[#f0ad4e] text-white">Шууд</p>
        } else {
            return (
                <div className="bg-[#5cb85c] text-white">
                    <span>
                        {begin}
                    </span>
                    <ClockCircleOutlined className="mx-1.5" />
                    <span>
                        {end}
                    </span>
                </div>
            )
        }
    };
    const xrayRequestColumns = [
        {
            title: 'Он сар',
            dataIndex: "updatedAt",
            render: (text) => {
                return moment(text).format("YYYY-MM-DD")
            }
        },
        {
            title: 'Оношилгооны нэр',
            dataIndex: ['xrays', 'name'],
            render: (text) => {
                return (
                    <div className="whitespace-pre-wrap">{text}</div>
                )
            }
        },
        {
            title: "Үзлэг хийгдсэн эсэх",
            dataIndex: 'xrayProcess',
            render: (text) => {
                return checkType(text)
            }
        },
        {
            title: "Орох цаг",
            render: (_, row) => {
                return getTypeInfo(row.deviceSlots?.startTime?.substr(0, 5), row.deviceSlots?.endTime?.substr(0, 5))
            }
        },
        {
            title: "Картын №",
            dataIndex: ["patients", 'cardNumber']
        },
        {
            title: "Овог",
            dataIndex: ["patients", 'lastName']
        },
        {
            title: "Нэр",
            dataIndex: ["patients", 'firstName']
        },
        {
            title: "Регистр №",
            dataIndex: ["patients", 'registerNumber']
        },
        {
            title: "Нас",
            render: (_, row) => {
                return getAge(row.patients?.registerNumber);
            }
        },
        {
            title: "Хүйс",
            render: (_, row) => {
                return getGenderInfo(row.patients?.genderType);
            }
        },
        {
            title: "Илгээсэн",
            dataIndex: 'createdBy'
        },
        {
            title: "Эмч",
            dataIndex: ['employees', 'firstName']
        },
        {
            title: "Төлбөр",
            dataIndex: 'isPayment',
            render: (text) => {
                return getPaymentInfo(text)
            }
        },
    ];
    useEffect(() => {
        getXrayRequest(1, 10, today, today);
        ScrollRef(scrollRef);
    }, [type]);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <Card
                        title={type === 1 ? "EXO жагсаалт" : "Оношилгооны жагсаалт"}
                        bordered={false}
                        className="header-solid max-h-max rounded-md"
                    >
                        <div className="flex flex-wrap">
                            <div className="basis-1/3">
                                <RangePicker onChange={(e) => {
                                    if (e != null) {
                                        getXrayRequest(1, 10, e[0], e[1])
                                    }
                                }} locale={mnMN} />
                            </div>
                            <div className="w-full py-2">
                                <div className="flex float-left">
                                    {/* <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">Яаралтай</span>
                                    </div> */}
                                    <div className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">Шууд</span>
                                    </div>
                                    <div className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">Урьдчилсан захиалга</span>
                                    </div>
                                    {/* <div className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">Урьдчилан сэргийлэх</span>
                                    </div> */}
                                </div>
                                <div className="float-right">
                                    <Button title="Сэргээх" type="primary" onClick={() => getXrayRequest(1, 10, start, end)}>
                                        <ReloadOutlined
                                        // spin={!spinner}
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full py-2">
                                <div>
                                    <Table
                                        rowKey={"id"}
                                        locale={{ emptyText: "Мэдээлэл байхгүй" }}
                                        rowClassName="hover: cursor-pointer"
                                        onRow={(row, rowIndex) => {
                                            return {
                                                onDoubleClick: () => {
                                                    getEMR(
                                                        row?.id,
                                                        row?.patientId,
                                                        row?.cabinetId,
                                                        row?.deviceType === 0 ? 11 : 12,
                                                        row?.xrayProcess,
                                                        row?.deviceType,
                                                        row?.isPayment
                                                    )
                                                }
                                            }
                                        }}
                                        bordered
                                        columns={xrayRequestColumns}
                                        dataSource={xrayLists}
                                        scroll={{
                                            x: 1500
                                        }}
                                        loading={spinner}
                                        pagination={{
                                            simple: true,
                                            pageSize: 10,
                                            total: meta.itemCount,
                                            current: meta.page,
                                            onChange: (page, pageSize) => getXrayRequest(page, pageSize, start, end)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <Modal
                title="Зураг оруулах"
                open={xrayModal}
                onCancel={() => setXrayModal(false)}
                onOk={() => form.validateFields().then((values) => {
                    values['photoIds'] = photoIds;
                    onFinish(values);
                })}
            >
                <Form form={form}>
                    <Form.Item valuePropName="fileList">
                        <Upload
                            multiple={true}
                            headers={headers}
                            action={`${DEV_URL}local-files/fileUpload`}
                            onChange={handleChange}
                            onRemove={handleRemove}
                        >
                            <Button icon={<UploadOutlined />}>Зураг оруулах</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default IndexAfter;