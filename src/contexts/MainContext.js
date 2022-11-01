import React, { useEffect, useState } from "react";
const MainContext = React.createContext();

export const MainStore = (props) => {
  const [painData, setPainData] = useState([
    {
      inspectionType: "pain",
      inspectionFormId: null,
      type: "",
      key: "",
      label: "",
      order: null,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);
  const [inspectionData, setInspectionData] = useState([
    {
      inspectionType: "inspection",
      inspectionFormId: null,
      type: "",
      key: "",
      label: "",
      order: null,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);
  const [questionData, setQuestionData] = useState([
    {
      inspectionType: "question",
      inspectionFormId: null,
      type: "",
      key: "",
      label: "",
      order: null,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);
  const [planData, setPlanData] = useState([
    {
      inspectionType: "plan",
      inspectionFormId: null,
      type: "",
      key: "",
      label: "",
      order: null,
      options: [
        {
          value: "",
          label: "",
        },
      ],
    },
  ]);
  useEffect(() => {}, []);

  const resetFields = () => {
    setPainData([
      {
        inspectionType: "pain",
        inspectionFormId: null,
        type: "",
        key: "",
        label: "",
        order: null,
        options: [
          {
            value: "",
            label: "",
          },
        ],
      },
    ]);
    setInspectionData([
      {
        inspectionType: "inspection",
        inspectionFormId: null,
        type: "",
        key: "",
        label: "",
        order: null,
        options: [
          {
            value: "",
            label: "",
          },
        ],
      },
    ]);
    setQuestionData([
      {
        inspectionType: "question",
        inspectionFormId: null,
        type: "",
        key: "",
        label: "",
        order: null,
        options: [
          {
            value: "",
            label: "",
          },
        ],
      },
    ]);
    setPlanData([
      {
        inspectionType: "plan",
        inspectionFormId: null,
        type: "",
        key: "",
        label: "",
        order: null,
        options: [
          {
            value: "",
            label: "",
          },
        ],
      },
    ]);
  };
  return (
    <MainContext.Provider
      value={{
        painData,
        setPainData,
        inspectionData,
        setInspectionData,
        questionData,
        setQuestionData,
        planData,
        setPlanData,
        resetFields,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
