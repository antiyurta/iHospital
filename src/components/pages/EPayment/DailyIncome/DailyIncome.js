import { EyeOutlined, RollbackOutlined , DownloadOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Empty, Modal, Pagination, Table } from "antd";
import moment from "moment";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import { Get, numberToCurrency, Patch, ScrollRef } from "../../../comman";
import EbarimtPrint from "../EbarimtPrint";
import mnMN from "antd/es/calendar/locale/mn_MN";
import PrintIndex from "./PrintIndex";
const { RangePicker } = DatePicker;
function DailyIncome() {
    const token = useSelector(selectCurrentToken);
    const scrollRef = useRef();
    const config = {
        headers: {},
        params: {}
    };
    const today = new Date();
    const [incomes, setIncomes] = useState([]);
    const [meta, setMeta] = useState({});
    const [spinner, setSpinner] = useState(false);
    const [ebarimtModal, setEbarimtModal] = useState(false);
    const [printOneDay, setPrintOneDay] = useState(false);
    const [ebarimtData, setEbarimtData] = useState({});
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [isBackPayment, setIsBackPayment] = useState(false);
    const [totalAmount, setTotalAmount] = useState(Number);
    const getDailyIncome = async (page, pageSize, start, end) => {
        setSpinner(true);
        start = moment(start).set({ hour: 0, minute: 0, second: 0 });
        end = moment(end).set({ hour: 23, minute: 59, second: 59 });
        setStart(start);
        setEnd(end);
        const conf = {
            headers: {},
            params: {
                page: page,
                limit: pageSize,
                startDate: moment(start).format("YYYY-MM-DD HH:mm"),
                endDate: moment(end).format("YYYY-MM-DD HH:mm")
            }
        };
        const response = await Get('payment/payment', token, conf);
        setIncomes(response.data);
        setMeta(response.meta);
        setSpinner(false);
    };
    const viewModal = async (id, isBack) => {
        setIsBackPayment(isBack);
        const response = await Get('payment/payment/' + id, token, config);
        setEbarimtData(response);
        setEbarimtModal(true);
    };
    const reload = async (id) => {
        const response = await Patch('payment/payment/' + id, token, config, {
            id: id
        });
        console.log(response);
    };
    const incomeColumns = [
        {
            title: 'Овог',
            dataIndex: ['patient', 'lastName'],
        },
        {
            title: 'Нэр',
            dataIndex: ['patient', 'firstName'],
        },
        {
            title: 'ТТ Огноо',
            render: (_, row) => {
                return moment(row.createdAt).format("YYYY-MM-DD HH:mm")
            }
        },
        {
            title: 'Төлсөн дүн',
            render: (_, row) => {
                return numberToCurrency(row.totalAmount);
            }
        },
        {
            title: 'Ажилтны нэр',
            dataIndex: "createdEmployeeName",
        },
        {
            title: "Харах",
            width: 50,
            render: (_, row) => {
                return (
                    <Button
                        type="link"
                        onClick={() => viewModal(row.id, false)}
                        title="Харах"
                        style={{ paddingRight: 5 }}
                    >
                        <EyeOutlined />
                    </Button>
                )
            }
        },
        {
            title: "ДАХИН ТАТАХ",
            width: 50,
            render: (_, row) => {
                return (
                    <Button
                        type="link"
                        onClick={() => reload(row.id)}
                        title="ТАТАХ"
                        style={{ paddingRight: 5 }}
                    >
                        <DownloadOutlined />
                    </Button>
                )
            }
        },
        {
            title: "Буцаалт",
            render: (_, row) => {
                return (
                    <Button
                        type="link"
                        onClick={() => viewModal(row.id, true)}
                        title="Харах"
                        style={{ paddingRight: 5, color: "red" }}
                    >
                        <RollbackOutlined />
                    </Button>
                )
            }
        }
    ]
    useEffect(() => {
        ScrollRef(scrollRef);
        getDailyIncome(1, 10, today, today);
    }, []);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <Card
                        bordered={false}
                        className="header-solid max-h-max rounded-md"
                        title="Өдрийн орлогийн тайлан"
                        extra={
                            <>
                                <Button type="primary" onClick={() => setPrintOneDay(true)}>Өдрийн орлого</Button>
                            </>
                        }>
                        <div className="flex flex-wrap">
                            <div className="basis-1/3">
                                <RangePicker onChange={(e) => {
                                    if (e != null) {
                                        getDailyIncome(1, 10, e[0], e[1])
                                    }
                                }} locale={mnMN} />
                            </div>
                            <div className="basis-1/3">
                                {/* <p>Нийт : {totalAmount}</p> */}
                            </div>
                            <div className="w-full py-2">
                                <Table
                                    rowKey={"id"}
                                    rowClassName={(record, index) => {
                                        if (record.isReturn) {
                                            return "bg-red-200"
                                        }
                                    }}
                                    locale={{ emptyText: "Мэдээлэл байхгүй" }}
                                    bordered={true}
                                    loading={spinner}
                                    columns={incomeColumns}
                                    dataSource={incomes}
                                    pagination={{
                                        simple: true,
                                        pageSize: 10,
                                        total: meta.itemCount,
                                        current: meta.page,
                                        onChange: (page, pageSize) => getDailyIncome(page, pageSize, start, end)
                                    }}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)} footer={null} width="360px">
                <EbarimtPrint props={ebarimtData} isBackPayment={isBackPayment} />
            </Modal>
            <Modal
                title={'Өдрийн орлого'}
                open={printOneDay}
                footer={null}
                width={"800px"}
                onCancel={() => setPrintOneDay(false)}
            >
                <PrintIndex />
            </Modal>
        </>
    )
}
export default DailyIncome;