import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import UTable from "../../UTable";

function Structure() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {
            type: 2,
        }
    }
    const [departments, setDepartments] = useState([]);
    const department = {
        params: {
            type: 2,
        }
    };
    const cabinet = {
        params: {
            type: 3,
        }
    };
    const otherDepartment = {
        params: {
            type: 0,
        }
    };
    const DepartmentColumn = [
        {
            index: 'name',
            label: 'Нэр',
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
                },
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
    ];
    const CabinetColumn = [
        {
            index: "parentId",
            label: 'Тасаг',
            isView: true,
            input: 'select',
            inputData: departments,
            relIndex: 'name',
            col: 24
        },
        {
            index: 'name',
            label: 'Нэр',
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
                    id: 3,
                    label: "Кабинет"
                },
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
    ];
    const otherDepartmentColumn = [
        {
            index: 'name',
            label: 'Нэр',
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
                    id: 0,
                    label: 'Бусад тасаг'
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
    ];
    const getDepartments = async () => {
        const response = await Get('organization/structure', token, config);
        setDepartments(response.data);
    };
    useEffect(() => {
        getDepartments();
    }, [])

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
                    title={'Кабинет'}
                    url={'organization/structure'}
                    params={cabinet}
                    column={CabinetColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='80%'
                />
            </div>
            <div className="w-full p-1">
                <UTable
                    title={'Харьяалал'}
                    url={'organization/structure'}
                    params={otherDepartment}
                    column={otherDepartmentColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='80%'
                />
            </div>
        </div>
    )
}
export default Structure;