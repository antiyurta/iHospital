import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";

import UTable from "../../UTable";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Structure() {
    const token = useSelector(selectCurrentToken);
    const [departments, setDepartments] = useState([]);
    const department = {
        params: {
            type: 2,
        }
    }
    const position = {
        params: {
            type: 1,
        }
    }
    const getDepartment = async () => {
        await axios.get(DEV_URL + 'organization/structure', {
            headers: {
                "Authorization": `Bearer ${token}`,
                "x-api-key": API_KEY
            },
            params: {
                type: 2,
            }
        })
            .then((response) => {
                setDepartments(response.data.response.data);
            })
    }

    useEffect(() => {
        getDepartment();
    }, [])
    const DepartmentColumn = [
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
            isView: false,
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
                    id: 2,
                    label: "Өөрөө"
                }
            ],
            relIndex: 'label',
            col: 24
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
            index: 'type',
            label: 'Төрөл',
            isView: true,
            input: 'select',
            inputData: [
                {
                    id: 1,
                    label: "Албан тушаал"
                }
            ],
            relIndex: 'label',
            col: 24
        },
        {
            index: 'position',
            label: "Байрлал",
            isView: false,
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
        <div className="flex flex-wrap">
            <div className="w-full p-1">
                <UTable
                    title={'Tасаг'}
                    url={'organization/structure'}
                    params={department}
                    column={DepartmentColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='80%'
                />
            </div>
            <div className="w-full p-1">
                <UTable
                    title={'Албан тушаал'}
                    url={'organization/structure'}
                    params={position}
                    column={positionColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='80%' />
            </div>
        </div>
    )
}
export default Structure;