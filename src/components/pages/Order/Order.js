import { Button, DatePicker, Modal, Tabs } from "antd";
import RecentRecipe from "./RecentRecipe";
import SetOrder from "./SetOrder";
import Medicine from "./Medicine";
import Examination from "./Examination";
import Xray from "./Xray";
import Treatment from "./Treatment";
import Surgery from './Surgery';
import Endo from "./Endo";
import Package from "./Package";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { ClockCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, openNofi } from "../../comman";
import moment from "moment";
//
function Order({ isPackage, isDoctor, categories, save }) {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const [orders, setOrders] = useState([]);
    const [packages, setPackages] = useState([]);
    const [total, setTotal] = useState(Number);
    //
    const [isXrayModal, setIsXrayModal] = useState(false);
    const [xrayDatas, setXrayDatas] = useState([]);
    const [xrayDeviceId, setXrayDeviceId] = useState('');
    const [xrayRequestId, setXrayRequestId] = useState('');
    //
    const saveClick = (e) => {
        var status = true;
        e.map((el) => {
            if (!el.requestDate) {
                status = false;
                openNofi("error", 'Төхөөрөмж', `${el.name} Цаг оруулах`);
            }
        })
        if (status) {
            console.log("sda");
            // save(e);
        }
    }

    const handleclick = (value) => {
        if (isPackage) {
            console.log(isPackage);
            const pack = {
                serviceType: value.types?.type,
                serviceId: value.id,
                serviceName: value.name,
                servicePrice: value.price,
            }
            setPackages([...packages, pack]);
        } else {

            const testOrder = {};
            console.log(value);
            testOrder.id = value.id;
            testOrder.name = value.name;
            testOrder.price = value.price;
            if (value.types?.type === 8) {
                testOrder.name = value.code;
                testOrder.price = 0;
            } else if (value.types?.type === 2) {
                testOrder.name = value.name;
                testOrder.qty = value.qty ? value.qty : 1;
                if (testOrder.qty != 1) {
                    testOrder.price = value.calCprice;
                }
            }
            testOrder.isCito = 0;
            testOrder.type = value.types?.type;
            if (value.types?.type === 1) {
                testOrder.deviceId = value.deviceId;
            } else {
                testOrder.requestDate = new Date();
            }
            testOrder.usageType = 'OUT';
            setOrders([...orders, testOrder]);
            setTotal(total + testOrder.price);
        }
    }

    const remove = (index) => {
        if (isPackage) {
            var arr = [...packages];
            arr.splice(index, 1);
            setPackages(arr);
        } else {
            var arr = [...orders];
            arr.splice(index, 1);
            setTotal(total - orders[index].price);
            setOrders(arr);
        }
    }

    const newModal = (index, deviceId) => {
        if (!deviceId) {
            openNofi('error', 'Төхөөрөмж', 'sadsada');
        } else {
            setXrayRequestId(index);
            setXrayDeviceId(deviceId);
            setIsXrayModal(true);
        }
    }

    const checkType = (order, index) => {
        if (order.type === 1) {
            return (
                <>
                    <td
                        className="hover:cursor-pointer"
                        onDoubleClick={() => newModal(index, order.deviceId)}
                    >
                        <ClockCircleOutlined style={{ color: "green", verticalAlign: "middle" }} />
                    </td>
                    <td>{order.name}</td>
                </>
            )
        } else {
            return (
                <>
                    <td></td>
                    <td>{order.name}</td>
                </>
            )
        }
    }

    const filterDeviceDate = async (date) => {
        if (date) {
            config.params.deviceId = xrayDeviceId;
            // config.params.examDate = moment(examDate).utcOffset('+0800').format('YYYY-MM-DD HH:mm');
            const response = await Get('device-booking/schedule', token, config);
            setXrayDatas(response.data);
        }
    }

    const selectTime = (hour, minute) => {
        const requestDate = moment().hour(hour).minute(minute);
        const arr = [...orders];
        arr[xrayRequestId].requestDate = requestDate;
        setOrders(arr);
        setIsXrayModal(false);
    }

    const Tabss = [];
    categories.map((category, index) => {
        if (category.name == 'package') {
            Tabss.push(
                {
                    label: "Багц",
                    key: index,
                    children: <Package handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Examination') {
            Tabss.push(
                {
                    label: "Шинэжилгээ",
                    key: index,
                    children: <Examination handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Xray') {
            Tabss.push(
                {
                    label: "Оношилгоо",
                    key: index,
                    children: <Xray handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Treatment') {
            Tabss.push(
                {
                    label: "Эмчилгээ",
                    key: index,
                    children: <Treatment handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Surgery') {
            Tabss.push(
                {
                    label: "Мэс, засал",
                    key: index,
                    children: <Surgery />
                }
            )
        }
        if (category.name == 'Endo') {
            Tabss.push(
                {
                    label: "Дуран",
                    key: index,
                    children: <Endo />
                }
            )
        }
        if (category.name == 'RecentRecipe') {
            Tabss.push(
                {
                    label: "Өмнөх жор",
                    key: index,
                    children: <RecentRecipe />
                }
            )
        }
        if (category.name == 'SetOrder') {
            Tabss.push(
                {
                    label: "Set Order",
                    key: index,
                    children: <SetOrder handleclick={handleclick} />
                }
            )
        }
        if (category.name == 'Medicine') {
            Tabss.push(
                {
                    label: "Эм",
                    key: index,
                    children: <Medicine handleclick={handleclick} />
                }
            )
        }
    })

    return (
        <div className="flex flex-wrap">
            <div className={isDoctor ? 'w-full p-1' : 'w-full md:w-2/3 p-1'}>
                <Tabs
                    tabPosition="left"
                    items={Tabss}
                    tabBarExtraContent={
                        <Button
                            className="bg-green-500 font-bold my-2 hover:text-white"
                            onClick={() => isPackage ? save(packages) : saveClick(orders)}>
                            Хадгалах
                        </Button>}
                />
            </div>
            <div className={isDoctor ? 'w-full p-1' : 'w-full md:w-1/3 p-1'}>
                <div className='table-responsive px-4 pb-4' id='style-8' style={{ maxHeight: '420px' }}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th></th>
                                <th className="font-bold text-sm align-middle">Нэр</th>
                                <th className="font-bold text-sm align-middle">Үнэ</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody p-0'>
                            {
                                isPackage ?
                                    packages?.map((pack, index) => {
                                        return (
                                            <tr key={index} onDoubleClick={() => remove(index)}>
                                                <td></td>
                                                <td>{pack.serviceName}</td>
                                                <td>{pack.servicePrice}</td>
                                            </tr>
                                        )
                                    })
                                    :
                                    orders?.map((order, index) => {
                                        return (
                                            <tr key={index} className='ant-table-row ant-table-row-level-0'>
                                                {checkType(order, index)}
                                                <td>{order.price}</td>
                                                <td onDoubleClick={() => remove(index)} className="hover:cursor-pointer"><CloseCircleOutlined style={{ color: "red", verticalAlign: "middle" }} /></td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </Table>
                </div>
                <div>
                    <p className="float-left font-extrabold">Нийт Үнэ</p>
                    <p className="float-right font-extrabold">{total}₮</p>
                </div>
            </div>
            <Modal
                open={isXrayModal}
                title={"Оношилгооны цаг захиалах" + xrayDeviceId}
                onCancel={() => setIsXrayModal(false)}
                width={'60%'}
            >
                <div className="flex flex-wrap">
                    <div className="w-full p-1">
                        <DatePicker onChange={filterDeviceDate} />
                    </div>
                    <div className="w-full p-1">
                        <div className="grid grid-cols-8 gap-5">
                            {
                                xrayDatas.map((item, index) => {
                                    return (
                                        <div className="text-center" key={index}>
                                            <Button onClick={() => selectTime(item.startHour, item.startMinute)} className="bg-green-500 w-full hover:text-white">
                                                {
                                                    item.startHour + ":" + item.startMinute
                                                }
                                            </Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default Order;