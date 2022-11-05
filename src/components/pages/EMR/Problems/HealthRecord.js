import React from "react";

export default function HealthRecord(props) {
  return (
    <div>
      {props.data?.hasOwnProperty("infection") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Халдварт өвчин: </p>
          <p className="">{props.data["infection"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("chronic") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Ужиг өвчин: </p>
          <p className="">{props.data["chronic"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("peril") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Осол гэмтэл: </p>
          <p className="">{props.data["peril"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("heartDisease") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Зүрхний архаг өвчин: </p>
          <p className="">{props.data["heartDisease"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("arterialPressure") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Артерийн даралт ихсэлт: </p>
          <p className="">{props.data["arterialPressure"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("pulmonary") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Уушгины өвчин: </p>
          <p className="">{props.data["pulmonary"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("kidnyDisease") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Бөөрний өвчин: </p>
          <p className="">{props.data["kidnyDisease"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("hepatopathy") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Элэгний өвчин: </p>
          <p className="">{props.data["hepatopathy"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("diabetes") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Чихрийн шижин: </p>
          <p className="">{props.data["diabetes"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("bloodDisease") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Цусны өвчин: </p>
          <p className="">{props.data["bloodDisease"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("phthisis") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Сүрьеэ: </p>
          <p className="">{props.data["phthisis"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("nerve") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Мэдрэл: </p>
          <p className="">{props.data["nerve"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("surgery") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Мэс засал: </p>
          <p className="">{props.data["surgery"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("turgidity") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Хавдар: </p>
          <p className="">{props.data["turgidity"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("inheritage") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Удамшил: </p>
          <p className="">{props.data["inheritage"]}</p>
        </div>
      ) : null}
      {props.data?.hasOwnProperty("other") ? (
        <div className="flex">
          <p className="font-semibold mr-2">Бусад: </p>
          <p className="">{props.data["other"]}</p>
        </div>
      ) : null}
    </div>
  );
}
