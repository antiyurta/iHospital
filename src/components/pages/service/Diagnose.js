import { CloseOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Pagination, Select } from "antd";
import { useState } from "react"
import { useEffect } from "react"
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi } from "../../comman";
const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;
function Diagnose({ handleClick }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {
            page: 1,
            limit: 10,
        }
    }
    const [diagnoses, setDiagnoses] = useState([]);
    const [selectedDiagnoses, setSelectedDiagnoses] = useState([]);
    const [meta, setMeta] = useState({});
    const [loading, setLoading] = useState(false);
    //
    const [param, setParam] = useState("");
    const [paramValue, setParamValue] = useState("");
    //
    //
    const [isOpenDiagnoseModal, setIsOpenDiagnoseModal] = useState(false);
    //
    const getDiagnoses = async (page, pageSize, e, v) => {
        setLoading(true);
        config.params.page = page;
        config.params.limit = pageSize;
        if (e && v) {
            setParam(v);
            setParamValue(e);
            config.params[v] = e;
        }
        const response = await Get('reference/diagnose', token, config);
        setDiagnoses(response.data);
        setMeta(response.meta);
        setLoading(false);
    };
    const add = (diagnose) => {
        const state = selectedDiagnoses.includes(diagnose);
        if (state) {
            openNofi('warning', 'EXA', 'EXA сонгогдсон байна');
        } else {
            setSelectedDiagnoses([...selectedDiagnoses, diagnose]);
        }
    };
    const remove = (index) => {
        var arr = [...selectedDiagnoses];
        arr.splice(index, 1);
        setSelectedDiagnoses(arr);
    };
    useEffect(() => {
        getDiagnoses(1, 10, paramValue, param);
    }, [])
    return (
        <>
            <div>
                <Button className="btn-add" onClick={() => { setIsOpenDiagnoseModal(true) }}>Онош сонгох</Button>
                <Form.List name="diagnose">
                    {
                        (fields, { add, remove }) => (
                            <>
                                <div className='table-responsive pb-4' id='style-8' style={{ maxHeight: '420px' }}>
                                    <Table className='ant-border-space' style={{ width: '100%' }}>
                                        <thead className='ant-table-thead bg-slate-200'>
                                            <tr>
                                                <th className="font-bold text-sm align-middle">Код</th>
                                                <th className="font-bold text-sm align-middle">Монгол нэр</th>
                                                <th className="font-bold text-sm align-middle">Төрөл</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                fields?.map(({ key, name, }) => (
                                                    <tr key={key} className='ant-table-row ant-table-row-level-0'>
                                                        <td style={{ width: 80, maxWidth: 80 }}>
                                                            <Form.Item
                                                                name={[name, 'code']}>
                                                                <TextArea disabled />
                                                            </Form.Item>
                                                        </td>
                                                        <td>
                                                            <Form.Item
                                                                name={[name, 'nameMn']}>
                                                                <TextArea disabled />
                                                            </Form.Item>
                                                        </td>
                                                        <td>
                                                            <Form.Item
                                                                name={[name, 'type']}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Заавал'
                                                                    }
                                                                ]}
                                                            >
                                                                <Select style={{ width: "100%" }}>
                                                                    <Option value="Үндсэн">Үндсэн</Option>
                                                                    <Option value="Урьдчилан">Урьдчилан</Option>
                                                                    <Option value="Хүндрэл">Хүндрэл</Option>
                                                                    <Option value="Үйлдлийн онош">Үйлдлийн онош</Option>
                                                                    <Option value="Хавсрах онош">Хавсрах онош</Option>
                                                                    <Option value="Уламжлалт">Уламжлалт</Option>
                                                                    <Option value="Дагалдах">Дагалдах</Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </td>
                                                        <td><MinusCircleOutlined style={{ color: 'red' }} onClick={() => remove(name)} /></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </>
                        )
                    }
                </Form.List>
                <Modal
                    title="Онош"
                    open={isOpenDiagnoseModal}
                    onCancel={() => { setIsOpenDiagnoseModal(false) }}
                    onOk={() => {
                        handleClick(selectedDiagnoses);
                        setIsOpenDiagnoseModal(false);
                    }}
                    width={'90%'}
                >
                    <div className="flex flex-wrap">
                        <div className="w-2/3">
                            <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '500px' }}>
                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead bg-slate-200'>
                                        <tr>
                                            <th className="font-bold text-sm align-middle" style={{ minWidth: 230 }}>Код</th>
                                            <th className="font-bold text-sm align-middle">Монгол нэр</th>
                                            <th className="font-bold text-sm align-middle">Англи нэр</th>
                                            <th className="font-bold text-sm align-middle">Орос нэр</th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <Search
                                                    placeholder={"Хайх"}
                                                    allowClear
                                                    onSearch={(e) => getDiagnoses(1, 10, e, 'code')}
                                                    enterButton={"Хайх"}
                                                />
                                            </th>
                                            <th>
                                                <Search
                                                    placeholder={"Хайх"}
                                                    allowClear
                                                    onSearch={(e) => getDiagnoses(1, 10, e, 'nameMn')}
                                                    enterButton={"Хайх"}
                                                />
                                            </th>
                                            <th>
                                                <Search
                                                    placeholder={"Хайх"}
                                                    allowClear
                                                    onSearch={(e) => getDiagnoses(1, 10, e, 'nameEn')}
                                                    enterButton={"Хайх"}
                                                />
                                            </th>
                                            <th>
                                                <Search
                                                    placeholder={"Хайх"}
                                                    allowClear
                                                    onSearch={(e) => getDiagnoses(1, 10, e, 'nameRu')}
                                                    enterButton={"Хайх"}
                                                />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody p-0'>
                                        {
                                            diagnoses.map((item, index) => {
                                                return (
                                                    <tr onDoubleClick={() => add(item)} key={index} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                        <td className="whitespace-pre-line" style={{ width: 50, maxWidth: 50 }}>{item.code}</td>
                                                        <td className="whitespace-pre-line" style={{ maxWidth: 50 }}>{item.nameMn}</td>
                                                        <td className="whitespace-pre-line" style={{ maxWidth: 50 }}>{item.nameEn}</td>
                                                        <td className="whitespace-pre-line" style={{ maxWidth: 50 }}>{item.nameRu}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <Pagination
                                    simple={true}
                                    className="pagination"
                                    pageSize={10}
                                    total={meta.itemCount}
                                    onChange={(page, pageSize) => getDiagnoses(page, pageSize, paramValue, param)}
                                />
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '500px' }}>
                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead bg-slate-200'>
                                        <tr>
                                            <th>Код</th>
                                            <th>Монгол нэр</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedDiagnoses.map((item, index) => {
                                                return (
                                                    <tr key={index} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                        <td className="whitespace-pre-line" style={{ width: 50, maxWidth: 50 }}>{item.code}</td>
                                                        <td className="whitespace-pre-line" style={{ maxWidth: 50 }}>{item.nameMn}</td>
                                                        <td onDoubleClick={() => remove(index)} className="hover:cursor-pointer"><CloseOutlined style={{ color: "red", verticalAlign: "middle" }} /></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}
export default Diagnose;