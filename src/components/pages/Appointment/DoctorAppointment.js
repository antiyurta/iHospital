import { Card } from "antd";
import Table from "react-bootstrap/Table";
import { Get, openNofi, ScrollRef } from "../../comman";
import React, { useRef, useState } from "react";
import PatientInformation from "../PatientInformation";
import { selectCurrentToken } from "../../../features/authReducer";
import { useSelector } from "react-redux";
import Appointment from "./Schedule/Appointment";
import { useEffect } from "react";

const config = {
  headers: {},
  params: {},
};
function DoctorAppointment() {
  const token = useSelector(selectCurrentToken);
  const scrollRef = useRef();
  const [selectedPatient, setSelectedPatient] = useState([]);
  const onSearch = async (value) => {
    config.params.registerNumber = value;
    const response = await Get("pms/patient", token, config);
    if (response.data.length != 0) {
      setSelectedPatient(response.data[0]);
    } else {
      openNofi("error", "Өвчтөн", "Өвчтөн олдохгүй байна");
    }
  };
  useEffect(() => {
    ScrollRef(scrollRef);
  }, [])
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 p-1">
          <PatientInformation
            patient={selectedPatient}
            handlesearch={onSearch}
          />
        </div>
        <div className="w-full md:w-4/12 p-1">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Үзлэгийн түүх</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
              maxHeight: 200,
              minHeight: 200,
              height: 200,
            }}
          >
            <div className="table-responsive" id="style-8" ref={scrollRef}>
              <Table className="ant-border-space">
                <thead className="ant-table-thead">
                  <tr>
                    <th>Огноо</th>
                    <th>Кабинет</th>
                    <th>Эмч</th>
                    <th>Төлбөр</th>
                    <th>Статус</th>
                  </tr>
                </thead>
              </Table>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-4/12 p-1">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Төлбөрийн мэдээлэл</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
              paddingTop: 0,
              paddingBottom: 16,
              maxHeight: 200,
              minHeight: 200,
              height: 200,
            }}
          >
            <div className="table-responsive" id="style-8" ref={scrollRef}>
              <Table className="ant-border-space">
                <thead className="ant-table-thead">
                  <tr>
                    <th>Огноо</th>
                    <th>Төрөл</th>
                    <th>Төлбөр</th>
                    <th>Ажилтан</th>
                  </tr>
                </thead>
              </Table>
            </div>
          </Card>
        </div>
      </div>
      <div className="px-1">
        <Appointment selectedPatient={selectedPatient} type={1}/>
      </div>
    </div>
  );
}
export default DoctorAppointment;
