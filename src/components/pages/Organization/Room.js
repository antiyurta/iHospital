import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import UTable from "../../UTable";

function Room() {
    const [blocks, setBlocks] = useState([]);
    const config = {
        headers: {},
        params: {}
    };
    const token = useSelector(selectCurrentToken);


    const getBlocks = async () => {
        const response = await Get('organization/block', token, config);
        setBlocks(response.data);
    }

    useEffect(() => {
        getBlocks();
    }, [])

    const column = [
        {
            index: "roomNumber",
            label: "Өрөөны дугаар",
            isView: true,
            input: 'input',
            col: 24,
        },
        {
            index: 'isInpatient',
            label: 'Хэвтэн эсэх',
            isView: true,
            input: 'switch',
            col: 24,
        },
        {
            index: 'isVip',
            label: 'VIP эсэх',
            isView: true,
            input: 'switch',
            col: 24,
        },
        {
            index: 'blockId',
            label: 'Блок',
            isView: true,
            input: 'select',
            inputData: blocks,
            relIndex: 'name',
            col: 24
        }
    ]
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <UTable title={'Өрөө'} url={'organization/room'} column={column}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true} width='30%' />
            </div>
        </div>
    )
}
export default Room;