import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Get } from "../../comman";

import UTable from "../../UTable";
function Block() {

    const [roomData, setRoomData] = useState([]);

    const getFloor = async () => {
        await Get('organization/floor')
            .then((response) => {
                setRoomData(response.data.response.data);
            })
            .catch(() => {
                console.log("dasd");
            })
    }

    const column = [
        {
            index: "name",
            label: "Нэр",
            isView: true,
            input: 'input',
            col: 24,
        },
        {
            index: 'floorId',
            label: 'Давхар',
            isView: true,
            input: 'select',
            inputData: roomData,
            relIndex: 'name',
            col: 24
        }
    ]
    useEffect(() => {
        getFloor();
    }, [])
    return (
        <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
                <UTable title={'Блок'} url={'organization/block'} column={column} width='20%' />
            </Col>
        </Row>
    )
}
export default Block;