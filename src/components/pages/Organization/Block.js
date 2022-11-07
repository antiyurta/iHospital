import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import UTable from "../../UTable";
function Block() {
    const token = useSelector(selectCurrentToken);
    const [roomData, setRoomData] = useState([]);
    const config = {
        headers: {},
        params: {}
    };
    const getFloor = async () => {
        const response = await Get('organization/floor', token, config);
        setRoomData(response.data);
    }

    const column = [
        {
            index: "name",
            label: "Нэр",
            isView: true,
            input: 'input',
            col: 24,
        },
        {
            index: 'floorId',
            label: 'Давхар',
            isView: true,
            input: 'select',
            inputData: roomData,
            relIndex: 'name',
            col: 24
        }
    ]
    useEffect(() => {
        getFloor();
    }, [])
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <UTable title={'Блок'} url={'organization/block'} column={column} width='20%' isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true} />
            </div>
        </div>
    )
}
export default Block;