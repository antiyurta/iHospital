import { Form, Radio } from "antd";
import { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";

function Rebuild({ data }) {
    const printRef = useRef();
    const [form] = Form.useForm();
    const dataConverter = () => {
        const dd = {};
        console.log(JSON.parse(data.pain));
        form.setFieldsValue(JSON.parse(data.pain));
    };
    useEffect(() => {
        dataConverter();
    }, [data])
    return (
        <>
            <div ref={printRef}>
                <Form form={form}>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <Form.Item
                                        label={<p>Харилцах бэрхшээлтэй эсэх</p>}
                                        name={['MY', "Харилцах бэрхшээлтэй эсэх", 0]}
                                        className="mb-0"
                                    >
                                        <Radio.Group>
                                            <Radio value={'Тийм'}>Тийм</Radio>
                                            <Radio value={'Үгүй'}>Үгүй</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item
                                        label={<p>Залгих чадвар бэрхшээлтэй эсэх</p>}
                                        name={['MY', "Залгих чадвар бэрхшээлтэй эсэх", 0]}
                                        className="mb-0"
                                    >
                                        <Radio.Group>
                                            <Radio value={'Тийм'}>Тийм</Radio>
                                            <Radio value={'Үгүй'}>Үгүй</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <p className="pl-4" style={{ fontWeight: "bold" }}>(Хэрвээ тийм бол хэл засалч бөглөнө)</p>
                                    <Form.Item
                                        label={<p>Танин мэдэхүйн үйл ажиллагаа өөрчлөлттэй эсэх</p>}
                                        name={['MY', "Танин мэдэхүйн үйл ажиллагаа өөрчлөлтэй эсэх", 0]}
                                        className="mb-0"
                                    >
                                        <Radio.Group>
                                            <Radio value={'Тийм'}>Тийм</Radio>
                                            <Radio value={'Үгүй'}>Үгүй</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <p className="pl-4" style={{ fontWeight: "bold" }}>(Хэрвээ тийм бол хөдөлмөр засалч бөглөнө)</p>
                                </td>
                            </tr>
                            <tr>
                                <th className="text-center">Бие ерөнхий байдал</th>
                                <th className="text-center">Ухаан санаа</th>
                                <th className="text-center">Арьс салст</th>
                            </tr>
                            <tr>
                                <Form.Item
                                    name={[' ', "Биеийн ерөнхий байдал", 0]}
                                    className="mb-0"
                                >
                                    <Radio.Group>
                                        <Radio value={'Дунд'}>Дунд</Radio>
                                        <Radio value={'Хүндэвтэр'}>Хүндэвтэр</Radio>
                                        <Radio value={'Хүнд'}>Хүнд</Radio>
                                        <Radio value={'Маш хүнд'}>Маш хүнд</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </tr>
                        </tbody>
                    </Table>
                </Form>
                {JSON.stringify(data)}
            </div>

        </>
    )
}
export default Rebuild;