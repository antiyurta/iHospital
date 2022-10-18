import { Card, Col, Row, Space, Button, Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { ScrollRef } from "../../comman";
import PatientInformation from "../PatientInformation";
import Order from '../Order/Order';
function Ambulatory() {
    const token = useSelector(selectCurrentToken);
    const [cardLoading, setCardLoading] = useState(false);
    const [orderModal, setOrderModal] = useState(false);
    const [isConfirmLoading, setIsConfirmLoading] = useState(false);
    const scrollRef = useRef();
    const onSearch = (value) => console.log(value);
    useEffect(() => {
        ScrollRef(scrollRef);
    }, []);

    const categories = [
        // {
        //     //omnoh jor
        //     name: 'RecentRecipe',
        // },
        {
            //set order
            name: 'SetOrder',
        },
        {
            //em
            name: 'Medicine',
        },
        {
            //shinejilgee
            name: 'Examination',
        },
        {
            //onshilgoo
            name: 'Xray',
        },
        {
            //emchilgee
            name: 'Treatment',
        },
        {
            //hagalgaa mes
            name: 'Surgery',
        },
        {
            //duran
            name: 'Endo',
        }
    ]

    return (
        <div>
            <Row gutter={[8, 8]} style={{ paddingTop: '1%' }}>
                <Col span={14}>
                    <PatientInformation />
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
                            <Button type="primary" onClick={() => setOrderModal(true)}>Оношилгоо шинжилгээ захиалах</Button>
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
            <Modal
                title={'Оношилгоо шинжилгээ захиалах'}
                open={orderModal}
                onOk={() => {
                    // form.validateFields()
                    //     .then((values) => {
                    //         onFinish(values);
                    //     }).catch((error) => {
                    //         onFinishFailed(error);
                    //     })
                }}
                onCancel={() => {
                    setOrderModal(false);
                }}
                confirmLoading={isConfirmLoading}
                width="90%"
                cancelText="Болих"
                okText="Хадгалах"
            >
                <Order
                    categories={categories}
                />
            </Modal>
        </div>
    )
}
export default Ambulatory;