import { Card } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import PatientInformation from "../PatientInformation";
import BeforeAmbulatoryTabs from "./BeforeAmbulatoryTabs";

function BeforeAmbulatoryDetail() {
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {}
  };
  const [selectedPatient, setSelectedPatient] = useState();
  const onSearch = async (value) => {
    config.params.registerNumber = value;
    const response = await Get('pms/patient', token, config);
    if (response.data.length != 0) {
      setSelectedPatient(response.data[0]);
    }
  }
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-full xl:w-1/2 p-1">
          <PatientInformation patient={selectedPatient} handlesearch={onSearch} />
        </div>
        <div className="w-full md:w-full xl:w-1/2 p-1">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Өвчтөний түүх</h6>}
            className="header-solid h-full"
          ></Card>
        </div>
        <div className="w-full p-1">
          <Card
            bordered={false}
            title=""
            className="header-solid h-full"
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
              minHeight: 400,
              maxHeight: 600,
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <BeforeAmbulatoryTabs patientId={selectedPatient?.id} />
          </Card>
        </div>
      </div>
    </div>
  );
}
export default BeforeAmbulatoryDetail;