import { Button, DatePicker, Table } from "antd";
import { PauseCircleOutlined, CloseCircleOutlined, WarningOutlined, CheckCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Get } from "../../../comman";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";
import moment from "moment";
import mnMN from "antd/es/calendar/locale/mn_MN";

function MedicineRequests({ PatientId, ListId }) {
    const today = new Date();
    const token = useSelector(selectCurrentToken);
    const [datas, setDatas] = useState([]);
    const [meta, setMeta] = useState({});
    const [spinner, setSpinner] = useState(false);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const columns = [
        {
            title: "№",
            render: (_, record, index) => {
                return meta.page * meta.limit - (meta.limit - index - 1)
            }
        },
        {
            title: "Хэрэгжүүлэх",
            dataIndex: 'date',
            render: (text) => {
                return moment(text).format("YYYY-MM-DD")
            }
        },
        {
            title: "Захиалгын нэр",
            dataIndex: ['medicine', 'iName'],
        },
        {
            title: "Код",
            dataIndex: ['medicine', 'code'],
        },
        {
            title: "DOSE",
            dataIndex: "dose"
        },
        {
            title: "Өглөө",
            dataIndex: "isMorning",
            render: (text) => {

            }
        },
        {
            title: "Өдөр",
            dataIndex: "isAfternoon"
        },
        {
            title: "Орой",
            dataIndex: "isEvening"
        },
        {
            title: "Шөнө",
            dataIndex: "isNight"
        },
    ];
    const getMedicineRequests = async (page, pageSize, start, end) => {
        setSpinner(true);
        console.log(start);
        start = moment(start).set({ hour: 0, minute: 0, second: 0 });
        end = moment(end).set({ hour: 23, minute: 59, second: 59 });
        const conf = {
            headers: {},
            params: {
                page: page,
                limit: pageSize,
                startDate: moment(start).format("YYYY-MM-DD HH:mm"),
                endDate: moment(end).format("YYYY-MM-DD HH:mm")
            }
        };
        setStart(start);
        setEnd(end);
        const response = await Get('medicine-plan', token, conf);
        setDatas(response.data);
        setMeta(response.meta);
        setSpinner(false);
    };
    useEffect(() => {
        getMedicineRequests(1, 15, today, today);
    }, []);
    return (
        <div className="flex flex-wrap">
            <div className="w-1/3 p-1">
                <DatePicker locale={mnMN} onChange={(e) => {
                    if (e != null) {
                        getMedicineRequests(1, 15, e, e)
                    }
                }} />
            </div>
            <div className="w-full p-1">
                <div className="flex float-left">
                    <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1">Төлөв сонгох</span>
                    </div>
                    <div className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1"><CheckCircleOutlined />Хэрэгжүүлсэн</span>
                    </div>
                    <div className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1"><WarningOutlined />Цуцалсан</span>
                    </div>
                    <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1"><CloseCircleOutlined style={{ fontSize: 17 }} />Зогсоон</span>
                    </div>
                    <div className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1"><PauseCircleOutlined style={{ fontSize: 16 }} />Татгалзсан</span>
                    </div>
                </div>
                <div className="float-right">
                    <Button title="Сэргээх" type="primary" onClick={() => getMedicineRequests(1, 20, start, end)}>
                        <ReloadOutlined spin={spinner} />
                    </Button>
                </div>
            </div>
            <div className="w-full p-1">
                <Table
                    bordered
                    rowKey={"id"}
                    scroll={{
                        x: 1000
                    }}
                    className="whitespace-pre-wrap"
                    locale={{ emptyText: "Мэдээлэл байхгүй" }}
                    loading={spinner}
                    columns={columns}
                    dataSource={datas}
                    pagination={{
                        simple: true,
                        pageSize: 20,
                        total: meta.itemCount,
                        current: meta.page,
                        onChange: (page, pageSize) => getMedicineRequests(page, pageSize, start, end)
                    }}
                />
            </div>
        </div>
    )
}
export default MedicineRequests;