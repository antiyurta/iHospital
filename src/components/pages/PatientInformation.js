import { Col, Image, Row, Input, Avatar, Card } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import male from '../../assets/images/maleAvatar.svg';
import { selectCurrentToken } from "../../features/authReducer";

const { Search } = Input;
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function PatientInformation({ dada }) {
    const [cardLoading, setCardLoading] = useState(false);
    const [patient, setPatient] = useState([]);
    const token = useSelector(selectCurrentToken);

    const onSearch = async (value) => {
        await axios.get(DEV_URL + "pms/patient",
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "x-api-key": API_KEY
                },
                params: {
                    registerNumber: value,
                }
            })
            .then((res) => {
                setPatient(res.data.response.data);
                dada(patient);
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн мэдээлэл</h6>}
            className="header-solid max-h-max rounded-md"
            loading={cardLoading}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16, maxHeight: 200, minHeight: 200, height: 200 }}
            extra={
                <Search placeholder="Регистр хайх" onSearch={onSearch} enterButton="Хайх" />
            }
        >
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <div className="container h-48 min-h-48 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url(" + male + ")" }}>
                    </div>
                </div>
                <div className="basis-2/3">
                    <div className="container h-48 min-h-48 py-8">
                        <label style={{ alignSelf: 'center' }}>Регистр:</label>
                        <br />
                        <label style={{ width: '100%', paddingBottom: 5 }}>Овог: <b>Ширчиндэмбэрэл</b></label>
                        <br />
                        <label style={{ width: '100%', paddingBottom: 5 }}>Нэр: <b>Амарбат</b></label>
                        <br />
                        <label style={{ width: '100%' }}>Хүйс: <b>Эр</b></label>
                        <br />
                        <label style={{ width: '100%' }}>Нас: <b>25</b></label>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default PatientInformation;