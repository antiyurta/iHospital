import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Get } from "../../comman";

import UTable from "../../UTable";


function Structure() {
    const [hospital, setHospital] = useState([]);
    const [departments, setDepartments] = useState([]);
    const department = {
        type: 2,
    }
    const position = {
        type: 1,
    }
    const getHospital = () => {
        Get('organization/hospital')
            .then((response) => {
                setHospital(response.data.response.data);
            })
    }

    const getDepartment = () => {
        Get('organization/structure', department)
            .then((response) => {
                setDepartments(response.data.response.data);
            })
    }

    useEffect(() => {
        getHospital();
        getDepartment();
    }, [])
    const DepartmentColumn = [
        {
            index: 'hospitalId',
            label: 'Байгууллага',
            isView: true,
            input: 'select',
            inputData: hospital,
            relIndex: 'name',
            col: 24,
        },
        {
            index: 'name',
            label: 'Нэр',
            isView: true,
            input: 'input',
            col: 24,
        },
        {
            index: "shortName",
            label: 'Богино нэр',
            isView: true,
            input: 'input',
            col: 24,
        },
        {
            index: 'type',
            label: 'Төрөл',
            isView: true,
            input: 'select',
            inputData: [
                {
                    id: 2,
                    label: "Тасаг"
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
            index: "parentId",
            label: 'Эцэг',
            isView: false,
            input: 'select',
            inputData: [
                {
                    id: 1,
                    label: "Өөрөө"
                }
            ],
            relIndex: 'label',
            col: 24
        },
        {
            index: 'inspectionTime',
            label: "Үзлэгийн цаг",
            isView: true,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: "isOrder",
            label: 'Захиалга авах эсэх',
            isView: true,
            input: 'switch',
            col: 24,
        }
    ]
    const positionColumn = [
        {
            index: 'parentId',
            label: 'Тасаг',
            isView: true,
            input: 'select',
            inputData: departments,
            relIndex: 'shortName',
            col: 24,
        },
        {
            index: 'name',
            label: 'Албан тушаал',
            isView: true,
            input: 'input',
            col: 24,
        },
        {
            index: 'salary',
            label: 'Цалин',
            isView: true,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'workingHoursPerMonth',
            label: 'Сард ажиллах цаг',
            isView: true,
            input: 'inputNumber',
            col: 24,
        }
    ]
    return (
        <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
                <UTable title={'Structure'} url={'organization/structure'} params={department} column={DepartmentColumn} width='80%' />
            </Col>
            <Col xs="24" xl={24}>
                <UTable title={'Position'} url={'organization/structure'} params={position} column={positionColumn} width='80%' />
            </Col>
        </Row>
    )
}
export default Structure;