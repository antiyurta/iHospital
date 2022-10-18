import { Button } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { ScrollRef } from "../../comman";

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Examination() {
    const token = useSelector(selectCurrentToken);
    const scrollRef = useRef();
    const [examinations, setExaminations] = useState([]);
    const [examination, setExamination] = useState([]);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "x-api-key": API_KEY
        },
        params: {
            type: 0,
        }
    };
    const getExamination = async () => {
        await axios.get(DEV_URL + "service/type", config)
            .then((res) => {
                setExaminations(res.data.response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTypeById = async (id) => {
        config.params.type = null;
        config.params.examinationTypeId = id;
        await axios.get(DEV_URL + "service/examination", config)
            .then((response) => {
                setExamination(response.data.response.data);
                console.log(examination);
            })
    }
    useEffect(() => {
        getExamination();
        ScrollRef(scrollRef);
    }, []);
    return (
        <div className="flex flex-row">
            <div className="basis-1/2">
                {
                    examinations.map((examination, index) => {
                        return (
                            <Button onClick={() => getTypeById(examination.id)} className="w-full my-1 bg-[#3d9970] text-white rounded-lg" key={index}>{examination.name}</Button>
                        )
                    })
                }
            </div>
            <div className="basis-1/2">
                <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th className="font-bold text-sm align-middle">Нэр</th>
                                <th className="font-bold text-sm align-middle">Үнэ</th>
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody p-0'>
                            {
                                examination.map((item, index) => {
                                    return (
                                        <tr key={index} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                            <td>{item.name}</td>
                                            <td>{item.prices?.price}</td>
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
export default Examination;