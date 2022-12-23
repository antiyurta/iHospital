import { Card, Pagination, Tabs } from "antd";
import Table from "react-bootstrap/Table";
import { Get, openNofi, ScrollRef } from "../../comman";
import React, { useRef, useState } from "react";
import PatientInformation from "../PatientInformation";
import { selectCurrentToken } from "../../../features/authReducer";
import { useSelector } from "react-redux";
import Appointment from "./Schedule/Appointment";
import { useEffect } from "react";
import Index from "./Doctor/Index";
const config = {
  headers: {},
  params: {},
};

function DoctorAppointment() {
  const token = useSelector(selectCurrentToken);
  const scrollRef = useRef();
  const [selectedPatient, setSelectedPatient] = useState([]);
  //
  const [notPatientsList, setNotPatientsList] = useState([]);
  const [notPatientsMeta, setNotPatientsMeta] = useState({ page: 1, limit: 10 });
  const [notPatientsValue, setNotPatientsValue] = useState("");
  //
  const onSearchSchedule = async (page, pageSize, value) => {
    if (value != undefined) {
      setNotPatientsValue(value);
    }
    const conf = {
      headers: {},
      params: {
        registerNumber: value,
        page: page,
        limit: pageSize,
      }
    }
    const response = await Get('pms/patient', token, conf);
    setNotPatientsList(response.data);
    setNotPatientsMeta(response.meta);
  };
  //
  useEffect(() => {
    ScrollRef(scrollRef);
  }, [])
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 p-1">
          <PatientInformation
            patient={selectedPatient}
            handlesearch={onSearchSchedule}
          />
        </div>
        <div className="w-full md:w-4/12 p-1">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Үйлчлүүлэгчийн Жагсаалт</h6>}
            className="header-solid max-h-max rounded-md"
            bodyStyle={{
              paddingTop: 0,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
              minHeight: 150,
              maxHeight: 150,
            }}
            extra={
              <>
                <Pagination
                  simple
                  current={notPatientsMeta.page}
                  pageSize={notPatientsMeta.limit}
                  total={notPatientsMeta.itemCount}
                  onChange={(page, pageSize) => onSearchSchedule(page, pageSize, notPatientsValue)}
                />
              </>
            }
          >
            <div className='table-responsive' id='style-8' style={{ maxHeight: '150px' }}>
              <Table className='ant-border-space' style={{ width: '100%' }}>
                <thead className="ant-table-thead bg-slate-200">
                  <tr>
                    <th className="font-bold text-sm align-middle">Картын №</th>
                    <th className="font-bold text-sm align-middle">Овог</th>
                    <th className="font-bold text-sm align-middle">Нэр</th>
                    <th className="font-bold text-sm align-middle">Регистрийн дугаар</th>
                  </tr>
                </thead>
                <tbody className='ant-table-tbody'>
                  {
                    notPatientsList.map((patient, index) => {
                      return (
                        <tr className="hover:cursor-pointer ant-table-row ant-table-row-level-0" key={index} onDoubleClick={() => setSelectedPatient(patient)}>
                          <td>{patient.cardNumber}</td>
                          <td>{patient.lastName}</td>
                          <td>{patient.firstName}</td>
                          <td>{patient.registerNumber}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-4/12 p-1">
          <Index PatientId={selectedPatient.id} />
        </div>
      </div>
      <div className="px-1">
        <Appointment selectedPatient={selectedPatient} type={1} />
      </div>
    </div>
  );
}
export default DoctorAppointment;
