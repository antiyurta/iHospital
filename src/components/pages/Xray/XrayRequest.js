import { CheckOutlined, ClockCircleOutlined, MinusOutlined, PlusOutlined, ReloadOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Empty, Form, Modal, Pagination, Upload } from "antd";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Patch, ScrollRef } from "../../comman";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const { RangePicker } = DatePicker;
function XrayRequest() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const scrollRef = useRef();
    const [xrayLists, setXrayLists] = useState([]);
    const [meta, setMeta] = useState({});
    const [xrayModal, setXrayModal] = useState(false);
    const [form] = Form.useForm();
    const [photoIds, setPhotoIds] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(Number);
    const navigate = useNavigate();
    const getXrayRequest = async (page, pageSize) => {
        config.params.xrayProcess = "1,2";
        config.params.page = page;
        config.params.limit = pageSize;
        const response = await Get('service/xrayRequest', token, config);
        if (response.data.length > 0) {
            setXrayLists(response.data);
            setMeta(response.meta);
        }
        config.params.xrayProcess = null;
    };
    const filterXrayRequest = async (dates) => {
        if (dates) {
            config.params.startDate = moment(dates[0]).hour(0).minute(0).format('YYYY-MM-DD HH:mm');
            config.params.endDate = moment(dates[1]).hour(23).minute(59).format('YYYY-MM-DD HH:mm');
            // const response = await Get('appointment', token, config);
            // setAppointments(response.data);
        }
    }
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
            return (<td><PlusOutlined style={{ color: '#00adef', fontSize: "20px" }} /></td>)
        } else {
            return (<td><MinusOutlined style={{ color: "red", fontSize: "20px" }} /></td>)
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
            return <td style={{ color: "red" }}><MinusOutlined /></td>
        } else if (process === 1) {
            return <td style={{ color: "blue" }}><PlusOutlined /></td>
        } else {
            return <td style={{ color: "green" }}><CheckOutlined /></td>
        }
    };
    const getEMR = (listId, id, cabinetId, inspectionType, xrayProcess) => {
        // status heregteii anhan dawtan 
        // tolbor shalgah
        if (xrayProcess === 0) {
            openNofi('warning', 'Зураг', 'Зураг оруулагүй')
        } else {
            console.log(listId, id, cabinetId, inspectionType);
            navigate(`/emr`,
                {
                    state:
                    {
                        xrayRequestId: listId,
                        patientId: id,
                        cabinetId: cabinetId,
                        inspection: inspectionType
                    }
                });
        }
    }
    useEffect(() => {
        getXrayRequest(1, 10);
        ScrollRef(scrollRef);
    }, []);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <Card
                        title="Оношилгооны жагсаалт"
                        bordered={false}
                        className="header-solid max-h-max rounded-md"
                    >
                        <div className="flex flex-wrap">
                            <div className="basis-1/3">
                                <RangePicker onChange={filterXrayRequest} locale={mnMN} />
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
                                    <Button title="Сэргээх" type="primary" onClick={() => getXrayRequest(1, 10)}>
                                        <ReloadOutlined
                                        // spin={!spinner}
                                        />
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full py-2">
                                <div className='table-responsive' id='style-8' ref={scrollRef}>
                                    <Table bordered className='ant-border-space' style={{ width: '100%' }}>
                                        <thead className='ant-table-thead bg-slate-200'>
                                            <tr>
                                                <th>Үзлэг хийгдсэн эсэх</th>
                                                <th>Орох цаг</th>
                                                <th>Картын №</th>
                                                <th>Овог</th>
                                                <th>Нэр</th>
                                                <th>Регистр №</th>
                                                <th>Нас</th>
                                                <th>Хүйс</th>
                                                <th>Илгээсэн</th>
                                                <th>Онош</th>
                                                <th>Эмч</th>
                                                <th>Төлбөр</th>
                                                <th>Оношилгооны нэр</th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody p-0">
                                            {
                                                xrayLists.length > 0 ?
                                                    (
                                                        xrayLists.map((xray, index) => {
                                                            return (
                                                                <tr className="ant-table-row ant-table-row-level-0 hover: cursor-pointer"
                                                                    key={index}
                                                                    onDoubleClick={() =>
                                                                        getEMR(xray?.id, xray?.patientId, xray?.schedule?.cabinetId, 11, xray?.xrayProcess)
                                                                    }
                                                                >
                                                                    {checkType(xray.xrayProcess)}
                                                                    <td>
                                                                        <div className="inline-flex flex-row items-center">
                                                                            <span>{xray.deviceSlots?.startTime?.substr(0, 5)}</span>
                                                                            <ClockCircleOutlined className="mx-1.5" />
                                                                            <span>{xray.deviceSlots?.endTime?.substr(0, 5)}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>{xray.patients?.cardNumber}</td>
                                                                    <td>{xray.patients?.lastName}</td>
                                                                    <td>{xray.patients?.firstName}</td>
                                                                    <td>{xray.patients?.registerNumber}</td>
                                                                    <td>{getAge(xray?.patients?.registerNumber)}</td>
                                                                    {getGenderInfo(xray?.patients?.genderType)}
                                                                    <td>{xray?.createdBy}</td>
                                                                    <td>Байхгүй</td>
                                                                    <td>{xray?.schedule?.employees?.firstName}</td>
                                                                    {getPaymentInfo(xray?.isPayment)}
                                                                    <td>{xray?.xrays?.name}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    )
                                                    :
                                                    <tr>
                                                        <td colSpan={13}>
                                                            <Empty />
                                                        </td>
                                                    </tr>
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                                <div>
                                    <Pagination
                                        className="pagination"
                                        pageSize={10}
                                        current={meta.page}
                                        total={meta.itemCount}
                                        onChange={getXrayRequest}
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
export default XrayRequest;