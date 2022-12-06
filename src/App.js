import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Layout/Main";
import Hospital from "./components/pages/Organization/Hospital";
import Structure from "./components/pages/Organization/Structure";
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
import Medicine from "./components/pages/service/Medicine/Medicine";
//service end
//emr start
import EMR from "./components/pages/EMR/emr";
import BeforeAmbulatoryList from "./components/pages/BeforeAmbulatory/BeforeAmbulatoryList";
import BeforeAmbulatoryDetail from "./components/pages/BeforeAmbulatory/BeforeAmbulatoryDetail";
//emr end
// inpatient HEWTENT start
import Menu from "./components/pages/reference/Menu";
import Packages from "./components/pages/service/Packages";
import Position from "./components/pages/Organization/Position";
import DoctorAppointmentScheduleDemo from "./components/pages/Appointment/DoctorAppointmentScheduleDemo";
import SetOrder from "./components/pages/service/SetOrder";
import DeviceAppointment from "./components/pages/DeviceAppointment/DeviceAppointment";
import DemoEmployee from "./components/pages/Organization/DemoEmployee";
import MainBed from "./components/pages/Bed/MainBed";
import RoomtDtl from "./components/pages/Bed/RoomDtl";
// inpatient HEWTEN end
import DemoForm2 from "./components/pages/FormBuilder/FormBuilder2";
// lab start
import EquipmentList from "./components/pages/Laboratory/EquipmentList";
import SOAPForm from "./components/pages/FormBuilder/FBuilder/SOAPForm";
import MedicineSupport from "./components/pages/service/MedicineSupport";
import Finance from "./components/pages/Finance/Finance";
import RequestAnalys from "./components/pages/Laboratory/RequestAnalys";
import PatientForm from "./components/pages/FormBuilder/FBuilder/PatientForm";
import Role from "./components/pages/Organization/Role";
import Permission from "./components/pages/Organization/Permission";
import Discount from "./components/pages/reference/Discount";
import NotFound from "./features/notFound";
import NotPermission from "./features/notPermission";
// lab end

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Main />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/notPermission" element={<NotPermission />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* lab start */}
          <Route path="/equipments" element={<EquipmentList />} />
          {/* lab end */}
          {/* finance start */}
          <Route path="/finance" element={<Finance />} />
          <Route path="/demoForm2" element={<DemoForm2 />} />
          <Route path="/role" element={<Role />} />
          <Route path="/permission" element={<Permission />} />
          <Route path="/discount" element={<Discount />} />
          {/* finance end */}
          {/* <PrivateRoute></PrivateRoute> */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/emr" element={<EMR />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/SetOrders" element={<SetOrder />} />
          <Route path="/device" element={<DeviceAppointment />} />
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
          <Route
            path="/formBuilder2"
            element={
              <PrivateRoute>
                <PatientForm />
              </PrivateRoute>
            }
          />
          <Route path="/bed_management/*" element={<MainBed />} />
          <Route path="/roomDtl" element={<RoomtDtl />} />
          <Route path="/request_analys" element={<RequestAnalys />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
