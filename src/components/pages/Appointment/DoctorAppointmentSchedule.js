import React, { useState } from 'react';
import { Alert, Badge, Button, Calendar, Card, Col, Form, Input, Modal, Row, Select, Slider, Switch, TimePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/mn';
import mn from 'antd/es/calendar/locale/mn_MN';

const TimeFormat = 'HH:mm';
const Marks = {
    0: '0%',
    50: '50%',
    100: '100%'
};

const getListData = (value) => {
    let listData;
    // console.log(value.format('M'));
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'success',
                    content: 'Дотор 101 Болормаа',
                },
            ];
            break;

        case 10:
            listData = [
                {
                    type: 'success',
                    content: 'Чих хамар хоолой 203 Чимгээ',
                },
            ];
            break;
    }

    return listData || [];
};

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

function DoctorAppointmentSchedule() {
    const [today] = useState(moment(new Date()));
    const [isModal, setIsModal] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;

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
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const onSelect = (newValue) => {
        console.log(newValue);
    };

    const onPanelChange = (newValue) => {
        console.log(newValue.format('M'));
        console.log(newValue.format('Y'));

    };

    const onFinish = (value) => {
        console.log("done", value);
    };

    const onFinishFailed = (error) => {
        console.log("error", error);
    };

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