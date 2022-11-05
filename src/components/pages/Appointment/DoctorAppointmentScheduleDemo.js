import { Form, Select, Button, Switch, Slider, Card, Collapse, DatePicker, Row, Col, TimePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import mn from 'antd/es/calendar/locale/mn_MN';
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import { Table } from "react-bootstrap";

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
    //
    const [doctors, setDoctors] = useState([]);
    const [structures, setStructures] = useState([]);
    const [inspectionTimes, setInspectionTimes] = useState([]);
    const [rooms, setRooms] = useState([]);
    //
    const config = {
        headers: {},
        params: {}
    }
    //
    const getDoctor = async (value) => {
        config.params.type = null;
        config.params.depId = value;
        const response = await Get('organization/employee', token, config);
        if (response.data.length != 0) {
            setDoctors(response.data);
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
                schedule: data[0]
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
                const response = await Post('schedule', token, config, arr);
                if (response === 201) {
                    getCurrentMonth();
                }
            } else {
                openNofi('error', 'TSAG', 'Tsag oruulah')
            }
        })
    }

    useEffect(() => {
        const firstDayOfMonth = getFirstDayOfMonth(today.getFullYear(), today.getMonth());
        const lastDayOfMonth = getLastDayOfMonth(today.getFullYear(), today.getMonth());
        getCurrentMonth(firstDayOfMonth, lastDayOfMonth);
        getStructures();
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
                                    <Select onChange={getDoctor}>
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
                                                            </tr>
                                                        </thead>
                                                        <tbody className="ant-table-tbody p-0">
                                                            <tr className='ant-table-row ant-table-row-level-0'>
                                                                <td className='ant-table-row-cell-break-word'>{day.schedule?.startTime}</td>
                                                                <td className='ant-table-row-cell-break-word'>{day.schedule?.endTime}</td>
                                                                <td className='ant-table-row-cell-break-word'>{day.schedule?.structures?.name}</td>
                                                                <td className='ant-table-row-cell-break-word'>{day.schedule?.doctor?.firstName}</td>
                                                                <td className='ant-table-row-cell-break-word'>{day.schedule?.room?.roomNumber}</td>
                                                                <td className='ant-table-row-cell-break-word'>{day.schedule?.authorId}</td>
                                                            </tr>
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