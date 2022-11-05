import { DeleteOutlined, EditOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, InputNumber, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Delete, Get, Patch, Post } from "../../comman";
import Order from "../Order/Order";

function Packages() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);
    const [meta, setMeta] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [form] = Form.useForm();
    const categories = [
        {
            //shinejilgee
            name: "Examination",
        },
        {
            //onshilgoo
            name: "Xray",
        },
        {
            //emchilgee
            name: "Treatment",
        },
        {
            //hagalgaa mes
            name: "Surgery",
        },
        {
            //duran
            name: "Endo",
        },
    ];
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
    const showModal = () => {
        setIsOpenModal(true);
        setEditMode(false);
        form.resetFields();
    }

    const editModal = async (id) => {
        const response = await Get('service/package/' + id, token, config);
        form.setFieldsValue(response);
        setEditMode(true);
        setId(response.id);
        setIsOpenModal(true);
    }

    const deleteModal = async (id) => {
        Modal.error({
            title: 'Устгах',
            okText: 'Устгах',
            closable: true,
            content: (
                <div>
                    Устгасан дохиолдолд дахин сэргэхгүй болно
                </div>
            ),
            async onOk() {
                await Delete("service/package/" + id, token, config);
                getPackages();
            }
        });
    }

    const AddServices = async (value) => {
        setIsOpenSecondModal(false);
        if (editMode) {
            var arr = await form.validateFields();
            value = value.concat(arr?.services);
        }
        form.setFieldsValue({ services: value });
    }

    const savePack = async () => {
        form.validateFields().then(async (value) => {
            if (editMode) {
                const response = await Patch('service/package/' + id, token, config, value);
                if (response === 200) {
                    getPackages();
                    setIsOpenModal(false);
                }
            } else {
                const response = await Post('service/package', token, config, value);
                if (response === 201) {
                    getPackages();
                    setIsOpenModal(false);
                }
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const getPackages = async () => {
        const response = await Get('service/package', token, config);
        setData(response.data);
        setMeta(response.meta);
    }

    useEffect(() => {
        getPackages();
    }, [])

    return (
        <div>
            <Card
                bordered={false}
                className="header-solid max-h-max rounded-md"
                title="Багц"
                extra={
                    <Button onClick={showModal} className='bg-sky-700 rounded-md text-white'>Нэмэх</Button>
                }
            >
                <div className='table-responsive p-4' id='style-8'>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th>Нэр</th>
                                <th>Үнэ</th>
                                <th>Насны доод хязгаар</th>
                                <th>Насны дээд хязгаар</th>
                                <th>Үйлчилгээнүүд</th>
                                <th>Үйлдэл</th>
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody p-0'>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.minAge}</td>
                                            <td>{item.maxAge}</td>
                                            <td>
                                                <ul className="list-disc">
                                                    {
                                                        item.services.map((service, idx) => {
                                                            return (
                                                                <li key={idx}>{service.serviceName}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </td>
                                            <td>
                                                <Button type="link" onClick={() => editModal(item.id)} title='Засах' style={{ paddingRight: 5, paddingLeft: 5 }}><EditOutlined /></Button>
                                                <Button type="link" onClick={() => deleteModal(item.id)} title='Устгах' style={{ paddingLeft: 5 }} ><DeleteOutlined style={{ color: 'red' }} /></Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Card>
            <Modal
                title="Багц нэмэх"
                onCancel={() => setIsOpenModal(false)}
                onOk={savePack}
                open={isOpenModal}
                width={'50%'}
            >
                <Form
                    form={form}
                >
                    <Row gutter={[8, 8]}>
                        <Col span={12}>
                            <Form.Item
                                label='Багц нэр'
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <Input placeholder="Багц нэр" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Үнэ'
                                name="price"
                                rules={[
                                    {
                                        required: true,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <InputNumber placeholder="Үнэ" onKeyPress={checkNumber} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Насны доод'
                                name="minAge"
                                rules={[
                                    {
                                        required: true,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <InputNumber placeholder="Насны доод" onKeyPress={checkNumber} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label='Насны дээд'
                                name="maxAge"
                                rules={[
                                    {
                                        required: true,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <InputNumber placeholder="Насны дээд" onKeyPress={checkNumber} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.List name="services">
                                {
                                    (fields, { add, remove }) => (
                                        <>
                                            <div className='table-responsive p-4' id='style-8'>
                                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                                    <thead className='ant-table-thead bg-slate-200'>
                                                        <tr>
                                                            <th>Нэр</th>
                                                            <th>Yнэ</th>
                                                            <th>Үйлдэл</th>
                                                            <th>
                                                                <Button
                                                                    onClick={() => setIsOpenSecondModal(true)}
                                                                >
                                                                    нэмэх
                                                                </Button>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {fields.map(({ key, name, }) => (
                                                            <tr key={key}>
                                                                <td>
                                                                    <Form.Item
                                                                        name={[name, 'serviceName']}
                                                                    >
                                                                        <Input disabled={true} />
                                                                    </Form.Item>
                                                                </td>
                                                                <td>
                                                                    <Form.Item
                                                                        name={[name, 'servicePrice']}
                                                                    >
                                                                        <Input disabled={true} />
                                                                    </Form.Item>
                                                                </td>
                                                                <td>
                                                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </>
                                    )
                                }
                            </Form.List>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Modal
                onCancel={() => setIsOpenSecondModal(false)}
                footer={null}
                open={isOpenSecondModal}
                width={'80%'}
            >
                <Order isPackage={true} isDoctor={false} categories={categories} save={AddServices} />
            </Modal>
        </div>
    )
}
export default Packages;