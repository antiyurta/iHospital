//Сувилагчийн тэмдэглэл
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";

export default function NurseNote() {
  const token = useSelector(selectCurrentToken);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DEV_URL = process.env.REACT_APP_DEV_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    getAssesment();
  }, []);

  const getAssesment = (type) => {
    //Тухайн өвчтөн дээрх ЭМЧИЙН ТЭМДЭГЛЭЛҮҮД авах
    axios({
      method: "get",
      url: `${DEV_URL}assesment`,
      params: {
        patientId: 47,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": API_KEY,
      },
    })
      .then(async (response) => {
        console.log("response getAssesment", response.data.response.data);
        setData(response.data.response.data);
      })
      .catch(function (error) {
        console.log("response error", error.response);
      });
  };
  return (
    <table className="w-full">
      <tbody>
        <tr className="">
          <th className="font-medium text-xs text-black text-center py-3.5">
            Огноо/цаг/
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Систол
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Диастол
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Жин
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Өндөр
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Халуун
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Амьсгал
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            SpO'2
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Пульс
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            <div className="whitespace-normal">Ухаан санаа</div>
          </th>
          <th className="font-medium text-xs text-black text-center border-x">
            Сувилагч
          </th>
        </tr>
        {data &&
          data.map((element, index) => (
            <tr key={index} className="">
              <td className="text-center ">
                <p className="p-1 h-7">
                  {element.createdAt?.replace(/T/, " ").replace(/\..+/, "")}
                </p>
              </td>
              <td className="text-center ">
                <p className="p-1 h-7">{element.highPressureRight}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.lowPressureRight}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.weight}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.height}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.temp}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.respiratoryRate}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.spO2}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.pulse}</p>
              </td>
              <td className="text-center">
                <p className="p-1 h-7">{element.mind}</p>
              </td>
              <td className="text-center">
                <p>Б.Намуунцэлмэг</p>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
