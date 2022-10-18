import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import UTable from "../../UTable";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
function Block() {
    const token = useSelector(selectCurrentToken);
    const [roomData, setRoomData] = useState([]);
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
    const getFloor = async () => {
        await axios.get(DEV_URL + 'organization/floor', config)
            .then((response) => {
                setRoomData(response.data.response.data);
            })
            .catch(() => {
                console.log("dasd");
            })
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
        <>
            <Row gutter={[24, 0]}>
                <Col xs="24" xl={24}>
                    <UTable title={'Блок'} url={'organization/block'} column={column} width='20%' />
                </Col>
            </Row>
        </>
    )
}
export default Block;