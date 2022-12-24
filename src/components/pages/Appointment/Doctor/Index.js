import { Card, Radio, Tabs } from "antd";
import { useState } from "react";
import InspectionHistory from "./InspectionHistory";
import PaymentHistory from "./PaymentHistory";
function Index({ PatientId }) {
    const [type, setType] = useState(Number);
    // return <Tabs type="card" items={supportMenu} />
    return (
        <Card
            bordered={false}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
                paddingTop: 0,
                paddingLeft: 1,
                paddingRight: 1,
                paddingBottom: 16,
                maxHeight: 150,
                minHeight: 150,
                height: 150,
            }}
            extra={
                <>
                    <Radio.Group onChange={(e) => setType(e.target.value)}>
                        <Radio value={0}>Үзлэгийн түүх</Radio>
                        <Radio value={1}>Төлбөрийн мэдээлэл</Radio>
                    </Radio.Group>
                </>
            }
        >
            {
                type === 0 &&
                <InspectionHistory patientId={PatientId} />
            }
            {
                type === 1 &&
                <PaymentHistory patientId={PatientId} />
            }
        </Card>
    )
}
export default Index;