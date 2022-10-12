import React, { useState } from "react";
import { Button } from "antd";
import { blue } from "@ant-design/colors";
import Pharma from "./Pharma";
import Examination from "./Examination";

export default function Ocs() {
  const [isModalOpenPharma, setIsModalOpenPharma] = useState(false);
  const [isModalOpenExamination, setIsModalOpenExamination] = useState(false);

  const handleOkPharma = () => setIsModalOpenPharma(false);
  const handleCancelPharma = () => setIsModalOpenPharma(false);

  const handleOkExamination = () => setIsModalOpenPharma(false);
  const handleCancelExamination = () => setIsModalOpenExamination(false);

  const showModalPharma = (el) => {
    if (el == "pharma") {
      setIsModalOpenPharma(true);
    } else if (el == "examination") {
      setIsModalOpenExamination(true);
    }
  };

  const tagsData = [
    { value: 0, label: "Өмнөх жор", code: "" },
    { value: 1, label: "Set Order", code: "" },
    { value: 2, label: "Эм", code: "pharma" },
    { value: 3, label: "Шинжилгээ", code: "examination" },
    { value: 4, label: "Оношилгоо", code: "" },
    { value: 5, label: "Мэс засал", code: "" },
    { value: 6, label: "Эмчилгээ", code: "" },
    { value: 7, label: "ЯТТ шилжүүлэх", code: "" },
    { value: 8, label: "Хэвтэн эмчлүүлэх", code: "" },
    { value: 9, label: "Давтан цаг захиалах", code: "" },
  ];
  return (
    <div className="items-center">
      {tagsData.map((el, index) => {
        return (
          <Button
            type="primary"
            size="small"
            style={{ backgroundColor: blue.primary }}
            className="mr-1 mt-1"
            key={index}
            onClick={() => showModalPharma(el.code)}
          >
            {el.label}
          </Button>
        );
      })}
      <Pharma
        open={isModalOpenPharma}
        handleOk={handleOkPharma}
        handleCancel={handleCancelPharma}
      />
      <Examination
        open={isModalOpenExamination}
        handleOk={handleOkExamination}
        handleCancel={handleCancelExamination}
      />
    </div>
  );
}
