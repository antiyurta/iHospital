import { PlusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";


function Medicine({ handleclick }) {
    const token = useSelector(selectCurrentToken);
    const [medicines, setMedicines] = useState([]);
    const [meta, setMeta] = useState({});
    const config = {
        headers: {},
        params: {}
    }
    const getMedicine = async () => {
        const response = await Get('service/medicine', token, config);
        if (response.data.length != 0) {
            setMedicines(response.data);
            setMeta(response.meta);
        }
    }
    useEffect(() => {
        getMedicine();
    }, [])

    return (
        <div>
            <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '500px' }}>
                <Table className='ant-border-space' style={{ width: '100%' }}>
                    <thead className='ant-table-thead bg-slate-200'>
                        <tr>
                            <th className="font-bold text-sm align-middle">Код</th>
                            <th className="font-bold text-sm align-middle">ОУ/Нэр</th>
                            <th className="font-bold text-sm align-middle">Нэр</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='ant-table-tbody p-0'>
                        {
                            medicines.map((item, index) => {
                                return (
                                    <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                        <td>{item.code}</td>
                                        <td>{item.iName}</td>
                                        <td>{item.name}</td>
                                        <td onDoubleClick={() => handleclick(item)} className="hover:cursor-pointer"><PlusCircleOutlined style={{ color: "green", verticalAlign: "middle" }} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Medicine;