import { Button, Form, InputNumber, Modal, Select } from "antd";
import { scales } from "chart.js";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, getAge, Post } from "../../../comman";
import test from './test.json';
const { Option } = Select;
function InputOutput({ PatientId, ListId, PatientData }) {
    let location = useLocation();
    console.log("location", location);
    const token = useSelector(selectCurrentToken);
    const printRef = useRef();
    const [form] = Form.useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [datas, setDatas] = useState([]);
    const getData = async () => {
        const conf = {
            headers: {},
            params: {
                inpatientRequestId: ListId
            }
        };
        const response = await Get('report/fluid-balance', token, conf);
        setDatas(response);

    };
    const checkNumber = (event) => {
        var charCode = event.charCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
            event.preventDefault();
        } else {
            return true;
        }
    };
    const onFinish = async (values) => {
        const conf = {
            headers: {},
            params: {}
        };
        const defualtData = {
            patientId: PatientId,
            inpatientRequestId: ListId,
        };
        const data = { ...defualtData, ...values };
        const response = await Post('inpatient/fluidBalance', token, conf, data);
    };
    //
    const [status, setStatus] = useState(Number);
    const changeStatus = (e) => {
        setStatus(e);
    }
    const column = [
        {
            title: (<p className="">Oгноо</p>),
            dataIndex: "createdAt"
        },
        {
            title: "Биед орсон шингэн /ml хэмжих нэгж/",
            children: [
                {
                    title: "Хэрхэн"
                },
                {
                    title: "Хэрхэн"
                },
                {
                    title: "Хэрхэн"
                },
                {
                    title: "Хэрхэн"
                }
            ]
        }
    ];
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div ref={printRef}>
                <div className="page">
                    <div className="flow-root">
                        <p className="float-right">СМ-3 хавсралт 13</p>
                    </div>
                    <p className="font-bold text-center">ШИНГЭНИЙ БАЛАНС ХЯНАХ ХУУДАС</p>
                    <div className="flow-root">
                        <div className="float-left inline-flex">
                            <p>Эмчлүүлэгчийн овог, нэр:</p>
                            <p>{PatientData?.lastName.substring(0, 1) + "." + PatientData?.firstName}</p>
                        </div>
                        <div className="float-right inline-flex">
                            <p>Нас:</p>
                            <p>{getAge(PatientData?.registerNumber)}</p>
                            <p className="pl-1">Хүйс:</p>
                            <p>{PatientData?.genderType === "MAN" ? "Эр" : "Эм"}</p>
                            <p className="pl-1">Тасаг:</p>
                            <p>{location?.state?.departmentName}</p>
                            <p className="pl-1">Өрөө:</p>
                            <p>{location?.state?.roomNumber}</p>
                        </div>
                    </div>
                    <Table bordered className="IO">
                        <thead>
                            <tr>
                                <th rowSpan={2} className="align-middle">Огноо</th>
                                <th colSpan={5}>Биед орсон шингэн /ml хэмжих нэгж/</th>
                                <th colSpan={5}>Биеэс гарсан шингэн /ml хэмжих нэгж/</th>
                            </tr>
                            <tr>
                                <th>Хэрхэн</th>
                                <th>Өглөө</th>
                                <th>Өдөр</th>
                                <th>Орой</th>
                                <th>Тус бүpийн жэмжээ</th>
                                <th>Хэрхэн</th>
                                <th>Өглөө</th>
                                <th>Өдөр</th>
                                <th>Орой</th>
                                <th>Тус бүpийн жэмжээ</th>
                            </tr>
                        </thead>
                        <>
                            {
                                datas.map((t, index) => {
                                    return (
                                        <tbody>
                                            <tr>
                                                <th rowSpan={6} style={{ writingMode: "vertical-rl", textAlign: "center", verticalAlign: 'middle' }}>{t.date}</th>
                                            </tr>
                                            {
                                                t.inputs.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{item.how}</th>
                                                            <td>{item.morning}</td>
                                                            <td>{item.afternoon}</td>
                                                            <td>{item.evening}</td>
                                                            <td>{item.total}</td>
                                                            <th>{t.outputs[index].how}</th>
                                                            <td>{t.outputs[index].morning}</td>
                                                            <td>{t.outputs[index].afternoon}</td>
                                                            <td>{t.outputs[index].evening}</td>
                                                            <td>{t.outputs[index].total}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    )
                                })
                            }
                        </>
                    </Table>
                </div>
            </div>
            <Button onClick={() => { setIsOpen(true); form.resetFields(); }}>Нэиэыйб</Button>
            <Modal
                title="d"
                open={isOpen}
                onOk={() => form.validateFields().then((values) => {
                    onFinish(values)
                })}
                onCancel={() => setIsOpen(false)}
                width={"10cm"}
            >
                <Form
                    form={form}
                    labelAlign="right"
                    labelCol={{ span: 6 }}
                >
                    <Form.Item
                        label="label"
                        name="type"
                    >
                        <Select style={{ width: '100%' }} onChange={changeStatus}>
                            <Option value={0}>Биед орсон шингэн</Option>
                            <Option value={1}>Биеэс гарсан шингэн</Option>
                        </Select>
                    </Form.Item>
                    {
                        status === 0 ?
                            <>
                                <Form.Item
                                    label="Төрөл"
                                    name="statusIo"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <Select>
                                        <Option value={0}>Өглөө</Option>
                                        <Option value={1}>Өдөр</Option>
                                        <Option value={2}>Орой</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Амаар"
                                    name="orally"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                                <Form.Item
                                    label="Гуурсаар"
                                    name="inTube"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                                <Form.Item
                                    label="Судсаар"
                                    name="vein"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                                <Form.Item
                                    label="Бусад"
                                    name="other"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                            </>
                            :
                            <>
                                <Form.Item
                                    label="Төрөл"
                                    name="statusIo"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <Select>
                                        <Option value={0}>Өглөө</Option>
                                        <Option value={1}>Өдөр</Option>
                                        <Option value={2}>Орой</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Шээсээр"
                                    name="urine"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                                <Form.Item
                                    label="Өтгөнөөр"
                                    name="poo"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                                <Form.Item
                                    label="Гуурсаар"
                                    name="outTube"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                                <Form.Item
                                    label="Бусад /бөөлжүүлэх/"
                                    name="vomit"
                                    rules={[{ required: true, message: "Заавал" }]}
                                >
                                    <InputNumber onKeyPress={checkNumber} />
                                </Form.Item>
                            </>
                    }

                </Form>
            </Modal>
        </>
    )
}
export default InputOutput;