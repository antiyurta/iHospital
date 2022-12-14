import UTable from "../../UTable";

function DeviceAppointment() {
    const column = [
        {
            index: 'name',
            label: "Нэр",
            isView: true,
            isSearch: false,
            input: 'input',
            col: 24
        },
        {
            index: "isActive",
            label: 'Төхөөрөмж идэвхтэй эсэх',
            isView: true,
            isSearch: false,
            input: 'switch',
            col: 24
        },
        {
            index: 'startHour',
            label: "Ehleh tsag",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'startMinute',
            label: "Ehleh minute",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'endHour',
            label: "Ehleh tsag",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        },
        {
            index: 'endMinute',
            label: "Ehleh minute",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 24,
        }
    ]
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <UTable
                    title={'Device'}
                    url={'device'}
                    column={column}
                    width='60%'
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true} />
            </div>
        </div>
    )
}
export default DeviceAppointment;