import React from "react";
import UTable from "../../UTable";
function Block() {
    const column = [
        {
            index: "name",
            label: "Нэр",
            isView: true,
            input: 'input',
            col: 24,
        }
    ]
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