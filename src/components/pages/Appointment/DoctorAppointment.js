import { Alert, Button, Card, Col, DatePicker, Input, Row, Select, Space, Segmented, Collapse, Modal, Descriptions } from 'antd';
import Table from 'react-bootstrap/Table';
import { ScrollRef } from '../../comman';
import moment from 'moment';
import 'moment/locale/mn';
import mn from 'antd/es/calendar/locale/mn_MN';
import React, { useEffect, useRef, useState } from 'react';
import male from '../../../assets/images/maleAvatar.svg';

const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;
function DoctorAppointment() {
    const onSearch = (value) => console.log(value);
    const [today] = useState(moment(new Date()));
    const [segmentOption, setSegmentOption] = useState([]);
    const [appointmentModal, setAppointmentModal] = useState(false);
    const [isConfirmLoading, setIsConfirmLoading] = useState(false);
    const [cardLoading, setCardLoading] = useState(false);
    const scrollRef = useRef();

    const mountShower = () => {
        setSegmentOption([
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '29',
            '30',
            '31'
        ])
    }

    useEffect(() => {
        mountShower();
        ScrollRef(scrollRef);
    }, [])
    return (
        <Row gutter={[8, 8]}>
            <Col span={8}>
                <Card
                    bordered={false}
                    title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>}
                    className="header-solid h-full"
                    loading={cardLoading}
                    bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                >
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <img src={male} alt="avatar" />
                        </Col>
                        <Col span={16}>
                            <div style={{ display: 'inline-flex' }}>
                                <label style={{ alignSelf: 'center' }}>Регистр:</label>
                                <Search placeholder="Хайх" onSearch={onSearch} enterButton="Хайх" />
                            </div>
                            <label style={{ width: '100%', paddingBottom: 5 }}>Овог: <b>Ширчиндэмбэрэл</b></label>
                            <br />
                            <label style={{ width: '100%', paddingBottom: 5 }}>Нэр: <b>Амарбат</b></label>
                            <br />
                            <label style={{ width: '100%' }}>Хүйс: <b>Эр</b></label>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    bordered={false}
                    title={<h6 className="font-semibold m-0">Үзлэгийн түүх</h6>}
                    className="header-solid h-full"
                    bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                >
                    <div className='table-responsive' id='style-8' ref={scrollRef}>
                        <Table className='ant-border-space'>
                            <thead className='ant-table-thead'>
                                <tr>
                                    <th>Огноо</th>
                                    <th>Кабинет</th>
                                    <th>Эмч</th>
                                    <th>Төлбөр</th>
                                    <th style={{ backgroundColor: '#fff' }}>Статус</th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    bordered={false}
                    title={<h6 className="font-semibold m-0">Төлбөрийн мэдээлэл</h6>}
                    className="header-solid h-full"
                    bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                >
                    <div className='table-responsive' id='style-8' ref={scrollRef}>
                        <Table className='ant-border-space'>
                            <thead className='ant-table-thead'>
                                <tr>
                                    <th>Огноо</th>
                                    <th>Төрөл</th>
                                    <th>Төлбөр</th>
                                    <th style={{ backgroundColor: '#fff' }}>Ажилтан</th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                </Card>
            </Col>
            <Col span={24}>
                <Card
                    bordered={false}
                    title={<h6 className="font-semibold m-0">Цаг захиалга</h6>}
                    className="header-solid h-full"
                    bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                    loading={cardLoading}
                    extra={
                        <Space>
                            <Button type="danger" onClick={() => setAppointmentModal(true)}>Яаралтай</Button>
                            <Alert message={`Өнөөдөр: ${today?.format('YYYY-MM-DD')}`} type='success' />
                            <Select placeholder="Тасаг сонгох">
                                <Option value="2">sdad</Option>
                            </Select>
                            <Select placeholder="Эмч сонгох">
                                <Option value="2">sdad</Option>
                            </Select>
                            <DatePicker locale={mn} picker="month" />
                        </Space>
                    }
                >
                    <div style={{ paddingLeft: '20%', paddingRight: '20%', paddingBottom: "1%" }}>
                        <Segmented options={segmentOption} />
                    </div>
                    <Collapse>
                        <Panel header="103 -> Кабинет: Дотрын Эмч: Сувдаа" key="1">
                            <div className='table-responsive' id='style-8' ref={scrollRef}>
                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead'>
                                        <tr>
                                            <th>Цаг</th>
                                            <th>Овог</th>
                                            <th>Нас </th>
                                            <th>Хүйс</th>
                                            <th>Регистерийн №</th>
                                            <th>Статус</th>
                                            <th>Утас</th>
                                            <th>Захиалсан огноо</th>
                                            <th>Ирсэн цаг</th>
                                            <th style={{ backgroundColor: '#fff' }}>Бүртгэсэн</th>
                                        </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody'>
                                        <tr>
                                            <td>9:5 - 9:20</td>
                                            <td>Ширчиндэмбэрэл</td>
                                            <td>Амарбат</td>
                                            <td>25</td>
                                            <td>Эр</td>
                                            <td>ЙЮ97043019</td>
                                            <td>-</td>
                                            <td>2022/09/16</td>
                                            <td>-</td>
                                            <td style={{ backgroundColor: '#fff' }}>Амарбат</td>
                                        </tr>
                                        <tr>
                                            <td>9:20 - 9:35</td>
                                            <td>Гантуяа</td>
                                            <td>Өлзийхутаг</td>
                                            <td>25</td>
                                            <td>Эр</td>
                                            <td>КИ98042115</td>
                                            <td>-</td>
                                            <td>2022/09/16</td>
                                            <td>-</td>
                                            <td style={{ backgroundColor: '#fff' }}>Амарбат</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Panel>
                        <Panel header="102 -> Кабинет: Уушги-Харшил : Түмэнцэцэг" key="2">
                            <p>sdadsa</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Modal
                open={appointmentModal}
                onOk={() => {
                    console.log('sdasd')
                }}
                onCancel={() => {
                    setAppointmentModal(false);
                }}
                confirmLoading={isConfirmLoading}
                cancelText="Болих"
                okText="Хадгалах"
            >
                <Descriptions title="Цаг захиалах" layout="vertical">
                    <Descriptions.Item label="Кабинет">Дотрын</Descriptions.Item>
                    <Descriptions.Item label="Эмч">Сувдаа</Descriptions.Item>
                    <Descriptions.Item label="Үйлчүүлэгч">Ширчиндэмбэрэл Амарбат</Descriptions.Item>
                    <Descriptions.Item label="Цаг">9:20-9:35</Descriptions.Item>
                    <Descriptions.Item label="Өрөөийн дугаар">103</Descriptions.Item>
                </Descriptions>
                <Select>
                    <Option value="0">Бэлэн</Option>
                    <Option value="1">Даатгал</Option>
                    <Option value="2">Улс</Option>
                </Select>
            </Modal>
        </Row>
    );
}
export default DoctorAppointment;