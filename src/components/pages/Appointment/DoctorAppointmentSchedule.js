import React, { useEffect, useState } from 'react';
import { Alert, Badge, Button, Calendar, Card, Col, Form, Input, Modal, Row, Select, Slider, Switch, TimePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/mn';
import mn from 'antd/es/calendar/locale/mn_MN';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import axios from 'axios';
import { Get, openNofi, Post } from '../../comman';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function DoctorAppointmentSchedule() {
    const token = useSelector(selectCurrentToken);
    const [data, setData] = useState({});
    const [schedules, setSchedules] = useState([]);
    const [structures, setStructures] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [inspectionTimes, setInspectionTimes] = useState([]);
    const [today] = useState(moment(new Date()));
    const [isModal, setIsModal] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "x-api-key": API_KEY
        },
        params: {}
    };
    const TimeFormat = 'HH:mm';
    const Marks = {
        0: '0%',
        50: '50%',
        100: '100%'
    };

    const getListData = (value) => {
        let listData = [];
        schedules.map((schedule) => {
            const date = new Date(schedule.workDate).getDate();
            if (value.date() === date) {
                listData.push({
                    title: `Эмч : ${schedule.doctor.firstName} -> ${schedule.room.roomNumber}`,
                    content: `Цаг ${schedule.startTime} -> ${schedule.endTime}`
                })
            }
        })
        return listData || [];
    };

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            listData.map((item, index) => (
                <Alert className='mb-1 text-xs' key={index} message={item.title} description={item.content} />
            ))
        );
    };

    const onSelect = async (newValue) => {

        console.log(newValue);
        Modal.info({
            title: 'Цаг оруулах',
            okText: 'Хадгалах',
            closable: true,
            content: (
                <div>
                    {moment(newValue).format("YYYY-MM-DD")}
                </div>
            ),
            async onOk() {
                var arr = { ...data };
                if (Object.keys(arr).length > 0) {
                    arr.workDate = newValue;
                    arr.startTime = moment(data.startTime).format("HH:mm");
                    arr.endTime = moment(data.endTime).format("HH:mm");
                    const response = await Post('schedule', token, config, arr);
                    console.log(response);
                } else {
                    openNofi('error', 'TSAG', 'Tsag oruulah')
                }
            }
        })
    };

    const onPanelChange = (newValue) => {
        console.log("start", new Date(newValue.format('Y'), newValue.format('M'), 1));
        console.log("end", new Date(newValue.format('Y'), newValue.format('M'), 0));
    };

    const onFinish = (value) => {
        setData(value);
        console.log(data);
    };

    const onFinishFailed = (error) => {
        console.log("error", error);
    };

    const showModal = () => {
        setIsModal(true);
        form.setFieldsValue(data);
    }

    const getSchedules = async () => {
        const newDate = new Date();
        const beginDate = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
        const endDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
        config.params.startDate = beginDate;
        config.params.endDate = endDate;
        const response = await Get("schedule", token, config);
        console.log(response);
        if (response.data.length != 0) {
            setSchedules(response.data);
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

    const getDoctor = async (value) => {
        config.params.type = null;
        config.params.depId = value;
        const response = await Get('organization/employee', token, config);
        if (response.data.length != 0) {
            setDoctors(response.data);
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

    const getInspectionTimes = async () => {
        config.params.type = null;
        const response = await Get('settings', token, config);
        console.log(response);
        if (response.data.length != 0) {
            setInspectionTimes(response.data);
        }
    }

    useEffect(() => {
        getSchedules();
        getStructures();
        getInspectionTimes();
        getRooms();
    }, [])

    return (
        <>
            <Card
                bordered={false}
                className="criclebox tablespace mb-24"
            >
                <div style={{ padding: '1%' }}>
                    <Row gutter={[8, 8]}>
                        <Col span={12}>
                            <Alert className='h-8' message={`Өнөөдөр: ${today?.format('YYYY-MM-DD')}`} type='success' />
                        </Col>
                        <Col span={12}>
                            <Button type='primary' block onClick={() => showModal()}>Цаг оруулах</Button>
                        </Col>
                    </Row>
                    <Calendar
                        dateCellRender={dateCellRender}
                        monthCellRender={monthCellRender}
                        // validRange={[moment('2022-10-01'), moment('2022-10-22')]}
                        locale={mn} onSelect={onSelect} onPanelChange={onPanelChange} />
                </div>

            </Card>
            <Modal
                title='Цаг захиалга тохируулах'
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            onFinish(values);
                        }).catch((error) => {
                            onFinishFailed(error);
                        })
                }}
                onCancel={() => { setIsModal(false) }}
                open={isModal}
                cancelText="Болих"
                okText="Хадгалах"
            >
                <Form layout="vertical" form={form}>
                    <Row gutter={[8, 8]}>
                        <Col span={12}>
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
                        <Col span={12}>
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
                        <Col span={24}>
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
                        <Col span={24}>
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
                        <Col span={12}>
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
                        <Col span={12}>
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
                        <Col span={12}>
                            <Form.Item
                                label="VIP Эсэх:"
                                valuePropName="checked"
                            >
                                <Switch checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                            </Form.Item>
                        </Col>
                        <Form.Item
                            label="Бүртгэлийн ажилтны бүртгэх хувь:"
                            name="percent"
                        >
                            <Slider marks={Marks} />
                        </Form.Item>
                    </Row>
                </Form>
            </Modal>
        </>
    );
};
export default DoctorAppointmentSchedule;