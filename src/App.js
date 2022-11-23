import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Layout/Main";
import Hospital from "./components/pages/Organization/Hospital";
import Structure from "./components/pages/Organization/Structure";
import Employee from "./components/pages/Organization/Employee";
//
import Floor from "./components/pages/Organization/Floor";
import Block from "./components/pages/Organization/Block";
import Room from "./components/pages/Organization/Room";
import Bed from "./components/pages/Organization/Bed";
//
import PaymentCloud from "./components/pages/EPayment/Payments";
//
import DoctorAppointmentSchedule from "./components/pages/Appointment/DoctorAppointmentSchedule";
import DoctorAppointment from "./components/pages/Appointment/DoctorAppointment";
//
import Patient from "./components/pages/PMS/Patient";
import Country from "./components/pages/reference/CountryDictionary";
import Degree from "./components/pages/reference/Degree";
import Directory from "./components/pages/reference/Directory";
//
import Home from "./components/Home";
import Profile from "./components/Profile";
import History from "./components/History";
import PrivateRoute from "./features/PrivateRoute";
//service start
import Examination from "./components/pages/service/Examination";
import Xray from "./components/pages/service/Xray";
import Treatment from "./components/pages/service/Treatment";
import Surgury from "./components/pages/service/Surgury";
import Medicine from "./components/pages/service/Medicine";
//service end
//emr start
import EMR from "./components/pages/EMR/emr";
import BeforeAmbulatoryList from "./components/pages/BeforeAmbulatory/BeforeAmbulatoryList";
import BeforeAmbulatoryDetail from "./components/pages/BeforeAmbulatory/BeforeAmbulatoryDetail";
//emr end
// inpatient HEWTENT start
import Demo from "./components/pages/Demo/demo";
import Menu from "./components/pages/reference/Menu";
import Report from "./components/pages/Demo/Report";
import Editor from "./components/pages/Demo/Editor";
import Packages from "./components/pages/service/Packages";
import Position from "./components/pages/Organization/Position";
import DoctorAppointmentScheduleDemo from "./components/pages/Appointment/DoctorAppointmentScheduleDemo";
import SetOrder from "./components/pages/service/SetOrder";
import DeviceAppointment from "./components/pages/DeviceAppointment/DeviceAppointment";
import DemoEmployee from "./components/pages/Organization/DemoEmployee";
import MainBed from "./components/pages/Bed/MainBed";
import RoomtDtl from "./components/pages/Bed/RoomDtl";
// inpatient HEWTEN end

// lab start
import Demo2 from "./components/pages/Demo/demo2";
import EquipmentList from "./components/pages/Laboratory/EquipmentList";
import SOAPForm from "./components/pages/FormBuilder/FBuilder/SOAPForm";
import MedicineSupport from "./components/pages/service/MedicineSupport";
import Finance from "./components/pages/Finance/Finance";
// lab end

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Main />}>
          {/* lab start */}
          <Route path="/equipments" element={<EquipmentList />} />
          {/* lab end */}
          {/* finance start */}
          <Route path="/finance" element={<Finance />} />
          {/* finance end */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/emr" element={<EMR />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/reportEditor" element={<Editor />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/SetOrders" element={<SetOrder />} />
          <Route path="/device" element={<DeviceAppointment />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/hospital"
            element={
              <PrivateRoute>
                <Hospital />
              </PrivateRoute>
            }
          />
          <Route
            path="/dpdemo"
            element={
              <PrivateRoute>
                <DoctorAppointmentScheduleDemo />
              </PrivateRoute>
            }
          />
          <Route
            path="/structure"
            element={
              <PrivateRoute>
                <Structure />
              </PrivateRoute>
            }
          />
          <Route
            path="/position"
            element={
              <PrivateRoute>
                <Position />
              </PrivateRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <PrivateRoute>
                <Employee />
              </PrivateRoute>
            }
          />
          <Route
            path="/demployee"
            element={
              <PrivateRoute>
                <DemoEmployee />
              </PrivateRoute>
            }
          />
          <Route
            path="/Floor"
            element={
              <PrivateRoute>
                <Floor />
              </PrivateRoute>
            }
          />
          <Route
            path="/Block"
            element={
              <PrivateRoute>
                <Block />
              </PrivateRoute>
            }
          />
          <Route
            path="/Room"
            element={
              <PrivateRoute>
                <Room />
              </PrivateRoute>
            }
          />
          <Route path="/Bed" element={<Bed />} />
          <Route>
            <Route
              path="/payment"
              element={
                <PrivateRoute>
                  <PaymentCloud />
                </PrivateRoute>
              }
            />
          </Route>
          <Route>
            <Route
              path="/doctorAppointmentSchedule"
              element={
                <PrivateRoute>
                  <DoctorAppointmentSchedule />
                </PrivateRoute>
              }
            />
            <Route
              path="/doctorAppointment"
              element={
                <PrivateRoute>
                  <DoctorAppointment />
                </PrivateRoute>
              }
            />
          </Route>
          <Route>
            <Route
              path="/patient"
              element={
                <PrivateRoute>
                  <Patient />
                </PrivateRoute>
              }
            />
            <Route
              path="/country"
              element={
                <PrivateRoute>
                  <Country />
                </PrivateRoute>
              }
            />
            <Route
              path="/degree"
              element={
                <PrivateRoute>
                  <Degree />
                </PrivateRoute>
              }
            />
            <Route
              path="/directory"
              element={
                <PrivateRoute>
                  <Directory />
                </PrivateRoute>
              }
            />
          </Route>
          <Route>
            <Route
              path="/examination"
              element={
                <PrivateRoute>
                  <Examination />
                </PrivateRoute>
              }
            />
            <Route
              path="/xray"
              element={
                <PrivateRoute>
                  <Xray />
                </PrivateRoute>
              }
            />
            <Route
              path="/treatment"
              element={
                <PrivateRoute>
                  <Treatment />
                </PrivateRoute>
              }
            />
            <Route
              path="/surgury"
              element={
                <PrivateRoute>
                  <Surgury />
                </PrivateRoute>
              }
            />
            <Route
              path="/medicine"
              element={
                <PrivateRoute>
                  <Medicine />
                </PrivateRoute>
              }
            />
            <Route
              path="/medicineSupport"
              element={
                <PrivateRoute>
                  <MedicineSupport />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/ambulatoryList"
            element={
              <PrivateRoute>
                <BeforeAmbulatoryList />
              </PrivateRoute>
            }
          />
          <Route
            path="/ambulatoryDetail"
            element={
              <PrivateRoute>
                <BeforeAmbulatoryDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/formBuilder"
            element={
              <PrivateRoute>
                <SOAPForm />
              </PrivateRoute>
            }
          />
          <Route path="/bed_management/*" element={<MainBed />} />
          <Route path="/roomDtl" element={<RoomtDtl />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
