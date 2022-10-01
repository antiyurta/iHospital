import { Col, Row } from "antd";
import React, { useState } from "react";

import UTable from "../../UTable";

function Directory() {
    const [data, setData] = useState([{ id: 1, label: 'ICD10' }, { id:2, label: 'ICD9' }]);
    const column = [
        {
            index: 'name',
            label: 'Нэр',
            isView: true,
            input: 'input',
            col: 8
        },
        {
            index: 'code',
            label: 'Код',
            isView: true,
            input: 'input',
            col: 8
        },
        {
            index: 'type',
            label: 'Төрөл',
            isView: true,
            input: 'select',
            inputData: data,
            col: 8
        },
    ]

    return (
        <div className='body'>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs="24" xl={24}>
                        <UTable title={'directories'} url={'reference/directories'} column={column} width='80%' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Directory;