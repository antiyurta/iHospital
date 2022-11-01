import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import UTable from "../../UTable";

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Examination() {
    const token = useSelector(selectCurrentToken);
    const [examinationTypeData, setExaminationTypeData] = useState([]);

    const config = {
        headers: {},
        params: {
            type: 0,
        }
    };

    const getExaminationTypeData = async () => {
        const response = await Get("service/type", token, config);
        setExaminationTypeData(response.data);
    }

    useEffect(() => {
        getExaminationTypeData();
    }, [])
    const column = [
        {
            index: 'examinationTypeId',
            label: 'Шинэжилгээний төрөл',
            isView: false,
            input: 'select',
            inputData: examinationTypeData,
            relIndex: 'name',
            col: 21
        },
        {
            label: 'Шинэжилгээний төрөл',
            isAdd: true,
            isView: false,
            index: 'name',
            type: 0,
            subInput: 'input',
            col: 3
        },
        {
            index: "name",
            label: "Нэр",
            isView: true,
            isSearch: true,
            input: 'input',
            col: 24,
        },
        {
            index: 'hasInsurance',
            label: 'Даатгал',
            isView: true,
            isSearch: false,
            input: 'switch',
            col: 12
        },
        {
            index: 'isActive',
            label: 'Идэвхтэй эсэх',
            isView: true,
            isSearch: false,
            input: 'switch',
            col: 12
        },
        {
            index: 'price',
            label: "Үнэ",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 12
        },
        {
            index: 'inpatientPrice',
            label: 'Хэвтэн үнэ',
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 12
        }
    ]
    return (
        <Row gutter={[8, 8]}>
            <Col span={24}>
                <UTable
                    title={'Шинжилгээ'}
                    url={'service/examination'}
                    column={column}
                    isCreate={true}
                    isRead={false}
                    isUpdate={true}
                    isDelete={true}
                    width='40%' />
            </Col>
        </Row>
    )
}
export default Examination;