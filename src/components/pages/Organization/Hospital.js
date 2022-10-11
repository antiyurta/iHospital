import '../../../style/Hospital.css'
import React from 'react';
import {
    Row,
    Col,
} from "antd";

import UTable from '../../UTable';


const column =
    [
        {
            index: "name",
            label: "Нэр",
            isView: true,
            input: 'input',
            col: 12,
        },
        {
            index: "databaseName",
            label: "Дата басс нэр",
            isView: true,
            input: 'input',
            col: 12
        },
        {
            index: "registerNumber",
            label: 'Регистр дугаар',
            isView: true,
            input: 'input',
            col: 12
        },
        {
            index: "email",
            label: 'И-мэйл',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
                {
                    type: 'email',
                    message: "Хэлбэрийн алдаа"
                },
                {
                    validator: async (_, email) => {
                        if (email.length < 10) {
                            return Promise.reject(new Error('asdasdasdad'));
                        }
                    }
                }
            ],
            isView: true,
            input: 'input',
            col: 12,
        },
        {
            index: 'address',
            label: 'Хаяг',
            isView: false,
            input: 'textarea',
            col: 12
        },
        {
            index: 'phone',
            label: 'Утас',
            isView: false,
            input: 'inputNumber',
            col: 12,
        },
        {
            index: "isActive",
            label: 'Идэвхтэй эсэх',
            isView: false,
            input: 'switch',
            col: 12,
        },
        {
            index: 'isInsurance',
            label: 'Даатгалтай эсэх',
            isView: false,
            input: 'switch',
            col: 12,
        }
    ];
function Hospital() {
    return (
        <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
                <UTable title={'Байгууллага'} url={'organization/hospital'} column={column} width='80%' />
            </Col>
        </Row>
    );
}

export default Hospital;
