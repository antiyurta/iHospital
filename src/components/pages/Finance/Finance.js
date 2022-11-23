import { EditOutlined } from "@ant-design/icons";
import { Button, Card, Form, Modal } from "antd";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get, ScrollRef } from "../../comman";

function Finance() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const scrollRef = useRef();
    const [spinner, setSpinner] = useState(false);
    const [finances, setFinances] = useState([]);
    const [isOpenModalExpense, setIsOpenModalExpense] = useState(false);
    const [financeForm] = Form.useForm();
    const [orderExpense, setOrderExpense] = useState([]);
    const getFinances = async () => {
        const response = await Get('finance/material', token, config);
        if (response.data.length > 0) {
            setFinances(response.data);
            setSpinner(true);
        }
    };
    const orderExpenseModal = (finance) => {
        setOrderExpense(finance);
        setIsOpenModalExpense(true);
    };
    useEffect(() => {
        getFinances();
        ScrollRef(scrollRef);
    }, [])

    return (
        <>
            <Card
                bordered={false}
                className="header-solid max-h-max rounded-md"
                title="Finance"
            >
                <div className='table-responsive p-4' id='style-8' ref={scrollRef}>
                    <Table className='ant-border-space' style={{ width: '100%' }}>
                        <thead className='ant-table-thead bg-slate-200'>
                            <tr>
                                <th>b_id</th>
                                <th>barcode</th>
                                <th>dotcode</th>
                                <th>e_name</th>
                                <th>m_cost</th>
                                <th>m_id</th>
                                <th>m_name</th>
                                <th>nodiscount</th>
                                <th>pcount</th>
                                <th>Үйлдэл</th>
                            </tr>
                        </thead>
                        <tbody className='ant-table-tbody'>
                            {spinner ?
                                finances.map((finance, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{finance.b_id}</td>
                                            <td>{finance.barcode}</td>
                                            <td>{finance.dotcode}</td>
                                            <td>{finance.e_name}</td>
                                            <td>{finance.m_cost}</td>
                                            <td>{finance.m_id}</td>
                                            <td>{finance.m_name}</td>
                                            <td>{finance.nodiscount ? 'TIIM' : 'UGUI'}</td>
                                            <td>{finance.pcount}</td>
                                            <td>
                                                <Button type="link" onClick={() => orderExpenseModal(finance)} title='Засах' style={{ paddingRight: 5, paddingLeft: 5 }}><EditOutlined /></Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={10} size='lg' style={{ backgroundColor: 'white', textAlign: 'center' }}>
                                        <Spinner animation='grow' style={{ color: '#1890ff' }} />
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </Card>
            <Modal
                title={orderExpense.e_name + " Захиалах"}
                open={isOpenModalExpense}
                onOk={() => {
                    financeForm.validateFields().then((values) => {
                        console.log(values);
                    })
                }}
                onCancel={() => setIsOpenModalExpense(false)}
            >
                <Form form={financeForm}>
                    <Form.Item
                        label="patientId"
                        name="patientId"
                    >
                        
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default Finance;