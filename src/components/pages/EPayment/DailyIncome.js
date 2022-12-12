import { EyeOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Empty, Modal, Pagination } from "antd";
import moment from "moment";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, numberToCurrency, ScrollRef } from "../../comman";
import EbarimtPrint from "./EbarimtPrint";
import mnMN from "antd/es/calendar/locale/mn_MN";
const { RangePicker } = DatePicker;
function DailyIncome() {
    const token = useSelector(selectCurrentToken);
    const scrollRef = useRef();
    const config = {
        headers: {},
        params: {}
    };
    const [incomes, setIncomes] = useState([]);
    const [meta, setMeta] = useState({});
    const [spinner, setSpinner] = useState(true);
    const [ebarimtModal, setEbarimtModal] = useState(false);
    const [ebarimtData, setEbarimtData] = useState({});
    //
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    //
    const getDailyIncome = async (page, pageSize, dates) => {
        setSpinner(false);
        const conf = {
            headers: {},
            params: {
                page: page,
                limit: pageSize,
            }
        };
        if (startDate && endDate) {
            conf.params.startDate = startDate;
            conf.params.endDate = endDate;
        }
        const response = await Get('payment/payment', token, conf);
        if (response.data.length > 0) {
            setIncomes(response.data);
            setMeta(response.meta);
        }
        setSpinner(true);
    };
    const viewModal = async (id) => {
        const response = await Get('payment/payment/' + id, token, config);
        console.log(response);
        setEbarimtData(response);
        setEbarimtModal(true);
    };
    const filter = async (dates) => {
        if (dates) {
            setStartDate(moment(dates[0]).hour(0).minute(0).format('YYYY-MM-DD HH:mm'));
            setEndDate(moment(dates[1]).hour(23).minute(59).format('YYYY-MM-DD HH:mm'));
            getDailyIncome(1, 10);
        } else {
            setStartDate(null);
            setEndDate(null);
        }
    };
    useEffect(() => {
        ScrollRef(scrollRef);
        getDailyIncome(1, 10);
    }, []);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="basis-1/3">
                    <RangePicker onChange={filter} locale={mnMN} />
                </div>
            </div>
            <Card
                bordered={false}
                className="header-solid max-h-max rounded-md"
                title="Өдрийн орлогийн тайлан"
                bodyStyle={{ padding: 0 }}
            >
                <div className="table-responsive p-4" id="style-8" ref={scrollRef}>
                    <Table className="ant-border-space" style={{ width: "100%" }}>
                        <thead className="ant-table-thead bg-slate-200">
                            <tr>
                                <th className="font-bold text-sm align-middle">Овог</th>
                                <th className="font-bold text-sm align-middle">Нэр</th>
                                <th className="font-bold text-sm align-middle">ТТ Огноо</th>
                                <th className="font-bold text-sm align-middle">Төлсөн дүн</th>
                                <th className="font-bold text-sm align-middle">Ажилтны нэр</th>
                                <th className="font-bold text-sm align-middle"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                spinner ?
                                    (
                                        incomes?.map((income, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{income?.patient?.lastName}</td>
                                                    <td>{income?.patient?.firstName}</td>
                                                    <td>{moment(income?.createdAt).format("YYYY-MM-DD HH:mm")}</td>
                                                    <td>{numberToCurrency(income.totalAmount)}</td>
                                                    <td>{income.createdEmployeeName}</td>
                                                    <td>
                                                        <Button
                                                            type="link"
                                                            onClick={() => viewModal(income.id)}
                                                            title="Харах"
                                                            style={{ paddingRight: 5 }}
                                                        >
                                                            <EyeOutlined />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    )
                                    :
                                    <tr>
                                        <td
                                            colSpan="5"
                                            size="lg"
                                            style={{ backgroundColor: "white", textAlign: "center" }}
                                        >
                                            <Spinner animation="grow" style={{ color: "#1890ff" }} />
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Pagination
                        simple
                        className="pagination"
                        pageSize={10}
                        total={meta.itemCount}
                        current={meta.page}
                        onChange={getDailyIncome}
                    />
                </div>
            </Card>
            <Modal open={ebarimtModal} onCancel={() => setEbarimtModal(false)} footer={null} width="360px">
                <EbarimtPrint props={ebarimtData} />
            </Modal>
        </>
    )
}
export default DailyIncome;