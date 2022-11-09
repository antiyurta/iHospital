import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal } from "antd";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Xray({ handleclick }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [xrays, setXrays] = useState([]);
    const [xray, setXray] = useState([]);
    const getXray = async () => {
        config.params.type = 1;
        const response = await Get('service/type', token, config);
        setXrays(response.data);
    }

    const getTypeById = async (id) => {
        config.params.type = null;
        config.params.xrayTypeId = id;
        const response = await Get('service/xray', token, config);
        setXray(response.data);
    }

    useEffect(() => {
        getXray();
    }, []);
    return (
        <div className="flex flex-row">
            <div className="basis-1/3">
                {
                    xrays.map((xray, index) => {
                        return (
                            <Button onClick={() => getTypeById(xray.id)} className="w-full mb-1 bg-[#3d9970] text-white rounded-lg" key={index}>{xray.name}</Button>
                        )
                    })
                }
            </div>
            <div className="basis-2/3">
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
                                xray.map((item, index) => {
                                    return (
                                        <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                            <td>{item.name}</td>
                                            <td>{item.price}₮</td>
                                            <td onDoubleClick={() => handleclick(item)} className="hover:cursor-pointer"><PlusCircleOutlined style={{ color: "green", verticalAlign: "middle" }} /></td>
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
export default Xray;