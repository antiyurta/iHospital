import { BookOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Patch, Post } from "../../comman";

const { Option } = Select;

function Report() {
    const token = useSelector(selectCurrentToken);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [reports, setReports] = useState([]);
    const [meta, setMeta] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);
    //
    const [apps, setApps] = useState([]);
    const [deps, setdeps] = useState([]);
    //
    const config = {
        headers: {},
        params: {}
    };

    const getReports = async () => {
        const response = await Get('report', token, config);
        if (response.data.length != 0) {
            setReports(response.data);
            setMeta(response.meta);
        }
    }

    const getPositions = async () => {
        config.params.type = 1;
        const response = await Get('organization/structure', token, config);
        setApps(response.data);
        config.params.type = null;
    }

    const getDepartments = async () => {
        config.params.type = 2;
        const response = await Get('organization/structure', token, config);
        setdeps(response.data);
        config.params.type = null;
    }

    const RedictEditor = (id) => {
        navigate(`/reportEditor`, { state: { reportId: id } });
    }

    const showModal = () => {
        setIsOpenModal(true);
        form.resetFields();
        setEditMode(false);
    }

    const editModal = (report) => {
        setIsOpenModal(true);
        setEditMode(true);
        setId(report.id);
        form.setFieldsValue(report);
    }

    const onFinish = async (values) => {
        if (editMode) {
            const response = await Patch('report/' + id, token, config, values);
            if (response === 200) {
                setIsOpenModal(false);
                getReports();
            }
        } else {
            const response = await Post('report', token, config, values);
            if (response === 201) {
                setIsOpenModal(false);
                getReports();
            }
        }
    }

    useEffect(() => {
        getReports();
        getPositions();
        getDepartments();
    }, [])

    return (
        <div>
            <Card
                bordered={false}
                className="header-solid max-h-max rounded-md"
                title='Маягтууд'
                extra={
                    <Button onClick={showModal} className='bg-sky-700 rounded-md text-white'>Нэмэх</Button>
                }
            >
                <div className='table-responsive p-4' id='style-8'>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th>Тасаг</th>
                                <th>Албан тушаал</th>
                                <th>Маягт нэр</th>
                                <th>Үйлдэл</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reports.map((report, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{report.depId}</td>
                                            <td>{report.appId}</td>
                                            <td>{report.name}</td>
                                            <td>
                                                <Button type="link" onClick={() => editModal(report)} title='Засах' style={{ paddingRight: 5, paddingLeft: 5 }}><EditOutlined /></Button>
                                                <Button type="link" onClick={() => RedictEditor(report.id)} title='Маягт Засах' style={{ paddingRight: 5, paddingLeft: 5 }}><BookOutlined /></Button>
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
                title={'Маягт нэмэх'}
                open={isOpenModal}
                onCancel={() => setIsOpenModal(false)}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            onFinish(values);
                        }).catch((error) => {
                            console.log(error);
                        })
                }}
            >
                <Form form={form}>
                    <Form.Item
                        label="Тасаг"
                        name="depId"
                        rules={[
                            {
                                required: true,
                                message: "Zaawal"
                            }
                        ]}
                    >
                        <Select>
                            {
                                deps.map((dep, index) => {
                                    return (
                                        <Option key={index} value={dep.id}>{dep.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Албан тушаал"
                        name="appId"
                        rules={[
                            {
                                required: true,
                                message: "Zaawal"
                            }
                        ]}
                    >
                        <Select>
                            {
                                apps.map((app, index) => {
                                    return (
                                        <Option key={index} value={app.id}>{app.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Маягт нэр"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Zaawal"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default Report;