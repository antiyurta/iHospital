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
    return (
        <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
                <UTable
                    title={'Зэрэг'}
                    url={'reference/degree'}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    column={column}
                    width='50%' />
            </Col>
        </Row>
    )
}
export default Degree;