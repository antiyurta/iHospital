import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Get } from "../../comman";

import UTable from "../../UTable";

function CountryDictionary() {

    const [provice, setProvice] = useState([]);
    const [country, setCountry] = useState([]);

    const getProvice = async () => {
        await Get('reference/country', { type: 2 })
            .then((response) => {
                setProvice(response.data.response.data);
            })
            .catch(() => {
                console.log("dasd");
            })
    };
    const getCountry = async () => {
        await Get('reference/country', { type: 1 })
            .then((response) => {
                setCountry(response.data.response.data);
            })
            .catch(() => {
                console.log("dasd");
            })
    }

    useEffect(() => {
        getProvice();
        getCountry();
    }, [])

    const CountryColumn = [
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
            index: "parentId",
            label: 'Эцэг',
            isView: false,
            input: 'select',
            inputData: [
                {
                    id: 1,
                    label: "Улс"
                }
            ],
            relIndex: 'label',
            col: 24
        },
        {
            index: 'position',
            label: "Байрлал",
            isView: true,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'type',
            label: "Төрөл",
            isView: false,
            input: 'select',
            inputData: [{
                id: 1,
                label: 'Улс'
            }],
            relIndex: 'label',
            col: 24,
        }
    ]
    const ProviceColumn = [
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
            index: 'parentId',
            label: 'Эцэг',
            isView: true,
            input: 'select',
            inputData: country,
            relIndex: 'name',
            col: 24
        },
        {
            index: 'position',
            label: "Байрлал",
            isView: true,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'type',
            label: "Төрөл",
            isView: false,
            input: 'select',
            inputData: [{
                id: 2,
                label: 'Аймаг / Дүүрэг'
            }],
            relIndex: 'label',
            col: 24,
        }
    ]
    const TownColumn = [
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
            index: 'parentId',
            label: "Эцэг",
            isView: true,
            input: 'select',
            inputData: provice,
            relIndex: 'name',
            col: 24,
        },
        {
            index: 'position',
            label: "Байрлал",
            isView: true,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'type',
            label: "Төрөл",
            isView: false,
            input: 'select',
            inputData: [{
                id: 3,
                label: 'Сум'
            }],
            relIndex: 'label',
            col: 24,
        }
    ]
    const CountryParams = {
        type: 1,
        limit: 1,
        page: 1
    };
    const ProviceParams = {
        type: 2
    };
    const TownParams = {
        type: 3,
        page: 1,
    }
    return (
        <div className='body'>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs="12" xl={12}>
                        <UTable title={'Улс'} url={'reference/country'} params={CountryParams} column={CountryColumn} width='50%' />
                    </Col>
                    <Col xs="12" xl={12}>
                        <UTable title={'Аймаг/ Хот'} url={'reference/country'} params={ProviceParams} column={ProviceColumn} width='50%' />
                    </Col>
                    <Col xs={12} xl={12}>
                        <UTable title={'Сум / Дүүрэг'} url={'reference/country'} params={TownParams} column={TownColumn} width='50%' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default CountryDictionary;