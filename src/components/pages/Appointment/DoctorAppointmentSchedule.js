import React, { useEffect, useState } from 'react';
import { Alert, Badge, Button, Calendar, Card, Col, Form, Input, Modal, Row, Select, Slider, Switch, TimePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/mn';
import mn from 'antd/es/calendar/locale/mn_MN';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import axios from 'axios';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function DoctorAppointmentSchedule() {
    const token = useSelector(selectCurrentToken);
    const [schedules, setSchedules] = useState([]);
    const [today] = useState(moment(new Date()));
    const [isModal, setIsModal] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "x-api-key": API_KEY
        },
    };
    const TimeFormat = 'HH:mm';
    const Marks = {
        0: '0%',
        50: '50%',
        100: '100%'
    };

    const getListData = (value) => {
        let listData;
        schedules.map((schedule) => {
            const date = new Date(schedule.workDate).getDate();
            if (value.date() === date) {
                listData = [
                    {
                        title: `Эмч : ${schedule.doctor.firstName} -> ${schedule.room.roomNumber}`,
                        content: `Цаг ${schedule.startTime} -> ${schedule.endTime}`
                    },
                ];
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
                <Alert key={index} message={item.title} description={item.content} />
            ))
        );
    };

    const onSelect = (newValue) => {
        console.log(newValue);
    };

    const onPanelChange = (newValue) => {
        console.log(new Date(newValue.format('Y'), newValue.format('M'), 1));
        console.log(new Date(newValue.format('Y'), newValue.format('M'), 0));
    };

    const onFinish = (value) => {
        console.log("done", value);
    };

    const onFinishFailed = (error) => {
        console.log("error", error);
    };

    const getSchedules = async () => {

        const newDate = new Date();
        console.log("===>", new Date(newDate.getFullYear(), newDate.getMonth() + 1 , 1));
        console.log("===>", new Date(newDate.getFullYear(), newDate.getMonth() + 1 , 0));

        await axios.get(DEV_URL + "schedule", config)
            .then((response) => {
                setSchedules(response.data.response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getSchedules();
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
                            <Alert message={`Өнөөдөр: ${today?.format('YYYY-MM-DD')}`} type='success' />
                        </Col>
                        <Col span={12}>
                            <Button type='primary' block onClick={() => { setIsModal(true) }}>Цаг оруулах</Button>
                        </Col>
                    </Row>
                    <Calendar
                        dateCellRender={dateCellRender}
                        monthCellRender={monthCellRender}
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
                                name="beginTime"
                            >
                                <TimePicker locale={mn} format={TimeFormat} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Дуусах цаг:"
                                name="endTime"
                            >
                                <TimePicker locale={mn} format={TimeFormat} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Тасаг:"
                            >
                                <Select>
                                    <Option value="1">asdsa</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Эмч сонгох:"
                            >
                                <Select>
                                    <Option value="2">asdsa</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Үзлэгийн цаг (Минут):"
                            >
                                <Input type="number" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Өрөө:"
                            >
                                <Select>
                                    <Option value="2">asdsa</Option>
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