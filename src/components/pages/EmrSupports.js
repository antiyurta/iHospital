import { Button, Card, Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/authReducer";
import { Get } from "../comman";
//
import PaintStory from '../pages/EMR/InPatient/document/painStory/Index';
//

function EmrSupports({ appointmentId, usageType }) {
    const token = useSelector(selectCurrentToken);
    const [data, setData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const dd = async () => {
        const conf = {
            headers: {},
            params: {}
        };
        if (usageType === 'OUT') {
            conf.params['appointmentId'] = appointmentId;
        } else {
            conf.params['inpatientRequestId'] = appointmentId;
        }
        const response = await Get('report/pain-story', token, conf);
        setData(response);
        setIsOpen(true);
    }
    //
    return (
        <>
            <Card
                className="header-solid max-h-max rounded-md"
                bodyStyle={{
                    paddingTop: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    minHeight: 50,
                    maxHeight: 50,
                }}
            >
                <Button onClick={() => dd()}>Өвчний түүх</Button>
            </Card>
            <Modal
                title="sdas"
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                width={"23cm"}
            >
                <PaintStory data={data} />
            </Modal>
        </>
    )
}
export default EmrSupports;