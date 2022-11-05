import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import UTable from "../../UTable";
function Medicine() {

    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const [atcCategories, setAtcCategories] = useState([]);
    const [medTreatmentTypes, setMedTreatmentTypes] = useState([]);
    const [measurements, setMeasurements] = useState([]);
    const [pregnancyWarning, setPregnancyWarnings] = useState([]);


    const getAtcCategory = async () => {
        config.params.type = 1;
        const response = await Get('medicine/reference', token, config);
        setAtcCategories(response.data);
    }

    const getMedTreatmentTypes = async () => {
        config.params.type = 2;
        const response = await Get('medicine/reference', token, config);
        setMedTreatmentTypes(response.data);
    }

    const getMeasurements = async () => {
        config.params.type = 3;
        const response = await Get('medicine/reference', token, config);
        setMeasurements(response.data);
    }

    const getPregnancyWarnings = async () => {
        config.params.type = 4;
        const response = await Get('medicine/reference', token, config);
        setPregnancyWarnings(response.data);
    }

    useEffect(() => {
        getAtcCategory();
        getMedTreatmentTypes();
        getMeasurements();
        getPregnancyWarnings();
    }, [])

    const column = [
        {
            index: "code",
            label: "Код",
            isView: true,
            isSearch: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            input: 'input',
            col: 8,
        },
        {
            index: 'iName',
            label: 'О/У Нэр',
            isView: true,
            isSearch: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            input: 'input',
            col: 8,
        },
        {
            index: 'tName',
            label: 'Х/Нэр',
            isView: true,
            isSearch: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            input: 'input',
            col: 8,
        },
        {
            index: 'dayDose',
            label: 'Өдрийн тун',
            isView: true,
            isSearch: true,
            input: 'input',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            col: 12
        },
        {
            index: 'dose',
            label: 'Нэг Удаагийн тун',
            isView: true,
            isSearch: true,
            input: 'input',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            col: 12
        },
        {
            index: 'medTreatmentId',
            label: 'Эмийн хэлбэр',
            isView: true,
            isSearch: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: medTreatmentTypes,
            relIndex: 'name',
            input: 'select',
            col: 12
        },
        {
            index: 'pregnancyWarningId',
            label: "Жирэмсэний сэрэжлүүлэг",
            isView: true,
            isSearch: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: pregnancyWarning,
            relIndex: 'name',
            input: 'select',
            col: 12
        },
        {
            index: 'atcCategoryId',
            label: "ATC код",
            isView: true,
            isSearch: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: atcCategories,
            relIndex: 'name',
            input: 'select',
            col: 12
        },
        {
            index: 'measurementId',
            label: "Хэмжих нэгж",
            isView: true,
            isSearch: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: measurements,
            relIndex: "name",
            input: 'select',
            col: 12
        },
        {
            index: 'medicineType',
            label: "Эмчилгээний төрөл",
            isView: true,
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            input: 'select',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: [
                {
                    id: 1,
                    name: 'Энгийн'
                },
                {
                    id: 2,
                    name: "Сэтгэц нөлөөт"
                },
                {
                    id: 3,
                    name: "Антибиотик"
                },
                {
                    id: 4,
                    name: "Мансууруулах"
                },
                {
                    id: 5,
                    name: "Өндөр эрсдэлтэй эм"
                }
            ],
            relIndex: 'name',
            col: 12
        },
        {
            index: 'storageType',
            label: "Хадгалах нөхцал",
            isView: true,
            input: 'select',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: [
                {
                    id: 1,
                    name: 'Тасалгаанд'
                },
                {
                    id: 2,
                    name: "Тасалгаанд гэрлээс хамгаалж"
                },
                {
                    id: 3,
                    name: "Хөргөгчинд"
                },
                {
                    id: 4,
                    name: "Тугалган цаасанд ороож"
                },
            ],
            relIndex: 'name',
            col: 12
        },
        {
            index: 'usageType',
            label: "Хаана ашиглах",
            isView: true,
            input: 'select',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: [
                {
                    id: "OUT",
                    name: 'Амбултори'
                },
                {
                    id: "IN",
                    name: "Хэвтэн"
                },
                {
                    id: "DAY_TREATMENT",
                    name: "Өдрийн эмчилгээ"
                },
                {
                    id: "TRADITIONAL",
                    name: "Уламжлалт"
                },
                {
                    id: 'ALL',
                    name: "Бүгд"
                }
            ],
            relIndex: 'name',
            col: 12
        },
        {
            index: 'ageRank',
            label: "Насны ангилал",
            isView: true,
            input: 'select',
            rules: [
                {
                    required: true,
                    message: 'Хоосон байж болохгүй'
                },
            ],
            inputData: [
                {
                    id: 'HIGH',
                    name: "ИХ"
                },
                {
                    id: 'LOW',
                    name: "Бага"
                }
            ],
            relIndex: 'name',
            col: 12,
        },
        {
            index: 'isActiveMedicine',
            label: "ACTIVE",
            isView: true,
            input: 'switch',
            col: 4
        },
        {
            index: 'dayMaxDose',
            label: "Өдөр хэрэглэх дээд хэмжээ",
            isView: true,
            input: 'input',
            col: 10
        },
        {
            index: 'usageTime',
            label: "Хэрэглэх хугацаа",
            isView: true,
            input: 'input',
            col: 10
        },
    ]
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <UTable
                    title={'Эм'}
                    url={'service/medicine'}
                    column={column}
                    isCreate={true}
                    isRead={true}
                    isUpdate={true}
                    isDelete={true}
                    width='60%' />
            </div>
        </div>
    )
}
export default Medicine;