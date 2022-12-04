import { Button, Checkbox, DatePicker, Form, Input, InputNumber, message, Modal, Tabs } from "antd";
import RecentRecipe from "./RecentRecipe";
import SetOrder from "./SetOrder";
import Medicine from "./Medicine";
import Examination from "./Examination";
import Xray from "./Xray";
import Treatment from "./Treatment";
import Surgery from './Surgery';
import Endo from "./Endo";
import Package from "./Package";
import InpatientRequest from "./InpatientRequest";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { ClockCircleOutlined, CloseCircleOutlined, CloseOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectCurrentDepId, selectCurrentToken, selectCurrentUserId } from "../../../features/authReducer";
import { Get, openNofi, Post } from "../../comman";
import moment from "moment";
import { useLocation } from "react-router-dom";
//
function Order({ isPackage, isDoctor, categories, save }) {
    const token = useSelector(selectCurrentToken);
    const depId = useSelector(selectCurrentDepId);
    const userId = useSelector(selectCurrentUserId);
    const IncomePatientId = useLocation()?.state?.patientId;
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
        console.log(e);
        var status = true;
        e.map((el) => {
            if (!el.requestDate) {
                status = false;
                openNofi("error", 'Төхөөрөмж', `${el.name} Цаг оруулах`);
            }
        })
        if (status) {
            save(e);
        }
    }

    const handleclick = async (value) => {
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
            console.log(value);
            var services = [];
            value.map((item) => {
                const service = {};
                service.id = item.id;
                service.name = item.name;
                service.price = item.price;
                service.type = item.types?.type;
                if (item.type === 8) {
                    service.name = item.iName;
                    service.dose = item.dose;
                    service.price = 0;
                    service.type = item.type;
                    service.medicineType = item.medicineReferences?.name;
                    service.m = false;
                    service.d = false;
                    service.e = false;
                    service.n = false;
                    service.desc = "";
                    service.dayLength = 1;
                    service.total = 0;
                } else if (item.type === 2) {
                    service.name = item.name;
                    service.qty = item.qty ? item.qty : 1;
                    if (service.qty != 1) {
                        service.price = item.calCprice;
                    }
                }
                service.isCito = false;
                if (item.type === 1) {
                    service.deviceId = item.deviceId;
                    service.typeId = item.xrayTypeId;
                } else if (item.type === 0) {
                    service.typeId = item.examinationTypeId;
                    service.requestDate = new Date();
                } else {
                    service.requestDate = new Date();
                }
                service.requestDate = moment(new Date()).format('YYYY-MM-DD');
                service.usageType = 'OUT';
                services.push(service);
            });
            var datas = await orderForm.getFieldsValue();
            var data = [];
            if (datas.services === undefined) {
                data = services;
            } else {
                data = datas.services.concat(services);
            }
            orderForm.setFieldsValue({ services: data });
        }
    };

    const handleclickDemo = (value) => {
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
            console.log(value);
            const testOrder = {};
            testOrder.id = value.id;
            testOrder.name = value.name;
            testOrder.price = value.price;
            if (value.types?.type === 8) {
                testOrder.name = value.iName;
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
                testOrder.typeId = value.xrayTypeId;
            } else if (value.types?.type === 0) {
                testOrder.typeId = value.examinationTypeId;
                testOrder.requestDate = new Date();
            } else {
                testOrder.requestDate = new Date();
            }
            testOrder.usageType = 'OUT';
            setOrders([...orders, testOrder]);
            orderForm.setFieldValue('services', orders);
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

    const newModalXray = (index, deviceId) => {
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
                        onDoubleClick={() => newModalXray(index, order.deviceId)}
                    >
                        <ClockCircleOutlined style={{ color: "green", verticalAlign: "middle" }} />
                    </td>
                    <td>{order.name}</td>
                </>
            )
        } else if (order.type === 2) {

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
    //
    const [showMedicine, setShowMedicine] = useState(false);
    const [showExamination, setShowExamination] = useState(false);
    const [showTreatment, setShowTreatment] = useState(false);
    const [showXray, setShowXray] = useState(false);
    const [showInpatient, setShowInpatient] = useState(false);
    const [orderForm] = Form.useForm();
    const tt = {
        m: {
            text: 'Өглөө ',
            state: false,
        },
        d: {
            text: 'Өдөр ',
            state: false,
        },
        e: {
            text: 'Орой ',
            state: false,
        },
        n: {
            text: 'Шөнө ',
            state: false,
        }
    };
    const qtyCalculator = (type, e, key) => {
        const dayLength = orderForm.getFieldValue(['services', key, 'dayLength']);
        tt[type].state = e;
        var message = "";
        var counter = 0;
        Object.values(tt).map((a, b) => {
            if (a.state) {
                message += a.text;
                counter++;
            }
        });
        orderForm.setFieldValue(['services', key, 'total'], counter * dayLength);
        orderForm.setFieldValue(['services', key, 'desc'], message);
    };
    const totalCalculator = (value, key) => {
        var counter = 0;
        const m = orderForm.getFieldValue(['services', key, 'm']);
        const d = orderForm.getFieldValue(['services', key, 'd']);
        const e = orderForm.getFieldValue(['services', key, 'e']);
        const n = orderForm.getFieldValue(['services', key, 'n']);
        if (m) {
            counter++;
        }
        if (d) {
            counter++;
        }
        if (e) {
            counter++;
        }
        if (n) {
            counter++;
        }
        orderForm.setFieldValue(['services', key, 'total'], counter * value);
    };
    const isClose = (name, state) => {
        if (name === 'inpatient') {
            setShowInpatient(state);
        } else if (name === 'medicine') {
            setShowMedicine(state);
        } else if (name === 'examination') {
            setShowExamination(state);
        } else if (name === 'treatment') {
            setShowTreatment(state);
        } else if (name === 'xray') {
            setShowXray(state);
        }
    };
    const inpatientRequestClick = async (values) => {
        values.patientId = IncomePatientId;
        values.departmentId = depId;
        const response = await Post('service/inpatient-request', token, config, values);
        setShowInpatient(false);
    };
    const newModalCategory = (category) => {
        if (category.name === 'Examination') {
            setShowExamination(true);
        } else if (category.name === 'Xray') {
            setShowXray(true);
        } else if (category.name === 'Medicine') {
            setShowMedicine(true);
        } else if (category.name === 'SetOrder') {
            // setModalBody(<SetOrder handleclick={handleclick} />);
            // setModalTitle('СетОрдер сонгох');
        } else if (category.name === 'RecentRecipe') {
            // setModalBody(<RecentRecipe handleclick={handleclick} />);
            // setModalTitle('Өмнөх жор сонгох');
        } else if (category.name === 'Treatment') {
            setShowTreatment(true);
        } else if (category.name === 'Surgery') {
            // setModalBody(<Surgery handleclick={handleclick} />);
            // setModalTitle('Мэс, засал сонгох');
        } else if (category.name === 'Endo') {
            // setModalBody(<Endo handleclick={handleclick} />);
            // setModalTitle('Дуран сонгох');
        } else if (category.name === 'Package') {
            // setModalBody(<Package handleclick={handleclick} />);
            // setModalTitle('Багц сонгох');
        } else if (category.name === 'Inpatient') {
            setShowInpatient(true);
        }
    };
    //
    return (
        <>
            {showExamination && <Examination isOpen={showExamination} isClose={isClose} handleclick={handleclick} />}
            {showXray && <Xray isOpen={showXray} isClose={isClose} handleclick={handleclick} />}
            {showTreatment && <Treatment isOpen={showTreatment} isClose={isClose} handleclick={handleclick} />}
            {showMedicine && <Medicine isOpen={showMedicine} isClose={isClose} handleclick={handleclick} />}
            {showInpatient && <InpatientRequest isOpen={showInpatient} isClose={isClose} handleClick={inpatientRequestClick} />}
            <div className="flex flex-wrap">
                <div className="w-full pb-4">
                    {
                        categories.map((category, index) => {
                            return (
                                <Button key={index} onClick={() => newModalCategory(category)}>{category.label}</Button>
                            )
                        })
                    }
                    <Button onClick={() => orderForm.validateFields()
                        .then((values) => {
                            save(values.services);
                            console.log(values);
                        })}
                    >Хыбыйб</Button>
                </div>
                <div className='w-full'>
                    <Form form={orderForm}>
                        <Form.List name='services'>
                            {
                                (fields, { add, remove }) => (
                                    <>
                                        <div className='table-responsive pb-4' id='style-8' style={{ maxHeight: '420px' }}>
                                            <Table className='ant-border-space' style={{ width: '100%' }}>
                                                <thead className='ant-table-thead bg-slate-200'>
                                                    <tr>
                                                        <th className="font-bold text-sm align-middle">cito</th>
                                                        <th className="font-bold text-sm align-middle">Нэр</th>
                                                        <th className="font-bold text-sm align-middle">Хэлбэр</th>
                                                        <th className="font-bold text-sm align-middle">Тун</th>
                                                        <th className="font-bold text-sm align-middle">Сорьц</th>
                                                        <th className="font-bold text-sm align-middle">m</th>
                                                        <th className="font-bold text-sm align-middle">d</th>
                                                        <th className="font-bold text-sm align-middle">e</th>
                                                        <th className="font-bold text-sm align-middle">n</th>
                                                        <th className="font-bold text-sm align-middle">Заавар (тэмдэглэл)</th>
                                                        <th className="font-bold text-sm align-middle">Хугацаа(Өдөр)</th>
                                                        <th className="font-bold text-sm align-middle">Нийт хэмжээ</th>
                                                        <th className="font-bold text-sm align-middle">Огноо</th>
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
                                                            fields?.map(({ key, name, }) => (
                                                                <tr key={key} className='ant-table-row ant-table-row-level-0'>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'isCito']}
                                                                            valuePropName='checked'
                                                                            className="mb-0 hover:bg-transparent"
                                                                        >
                                                                            <Checkbox className="bg-transparent align-middle" />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>{orderForm.getFieldValue(['services', name, 'name'])}</td>
                                                                    <td>{orderForm.getFieldValue(['services', name, 'medicineType'])}</td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'dose']}
                                                                            className="mb-0"
                                                                        >
                                                                            <Input disabled={orderForm.getFieldValue(['services', name, 'type']) === 8 ? false : true} />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'specimen']}
                                                                            className="mb-0"
                                                                        >
                                                                            <Input disabled={orderForm.getFieldValue(['services', name, 'type']) === 0 ? false : true} />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'm']}
                                                                            valuePropName='checked'
                                                                            className="mb-0"
                                                                        >
                                                                            <Checkbox
                                                                                onChange={(e) => qtyCalculator("m", e.target.checked, name)}
                                                                                disabled={
                                                                                    orderForm.getFieldValue(['services', name, 'type']) === 8 ||
                                                                                        orderForm.getFieldValue(['services', name, 'type']) === 2 ? false
                                                                                        :
                                                                                        true
                                                                                }
                                                                            />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'd']}
                                                                            valuePropName='checked'
                                                                            className="mb-0"
                                                                        >
                                                                            <Checkbox
                                                                                onChange={(e) => qtyCalculator("d", e.target.checked, name)}
                                                                                disabled={
                                                                                    orderForm.getFieldValue(['services', name, 'type']) === 8 ||
                                                                                        orderForm.getFieldValue(['services', name, 'type']) === 2 ? false
                                                                                        :
                                                                                        true
                                                                                }
                                                                            />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'e']}
                                                                            valuePropName='checked'
                                                                            className="mb-0"
                                                                        >
                                                                            <Checkbox
                                                                                onChange={(e) => qtyCalculator("e", e.target.checked, name)}
                                                                                disabled={
                                                                                    orderForm.getFieldValue(['services', name, 'type']) === 8 ||
                                                                                        orderForm.getFieldValue(['services', name, 'type']) === 2 ? false
                                                                                        :
                                                                                        true
                                                                                }
                                                                            />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'n']}
                                                                            valuePropName='checked'
                                                                            className="mb-0"
                                                                        >
                                                                            <Checkbox
                                                                                onChange={(e) => qtyCalculator("n", e.target.checked, name)}
                                                                                disabled={
                                                                                    orderForm.getFieldValue(['services', name, 'type']) === 8 ||
                                                                                        orderForm.getFieldValue(['services', name, 'type']) === 2 ? false
                                                                                        :
                                                                                        true
                                                                                }
                                                                            />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td><Form.Item
                                                                        name={[name, 'desc']}
                                                                        className="mb-0"
                                                                    >
                                                                        <Input disabled={true} />
                                                                    </Form.Item></td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'dayLength']}
                                                                            className="mb-0"
                                                                        >
                                                                            <InputNumber
                                                                                onChange={(e) => totalCalculator(e, name)}
                                                                                disabled={
                                                                                    orderForm.getFieldValue(['services', name, 'type']) === 8 ||
                                                                                        orderForm.getFieldValue(['services', name, 'type']) === 2 ? false
                                                                                        :
                                                                                        true
                                                                                }
                                                                            />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>
                                                                        <Form.Item
                                                                            name={[name, 'total']}
                                                                            className="mb-0"
                                                                        >
                                                                            <InputNumber
                                                                                disabled={
                                                                                    orderForm.getFieldValue(['services', name, 'type']) === 8 ||
                                                                                        orderForm.getFieldValue(['services', name, 'type']) === 2 ? false
                                                                                        :
                                                                                        true
                                                                                }
                                                                            />
                                                                        </Form.Item>
                                                                    </td>
                                                                    <td>{orderForm.getFieldValue(['services', name, 'requestDate'])}</td>
                                                                    <td>{orderForm.getFieldValue(['services', name, 'price'])}</td>
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
                    </Form>

                    <div>
                        <p className="float-left font-extrabold">Нийт Үнэ</p>
                        <p className="float-right font-extrabold">{total}₮</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
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
        </>

    )
}
export default Order;