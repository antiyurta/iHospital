import {
    CheckOutlined,
    ClockCircleOutlined,
    MinusOutlined,
    PlusOutlined,
    UploadOutlined,
    DeleteOutlined,
    ReloadOutlined,
} from "@ant-design/icons";
import {
    Button,
    Card,
    Empty,
    Form,
    Modal,
    Upload,
    Select,
    InputNumber,
    Table,
    DatePicker,
} from "antd";
import moment from "moment";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Patch, Post, ScrollRef } from "../../comman";
import mnMN from "antd/es/calendar/locale/mn_MN";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const { RangePicker } = DatePicker;
function IndexBefore({ type }) {
    const today = new Date();
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {},
    };
    const { Option } = Select;
    const scrollRef = useRef();
    const [xrayLists, setXrayLists] = useState([]);
    const [meta, setMeta] = useState({});
    const [xrayModal, setXrayModal] = useState(false);
    const [form] = Form.useForm();
    const [photoIds, setPhotoIds] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [xRayMaterialList, setXRayMaterialList] = useState([]);
    const [usedMaterials, setUsedMaterials] = useState([{}]);
    const [id, setId] = useState(Number);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [spinner, setSpinner] = useState(false);
    const getXrayMaterials = async () => {
        config.params.serviceType = 1;
        const response = await Get("service/service-material", token, config);
        console.log("RES getXrayMaterials==============>", response);
        if (response.data.length > 0) {
            setXRayMaterialList(response.data);
        }
    };
    const getXrayRequest = async (page, pageSize, start, end) => {
        setSpinner(true);
        start = moment(start).set({ hour: 0, minute: 0, second: 0 });
        end = moment(end).set({ hour: 23, minute: 59, second: 59 });
        const conf = {
            headers: {},
            params: {
                xrayProcess: "0,1",
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
        if (gender === "MAN") {
            return "????";
        } else {
            return "??????????????";
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
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
    };
    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            // setLoading(true);
            return;
        }
        if (info.file.status === "done") {
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
        console.log(info.response.response);
    };
    const newModal = (id, isPayment, usageType) => {
        if (usageType === "OUT") {
            if (!isPayment) {
                openNofi('warning', '????????????', '???????????? ??????????????????????');
            } else {
                setId(id);
                setEditMode(true);
                setPhotoIds([]);
                setXrayModal(true);
            }
        } else {
            setId(id);
            setEditMode(true);
            setPhotoIds([]);
            setXrayModal(true);
        }
    }
    const onFinish = async (values) => {
        const response = await Patch(
            "service/xrayRequest/" + id,
            token,
            config,
            values
        );
        if (response === 200) {
            setXrayModal(false);
            getXrayRequest(1, 10, start, end);
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
    const getPaymentInfo = (isPayment) => {
        if (isPayment) {
            return <PlusOutlined style={{ color: "green" }} />;
        } else {
            return <MinusOutlined style={{ color: "red" }} />;
        }
    };
    useEffect(() => {
        getXrayRequest(1, 10, today, today);
        getXrayMaterials();
        ScrollRef(scrollRef);
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
        setUsedMaterials([{}]);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setUsedMaterials([{}]);
    };
    const handleChangeMaterial = (idx, e, type) => {
        const rows = [...usedMaterials];
        if (type === "material") {
            rows[idx] = {
                ...rows[idx],
                ["materialId"]: e,
            };
        } else if (type === "quantity") {
            rows[idx] = {
                ...rows[idx],
                ["count"]: e,
            };
        }
        setUsedMaterials(rows);
    };
    const saveUsedMaterials = async () => {
        const response = await Post(
            `finance/create-expenses`,
            token,
            config,
            usedMaterials
        );
        if (response === 201) {
            setIsModalOpen(false);
            setUsedMaterials([{}]);
        }
    };
    const handleAddRow = () => {
        const item = {
            materialId: "",
            count: "",
        };
        setUsedMaterials((usedMaterials) => [...usedMaterials, item]);
    };
    const handleRemoveSpecificRow = (idx) => () => {
        const rows = [...usedMaterials];
        rows.splice(idx, 1);
        setUsedMaterials(rows);
    };
    const getTypeInfo = (begin, end) => {
        if (begin === undefined && end === undefined) {
            return <p className="bg-[#f0ad4e] text-white">????????</p>
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
    const getUsageTypeInfo = (type) => {
        if (type === "IN") {
            return <p className="bg-[#5bc0de] text-white">????????????</p>
        } else {
            return <p className="bg-[#5cb85c] text-white">????????????????????</p>
        }
    };
    const xrayRequestColumns = [
        {
            title: "??????????",
            dataIndex: "usageType",
            render: (text) => {
                return getUsageTypeInfo(text)
            }
        },
        {
            title: '?????????????????????? ??????',
            dataIndex: ['xrays', 'name'],
            render: (text) => {
                return (
                    <div className="whitespace-pre-wrap">{text}</div>
                )
            }
        },
        {
            title: '???? ??????',
            dataIndex: "updatedAt",
            render: (text) => {
                return moment(text).format("YYYY-MM-DD")
            }
        },
        {
            title: "???????? ??????",
            render: (_, row) => {
                return getTypeInfo(row.deviceSlots?.startTime?.substr(0, 5), row.deviceSlots?.endTime?.substr(0, 5))
            }
        },
        {
            title: "?????????? ???????????????? ????????",
            dataIndex: 'xrayProcess',
            render: (text) => {
                return checkType(text)
            }
        },
        {
            title: "???????????? ???",
            dataIndex: ["patients", 'cardNumber']
        },
        {
            title: "????????",
            dataIndex: ["patients", 'lastName']
        },
        {
            title: "??????",
            dataIndex: ["patients", 'firstName']
        },
        {
            title: "?????????????? ???",
            dataIndex: ["patients", 'registerNumber']
        },
        {
            title: "??????",
            render: (_, row) => {
                return getAge(row.patients?.registerNumber);
            }
        },
        {
            title: "????????",
            render: (_, row) => {
                return getGenderInfo(row.patients?.genderType);
            }
        },
        {
            title: "????????????????",
            dataIndex: 'createdBy'
        },
        {
            title: "??????",
            dataIndex: ['employees', 'firstName']
        },
        {
            title: "????????????",
            dataIndex: 'isPayment',
            render: (text) => {
                return getPaymentInfo(text)
            }
        },
        {
            title: "??????????",
            render: (_, row) => {
                return (
                    row.photos.length > 0 ?
                        <ul className="list-disc list-inside">
                            {row.photos?.map((photo, index) => {
                                return <li key={index}>{photo.filename}</li>;
                            })}
                        </ul>
                        :
                        <Button type="primary" onClick={() => newModal(row.id, row?.isPayment, row?.usageType)}>?????????? ??????????????</Button>
                )
            }
        },
        {
            title: "????????????????",
            render: () => {
                return <Button type="primary" onClick={showModal}>????????????????????</Button>
            }
        }
    ]
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <Card
                        title={type === 0 ? "?????????????????????? ?????????? ????????????????" : "?????? ????????????????"}
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
                                        <span className="font-medium mx-1">????????????????</span>
                                    </div> */}
                                    <div className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">????????</span>
                                    </div>
                                    <div className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">???????????????????? ????????????????</span>
                                    </div>
                                    {/* <div className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                                        <span className="font-medium mx-1">?????????????????? ??????????????????</span>
                                    </div> */}
                                </div>
                                <div className="float-right">
                                    <Button title="??????????????" type="primary" onClick={() => getXrayRequest(1, 10, start, end)}>
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
                                        locale={{ emptyText: "???????????????? ??????????????" }}
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
                title="?????????? ??????????????"
                open={xrayModal}
                onCancel={() => setXrayModal(false)}
                onOk={() =>
                    form.validateFields().then((values) => {
                        values["photoIds"] = photoIds;
                        onFinish(values);
                    })
                }
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
                            <Button icon={<UploadOutlined />}>?????????? ??????????????</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="???????????????? ????????????????????"
                open={isModalOpen}
                onOk={saveUsedMaterials}
                onCancel={handleCancel}
                okText="????????????????"
                cancelText="????????"
                width={800}
            >
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <table
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-center"> # </th>
                                        <th className="text-center"> ???????????????? </th>
                                        <th className="text-center"> ?????? ???????????? </th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {usedMaterials.map((item, idx) => (
                                        <tr id="addr0" key={idx}>
                                            <td className="text-center">{idx + 1}</td>
                                            <td className="text-center">
                                                <Select
                                                    allowClear
                                                    value={usedMaterials[idx].materialId || undefined}
                                                    onChange={(e) => {
                                                        // setSelectedMaterial(e);
                                                        handleChangeMaterial(idx, e, "material");
                                                    }}
                                                    showSearch
                                                    style={{
                                                        minWidth: 200,
                                                    }}
                                                    size="small"
                                                    placeholder="????????????"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children.includes(input)
                                                    }
                                                    filterSort={(optionA, optionB) =>
                                                        optionA.children
                                                            .toLowerCase()
                                                            .localeCompare(optionB.children.toLowerCase())
                                                    }
                                                >
                                                    {xRayMaterialList?.map((el, index) => {
                                                        return (
                                                            <Option value={el.materialId} key={index}>
                                                                {el.materialName}
                                                            </Option>
                                                        );
                                                    })}
                                                </Select>
                                            </td>
                                            <td className="text-center">
                                                <InputNumber
                                                    style={{
                                                        width: 200,
                                                    }}
                                                    value={usedMaterials[idx].count}
                                                    onChange={(e) =>
                                                        handleChangeMaterial(idx, e, "quantity")
                                                    }
                                                    className="width-200"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={handleRemoveSpecificRow(idx)}
                                                >
                                                    <DeleteOutlined />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={handleAddRow} className="btn btn-primary">
                                ??????????
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
export default IndexBefore;
