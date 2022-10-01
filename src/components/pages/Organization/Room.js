import { Col, Row } from "antd";
import React from "react";

import UTable from "../../UTable";

const column = [
    {
        index: "roomNumber",
        label: "Өрөөны дугаар",
        isView: true,
        input: 'input',
        col: 24,
    },
    {
        index: 'isInpatient',
        label: 'Хэвтэн эсэх',
        isView: true,
        input: 'switch',
        col: 24,
    },
    {
        index: 'isVip',
        label: 'VIP эсэх',
        isView: true,
        input: 'switch',
        col: 24,
    },
    {
        index: 'blockId',
        label: 'Блок',
        isView: true,
        input: 'select',
        inputData: [
            {
                id: 1,
                label: 'А блок'
            },
            {
                id: 2,
                label: 'Б блок'
            }
        ],
        col: 24
    }
]

function Room() {
    return (
        <div className='body'>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs="24" xl={24}>
                        <UTable title={'Өрөө'} url={'organization/room'} column={column} width='30%' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Room;