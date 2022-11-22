import { Col, Row } from "antd";
import React, { useState } from "react";

import UTable from "../../UTable";

function Directory() {
    const column = [
        {
            index: 'code',
            label: 'Код',
            isView: true,
            input: 'input',
            col: 8
        },
        {
            index: 'nameEn',
            label: 'English',
            isView: true,
            input: 'input',
            col: 8
        },
        {
            index: 'nameMn',
            label: 'nameMn',
            isView: true,
            input: 'input',
            col: 8
        },
        {
            index: 'nameRu',
            label: 'nameRu',
            isView: true,
            input: 'input',
            col: 8
        },
    ]

    return (
        <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
                <UTable title={'directories'} url={'reference/diagnose'} column={column} isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true} width='80%' />
            </Col>
        </Row>
    )
}
export default Directory;