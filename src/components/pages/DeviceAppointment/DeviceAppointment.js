import { Button, Card, DatePicker, Form, Modal, Select } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, Post } from "../../comman";
import UTable from "../../UTable";

const { Option } = Select;

function DeviceAppointment() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    }
    const column = [
        {
            index: 'name',
            label: "Нэр",
            isView: true,
            isSearch: false,
            input: 'input',
            col: 24
        },
        {
            index: "isActive",
            label: 'Төхөөрөмж идэвхтэй эсэх',
            isView: true,
            isSearch: false,
            input: 'switch',
            col: 24
        },
        {
            index: 'startHour',
            label: "Ehleh tsag",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'startMinute',
            label: "Ehleh minute",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'endHour',
            label: "Ehleh tsag",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'endMinute',
            label: "Ehleh minute",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        }
    ]

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [deviceList, setDeviceList] = useState([]);
    //
    const [deviceId, setDeviceId] = useState(0);
    const [examDate, setExamDate] = useState('');
    //
    const [form] = Form.useForm();

    const getDa = async () => {
        config.params.deviceId = 2;
        config.params.examDate = "2022-11-02";
        const response = await Get('device-booking/schedule', token, config);
        console.log(response);
    }

    const getDeviceList = async () => {
        config.params.deviceId = null;
        config.params.examDate = null;
        const response = await Get('device', token, config);
        setDeviceList(response.data);
    }

    useEffect(() => {
        getDa();
        getDeviceList();
    }, [])

    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <UTable
                    title={'Device'}
                    url={'device'}
                    column={column}
                    width='60%'
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true} />
            </div>
            <div className="w-full">
                <Card
                    bordered={false}
                    className="header-solid max-h-max rounded-md"
                    title={'asdas'}
                    extra={
                        <Button onClick={() => setIsOpenModal(true)} className='bg-sky-700 rounded-md text-white'>Нэмэх</Button>
                    }
                >
                    <div className='table-responsive p-4' id='style-8'>
                        <Table className='ant-border-space' style={{ width: '100%' }}>
                            <thead className='ant-table-thead bg-slate-200'>
                                <tr>
                                    <th>sda</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </Table>
                    </div>
                </Card>
                <Modal
                    open={isOpenModal}
                    onCancel={() => setIsOpenModal(false)}
                    onOk={async () => {
                        const response = await Post('device-booking/schedule', token, config, {
                            deviceId: deviceId,
                            examDate: examDate,
                        })
                    }
                    }
                >
                    <Select onChange={(e) => { setDeviceId(e) }}>
                        {
                            deviceList.map((list, index) => {
                                return (
                                    <Option key={index} value={list.id}>{list.name}</Option>
                                )
                            })
                        }
                    </Select>
                    <DatePicker onChange={(e) => { setExamDate(moment(e).utcOffset('+0800').format('YYYY-MM-DD')) }} />
                </Modal>
            </div>
        </div>
    )
}
export default DeviceAppointment;