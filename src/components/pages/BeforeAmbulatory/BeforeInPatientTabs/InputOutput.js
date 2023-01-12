import { Button, Form, InputNumber, Modal, Select } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, Post } from "../../../comman";
const { Option } = Select;
function InputOutput({ PatientId, ListId }) {
    const token = useSelector(selectCurrentToken);
    const [form] = Form.useForm();
    const [isOpen, setIsOpen] = useState(false);
    const getData = async () => {
        const conf = {
            headers: {},
            params: {}
        };
        const response = await Get('inpatient/fluidBalance', token, conf);
        console.log(response);
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
        const response = await Post('inpatient/fluidBalance', token, conf);
        console.log(response);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
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
                    <Select style={{ width: '100%' }}>
                        <Option value={0}>Биед орсон шингэн</Option>
                        <Option value={1}>Биеэс гарсан шингэн</Option>
                    </Select>
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
                        name='orally'
                        rules={[{ required: true, message: "Заавал" }]}
                    >
                        <InputNumber onKeyPress={checkNumber} />
                    </Form.Item>
                    <Form.Item
                        label="Гуурсаар"
                        name='inTube'
                        rules={[{ required: true, message: "Заавал" }]}
                    >
                        <InputNumber onKeyPress={checkNumber} />
                    </Form.Item>
                    <Form.Item
                        label="Судсаар"
                        name='vein'
                        rules={[{ required: true, message: "Заавал" }]}
                    >
                        <InputNumber onKeyPress={checkNumber} />
                    </Form.Item>
                    <Form.Item
                        label="Бусад"
                        name='other'
                        rules={[{ required: true, message: "Заавал" }]}
                    >
                        <InputNumber onKeyPress={checkNumber} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default InputOutput;