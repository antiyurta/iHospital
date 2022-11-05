import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";

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
                                <th>Нэр</th>
                                <th>Үнэ</th>
                                <th>Насны доод хязгаар</th>
                                <th>Насны дээд хязгаар</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                packages.map((item, index) => {
                                    return (
                                        <tr key={index} onDoubleClick={() => dada(item)}>
                                            <td>{item.name}</td>
                                            <td>{item.price}₮</td>
                                            <td>{item.minAge}</td>
                                            <td>{item.maxAge}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
export default Package;