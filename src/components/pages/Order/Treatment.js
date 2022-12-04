import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { configure } from "@testing-library/react";
import { Button, Input, InputNumber, Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { openNofi } from "../../comman";

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Treatment({ isOpen, isClose, handleclick }) {
    const token = useSelector(selectCurrentToken);
    const [treatments, setTreatments] = useState([]);
    const [treatment, setTreatment] = useState([]);
    const [selectedTreatments, setSelectedTreatments] = useState([]);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "x-api-key": API_KEY
        },
        params: {
            type: 2,
        }
    };
    const getTreatment = async () => {
        await axios.get(DEV_URL + "service/type", config)
            .then((res) => {
                setTreatments(res.data.response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTypeById = async (id) => {
        config.params.type = null;
        config.params.treatmentTypeId = id;
        await axios.get(DEV_URL + "service/treatment", config)
            .then((response) => {
                setTreatment(response.data.response.data);
            })
    }

    const configure = (value) => {
        if (value.qty) {
            value['calCprice'] = value.price * value.qty;
        }
        handleclick(value);
    }
    const add = (treatment) => {
        const state = selectedTreatments.includes(treatment);
        if (state) {
            openNofi('warning', 'Treat', 'Treat сонгогдсон байна');
        } else {
            treatment.type = treatment.types.type;
            setSelectedTreatments([...selectedTreatments, treatment]);
        }
    };
    const remove = (index) => {
        var arr = [...selectedTreatments];
        arr.splice(index, 1);
        setSelectedTreatments(arr);
    };
    useEffect(() => {
        getTreatment();
    }, [isOpen]);
    return (
        <>
            <Modal
                title="Эмчилгээ сонгох"
                width={'80%'}
                open={isOpen}
                onCancel={() => isClose('treatment', false)}
                onOk={() => {
                    handleclick(selectedTreatments);
                    isClose('treatment', false);
                }}
            >
                <div className="flex flex-row">
                    <div className="basis-1/5">
                        {
                            treatments.map((treatment, index) => {
                                return (
                                    <Button onClick={() => getTypeById(treatment.id)} className="w-full mb-1 bg-[#3d9970] text-white rounded-lg" key={index}>{treatment.name}</Button>
                                )
                            })
                        }
                    </div>
                    <div className="basis-2/5">
                        <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '500px' }}>
                            <Table className='ant-border-space' style={{ width: '100%' }}>
                                <thead className='ant-table-thead bg-slate-200'>
                                    <tr>
                                        <th className="font-bold text-sm align-middle">Нэр</th>
                                        <th className="font-bold text-sm align-middle">Үнэ</th>
                                    </tr>
                                </thead>
                                <tbody className='ant-table-tbody p-0'>
                                    {
                                        treatment.map((item, index) => {
                                            return (
                                                <tr onDoubleClick={() => add(item)} key={index} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}₮</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="basis-2/5">
                        <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '500px' }}>
                            <Table className='ant-border-space' style={{ width: '100%' }}>
                                <thead className='ant-table-thead bg-slate-200'>
                                    <tr>
                                        <th className="font-bold text-sm align-middle">Нэр</th>
                                        <th className="font-bold text-sm align-middle">Үнэ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className='ant-table-tbody p-0'>
                                    {
                                        selectedTreatments.map((item, index) => {
                                            return (
                                                <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}₮</td>
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
        </>
    )
}
export default Treatment;