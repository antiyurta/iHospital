import React, { useEffect, useRef, useState } from 'react';
import { Button, Space, Col, Form, Input, Modal, Row, message, Upload, Typography, Switch, Select, Card, Descriptions } from 'antd';
import { LoadingOutlined, UserOutlined, PlusOutlined, MinusCircleOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import ContactPerson from './ContactPerson.json';
import { Table } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { ScrollRef } from '../../comman';
import axios from 'axios';

const { Search } = Input;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('JPEG or PNG');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('SMALLER 2MB !');
    }

    return isJpgOrPng && isLt2M;
}

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Patient() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [spinner, setSpinner] = useState(false);
    const [data, setData] = useState([]);
    const [view, setView] = useState([]);
    const [form] = Form.useForm();
    const { Title } = Typography;
    const { Option } = Select;
    const scrollRef = useRef();
    const onSearch = (value) => console.log(value);
    const handleChange = (info) => {
        console.log(info);
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <UserOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Зураг оруулах
            </div>
        </div>
    );

    const getData = async () => {
        await axios.get(DEV_URL + "pms/patient", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "x-api-key": API_KEY
            }
        })
            .then((response) => {
                setSpinner(true);
                setData(response.data.response.data);
            })
            .catch(() => console.log("sada"));
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const viewModal = (row) => {
        console.log(row);
        setView(row);
        setIsViewModalVisible(true);
    }


    const editModal = (row) => {
        console.log(row);
    }

    const deleteModal = (id) => {
        console.log(id);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = async (data) => {
        console.log(data);
    };
    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);
    }
    useEffect(() => {
        getData();
        ScrollRef(scrollRef);
    }, [])
    return (
        <>
            <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Өвчтөн"
                extra={
                    <Search placeholder="Хайх" onSearch={onSearch} enterButton="Хайх" />
                }
            >
                <div className='table-responsive' id='style-8' ref={scrollRef}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead'>
                            <tr>
                                <th>№</th>
                                <th>Картын №</th>
                                <th>Овог</th>
                                <th>Нэр</th>
                                <th>Регистр №</th>
                                <th>Нас</th>
                                <th>Хүйс</th>
                                <th>Утас</th>
                                <th>Гэрийн хаяг</th>
                                <th>Карт нээлгэсэн огноо</th>
                                {spinner ?
                                    <th style={{ width: 10 }}>
                                        <span className='ant-table-header-column'>
                                            <div style={{ textAlign: 'center' }}>
                                                <span className='ant-table-column-title'>
                                                    <Button type='link' onClick={showModal} title='Нэмэх' ><PlusOutlined style={{ fontSize: '20px', color: 'green', textAlign: 'center' }} /></Button>
                                                </span>
                                            </div>
                                        </span>
                                    </th> : <th style={{ backgroundColor: 'white' }}></th>}
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody'>
                            {spinner ?
                                data.map((row, index) => {
                                    return (
                                        <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                            <td className='ant-table-row-cell-break-word'>{index + 1}</td>
                                            <td className='ant-table-row-cell-break-word'>{row.cardNumber}</td>
                                            <td className='ant-table-row-cell-break-word'>{row.lastName}</td>
                                            <td className='ant-table-row-cell-break-word'>{row.firstName}</td>
                                            <td className='ant-table-row-cell-break-word'>{row.registerNumber}</td>
                                            <td className='ant-table-row-cell-break-word'>25</td>
                                            <td className='ant-table-row-cell-break-word'>Эр</td>
                                            <td className='ant-table-row-cell-break-word'>{row.phoneNo}</td>
                                            <td className='ant-table-row-cell-break-word'>{row.address}</td>
                                            <td className='ant-table-row-cell-break-word'>{row.createdAt}</td>

                                            <td className='ant-table-row-cell-break-word'>
                                                <Button type="link" onClick={() => viewModal(row)} title='Харах' style={{ paddingRight: 5 }}><EyeOutlined /></Button>
                                                <Button type="link" onClick={() => editModal(row)} title='Засах' style={{ paddingRight: 5, paddingLeft: 5 }}><EditOutlined /></Button>
                                                <Button type="link" onClick={() => deleteModal(row.id)} title='Устгах' style={{ paddingLeft: 5 }} ><DeleteOutlined style={{ color: 'red' }} /></Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={10} size='lg' style={{ backgroundColor: 'white', textAlign: 'center' }}>
                                        <Spinner animation='grow' style={{ color: '#1890ff' }} />
                                    </td>
                                </tr>}
                        </tbody>
                    </Table>
                </div>
            </Card>
            <Modal
                title="Өвчтөн бүртгэх"
                open={isModalVisible}
                okText="Хадгалах"
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            onFinish(values);
                        }).catch((error) => {
                            onFinishFailed(error);
                        })
                }}
                cancelText="Болих"
                onCancel={handleCancel}
                width="90%"
            >
                <Form form={form} layout="vertical">
                    <Row gutter={[8, 8]}>
                        <Col span={8}>
                            <fieldset className='scheduler-border'>
                                <legend className='scheduler-border'>Ерөнхий мэдэлэл</legend>
                                <Row gutter={[15, 15]}>
                                    <Col span={12}>
                                        <Form.Item>
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="avatar-uploader"
                                                showUploadList={false}
                                                action="http://192.168.0.106:8000/local-files/fileUpload"
                                                beforeUpload={beforeUpload}
                                                onChange={handleChange}
                                            >
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt="avatar"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                ) : (
                                                    uploadButton
                                                )}
                                            </Upload>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Title level={5}>Картын дугаар:</Title>
                                        <Title level={5}>Нас / Хүйс:</Title>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            name="asdas"
                                            label="Ургийн овог:"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Овог:"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Нэр:"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Иргэншил:"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Регистр дугаар:"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Төрсөн огноо"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Утас"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Гэрийн утас"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="И-мэйл"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </fieldset>
                        </Col>
                        <Col span={16}>
                            <Col span={24}>
                                <fieldset className='scheduler-border'>
                                    <legend className='scheduler-border'>Нэмэлт мэдээлэл</legend>
                                    <Row gutter={[8, 8]}>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Нийгмийн байдал:"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Хэрэв хүүхэд бол:"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Боловсрол:"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Үйлчлэх хүрээ:"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Ажлын газар:"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Албан тушаал:"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Байгууллагын нэр:"
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </fieldset>
                            </Col>
                            <Col span={24}>
                                <Row gutter={[8, 8]}>
                                    <Col span={12}>
                                        <fieldset className='scheduler-border'>
                                            <legend className='scheduler-border'>Оршин суугаа хаяг</legend>
                                            <Row gutter={[8, 8]}>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Аймаг/Хот:"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Сум/Дүүрэг:"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Баг/Хороо:"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Гудамж/Байр:"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                    </Col>
                                    <Col span={12}>
                                        <fieldset className='scheduler-border'>
                                            <legend className='scheduler-border'>Даатгалын харьяалал</legend>
                                            <Row gutter={[8, 8]}>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Аймаг/Хот:"
                                                        name="city"
                                                    >
                                                        <Select
                                                            allowClear
                                                        >
                                                            {
                                                                ContactPerson.map((person, index) => {
                                                                    return (
                                                                        <Option key={index} value={person.value} >{person.label}</Option>
                                                                    )
                                                                })
                                                            }
                                                        </Select>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Сум/Дүүрэг:"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Даатгалын хэлбэр:"
                                                        valuePropName="checked"
                                                    >
                                                        <Switch checkedChildren="ХУВЬ" unCheckedChildren="ТӨР" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                        <Col span={12}>
                            <fieldset className='scheduler-border'>
                                <legend className='scheduler-border'>Холбоо барих хүний мэдээлэл</legend>
                                <Form.List
                                    name="ContactPerson"
                                >
                                    {
                                        (fields, { add, remove }) => (
                                            <>
                                                {fields.map(({ key, name, ...restField }) => (
                                                    <Space
                                                        key={key}
                                                        style={{ display: 'flex', marginBottom: 8 }}
                                                        align="center"
                                                    >
                                                        <Form.Item
                                                            {...restField}
                                                            label='Хамаарал'
                                                            name={[name, 'relationshipId']}
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            label="Утас"
                                                            name={[name, 'phoneNo']}
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </Space>

                                                ))}
                                                <Form.Item>
                                                    <Button
                                                        type="dashed"
                                                        onClick={() => add()}
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        icon={<PlusOutlined />}
                                                    >
                                                        Нэмэх
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )

                                    }
                                </Form.List>

                            </fieldset>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Modal
                title='Өвчтөн'
                width="80%"
                open={isViewModalVisible}
                footer={null}
                onCancel={() => {
                    setIsViewModalVisible(false)
                }}
            >
                <Descriptions bordered>
                    <Descriptions.Item label="Картын дугаар">{view.cardNumber}</Descriptions.Item>
                    <Descriptions.Item label="Ургийн овог">{view.familyName}</Descriptions.Item>
                    <Descriptions.Item label="Овог">{view.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Нэр">{view.firstName}</Descriptions.Item>
                    <Descriptions.Item label="Иргэншил">{ }</Descriptions.Item>
                    <Descriptions.Item label="Регистр дугаар">{view.registerNumber}</Descriptions.Item>
                    <Descriptions.Item label="Төрсөн огноо">{ }</Descriptions.Item>
                    <Descriptions.Item label="Утас">{view.phoneNo}</Descriptions.Item>
                    <Descriptions.Item label="Гэрийн утас">{view.homePhoneNo}</Descriptions.Item>
                    <Descriptions.Item label="И-мэйл">{view.email}</Descriptions.Item>
                </Descriptions>
            </Modal>
        </>
    );
}
export default Patient;