import { Card } from "antd";
import { useRef, useEffect } from "react";
import { Table } from "react-bootstrap";
import { ScrollRef } from "../../../comman";

function PaymentHistory() {
    const scrollRef = useRef();
    useEffect(() => {
        ScrollRef(scrollRef);
    }, [])
    return (
        <>
            <Card
                bordered={false}
                bodyStyle={{
                    paddingTop: 0,
                    paddingLeft: 1,
                    paddingRight: 1,
                    paddingBottom: 16,
                    maxHeight: 150,
                    minHeight: 150,
                    height: 150,
                }}
            >
                <div className="table-responsive" id="style-8" ref={scrollRef}>
                    <Table bordered className="ant-border-space">
                        <thead className="ant-table-thead">
                            <tr>
                                <th>Огноо</th>
                                <th>Төрөл</th>
                                <th>Төлбөр</th>
                                <th>Ажилтан</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </Card>
        </>
    )
}
export default PaymentHistory;