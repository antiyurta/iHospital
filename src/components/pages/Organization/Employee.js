import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Get } from "../../comman";

import UTable from "../../UTable";

function Employee() {

    const [degree, setDegree] = useState([]);
    const [positions, setPositions] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
    const department = {
        type: 2,
    }
    const position = {
        type: 1,
    }
    const getDegree = () => {
        Get('reference/degree')
            .then((response) => {
                setDegree(response.data.response.data);
            })
    }

    const getPosition = () => {
        Get('organization/structure', position)
            .then((response) => {
                setPositions(response.data.response.data);
            })
    }

    const getDepartment = () => {
        Get('organization/structure', department)
            .then((response) => {
                setDepartments(response.data.response.data);
            })
    }

    const getRoles = () => {
        Get('reference/role')
            .then((response) => {
                setRoles(response.data.response.data);
            })
    }

    useEffect(() => {
        getDegree();
        getPosition();
        getDepartment();
        getRoles();
    }, [])
    const column = [
        {
            index: "lastName",
            label: "Овог",
            isView: true,
            input: 'input',
            col: 12,
        },
        {
            index: "firstName",
            label: "Нэр",
            isView: true,
            input: 'input',
            col: 12,
        },
        {
            index: "registerNumber",
            label: "Регистр №",
            isView: true,
            input: 'input',
            col: 12,
        },
        {
            index: 'email',
            label: 'Email',
            isView: false,
            input: 'input',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
                {
                    type: 'email',
                    message: "Хэлбэрийн алдаа"
                },
            ],
            col: 12
        },
        {
            index: 'phoneNo',
            label: 'Утасны дугаар',
            isView: false,
            input: 'input',
            col: 12,
        },
        {
            index: 'isWorking',
            label: 'Ажилж байгаа эсэх',
            isView: true,
            input: 'switch',
            col: 12
        },
        {
            index: "homeAddress",
            label: "Гэрийн хаяг",
            isView: true,
            input: 'input',
            col: 12,
        },
        {
            index: 'appId',
            label: 'Албан Тушаал',
            isView: false,
            input: 'select',
            inputData: positions,
            relIndex: 'name',
            col: 12
        },
        {
            index: 'degreeId',
            label: 'Зэрэг',
            isView: false,
            input: 'select',
            inputData: degree,
            relIndex: 'name',
            col: 12
        },
        {
            index: 'depId',
            label: "Тасаг",
            isView: false,
            input: 'select',
            inputData: departments,
            relIndex: 'name',
            col: 12
        },
        {
            index: 'roleId',
            label: "ЖҮУЛ",
            isView: true,
            input: 'select',
            inputData: roles,
            relIndex: 'name',
            col: 24
        },
        {
            index: 'hospitalId',
            label: 'Эмнэлэг',
            isView: false,
            input: 'select',
            inputData: [
                {
                    id: 1,
                    label: 'Universal Med'
                }
            ],
            col: 24,
        },
        {
            index: 'dateInEmployment',
            label: 'Ажилд орсон огноо',
            isView: false,
            input: 'date',
            col: 12
        },
        {
            index: 'dateOutEmployment',
            label: 'Ажилаас гарсан огноо',
            isView: false,
            input: 'date',
            col: 12
        }
    ]
    const params = {
    }
    return (
        <div className='body'>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs="24" xl={24}>
                        <UTable title={'Ажилтан'} url={'organization/employee'} params={params} column={column} width='80%' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Employee;