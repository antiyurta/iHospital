import { Col, Row } from "antd";
import React from "react";

import UTable from "../../UTable";

const column = [
    {
        index: 'name',
        label: "Нэр",
        isView: true,
        input: 'input',
        rules: [
            {
                required: true,
                message: 'Хоосон байж болохгүй'
            },
        ],
        col: 24,
    },
    {
        index: 'salarySupp',
        label: "Зэрэгийн нэмэгдэл",
        isView: true,
        input: 'inputNumber',
        rules: [
            {
                required: true,
                message: 'Хоосон байж болохгүй'
            },
        ],
        col: 24,
    },
    {
        index: 'inspectionPrice',
        label: 'Үзлэгийн үнэ',
        isView: true,
        input: 'inputNumber',
        rules: [
            {
                required: true,
                message: 'Хоосон байж болохгүй'
            },
        ],
        col: 24,
    }
]

function Degree() {
    const params = {
    }
    return (
        <div className='body'>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs="24" xl={24}>
                        <UTable title={'Зэрэг'} url={'reference/degree'} params={params} column={column} width='50%' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Degree;