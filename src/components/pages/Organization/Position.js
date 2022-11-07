import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import UTable from "../../UTable";

function Position() {
    const token = useSelector(selectCurrentToken);
    const position = {
        headers: {},
        params: {
            type: 2,
        }
    }
    const [departments, setDepartments] = useState([]);
    const getDepartment = async () => {
        const response = await Get('organization/structure', token, position);
        setDepartments(response.data);
    }

    useEffect(() => {
        getDepartment();
    }, [])
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
            <div className="w-full">
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
export default Position;