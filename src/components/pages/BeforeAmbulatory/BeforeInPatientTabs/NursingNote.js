import { Button, Card, DatePicker, Form, Input, InputNumber, Modal, Table } from "antd";
import { MinusOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, Post } from "../../../comman";
const { TextArea } = Input;
function NursingNote({ PatientId }) {
    const [form] = Form.useForm();
    const today = new Date();
    const checkNumber = (event) => {
        var charCode = event.charCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
            event.preventDefault();
        } else {
            return true;
        }
    };
    const token = useSelector(selectCurrentToken);
    const [spinner, setSpinner] = useState(false);
    const [nursingNotes, setNursingNotes] = useState([]);
    const [meta, setMeta] = useState({});
    const [isOpenNoteModal, setIsOpenNoteModal] = useState(false);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const columns = [
        {
            title: "№",
            render: (_, record, index) => {
                return meta.page * meta.limit - (meta.limit - index - 1)
            }
        },
        {
            title: "Огноо",
            dataIndex: "date",
            render: (text) => {
                return moment(text).format('YYYY-MM-DD HH:mm')
            }
        },
        {
            title: "Асуудлын дугаар",
            dataIndex: "issueNumber"
        },
        {
            title: "NANDA код",
            dataIndex: "nandaCode"
        },
        {
            title: "Зорилго",
            dataIndex: "purpose"
        },
        {
            title: "Сувилахуйн төлөвлөгөө",
            dataIndex: "nursingPlan"
        },
        {
            title: "Хэрэгжүүлсэн",
            dataIndex: "implemented"
        },
        {
            title: "Дүгнэлт",
            dataIndex: "conclusion"
        },
    ]
    const getNursingNote = async (page, pageSize, start, end) => {
        setSpinner(true);
        start = moment(start).set({ hour: 0, minute: 0, second: 0 });
        end = moment(end).set({ hour: 23, minute: 59, second: 59 });
        const conf = {
            headers: {},
            params: {
                page: page,
                limit: pageSize,
                patientId: PatientId,
                startDate: moment(start).format("YYYY-MM-DD HH:mm"),
                endDate: moment(end).format("YYYY-MM-DD HH:mm")
            }
        }
        setStart(start);
        setEnd(end);
        const response = await Get('inpatient/nursing-note', token, conf);
        setNursingNotes(response.data);
        setMeta(response.meta);
        setSpinner(false);
    }
    const onFinish = async (values) => {
        const conf = {
            headers: {},
            params: {}
        };
        const data = {
            patientId: PatientId,
            conclusion: values.conclusion,
            date: values.date,
            implemented: values.implemented,
            issueNumber: values.issueNumber,
            nandaCode: values.nandaCode,
            nursingPlan: values.nursingPlan,
            purpose: values.purpose,
        }
        const response = await Post('inpatient/nursing-note', token, conf, data);
        if (response === 201) {
            getNursingNote(1, 10, start, end);
            setIsOpenNoteModal(false);
        }
    }
    useEffect(() => {
        getNursingNote(1, 10, today, today);
    }, [PatientId])
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full p-1">
                    <div className="float-left">
                        <Button type="primary" onClick={() => setIsOpenNoteModal(true)}>Тэмдэглэл бичих</Button>
                    </div>
                    <div className="float-right">
                        <Button title="Сэргээх" type="primary" onClick={() => getNursingNote(1, 10, start, end)}>
                            <ReloadOutlined spin={spinner} />
                        </Button>
                    </div>
                </div>
                <div className="w-full p-1">
                    <Table
                        bordered
                        rowKey={"id"}
                        scroll={{
                            x: 1000
                        }}
                        className="whitespace-pre-wrap"
                        locale={{ emptyText: "Мэдээлэл байхгүй" }}
                        loading={spinner}
                        columns={columns}
                        dataSource={nursingNotes}
                        pagination={{
                            simple: true,
                            pageSize: 20,
                            total: meta.itemCount,
                            current: meta.page,
                            onChange: (page, pageSize) => getNursingNote(page, pageSize, start, end)
                        }}
                    />
                </div>
            </div>
            <Modal
                open={isOpenNoteModal}
                title="Тэмдэглэл бичих"
                onCancel={() => setIsOpenNoteModal(false)}
                onOk={() => {
                    form.validateFields().then((values) => {
                        onFinish(values)
                    })
                }}
                cancelText="Болих"
                okText="Хадгалах"
            >
                <Form
                    form={form}
                    layout="vertical"
                >
                    <div className="flex flex-wrap">
                        <div className="basis-1/2 p-1">
                            <Form.Item
                                label="Огноо"
                                name='date'
                                rules={[{ required: true, message: "Заавал" }]}
                            >
                                <DatePicker
                                    locale={mnMN}
                                    format="YYYY-MM-DD HH:mm:ss"
                                    showTime={{
                                        defaultValue: moment('00:00:00', 'HH:mm:ss'),
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="basis-1/2 p-1">
                            <Form.Item
                                label="Асуудлын дугаар"
                                name="issueNumber"
                                rules={[{ required: true, message: "Заавал" }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className="basis-1/2 p-1">
                            <Form.Item
                                label="NANDA код"
                                name="nandaCode"
                                rules={[{ required: true, message: "Заавал" }]}
                            >
                                <InputNumber onKeyPress={checkNumber} />
                            </Form.Item>
                        </div>
                        <div className="basis-1/2 p-1">
                            <Form.Item
                                label="Зорилго"
                                name="purpose"
                                rules={[{ required: true, message: "Заавал" }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className="w-full p-1">
                            <Form.Item
                                label="Сувлахуйн төлөвлөгөө"
                                name="nursingPlan"
                                rules={[{ required: true, message: "Заавал" }]}
                            >
                                <TextArea />
                            </Form.Item>
                        </div>
                        <div className="w-full p-1">
                            <Form.Item
                                label="Хэрэгжүүлсэн"
                                name="implemented"
                                rules={[{ required: true, message: "Заавал" }]}
                            >
                                <TextArea />
                            </Form.Item>
                        </div>
                        <div className="w-full p-1">
                            <Form.Item
                                label="Дүгнэлт"
                                name="conclusion"
                                rules={[{ required: true, message: "Заавал" }]}
                            >
                                <TextArea />
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </Modal>
        </>
    )
}
export default NursingNote;