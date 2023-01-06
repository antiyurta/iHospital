import { Form, InputNumber, Modal, Select } from "antd";
import { useState } from "react";
const { Option } = Select;
function InpatientRequest({ isOpen, isClose, handleClick }) {
    const [InpatientRequestForm] = Form.useForm();
    const [isDuration, setIsDuration] = useState(true);
    const checkDuration = (e) => {
        if (e === 'plan') {
            setIsDuration(false);
        } else {
            setIsDuration(true);
        }
    };
    return (
        <>
            <Modal
                title="Хэвтүүлэх хүсэлт"
                open={isOpen}
                onCancel={() => { isClose('inpatient',false) }}
                okText="Захиалах"
                cancelText="Болих"
                onOk={() => {
                    InpatientRequestForm.validateFields()
                        .then((values) => {
                            handleClick(values);
                        })
                }}
            >
                <Form
                    form={InpatientRequestForm}
                    wrapperCol={{ span: 15 }}
                    labelCol={{ span: 9 }}
                >
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <Form.Item
                                label="Хүндийн зэрэг"
                                name="severity"
                                rules={[
                                    {
                                        required: true,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <Select>
                                    <Option value={0}>Маш хүнд</Option>
                                    <Option value={1}>Хүндэвтэр</Option>
                                    <Option value={2}>Дунд</Option>
                                    <Option value={3}>Хөнгөн</Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <div className="w-full">
                            <Form.Item
                                label="Хэвтэнгийн төлөв"
                                name="type"
                                rules={[
                                    {
                                        required: true,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <Select onChange={(e) => checkDuration(e)}>
                                    <Option value="EMERGENCY">Яаралтай</Option>
                                    <Option value="PLAN">Төлөвлөгөөт</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="w-full">
                            <Form.Item
                                label="Хэвтэх хоног"
                                name="duration"
                                rules={[
                                    {
                                        required: !isDuration,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <InputNumber disabled={isDuration} />
                            </Form.Item>
                        </div>
                        <div className="w-full">
                            <Form.Item
                                label="Эмнэлэгт хэвтэх шалтгаан"
                                name="reason"
                                rules={[
                                    {
                                        required: true,
                                        message: "Заавал"
                                    }
                                ]}
                            >
                                <Select>
                                    <Option value={0}>Онош тодруулах</Option>
                                    <Option value={1}>Эмчилгээ хийлгэх</Option>
                                    <Option value={2}>Нөхөн сэргээх эмчилгээ</Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </Modal>
        </>
    )
}
export default InpatientRequest;