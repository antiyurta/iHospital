import { Button, Card, Col, DatePicker, Descriptions, Form, Input, InputNumber, Modal, Pagination, Row, Select, Switch } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
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
    const [examination, setExamination] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [AddTypeModal, setAddTypeModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [meta, setMeta] = useState([]);
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
    const onSearch = (value) => {

    }
    const showModal = () => {
        setAddModal(true);
    }
    const view = async (id) => {
        await axios.get(DEV_URL + "service/examination/" + id,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "x-api-key": API_KEY
                },
            })
            .then((response) => {
                setExamination(response.data.response);
                setViewModal(true);
            }).catch((error) => {
                console.log(error);
            })
    }
    const edit = async (row) => {
        setEditMode(true);
        setAddModal(true);
        form.setFieldsValue(row);
    }
    const deleteModal = (id) => {
    }
    const onFinishAddType = async (values) => {
        await Post('service/etype', values)
            .then((response) => {
                openNofi('success', 'asdasd', 'sdad');
                getExaminationType();
                setAddTypeModal(false);
            }).catch((error) => {
                console.log(error);
            })
    }
    const onFinishAddEx = async (values) => {
        await Post('service/examination', values)
            .then((response) => {
                openNofi('success', "sadad", "sada");
                getExamination();
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
        await axios.get(DEV_URL + 'service/examination', {
            headers: {
                "Authorization": `Bearer ${token}`,
                "x-api-key": API_KEY
            },
            params: {
                limit: 5,
                page: page
            }
        }).then((response) => {
            setExaminations(response.data.response.data);
            setMeta(response.data.response.meta);
        }).catch((error) => {
            console.log(error);
        })
    }
    const getExaminationType = async () => {
        await axios.get(DEV_URL + 'service/etype', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "x-api-key": API_KEY
            },
        }).then((response) => {
            setExaminationType(response.data.response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        ScrollRef(scrollRef);
        getExamination(1);
        // getExaminationType();
    }, [])
    return (
        <>
            <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Шинжилгээ"
                extra={
                    <Search placeholder="Хайх" onSearch={onSearch} enterButton="Хайх" />
                }
            >
                <div className='table-responsive' id='style-8' ref={scrollRef}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead'>
                            <tr>
                                <th>№</th>
                                <th>Нэр</th>
                                {/* <th>Үнэ</th> */}
                                <th>Даатгал</th>
                                <th>Төлөв</th>
                                <th style={{ width: 10 }}>
                                    <span className='ant-table-header-column'>
                                        <div style={{ textAlign: 'center' }}>
                                            <span className='ant-table-column-title'>
                                                <Button type='link' onClick={showModal} title='Нэмэх' ><PlusOutlined style={{ fontSize: '20px', color: 'green', textAlign: 'center' }} /></Button>
                                            </span>
                                        </div>
                                    </span>
                                </th>
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
                                            <td className='ant-table-row-cell-break-word'>
                                                <Button type="link" onClick={() => view(row.id)} title='Харах' style={{ paddingRight: 5 }}><EyeOutlined /></Button>
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
                title={'Дэлгэрэнгүй'}
                open={viewModal}
                onCancel={() => setViewModal(false)}
                width="80%"
            >
                <Descriptions bordered>
                    <Descriptions.Item label={'Шинэжилгээний Төрөл'}>{examination.types?.name}</Descriptions.Item>
                    <Descriptions.Item label={'Шинэжилгээний Нэр'}>{examination.name}</Descriptions.Item>
                    <Descriptions.Item label={'Даатгал'}>{examination.hasInsurance ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />}</Descriptions.Item>
                    <Descriptions.Item label={'Идэвхтэй эсэх'}>{examination.isActive ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />}</Descriptions.Item>
                    <Descriptions.Item label={'Үнэ'}>{examination.prices?.price}</Descriptions.Item>
                    <Descriptions.Item label={'Хэвтэнд ашиглах үнэ'}>{examination?.prices?.inpatientPrice}</Descriptions.Item>
                    <Descriptions.Item label={'Үнэ ашигласан огноо'}>{examination?.prices?.createdAt}</Descriptions.Item>
                </Descriptions>
            </Modal>
            <Modal
                title="Шинжилгээ нэмэх"
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
                            <Button type="link" title="Төрөл нэмэх" onClick={() => setAddTypeModal(true)}><PlusOutlined style={{ fontSize: '20px', color: 'green', textAlign: 'center' }} /></Button>
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
                                name="price"
                            >
                                <InputNumber onKeyPress={checkNumber} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Хэвтэнд ашиглах үнэ"
                                name="inpatientPrice"
                            >
                                <InputNumber onKeyPress={checkNumber} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Үнэ ашиглах огноо"
                                name="begindate"
                            >
                                <DatePicker locale={mn} />
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