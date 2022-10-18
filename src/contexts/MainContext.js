import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [planData, setPplanData] = useState([
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
        setPplanData,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
