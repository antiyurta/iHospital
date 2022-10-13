import { Card, Col, Row, Input, Tabs, Space, Button, Image } from "antd";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import male from '../../../assets/images/maleAvatar.svg';
import { ScrollRef } from "../../comman";

const { Search } = Input;

function Payment() {
    const [cardLoading, setCardLoading] = useState(false);
    const scrollRef = useRef();
    const onSearch = (value) => console.log(value);
    useEffect(() => {
        ScrollRef(scrollRef);
    }, [])
    return (
        <Tabs defaultActiveKey="1" type="card">
            <Tabs.TabPane tab="Амбултори" key="1">
                <Row gutter={[8, 8]} style={{ paddingTop: '1%' }}>
                    <Col span={14}>
                        <Card
                            bordered={false}
                            title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>}
                            className="header-solid max-h-max rounded-md"
                            loading={cardLoading}
                            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                        >
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Image width={100} src={male} />
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
                    <Col span={10}>
                        <Card
                            bordered={false}
                            title={<h6 className="font-semibold m-0">Туслах цэс</h6>}
                            className="header-solid max-h-max rounded-md"
                            loading={cardLoading}
                            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                        >
                            <Space>
                                <Button type="primary">Оношилгоо шинжилгээ захиалах</Button>
                                <Button type="primary">Хэвтэн эмчлүүлэх</Button>
                                <Button type="primary">Хэвтэн эмчлүүлэх цонх</Button>
                            </Space>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card
                            bordered={false}
                            className="header-solid max-h-max rounded-md"
                            loading={cardLoading}
                            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
                        >
                            <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead'>
                                        <tr>
                                            <th>Үзлэгийн огноо</th>
                                            <th>Картын №</th>
                                            <th>Овог</th>
                                            <th>Нэр</th>
                                            <th>Регистрийн дугаар</th>
                                            <th>Хүйс</th>
                                            <th>Даатгал</th>
                                            <th>Үзлэг</th>
                                        </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody'>
                                        <tr>
                                            <td>2022/09/16</td>
                                            <td>2177747352</td>
                                            <td>Ширчиндэмбэрэл</td>
                                            <td>Амарбат</td>
                                            <td>ЙЮ97043019</td>
                                            <td>Эр</td>
                                            <td>Даатгалгүй</td>
                                            <td style={{ backgroundColor: '#fff' }}>Анхан</td>
                                        </tr>
                                        <tr>
                                            <td>2022/09/16</td>
                                            <td>2177747352</td>
                                            <td>Гантуяа</td>
                                            <td>Өлзийхутаг</td>
                                            <td>КИ98042115</td>
                                            <td>Эр</td>
                                            <td>Даатгалгүй</td>
                                            <td style={{ backgroundColor: '#fff' }}>Анхан</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Хэвтэн эмчлүүлэх" key="2">
                Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Бусад захиалга" key="3">
                Content of Tab Pane 3
            </Tabs.TabPane>
        </Tabs>
    )
}
export default Payment;