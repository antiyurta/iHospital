import React from "react";

export default function LifeStyle(props) {
  console.log("props", props.data);
  return (
    <div>
      {props.data.hasOwnProperty("alcohol") ? (
        <>
          {props.data["alcohol"].hasOwnProperty("isUse") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Архи хэрэглэдэг эсэх: </p>
              <p className="">
                {props.data["alcohol"]["isUse"] ? "Тийм" : "Үгүй"}
              </p>
            </div>
          ) : null}
          {props.data["alcohol"].hasOwnProperty("howLong") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Хэр удаан: </p>
              <p className="">{props.data["alcohol"]["howLong"]}</p>
            </div>
          ) : null}
          {props.data["alcohol"].hasOwnProperty("whatAlc") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Ямар архи: </p>
              <p className="">{props.data["alcohol"]["whatAlc"]}</p>
            </div>
          ) : null}
          {props.data["alcohol"].hasOwnProperty("size") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Нэг удаа хэрэглэх хэмжээ: </p>
              <p className="">{props.data["alcohol"]["size"]}</p>
            </div>
          ) : null}
        </>
      ) : null}
      {props.data.hasOwnProperty("cigar") ? (
        <>
          {props.data["cigar"].hasOwnProperty("isUse") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Тамхи хэрэглэдэг эсэх: </p>
              <p className="">
                {props.data["cigar"]["isUse"] ? "Тийм" : "Үгүй"}
              </p>
            </div>
          ) : null}
          {props.data["cigar"].hasOwnProperty("fromWhen") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Хэзээнээс: </p>
              <p className="">{props.data["cigar"]["fromWhen"]}</p>
            </div>
          ) : null}
          {props.data["cigar"].hasOwnProperty("whatCigar") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Ямар тамхи: </p>
              <p className="">{props.data["cigar"]["whatCigar"]}</p>
            </div>
          ) : null}
          {props.data["cigar"].hasOwnProperty("size") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Өдөрт татдаг хэмжээ: </p>
              <p className="">{props.data["cigar"]["size"]}</p>
            </div>
          ) : null}
        </>
      ) : null}
      {props.data.hasOwnProperty("addicition") ? (
        <>
          {props.data["addicition"].hasOwnProperty("isUse") ? (
            <div className="flex">
              <p className="font-semibold mr-2">
                Ямар нэг мансууруулах бодис, эм, химийн бодис хэрэглэдэг үү /
                донтдог уу:
              </p>
              <p className="">
                {props.data["addicition"]["isUse"] ? "Тийм" : "Үгүй"}
              </p>
            </div>
          ) : null}
          {props.data["addicition"].hasOwnProperty("isLong") ? (
            <div className="flex">
              <p className="font-semibold mr-2">
                Хэрэглэхгүй удвал түүнийгээ үгүйлдэг үү/ нэхдэг үү:
              </p>
              <p className="">
                {props.data["addicition"]["isLong"] ? "Тийм" : "Үгүй"}
              </p>
            </div>
          ) : null}
        </>
      ) : null}
      {props.data.hasOwnProperty("food") ? (
        <>
          {props.data["food"].hasOwnProperty("whatFoodie") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Ямар хоолтон: </p>
              <p className="">
                {props.data["food"]["whatFoodie"] ? "Цагаан" : "Махан"}
              </p>
            </div>
          ) : null}
          {props.data["food"].hasOwnProperty("dayEatCount") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Өдөрт хэд хооллодог: </p>
              <p className="">{props.data["food"]["dayEatCount"]}</p>
            </div>
          ) : null}
          {props.data["food"].hasOwnProperty("eatFoodType") ? (
            <div className="flex">
              <p className="font-semibold mr-2">
                Ямар төрлийн хоол голдуу хэрэглэдэг:
              </p>
              <p className="">
                {props.data["food"]["eatFoodType"] ? "Шөлтэй" : "Хуурсан"}
              </p>
            </div>
          ) : null}
          {props.data["food"].hasOwnProperty("usuallyEat") ? (
            <div className="flex">
              <p className="font-semibold mr-2">Ихэвчлэн хаана хооллодог: </p>
              <p className="">
                {props.data["food"]["usuallyEat"] ? "Гадуур" : "Гэртээ"}
              </p>
            </div>
          ) : null}
        </>
      ) : null}
      {props.data.hasOwnProperty("exercise") ? (
        <>
          <div className="flex">
            <p className="font-semibold mr-2">
              Дасгал хөдөлгөөн тогтмол хийдэг үү:
            </p>
            <p className="">
              {props.data["exercise"]["isUse"] ? "Тийм" : "Үгүй"}
            </p>
          </div>
          <div className="flex">
            <p className="font-semibold mr-2">Нэг удаад ямар хугацаанд: </p>
            <p className="">{props.data["exercise"]["oneTime"]}</p>
          </div>
          <div className="flex">
            <p className="font-semibold mr-2">Долоо хоногт хэдэн удаа: </p>
            <p className="">{props.data["exercise"]["weeklyCount"]}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}
