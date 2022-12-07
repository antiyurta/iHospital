import { Card } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../features/authReducer";
import { Get } from "../../comman";
import PatientInformation from "../PatientInformation";
import BeforeAmbulatoryTabs from "./BeforeAmbulatoryTabs";
import { useLocation } from "react-router-dom";

function BeforeAmbulatoryDetail(props) {
  let location = useLocation();
  console.log("location", location);
  const token = useSelector(selectCurrentToken);
  const config = {
    headers: {},
    params: {},
  };

  const [selectedPatient, setSelectedPatient] = useState();
  const onSearch = async () => {
    config.params.registerNumber = location.state?.regNum;
    const response = await Get("pms/patient", token, config);
    if (response.data.length != 0) {
      setSelectedPatient(response.data[0]);
    }
  };

  useEffect(() => {
    location.state?.regNum && onSearch();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-full xl:w-1/2 p-1">
          <PatientInformation
            patient={selectedPatient}
            handlesearch={onSearch}
          />
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
            <BeforeAmbulatoryTabs
              patientId={selectedPatient?.id}
              listId={location.state?.appointmentId}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
export default BeforeAmbulatoryDetail;
