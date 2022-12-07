import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import moment from "moment";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken, selectCurrentUserId } from "../../../../features/authReducer";
import { Get, openNofi, ScrollRef } from "../../../comman";

function PreOrder() {
    const scrollRef = useRef();
    const token = useSelector(selectCurrentToken);
    const employeeId = useSelector(selectCurrentUserId);
    const config = {
        headers: {},
        params: {}
    };
    const navigate = useNavigate();
    const [preOrders, setPreOrders] = useState([]);
    const [meta, setMeta] = useState({});
    const getPreOrders = async () => {
        config.params.doctorId = employeeId;
        const response = await Get('appointment/pre-order', token, config);
        setPreOrders(response.data);
        setMeta(response.meta);
    };
    const getEMR = (listId, id, cabinetId, inspectionType, isPayment) => {
        // status heregteii anhan dawtan 
        // tolbor shalgah
        if (isPayment === false) {
            openNofi('warning', 'ТӨЛБӨР', 'Төлбөр төлөгдөөгүй')
        } else {
            navigate(`/emr`,
                {
                    state:
                    {
                        appointmentId: listId,
                        patientId: id,
                        cabinetId: cabinetId,
                        inspection: inspectionType
                    }
                });
        }
    };
    const getTypeInfo = (type) => {
        //1 yaralta shuud
        //2 shuud
        //3 urdcilsan
        //4 uridcilsan sergiileh
        if (type === 4) {
            return (<td className="bg-[#5bc0de] text-white">Урьдчилан сэргийлэх</td>)
        }
    };
    const getPaymentInfo = (isPayment) => {
        if (isPayment) {
            return (<td><PlusOutlined style={{ color: '#00adef', fontSize: "20px" }} /></td>)
        } else {
            return (<td><MinusOutlined style={{ color: "red", fontSize: "20px" }} /></td>)
        }
    };
    const getGenderInfo = (gender) => {
        if (gender === 'MAN') {
            return (<td>Эр</td>)
        } else {
            return (<td>Эмэгтэй</td>)
        }
    };
    const getAge = (registerNumber) => {
        if (registerNumber != undefined) {
            const date = new Date();
            let year = parseInt(registerNumber.substring(2, 4));
            let month = parseInt(registerNumber.substring(4, 6));
            if (month > 20 && month < 33) {
                year += 2000;
                month -= 20;
            } else {
                year += 1900;
            }
            const currentYear = date.getFullYear();
            const age = currentYear - year;
            return age;
        } else {
            return null;
        }
    }
    const getInspectionInfo = (inspectionType) => {
        if (inspectionType === 1) {
            return (<td>Анхан</td>)
        } else if (inspectionType === 2) {
            return (<td>Давтан</td>)
        } else if (inspectionType === 3) {
            return (<td>Урьдчилан сэргийлэх</td>)
        } else if (inspectionType === 4) {
            return (<td>Гэрийн эргэлт</td>)
        } else if (inspectionType === 5) {
            return (<td>Идэвхтэй хяналт</td>)
        } else {
            return (<td>Дуудлагаар</td>)
        }
    };
    useEffect(() => {
        getPreOrders();
        ScrollRef(scrollRef);
    }, []);

    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <Card bordered={false} className="header-solid max-h-max rounded-md">
                    <div className="basis-1/3">
                        {/* <RangePicker onChange={filterAppointment} locale={mnMN} /> */}
                    </div>
                </Card>
            </div>
            <div className="w-full">
                <Card
                    bordered={false}
                    className="header-solid max-h-max rounded-md"
                >
                    <div className='table-responsive' id='style-8' ref={scrollRef}>
                        <Table bordered className='ant-border-space' style={{ width: '100%' }}>
                            <thead className='ant-table-thead bg-slate-200'>
                                <tr>
                                    <th>Он сар</th>
                                    <th>Үзлэгийн цаг</th>
                                    <th>Үзлэг</th>
                                    <th>Овог</th>
                                    <th>Нэр</th>
                                    <th>Регистр №</th>
                                    <th>Нас</th>
                                    <th>Хүйс</th>
                                    <th>Захиалсан огноо</th>
                                    <th>Эхэлсэн цаг</th>
                                    <th>Дууссан цаг</th>
                                    <th>Төлөв</th>
                                    <th>Даатгал</th>
                                    <th>Төлбөр</th>
                                    <th>Үзлэг</th>
                                    <th>Тайлбар</th>
                                </tr>
                            </thead>
                            <tbody className='ant-table-tbody p-0'>
                                {
                                    preOrders.map((preOrder, index) => {
                                        return (
                                            <tr key={index} onDoubleClick={() => getEMR(preOrder?.id, preOrder?.patientId, preOrder?.cabinetId, preOrder?.inspectionType, preOrder?.isPayment)} className='ant-table-row ant-table-row-level-0 hover:cursor-pointer'>
                                                <td>{moment(preOrder?.createdAt).format('YYYY-MM-DD')}</td>
                                                {getTypeInfo(preOrder?.type)}
                                                {getInspectionInfo(preOrder?.inspectionType)}
                                                <td>{preOrder?.patient?.lastName}</td>
                                                <td>{preOrder?.patient?.firstName}</td>
                                                <td>{preOrder?.patient?.registerNumber}</td>
                                                <td>{getAge(preOrder?.patient?.registerNumber)}</td>
                                                {getGenderInfo(preOrder?.patient?.genderType)}
                                                <td>{moment(preOrder?.createdAt).format('YYYY-MM-DD')}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                {getPaymentInfo(preOrder.isPayment)}
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default PreOrder;