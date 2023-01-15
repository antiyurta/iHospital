import { CheckOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Cascader, Checkbox, DatePicker, Form, Input, InputNumber, Modal, Radio, Select } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import moment from "moment";
import { useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

function VasculerTube({ PatientData }) {
    const tubeAreaOptions = [
        {
            label: "Баруун гар",
            value: "Баруун гар",
            children: [
                {
                    value: 'Сарвуун ард вен',
                    label: 'Сарвуун ард вен',
                }
            ]
        },
        {
            label: "Зүүн гар",
            value: "Зүүн гар",
            children: [
                {
                    value: 'Сарвуун ард вен',
                    label: 'Сарвуун ард вен',
                }
            ]
        },
    ];
    const tubeChangeReasonOptions = [
        {
            label: "Судасны бөглөрсөн тул",
            value: "Б"
        },
        {
            label: "Судаснаас гарсан тул",
            value: "Г"
        },
        {
            label: "72ц хугацаа болсон тул",
            value: "Х"
        },
        {
            label: "Эмнэлэгээс гарсан тул",
            value: "ЭГ"
        },
        {
            label: "Эмзэглэл өвдөлттэй тул",
            value: "Ө"
        },
        {
            label: "Улайж үрэвссэн тул",
            value: "Ү"
        },
    ];
    const printRef = useRef();
    const [form] = Form.useForm();
    const [datas, setDatas] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const onFinish = (values) => {
        setDatas([values]);
    };
    const handlePrint = useReactToPrint({
        content: () => printRef.current
    });
    return (
        <>
            <Modal
                title="sadsa"
                width={"10cm"}
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                onOk={() => form.validateFields().then((values) => onFinish(values))}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Сар өдөр"
                        name="date"
                    >
                        <DatePicker locale={mnMN} />
                    </Form.Item>
                    <Form.Item
                        label="Цаг"
                        name="time"
                    >
                        <DatePicker locale={mnMN} picker={"time"} />
                    </Form.Item>
                    <Form.Item
                        label="Хэд дахь уян зүү"
                        name="count"
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Гуурс тавьсан талбай"
                        name="tubeArea"
                    >
                        <Cascader options={tubeAreaOptions} />
                    </Form.Item>
                    <Form.Item
                        label="Гуурс cольсон шалтгаан"
                        name="tubeChangeReason"
                    >
                        <Select options={tubeChangeReasonOptions} />
                    </Form.Item>
                    <Form.Item
                        label="Халуурна /38С дээш/"
                        name="isFever"
                    >
                        <Radio.Group>
                            <Radio value={true}>Тийм</Radio>
                            <Radio value={false}>Үгүй</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
            <Button onClick={handlePrint}>Хэвлэх</Button>
            <Button onClick={() => { setIsOpen(true) }}>Нэмэх</Button>
            <div ref={printRef}>
                <page size="A4" layout="landscape">
                    <div className="flow-root">
                        <div className="float-right">
                            <p style={{ fontSize: 10 }}>Эрүүл мэндийн сайдын 2019 оны 11 сарын 29-ны</p>
                            <p style={{ fontSize: 10 }}>өдрийн А539 дугаар тушаалын 3-р хавсралт</p>
                        </div>
                    </div>
                    <p className="font-bold text-center" style={{ fontSize: 12 }}>Судасны гуурстай холбоотой тандалт</p>
                    <div className="flex flex-wrap py-1 text-center">
                        <div className="basis-1/5">
                            <p style={{ fontSize: 10 }}>Эмнэлэг: UNIVERSAL MED</p>
                        </div>
                        <div className="basis-1/5">
                            <p style={{ fontSize: 10 }}>Тасаг: ДОТОР</p>
                        </div>
                        <div className="basis-2/5">
                            <p style={{ fontSize: 10 }}>Үйлчлүүлэгчийн овог нэр: {PatientData?.lastName.substring(0, 1) + "." + PatientData?.firstName}</p>
                        </div>
                        <div className="basis-1/5">
                            <p style={{ fontSize: 10 }}>Нас: 33 Хүйс: Эр</p>
                        </div>
                        <div className="basis-1/5">
                            <p style={{ fontSize: 10 }}>Регистрийн дугаар: {PatientData?.registerNumber}</p>
                        </div>
                        <div className="basis-1/5">
                            <p style={{ fontSize: 10 }}>Үндсэн онош: I38</p>
                        </div>
                        <div className="basis-2/5">
                            <p style={{ fontSize: 10 }}>Эмнэлэг хэвтсэн огноо: 2022-01-01</p>
                        </div>
                        <div className="basis-1/5">
                            <p style={{ fontSize: 10 }}>Судасны гуурс төрөл: Уян зүү</p>
                        </div>
                    </div>
                    <Table bordered className="bcp2">
                        <thead>
                            <tr>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Сар өдөр</th>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Цаг</th>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Хэд дахь уян зүү</th>
                                <th rowSpan={3}>Гуурс тависан талбай</th>
                                <th rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Гуурс сольсон шалтгаан</th>
                                <th colSpan={11}>Судасны гуурсны халдварын шинж тэмдэгээр тандах хуудас</th>
                                <th colSpan={4}>Авсан арга хэмжээ</th>
                                <td rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlignLast: "center", verticalAlign: 'middle' }}>
                                    <p>гарын үсэг</p>
                                    <p>Уян зүү тавьсан сувилагчийн</p>
                                </td>
                                <td rowSpan={3} className="rotate-180" style={{ writingMode: "vertical-lr", textAlignLast: "center", verticalAlign: 'middle' }}>
                                    <p>гарын үсэг</p>
                                    <p>Тандалт хийсэн ажилтны</p>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={6}>Ерөнхий шинж</th>
                                <th colSpan={5}>Хэсэг гэзрын шинж</th>
                                <td rowSpan={2} className="rotate-180" style={{ writingMode: "vertical-lr", textAlignLast: "center", verticalAlign: 'middle' }}>
                                    <p>эсэх, илэрсэн үүсгэгч</p>
                                    <p>ЦАЧ шинжилгээ авсан</p>
                                </td>
                                <td rowSpan={2} className="rotate-180" style={{ writingMode: "vertical-lr", textAlignLast: "center", verticalAlign: 'middle' }}>
                                    <p>үүсгэгч</p>
                                    <p>авсан эсэх, илэрсэн</p>
                                    <p>судлалын шинжилгээ</p>
                                    <p>Гуурсны үзүүрээс нян</p>
                                </td>
                                <td rowSpan={2} className="rotate-180" style={{ writingMode: "vertical-lr", textAlignLast: "center", verticalAlign: 'middle' }}>
                                    <p>эсэх, илэрсэн үүсгэгч</p>
                                    <p>шинжилгээ авсан</p>
                                    <p>идээнээс нян судлалын</p>
                                    <p>Үрэвслийн шингэн</p>
                                </td>
                                <th rowSpan={2} className="rotate-180" style={{ writingMode: "vertical-lr", textAlignLast: "center", verticalAlign: 'middle' }}>
                                    Авсан арга хэмжээ
                                </th>
                            </tr>
                            <tr>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Халуурна /38С дээш/</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>АД ситол буурсан</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Пульс түргэснэ</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>{"Шээсний гарц багасана <20мл/цаг"}</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Арьс зэвхий саарал</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Хоолонд дургүй</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Хатгасан хэсэгт улаан</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Хатгасан хэсэгт эмзэг өвчтэй</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Хатгасан хэсэгт халуун үрэвссэн</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Тэмтэрэхэд судас гүвдрүүтсэн</th>
                                <th className="rotate-180" style={{ writingMode: "vertical-lr", textAlign: "right", verticalAlign: 'middle' }}>Хатгасан хэсэгт буглаатай идээтэй</th>
                            </tr>
                        </thead>
                        <thead>
                            {
                                datas?.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{moment(data.date).format("MM/DD")}</th>
                                            <th>{moment(data.time).format("HH:mm")}</th>
                                            <th>{data.count}</th>
                                            <th>{data.tubeArea}</th>
                                            <th>{data.tubeChangeReason}</th>
                                            <th>{data.isFever ? <CheckOutlined /> : <MinusOutlined />}</th>
                                        </tr>
                                    )
                                })
                            }
                        </thead>
                    </Table>
                </page>
            </div>
        </>
    )
}
export default VasculerTube;