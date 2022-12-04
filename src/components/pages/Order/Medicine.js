import { CloseOutlined } from "@ant-design/icons";
import { Modal, Pagination } from "antd";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi } from "../../comman";


function Medicine({ isOpen, isClose, handleclick }) {
    const token = useSelector(selectCurrentToken);
    const [medicines, setMedicines] = useState([]);
    const [selectedMedicines, setSelectedMedicines] = useState([]);
    const [meta, setMeta] = useState({});
    const config = {
        headers: {},
        params: {}
    }
    const getMedicine = async (page, limit) => {
        config.params.page = page;
        config.params.limit = limit;
        const response = await Get('service/medicine', token, config);
        if (response.data.length != 0) {
            setMedicines(response.data);
            setMeta(response.meta);
        }
    }
    const add = (medicine) => {
        const state = selectedMedicines.includes(medicine);
        if (state) {
            openNofi('warning', 'Эм', 'эм сонгогдсон байна');
        } else {
            medicine.type = 8;
            setSelectedMedicines([...selectedMedicines, medicine]);
        }
    };
    const remove = (index) => {
        var arr = [...selectedMedicines];
        arr.splice(index, 1);
        setSelectedMedicines(arr);
    };
    useEffect(() => {
        getMedicine(1, 20);
    }, [isOpen])

    return (
        <div>
            <Modal
                title="Эм сонгох"
                width={'70%'}
                open={isOpen}
                onCancel={() => isClose('medicine', false)}
                onOk={() => {
                    handleclick(selectedMedicines);
                    isClose('medicine', false);
                }}
            >
                <div className="flex flex-wrap">
                    <div className="w-2/3">
                        <div className="p-2">
                            <div className='table-responsive' id='style-8' style={{ maxHeight: '500px' }}>
                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead bg-slate-200'>
                                        <tr>
                                            <th className="font-bold text-sm align-middle">Код</th>
                                            <th className="font-bold text-sm align-middle">ОУ/Нэр</th>
                                            <th className="font-bold text-sm align-middle">Нэр</th>
                                        </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody p-0'>
                                        {
                                            medicines.map((item, index) => {
                                                return (
                                                    <tr onDoubleClick={() => add(item)} key={index} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                        <td>{item.code}</td>
                                                        <td>{item.iName}</td>
                                                        <td>{item.name}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <Pagination
                                simple={true}
                                position={'bottomCenter'}
                                current={meta.page}
                                pageSize={20}
                                total={meta.itemCount}
                                onChange={getMedicine}
                            />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="p-2">
                            <div className='table-responsive' id='style-8' style={{ maxHeight: '500px' }}>
                                <Table className='ant-border-space' style={{ width: '100%' }}>
                                    <thead className='ant-table-thead bg-slate-200'>
                                        <tr>
                                            <th className="font-bold text-sm align-middle">Нэр</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody p-0'>
                                        {
                                            selectedMedicines.map((item, index) => {
                                                return (
                                                    <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                                        <td>{item.name}</td>
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
                </div>
            </Modal>
        </div>
    )
}
export default Medicine;