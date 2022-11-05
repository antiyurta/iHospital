import { Col, Row } from "antd";
import React from "react";

import UTable from "../../UTable";

const column = [
    {
        index: "bedNumber",
        label: "Ор дугаар",
        isView: true,
        input: 'input',
        col: 24,
    },
    {
        index: 'roomId',
        label: 'Өрөөны дугаар',
        isView: true,
        input: 'select',
        inputData: [
            {
                id: 1,
                label: '1-Өрөө'
            },
            {
                id: 2,
                label: '2-Өрөө'
            }
        ],
        col: 24
    }
]

function Bed() {
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <UTable title={'Ор'} url={'organization/bed'} column={column} width='30%' isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true} />
            </div>
        </div>
    )
}
export default Bed;