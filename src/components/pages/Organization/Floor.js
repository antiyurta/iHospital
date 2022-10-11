import { Col, Row } from "antd";
import React from "react";

import UTable from "../../UTable";

const column = [
    {
        index: "name",
        label: "Нэр",
        isView: true,
        input: 'input',
        col: 24,
    },
]

function Floor() {
    return (
        <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
                <UTable title={'Давхар'} url={'organization/floor'} column={column} width='20%' />
            </Col>
        </Row>
    )
}
export default Floor;