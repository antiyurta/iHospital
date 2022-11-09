import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import { PlusCircleOutlined } from "@ant-design/icons";

function Package({ handleclick }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [packages, setPackages] = useState([]);

    const getPackages = async () => {
        const response = await Get('service/package', token, config);
        setPackages(response.data);
    }

    const dada = (value) => {
        value.types = {
            type: 7
        };
        handleclick(value);
    }

    useEffect(() => {
        getPackages();
    }, [])

    return (
        <div className="flex flex-row">
            <div className="w-full">
                <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '500px' }}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th className="font-bold text-sm align-middle">Нэр</th>
                                <th className="font-bold text-sm align-middle">Үнэ</th>
                                <th className="font-bold text-sm align-middle">Насны доод хязгаар</th>
                                <th className="font-bold text-sm align-middle">Насны дээд хязгаар</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody p-0'>
                            {
                                packages.map((item, index) => {
                                    return (
                                        <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                            <td>{item.name}</td>
                                            <td>{item.price}₮</td>
                                            <td>{item.minAge}</td>
                                            <td>{item.maxAge}</td>
                                            <td onDoubleClick={() => dada(item)} className="hover:cursor-pointer"><PlusCircleOutlined style={{ color: "green", verticalAlign: "middle" }} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    )
}
export default Package;