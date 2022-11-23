import UTable from "../../UTable";

function MedicineSupport() {
    const atcParams = {
        params: {
            type: 1
        }
    };
    const medTreatmentParams = {
        params: {
            type: 2,
        }
    };
    const measurementParams = {
        params: {
            type: 3,
        }
    };
    const pregnancyWarningParams = {
        params: {
            type: 4,
        }
    };
    const atcColumn = [
        {
            index: "name",
            label: "Нэр",
            input: 'textarea',
            col: 24,
            isView: true,
            isSearch: false,
        },
        {
            index: 'type',
            label: 'Төрөл',
            isView: false,
            input: 'select',
            inputData: [
                {
                    id: 1,
                    label: "ATC"
                },
            ],
            relIndex: 'label',
            col: 24
        }
    ];
    const medTreatmentColumn = [
        {
            index: "name",
            label: "Нэр",
            input: 'textarea',
            col: 24,
            isView: true,
            isSearch: false,
        },
        {
            index: 'type',
            label: 'Төрөл',
            isView: false,
            input: 'select',
            inputData: [
                {
                    id: 2,
                    label: "эмийн эмчилгээний төрөл"
                },
            ],
            relIndex: 'label',
            col: 24
        }
    ];
    const measurementColumn = [
        {
            index: "name",
            label: "Нэр",
            input: 'textarea',
            col: 24,
            isView: true,
            isSearch: false,
        },
        {
            index: 'type',
            label: 'Төрөл',
            isView: false,
            input: 'select',
            inputData: [
                {
                    id: 3,
                    label: "Хэмжих нэгж"
                },
            ],
            relIndex: 'label',
            col: 24
        }
    ];
    const pregnancyWarningColumn = [
        {
            index: "name",
            label: "Нэр",
            input: 'textarea',
            col: 24,
            isView: true,
            isSearch: false,
        },
        {
            index: 'type',
            label: 'Төрөл',
            isView: false,
            input: 'select',
            inputData: [
                {
                    id: 4,
                    label: "Жирэмсэний сэрэжлүүлэг"
                },
            ],
            relIndex: 'label',
            col: 24
        }
    ];
    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-1">
                <UTable
                    title={'ATC ангилал'}
                    url={'medicine/reference'}
                    params={atcParams}
                    column={atcColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='30%'
                />
            </div>
            <div className="w-full md:w-1/2 p-1">
                <UTable
                    title={'эмийн эмчилгээний төрөл'}
                    url={'medicine/reference'}
                    params={medTreatmentParams}
                    column={medTreatmentColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='30%'
                />
            </div>
            <div className="w-full md:w-1/2 p-1">
                <UTable
                    title={'Хэмжих нэгж'}
                    url={'medicine/reference'}
                    params={measurementParams}
                    column={measurementColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='30%'
                />
            </div>
            <div className="w-full md:w-1/2 p-1">
                <UTable
                    title={'Жирэмсэний сэрэжлүүлэг'}
                    url={'medicine/reference'}
                    params={pregnancyWarningParams}
                    column={pregnancyWarningColumn}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='30%'
                />
            </div>
        </div>
    )
}
export default MedicineSupport;