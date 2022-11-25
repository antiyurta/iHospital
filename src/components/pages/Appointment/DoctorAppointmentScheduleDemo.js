import { Form, Select, Button, Switch, Slider, Card, Collapse, DatePicker, Row, Col, TimePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import mn from 'antd/es/calendar/locale/mn_MN';
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Delete, Get, openNofi, Patch, Post } from "../../comman";
import { Table } from "react-bootstrap";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { Option } = Select;
const TimeFormat = 'HH:mm';
const Marks = {
    0: '0%',
    50: '50%',
    100: '100%'
};

function DoctorAppointmentScheduleDemo() {
    const today = new Date();
    const [form] = Form.useForm();
    const token = useSelector(selectCurrentToken);
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(Number);
    const [editWorkDate, setEditWorkDate] = useState([]);
    //
    const [doctors, setDoctors] = useState([]);
    const [structures, setStructures] = useState([]);
    const [cabinets, setCabinets] = useState([]);
    const [inspectionTimes, setInspectionTimes] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [cabinetFilterValue, setCabinetFilterValue] = useState(Number);
    //
    const config = {
        headers: {},
        params: {}
    }
    //
    const getDoctor = async (depId) => {
        config.params.type = 2;
        config.params.depId = depId;
        const response = await Get('organization/employee', token, config);
        if (response.data.length != 0) {
            setDoctors(response.data);
        } else {
            setDoctors([]);
        }
    }
    const getStructures = async () => {
        config.params.type = 2;
        config.params.startDate = null;
        config.params.endDate = null;
        const response = await Get('organization/structure', token, config);
        if (response.data.length != 0) {
            setStructures(response.data);
        }
        config.params.type = null;
    }

    const getCabinets = async (e) => {
        config.params.type = 3;
        config.params.parantId = e;
        config.params.startDate = null;
        config.params.endDate = null;
        const response = await Get('organization/structure', token, config);
        if (response.data.length != 0) {
            setCabinets(response.data);
        } else {
            setCabinets([]);
        }
    }

    const getInspectionTimes = async () => {
        config.params.type = null;
        const response = await Get('settings', token, config);
        if (response.data.length != 0) {
            setInspectionTimes(response.data);
        }
    }
    const getRooms = async (value) => {
        // config.params.depId = value;
        config.params.type = null;
        const response = await Get('organization/room', token, config);
        if (response.data.length != 0) {
            setRooms(response.data);
        }
    }
    //
    const [days, setDays] = useState([]);

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1);
    }

    const getLastDayOfMonth = (year, month) => {
        return new Date(year, month + 1, 0);
    }

    const firstDayOfMonth = getFirstDayOfMonth(today.getFullYear(), today.getMonth());
    const lastDayOfMonth = getLastDayOfMonth(today.getFullYear(), today.getMonth());

    const getCurrentMonth = async (firstDayOfMonth, lastDayOfMonth) => {
        const year = firstDayOfMonth.getFullYear();
        const month = firstDayOfMonth.getMonth() + 1;
        const startDay = firstDayOfMonth.getDate();
        const endDay = lastDayOfMonth.getDate();
        config.params['startDate'] = moment(firstDayOfMonth).utcOffset('+0800').format('YYYY-MM-DD');
        config.params['endDate'] = moment(lastDayOfMonth).utcOffset('+0800').format('YYYY-MM-DD');
        const response = await Get("schedule", token, config);
        const Ddays = [];
        for (let i = startDay; i <= endDay; i++) {
            const ddd = new Date(year + "-" + month + "-" + i);
            const data = getData(ddd, response.data);
            Ddays.push({
                title: ddd,
                schedule: data
            });
        }
        setDays(Ddays);
    }

    const getData = (value, data) => {
        return data.filter(item => item.workDate.includes(moment(value).format('YYYY-MM-DD')));
    }

    const changeMonth = (value) => {
        const date = new Date(value);
        const firstDayOfMonth = getFirstDayOfMonth(date.getFullYear(), date.getMonth());
        const lastDayOfMonth = getLastDayOfMonth(date.getFullYear(), date.getMonth());
        getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
    }

    const setSchedule = async (date) => {
        form.validateFields().then(async (value) => {
            var arr = { ...value };
            if (Object.keys(arr).length > 0) {
                arr.workDate = moment(date).utcOffset('+0800').format('YYYY-MM-DD HH:mm');
                arr.startTime = moment(value.startTime).format("HH:mm");
                arr.endTime = moment(value.endTime).format("HH:mm");
                if (editMode) {
                    const response = await Patch('schedule/' + id, token, config, arr);
                    if (response === 200) {
                        setEditMode(false);
                        getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
                    }
                } else {
                    const response = await Post('schedule', token, config, arr);
                    if (response === 201) {
                        getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
                    }
                }
            } else {
                openNofi('error', 'TSAG', 'Tsag oruulah')
            }
        });
    }

    const filteredCabinets = cabinets.filter((cabinet) => cabinet.parentId === cabinetFilterValue);

    const editSchedule = (item) => {
        getDoctor();
        setEditWorkDate(item.workDate);
        setEditMode(true);
        setId(item.id);
        var arr = { ...item };
        const endTime = arr.endTime.split(':');
        const startTime = arr.startTime.split(":");
        arr.endTime = moment().set({ hour: endTime[0], minute: endTime[1], second: endTime[2] });
        arr.startTime = moment().set({ hour: startTime[0], minute: startTime[1], second: startTime[2] });
        form.setFieldsValue(arr);
    }

    useEffect(() => {
        getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
        getStructures();
        getCabinets();
        getDoctor();
        getInspectionTimes();
        getRooms();
    }, [])

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-full lg:w-2/5 p-1">
                <Card
                    bordered={false}
                    title={'Цаг оруулах'}
                    className="criclebox tablespace mb-24"
                >
                    <Form layout="vertical" form={form} className="p-3">
                        <Row md={[15, 15]}>
                            <Col span={12} className="p-1">
                                <Form.Item
                                    label="Эхлэх цаг:"
                                    name="startTime"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                >
                                    <TimePicker locale={mn} format={TimeFormat} />
                                </Form.Item>
                            </Col>
                            <Col span={12} className="p-1">
                                <Form.Item
                                    label="Дуусах цаг:"
                                    name="endTime"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                >
                                    <TimePicker locale={mn} format={TimeFormat} />
                                </Form.Item>
                            </Col>
                            <Col span={24} className="p-1">
                                <Form.Item
                                    label="Тасаг:"
                                    name="structureId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                >
                                    <Select
                                        onChange={(e) => {
                                            form.setFieldValue('cabinetId', null);
                                            form.setFieldValue('doctorId', null);
                                            getCabinets(e);
                                            getDoctor(e);
                                        }}>
                                        {
                                            structures.map((structure, index) => {
                                                return (
                                                    <Option key={index} value={structure.id}>{structure.name}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24} className="p-1">
                                <Form.Item
                                    label="Кабинет:"
                                    name="cabinetId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                >
                                    <Select>
                                        {
                                            cabinets.map((cabinet, index) => {
                                                return (
                                                    <Option key={index} value={cabinet.id}>{cabinet.name}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24} className="p-1">
                                <Form.Item
                                    label="Эмч сонгох:"
                                    name="doctorId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                >
                                    <Select>
                                        {
                                            doctors.map((doctor, index) => {
                                                return (
                                                    <Option key={index} value={doctor.id}>{doctor.firstName}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12} className="p-1">
                                <Form.Item
                                    label="Үзлэгийн цаг (Минут):"
                                    name="settingsId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                >
                                    <Select>
                                        {
                                            inspectionTimes.map((inspectionTime, index) => {
                                                return (
                                                    <Option key={index} value={inspectionTime.id}>{inspectionTime.inspectionTime}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12} className="p-1">
                                <Form.Item
                                    label="Өрөө:"
                                    name="roomId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Заавал"
                                        }
                                    ]}
                                >
                                    <Select>
                                        {
                                            rooms.map((room, index) => {
                                                return (
                                                    <Option key={index} value={room.id}>{room.roomNumber}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24} className="p-1">
                                <Form.Item
                                    label="Бүртгэлийн ажилтны бүртгэх хувь:"
                                    name="percent"
                                >
                                    <Slider marks={Marks} />
                                </Form.Item>
                            </Col>
                            {
                                editMode && <Col span={24} className="p-1">
                                    <Button onClick={() => setSchedule(editWorkDate)}>
                                        ЗАсах
                                    </Button>
                                </Col>
                            }
                        </Row>
                    </Form>
                </Card>
            </div>
            <div className="w-full md:w-full lg:w-3/5 p-1">
                <Card
                    bordered={false}
                    className="criclebox tablespace mb-24"
                >
                    <div className="flex flex-wrap">
                        <div className="w-full m-2">
                            <DatePicker locale={mn} onChange={changeMonth} picker="month" />
                        </div>
                        <div className="w-full">
                            <Collapse accordion collapsible="header" className="m-2">
                                {
                                    days.map((day, index) => {
                                        return (
                                            <Panel
                                                key={index}
                                                header={moment(day.title).format('YYYY-MM-DD')}
                                                extra={<Button className="bg-sky-700 text-white" onClick={() => setSchedule(day.title)}>Нэмэх</Button>}
                                            >
                                                <div className='table-responsive' id='style-8'>
                                                    <Table className='ant-border-space' style={{ width: '100%' }}>
                                                        <thead className='ant-table-thead bg-slate-200'>
                                                            <tr>
                                                                <th className="font-bold text-sm align-middle">Эхлэх цаг</th>
                                                                <th className="font-bold text-sm align-middle">Дуусах цаг</th>
                                                                <th className="font-bold text-sm align-middle">Тасаг</th>
                                                                <th className="font-bold text-sm align-middle">Эмч</th>
                                                                <th className="font-bold text-sm align-middle">Өрөө</th>
                                                                <th className="font-bold text-sm align-middle">Бүртгэсэн</th>
                                                                <th className="font-bold text-sm align-middle">Үйлдэл</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="ant-table-tbody p-0">
                                                            {
                                                                day.schedule?.map((item, index) => {
                                                                    return (
                                                                        <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                                                            <td className='ant-table-row-cell-break-word'>{item?.startTime}</td>
                                                                            <td className='ant-table-row-cell-break-word'>{item?.endTime}</td>
                                                                            <td className='ant-table-row-cell-break-word'>{item?.structures?.name}</td>
                                                                            <td className='ant-table-row-cell-break-word'>{item?.doctor?.firstName}</td>
                                                                            <td className='ant-table-row-cell-break-word'>{item?.room?.roomNumber}</td>
                                                                            <td className='ant-table-row-cell-break-word'>{item?.authorId}</td>
                                                                            <td>
                                                                                <EditOutlined style={{ color: 'blue', fontSize: '18px' }} onClick={() => editSchedule(item)} />
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Panel>
                                        )
                                    })
                                }
                            </Collapse>
                        </div >
                    </div >
                </Card >
            </div>
        </div>
    )
}
export default DoctorAppointmentScheduleDemo;