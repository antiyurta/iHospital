import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import UTable from "../../UTable";

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Xray() {
    const token = useSelector(selectCurrentToken);
    const [xrayTypeData, setXrayTypeData] = useState([]);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "x-api-key": API_KEY
        },
        params: {
            page: 1,
            limit: 5,
        }
    };

    const getXrayTypeData = async () => {
        config.params.page = null;
        config.params.limit = null;
        config.params.type = 1;
        await axios.get(DEV_URL + 'service/type', config).then((response) => {
            setXrayTypeData(response.data.response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getXrayTypeData();
    }, [])
    const column = [
        {
            index: 'xrayTypeId',
            label: 'Оншилгооны төрөл',
            isView: false,
            input: 'select',
            inputData: xrayTypeData,
            relIndex: 'name',
            col: 21
        },
        {
            label: 'Оношилгоо төрөл',
            isAdd: true,
            isView: false,
            index: 'name',
            type: 1,
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
            label: 'Даатгал',
            isView: true,
            isSearch: false,
            input: 'switch',
            col: 12
        },
        {
            relation: true,
            index: ['prices', 'price'],
            label: "Үнэ",
            isView: true,
            isSearch: false,
            input: 'inputNumber',
            col: 12
        },
        {
            relation: true,
            index: ['prices', 'inpatientPrice'],
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
                    title={'Оношилгоо'}
                    url={'service/xray'}
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
export default Xray;