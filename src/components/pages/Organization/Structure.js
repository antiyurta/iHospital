import React from "react";
import UTable from "../../UTable";

function Structure() {
    const department = {
        params: {
            type: 2,
        }
    }
    const otherDepartment = {
        params: {
            type: 0,
        }
    }
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
                },
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
    ]

    const otherDepartmentColumn = [
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
                    id: 0,
                    label: 'Бусад тасаг'
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