import React from "react";

export default function LifeCondition(props) {
  return (
    <div>
      {props.data?.hasOwnProperty("homeCondition") ? (
        <>
          {props.data["homeCondition"].hasOwnProperty("locate") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Хаана амьдардаг вэ: </p>
              <p className="">
                {props.data["homeCondition"]["locate"] === "APARTMENT" &&
                  "Орон сууц"}
                {props.data["homeCondition"]["locate"] === "GER" &&
                  "Гэр хороолол"}
                {props.data["homeCondition"]["locate"] === "HOUSE" &&
                  "Хувийн орон сууц"}
              </p>
            </div>
          ) : null}
          {props.data["homeCondition"].hasOwnProperty("isMarried") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Гэрлэлтийн байдал: </p>
              <p className="">
                {props.data["homeCondition"]["isMarried"]
                  ? "Гэрлэсэн"
                  : "Гэрлээгүй"}
              </p>
            </div>
          ) : null}
        </>
      ) : null}
      {props.data?.hasOwnProperty("workCondition") ? (
        <>
          {props.data["workCondition"].hasOwnProperty("condition") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Ажлын нөхцөл: </p>
              <p className="">
                {props.data["workCondition"]["condition"] === "NORMAL" &&
                  "Энгийн"}
                {props.data["workCondition"]["condition"] === "VIPER" &&
                  "Хортой"}
                {props.data["workCondition"]["condition"] === "HARD" && "Хүнд"}
              </p>
            </div>
          ) : null}
          {props.data["workCondition"].hasOwnProperty("locate") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Хаана ямар ажил эрхэлдэг: </p>
              <p className="">{props.data["workCondition"]["locate"]}</p>
            </div>
          ) : null}
          {props.data["workCondition"].hasOwnProperty("clock") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Ажлын цаг: </p>
              <p className="">{props.data["workCondition"]["clock"]}</p>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
