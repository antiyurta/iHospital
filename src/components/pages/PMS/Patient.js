import React, { useEffect, useRef, useState } from 'react';
import { Button, InputNumber, Space, Col, Form, Input, Modal, Row, message, Upload, Typography, Switch, Select, Card, Descriptions, Pagination, DatePicker } from 'antd';
import { LoadingOutlined, UserOutlined, PlusOutlined, MinusCircleOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import json
import ContactPerson from './ContactPerson.json';
import SocialStatus from './socialStatus.json';
import ChildStatus from './childStatus.json';
import serviceScopeStatus from './serviceScopeStatus.json';
//
import { Table } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { ScrollRef } from '../../comman';
import axios from 'axios';
import 'moment/locale/mn';
import mn from 'antd/es/calendar/locale/mn_MN';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';

const { Search } = Input;
const { Option } = Select;

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
    const token = useSelector(selectCurrentToken);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [spinner, setSpinner] = useState(false);
    const [editMode, setEditMode] = useState(false);
    //
    const [isChild, setIsChild] = useState(true);
    //
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState([]);
    const [view, setView] = useState([]);
    //
    const [citizens, setCitizens] = useState([]);
    const [provices, setProvices] = useState([]);
    const [towns, setTowns] = useState([]);
    //
    const [form] = Form.useForm();
    const { Title } = Typography;
    const { Option } = Select;
    const scrollRef = useRef();
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "x-api-key": API_KEY
        },
        params: {
            page: 1,
            limit: 5,
        }
    };
    const onSearch = (value, index) => {
        config.params[index] = value;
        getData(1);
    };
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
    const getData = async (page) => {
        config.params.page = page;
        await axios.get(DEV_URL + "pms/patient", config)
            .then((response) => {
                setSpinner(true);
                setData(response.data.response.data);
                setMeta(response.data.response.meta);
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
        form.setFieldsValue(row);
        setIsModalVisible(true);
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
    const getCitizens = async () => {
        config.params.type = 1;
        config.params.limit = null;
        config.params.page = null;
        await axios.get(DEV_URL + 'reference/country', config)
            .then((response) => {
                setCitizens(response.data.response.data);
            })
            .catch(() => {
                console.log("dasd");
            })
    };
    const getProvices = async () => {
        config.params.type = 2;
        config.params.limit = null;
        config.params.page = null;
        await axios.get(DEV_URL + 'reference/country', config)
            .then((response) => {
                setProvices(response.data.response.data);
            })
            .catch(() => {
                console.log("dasd");
            })
    }
    const filterTowns = async (value) => {
        config.params.type = 3;
        config.params.parentId = value;
        config.params.limit = null;
        config.params.page = null;
        await axios.get(DEV_URL + 'reference/country', config)
            .then((response) => {
                setTowns(response.data.response.data);
            })
            .catch(() => {
                console.log("dasd");
            })
    }
    const checkNumber = (event) => {
        var charCode = event.charCode
        if (
            charCode > 31 &&
            (charCode < 48 || charCode > 57) &&
            charCode !== 46
        ) {
            event.preventDefault();
        } else {
            return true;
        }
    };
    const checkIsChild = (value) => {
        if (value === 6) {
            setIsChild(false);
        } else {
            setIsChild(true);
        }

    }
    useEffect(() => {
        getData(1);
        getCitizens();
        getProvices();
        ScrollRef(scrollRef);
    }, [])
    return (
        <>
            <Card
                bordered={false}
                className="header-solid max-h-max rounded-md"
                title="Өвчтөн"
                extra={
                    <Button onClick={showModal} className='bg-sky-700 rounded-md text-white'>Нэмэх</Button>
                }
            >
                <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th className="font-bold text-sm align-middle" rowSpan={2}>№</th>
                                <th className="font-bold text-sm">Картын №</th>
                                <th className="font-bold text-sm">Овог</th>
                                <th className="font-bold text-sm">Нэр</th>
                                <th className="font-bold text-sm">Регистр №</th>
                                <th className="font-bold text-sm">Утас</th>
                                <th className="font-bold text-sm">Гэрийн хаяг</th>
                                <th className="font-bold text-sm align-middle" rowSpan={2}>Карт нээлгэсэн огноо</th>
                                <th className='w-3 font-bold text-sm align-middle' rowSpan={2}>Үйлдэл</th>
                            </tr>
                            <tr>
                                <td>
                                    <Search placeholder={"Картын № хайх"} allowClear onSearch={(e) => onSearch(e, "cardNumber")} enterButton={"Хайх"} />
                                </td>
                                <td>
                                    <Search placeholder={"Овог хайх"} allowClear onSearch={(e) => onSearch(e, "lastName")} enterButton={"Хайх"} />
                                </td>
                                <td>
                                    <Search placeholder={"Нэр хайх"} allowClear onSearch={(e) => onSearch(e, "firstName")} enterButton={"Хайх"} />
                                </td>
                                <td>
                                    <Search placeholder={"Регистр Хайх"} allowClear onSearch={(e) => onSearch(e, "registerNumber")} enterButton={"Хайх"} />
                                </td>
                                <td>
                                    <Search placeholder={"Утас хайх"} allowClear onSearch={(e) => onSearch(e, "phoneNumber")} enterButton={"Хайх"} />
                                </td>
                                <td>
                                    <Search placeholder={"Гэрийн хаяг хайх"} allowClear onSearch={(e) => onSearch(e, "address")} enterButton={"Хайх"} />
                                </td>
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
                <div>
                    <Pagination
                        className='pagination'
                        defaultCurrent={'1'}
                        pageSize={5}
                        total={meta.itemCount}
                        onChange={getData}
                    />
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
                                        <Title level={5}>Картын дугаар:{form.getFieldValue('cardNumber')}</Title>
                                        <Title level={5}>Нас: {form.getFieldValue("age")} / Хүйс:{form.getFieldValue('gender') ? 'Эр' : 'Эм'}</Title>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            name="familyName"
                                            label="Ургийн овог:"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Заавал"
                                                }
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Овог:"
                                            name="lastName"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Заавал"
                                                }
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Нэр:"
                                            name="firstName"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Заавал"
                                                }
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Иргэншил:"
                                            name="citizenId"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Заавал'
                                                }
                                            ]}
                                        >
                                            <Select>
                                                {
                                                    citizens.map((citizen, index) => {
                                                        return (
                                                            <Option key={index} value={citizen.id}>{citizen.name}</Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Регистр дугаар:"
                                            name="registerNumber"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Регистр дугаар оруулна уу'
                                                },
                                                {
                                                    validator: async (_, registerNumber) => {
                                                        if (registerNumber.length < 10) {
                                                            return Promise.reject(new Error('Хамгийн багадаа 10 үсэг'));
                                                        }
                                                    }
                                                }
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Төрсөн огноо"
                                            name="birthday"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Төрсөн огноо оруулна уу',
                                                }
                                            ]}
                                        >
                                            <DatePicker locale={mn} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Утас"
                                            name="phoneNo"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Zaawal'
                                                },
                                                {
                                                    validator: async (_, phoneNumber) => {
                                                        if (phoneNumber < 10000000 || phoneNumber > 100000000) {
                                                            return Promise.reject(new Error('Дугаар алдаатай'));
                                                        }
                                                    }
                                                }
                                            ]}
                                        >
                                            <InputNumber onKeyPress={checkNumber} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Гэрийн утас"
                                            name="homePhoneNo"
                                        >
                                            <InputNumber onKeyPress={checkNumber} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="И-мэйл"
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: "и-майл хэлбэр буруу"
                                                }
                                            ]}
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
                                                name="socialStatusType"
                                            >
                                                <Select onChange={checkIsChild}>
                                                    {
                                                        SocialStatus.map((status, index) => {
                                                            return (
                                                                <Option key={index} value={status.value} >{status.label}</Option>
                                                            )
                                                        })
                                                    }

                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Хэрэв хүүхэд бол:"
                                                name="childStatus"
                                            >
                                                <Select disabled={isChild}>
                                                    {
                                                        ChildStatus.map((child, index) => {
                                                            return (
                                                                <Option key={index} value={child.value}>{child.label}</Option>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Боловсрол:"
                                                name="educationType"
                                            >
                                                <Select>
                                                    <Option value={0}>Бага</Option>
                                                    <Option value={1}>Дунд</Option>
                                                    <Option value={2}>Дээд</Option>
                                                    <Option value={3}>Боловсролгүй</Option>
                                                    <Option value={4}>Мэргэжлийн техникийн</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                label="Үйлчлэх хүрээ:"
                                                name="serviceScopeStatusType"
                                            >
                                                <Select>
                                                    {
                                                        serviceScopeStatus.map((scope, index) => {
                                                            return (
                                                                <Option key={index} value={scope.value}>{scope.label}</Option>
                                                            )
                                                        })
                                                    }
                                                </Select>
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
                                                        name="aimagId"
                                                    >
                                                        <Select onChange={filterTowns}>
                                                            {
                                                                provices.map((provice, index) => {
                                                                    return (
                                                                        <Option key={index} value={provice.id}>{provice.name}</Option>
                                                                    )
                                                                })
                                                            }
                                                        </Select>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Сум/Дүүрэг:"
                                                        name="soumId"
                                                    >
                                                        <Select>
                                                            {
                                                                towns.map((town, index) => {
                                                                    return (
                                                                        <Option key={index} value={town.id}>{town.name}</Option>
                                                                    )
                                                                })
                                                            }
                                                        </Select>
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
                                                                provices.map((provice, index) => {
                                                                    return (
                                                                        <Option key={index} value={provice.id}>{provice.name}</Option>
                                                                    )
                                                                })
                                                            }
                                                        </Select>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Сум/Дүүрэг:"
                                                        name="insuranceSoumId"
                                                    >
                                                        <Select>
                                                            {
                                                                towns.map((town, index) => {
                                                                    return (
                                                                        <Option key={index} value={town.id}>{town.name}</Option>
                                                                    )
                                                                })
                                                            }
                                                        </Select>
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
                    <Descriptions.Item label="Аймаг/Дүүрэг">{view.countries?.name}</Descriptions.Item>
                </Descriptions>
            </Modal>
        </>
    );
}
export default Patient;