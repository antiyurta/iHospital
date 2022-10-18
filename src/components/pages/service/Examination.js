import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Modal, Pagination, Row, Select, Switch } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Get, openNofi, Post, ScrollRef } from "../../comman";
import { EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import axios from 'axios';
import 'moment/locale/mn';
import mn from 'antd/es/calendar/locale/mn_MN';
import { selectCurrentToken } from '../../../features/authReducer';
import { useSelector } from "react-redux";
const { Search } = Input;
const { Option } = Select;
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
function Examination() {
    const scrollRef = useRef();
    const token = useSelector(selectCurrentToken);
    const [form] = Form.useForm();
    const [typeForm] = Form.useForm();
    const [examinations, setExaminations] = useState([]);
    const [examinationType, setExaminationType] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [AddTypeModal, setAddTypeModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [meta, setMeta] = useState([]);
    const [id, setId] = useState([]);
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
    }
    const onSearch = (value, index) => {
        config.params[index] = value;
        getExamination(1);
    };
    const showModal = () => {
        setAddModal(true);
        setEditMode(false);
        form.resetFields();
    }
    const edit = async (row) => {
        setEditMode(true);
        setAddModal(true);
        setId(row.id);
        form.setFieldsValue(row);
    }
    const deleteModal = (id) => {
        Modal.error({
            title: 'Устгах',
            okText: 'Устгах',
            closable: true,
            content: (
                <div>
                    Устгасан дохиолдолд дахин сэргэхгүй болно
                </div>
            ),
            onOk() {
                config.params.limit = null;
                config.params.page = null;
                axios.delete(DEV_URL + "service/examination" + '/' + id, config)
                    .then((response) => {
                        if (response.status === 200) {
                            openNofi('success', 'ADasd', 'adsad');
                            getExamination(1);
                        }
                    })
                    .catch(() => {
                        openNofi('error', 'Сүлжээний алдаа', 'Интернэт холболтоо шалгаад дахин оролдоно уу');
                    })
            }
        })
    }
    const onFinishAddType = async (values) => {
        values.type = 0;
        await axios.post(DEV_URL + 'service/type', values, config)
            .then((response) => {
                openNofi('success', 'asdasd', 'sdad');
                getExaminationType();
                setAddTypeModal(false);
            }).catch((error) => {
                console.log(error);
            })
    }
    const onFinishAddEx = async (values) => {
        // console.log(values);
        config.params.limit = null;
        config.params.page = null;
        values.isActive = values.isActive ? 1 : 0;
        values.hasInsurance = values.hasInsurance ? 1 : 0;
        editMode ? await axios.patch(DEV_URL + 'service/examination/' + id, values, config)
            .then((response) => {
                openNofi('success', "sadad", "sada");
                getExamination(1);
                setAddModal(false);
            }).catch((error) => {
                console.log(error);
            })
            :
            await axios.post(DEV_URL + 'service/examination', values, config)
                .then((response) => {
                    openNofi('success', "sadad", "sada");
                    getExamination(1);
                    setAddModal(false);
                }).catch((error) => {
                    console.log(error);
                })
    }
    const onFinishFailedEx = (error) => {
        console.log(error)
    }
    const onFinishFailedAddType = (error) => {
        console.log(error);
    }
    const getExamination = async (page) => {
        config.params.page = page;
        await axios.get(DEV_URL + 'service/examination', config).then((response) => {
            setExaminations(response.data.response.data);
            setMeta(response.data.response.meta);
        }).catch((error) => {
            console.log(error);
        })
    }
    const getExaminationType = async () => {
        config.params.page = null;
        config.params.limit = null;
        config.params.type = 0;
        await axios.get(DEV_URL + 'service/type', config).then((response) => {
            setExaminationType(response.data.response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    const changeIsActive = async (type) => {
        const state = type ? 1 : 0;
        config.params.isActive = state;
        getExamination(1);
    }
    useEffect(() => {
        ScrollRef(scrollRef);
        getExamination(1);
        getExaminationType();
    }, [])
    return (
        <>
            <Card
                bordered={false}
                className="header-solid max-h-max rounded-md"
                title="Шинжилгээ"
                extra={
                    <>
                        <Button onClick={showModal} className='bg-sky-700 rounded-md text-white'>Нэмэх</Button>
                    </>
                }
            >
                <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead'>
                            <tr>
                                <th className="font-bold text-sm align-middle" rowSpan={2}>№</th>
                                <th className="font-bold text-sm">Нэр</th>
                                <th className="font-bold text-sm align-middle" rowSpan={2}>Даатгал</th>
                                <th className="font-bold text-sm align-middle" rowSpan={2}>
                                    Төлөв
                                    <Switch defaultChecked={1} checkedChildren="1" unCheckedChildren="0" className='bg-sky-700 rounded-md text-white' onChange={changeIsActive} />
                                </th>
                                <th className="font-bold text-sm align-middle" rowSpan={2}>Үнэ</th>
                                <th className="font-bold text-sm align-middle" rowSpan={2}>Хэвтэн үнэ</th>
                                <th className='w-3 font-bold text-sm align-middle' rowSpan={2}>Үйлдэл</th>
                            </tr>
                            <tr>
                                <td><Search placeholder={"Нэр хайх"} allowClear onSearch={(e) => onSearch(e, 'name')} enterButton={"Хайх"} /></td>
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody'>
                            {
                                examinations.map((row, index) => {
                                    return (
                                        <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                            <td className='ant-table-row-cell-break-word'>{meta.page * meta.limit - (meta.limit - index - 1)}</td>
                                            <td>{row.name}</td>
                                            <td>{row.hasInsurance ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />}</td>
                                            <td>{row.isActive ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />}</td>
                                            <td>{row.prices ? row.prices.price : 0}</td>
                                            <td>{row.prices ? row.prices.inpatientPrice : 0}</td>
                                            <td className='ant-table-row-cell-break-word'>
                                                <Button type="link" onClick={() => edit(row)} title='Засах' style={{ paddingRight: 5, paddingLeft: 5 }}><EditOutlined /></Button>
                                                <Button type="link" onClick={() => deleteModal(row.id)} title='Устгах' style={{ paddingLeft: 5 }} ><DeleteOutlined style={{ color: 'red' }} /></Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Pagination
                        className='pagination'
                        pageSize={5}
                        total={meta.itemCount}
                        onChange={getExamination}
                    />
                </div>
            </Card>
            <Modal
                title={editMode ? "Шинжилгээ засах" : "Шинжилгээ нэмэх"}
                cancelText="Болих"
                okText="Хадгалах"
                open={addModal}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            onFinishAddEx(values);
                        }).catch((error) => {
                            onFinishFailedEx(error);
                        })
                }}
                onCancel={() => setAddModal(false)}
                width="40%"
            >
                <Form form={form}>
                    <Row gutter={[8, 8]}>
                        <Col span={22}>
                            <Form.Item
                                label='Шинжилгээний төрөл'
                                name='examinationTypeId'
                            >
                                <Select>
                                    {
                                        examinationType.map((type, index) => {
                                            return (
                                                <Option key={index} value={type.id}>{type.name}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={2}>
                            {
                                !editMode && <Button type="link" title="Төрөл нэмэх" onClick={() => setAddTypeModal(true)}><PlusOutlined style={{ fontSize: '20px', color: 'green', textAlign: 'center' }} /></Button>
                            }
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label='Шинжилгээний нэр'
                                name='name'
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Идэвхтэй эсэх"
                                name="isActive"
                                valuePropName="checked"
                            >
                                <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Даатгалтай эсэх"
                                name="hasInsurance"
                                valuePropName="checked"
                            >
                                <Switch className="bg-sky-700" checkedChildren="Тийм" unCheckedChildren="Үгүй" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Үнэ"
                                name={['prices', 'price']}
                            >
                                <InputNumber onKeyPress={checkNumber} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Хэвтэнд ашиглах үнэ"
                                name={['prices', 'inpatientPrice']}
                            >
                                <InputNumber onKeyPress={checkNumber} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Modal
                title="Шинжилгээний төрөл нэмэх"
                open={AddTypeModal}
                onOk={() => {
                    typeForm.validateFields()
                        .then((values) => {
                            onFinishAddType(values);
                        }).catch((error) => {
                            onFinishFailedAddType(error);
                        })
                }}
                onCancel={() => { setAddTypeModal(false) }}
            >
                <Form form={typeForm}>
                    <Form.Item
                        label="Нэр"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default Examination;