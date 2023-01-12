import { CheckCircleOutlined, CloseCircleOutlined, EditOutlined, PauseCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { DatePicker, Table } from "antd";
import mnMN from "antd/es/calendar/locale/mn_MN";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../features/authReducer";

function Cardex({ PatientId }) {
    const token = useSelector(selectCurrentToken);
    //
    const treatmentColumn = [
        {
            title: 'Огноо',
        },
        {
            title: "Төрөл"
        },
        {
            title: "Эмийн нэр"
        },
        {
            title: "Хугацаа"
        },
        {
            title: "Төлөв"
        },
        {
            title: "Сувилагч"
        },
    ];
    const examinationColumn = [
        {
            title: "Огноо"
        },
        {
            title: "Шинжилгээний нэр"
        },
        {
            title: "Төлөв"
        },
        {
            title: "Сувилагч"
        },
    ];
    const xrayColumn = [
        {
            title: "Огноо"
        },
        {
            title: "Оншилгооны нэр"
        },
        {
            title: "Төлөв"
        },
        {
            title: "Сувилагч"
        },
    ];
    //
    const getTreatmentData = async () => {

    };
    useEffect(() => {
        getTreatmentData();
    }, [])
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="flex float-left">
                    <DatePicker locale={mnMN} />
                </div>
                <div className="flex float-right">
                    <div className="p-1 mx-1 text-sm text-white bg-[#5cb85c] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1"><CheckCircleOutlined style={{ marginTop: "-2px", marginRight: 4 }} />Хэрэгжүүлсэн</span>
                    </div>
                    <div className="p-1 mx-1 text-sm text-white bg-[#f0ad4e] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1"><WarningOutlined style={{ marginTop: "-2px", marginRight: 4 }} />Цуцалсан</span>
                    </div>
                    <div className="p-1 mx-1 text-sm text-white bg-[#dd4b39] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-1"><CloseCircleOutlined style={{ marginTop: "-2px", marginRight: 4 }} />Зогсоосон</span>
                    </div>
                    <div className="p-1 mx-1 text-sm text-white bg-[#5bc0de] rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span className="font-medium mx-2"><PauseCircleOutlined style={{ marginTop: "-2px", marginRight: 4 }} />Татгалзсан</span>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 sm:w-full py-2 pr-2">
                <div className="p-1 text-sm text-white bg-[#2d8cff] dark:bg-blue-200 dark:text-blue-800" role="alert">
                    <span className="font-medium mx-1">Эмийн бус эмчилгээ</span>
                </div>
                <Table
                    columns={treatmentColumn}
                />
            </div>
            <div className="md:w-1/2 sm:w-full py-2 pl-2">
                <div className="p-1 text-sm text-white bg-[#2d8cff] dark:bg-blue-200 dark:text-blue-800" role="alert">
                    <span className="font-medium mx-1">Шинжилгээ</span>
                </div>
                <Table
                    columns={examinationColumn}
                />
            </div>
            <div className="md:w-1/2 sm:w-full py-2 pr-2">
                <div className="p-1 text-sm text-white bg-[#2d8cff] dark:bg-blue-200 dark:text-blue-800" role="alert">
                    <span className="font-medium mx-1">Оношилгоо</span>
                </div>
                <Table
                    columns={xrayColumn}
                />
            </div>
        </div>
    )
}
export default Cardex;