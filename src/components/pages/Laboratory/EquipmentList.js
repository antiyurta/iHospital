import { Badge, Button, Card } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function EquipmentList() {
    const token = useSelector(selectCurrentToken);
    const config = {
        headers: {},
        params: {}
    };
    const [equipments, setEquipments] = useState([]);
    const [dad, setDad] = useState([]);
    const getEquipments = async () => {
        const response = await Get('equipment', token, config);
        setEquipments(response.data);
    };

    const getPhoto = async (id) => {
        const response = await axios.get(DEV_URL + 'local-files/' + id, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "x-api-key": API_KEY
            }
        });
        return response;
        // return (
        //     <img src={`data:image/jpeg;base64,${response.data}`} />
        // )
    }

    useEffect(() => {
        getEquipments();
    }, []);
    return (
        <div className="flex flex-wrap">
            {
                equipments?.map((equipment, index) => {
                    return (
                        <div key={index} className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-4">
                            <Badge.Ribbon text={equipment.isActive ? "Идэвхтэй" : "Идэвхгүй"} color={equipment.isActive ? "green" : "red"}>
                                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    {/* <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={getPhoto(equipment.photoId)} alt="" /> */}
                                    <div className="flex flex-col justify-between p-6 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{equipment.equipmentNameEn}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {/* <ul className="list-outside">
                                                <li>sadsad</li>
                                                <li>sadsad</li>
                                                <li>sadsad</li>
                                                <li>sadsad</li>
                                            </ul> */}
                                        </p>
                                    </div>
                                </div>
                            </Badge.Ribbon>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default EquipmentList;