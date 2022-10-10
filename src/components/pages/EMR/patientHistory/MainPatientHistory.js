import React, { useState } from "react";
import {
  Card,
  Col,
  Radio,
  Row,
  Collapse,
  Tabs,
  Tag,
  Table,
  Typography,
} from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import GeneralInspection from "../GeneralInspection";

export default function MainPatientHistory() {
  const { CheckableTag } = Tag;
  const [selectedTags, setSelectedTags] = useState({
    value: 0,
    label: "Төрөлт, өсөлт бойжилт",
  });
  const handleChange = (tag, checked) => {
    setSelectedTags(tag);
  };

  const tagsData = [
    { value: 0, label: "Төрөлт, өсөлт бойжилт" },
    { value: 1, label: "Өвчний түүх" },
    { value: 2, label: "Амьдралын хэв маяг" },
    { value: 3, label: "Амьдралын нөхцөл" },
    { value: 4, label: "Харшил" },
    { value: 5, label: "Эмийн хэрэглээ" },
    { value: 6, label: "Тархвар зүйн асуумж" },
    { value: 7, label: "Удамшлын асуумж" },
  ];

  const Tab1Content = (key) => {
    return (
      <div className="items-center">
        {tagsData.map((tag, index) => {
          return (
            <CheckableTag
              key={tag.value}
              checked={selectedTags.value == tag.value}
              onChange={(checked) => handleChange(tag, checked)}
              color="red"
              style={{
                backgroundColor:
                  selectedTags.value == tag.value ? "#1890ff" : "#d9d9d9",
                marginBottom: 5,
              }}
            >
              {tag.label}
            </CheckableTag>
          );
        })}
        {selectedTags.value == tagsData[0].value ? (
          <Step1 nextBtn={() => handleChange(tagsData[1])} />
        ) : null}
        {selectedTags.value == tagsData[1].value ? (
          <Step2
            nextBtn={() => handleChange(tagsData[2])}
            backBtn={() => handleChange(tagsData[0])}
          />
        ) : null}
        {selectedTags.value == tagsData[2].value ? (
          <Step3
            nextBtn={() => handleChange(tagsData[3])}
            backBtn={() => handleChange(tagsData[1])}
          />
        ) : null}
        {selectedTags.value == tagsData[3].value ? (
          <Step4
            nextBtn={() => handleChange(tagsData[4])}
            backBtn={() => handleChange(tagsData[2])}
          />
        ) : null}
        {selectedTags.value == tagsData[4].value ? (
          <Step5
            nextBtn={() => handleChange(tagsData[5])}
            backBtn={() => handleChange(tagsData[3])}
          />
        ) : null}
        {selectedTags.value == tagsData[5].value ? (
          <Step6
            nextBtn={() => handleChange(tagsData[6])}
            backBtn={() => handleChange(tagsData[4])}
          />
        ) : null}
        {selectedTags.value == tagsData[6].value ? (
          <Step7
            nextBtn={() => handleChange(tagsData[7])}
            backBtn={() => handleChange(tagsData[5])}
          />
        ) : null}
        {selectedTags.value == tagsData[7].value ? (
          <Step8
            nextBtn={() => console.log("SAVED")}
            backBtn={() => handleChange(tagsData[6])}
          />
        ) : null}
      </div>
    );
  };
  const Tab2Content = (key) => {
    return <GeneralInspection />;
  };
  const items = [
    {
      label: "Өвчтөний түүх",
      key: "item-1",
      children: <Tab1Content />,
    },
    {
      label: "Ерөнхий үзлэг",
      key: "item-2",
      children: <Tab2Content />,
    },
  ];
  return <Tabs items={items} />;
}
